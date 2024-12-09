import Input from '../../../components/Input/Input';
import Headling from '../../../components/Headling/Headling';
import styles from "./MarketplacesServices.module.css";
import MarketplaceList from "../../../components/Marketplaces/MarketplacesList/MarketplacesList";

const services = [
	{
		id: 1,
		image: '/MarketplacesList/img-1.png',
		name: 'Сергей Александрович',
		title: 'Иванов',
		services: ['Высшая математика', 'Юридическая консультация', 'Бухгалтерия'],
		additionalServices: 2,
		price: '600 ₽'
	},
    {
        id: 2,
        image: "/MarketplacesList/img-2.png",
        name: "Анастасия Геннадьевна",
        title: "Савватеева",
        services: ["Дизайн", "Маркетинг", "Креатив"],
        additionalServices: 1,
        price: "600 ₽",
    },
    {
        id: 3,
        image: "/MarketplacesList/img-3.png",
        name: "Александр Владимирович",
        title: "Кожевников",
        services: [
            "Финансовый платёжный эксперт",
            "Автоматизация процессов",
            "Эквайринг, онлайн-касса",
        ],
        price: "600 ₽",
    },
	{
		id: 4,
		image: '/MarketplacesList/img-1.png',
		name: 'Сергей Александрович',
		title: 'Иванов',
		services: ['Высшая математика', 'Юридическая консультация', 'Бухгалтерия'],
		additionalServices: 2,
		price: '600 ₽'
	},
    {
        id: 5,
        image: "/MarketplacesList/img-2.png",
        name: "Анастасия Геннадьевна",
        title: "Савватеева",
        services: ["Дизайн", "Маркетинг", "Креатив"],
        additionalServices: 1,
        price: "600 ₽",
    },
    {
        id: 6,
        image: "/MarketplacesList/img-3.png",
        name: "Александр Владимирович",
        title: "Кожевников",
        services: [
            "Финансовый платёжный эксперт",
            "Автоматизация процессов",
            "Эквайринг, онлайн-касса",
        ],
        price: "600 ₽",
    },
	{
		id: 7,
		image: '/MarketplacesList/img-1.png',
		name: 'Сергей Александрович',
		title: 'Иванов',
		services: ['Высшая математика', 'Юридическая консультация', 'Бухгалтерия'],
		additionalServices: 2,
		price: '600 ₽'
	},
    {
        id: 8,
        image: "/MarketplacesList/img-2.png",
        name: "Анастасия Геннадьевна",
        title: "Савватеева",
        services: ["Дизайн", "Маркетинг", "Креатив"],
        additionalServices: 1,
        price: "600 ₽",
    },
    {
        id: 9,
        image: "/MarketplacesList/img-3.png",
        name: "Александр Владимирович",
        title: "Кожевников",
        services: [
            "Финансовый платёжный эксперт",
            "Автоматизация процессов",
            "Эквайринг, онлайн-касса",
        ],
        price: "600 ₽",
    },
];

const MarketplacesServices = () => {
	return(
		<div className={styles['page']}>
			<Headling appearance='big'>Маркетплейс услуг</Headling>
			<div className={styles['search']}>
				<Input 
					className={styles['search-input']}
					type='text'
					name='search'
					placeholder='Например, «Юридическая консультация»'
				/>
				<button className={styles['search-btn']}>
					<span>Найти</span>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.8229 12.9729L12.1288 11.2847C13.0472 10.1501 13.4952 8.70628 13.3805 7.25105C13.2657 5.79582 12.5969 4.4401 11.512 3.46345C10.4271 2.4868 9.00883 1.96368 7.54958 2.00196C6.09034 2.04025 4.70141 2.63702 3.66922 3.66922C2.63702 4.70141 2.04025 6.09034 2.00196 7.54958C1.96368 9.00883 2.4868 10.4271 3.46345 11.512C4.4401 12.5969 5.79582 13.2657 7.25105 13.3805C8.70628 13.4952 10.1501 13.0472 11.2847 12.1288L12.9729 13.8229C13.0285 13.879 13.0947 13.9236 13.1677 13.954C13.2406 13.9844 13.3189 14 13.3979 14C13.4769 14 13.5552 13.9844 13.6281 13.954C13.7011 13.9236 13.7673 13.879 13.8229 13.8229C13.879 13.7673 13.9236 13.7011 13.954 13.6281C13.9844 13.5552 14 13.4769 14 13.3979C14 13.3189 13.9844 13.2406 13.954 13.1677C13.9236 13.0947 13.879 13.0285 13.8229 12.9729ZM3.22101 7.71081C3.22101 6.82281 3.48433 5.95475 3.97768 5.21641C4.47102 4.47807 5.17223 3.9026 5.99264 3.56278C6.81304 3.22295 7.71579 3.13404 8.58673 3.30728C9.45766 3.48052 10.2577 3.90813 10.8856 4.53604C11.5135 5.16395 11.9411 5.96396 12.1143 6.83489C12.2876 7.70583 12.1987 8.60858 11.8588 9.42898C11.519 10.2494 10.9436 10.9506 10.2052 11.4439C9.46687 11.9373 8.59881 12.2006 7.71081 12.2006C6.52004 12.2006 5.37804 11.7276 4.53604 10.8856C3.69404 10.0436 3.22101 8.90158 3.22101 7.71081Z" fill="white" />
					</svg>
				</button>
			</div>
			
			<MarketplaceList services={services} />
		</div>
	)
}

export default MarketplacesServices;