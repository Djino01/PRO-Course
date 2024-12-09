import Button from "../../Button/Button";
import styles from "./MarketplacesCard.module.css";

interface MarketplacesCardProps {
	image: string;
	name: string;
	title: string;
	services: string[];
	additionalServices?: number;
	price: string;
	onSelect: () => void;
}

const MarketplaceCard: React.FC<MarketplacesCardProps> = ({
	image,
	name,
	title,
	services,
	additionalServices,
	price,
	onSelect,
}) => {
	return (
		<div className={styles['card']}>
			<div className={styles['card-top']}>
				<div className={styles['top']}>
					<div className={styles['img']}>
						<img src={image} alt={name} />
					</div>
					<div className={styles['top-info']}>
						<div className={styles['title']}>{title}</div>
						<div className={styles['name']}>{name}</div>
					</div>
				</div>
				<div className={styles['services']}>
					{services.slice(0, 3).map((service, index) => (
						<div key={index} className={styles['services-items']}>{service}</div>
					))}
					{additionalServices && (
						<div className={styles['card-move']}>ещё <span>{additionalServices} услуга</span></div>
					)}
				</div>
			</div>
			<div className={styles['card-bottom']}>
				<div className={styles['price']}>{price}</div>
				<Button className={styles['btn']} appearance="big" onClick={onSelect}>
					<span>Выбрать услугу</span>
					<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.36004 4.47319C7.10004 4.73319 7.10004 5.15319 7.36004 5.41319L9.94671 7.99985L7.36004 10.5865C7.10004 10.8465 7.10004 11.2665 7.36004 11.5265C7.62004 11.7865 8.04004 11.7865 8.30004 11.5265L11.36 8.46652C11.62 8.20652 11.62 7.78652 11.36 7.52652L8.30004 4.46652C8.04671 4.21319 7.62004 4.21319 7.36004 4.47319Z" fill="white" />
					</svg>
				</Button>
			</div>
		</div>
	);
};

export default MarketplaceCard;

