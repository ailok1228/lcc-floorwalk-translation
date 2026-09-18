// data.js

const siteData = {
    languages: [
        { code: 'bn', native: 'বাংলা', en: 'Bengali', dir: 'ltr' },
        { code: 'ar', native: 'العربية', en: 'Arabic', dir: 'rtl' },
        { code: 'fa', native: 'فارسی', en: 'Farsi', dir: 'rtl' },
        { code: 'ckb', native: 'کوردی سۆرانی', en: 'Kurdish Sorani', dir: 'rtl' },
        { code: 'ur', native: 'اردو', en: 'Urdu', dir: 'rtl' },
        { code: 'prs', native: 'دری', en: 'Dari', dir: 'rtl' },
        { code: 'ro', native: 'Română', en: 'Romanian', dir: 'ltr' },
        { code: 'ti', native: 'ትግርኛ', en: 'Tigrinya', dir: 'ltr' },
        { code: 'pl', native: 'Polski', en: 'Polish', dir: 'ltr' },
        { code: 'cs', native: 'Čeština', en: 'Czech', dir: 'ltr' },
        { code: 'ps', native: 'پښتو', en: 'Pashto', dir: 'rtl' },
        { code: 'pt', native: 'Português', en: 'Portuguese', dir: 'ltr' },
        { code: 'es', native: 'Español', en: 'Spanish', dir: 'ltr' },
        { code: 'fr', native: 'Français', en: 'French', dir: 'ltr' },
        { code: 'sk', native: 'Slovenčina', en: 'Slovak', dir: 'ltr' },
        { code: 'hi', native: 'हिन्दी', en: 'Hindi', dir: 'ltr' },
        { code: 'zh-hk', native: '繁體中文', en: 'Traditional Chinese', dir: 'ltr' },
        { code: 'en', native: 'English', en: 'English', dir: 'ltr' }
    ],

    ui: {
        select_category: {
            en: "Select Category", "zh-hk": "請選擇服務範疇", bn: "বিভাগ নির্বাচন করুন", ar: "اختر الفئة", fa: "دسته بندی را انتخاب کنید", ckb: "هاوپۆل هەڵبژێرە", ur: "زمرہ منتخب کریں", prs: "دسته بندی را انتخاب کنید", ro: "Selectați categoria", ti: "ምድብ ምረጽ", pl: "Wybierz kategorię", cs: "Vyberte kategorii", ps: "کټګورۍ وټاکئ", pt: "Selecione a Categoria", es: "Seleccione una categoría", fr: "Sélectionnez une catégorie", sk: "Vyberte kategóriu", hi: "श्रेणी चुनें"
        },
        select_service: {
            en: "Select Service", "zh-hk": "請選擇所需服務", bn: "পরিষেবা নির্বাচন করুন", ar: "اختر الخدمة", fa: "خدمات را انتخاب کنید", ckb: "خزمەتگوزاری هەڵبژێرە", ur: "سروس منتخب کریں", prs: "خدمات را انتخاب کنید", ro: "Selectați serviciul", ti: "ግልጋሎት ምረጽ", pl: "Wybierz usługę", cs: "Vyberte službu", ps: "خدمت وټاکئ", pt: "Selecione o Serviço", es: "Seleccione el servicio", fr: "Sélectionnez le service", sk: "Vyberte službu", hi: "सेवा चुनें"
        },
        completed: {
            en: "Completed", "zh-hk": "完成", bn: "সম্পন্ন", ar: "مكتمل", fa: "تکمیل شد", ckb: "تەواوکرا", ur: "مکمل", prs: "تکمیل شد", ro: "Finalizat", ti: "ተዛዚሙ", pl: "Zakończono", cs: "Dokončeno", ps: "بشپړ شو", pt: "Concluído", es: "Completado", fr: "Terminé", sk: "Dokončené", hi: "पूरा हुआ"
        }
    },

    templates: {
        'ticket': {
            en: "Our staff will help you get a ticket. Please take a seat and our staff will call you soon.",
            "zh-hk": "我們的職員會協助您取票。請就座，我們的職員會盡快呼叫您。",
            bn: "আমাদের কর্মীরা আপনাকে একটি টিকিট পেতে সাহায্য করবে। অনুগ্রহ করে বসুন এবং আমাদের কর্মীরা শীঘ্রই আপনাকে ডাকবে।",
            ar: "سيساعدك موظفونا في الحصول على تذكرة. يرجى الجلوس وسيتصل بك موظفونا قريبًا.",
            fa: "کارمندان ما به شما در گرفتن بلیط کمک خواهند کرد. لطفاً بنشینید، کارمندان ما به زودی شما را صدا خواهند زد.",
            ckb: "کارمەندەکانمان یارمەتیت دەدەن بۆ وەرگرتنی بلیت. تکایە دابنیشە و کارمەندەکانمان بە زوویی بانگت دەکەن.",
            ur: "ہمارا عملہ آپ کو ٹکٹ حاصل کرنے میں مدد کرے گا۔ براہ کرم تشریف رکھیں، ہمارا عملہ جلد ہی آپ کو بلائے گا۔",
            prs: "کارمندان ما به شما در گرفتن تکت کمک خواهند کرد. لطفاً بنشینید، کارمندان ما به زودی شما را صدا خواهند زد.",
            ro: "Personalul nostru vă va ajuta să obțineți un bilet. Vă rugăm să luați loc și personalul nostru vă va chema în curând.",
            ti: "ሰራሕተኛታትና ትኬት ንኽትወስዱ ክሕግዙኹም እዮም። በጃኹም ኮፍ በሉ፡ ሰራሕተኛታትና ድማ ድሕሪ ሓጺር ግዜ ክጽውዑኹም እዮም።",
            pl: "Nasz personel pomoże Ci pobrać numerek. Proszę usiąść, nasz personel wkrótce Cię zawoła.",
            cs: "Náš personál vám pomůže získat lístek. Posaďte se prosím, náš personál vás brzy zavolá.",
            ps: "زموږ کارمندان به له تاسو سره د ټکټ په ترلاسه کولو کې مرسته وکړي. مهرباني وکړئ کښینئ او زموږ کارمندان به ژر تر ژره تاسو ته غږ وکړي.",
            pt: "A nossa equipa irá ajudá-lo a tirar uma senha. Por favor, sente-se e a nossa equipa chamá-lo-á em breve.",
            es: "Nuestro personal le ayudará a obtener un turno. Por favor tome asiento y nuestro personal le llamará pronto.",
            fr: "Notre personnel vous aidera à obtenir un ticket. Veuillez vous asseoir et notre personnel vous appellera bientôt.",
            sk: "Náš personál vám pomôže získať lístok. Posad'te sa prosím, náš personál vás čoskoro zavolá.",
            hi: "हमारे कर्मचारी आपको टिकट दिलाने में मदद करेंगे। कृपया बैठ जाएं और हमारे कर्मचारी जल्द ही आपको बुलाएंगे।"
        },
        'appointment': {
            en: "Our staff will book you an appointment with an interpreter.",
            "zh-hk": "我們的職員會為您預約並安排翻譯員。",
            bn: "আমাদের কর্মীরা আপনার জন্য একজন দোভাষীর সাথে একটি অ্যাপয়েন্টমেন্ট বুক করবে।",
            ar: "سيقوم موظفونا بحجز موعد لك مع مترجم فوري.",
            fa: "کارمندان ما برای شما با یک مترجم وقت ملاقات رزرو خواهند کرد.",
            ckb: "کارمەندەکانمان کاتێکی چاوپێکەوتنت بۆ وەردەگرن لەگەڵ وەرگێڕێک.",
            ur: "ہمارا عملہ آپ کے لیے ایک مترجم کے ساتھ اپوائنٹمنٹ بک کرے گا۔",
            prs: "کارمندان ما برای شما با یک ترجمان وقت ملاقات رزرو خواهند کرد.",
            ro: "Personalul nostru vă va programa o întâlnire cu un interpret.",
            ti: "ሰራሕተኛታትና ምስ ኣስተርጓሚ ቆጸራ ክሕዙልኩም እዮም።",
            pl: "Nasz personel umówi Cię na spotkanie z tłumaczem.",
            cs: "Náš personál vám zarezervuje schůzku s tlumočníkem.",
            ps: "زموږ کارمندان به ستاسو لپاره د ژباړونکي سره لیدنه وټاکي.",
            pt: "A nossa equipa irá marcar-lhe uma consulta com um intérprete.",
            es: "Nuestro personal le reservará una cita con un intérprete.",
            fr: "Notre personnel vous fixera un rendez-vous avec un interprète.",
            sk: "Náš personál vám zarezervuje stretnutie s tlmočníkom.",
            hi: "हमारे कर्मचारी आपके लिए एक दुभाषिए (इंटरप्रेटर) के साथ अपॉइंटमेंट बुक करेंगे।"
        },
        'info_keyfob': {
            en: "Please provide your address, proof of ID and £7.44 payment.",
            "zh-hk": "請提供您的地址、身份證明文件及 £7.44 的付款。",
            bn: "অনুগ্রহ করে আপনার ঠিকানা, পরিচয়ের প্রমাণ এবং £7.44 পেমেন্ট প্রদান করুন।",
            ar: "يرجى تقديم عنوانك وإثبات هويتك ودفع مبلغ 7.44 جنيه إسترليني.",
            fa: "لطفاً آدرس، مدرک شناسایی و مبلغ ۷.۴۴ پوند پرداخت خود را ارائه دهید.",
            ckb: "تکایە ناونیشانەکەت، بەڵگەی ناسنامە و بڕی ٧.٤٤ پاوەند پارەدان پێشکەش بکە.",
            ur: "براہ کرم اپنا پتہ، شناختی ثبوت اور £7.44 کی ادائیگی فراہم کریں۔",
            prs: "لطفاً آدرس، سند هویت و مبلغ ۷.۴۴ پوند پرداخت خود را ارائه دهید.",
            ro: "Vă rugăm să furnizați adresa dvs., un act de identitate și plata de 7,44 £.",
            ti: "በጃኹም ኣድራሻኹም፡ መለለዪ መንነትኩምን ናይ £7.44 ክፍሊትን ኣቕርቡ።",
            pl: "Proszę podać swój adres, dowód tożsamości oraz opłatę w wysokości 7,44 £.",
            cs: "Předložte prosím svou adresu, průkaz totožnosti a platbu 7,44 £.",
            ps: "مهرباني وکړئ خپل پته، د هویت ثبوت او £7.44 تادیه چمتو کړئ.",
            pt: "Por favor, forneça a sua morada, documento de identificação e o pagamento de £7,44.",
            es: "Por favor proporcione su dirección, prueba de identidad y el pago de £7.44.",
            fr: "Veuillez fournir votre adresse, une pièce d'identité et un paiement de 7,44 £.",
            sk: "Poskytnite prosím svoju adresu, doklad totožnosti a platbu 7,44 £.",
            hi: "कृपया अपना पता, पहचान प्रमाण और £7.44 का भुगतान प्रदान करें।"
        },
        'info_sofa': {
            en: "Please take a seat at the sofa area.",
            "zh-hk": "請在梳化區就座等候。",
            bn: "অনুগ্রহ করে সোফা এলাকায় বসুন।",
            ar: "يرجى الجلوس في منطقة الأرائك.",
            fa: "لطفاً در قسمت مبل ها بنشینید.",
            ckb: "تکایە لە ناوچەی قەنەفەکان دابنیشە.",
            ur: "براہ کرم صوفہ ایریا میں تشریف رکھیں۔",
            prs: "لطفاً در قسمت کوچ ها بنشینید.",
            ro: "Vă rugăm să luați loc în zona canapelelor.",
            ti: "በጃኹም ኣብ ናይ ሶፋ ቦታ ኮፍ በሉ።",
            pl: "Proszę usiąść w strefie z sofami.",
            cs: "Posaďte se prosím v prostoru pohovek.",
            ps: "مهرباني وکړئ د صوفې په برخه کې کښینئ.",
            pt: "Por favor, sente-se na área dos sofás.",
            es: "Por favor tome asiento en la zona de los sofás.",
            fr: "Veuillez vous asseoir dans le coin canapés.",
            sk: "Posad'te sa prosím v priestore pohoviek.",
            hi: "कृपया सोफा क्षेत्र में बैठें।"
        },
        'info_parking': {
            en: "Please visit Leeds Council website if you want to pay a fine or appeal.",
            "zh-hk": "如欲繳交罰款或提出上訴，請瀏覽 Leeds Council 網站。",
            bn: "আপনি যদি জরিমানা দিতে চান বা আপিল করতে চান তবে অনুগ্রহ করে লিডস কাউন্সিল ওয়েবসাইটে যান।",
            ar: "يرجى زيارة موقع مجلس ليدز (Leeds Council) إذا كنت ترغب في دفع غرامة أو تقديم استئناف.",
            fa: "اگر می‌خواهید جریمه پرداخت کنید یا اعتراض نمایید، لطفاً به وب‌سایت شورای لیدز (Leeds Council) مراجعه کنید.",
            ckb: "تکایە سەردانی وێبسایتی ئەنجومەنی لیدز (Leeds Council) بکە ئەگەر دەتەوێت غەرامە بدەیت یان تانە بدەیت.",
            ur: "اگر آپ جرمانہ ادا کرنا چاہتے ہیں یا اپیل کرنا چاہتے ہیں تو براہ کرم لیڈز کونسل کی ویب سائٹ دیکھیں۔",
            prs: "اگر می‌خواهید جریمه پرداخت کنید یا اعتراض نمایید، لطفاً به وب‌سایت شورای لیدز (Leeds Council) مراجعه کنید.",
            ro: "Vă rugăm să vizitați site-ul web Leeds Council dacă doriți să plătiți o amendă sau să faceți recurs.",
            ti: "መቕጻዕቲ ክትከፍሉ ወይ ይግባይ ክትብሉ እንተደሊኹም በጃኹም ናይ Leeds Council መርበብ ሓበሬታ ተወከሱ።",
            pl: "Odwiedź stronę internetową Leeds Council, jeśli chcesz zapłacić mandat lub złożyć odwołanie.",
            cs: "Pokud chcete zaplatit pokutu nebo podat odvolání, navštivte prosím webové stránky Leeds Council.",
            ps: "مهرباني وکړئ د لیډز شورا (Leeds Council) ویب پاڼې ته مراجعه وکړئ که تاسو غواړئ جریمه ورکړئ یا استیناف غوښتنه وکړئ.",
            pt: "Por favor, visite o site do Leeds Council se quiser pagar uma multa ou apresentar recurso.",
            es: "Por favor visite el sitio web de Leeds Council si desea pagar una multa o presentar una apelación.",
            fr: "Veuillez visiter le site Web du Leeds Council si vous souhaitez payer une amende ou faire appel.",
            sk: "Ak chcete zaplatiť pokutu alebo podať odvolanie, navštívte prosím webovú stránku Leeds Council.",
            hi: "यदि आप जुर्माना भरना चाहते हैं या अपील करना चाहते हैं, तो कृपया लीड्स काउंसिल (Leeds Council) की वेबसाइट देखें।"
        },
        'info_jobshop': {
            en: "Please take a seat and our staff will speak to you soon.",
            "zh-hk": "請就座，我們的職員很快會與您交談。",
            bn: "অনুগ্রহ করে বসুন এবং আমাদের কর্মীরা শীঘ্রই আপনার সাথে কথা বলবে।",
            ar: "يرجى الجلوس وسيتحدث إليك موظفونا قريبًا.",
            fa: "لطفاً بنشینید، کارمندان ما به زودی با شما صحبت خواهند کرد.",
            ckb: "تکایە دابنیشە و کارمەندەکانمان بە زوویی قسەت لەگەڵ دەکەن.",
            ur: "براہ کرم تشریف رکھیں، ہمارا عملہ جلد ہی آپ سے بات کرے گا۔",
            prs: "لطفاً بنشینید، کارمندان ما به زودی با شما صحبت خواهند کرد.",
            ro: "Vă rugăm să luați loc și personalul nostru va vorbi cu dvs. în curând.",
            ti: "በጃኹም ኮፍ በሉ፡ ሰራሕተኛታትና ድማ ድሕሪ ሓጺር ግዜ ክዛረቡኹም እዮም።",
            pl: "Proszę usiąść, nasz personel wkrótce z Tobą porozmawia.",
            cs: "Posaďte se prosím, náš personál s vámi brzy promluví.",
            ps: "مهرباني وکړئ کښینئ او زموږ کارمندان به ژر تر ژره له تاسو سره خبرې وکړي.",
            pt: "Por favor, sente-se e a nossa equipa falará consigo em breve.",
            es: "Por favor tome asiento y nuestro personal hablará con usted pronto.",
            fr: "Veuillez vous asseoir et notre personnel vous parlera bientôt.",
            sk: "Posad'te sa prosím, náš personál sa s vami čoskoro porozpráva.",
            hi: "कृपया बैठ जाएं और हमारे कर्मचारी जल्द ही आपसे बात करेंगे।"
        }
    },

    categories: [
        {
            id: 'counciltax',
            title: { en: 'Council tax', 'zh-hk': '市政稅', bn: 'কাউন্সিল ট্যাক্স', ar: 'ضريبة المجلس', fa: 'مالیات شورا', ckb: 'باجی ئەنجومەن', ur: 'کونسل ٹیکس', prs: 'مالیات شورا', ro: 'Taxa la consiliu', ti: 'Council Tax', pl: 'Podatek lokalny', cs: 'Místní daň', ps: 'د شورا مالیه', pt: 'Imposto Municipal', es: 'Impuesto Municipal', fr: "Taxe d'habitation", sk: 'Miestna daň', hi: 'काउंसिल टैक्स' },
            services: [
                { id: 'ct_discuss', title: { en: 'Discuss council tax bill', 'zh-hk': '討論市政稅帳單', bn: 'কাউন্সিল ট্যাক্স বিল নিয়ে আলোচনা করুন', ar: 'مناقشة فاتورة ضريبة المجلس', fa: 'بررسی قبض مالیات شورا', ckb: 'گفتوگۆکردن لەسەر پسوڵەی باجی ئەنجومەن', ur: 'کونسل ٹیکس بل پر بات کریں', prs: 'بررسی بل مالیات شورا', ro: 'Discutați factura de taxă', ti: 'ብዛዕባ ናይ Council Tax ክሳዕ ምዝርራብ', pl: 'Omówienie rachunku za podatek', cs: 'Konzultace účtu za místní daň', ps: 'د شورا د مالیې بل په اړه خبرې کول', pt: 'Discutir a conta do imposto', es: 'Consultar factura de impuesto municipal', fr: "Discuter de la facture de taxe d'habitation", sk: 'Konzultácia účtu za miestnu daň', hi: 'काउंसिल टैक्स बिल पर चर्चा करें' }, template: 'ticket' },
                { id: 'ct_print', title: { en: 'Print council tax bill', 'zh-hk': '列印市政稅帳單', bn: 'কাউন্সিল ট্যাক্স বিল প্রিন্ট করুন', ar: 'طباعة فاتورة ضريبة المجلس', fa: 'چاپ قبض مالیات شورا', ckb: 'چاپکردنی پسوڵەی باجی ئەنجومەن', ur: 'کونسل ٹیکس بل پرنٹ کریں', prs: 'چاپ بل مالیات شورا', ro: 'Imprimați factura de taxă', ti: 'Council Tax ዝኽፈል ቢል ምሕታም', pl: 'Wydruk rachunku za podatek', cs: 'Tisk účtu za místní daň', ps: 'د شورا د مالیې بل چاپول', pt: 'Imprimir conta do imposto', es: 'Imprimir factura de impuesto municipal', fr: "Imprimer la facture de taxe d'habitation", sk: 'Vytlačiť účet za miestnu daň', hi: 'काउंसिल टैक्स बिल प्रिंट करें' }, template: 'ticket' },
                { id: 'ct_address', title: { en: 'Change address', 'zh-hk': '更改地址', bn: 'ঠিকানা পরিবর্তন করুন', ar: 'تغيير العنوان', fa: 'تغییر آدرس', ckb: 'گۆڕینی ناونیشان', ur: 'پتہ تبدیل کریں', prs: 'تغییر آدرس', ro: 'Schimbare adresă', ti: 'ኣድራሻ ምቕያር', pl: 'Zmiana adresu', cs: 'Změna adresy', ps: 'پته بدلول', pt: 'Alterar morada', es: 'Cambiar dirección', fr: "Changement d'adresse", sk: 'Zmena adresy', hi: 'पता बदलें' }, template: 'appointment' },
                { id: 'ct_support', title: { en: 'Apply for council tax support', 'zh-hk': '申請市政稅援助', bn: 'কাউন্সিল ট্যাক্স সহায়তার জন্য আবেদন করুন', ar: 'التقديم على دعم ضريبة المجلس', fa: 'درخواست کمک هزینه مالیات شورا', ckb: 'داواکاری بۆ پاڵپشتی باجی ئەنجومەن', ur: 'کونسل ٹیکس سپورٹ کے لیے درخواست دیں', prs: 'درخواست کمک هزینه مالیات شورا', ro: 'Aplicați pentru sprijin la taxa consiliului', ti: 'ናይ Council Tax ሓገዝ ምሕታት', pl: 'Wniosek o dofinansowanie podatku', cs: 'Žádost o podporu s místní daní', ps: 'د شورا د مالیې ملاتړ لپاره غوښتنه کول', pt: 'Solicitar apoio para o imposto', es: 'Solicitar ayuda para el impuesto municipal', fr: "Demander une aide pour la taxe d'habitation", sk: 'Žiadosť o podporu s miestnou daňou', hi: 'काउंसिल टैक्स सहायता के लिए आवेदन करें' }, template: 'appointment' },
                { id: 'ct_other', title: { en: 'Other enquiry', 'zh-hk': '其他查詢', bn: 'অন্যান্য জিজ্ঞাসা', ar: 'استفسار آخر', fa: 'سوالات دیگر', ckb: 'پرسیاری تر', ur: 'دیگر استفسار', prs: 'سوالات دیگر', ro: 'Alte întrebări', ti: 'ካልእ ሕቶ', pl: 'Inne zapytanie', cs: 'Jiný dotaz', ps: 'نورې پوښتنې', pt: 'Outra questão', es: 'Otra consulta', fr: "Autre demande", sk: 'Iný dopyt', hi: 'अन्य पूछताछ' }, template: 'ticket' }
            ]
        },
        {
            id: 'housingapp',
            title: { en: 'Housing application', 'zh-hk': '房屋申請', bn: 'আবাসন আবেদন', ar: 'طلب إسكان', fa: 'درخواست مسکن', ckb: 'داواکاری خانوبەرە', ur: 'رہائش کی درخواست', prs: 'درخواست مسکن', ro: 'Cerere de locuință', ti: 'ናይ ገዛ ረዲኤት', pl: 'Wniosek o mieszkanie socjalne', cs: 'Žádost o bydlení', ps: 'د کور غوښتنلیک', pt: 'Candidatura a Habitação', es: 'Solicitud de Vivienda', fr: 'Demande de Logement', sk: 'Žiadosť o bývanie', hi: 'आवास आवेदन' },
            services: [
                { id: 'ha_new', title: { en: 'New housing application', 'zh-hk': '新房屋申請', bn: 'নতুন আবাসন আবেদন', ar: 'طلب إسكان جديد', fa: 'درخواست جدید مسکن', ckb: 'داواکاری نوێی خانوبەرە', ur: 'نئی رہائش کی درخواست', prs: 'درخواست جدید مسکن', ro: 'Cerere nouă de locuință', ti: 'ሓዱሽ ናይ ገዛ ረዲኤት', pl: 'Nowy wniosek o mieszkanie', cs: 'Nová žádost o bydlení', ps: 'د کور نوی غوښتنلیک', pt: 'Nova candidatura a habitação', es: 'Nueva solicitud de vivienda', fr: 'Nouvelle demande de logement', sk: 'Nová žiadosť o bývanie', hi: 'नया आवास आवेदन' }, template: 'appointment' },
                { id: 'ha_renew', title: { en: 'Housing application renewal', 'zh-hk': '房屋申請續期', bn: 'আবাসন আবেদন নবায়ন', ar: 'تجديد طلب الإسكان', fa: 'تمدید درخواست مسکن', ckb: 'نوێکردنەوەی داواکاری خانوبەرە', ur: 'رہائش کی درخواست کی تجدید', prs: 'تمدید درخواست مسکن', ro: 'Reînnoire cerere locuință', ti: 'ናይ ገዛ ረዲኤት ምሕዳስ', pl: 'Odnowienie wniosku o mieszkanie', cs: 'Obnovení žádosti o bydlení', ps: 'د کور غوښتنلیک نوي کول', pt: 'Renovação de candidatura a habitação', es: 'Renovación de solicitud de vivienda', fr: 'Renouvellement de demande de logement', sk: 'Obnova žiadosti o bývanie', hi: 'आवास आवेदन नवीनीकरण' }, template: 'appointment' },
                { id: 'ha_status', title: { en: 'Check application status', 'zh-hk': '查詢申請進度', bn: 'আবেদনের অবস্থা পরীক্ষা করুন', ar: 'التحقق من حالة الطلب', fa: 'بررسی وضعیت درخواست', ckb: 'پشکنینی دۆخی داواکاری', ur: 'درخواست کی صورتحال چیک کریں', prs: 'بررسی وضعیت درخواست', ro: 'Verificați stadiul cererii', ti: 'ኩነታት ናይቲ ዝሓተትኩሞ ምርኣይ', pl: 'Sprawdź status wniosku', cs: 'Kontrola stavu žádosti', ps: 'د غوښتنلیک وضعیت چیک کول', pt: 'Verificar estado da candidatura', es: 'Consultar estado de la solicitud', fr: "Vérifier l'état de la demande", sk: 'Skontrolovať stav žiadosti', hi: 'आवेदन की स्थिति जांचें' }, template: 'ticket' },
                { id: 'ha_priority', title: { en: 'Extend your priority', 'zh-hk': '延長優先權', bn: 'আপনার অগ্রাধিকার বাড়ান', ar: 'تمديد الأولوية', fa: 'تمدید اولویت', ckb: 'درێژکردنەوەی لەپێشینەیی', ur: 'اپنی ترجیح میں توسیع کریں', prs: 'تمدید اولویت', ro: 'Extindere prioritate', ti: 'ቀዳምነትኩም ምናዋሕ', pl: 'Przedłużenie priorytetu', cs: 'Prodloužení priority', ps: 'خپل لومړیتوب پراخول', pt: 'Prolongar a sua prioridade', es: 'Extender su prioridad', fr: 'Prolonger votre priorité', sk: 'Predĺženie priority', hi: 'अपनी प्राथमिकता बढ़ाएं' }, template: 'ticket' },
                { id: 'ha_pwd', title: { en: 'Forgot password', 'zh-hk': '忘記密碼', bn: 'পাসওয়ার্ড ভুলে গেছেন', ar: 'نسيت كلمة المرور', fa: 'فراموشی رمز عبور', ckb: 'وشەی نهێنیت لەبیرکردووە', ur: 'پاس ورڈ بھول گئے', prs: 'فراموشی رمز عبور', ro: 'Ați uitat parola', ti: 'ፓስዎርድ ረሲዐ', pl: 'Zapomniałem hasła', cs: 'Zapomenuté heslo', ps: 'پټنوم مو هېر شوی', pt: 'Esqueci-me da palavra-passe', es: 'Olvidé mi contraseña', fr: 'Mot de passe oublié', sk: 'Zabudnuté heslo', hi: 'पासवर्ड भूल गए' }, template: 'ticket' },
                { id: 'ha_homeless', title: { en: 'Facing homelessness', 'zh-hk': '面臨無家可歸', bn: 'গৃহহীনতার সম্মুখীন', ar: 'مواجهة التشرد', fa: 'مواجهه با بی‌خانمانی', ckb: 'ڕووبەڕووبوونەوەی بێ ماڵی', ur: 'بے گھری کا سامنا', prs: 'مواجهه با بی‌خانمانی', ro: 'Risc de a rămâne fără adăpost', ti: 'ገዛ ናይ ምስኣን ጸገም', pl: 'Zagrożenie bezdomnością', cs: 'Hrozba bezdomovectví', ps: 'د بې کورۍ سره مخ کیدل', pt: 'Risco de sem-abrigo', es: 'Enfrentando riesgo de falta de vivienda', fr: "Risque de se retrouver sans abri", sk: 'Hrozba bezdomovectva', hi: 'बेघर होने का सामना' }, template: 'ticket' },
                { id: 'ha_other', title: { en: 'Other enquiry', 'zh-hk': '其他查詢', bn: 'অন্যান্য জিজ্ঞাসা', ar: 'استفسار آخر', fa: 'سوالات دیگر', ckb: 'پرسیاری تر', ur: 'دیگر استفسار', prs: 'سوالات دیگر', ro: 'Alte întrebări', ti: 'ካልእ ሕቶ', pl: 'Inne zapytanie', cs: 'Jiný dotaz', ps: 'نورې پوښتنې', pt: 'Outra questão', es: 'Otra consulta', fr: "Autre demande", sk: 'Iný dopyt', hi: 'अन्य पूछताछ' }, template: 'ticket' }
            ]
        },
        {
            id: 'counciltenant',
            title: { en: 'Council tenant', 'zh-hk': '公共房屋租戶服務', bn: 'কাউন্সিল ভাড়াটিয়া', ar: 'مستأجر من المجلس', fa: 'مستاجر شورای شهر', ckb: 'کرێچی ئەنجومەن', ur: 'کونسل کے کرایہ دار', prs: 'مستاجر شورای شهر', ro: 'Chiriaș la consiliu', ti: 'Council Tenant', pl: 'Najemca mieszkania socjalnego', cs: 'Nájemník městského bytu', ps: 'د شورا کرایه دار', pt: 'Inquilino Municipal', es: 'Inquilino municipal', fr: 'Locataire du parc social', sk: 'Nájomca mestského bytu', hi: 'काउंसिल किरायेदार' },
            services: [
                { id: 'cten_balance', title: { en: 'Check rent balance', 'zh-hk': '查詢租金結餘', bn: 'ভাড়ার ব্যালেন্স পরীক্ষা করুন', ar: 'التحقق من رصيد الإيجار', fa: 'بررسی موجودی اجاره', ckb: 'پشکنینی باڵانسی کرێ', ur: 'کرایہ کا بیلنس چیک کریں', prs: 'بررسی موجودی کرایه', ro: 'Verificați soldul chiriei', ti: 'ናይ ክራይ ዝተረፈ ምርኣይ', pl: 'Sprawdź saldo czynszu', cs: 'Kontrola nedoplatků na nájmu', ps: 'د کرایې توازن چیک کول', pt: 'Verificar saldo da renda', es: 'Consultar saldo de alquiler', fr: 'Vérifier le solde du loyer', sk: 'Skontrolovať zostatok nájomného', hi: 'किराये का शेष जांचें' }, template: 'ticket' },
                { id: 'cten_repair1', title: { en: 'Raise a repair', 'zh-hk': '提出一項維修要求', bn: 'মেরামতের জন্য অনুরোধ করুন', ar: 'طلب إصلاح', fa: 'ثبت درخواست تعمیر', ckb: 'داواکردنی چاککردنەوە', ur: 'مرمت کی درخواست کریں', prs: 'ثبت درخواست ترمیم', ro: 'Solicitați o reparație', ti: 'ሕቶ ጽገና ምቕራብ', pl: 'Zgłoś usterkę', cs: 'Nahlásit opravu', ps: 'د ترمیم غوښتنه کول', pt: 'Solicitar uma reparação', es: 'Solicitar una reparación', fr: 'Demander une réparation', sk: 'Nahlásiť opravu', hi: 'मरम्मत का अनुरोध करें' }, template: 'ticket' },
                { id: 'cten_repair2', title: { en: 'Raise more than one repairs', 'zh-hk': '提出多項維修要求', bn: 'একাধিক মেরামতের জন্য অনুরোধ করুন', ar: 'طلب أكثر من إصلاح', fa: 'ثبت بیش از یک تعمیر', ckb: 'داواکردنی زیاتر لە یەک چاککردنەوە', ur: 'ایک سے زیادہ مرمت کی درخواست کریں', prs: 'ثبت بیش از یک ترمیم', ro: 'Solicitați mai multe reparații', ti: 'ካብ ሓደ ንላዕሊ ጽገናታት ምሕታት', pl: 'Zgłoś wiele usterek', cs: 'Nahlásit více oprav', ps: 'د یو څخه زیاتو ترمیمونو غوښتنه کول', pt: 'Solicitar mais de uma reparação', es: 'Solicitar más de una reparación', fr: 'Demander plusieurs réparations', sk: 'Nahlásiť viac opráv', hi: 'एक से अधिक मरम्मत का अनुरोध करें' }, template: 'appointment' },
                { id: 'cten_keyfob', title: { en: 'Request a key fob', 'zh-hk': '申請電子門匙 (Key fob)', bn: 'একটি কি-ফব (Key fob) অনুরোধ করুন', ar: 'طلب مفتاح إلكتروني (Key fob)', fa: 'درخواست کلید الکترونیکی (Key fob)', ckb: 'داواکردنی کلیلێکی ئەلیکترۆنی', ur: 'الیکٹرانک چابی (Key fob) کی درخواست کریں', prs: 'درخواست کلید الکترونیکی (Key fob)', ro: 'Solicitați un breloc de acces (Key fob)', ti: 'ኤሌክትሮኒክ መክፈቲ (Key fob) ምሕታት', pl: 'Wniosek o elektroniczny klucz (Key fob)', cs: 'Žádost o elektronický klíč (Key fob)', ps: 'د بریښنایی کیلي (Key fob) غوښتنه کول', pt: 'Solicitar um comando de acesso (Key fob)', es: 'Solicitar un llavero electrónico (Key fob)', fr: "Demander un badge d'accès (Key fob)", sk: 'Žiadosť o elektronický kľúč (Key fob)', hi: 'इलेक्ट्रॉनिक चाबी (Key fob) का अनुरोध करें' }, template: 'info_keyfob' },
                { id: 'cten_keys', title: { en: 'Return keys or submit termination', 'zh-hk': '交還門匙或終止租約', bn: 'চাবি ফেরত দিন বা চুক্তি বাতিলের জমা দিন', ar: 'إعادة المفاتيح أو تقديم إنهاء العقد', fa: 'بازگرداندن کلیدها یا ثبت پایان قرارداد', ckb: 'گەڕاندنەوەی کلیل یان پێشکەشکردنی کۆتاییهێنان', ur: 'چابیاں واپس کریں یا معاہدہ ختم کرنے کی درخواست جمع کرائیں', prs: 'بازگرداندن کلیدها یا ثبت پایان قرارداد', ro: 'Returnați cheile sau reziliați contractul', ti: 'መፍትሕ ምምላስ ወይ ውዕል ምቁራጽ', pl: 'Zwrot kluczy lub wypowiedzenie umowy', cs: 'Vrácení klíčů nebo ukončení nájmu', ps: 'کیلي ګانې بیرته ورکول یا تړون پای ته رسول', pt: 'Devolver chaves ou entregar rescisão', es: 'Devolver llaves o presentar terminación de contrato', fr: 'Rendre les clés ou soumettre une résiliation', sk: 'Vrátenie kľúčov alebo ukončenie nájmu', hi: 'चाबियां वापस करें या समाप्ति प्रस्तुत करें' }, template: 'ticket' },
                { id: 'cten_pets', title: { en: 'Permission for pets / alteration', 'zh-hk': '申請飼養寵物 / 房屋改建', bn: 'পোষা প্রাণী / পরিবর্তনের জন্য অনুমতি', ar: 'إذن للحيوانات الأليفة / إجراء تعديل', fa: 'اجازه نگهداری حیوان خانگی / تغییرات ساختمان', ckb: 'مۆڵەت بۆ ئاژەڵی ماڵی / گۆڕانکاری', ur: 'پالتو جانوروں / تبدیلیوں کی اجازت', prs: 'اجازه نگهداری حیوان خانگی / تغییرات ساختمان', ro: 'Permisiune pentru animale de companie / modificări', ti: 'ፍቓድ ንእንስሳ ዘቤት / ምምሕያሽ ገዛ', pl: 'Pozwolenie na zwierzęta / przebudowę', cs: 'Povolení pro domácí mazlíčky / úpravy', ps: 'د څارویو / بدلون لپاره اجازه', pt: 'Permissão para animais / alterações', es: 'Permiso para mascotas / modificaciones', fr: 'Autorisation pour animaux / travaux', sk: 'Povolenie pre zvieratá / úpravy', hi: 'पालतू जानवरों / संशोधन के लिए अनुमति' }, template: 'ticket' },
                { id: 'cten_other', title: { en: 'Other enquiry', 'zh-hk': '其他查詢', bn: 'অন্যান্য জিজ্ঞাসা', ar: 'استفسار آخر', fa: 'سوالات دیگر', ckb: 'پرسیاری تر', ur: 'دیگر استفسار', prs: 'سوالات دیگر', ro: 'Alte întrebări', ti: 'ካልእ ሕቶ', pl: 'Inne zapytanie', cs: 'Jiný dotaz', ps: 'نورې پوښتنې', pt: 'Outra questão', es: 'Otra consulta', fr: "Autre demande", sk: 'Iný dopyt', hi: 'अन्य पूछताछ' }, template: 'ticket' }
            ]
        },
        {
            id: 'financialhelp',
            title: { en: 'Financial help', 'zh-hk': '經濟援助', bn: 'আর্থিক সহায়তা', ar: 'مساعدة مالية', fa: 'کمک مالی', ckb: 'یارمەتی دارایی', ur: 'مالی مدد', prs: 'کمک مالی', ro: 'Ajutor financiar', ti: 'ፋይናንሳዊ ሓገዝ', pl: 'Pomoc finansowa', cs: 'Finanční pomoc', ps: 'مالي مرسته', pt: 'Ajuda Financeira', es: 'Ayuda Económica', fr: 'Aide Financière', sk: 'Finančná pomoc', hi: 'आर्थिक सहायता' },
            services: [
                { id: 'fin_food', title: { en: 'Food voucher', 'zh-hk': '食物券', bn: 'ফুড ভাউচার', ar: 'قسيمة طعام', fa: 'کوپن غذا', ckb: 'پسوڵەی خۆراک', ur: 'فوڈ واؤچر', prs: 'کوپن غذا', ro: 'Tichete de masă', ti: 'ናይ መግቢ ኩፖን', pl: 'Bon żywnościowy', cs: 'Poukaz na jídlo', ps: 'د خوړو واوچر', pt: 'Vale de Alimentação', es: 'Vale de Comida', fr: 'Bon Alimentaire', sk: 'Poukážka na jedlo', hi: 'भोजन वाउचर' }, template: 'ticket' },
                { id: 'fin_sim', title: { en: 'Request a SIM card', 'zh-hk': '索取 SIM 卡 (電話卡)', bn: 'একটি সিম কার্ডের অনুরোধ করুন', ar: 'طلب شريحة هاتف (SIM)', fa: 'درخواست سیم‌کارت', ckb: 'داواکردنی سیمکارت', ur: 'سم کارڈ کی درخواست کریں', prs: 'درخواست سیم کارت', ro: 'Solicitați o cartelă SIM', ti: 'ሲም ካርድ ምሕታት', pl: 'Wniosek o kartę SIM', cs: 'Žádost o SIM kartu', ps: 'د سیم کارت غوښتنه کول', pt: 'Solicitar um cartão SIM', es: 'Solicitar una tarjeta SIM', fr: 'Demander une carte SIM', sk: 'Žiadosť o SIM kartu', hi: 'सिम कार्ड का अनुरोध करें' }, template: 'ticket' },
                { id: 'fin_ct', title: { en: 'Apply for council tax support', 'zh-hk': '申請市政稅援助', bn: 'কাউন্সিল ট্যাক্স সহায়তার জন্য আবেদন করুন', ar: 'التقديم على دعم ضريبة المجلس', fa: 'درخواست کمک هزینه مالیات شورا', ckb: 'داواکاری بۆ پاڵپشتی باجی ئەنجومەن', ur: 'کونسل ٹیکس سپورٹ کے لیے درخواست دیں', prs: 'درخواست کمک هزینه مالیات شورا', ro: 'Aplicați pentru sprijin la taxa consiliului', ti: 'ናይ Council Tax ሓገዝ ምሕታት', pl: 'Wniosek o dofinansowanie podatku', cs: 'Žádost o podporu s místní daní', ps: 'د شورا د مالیې ملاتړ لپاره غوښتنه کول', pt: 'Solicitar apoio para o imposto', es: 'Solicitar ayuda para el impuesto municipal', fr: "Demander une aide pour la taxe d'habitation", sk: 'Žiadosť o podporu s miestnou daňou', hi: 'काउंसिल टैक्स सहायता के लिए आवेदन करें' }, template: 'appointment' },
                { id: 'fin_hb', title: { en: 'Apply for housing benefits', 'zh-hk': '申請房屋津貼', bn: 'আবাসন সুবিধার জন্য আবেদন করুন', ar: 'التقديم على إعانات الإسكان', fa: 'درخواست کمک هزینه مسکن', ckb: 'داواکاری بۆ دەرماڵەی خانوبەرە', ur: 'ہاؤسنگ بینیفٹ کے لیے درخواست دیں', prs: 'درخواست کمک هزینه مسکن', ro: 'Aplicați pentru ajutoare de locuință', ti: 'ናይ ገዛ ረዲኤት ምሕታት', pl: 'Wniosek o dodatek mieszkaniowy', cs: 'Žádost o příspěvek na bydlení', ps: 'د کور د ګټو لپاره غوښتنه کول', pt: 'Solicitar subsídio de habitação', es: 'Solicitar beneficios de vivienda', fr: 'Demander des allocations de logement', sk: 'Žiadosť o príspevok na bývanie', hi: 'आवास लाभ के लिए आवेदन करें' }, template: 'appointment' },
                { id: 'fin_rent', title: { en: 'Apply for rent support (bond, shortfall / arrears)', 'zh-hk': '申請租金援助 (按金/差額/欠租)', bn: 'ভাড়া সহায়তার জন্য আবেদন করুন (বন্ড, ঘাটতি / বকেয়া)', ar: 'التقديم على دعم الإيجار', fa: 'درخواست کمک هزینه اجاره', ckb: 'داواکاری بۆ پاڵپشتی کرێ', ur: 'کرایہ میں مدد کے لیے درخواست دیں', prs: 'درخواست کمک هزینه کرایه', ro: 'Aplicați pentru sprijin la chirie', ti: 'ናይ ክራይ ሓገዝ ምሕታት', pl: 'Wniosek o dopłatę do czynszu', cs: 'Žádost o podporu na nájemné', ps: 'د کرایې ملاتړ لپاره غوښتنه کول', pt: 'Solicitar apoio à renda', es: 'Solicitar ayuda para el alquiler', fr: 'Demander une aide au loyer', sk: 'Žiadosť o podporu na nájomné', hi: 'किराया सहायता के लिए आवेदन करें' }, template: 'appointment' },
                { id: 'fin_whitegoods', title: { en: 'Apply for white goods / furniture', 'zh-hk': '申請大型家電 / 傢俬援助', bn: 'সাদা পণ্য (white goods) / আসবাবপত্রের জন্য আবেদন করুন', ar: 'التقديم للحصول على أجهزة منزلية / أثاث', fa: 'درخواست لوازم خانگی / مبلمان', ckb: 'داواکاری بۆ کەلوپەلی ناوماڵ / مۆبیلیات', ur: 'گھریلو سامان / فرنیچر کے لیے درخواست دیں', prs: 'درخواست لوازم خانگی / فرنیچر', ro: 'Aplicați pentru electrocasnice / mobilier', ti: 'ናይ ገዛ ኣቕሑ / ፈርኒቸር ምሕታት', pl: 'Wniosek o sprzęt AGD / meble', cs: 'Žádost o spotřebiče / nábytek', ps: 'د کورني وسایلو / فرنیچر لپاره غوښتنه کول', pt: 'Solicitar eletrodomésticos / móveis', es: 'Solicitar electrodomésticos / muebles', fr: 'Demander de l’électroménager / des meubles', sk: 'Žiadosť o spotrebiče / nábytok', hi: 'घरेलू उपकरणों / फर्नीचर के लिए आवेदन करें' }, template: 'appointment' },
                { id: 'fin_energy', title: { en: 'Apply for help with energy bills', 'zh-hk': '申請能源帳單援助', bn: 'শক্তি (এনার্জি) বিলের সহায়তার জন্য আবেদন করুন', ar: 'التقديم للحصول على مساعدة في فواتير الطاقة', fa: 'درخواست کمک برای قبوض انرژی', ckb: 'داواکاری بۆ یارمەتی پسوڵەی وزە', ur: 'توانائی کے بلوں میں مدد کے لیے درخواست دیں', prs: 'درخواست کمک برای بل‌های انرژی', ro: 'Aplicați pentru ajutor la facturile de energie', ti: 'ናይ ጸዓት (ኤሌክትሪክ/ጋዝ) ቢል ሓገዝ ምሕታት', pl: 'Wniosek o pomoc w rachunkach za energię', cs: 'Žádost o pomoc s účty za energie', ps: 'د انرژي بلونو کې د مرستې لپاره غوښتنه کول', pt: 'Solicitar ajuda para contas de energia', es: 'Solicitar ayuda con las facturas de energía', fr: "Demander une aide pour les factures d'énergie", sk: 'Žiadosť o pomoc s účtami za energie', hi: 'ऊर्जा बिलों में मदद के लिए आवेदन करें' }, template: 'appointment' },
                { id: 'fin_other', title: { en: 'Other enquiry', 'zh-hk': '其他查詢', bn: 'অন্যান্য জিজ্ঞাসা', ar: 'استفسار آخر', fa: 'سوالات دیگر', ckb: 'پرسیاری تر', ur: 'دیگر استفسار', prs: 'سوالات دیگر', ro: 'Alte întrebări', ti: 'ካልእ ሕቶ', pl: 'Inne zapytanie', cs: 'Jiný dotaz', ps: 'نورې پوښتنې', pt: 'Outra questão', es: 'Otra consulta', fr: "Autre demande", sk: 'Iný dopyt', hi: 'अन्य पूछताछ' }, template: 'ticket' }
            ]
        },
        {
            id: 'jobshop',
            title: { en: 'Job shop', 'zh-hk': '求職中心 (Job shop)', bn: 'জব শপ', ar: 'مركز البحث عن عمل (Job shop)', fa: 'مرکز کاریابی (Job shop)', ckb: 'سەنتەری دۆزینەوەی کار (Job shop)', ur: 'جاب شاپ', prs: 'مرکز کاریابی (Job shop)', ro: 'Centrul de locuri de muncă (Job shop)', ti: 'ማእከል ስራሕ (Job shop)', pl: 'Centrum ofert pracy (Job shop)', cs: 'Centrum zprostředkování práce (Job shop)', ps: 'د کار موندنې مرکز (Job shop)', pt: 'Centro de Emprego (Job shop)', es: 'Centro de Empleo (Job shop)', fr: "Boutique de l'emploi (Job shop)", sk: 'Centrum hľadania práce (Job shop)', hi: 'जॉब शॉप' },
            direct_template: 'info_jobshop'
        },
        {
            id: 'attendappt',
            title: { en: 'Attend an appointment', 'zh-hk': '出席預約', bn: 'একটি অ্যাপয়েন্টমেন্টে যোগ দিন', ar: 'حضور موعد', fa: 'شرکت در یک قرار ملاقات', ckb: 'ئامادەبوون لە چاوپێکەوتن', ur: 'اپوائنٹمنٹ میں شرکت کریں', prs: 'شرکت در وقت ملاقات', ro: 'Participați la o programare', ti: 'ኣብ ቆጸራ ምእታው', pl: 'Przyjdź na umówione spotkanie', cs: 'Dostavit se na schůzku', ps: 'په لیدنه کې ګډون کول', pt: 'Comparecer a uma marcação', es: 'Asistir a una cita', fr: 'Se présenter à un rendez-vous', sk: 'Zúčastniť sa stretnutia', hi: 'एक अपॉइंटमेंट में भाग लें' },
            services: [
                { id: 'app_cs', title: { en: 'Customer service', 'zh-hk': '客戶服務', bn: 'গ্রাহক সেবা', ar: 'خدمة العملاء', fa: 'خدمات مشتریان', ckb: 'خزمەتگوزاری کڕیاران', ur: 'کسٹمر سروس', prs: 'خدمات مشتریان', ro: 'Servicii clienți', ti: 'ግልጋሎት ዓማዊል', pl: 'Obsługa klienta', cs: 'Zákaznický servis', ps: 'د پیرودونکو خدمتونه', pt: 'Apoio ao Cliente', es: 'Servicio al Cliente', fr: 'Service Client', sk: 'Zákaznícky servis', hi: 'ग्राहक सेवा' }, template: 'ticket' },
                { id: 'app_tenancy', title: { en: 'Tenancy sign-up', 'zh-hk': '簽署租約', bn: 'ভাড়াটিয়া চুক্তি স্বাক্ষর', ar: 'توقيع عقد الإيجار', fa: 'امضای قرارداد اجاره', ckb: 'ئیمزاکردنی کرێچییەتی', ur: 'کرایہ داری کے معاہدے پر دستخط', prs: 'امضای قرارداد اجاره', ro: 'Semnare contract închiriere', ti: 'ክራይ ምፍራም', pl: 'Podpisanie umowy najmu', cs: 'Podpis nájemní smlouvy', ps: 'د کرایې تړون لاسلیک کول', pt: 'Assinatura do contrato de arrendamento', es: 'Firma de contrato de alquiler', fr: 'Signature de bail', sk: 'Podpis nájomnej zmluvy', hi: 'किरायेदारी समझौता हस्ताक्षर' }, template: 'ticket' },
                { id: 'app_money', title: { en: 'Money buddies', 'zh-hk': '理財指導 (Money buddies)', bn: 'মানি বাডিস (Money buddies)', ar: 'Money buddies', fa: 'Money buddies', ckb: 'Money buddies', ur: 'Money buddies', prs: 'Money buddies', ro: 'Money buddies', ti: 'Money buddies', pl: 'Money buddies (Doradztwo finansowe)', cs: 'Money buddies', ps: 'Money buddies', pt: 'Money buddies', es: 'Money buddies', fr: 'Money buddies', sk: 'Money buddies', hi: 'Money buddies' }, template: 'ticket' },
                { id: 'app_welfare', title: { en: 'Welfare rights', 'zh-hk': '福利權益', bn: 'কল্যাণমূলক অধিকার (Welfare rights)', ar: 'حقوق الرعاية الاجتماعية', fa: 'حقوق رفاهی', ckb: 'مافەکانی چاودێری کۆمەڵایەتی', ur: 'فلاحی حقوق', prs: 'حقوق رفاهی', ro: 'Drepturi asistență socială', ti: 'መሰል ረዲኤት', pl: 'Prawa do świadczeń socjalnych', cs: 'Práva na sociální dávky', ps: 'د هوساینې حقونه', pt: 'Direitos de Segurança Social', es: 'Derechos de bienestar', fr: 'Droits sociaux', sk: 'Práva na sociálne dávky', hi: 'कल्याणकारी अधिकार' }, template: 'ticket' },
                { id: 'app_linking', title: { en: 'Linking Leeds', 'zh-hk': 'Linking Leeds 服務', bn: 'লিঙ্কিং লিডস (Linking Leeds)', ar: 'Linking Leeds', fa: 'Linking Leeds', ckb: 'Linking Leeds', ur: 'Linking Leeds', prs: 'Linking Leeds', ro: 'Linking Leeds', ti: 'Linking Leeds', pl: 'Linking Leeds', cs: 'Linking Leeds', ps: 'Linking Leeds', pt: 'Linking Leeds', es: 'Linking Leeds', fr: 'Linking Leeds', sk: 'Linking Leeds', hi: 'Linking Leeds' }, template: 'ticket' },
                { id: 'app_pathways', title: { en: 'Leeds Pathways', 'zh-hk': 'Leeds Pathways 服務', bn: 'লিডস পাথওয়েজ (Leeds Pathways)', ar: 'Leeds Pathways', fa: 'Leeds Pathways', ckb: 'Leeds Pathways', ur: 'Leeds Pathways', prs: 'Leeds Pathways', ro: 'Leeds Pathways', ti: 'Leeds Pathways', pl: 'Leeds Pathways', cs: 'Leeds Pathways', ps: 'Leeds Pathways', pt: 'Leeds Pathways', es: 'Leeds Pathways', fr: 'Leeds Pathways', sk: 'Leeds Pathways', hi: 'Leeds Pathways' }, template: 'ticket' },
                { id: 'app_citizens', title: { en: 'Citizens advice', 'zh-hk': '公民諮詢 (Citizens advice)', bn: 'সিটিজেনস অ্যাডভাইস (Citizens advice)', ar: 'Citizens advice', fa: 'Citizens advice', ckb: 'Citizens advice', ur: 'Citizens advice', prs: 'Citizens advice', ro: 'Citizens advice', ti: 'Citizens advice', pl: 'Citizens advice', cs: 'Citizens advice', ps: 'Citizens advice', pt: 'Citizens advice', es: 'Citizens advice', fr: 'Citizens advice', sk: 'Citizens advice', hi: 'Citizens advice' }, template: 'ticket' },
                { id: 'app_smoking', title: { en: 'Stop smoking clinic', 'zh-hk': '戒煙診所', bn: 'ধূমপান বন্ধ করার ক্লিনিক', ar: 'عيادة الإقلاع عن التدخين', fa: 'کلینیک ترک سیگار', ckb: 'کلینیکی وازهێنان لە جگەرەکێشان', ur: 'تمباکو نوشی ترک کرنے کا کلینک', prs: 'کلینیک ترک سگرت', ro: 'Clinică pentru renunțare la fumat', ti: 'ክሊኒክ ምቁራጽ ሽጋራ', pl: 'Klinika rzucania palenia', cs: 'Klinika pro odvykání kouření', ps: 'د سګرټ څکولو پریښودو کلینیک', pt: 'Clínica de cessação tabágica', es: 'Clínica para dejar de fumar', fr: 'Clinique de sevrage tabagique', sk: 'Klinika pre odvykanie od fajčenia', hi: 'धूम्रपान निषेध क्लिनिक' }, template: 'ticket' },
                { id: 'app_midwife', title: { en: 'Midwife', 'zh-hk': '助產士', bn: 'মিডওয়াইফ (ধাত্রী)', ar: 'قابلة', fa: 'ماما', ckb: 'مامان', ur: 'دائی / مڈوائف', prs: 'ماما', ro: 'Moașă', ti: 'መሕረሲት', pl: 'Położna', cs: 'Porodní asistentka', ps: 'قابله', pt: 'Parteira', es: 'Matrona / Partera', fr: 'Sage-femme', sk: 'Pôrodná asistentka', hi: 'दाई (मिडवाइफ)' }, template: 'info_sofa' },
                { id: 'app_other', title: { en: 'Other appointment', 'zh-hk': '其他預約', bn: 'অন্যান্য অ্যাপয়েন্টমেন্ট', ar: 'موعد آخر', fa: 'وقت ملاقات دیگر', ckb: 'چاوپێکەوتنی تر', ur: 'دیگر اپوائنٹمنٹ', prs: 'وقت ملاقات دیگر', ro: 'Altă programare', ti: 'ካልእ ቆጸራ', pl: 'Inne spotkanie', cs: 'Jiná schůzka', ps: 'نورې لیدنې', pt: 'Outra marcação', es: 'Otra cita', fr: "Autre rendez-vous", sk: 'Iné stretnutie', hi: 'अन्य अपॉइंटमेंट' }, template: 'info_sofa' }
            ]
        },
        {
            id: 'housingbenefits',
            title: { en: 'Housing benefits', 'zh-hk': '房屋津貼', bn: 'আবাসন সুবিধা', ar: 'إعانات الإسكان', fa: 'کمک هزینه مسکن', ckb: 'دەرماڵەی خانوبەرە', ur: 'ہاؤسنگ بینیفٹ', prs: 'کمک هزینه مسکن', ro: 'Ajutoare pentru locuință', ti: 'ናይ ገዛ ረዲኤት', pl: 'Dodatek mieszkaniowy', cs: 'Příspěvek na bydlení', ps: 'د کور ګټې', pt: 'Subsídio de Habitação', es: 'Beneficios de Vivienda', fr: 'Allocations de Logement', sk: 'Príspevok na bývanie', hi: 'आवास लाभ' },
            services: [
                { id: 'hb_apply', title: { en: 'Apply for housing benefits', 'zh-hk': '申請房屋津貼', bn: 'আবাসন সুবিধার জন্য আবেদন করুন', ar: 'التقديم على إعانات الإسكان', fa: 'درخواست کمک هزینه مسکن', ckb: 'داواکاری بۆ دەرماڵەی خانوبەرە', ur: 'ہاؤسنگ بینیفٹ کے لیے درخواست دیں', prs: 'درخواست کمک هزینه مسکن', ro: 'Aplicați pentru ajutoare de locuință', ti: 'ናይ ገዛ ረዲኤት ምሕታት', pl: 'Wniosek o dodatek mieszkaniowy', cs: 'Žádost o příspěvek na bydlení', ps: 'د کور د ګټو لپاره غوښتنه کول', pt: 'Solicitar subsídio de habitação', es: 'Solicitar beneficios de vivienda', fr: 'Demander des allocations de logement', sk: 'Žiadosť o príspevok na bývanie', hi: 'आवास लाभ के लिए आवेदन करें' }, template: 'appointment' },
                { id: 'hb_discuss', title: { en: 'Discuss housing benefits payment', 'zh-hk': '討論房屋津貼付款', bn: 'আবাসন সুবিধা প্রদান নিয়ে আলোচনা করুন', ar: 'مناقشة مدفوعات إعانات الإسكان', fa: 'بررسی پرداخت کمک هزینه مسکن', ckb: 'گفتوگۆکردن لەسەر پارەدانی دەرماڵەی خانوبەرە', ur: 'ہاؤسنگ بینیفٹ کی ادائیگی پر بات کریں', prs: 'بررسی پرداخت کمک هزینه مسکن', ro: 'Discutați plata ajutorului de locuință', ti: 'ብዛዕባ ክፍሊት ናይ ገዛ ረዲኤት ምዝርራብ', pl: 'Omówienie wypłaty dodatku mieszkaniowego', cs: 'Konzultace výplaty příspěvku na bydlení', ps: 'د کور د ګټو د تادیې په اړه خبرې کول', pt: 'Discutir o pagamento do subsídio de habitação', es: 'Consultar pago de beneficios de vivienda', fr: 'Discuter du paiement des allocations de logement', sk: 'Konzultácia výplaty príspevku na bývanie', hi: 'आवास लाभ भुगतान पर चर्चा करें' }, template: 'ticket' },
                { id: 'hb_letters', title: { en: 'Provide new rent letters', 'zh-hk': '提供新租金信件', bn: 'নতুন ভাড়ার চিঠি প্রদান করুন', ar: 'تقديم خطابات الإيجار الجديدة', fa: 'ارائه نامه‌های جدید اجاره', ckb: 'پێشکەشکردنی نامەی نوێی کرێ', ur: 'کرایہ کے نئے خطوط فراہم کریں', prs: 'ارائه نامه‌های جدید کرایه', ro: 'Furnizați noi scrisori de chirie', ti: 'ሓዱሽ ናይ ክራይ ደብዳቤ ምቕራብ', pl: 'Dostarczenie nowych listów dotyczących czynszu', cs: 'Poskytnutí nových dopisů o nájemném', ps: 'د کرایې نوي لیکونه چمتو کول', pt: 'Fornecer novas cartas de renda', es: 'Proporcionar nuevas cartas de alquiler', fr: 'Fournir de nouvelles lettres de loyer', sk: 'Poskytnutie nových listov o nájomnom', hi: 'नये किराया पत्र प्रदान करें' }, template: 'ticket' },
                { id: 'hb_other', title: { en: 'Other enquiry', 'zh-hk': '其他查詢', bn: 'অন্যান্য জিজ্ঞাসা', ar: 'استفسار آخر', fa: 'سوالات دیگر', ckb: 'پرسیاری تر', ur: 'دیگر استفسار', prs: 'سوالات دیگر', ro: 'Alte întrebări', ti: 'ካልእ ሕቶ', pl: 'Inne zapytanie', cs: 'Jiný dotaz', ps: 'نورې پوښتنې', pt: 'Outra questão', es: 'Otra consulta', fr: "Autre demande", sk: 'Iný dopyt', hi: 'अन्य पूछताछ' }, template: 'ticket' }
            ]
        },
        {
            id: 'parkingservice',
            title: { en: 'Parking service', 'zh-hk': '泊車服務', bn: 'পার্কিং পরিষেবা', ar: 'خدمة مواقف السيارات', fa: 'خدمات پارکینگ', ckb: 'خزمەتگوزاری وەستانی ئۆتۆمبێل', ur: 'پارکنگ سروس', prs: 'خدمات پارکینگ', ro: 'Serviciul de parcare', ti: 'ግልጋሎት ፓርኪንግ', pl: 'Usługi parkingowe', cs: 'Parkovací služby', ps: 'د پارکینګ خدمتونه', pt: 'Serviço de Estacionamento', es: 'Servicio de aparcamiento', fr: 'Service de stationnement', sk: 'Parkovacie služby', hi: 'पार्किंग सेवा' },
            services: [
                { id: 'pk_blue', title: { en: 'Blue badge application / renewal', 'zh-hk': '藍證 (傷殘人士泊車證) 申請/續期', bn: 'ব্লু ব্যাজ (Blue badge) আবেদন / নবায়ন', ar: 'تطبيق / تجديد الشارة الزرقاء (Blue badge)', fa: 'درخواست / تمدید نشان آبی (Blue badge)', ckb: 'داواکاری / نوێکردنەوەی باجی شین (Blue badge)', ur: 'بلیو بیج کی درخواست / تجدید', prs: 'درخواست / تمدید نشان آبی (Blue badge)', ro: 'Cerere / reînnoire ecuson albastru (Blue badge)', ti: 'ብሉ ባጅ (Blue badge) ምሕታት / ምሕዳስ', pl: 'Wniosek o / odnowienie niebieskiej odznaki (Blue badge)', cs: 'Žádost / obnova modrého odznaku (Blue badge)', ps: 'د نیلي نښان (Blue badge) غوښتنلیک / نوي کول', pt: 'Pedido / renovação do dístico azul (Blue badge)', es: 'Solicitud / renovación de tarjeta azul (Blue badge)', fr: 'Demande / renouvellement de macaron bleu (Blue badge)', sk: 'Žiadosť / obnova modrého odznaku (Blue badge)', hi: 'ब्लू बैज आवेदन / नवीनीकरण' }, template: 'appointment' },
                { id: 'pk_permit', title: { en: 'Parking permit', 'zh-hk': '泊車許可證', bn: 'পার্কিং পারমিট', ar: 'تصريح وقوف السيارات', fa: 'مجوز پارکینگ', ckb: 'مۆڵەتی وەستانی ئۆتۆمبێل', ur: 'پارکنگ پرمٹ', prs: 'اجازه نامه پارک', ro: 'Permis de parcare', ti: 'ናይ መኪና ፓርኪንግ ፍቃድ', pl: 'Pozwolenie na parkowanie', cs: 'Parkovací oprávnění', ps: 'د پارکینګ اجازه', pt: 'Dístico de Estacionamento', es: 'Permiso de aparcamiento', fr: 'Permis de stationnement', sk: 'Parkovacie povolenie', hi: 'पार्किंग परमिट' }, template: 'appointment' },
                { id: 'pk_fine', title: { en: 'Parking fine', 'zh-hk': '泊車罰款', bn: 'পার্কিং জরিমানা', ar: 'غرامة وقوف السيارات', fa: 'جریمه پارکینگ', ckb: 'غەرامەی وەستانی ئۆتۆمبێل', ur: 'پارکنگ کا جرمانہ', prs: 'جریمه پارکینگ', ro: 'Amendă de parcare', ti: 'መቕጻዕቲ ፓርኪንግ', pl: 'Mandat za parkowanie', cs: 'Pokuta za parkování', ps: 'د پارکینګ جریمه', pt: 'Multa de estacionamento', es: 'Multa de aparcamiento', fr: 'Amende de stationnement', sk: 'Pokuta za parkovanie', hi: 'पार्किंग जुर्माना' }, template: 'info_parking' },
                { id: 'pk_other', title: { en: 'Other enquiry', 'zh-hk': '其他查詢', bn: 'অন্যান্য জিজ্ঞাসা', ar: 'استفسار آخر', fa: 'سوالات دیگر', ckb: 'پرسیاری تر', ur: 'دیگر استفسار', prs: 'سوالات دیگر', ro: 'Alte întrebări', ti: 'ካልእ ሕቶ', pl: 'Inne zapytanie', cs: 'Jiný dotaz', ps: 'نورې پوښتنې', pt: 'Outra questão', es: 'Otra consulta', fr: "Autre demande", sk: 'Iný dopyt', hi: 'अन्य पूछताछ' }, template: 'ticket' }
            ]
        },
        {
            id: 'otherenquiry',
            title: { en: 'Other enquiry', 'zh-hk': '其他查詢', bn: 'অন্যান্য জিজ্ঞাসা', ar: 'استفسار آخر', fa: 'سوالات دیگر', ckb: 'پرسیاری تر', ur: 'دیگر استفسار', prs: 'سوالات دیگر', ro: 'Alte întrebări', ti: 'ካልእ ሕቶ', pl: 'Inne zapytanie', cs: 'Jiný dotaz', ps: 'نورې پوښتنې', pt: 'Outra questão', es: 'Otra consulta', fr: "Autre demande", sk: 'Iný dopyt', hi: 'अन्य पूछताछ' },
            direct_template: 'ticket'
        }
    ]
};