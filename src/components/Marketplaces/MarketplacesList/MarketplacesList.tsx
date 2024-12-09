import MarketplaceCard from "../MarketplacesCard/MarketplacesCard";
import styles from "./MarketplacesList.module.css";

interface MarketplacesProps {
	id: number;
	image: string;
	name: string;
	title: string;
	services: string[];
	additionalServices?: number;
	price: string;
}

interface MarketplacesListProps {
	services: MarketplacesProps[];
}

const MarketplaceList: React.FC<MarketplacesListProps> = ({ services }) => {
	return (
		<div className={styles['grid']}>
			{services.map((service) => (
				<MarketplaceCard
					key={service.id}
					image={service.image}
					name={service.name}
					title={service.title}
					services={service.services}
					additionalServices={service.additionalServices}
					price={service.price}
					onSelect={() => alert(`Вы выбрали услугу: ${service.title}`)}
				/>
			))}
		</div>
	);
};

export default MarketplaceList;