import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import styles from './styles/Home.module.css';
export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build responsive and modern websites.',
      
    },
    {
      id: 2,
      title: 'App Development',
      description: 'Create custom mobile applications for all platforms.',
      
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Boost your website ranking with SEO best practices.',
      
    },
  ];
  return (
    <main className={styles.main}>
      <Hero />
      
      {/* Services Section */}
      <section className={styles.serviceSection}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* About Section with Parallax */}
      <section className={styles.aboutSection}>
        <div className={styles.overlay}>
          <h2>Who We Are</h2>
          <p>
            At ByteUp, we are dedicated to crafting innovative digital solutions tailored
            to your needs. From web development to design, we’ve got you covered!
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Transform Your Ideas?</h2>
        <p>
          Contact us today and let’s create something amazing together!
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>

      <section style={{ padding: '20px', textAlign:'center' }}>
        <h2>Explore More</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Our Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </section>
    </main>

      
    
  );
}
