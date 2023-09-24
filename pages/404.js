import React, { useEffect, useState } from 'react';
import styles from '../styles/NotFound.module.css'; 
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      const redirectTimer = setTimeout(() => {
        router.push('/');
      }, 1000);

      return () => clearTimeout(redirectTimer);
    }
  }, [router, countdown]);

  return (
    <div className={`${styles.notFoundContainer} ${styles.blackBackground}`}>
      <h1 className={`${styles.h1Style} ${styles.whiteText}`}>404</h1>
      
      <p className={`${styles.pStyle} ${styles.whiteText}`}>This page could not be found</p>
      <div className={styles.h2Style}>
        <h2 className={styles.whiteText}>Sorry, the page you are looking for does not exist.</h2>
      </div>
      <button
        className={`${styles.buttonStyle} ${styles.yellowButton}`}
        onClick={() => router.push('/')}
      >
        Go Back to Main Menu
      </button>
      {countdown > 0 && <p className={styles.redirectText}>Redirecting in {countdown} seconds...</p>}
    </div>
  );
};

export default NotFound;
