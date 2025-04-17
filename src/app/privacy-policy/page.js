"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const translations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated",
    date: "April 16, 2024",
    backToHome: "Back to Home",
    sections: [
      {
        title: "Introduction",
        content:
          "Welcome to Digital. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
      },
      {
        title: "Information We Collect",
        content:
          "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, Marketing and Communications Data.",
      },
      {
        title: "How We Use Your Information",
        content:
          "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests. Where we need to comply with a legal obligation.",
      },
      {
        title: "Data Security",
        content:
          "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.",
      },
      {
        title: "Your Legal Rights",
        content:
          "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.",
      },
      {
        title: "Third-Party Links",
        content:
          "This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.",
      },
      {
        title: "Changes to This Privacy Policy",
        content:
          "We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'last updated' date at the top of this privacy policy.",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@digital.com.",
      },
    ],
  },
  ru: {
    title: "Политика Конфиденциальности",
    lastUpdated: "Последнее Обновление",
    date: "16 апреля 2024",
    backToHome: "Вернуться на Главную",
    sections: [
      {
        title: "Введение",
        content:
          "Добро пожаловать в Digital. Мы уважаем вашу конфиденциальность и стремимся защищать ваши личные данные. Эта политика конфиденциальности расскажет вам о том, как мы заботимся о ваших личных данных, когда вы посещаете наш веб-сайт, и расскажет вам о ваших правах на конфиденциальность и о том, как закон защищает вас.",
      },
      {
        title: "Информация, Которую Мы Собираем",
        content:
          "Мы можем собирать, использовать, хранить и передавать различные виды личных данных о вас, которые мы сгруппировали следующим образом: Идентификационные данные, Контактные данные, Технические данные, Данные об использовании, Маркетинговые и коммуникационные данные.",
      },
      {
        title: "Как Мы Используем Вашу Информацию",
        content:
          "Мы будем использовать ваши личные данные только тогда, когда закон позволяет нам это делать. Чаще всего мы будем использовать ваши личные данные в следующих обстоятельствах: Когда нам нужно выполнить договор, который мы собираемся заключить или уже заключили с вами. Когда это необходимо для наших законных интересов (или интересов третьей стороны), и ваши интересы и основные права не отменяют эти интересы. Когда нам нужно соблюдать юридическое обязательство.",
      },
      {
        title: "Безопасность Данных",
        content:
          "Мы приняли соответствующие меры безопасности для предотвращения случайной потери, использования или доступа к вашим личным данным несанкционированным способом, изменения или раскрытия. Кроме того, мы ограничиваем доступ к вашим личным данным тем сотрудникам, агентам, подрядчикам и другим третьим сторонам, которым это необходимо знать по работе.",
      },
      {
        title: "Ваши Законные Права",
        content:
          "При определенных обстоятельствах у вас есть права в соответствии с законами о защите данных в отношении ваших личных данных, включая право запрашивать доступ, исправление, удаление, ограничение, передачу, возражать против обработки, переносимость данных и (если законным основанием обработки является согласие) отзыв согласия.",
      },
      {
        title: "Ссылки на Третьи Стороны",
        content:
          "Этот веб-сайт может включать ссылки на сторонние веб-сайты, плагины и приложения. Нажатие на эти ссылки или включение этих соединений может позволить третьим сторонам собирать или делиться данными о вас. Мы не контролируем эти сторонние веб-сайты и не несем ответственности за их заявления о конфиденциальности.",
      },
      {
        title: "Изменения в Этой Политике Конфиденциальности",
        content:
          "Мы можем время от времени обновлять нашу политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую политику конфиденциальности на этой странице и обновив дату 'последнего обновления' в верхней части этой политики конфиденциальности.",
      },
      {
        title: "Свяжитесь с Нами",
        content:
          "Если у вас есть какие-либо вопросы об этой политике конфиденциальности или наших практиках конфиденциальности, пожалуйста, свяжитесь с нами по адресу privacy@digital.com.",
      },
    ],
  },
  uz: {
    title: "Maxfiylik Siyosati",
    lastUpdated: "Oxirgi Yangilanish",
    date: "16 aprel, 2024",
    backToHome: "Bosh Sahifaga Qaytish",
    sections: [
      {
        title: "Kirish",
        content:
          "Digital-ga xush kelibsiz. Biz sizning maxfiyligingizni hurmat qilamiz va shaxsiy ma'lumotlaringizni himoya qilishga intilamiz. Ushbu maxfiylik siyosati sizga veb-saytimizga tashrif buyurganingizda shaxsiy ma'lumotlaringizni qanday himoya qilishimiz va sizning maxfiylik huquqlaringiz hamda qonun sizni qanday himoya qilishi haqida ma'lumot beradi.",
      },
      {
        title: "Biz To'playdigan Ma'lumotlar",
        content:
          "Biz siz haqingizda turli xil shaxsiy ma'lumotlarni to'plash, foydalanish, saqlash va uzatishimiz mumkin, ularni quyidagicha guruhlarga ajratganmiz: Shaxsiy ma'lumotlar, Aloqa ma'lumotlari, Texnik ma'lumotlar, Foydalanish ma'lumotlari, Marketing va kommunikatsiya ma'lumotlari.",
      },
      {
        title: "Ma'lumotlaringizdan Qanday Foydalanamiz",
        content:
          "Biz sizning shaxsiy ma'lumotlaringizdan faqat qonun ruxsat bergan hollarda foydalanamiz. Ko'pincha, biz sizning shaxsiy ma'lumotlaringizdan quyidagi holatlarda foydalanamiz: Siz bilan tuzmoqchi bo'lgan yoki tuzilgan shartnomani bajarishimiz kerak bo'lganda. Bizning qonuniy manfaatlarimiz (yoki uchinchi tomon manfaatlari) uchun zarur bo'lganda va sizning manfaatlaringiz va asosiy huquqlaringiz bu manfaatlarni bekor qilmaganda. Qonuniy majburiyatga rioya qilishimiz kerak bo'lganda.",
      },
      {
        title: "Ma'lumotlar Xavfsizligi",
        content:
          "Biz sizning shaxsiy ma'lumotlaringizni tasodifan yo'qotilishi, ruxsatsiz foydalanilishi yoki kirilishi, o'zgartirilishi yoki oshkor qilinishining oldini olish uchun tegishli xavfsizlik choralarini ko'rdik. Bundan tashqari, biz sizning shaxsiy ma'lumotlaringizga kirishni bilishi kerak bo'lgan xodimlar, agentlar, pudratchilar va boshqa uchinchi tomonlar bilan cheklaymiz.",
      },
      {
        title: "Sizning Qonuniy Huquqlaringiz",
        content:
          "Ma'lum sharoitlarda, sizda ma'lumotlarni himoya qilish qonunlariga muvofiq shaxsiy ma'lumotlaringizga nisbatan huquqlar mavjud, jumladan, kirish, tuzatish, o'chirish, cheklash, uzatish, qayta ishlashga e'tiroz bildirish, ma'lumotlarni ko'chirish huquqi va (qayta ishlashning qonuniy asosi rozilik bo'lsa) rozilikni qaytarib olish huquqi.",
      },
      {
        title: "Uchinchi Tomon Havolalari",
        content:
          "Ushbu veb-sayt uchinchi tomon veb-saytlari, plaginlari va ilovalariga havolalarni o'z ichiga olishi mumkin. Ushbu havolalarni bosish yoki ushbu ulanishlarni yoqish uchinchi tomonlarga siz haqingizda ma'lumot to'plash yoki ulashish imkonini berishi mumkin. Biz ushbu uchinchi tomon veb-saytlarini nazorat qilmaymiz va ularning maxfiylik bayonotlari uchun javobgar emasmiz.",
      },
      {
        title: "Ushbu Maxfiylik Siyosatiga O'zgartirishlar",
        content:
          "Biz vaqti-vaqti bilan maxfiylik siyosatimizni yangilashimiz mumkin. Biz sizni yangi maxfiylik siyosatini ushbu sahifada joylashtirish va ushbu maxfiylik siyosatining yuqori qismidagi 'oxirgi yangilanish' sanasini yangilash orqali har qanday o'zgarishlar haqida xabardor qilamiz.",
      },
      {
        title: "Biz Bilan Bog'laning",
        content:
          "Agar sizda ushbu maxfiylik siyosati yoki bizning maxfiylik amaliyotlarimiz haqida savollaringiz bo'lsa, iltimos, privacy@digital.com orqali biz bilan bog'laning.",
      },
    ],
  },
};

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            <span className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              Digital
            </span>
          </Link>

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
                  Ozbek
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.title}
            </h1>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                {t.backToHome}
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <p className="text-gray-500 mb-6">
              <span className="font-medium">{t.lastUpdated}:</span> {t.date}
            </p>

            <div className="space-y-8">
              {t.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-gray-700">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Digital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
