// src/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth"; // این خط جدید را اضافه کنید (برای احراز هویت ناشناس)

// Your web app's Firebase configuration (این قسمت را با اطلاعات واقعی پروژه خود جایگزین کنید)
const firebaseConfig = {
  apiKey: "AIzaSyAPl3aXOZ3o0GdMbFLF5Ogt_JueZ6eQiac", // اینها را با اطلاعات واقعی خود از کنسول Firebase جایگزین کنید
  authDomain: "webtrb1999.firebaseapp.com",
  projectId: "webtrb1999", // این همان webtrb1999 است که در تصویر دیدم
  storageBucket: "webtrb1999.firebasestorage.app",
  messagingSenderId: "611228265713",
  appId: "1:611228265713:web:757e1bb67d1c653dbe4d50",
  measurementId: "G-M7NQL7L8VM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // دریافت سرویس Firestore Database
const auth = getAuth(app); // دریافت سرویس Authentication

// بلافاصله بعد از راه‌اندازی Firebase، تلاش برای ورود ناشناس را انجام دهید
// این اطمینان حاصل می‌کند که یک کاربر احراز هویت شده (حتی ناشناس) برای Firestore وجود دارد
signInAnonymously(auth)
  .then(() => {
    console.log("Anonymous sign-in successful!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Anonymous sign-in failed:", errorCode, errorMessage);
  });

export { db }; // db را export کنید تا در OrderPage قابل استفاده باشد
