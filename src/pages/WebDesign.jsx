// src/pages/WebDesign.js
import React from 'react';
import PlanCard from '../components/plancard/PlanCard'; // این رو در ادامه می‌سازیم
import styles from './WebDesign.module.css'; // فایل CSS Module برای این صفحه

const plans = [
  {
    id: 'basic',
    name: 'پلن پایه',
    price: '5,000,000 تومان',
    features: [
      'طراحی 5 صفحه',
      'یک سال هاست و دامنه رایگان',
      'پشتیبانی 3 ماهه',
      'فرم تماس',
    ],
  },
  {
    id: 'advanced',
    name: 'پلن پیشرفته',
    price: '10,000,000 تومان',
    features: [
      'طراحی 10 صفحه',
      'دو سال هاست و دامنه رایگان',
      'پشتیبانی 6 ماهه',
      'پنل مدیریت محتوا (CMS)',
      'سئوی اولیه',
    ],
  },
  {
    id: 'enterprise',
    name: 'پلن سازمانی',
    price: '20,000,000 تومان',
    features: [
      'طراحی نامحدود صفحه',
      'سه سال هاست و دامنه رایگان',
      'پشتیبانی یک ساله',
      'پنل مدیریت محتوا اختصاصی',
      'سئوی حرفه‌ای',
      'امکانات اختصاصی',
    ],
  },
  {
    id: 'custom',
    name: 'پلن سفارشی',
    price: 'تماس بگیرید',
    features: [
      'طراحی کاملا اختصاصی',
      'مشاوره تخصصی',
      'پشتیبانی بلندمدت',
      'توسعه ماژول‌های خاص',
      'مناسب پروژه‌های بزرگ',
    ],
  },
];

function WebDesign() {
  return (
    <div className={styles.webDesignContainer}>
      <h1 className={styles.pageTitle}>خدمات طراحی وب‌سایت</h1>
      <p className={styles.pageDescription}>
        ما پلن‌های متنوعی را برای نیازهای مختلف کسب و کار شما ارائه می‌دهیم.
      </p>
      <div className={styles.plansGrid}>
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default WebDesign;