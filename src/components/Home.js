/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h4> Welcome to our page</h4>
      <p>
        "Good Christians should beware of mathematicians and
        of all those who are used to making prophecies, even when these
        prophecies are fulfilled, because there is a danger that mathematicians
        have made a pact with the devil to cloud the spirit and plunge men into
        hell.».
        San Agustin
      </p>
    </div>
  );
}

export default Home;
