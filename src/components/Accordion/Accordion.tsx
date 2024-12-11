import { useState } from "react";
import styles from "./Accordion.module.css";
import { NavLink } from "react-router-dom";
import cn from 'classnames';
import { Course } from "../../hooks/useFormModal";

export type HandleArchive = (id: number, newStatus: number, title: string) => Promise<void>;

interface AccordionProps {
	id: number;
	title: string;
	status: string | number;
	contentTitle: string;
	description: string;
	setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
	handleCourseUpdate: HandleArchive;
}

const Accordion: React.FC<AccordionProps> = ({ id, title, status, contentTitle, description, handleCourseUpdate  }) => {
	const [isOpen, setIsOpen] = useState(false);
	const userRole = localStorage.getItem('role');
	
	const toggleAccordion = () => setIsOpen(!isOpen);

	const hamdleHeaderClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if(!(e.target as HTMLElement).closest(`${styles['right']}`)) {
			toggleAccordion();
		}
	}

	return (
		<div className={styles['accordion']} onClick={hamdleHeaderClick}>

			<div className={styles['head']}>
				<div className={styles['left']}>
					<NavLink to={`/settings/${id}`} className={styles['title']}>{title}</NavLink>
					{userRole !== "student" && (
						<div className={styles['status']}>{status}</div>
					)}
				</div>
				<div className={styles['right']}>
					{userRole !== "student" ? (
						<>
							<NavLink to={`/settings/${id}`} className={cn(styles['accordion-btn'], styles['settings'])}>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875ZM8.125 10C8.125 8.9645 8.9645 8.125 10 8.125C11.0355 8.125 11.875 8.9645 11.875 10C11.875 11.0355 11.0355 11.875 10 11.875C8.9645 11.875 8.125 11.0355 8.125 10Z" fill="#233566"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.0415C9.41283 1.0415 8.87658 1.20283 8.29048 1.47515C7.7234 1.73864 7.06699 2.12737 6.24547 2.61388L5.6179 2.98553C4.79611 3.47219 4.13976 3.86087 3.63397 4.2327C3.11096 4.6172 2.70981 5.01076 2.41945 5.5266C2.12957 6.04162 1.99868 6.59229 1.93588 7.24572C1.87499 7.87933 1.87499 8.65525 1.875 9.62984V10.3698C1.87499 11.3444 1.87499 12.1203 1.93588 12.7539C1.99868 13.4074 2.12957 13.9581 2.41945 14.4731C2.70981 14.9889 3.11096 15.3825 3.63397 15.767C4.13976 16.1388 4.79611 16.5275 5.6179 17.0142L6.2455 17.3858C7.06698 17.8723 7.72342 18.2611 8.29048 18.5245C8.87658 18.7968 9.41283 18.9582 10 18.9582C10.5872 18.9582 11.1234 18.7968 11.7095 18.5245C12.2766 18.261 12.933 17.8723 13.7545 17.3858L14.3821 17.0142C15.2038 16.5275 15.8602 16.1388 16.366 15.767C16.8891 15.3825 17.2902 14.9889 17.5806 14.4731C17.8704 13.9581 18.0013 13.4074 18.0641 12.7539C18.125 12.1203 18.125 11.3444 18.125 10.3699V9.62984C18.125 8.65534 18.125 7.87932 18.0641 7.24572C18.0013 6.59229 17.8704 6.04162 17.5806 5.5266C17.2902 5.01076 16.8891 4.6172 16.366 4.2327C15.8602 3.86087 15.2039 3.4722 14.3821 2.98555L13.7545 2.61388C12.933 2.12736 12.2766 1.73864 11.7095 1.47515C11.1234 1.20283 10.5872 1.0415 10 1.0415ZM6.85437 3.70604C7.71032 3.19915 8.31338 2.84285 8.81725 2.60875C9.3085 2.38047 9.65892 2.2915 10 2.2915C10.3411 2.2915 10.6915 2.38047 11.1827 2.60875C11.6866 2.84285 12.2897 3.19915 13.1457 3.70604L13.7174 4.04466C14.5732 4.55148 15.1757 4.90913 15.6257 5.23984C16.0639 5.56206 16.3175 5.83105 16.4912 6.13974C16.6655 6.44924 16.7666 6.81142 16.8198 7.36529C16.8743 7.9322 16.875 8.64817 16.875 9.66125V10.3384C16.875 11.3515 16.8743 12.0675 16.8198 12.6343C16.7666 13.1883 16.6655 13.5504 16.4912 13.8599C16.3175 14.1686 16.0639 14.4376 15.6257 14.7598C15.1757 15.0906 14.5732 15.4482 13.7174 15.955L13.1457 16.2937C12.2897 16.8005 11.6866 17.1568 11.1827 17.3909C10.6915 17.6192 10.3411 17.7082 10 17.7082C9.65892 17.7082 9.3085 17.6192 8.81725 17.3909C8.31338 17.1568 7.71032 16.8005 6.85437 16.2937L6.28258 15.955C5.42675 15.4482 4.82422 15.0906 4.37436 14.7598C3.93605 14.4376 3.6825 14.1686 3.50875 13.8599C3.33454 13.5504 3.23338 13.1883 3.18015 12.6343C3.12567 12.0675 3.125 11.3515 3.125 10.3384V9.66125C3.125 8.64817 3.12567 7.9322 3.18015 7.36529C3.23338 6.81142 3.33454 6.44924 3.50875 6.13974C3.6825 5.83105 3.93605 5.56206 4.37436 5.23984C4.82422 4.90913 5.42675 4.55148 6.28258 4.04466L6.85437 3.70604Z" fill="#233566"/>
								</svg>
								<span>Настройки</span>
							</NavLink>
							{status !== "В архиве" && (
								<button className={cn(styles['accordion-btn'], styles['accordion-archived'])} onClick={(e) => {e.stopPropagation(); handleCourseUpdate(id, 3, title);}}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M3.29589 1.875C3.30828 1.87501 3.32071 1.87501 3.33318 1.87501L16.7038 1.875C17.0645 1.87496 17.3952 1.87493 17.6642 1.91109C17.9604 1.95092 18.2735 2.04463 18.531 2.30214C18.7886 2.55966 18.8823 2.87277 18.9221 3.169C18.9583 3.43801 18.9583 3.76871 18.9582 4.12939V4.20396C18.9583 4.56464 18.9583 4.89534 18.9221 5.16434C18.8823 5.46058 18.7886 5.77369 18.531 6.0312C18.2863 6.27601 17.9912 6.37278 17.7082 6.41595V10.8803C17.7082 12.4118 17.7082 13.6248 17.5806 14.5742C17.4492 15.5513 17.1724 16.342 16.5488 16.9657C15.9252 17.5893 15.1344 17.866 14.1573 17.9974C13.208 18.125 11.995 18.125 10.4635 18.125H9.53617C8.0047 18.125 6.79167 18.125 5.84232 17.9974C4.86531 17.866 4.07452 17.5893 3.45088 16.9657C2.82725 16.342 2.55048 15.5513 2.41912 14.5742C2.29149 13.6248 2.2915 12.4118 2.29151 10.8803V6.41595C2.00849 6.37278 1.71346 6.27601 1.46865 6.0312C1.21113 5.77369 1.11742 5.46058 1.0776 5.16434C1.04143 4.89534 1.04147 4.56464 1.04151 4.20397C1.04152 4.19157 1.04152 4.17914 1.04152 4.16668C1.04152 4.15421 1.04152 4.14178 1.04151 4.12939C1.04147 3.7687 1.04143 3.43801 1.0776 3.169C1.11742 2.87277 1.21113 2.55966 1.46865 2.30214C1.72617 2.04463 2.03927 1.95092 2.33551 1.91109C2.60451 1.87493 2.93521 1.87496 3.29589 1.875ZM3.54151 6.45834V10.8333C3.54151 12.4223 3.54284 13.5513 3.65798 14.4077C3.7707 15.246 3.98209 15.7291 4.33476 16.0818C4.68744 16.4344 5.17048 16.6458 6.00889 16.7585C6.86527 16.8737 7.99417 16.875 9.58317 16.875H10.4165C12.0055 16.875 13.1344 16.8737 13.9908 16.7585C14.8292 16.6458 15.3123 16.4344 15.6649 16.0818C16.0176 15.7291 16.229 15.246 16.3417 14.4077C16.4568 13.5513 16.4582 12.4223 16.4582 10.8333V6.45834H10.6248V11.7046L12.0353 10.1374C12.2662 9.88092 12.6613 9.86009 12.9179 10.091C13.1745 10.3219 13.1953 10.7171 12.9644 10.9737L10.4644 13.7514C10.3458 13.8832 10.177 13.9583 9.99984 13.9583C9.82267 13.9583 9.65384 13.8832 9.53526 13.7514L7.03529 10.9737C6.80437 10.7171 6.82517 10.3219 7.08174 10.091C7.33831 9.86009 7.73349 9.88092 7.96441 10.1374L9.37484 11.7046V6.45834H3.54151ZM16.6665 5.20834C17.077 5.20834 17.322 5.20701 17.4976 5.1834C17.5781 5.17259 17.6184 5.15984 17.6365 5.15238C17.6408 5.15064 17.6435 5.1493 17.6451 5.14846L17.6472 5.14732L17.6483 5.14529C17.6492 5.14367 17.6505 5.14091 17.6522 5.1367C17.6597 5.11855 17.6724 5.07825 17.6833 4.99779C17.7068 4.82219 17.7082 4.57718 17.7082 4.16668C17.7082 3.75617 17.7068 3.51116 17.6833 3.33556C17.6724 3.25509 17.6597 3.21479 17.6522 3.19664C17.6505 3.19244 17.6492 3.18968 17.6483 3.18807L17.6472 3.18603L17.6451 3.18489C17.6435 3.18405 17.6408 3.1827 17.6365 3.18098C17.6184 3.17351 17.5781 3.16076 17.4976 3.14994C17.322 3.12634 17.077 3.12501 16.6665 3.12501H3.33318C2.92267 3.12501 2.67766 3.12634 2.50207 3.14994C2.4216 3.16076 2.3813 3.17351 2.36315 3.18098C2.35895 3.1827 2.35618 3.18405 2.35457 3.18489L2.35254 3.18604L2.3514 3.18807C2.35056 3.18968 2.34921 3.19244 2.34748 3.19664C2.34001 3.21479 2.32727 3.25509 2.31645 3.33556C2.29284 3.51116 2.29151 3.75617 2.29151 4.16668C2.29151 4.57718 2.29284 4.82219 2.31645 4.99779C2.32727 5.07825 2.34001 5.11855 2.34748 5.1367C2.34921 5.14091 2.35056 5.14367 2.3514 5.14529L2.35254 5.14731L2.35457 5.14846C2.35618 5.1493 2.35895 5.15064 2.36315 5.15238C2.3813 5.15984 2.4216 5.17259 2.50207 5.1834C2.67766 5.20701 2.92267 5.20834 3.33318 5.20834H16.6665ZM2.35254 5.14731C2.35221 5.14697 2.35232 5.14704 2.35254 5.14731V5.14731Z" fill="#233566"/>
									</svg>
									<span>В архив</span>
								</button>
							)}
							<button className={cn(styles['accordion-btn'], styles['accordion-delete'])} onClick={(e) => {e.stopPropagation(); handleCourseUpdate(id, 4, title);}} >
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 1.0415C5.05229 1.0415 1.0415 5.05229 1.0415 9.99984C1.0415 14.9474 5.05229 18.9582 9.99984 18.9582C14.9474 18.9582 18.9582 14.9474 18.9582 9.99984C18.9582 5.05229 14.9474 1.0415 9.99984 1.0415ZM2.2915 9.99984C2.2915 5.74264 5.74264 2.2915 9.99984 2.2915C11.9036 2.2915 13.6462 2.98165 14.991 4.12539C14.9854 4.13055 14.98 4.13583 14.9746 4.14123L4.14124 14.9743C4.13581 14.9798 4.1305 14.9853 4.1253 14.9909C2.98161 13.6461 2.2915 11.9036 2.2915 9.99984ZM5.00859 15.8742C6.35344 17.018 8.09604 17.7082 9.99984 17.7082C14.257 17.7082 17.7082 14.257 17.7082 9.99984C17.7082 8.09609 17.018 6.35352 15.8743 5.00869C15.8691 5.01424 15.8638 5.01972 15.8584 5.02512L5.02512 15.8583C5.01969 15.8637 5.01417 15.869 5.00859 15.8742Z" fill="#233566"/>
								</svg>
								<span>Удалить</span>
							</button>
						</>
					) : (
						<NavLink to={`/settings/${id}`} className={cn(styles['accordion-btn'], styles['settings'])}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875ZM8.125 10C8.125 8.9645 8.9645 8.125 10 8.125C11.0355 8.125 11.875 8.9645 11.875 10C11.875 11.0355 11.0355 11.875 10 11.875C8.9645 11.875 8.125 11.0355 8.125 10Z" fill="#233566"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.0415C9.41283 1.0415 8.87658 1.20283 8.29048 1.47515C7.7234 1.73864 7.06699 2.12737 6.24547 2.61388L5.6179 2.98553C4.79611 3.47219 4.13976 3.86087 3.63397 4.2327C3.11096 4.6172 2.70981 5.01076 2.41945 5.5266C2.12957 6.04162 1.99868 6.59229 1.93588 7.24572C1.87499 7.87933 1.87499 8.65525 1.875 9.62984V10.3698C1.87499 11.3444 1.87499 12.1203 1.93588 12.7539C1.99868 13.4074 2.12957 13.9581 2.41945 14.4731C2.70981 14.9889 3.11096 15.3825 3.63397 15.767C4.13976 16.1388 4.79611 16.5275 5.6179 17.0142L6.2455 17.3858C7.06698 17.8723 7.72342 18.2611 8.29048 18.5245C8.87658 18.7968 9.41283 18.9582 10 18.9582C10.5872 18.9582 11.1234 18.7968 11.7095 18.5245C12.2766 18.261 12.933 17.8723 13.7545 17.3858L14.3821 17.0142C15.2038 16.5275 15.8602 16.1388 16.366 15.767C16.8891 15.3825 17.2902 14.9889 17.5806 14.4731C17.8704 13.9581 18.0013 13.4074 18.0641 12.7539C18.125 12.1203 18.125 11.3444 18.125 10.3699V9.62984C18.125 8.65534 18.125 7.87932 18.0641 7.24572C18.0013 6.59229 17.8704 6.04162 17.5806 5.5266C17.2902 5.01076 16.8891 4.6172 16.366 4.2327C15.8602 3.86087 15.2039 3.4722 14.3821 2.98555L13.7545 2.61388C12.933 2.12736 12.2766 1.73864 11.7095 1.47515C11.1234 1.20283 10.5872 1.0415 10 1.0415ZM6.85437 3.70604C7.71032 3.19915 8.31338 2.84285 8.81725 2.60875C9.3085 2.38047 9.65892 2.2915 10 2.2915C10.3411 2.2915 10.6915 2.38047 11.1827 2.60875C11.6866 2.84285 12.2897 3.19915 13.1457 3.70604L13.7174 4.04466C14.5732 4.55148 15.1757 4.90913 15.6257 5.23984C16.0639 5.56206 16.3175 5.83105 16.4912 6.13974C16.6655 6.44924 16.7666 6.81142 16.8198 7.36529C16.8743 7.9322 16.875 8.64817 16.875 9.66125V10.3384C16.875 11.3515 16.8743 12.0675 16.8198 12.6343C16.7666 13.1883 16.6655 13.5504 16.4912 13.8599C16.3175 14.1686 16.0639 14.4376 15.6257 14.7598C15.1757 15.0906 14.5732 15.4482 13.7174 15.955L13.1457 16.2937C12.2897 16.8005 11.6866 17.1568 11.1827 17.3909C10.6915 17.6192 10.3411 17.7082 10 17.7082C9.65892 17.7082 9.3085 17.6192 8.81725 17.3909C8.31338 17.1568 7.71032 16.8005 6.85437 16.2937L6.28258 15.955C5.42675 15.4482 4.82422 15.0906 4.37436 14.7598C3.93605 14.4376 3.6825 14.1686 3.50875 13.8599C3.33454 13.5504 3.23338 13.1883 3.18015 12.6343C3.12567 12.0675 3.125 11.3515 3.125 10.3384V9.66125C3.125 8.64817 3.12567 7.9322 3.18015 7.36529C3.23338 6.81142 3.33454 6.44924 3.50875 6.13974C3.6825 5.83105 3.93605 5.56206 4.37436 5.23984C4.82422 4.90913 5.42675 4.55148 6.28258 4.04466L6.85437 3.70604Z" fill="#233566"/>
							</svg>
							<span>Перейти к урокам</span>
						</NavLink>
					)}
					<button className={cn(styles['toggle-btn'], {[styles['active']]: isOpen})} onClick={toggleAccordion}>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.2336 7.7418L10.0002 10.9751L6.76689 7.7418C6.44189 7.4168 5.91689 7.4168 5.59189 7.7418C5.26689 8.0668 5.26689 8.5918 5.59189 8.9168L9.41689 12.7418C9.74189 13.0668 10.2669 13.0668 10.5919 12.7418L14.4169 8.9168C14.7419 8.5918 14.7419 8.0668 14.4169 7.7418C14.0919 7.42513 13.5586 7.4168 13.2336 7.7418Z" fill="#233566"/>
						</svg>
					</button>
				</div>
			</div>
			{isOpen && (
				<div className={styles['content']}>
					<div className={styles['content-title']}>{contentTitle}</div>
					<div className={styles['content-desc']}>{description}</div>
				</div>
			)}
		</div>
	);
};

export default Accordion;