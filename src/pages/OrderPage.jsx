// src/pages/OrderPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// این دو تابع را از Firebase Firestore SDK اضافه کنید:
import { collection, addDoc } from "firebase/firestore";
// 'db' را از فایل پیکربندی Firebase خود وارد کنید:
import { db } from '../firebaseConfig';
import styles from './OrderPage.module.css';

function OrderPage() {
  const { planId } = useParams(); // دریافت planId از URL
  const navigate = useNavigate(); // برای هدایت کاربر بعد از ارسال موفق

  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    projectName: '', // نام وب‌سایت مد نظر
    projectDescription: '', // توضیحات پروژه
    selectedPlan: '', // این رو از planId پر می‌کنیم
  });
  const [loading, setLoading] = useState(false); // برای نشان دادن وضعیت ارسال
  const [error, setError] = useState(null); // برای مدیریت خطاها

  // اطلاعات پلن‌ها (اینجا ثابت تعریف شده، می‌توانید آن را از جایی دیگر بگیرید)
  const allPlans = [
    { id: 'basic', name: 'پلن پایه' },
    { id: 'advanced', name: 'پلن پیشرفته' },
    { id: 'enterprise', name: 'پلن سازمانی' },
    { id: 'custom', name: 'پلن سفارشی' },
  ];

  // useEffect برای تنظیم نام پلن انتخاب شده بر اساس planId از URL
  useEffect(() => {
    const foundPlan = allPlans.find(p => p.id === planId);
    if (foundPlan) {
      setFormData(prev => ({ ...prev, selectedPlan: foundPlan.name }));
    } else {
      // اگر planId نامعتبر بود، کاربر را به صفحه خدمات برگردانید
      navigate('/services');
    }
  }, [planId, navigate]); // وابستگی‌ها: هر وقت planId یا navigate تغییر کرد، این اثر اجرا شود

  // تابع برای مدیریت تغییرات در فیلدهای فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // تابع برای مدیریت ارسال فرم به Firestore
  const handleSubmit = async (e) => { // تابع را async کنید تا بتوانیم از await استفاده کنیم
    e.preventDefault(); // از رفرش شدن صفحه جلوگیری کنید
    setLoading(true); // لودینگ را فعال کنید
    setError(null); // خطاهای قبلی را پاک کنید

    try {
      // اضافه کردن تاریخ و زمان ثبت سفارش و وضعیت اولیه
      const orderDataWithTimestamp = {
        ...formData,
        orderDate: new Date().toISOString(), // تاریخ و زمان فعلی در فرمت ISO (مناسب برای دیتابیس)
        status: 'pending', // وضعیت اولیه سفارش (مثلاً: در انتظار، در حال بررسی)
      };

      // ارسال اطلاعات به مجموعه 'orders' در Firestore
      // collection(db, "orders") به Firestore میگه که ما میخواهیم به مجموعه 'orders' دسترسی پیدا کنیم
      // addDoc() یک سند جدید با یک شناسه خودکار ایجاد میکنه
      const docRef = await addDoc(collection(db, "orders"), orderDataWithTimestamp);
      console.log("Document written with ID: ", docRef.id); // شناسه سند ایجاد شده رو در کنسول لاگ کنید

      alert('سفارش شما با موفقیت ثبت شد!'); // پیام موفقیت به کاربر
      navigate('/'); // کاربر را به صفحه اصلی هدایت کنید (می‌تواند به صفحه تشکر تغییر کند)
    } catch (e) {
      console.error("Error adding document: ", e); // لاگ کردن خطا در کنسول
      setError('مشکلی در ثبت سفارش پیش آمد. لطفا دوباره تلاش کنید.'); // نمایش پیام خطا به کاربر
    } finally {
      setLoading(false); // لودینگ را غیرفعال کنید، چه موفقیت‌آمیز باشد چه با خطا
    }
  };

  return (
    <div className={styles.orderContainer}>
      <h1 className={styles.pageTitle}>ثبت سفارش طراحی وب‌سایت</h1>
      {formData.selectedPlan && ( // نمایش نام پلن انتخاب شده
        <p className={styles.selectedPlanInfo}>
          شما در حال ثبت سفارش برای: <strong>{formData.selectedPlan}</strong> هستید.
        </p>
      )}
      <form onSubmit={handleSubmit} className={styles.orderForm}>
        <div className={styles.formGroup}>
          <label htmlFor="customerName">نام و نام خانوادگی:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required // اجباری کردن فیلد
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="customerPhone">شماره تماس:</label>
          <input
            type="tel" // نوع 'tel' برای شماره تماس
            id="customerPhone"
            name="customerPhone"
            value={formData.customerPhone}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="customerEmail">ایمیل:</label>
          <input
            type="email" // نوع 'email' برای ایمیل
            id="customerEmail"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="projectName">نام وب‌سایت مد نظر (اختیاری):</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="projectDescription">توضیحات مختصر پروژه:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            rows="5" // تعداد ردیف‌ها
            required
            className={styles.formTextarea}
          ></textarea>
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>} {/* نمایش پیام خطا اگر وجود دارد */}
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'در حال ارسال...' : 'ارسال سفارش'} {/* تغییر متن دکمه هنگام ارسال */}
        </button>
      </form>
    </div>
  );
}

export default OrderPage;