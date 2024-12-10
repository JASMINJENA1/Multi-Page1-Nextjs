import styles from '../styles/Contact.module.css';
import Image from 'next/image';


export default function Contact() {
  return (
    <div className={styles.contact}>
      <Image src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" height={229}/>
      <h1 class="opacity">Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
