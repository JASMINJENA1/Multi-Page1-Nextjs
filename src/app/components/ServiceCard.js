import Link from 'next/link';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <Link href={`/services/${service.id}`}>
        <button>Learn More</button>
      </Link>
    </div>
  );
};

export default ServiceCard;
