// src/components/planCard/PlanCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PlanCard.module.css'; // فایل CSS Module برای کارت هر پلن

function PlanCard({ plan }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.planName}>{plan.name}</h2>
      <p className={styles.planPrice}>{plan.price}</p>
      <ul className={styles.featuresList}>
        {plan.features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
      <Link to={`/order/${plan.id}`} className={styles.orderButton}>
        ثبت سفارش
      </Link>
    </div>
  );
}

export default PlanCard;