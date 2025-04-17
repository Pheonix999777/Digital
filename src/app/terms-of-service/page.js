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
    title: "Terms of Service",
    lastUpdated: "Last Updated",
    date: "April 16, 2024",
    backToHome: "Back to Home",
    sections: [
      {
        title: "Introduction",
        content:
          "Welcome to Digital. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do not accept all of the terms and conditions stated on this page.",
      },
      {
        title: "Intellectual Property Rights",
        content:
          "Other than the content you own, under these terms, Digital and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website.",
      },
      {
        title: "Restrictions",
        content:
          "You are specifically restricted from: publishing any website material in any other media; selling, sublicensing and/or otherwise commercializing any website material; publicly performing and/or showing any website material; using this website in any way that is or may be damaging to this website; using this website in any way that impacts user access to this website; using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity; engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website.",
      },
      {
        title: "Your Content",
        content:
          "In these terms and conditions, 'Your Content' shall mean any audio, video, text, images or other material you choose to display on this website. By displaying Your Content, you grant Digital a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.",
      },
      {
        title: "No Warranties",
        content:
          "This website is provided 'as is,' with all faults, and Digital expresses no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.",
      },
      {
        title: "Limitation of Liability",
        content:
          "In no event shall Digital, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract. Digital, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.",
      },
      {
        title: "Indemnification",
        content:
          "You hereby indemnify to the fullest extent Digital from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these terms.",
      },
      {
        title: "Severability",
        content:
          "If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.",
      },
      {
        title: "Variation of Terms",
        content:
          "Digital is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.",
      },
      {
        title: "Governing Law & Jurisdiction",
        content:
          "These terms will be governed by and interpreted in accordance with the laws of the country where Digital is based, and you submit to the non-exclusive jurisdiction of the state and federal courts located in said country for the resolution of any disputes.",
      },
    ],
  },
  ru: {
    title: "Условия Использования",
    lastUpdated: "Последнее Обновление",
    date: "16 апреля 2024",
    backToHome: "Вернуться на Главную",
    sections: [
      {
        title: "Введение",
        content:
          "Добро пожаловать в Digital. Эти условия определяют правила и положения для использования нашего веб-сайта. Получая доступ к этому веб-сайту, мы предполагаем, что вы полностью принимаете эти условия. Не продолжайте использовать наш веб-сайт, если вы не принимаете все условия, указанные на этой странице.",
      },
      {
        title: "Права Интеллектуальной Собственности",
        content:
          "Кроме контента, которым вы владеете, согласно этим условиям, Digital и/или его лицензиары владеют всеми правами интеллектуальной собственности и материалами, содержащимися на этом веб-сайте. Вам предоставляется ограниченная лицензия только для целей просмотра материала, содержащегося на этом веб-сайте.",
      },
      {
        title: "Ограничения",
        content:
          "Вам конкретно запрещено: публиковать любой материал веб-сайта в любых других средствах массовой информации; продавать, сублицензировать и/или иным образом коммерциализировать любой материал веб-сайта; публично исполнять и/или показывать любой материал веб-сайта; использовать этот веб-сайт любым способом, который является или может быть вредным для этого веб-сайта; использовать этот веб-сайт любым способом, который влияет на доступ пользователей к этому веб-сайту; использовать этот веб-сайт вопреки применимым законам и правилам или любым способом, который может причинить вред веб-сайту или любому лицу или бизнес-организации; заниматься любой добычей данных, сбором данных, извлечением данных или любой другой подобной деятельностью в отношении этого веб-сайта.",
      },
      {
        title: "Ваш Контент",
        content:
          "В этих условиях 'Ваш Контент' означает любое аудио, видео, текст, изображения или другой материал, который вы решите отображать на этом веб-сайте. Отображая Ваш Контент, вы предоставляете Digital неисключительную, всемирную, безотзывную, безвозмездную, сублицензируемую лицензию на использование, воспроизведение, адаптацию, публикацию, перевод и распространение его в любых и всех средствах массовой информации.",
      },
      {
        title: "Отсутствие Гарантий",
        content:
          "Этот веб-сайт предоставляется 'как есть', со всеми недостатками, и Digital не выражает никаких заявлений или гарантий любого рода, связанных с этим веб-сайтом или материалами, содержащимися на этом веб-сайте. Кроме того, ничто, содержащееся на этом веб-сайте, не должно интерпретироваться как консультация для вас.",
      },
      {
        title: "Ограничение Ответственности",
        content:
          "Ни при каких обстоятельствах Digital, ни кто-либо из его должностных лиц, директоров и сотрудников не несет ответственности за что-либо, возникающее из или каким-либо образом связанное с вашим использованием этого веб-сайта, независимо от того, является ли такая ответственность договорной. Digital, включая его должностных лиц, директоров и сотрудников, не несет ответственности за любую косвенную, последующую или особую ответственность, возникающую из или каким-либо образом связанную с вашим использованием этого веб-сайта.",
      },
      {
        title: "Возмещение Ущерба",
        content:
          "Настоящим вы возмещаете в полной мере Digital от и против любых и/или всех обязательств, затрат, требований, причин иска, убытков и расходов, возникающих каким-либо образом в связи с вашим нарушением любого из положений этих условий.",
      },
      {
        title: "Делимость",
        content:
          "Если какое-либо положение этих условий будет признано недействительным в соответствии с любым применимым законом, такие положения будут удалены без влияния на остальные положения, содержащиеся здесь.",
      },
      {
        title: "Изменение Условий",
        content:
          "Digital разрешено пересматривать эти условия в любое время, когда он считает нужным, и, используя этот веб-сайт, вы должны регулярно просматривать эти условия.",
      },
      {
        title: "Применимое Право и Юрисдикция",
        content:
          "Эти условия будут регулироваться и толковаться в соответствии с законами страны, где базируется Digital, и вы подчиняетесь неисключительной юрисдикции государственных и федеральных судов, расположенных в указанной стране, для разрешения любых споров.",
      },
    ],
  },
  uz: {
    title: "Xizmat Ko'rsatish Shartlari",
    lastUpdated: "Oxirgi Yangilanish",
    date: "16 aprel, 2024",
    backToHome: "Bosh Sahifaga Qaytish",
    sections: [
      {
        title: "Kirish",
        content:
          "Digital-ga xush kelibsiz. Ushbu shartlar veb-saytimizdan foydalanish qoidalari va tartiblarini belgilaydi. Ushbu veb-saytga kirib, siz ushbu shartlarni to'liq qabul qilasiz deb hisoblaymiz. Agar siz ushbu sahifada ko'rsatilgan barcha shartlarni qabul qilmasangiz, veb-saytimizdan foydalanishni davom ettirmang.",
      },
      {
        title: "Intellektual Mulk Huquqlari",
        content:
          "Siz egalik qiladigan kontentdan tashqari, ushbu shartlar bo'yicha, Digital va/yoki uning litsenziya beruvchilari ushbu veb-saytda mavjud bo'lgan barcha intellektual mulk huquqlari va materiallariga egalik qiladi. Sizga faqat ushbu veb-saytda mavjud bo'lgan materialni ko'rish maqsadida cheklangan litsenziya beriladi.",
      },
      {
        title: "Cheklovlar",
        content:
          "Sizga quyidagilar maxsus taqiqlanadi: veb-sayt materiallarini boshqa ommaviy axborot vositalarida nashr etish; veb-sayt materiallarini sotish, sublitsenziyalash va/yoki boshqacha tijoratlashtirish; veb-sayt materiallarini ommaviy namoyish etish va/yoki ko'rsatish; ushbu veb-saytni unga zarar yetkazishi mumkin bo'lgan har qanday usulda ishlatish; ushbu veb-saytni foydalanuvchilarning unga kirishiga ta'sir qiladigan har qanday usulda ishlatish; ushbu veb-saytni amaldagi qonun va qoidalarga zid ravishda yoki veb-saytga, yoki har qanday shaxs yoki biznes sub'ektiga zarar yetkazishi mumkin bo'lgan har qanday usulda ishlatish; ushbu veb-saytga nisbatan har qanday ma'lumotlarni qazib olish, ma'lumotlarni yig'ish, ma'lumotlarni chiqarib olish yoki boshqa shunga o'xshash faoliyat bilan shug'ullanish.",
      },
      {
        title: "Sizning Kontentingiz",
        content:
          "Ushbu shartlarda, 'Sizning Kontentingiz' deganda siz ushbu veb-saytda ko'rsatishni tanlagan har qanday audio, video, matn, tasvirlar yoki boshqa material tushuniladi. Sizning Kontentingizni ko'rsatish orqali, siz Digital-ga uni har qanday va barcha ommaviy axborot vositalarida ishlatish, ko'paytirish, moslashtirish, nashr etish, tarjima qilish va tarqatish uchun noekskluziv, butun dunyo bo'ylab, qaytarib bo'lmaydigan, bepul, sublitsenziyalanadigan litsenziya berasiz.",
      },
      {
        title: "Kafolatlar Yo'q",
        content:
          "Ushbu veb-sayt 'qanday bo'lsa shunday' taqdim etiladi, barcha kamchiliklari bilan, va Digital ushbu veb-sayt yoki unda mavjud bo'lgan materiallar bilan bog'liq har qanday turdagi taqdimot yoki kafolatlarni ifoda etmaydi. Shuningdek, ushbu veb-saytda mavjud bo'lgan hech narsa sizga maslahat berish sifatida talqin qilinmasligi kerak.",
      },
      {
        title: "Javobgarlikni Cheklash",
        content:
          "Hech qanday holatda Digital, uning mansabdor shaxslari, direktorlari va xodimlari, ushbu veb-saytdan foydalanishingiz bilan bog'liq yoki har qanday tarzda bog'liq bo'lgan hech narsa uchun javobgar bo'lmaydi, bunday javobgarlik shartnoma asosida bo'lishidan qat'i nazar. Digital, uning mansabdor shaxslari, direktorlari va xodimlari ham ushbu veb-saytdan foydalanishingiz bilan bog'liq yoki har qanday tarzda bog'liq bo'lgan har qanday bilvosita, oqibatli yoki maxsus javobgarlik uchun javobgar bo'lmaydi.",
      },
      {
        title: "Zararni Qoplash",
        content:
          "Siz ushbu orqali ushbu shartlarning har qanday qoidasini buzishingiz bilan har qanday tarzda bog'liq bo'lgan har qanday va/yoki barcha majburiyatlar, xarajatlar, talablar, da'vo sabablari, zararlar va xarajatlardan Digital-ni to'liq hajmda himoya qilasiz.",
      },
      {
        title: "Bo'linuvchanlik",
        content:
          "Agar ushbu shartlarning har qanday qoidasi har qanday amaldagi qonun bo'yicha haqiqiy emas deb topilsa, bunday qoidalar bu yerda qolgan qoidalarga ta'sir qilmasdan o'chiriladi.",
      },
      {
        title: "Shartlarning O'zgarishi",
        content:
          "Digital ushbu shartlarni o'zi kerak deb hisoblagan har qanday vaqtda qayta ko'rib chiqishga ruxsat berilgan, va ushbu veb-saytdan foydalanib, siz ushbu shartlarni muntazam ravishda ko'rib chiqishingiz kutiladi.",
      },
      {
        title: "Boshqaruvchi Qonun va Yurisdiksiya",
        content:
          "Ushbu shartlar Digital joylashgan mamlakatning qonunlariga muvofiq boshqariladi va talqin qilinadi, va siz har qanday nizolarni hal qilish uchun ushbu mamlakatda joylashgan davlat va federal sudlarning noekskluziv yurisdiksiyasiga bo'ysunasiz.",
      },
    ],
  },
};

export default function TermsOfService() {
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
                  O&apos;zbek
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
