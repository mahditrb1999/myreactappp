// src/components/services/ServicePlanSection.jsx
import React from 'react';
import styles from './ServicePlanSection.module.css';

const ServicePlanSection = ({ plan }) => {
  return (
    <div className={styles.planCard}>
      {/* آیکون پلن */}
      {plan.icon && <img src={plan.icon} alt={`${plan.name} Icon`} className={styles.planIcon} />}
      
      <h3 className={styles.planTitle}>{plan.name}</h3>
      <p className={styles.planDescription}>{plan.description}</p>
      
      <div className={styles.priceContainer}>
        <span className={styles.planPrice} style={{ color: plan.themeColor }}>{plan.price}</span>
      </div>
      
      <ul className={styles.planFeatures}>
        {plan.features.map((feature, index) => (
          <li key={index}>
            <svg className={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <a href={plan.buttonLink} className={styles.planButton} style={{ backgroundColor: plan.themeColor, color: (plan.themeColor === '#eff15b' ? '#222' : 'white') }}>
        {plan.buttonText}
      </a>
    </div>
  );
};

export default ServicePlanSection;