'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/ApiData.module.css';

export default function ApiDataPage() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://api.adviceslip.com/advice');
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await res.json();
        setQuote(data.slip);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchQuote();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!quote) return <p>Failed to load data.</p>;

  return (
    <div className={styles.apiData}>
      <h1>Random Advice</h1>
      <blockquote>
        <p>{quote.advice}</p>
      </blockquote>
    </div>
  );
}
