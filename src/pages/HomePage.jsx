// src/pages/HomePage.jsx
import React from 'react';
// ایمپورت کامپوننت‌های بخش اصلی صفحه (مسیرها را بر اساس جایگاه HomePage.jsx تنظیم کنید)
import Hero from '../components/hero/Hero';
import NomineesSection from '../components/firstpart/NomineesSection';
import WavyDivider from '../components/svg/WavyDivider';
import WavyDividerInverted from '../components/svg/WavyDividerInverted'; // این رو هم اضافه کنید
import ImgRight from '../components/imgright/ImgRight';
import ImgLeft from '../components/imgleft/ImgLeft'; // مسیر ImgLeft اصلاح شده نسبت به HomePage.jsx
import FAQSection from '../components/faq/FAQSection';
import CallToActionSection from '../components/cta/CallToActionSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <NomineesSection /> {/* این همون کامپوننت سه تا باکس شماست */}

      {/* بخش طراحی سایت اختصاصی (ImgRight) */}
      <WavyDivider /> {/* جداکننده موج رو به بالا */}
      <ImgRight
        id="design-section" // ID برای اسکرول از NomineesSection
        heading="طراحی سایت اختصاصی: هویت منحصر به فرد شما در دنیای دیجیتال"
        paragraph="در دنیای پررقابت امروز، داشتن یک وب‌سایت صرفاً یک ضرورت نیست، بلکه بازتابی از هویت و ارزش‌های کسب‌وکار شماست. طراحی سایت اختصاصی به شما این امکان را می‌دهد که فراتر از قالب‌های آماده، پلتفرمی کاملاً متناسب با نیازهای منحصربه‌فرد، اهداف تجاری و برندینگ خاص خود داشته باشید. با یک طراحی سفارشی، شما کنترل کاملی بر جزئیات بصری، تجربه کاربری (UX) و قابلیت‌های فنی وب‌سایت خود خواهید داشت؛ این امر به شما کمک می‌کند تا نه تنها از رقبای خود متمایز شوید، بلکه بستری بهینه برای جذب مشتریان ایده‌آل و دستیابی به اهدافتان در فضای آنلاین ایجاد کنید. یک وب‌سایت اختصاصی، سرمایه‌گذاری برای آینده و تضمینی برای برجسته‌سازی کسب‌وکار شما در میان انبوهی از رقبا است."
        buttonText="مشاوره رایگان طراحی سایت"
        buttonLink="/contact"
        imageUrl="/pics/website.png" // مسیر عکس از public
        imageAlt="تصویر طراحی سایت اختصاصی با لوگوی TRBDEV"
      />

      {/* بخش خدمات سئو (ImgLeft) */}
      <WavyDividerInverted /> {/* <--- اینجا WavyDividerInverted اضافه شد */}
      <ImgLeft
        id="seo-section" // ID برای اسکرول از NomineesSection
        heading="خدمات جامع سئو برای دیده شدن کسب و کار شما"
        paragraph="تیم متخصص سئو ما با به‌کارگیری جدیدترین متدها و الگوریتم‌ها، رتبه وب‌سایت شما را در موتورهای جستجو به طور چشمگیری بهبود می‌بخشد. از تحقیق کلمات کلیدی تا بهینه‌سازی فنی و ساخت بک‌لینک‌های معتبر، ما حضور آنلاین شما را قدرتمندتر می‌کنیم و ترافیک هدفمند بیشتری را جذب می‌کنیم."
        buttonText="مشاوره رایگان سئو"
        buttonLink="/contact"
        imageUrl="/pics/seo.png" // مسیر عکس از public
        imageAlt="نمودار بهینه‌سازی سئو"
      />

      {/* بخش وردپرس (ImgRight) */}
      <WavyDivider /> {/* جداکننده موج رو به بالا */}
      <ImgRight
        id="wordpress-section" // ID برای اسکرول از NomineesSection
        heading="چرا وردپرس بهترین انتخاب برای وب‌سایت شماست؟"
        paragraph="وردپرس یک سیستم مدیریت محتوای (CMS) قدرتمند و انعطاف‌پذیر است که به شما امکان می‌دهد بدون نیاز به دانش برنامه‌نویسی پیچیده، وب‌سایتی حرفه‌ای و کاربردی ایجاد کنید. با کاربری آسان، هزاران قالب آماده برای هر نوع کسب‌وکاری، و پلاگین‌های متنوع برای افزودن هر قابلیتی که نیاز دارید (از سئو و فروشگاه آنلاین گرفته تا فرم‌های تماس و امنیت)، وردپرس به شما کمک می‌کند تا حضور آنلاین خود را به بهترین شکل ممکن بسازید و مدیریت کنید. این پلتفرم با قابلیت سئو فرندلی بالا و جامعه کاربری بزرگ و فعال، انتخابی هوشمندانه برای رشد کسب‌وکار شما در فضای دیجیتال است."
        buttonText="مشاوره رایگان وردپرس"
        buttonLink="/contact"
        imageUrl="/pics/wordpress.png" // مسیر عکس از public
        imageAlt="تصویر وردپرس با لوگوی TRBDEV"
      />

      <FAQSection />
      <WavyDivider /> {/* <--- جداکننده بین FAQ و CTA */}
      <CallToActionSection />
    </>
  );
}

export default HomePage;