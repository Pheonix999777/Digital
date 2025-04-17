"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContactImg from "../../public/img/Contact Image.png";

const translations = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      services: "Services",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      title: "Create Amazing Digital Experiences",
      subtitle:
        "Build stunning websites with our modern platform that helps businesses grow and succeed in the digital world.",
      cta: "Get Started",
      learnMore: "Learn More",
    },
    features: {
      title: "Our Features",
      subtitle: "Discover what makes our platform special",
      feature1: {
        title: "Modern Design",
        description:
          "Clean and modern interfaces that engage users and improve conversion rates.",
      },
      feature2: {
        title: "Responsive",
        description:
          "Looks great on any device, from mobile phones to desktop computers.",
      },
      feature3: {
        title: "Fast Performance",
        description:
          "Optimized for speed to provide the best user experience possible.",
      },
    },
    carousel: {
      title: "What Our Clients Say",
      testimonial1: {
        text: "This platform transformed our online presence completely. Highly recommended!",
        author: "John Smith",
        position: "CEO, TechCorp",
      },
      testimonial2: {
        text: "The best solution we've found for our digital needs. Easy to use and powerful.",
        author: "Sarah Johnson",
        position: "Marketing Director, Innovate Inc",
      },
      testimonial3: {
        text: "Outstanding service and results. Our website traffic increased by 200% in just two months.",
        author: "Michael Brown",
        position: "Founder, GrowFast",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions for your business",
      service1: {
        title: "Web Development",
        description:
          "Custom websites and web applications built with the latest technologies to meet your specific business needs.",
      },
      service2: {
        title: "Mobile Apps",
        description:
          "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
      },
      service3: {
        title: "UI/UX Design",
        description:
          "User-centered design that enhances user experience and increases conversion rates.",
      },
      service4: {
        title: "Digital Marketing",
        description:
          "Strategic marketing campaigns that drive traffic, generate leads, and increase your online presence.",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our services",
      questions: [
        {
          question: "How long does it take to develop a website?",
          answer:
            "The timeline for website development varies depending on the complexity of the project. A simple website can be completed in 2-4 weeks, while more complex projects may take 2-3 months or more.",
        },
        {
          question: "What is your pricing model?",
          answer:
            "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. The cost depends on the scope, complexity, and timeline of your project.",
        },
        {
          question: "Do you provide maintenance and support after launch?",
          answer:
            "Yes, we offer ongoing maintenance and support packages to ensure your digital products remain secure, up-to-date, and performing optimally.",
        },
        {
          question: "Can you help with existing projects?",
          answer:
            "We can take over existing projects, perform audits, implement improvements, or completely redesign them based on your requirements.",
        },
        {
          question: "What technologies do you use?",
          answer:
            "We work with a wide range of technologies including React, Next.js, Node.js, Python, and many others. We select the best technology stack based on your specific project requirements.",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have questions? Contact us today!",
      cta: "Contact Us",
    },
    footer: {
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      features: "Функции",
      services: "Услуги",
      about: "О нас",
      faq: "Вопросы",
      contact: "Контакты",
    },
    hero: {
      title: "Создавайте Удивительный Цифровой Опыт",
      subtitle:
        "Создавайте потрясающие веб-сайты с помощью нашей современной платформы, которая помогает бизнесу расти и преуспевать в цифровом мире.",
      cta: "Начать",
      learnMore: "Узнать больше",
    },
    features: {
      title: "Наши Функции",
      subtitle: "Откройте для себя, что делает нашу платформу особенной",
      feature1: {
        title: "Современный Дизайн",
        description:
          "Чистые и современные интерфейсы, которые привлекают пользователей и улучшают конверсию.",
      },
      feature2: {
        title: "Адаптивность",
        description:
          "Отлично выглядит на любом устройстве, от мобильных телефонов до настольных компьютеров.",
      },
      feature3: {
        title: "Быстрая Производительность",
        description:
          "Оптимизировано для скорости, чтобы обеспечить наилучший пользовательский опыт.",
      },
    },
    carousel: {
      title: "Что Говорят Наши Клиенты",
      testimonial1: {
        text: "Эта платформа полностью преобразила наше онлайн-присутствие. Очень рекомендую!",
        author: "Иван Смирнов",
        position: "Генеральный директор, ТехКорп",
      },
      testimonial2: {
        text: "Лучшее решение, которое мы нашли для наших цифровых потребностей. Просто в использовании и мощное.",
        author: "Мария Иванова",
        position: "Директор по маркетингу, Инновейт Инк",
      },
      testimonial3: {
        text: "Выдающийся сервис и результаты. Трафик нашего сайта увеличился на 200% всего за два месяца.",
        author: "Михаил Петров",
        position: "Основатель, ГроуФаст",
      },
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Комплексные цифровые решения для вашего бизнеса",
      service1: {
        title: "Веб-разработка",
        description:
          "Индивидуальные веб-сайты и веб-приложения, созданные с использованием новейших технологий для удовлетворения конкретных потребностей вашего бизнеса.",
      },
      service2: {
        title: "Мобильные Приложения",
        description:
          "Нативные и кроссплатформенные мобильные приложения, обеспечивающие безупречный пользовательский опыт на всех устройствах.",
      },
      service3: {
        title: "UI/UX Дизайн",
        description:
          "Дизайн, ориентированный на пользователя, который улучшает пользовательский опыт и увеличивает коэффициент конверсии.",
      },
      service4: {
        title: "Цифровой Маркетинг",
        description:
          "Стратегические маркетинговые кампании, которые привлекают трафик, генерируют лиды и увеличивают ваше онлайн-присутствие.",
      },
    },
    faq: {
      title: "Часто Задаваемые Вопросы",
      subtitle: "Найдите ответы на распространенные вопросы о наших услугах",
      questions: [
        {
          question: "Сколько времени занимает разработка веб-сайта?",
          answer:
            "Сроки разработки веб-сайта варьируются в зависимости от сложности проекта. Простой веб-сайт может быть завершен за 2-4 недели, в то время как более сложные проекты могут занять 2-3 месяца или более.",
        },
        {
          question: "Какая у вас модель ценообразования?",
          answer:
            "Мы предлагаем гибкие модели ценообразования, включая проекты с фиксированной ценой, почасовые ставки и соглашения о ретейнере. Стоимость зависит от объема, сложности и сроков вашего проекта.",
        },
        {
          question:
            "Предоставляете ли вы обслуживание и поддержку после запуска?",
          answer:
            "Да, мы предлагаем пакеты постоянного обслуживания и поддержки, чтобы ваши цифровые продукты оставались безопасными, актуальными и работали оптимально.",
        },
        {
          question: "Можете ли вы помочь с существующими проектами?",
          answer:
            "Абсолютно! Мы можем взять на себя существующие проекты, провести аудит, внедрить улучшения или полностью переработать их в соответствии с вашими требованиями.",
        },
        {
          question: "Какие технологии вы используете?",
          answer:
            "Мы работаем с широким спектром технологий, включая React, Next.js, Node.js, Python и многие другие. Мы выбираем лучший технологический стек на основе конкретных требований вашего проекта.",
        },
      ],
    },
    contact: {
      title: "Свяжитесь С Нами",
      subtitle: "Есть вопросы? Свяжитесь с нами сегодня!",
      cta: "Связаться с нами",
    },
    footer: {
      rights: "Все права защищены",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      features: "Xususiyatlar",
      services: "Xizmatlar",
      about: "Biz haqimizda",
      faq: "Savollar",
      contact: "Aloqa",
    },
    hero: {
      title: "Ajoyib Raqamli Tajribalar Yarating",
      subtitle:
        "Biznesga raqamli dunyoda o'sishga va muvaffaqiyatga erishishga yordam beradigan zamonaviy platformamiz bilan ajoyib veb-saytlar yarating.",
      cta: "Boshlash",
      learnMore: "Ko'proq ma'lumot",
    },
    features: {
      title: "Bizning Xususiyatlarimiz",
      subtitle: "Platformamizni maxsus qiladigan narsalarni kashf eting",
      feature1: {
        title: "Zamonaviy Dizayn",
        description:
          "Foydalanuvchilarni jalb qiladigan va konversiya darajasini oshiradigan toza va zamonaviy interfeyslar.",
      },
      feature2: {
        title: "Moslashuvchan",
        description:
          "Mobil telefonlardan kompyuterlargacha har qanday qurilmada ajoyib ko'rinadi.",
      },
      feature3: {
        title: "Tezkor Ishlash",
        description:
          "Eng yaxshi foydalanuvchi tajribasini ta'minlash uchun tezlikka moslashtirilgan.",
      },
    },
    carousel: {
      title: "Mijozlarimiz Nima Deyishadi",
      testimonial1: {
        text: "Bu platforma bizning onlayn mavjudligimizni butunlay o'zgartirdi. Juda tavsiya etaman!",
        author: "Alisher Karimov",
        position: "Bosh direktor, TechCorp",
      },
      testimonial2: {
        text: "Raqamli ehtiyojlarimiz uchun topgan eng yaxshi yechim. Foydalanish oson va kuchli.",
        author: "Nilufar Azimova",
        position: "Marketing direktori, Innovate Inc",
      },
      testimonial3: {
        text: "Ajoyib xizmat va natijalar. Veb-saytimiz trafigi atigi ikki oy ichida 200% ga oshdi.",
        author: "Bobur Rahimov",
        position: "Asoschisi, GrowFast",
      },
    },
    services: {
      title: "Bizning Xizmatlar",
      subtitle: "Biznesingiz uchun kompleks raqamli yechimlar",
      service1: {
        title: "Veb-ishlab chiqish",
        description:
          "Biznesingizning o'ziga xos ehtiyojlarini qondirish uchun eng so'nggi texnologiyalar bilan yaratilgan maxsus veb-saytlar va veb-ilovalar.",
      },
      service2: {
        title: "Mobil Ilovalar",
        description:
          "Barcha qurilmalarda mukammal foydalanuvchi tajribasini ta'minlaydigan mahalliy va kross-platforma mobil ilovalar.",
      },
      service3: {
        title: "UI/UX Dizayn",
        description:
          "Foydalanuvchi tajribasini yaxshilaydigan va konversiya darajasini oshiradigan foydalanuvchiga yo'naltirilgan dizayn.",
      },
      service4: {
        title: "Raqamli Marketing",
        description:
          "Trafikni jalb qiladigan, potentsial mijozlarni yaratadigan va onlayn mavjudligingizni oshiradigan strategik marketing kampaniyalari.",
      },
    },
    faq: {
      title: "Ko'p So'raladigan Savollar",
      subtitle:
        "Bizning xizmatlarimiz haqida tez-tez so'raladigan savollarga javoblar toping",
      questions: [
        {
          question: "Veb-sayt ishlab chiqish qancha vaqt oladi?",
          answer:
            "Veb-sayt ishlab chiqish muddati loyihaning murakkabligiga qarab o'zgaradi. Oddiy veb-sayt 2-4 hafta ichida yakunlanishi mumkin, murakkab loyihalar esa 2-3 oy yoki undan ko'proq vaqt olishi mumkin.",
        },
        {
          question: "Narxlash modelingiz qanday?",
          answer:
            "Biz moslashuvchan narxlash modellarini taklif qilamiz, jumladan, belgilangan narxli loyihalar, soatlik stavkalar va reteyner kelishuvlari. Narx loyihangizning ko'lami, murakkabligi va vaqt jadvaliga bog'liq.",
        },
        {
          question:
            "Ishga tushirilgandan so'ng texnik xizmat va qo'llab-quvvatlashni ta'minlaysizmi?",
          answer:
            "Ha, biz raqamli mahsulotlaringiz xavfsiz, yangilangan va optimal ishlashini ta'minlash uchun doimiy texnik xizmat ko'rsatish va qo'llab-quvvatlash paketlarini taklif qilamiz.",
        },
        {
          question: "Mavjud loyihalarga yordam bera olasizmi?",
          answer:
            "Albatta! Biz mavjud loyihalarni qabul qilishimiz, audit o'tkazishimiz, yaxshilanishlarni amalga oshirishimiz yoki ularni talablaringizga muvofiq to'liq qayta loyihalashimiz mumkin.",
        },
        {
          question: "Qanday texnologiyalardan foydalanasiz?",
          answer:
            "Biz React, Next.js, Node.js, Python va boshqa ko'plab texnologiyalar bilan ishlaymiz. Biz loyihangizning o'ziga xos talablariga asoslanib eng yaxshi texnologiya to'plamini tanlaymiz.",
        },
      ],
    },
    contact: {
      title: "Bog'lanish",
      subtitle: "Savollaringiz bormi? Bugun biz bilan bog'laning!",
      cta: "Biz bilan bog'laning",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan",
      privacy: "Maxfiylik siyosati",
      terms: "Xizmat ko'rsatish shartlari",
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[language];

  // For carousel
  const testimonials = [
    t.carousel.testimonial1,
    t.carousel.testimonial2,
    t.carousel.testimonial3,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            <span className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              Digital
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="#features"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t.nav.features}
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t.nav.faq}
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ru")}>
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("uz")}>
                  O&apos;zbek
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="#contact"
              className="hidden md:flex text-white  bg-purple-600 hover:bg-purple-700 px-[16px] py-[8px] rounded-[5px]"
            >
              {t.contact.cta}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <section
        id="home"
        className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-r from-purple-600 to-blue-500"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated background elements */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1.5, 1],
                opacity: [0, 0.5, 0.2, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href={"#features"}>
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90"
                >
                  {t.hero.cta}
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                {t.hero.learnMore}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-purple-50 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t.features.feature1.title}
              </h3>
              <p className="text-gray-600">{t.features.feature1.description}</p>
            </motion.div>

            <motion.div
              className="bg-blue-50 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t.features.feature2.title}
              </h3>
              <p className="text-gray-600">{t.features.feature2.description}</p>
            </motion.div>

            <motion.div
              className="bg-pink-50 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t.features.feature3.title}
              </h3>
              <p className="text-gray-600">{t.features.feature3.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t.services.service1.title}
              </h3>
              <p className="text-gray-600">{t.services.service1.description}</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t.services.service2.title}
              </h3>
              <p className="text-gray-600">{t.services.service2.description}</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t.services.service3.title}
              </h3>
              <p className="text-gray-600">{t.services.service3.description}</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t.services.service4.title}
              </h3>
              <p className="text-gray-600">{t.services.service4.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t.faq.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {t.faq.questions.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-gray-50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 p-6 pt-0 border-t border-gray-200">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t.carousel.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg p-8 md:p-12 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  <div className="text-4xl text-purple-300 mb-6">&quot;</div>
                  <p className="text-xl text-gray-700 mb-8">
                    {testimonials[currentSlide].text}
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-gray-900">
                      {testimonials[currentSlide].author}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[currentSlide].position}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl mb-8 text-white/90">{t.contact.subtitle}</p>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center">
                  <Image
                    src={ContactImg}
                    alt="Contact"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {t.contact.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{t.contact.subtitle}</p>
                  <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                    {t.contact.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link
                href="/"
                className="text-2xl font-bold text-white mb-4 inline-block"
              >
                <span className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">D</span>
                  </div>
                  Digital
                </span>
              </Link>
              <p className="text-gray-400 mt-4">
                Creating amazing digital experiences for businesses worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.nav.features}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.nav.faq}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`text-gray-400 hover:text-white transition-colors ${
                      language === "en" ? "text-white font-medium" : ""
                    }`}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLanguage("ru")}
                    className={`text-gray-400 hover:text-white transition-colors ${
                      language === "ru" ? "text-white font-medium" : ""
                    }`}
                  >
                    Русский
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLanguage("uz")}
                    className={`text-gray-400 hover:text-white transition-colors ${
                      language === "uz" ? "text-white font-medium" : ""
                    }`}
                  >
                    O&apos;zbek
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Digital. {t.footer.rights}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
