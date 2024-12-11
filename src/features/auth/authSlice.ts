import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {sendSms, verifyCode } from '../../helpers/API';

export interface AuthState {
    isAuthenticated: boolean;
    isCodeSent: boolean;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
	userRole: 'Пользователь' | 'Админ';
}

const initialState: AuthState = {
	isAuthenticated: !!localStorage.getItem('token'),
	isCodeSent: false,
	token: localStorage.getItem('token'),
	status: 'idle',
	error: null,
	userRole: 'Пользователь'
};

export interface ApiError {
    error: {
        code: string;
    };
}

export const sendSmsCode = createAsyncThunk(
	'auth/sendSmsCode',
	async ({ phone, isAdmin }: { phone: string; isAdmin: boolean}, { rejectWithValue }) => {
		try {
			await sendSms(phone, isAdmin);
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);

export const verifySmsCode = createAsyncThunk(
	'auth/verifySmsCode',
	async ({ phone, code }: { phone: string; code: string }, { rejectWithValue  }) => {
		try {
			const { token } = await verifyCode(phone, code);
			localStorage.setItem('token', token);
			return token;
		} catch (error: unknown) {
			// return rejectWithValue ((error as Error).message);
			if (typeof error === 'object' && error !== null && 'error' in error) {
                return rejectWithValue(error as ApiError); // Указываем точный тип ошибки
            }
            throw new Error('Неизвестная ошибка');
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetAuth: (state) => {
			state.isAuthenticated = false;
			state.isCodeSent = false;
			state.token = null;
			state.userRole = 'Пользователь';
			state.status = 'idle';
			state.error = null;
			localStorage.removeItem('token');
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(sendSmsCode.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(sendSmsCode.fulfilled, (state) => {
				state.status = 'succeeded';
				state.isCodeSent = true;
			})
			.addCase(sendSmsCode.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			})
			.addCase(verifySmsCode.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(verifySmsCode.fulfilled, (state, action: PayloadAction<string>) => {
				state.status = 'succeeded';
				state.isAuthenticated = true;
				state.token = action.payload;
			})
			.addCase(verifySmsCode.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			});
	},
});

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;

