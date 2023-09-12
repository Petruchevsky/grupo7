import React from 'react';
import styles from './spinnerG7.module.css';

const SpinnerG7 = () => {
  return (
<div className={styles.coinContainer}>
      <div className={styles.coin}>
        <div className={styles.side1}>
          <img src="/img/logo-redondo.png" alt="Logo de la empresa" />
        </div>
        <div className={styles.side2}>
          <img src="/img/logo-redondo-oro.png" alt="Otro lado del Logo" />
        </div>
      </div>
</div>
  );
};

export default SpinnerG7;
