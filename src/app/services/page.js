import Link from 'next/link';

const services = [
  { id: 1, title: 'Web Development', description: 'Build responsive and scalable websites.' },
  { id: 2, title: 'Mobile Apps', description: 'Create cross-platform mobile applications.' },
  { id: 3, title: 'SEO Optimization', description: 'Improve your website’s search engine ranking.' },
];

export default function Services() {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link href={`/services/${service.id}`}>Learn More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
