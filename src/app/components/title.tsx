import React from 'react';
import styles from '../styles/title.module.css';

const Title: React.FC<{
    title: string;
    tagLine: string;
}> = ({ title, tagLine }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.tagLine}>{tagLine}</p>
    </div>
  );
};

export default Title;
