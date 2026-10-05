(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
   * Content
   * ---------------------------------------------------------------- */
  const t = {
    en: {
      brand: "K. Ragupathi",
      "nav.about": "About",
      "nav.books": "Books",
      "nav.words": "Words",
      "nav.journey": "Journey",
      "nav.contact": "Contact",
      "hero.eyebrow": "Poet · Writer · Teacher",
      "hero.name1": "Vadathinnalur",
      "hero.name2": "K. Ragupathi",
      "hero.lead": "A government school teacher who writes for the students he believes in: modern Tamil poetry, life lessons and guidance that turn darkness into light.",
      "hero.cta1": "Explore the books",
      "hero.cta2": "Meet the author",

      "about.eyebrow": "About the author",
      "about.title": "A teacher in the classroom, a poet on the page.",
      "about.p1": "K. Ragupathi, from Vadathinnalur, is a writer with a distinctive passion for modern Tamil poetry (puthukkavithai). Reading constantly and devoting himself to writing are, for him, simply a part of life.",
      "about.p2": "For more than ten years he has served as a government school teacher, working with deep care and dedication for the education, progress and wellbeing of his students. That bond between teacher and student runs through everything he writes.",
      "about.p3": "Bringing his work in education and his work in literature together, his books reflect a strong sense of social responsibility and a humane outlook, offering school and college students the ideas they need to grow.",
      "about.badge": "years shaping young minds as a teacher",
      "facts.qual.k": "Qualification",
      "facts.qual.v": "M.A., B.Ed.",
      "facts.role.k": "Profession",
      "facts.role.v": "Graduate Teacher (History)",
      "facts.school.k": "School",
      "facts.school.v": "Govt. Higher Secondary School, Vadamanappakkam, Cheyyar",
      "facts.home.k": "Hometown",
      "facts.home.v": "Vadathinnalur, Tiruvannamalai District",
      "stats.books": "Books published",
      "stats.years": "Years of teaching",
      "stats.genres": "Genres: poetry, essays, guidance",
      "stats.since": "First book published",

      "themes.eyebrow": "What he writes",
      "themes.title": "Words written for the next generation",
      "themes.poetry.t": "Poetry",
      "themes.poetry.d": "Modern Tamil verse on society, youth, parents and relationships, often short, always sharp.",
      "themes.essays.t": "Essays & life lessons",
      "themes.essays.d": "Reflections drawn from his own life and classroom, written for today's students.",
      "themes.guide.t": "Student guidance",
      "themes.guide.d": "Practical, heartfelt advice for school and college students, especially those from villages.",
      "themes.stories.t": "Short stories",
      "themes.stories.d": "Small stories with a big heart, carrying everyday wisdom and human values.",

      "books.eyebrow": "The books",
      "books.title": "Three books, one purpose",
      "books.sub": "Each book is written in Tamil. Tap a cover to see the details.",
      "books.more": "Book details",
      "books.book": "Book",

      "meta.year": "Published",
      "meta.genre": "Genre",
      "meta.pages": "Pages",
      "meta.price": "Price",
      "meta.publisher": "Publisher",
      "meta.isbn": "ISBN",

      "words.eyebrow": "From his pages",
      "words.title": "Lines that stay with you",

      "journey.eyebrow": "Journey",
      "journey.title": "A writing life, one book at a time",
      "journey.1.y": "10+ yrs",
      "journey.1.t": "Teaching in government schools",
      "journey.1.d": "Guiding students as a graduate teacher of history, with a lifelong love of reading and writing.",
      "journey.2.t": "Naanum Pesuven",
      "journey.2.d": "His first book: essays drawn from experience, with ideas today's students need.",
      "journey.3.t": "Uyir Perum Pookkal",
      "journey.3.d": "His second book and first poetry collection, published in August 2025.",
      "journey.4.t": "Iruttalla… Velichcham",
      "journey.4.d": "His third book: a short, warm guide for village students stepping into college.",

      "praise.eyebrow": "Kind words",
      "praise.title": "From the forewords",
      "praise.1.q": "The poems on every page shine like stars in the sky. The poet and his poems stand as living witness that a person who lives for society cannot live like an ordinary one.",
      "praise.1.n": "J. Mathivendhan",
      "praise.1.r": "Foreword, Uyir Perum Pookkal",
      "praise.2.q": "Every sweet word he shares with others has taken shape in this book as poetry. Here he expresses his own life and his concern for society.",
      "praise.2.n": "J. Babu",
      "praise.2.r": "Headmaster (Retd.), Greetings, Uyir Perum Pookkal",
      "praise.3.q": "Caring deeply for the welfare of his students, loving them and mingling with them kindly and without partiality, he ennobles his calling as a fine teacher who guides them to grow.",
      "praise.3.n": "Ku. Anbarasu",
      "praise.3.r": "Headmaster (Retd.), Cheyyar, Greetings, Naanum Pesuven",

      "contact.eyebrow": "Get the books",
      "contact.title": "Order a copy or invite the author",
      "contact.p": "The books are available from their publishers. For copies, school talks or reader events, reach out to the publishers below.",
      "pub.kavi.n": "Kavithedal Pathippagam",
      "pub.kavi.a": "2/517, Santhanurmedu, Thippirettiyalli Post, Dharmapuri 635301",
      "pub.kavi.b": "Uyir Perum Pookkal",
      "pub.surabi.n": "Thamizhsurabi Pathippagam",
      "pub.surabi.a": "51/24, Easwaradas Street, Triplicane, Chennai 600005",
      "pub.surabi.b": "Iruttalla… Velichcham",
      "pub.nellai.n": "Nellai Pathippagam",
      "pub.nellai.a": "Triplicane, Chennai 600005",
      "pub.nellai.b": "Naanum Pesuven",

      "footer.quote": "“Education and good conduct alone make a person good.” — Aristotle",
      "footer.rights": "All rights reserved."
    },

    ta: {
      brand: "கா. ரகுபதி",
      "nav.about": "அறிமுகம்",
      "nav.books": "நூல்கள்",
      "nav.words": "வரிகள்",
      "nav.journey": "பயணம்",
      "nav.contact": "தொடர்பு",
      "hero.eyebrow": "கவிஞர் · எழுத்தாளர் · ஆசிரியர்",
      "hero.name1": "வடதின்னலூர்",
      "hero.name2": "கா. ரகுபதி",
      "hero.lead": "தான் நம்பும் மாணவர்களுக்காக எழுதும் அரசுப் பள்ளி ஆசிரியர். புதுக்கவிதைகள், வாழ்வியல் கருத்துக்கள், இருளை வெளிச்சமாக்கும் வழிகாட்டல்கள்.",
      "hero.cta1": "நூல்களைக் காண்க",
      "hero.cta2": "ஆசிரியரை அறிக",

      "about.eyebrow": "ஆசிரியர் அறிமுகம்",
      "about.title": "வகுப்பறையில் ஆசிரியர், பக்கங்களில் கவிஞர்.",
      "about.p1": "வடதின்னலூரைச் சேர்ந்த கா. ரகுபதி அவர்கள் புதுக்கவிதை எழுதுவதில் தனித்துவமான ஆர்வமும் ஈடுபாடும் கொண்ட படைப்பாளர். தொடர்ந்து வாசிப்பதையும் எழுத்துப் பணியில் தன்னை அர்ப்பணிப்பதையும் வாழ்வின் ஓர் அங்கமாகக் கொண்டு செயல்பட்டு வருகிறார்.",
      "about.p2": "அரசுப் பள்ளி ஆசிரியராகப் பத்து ஆண்டுகளுக்கும் மேலாகப் பணியாற்றி வரும் இவர், மாணவர்களின் கல்வி முன்னேற்றம் மற்றும் நலனில் மிகுந்த அக்கறையுடனும் அர்ப்பணிப்புடனும் செயல்பட்டு வருகிறார்.",
      "about.p3": "கல்விப் பணியையும் இலக்கியப் பணியையும் இணைத்துச் சிறப்பாக முன்னெடுத்து வரும் இவரின் படைப்புகள் சமூகப் பொறுப்புணர்வையும் மனிதநேயச் சிந்தனைகளையும் வெளிப்படுத்துகின்றன.",
      "about.badge": "ஆண்டுகளாக மாணவர்களை உருவாக்கும் ஆசிரியர்",
      "facts.qual.k": "கல்வித் தகுதி",
      "facts.qual.v": "M.A., B.Ed.",
      "facts.role.k": "பணி",
      "facts.role.v": "பட்டதாரி ஆசிரியர் (வரலாறு)",
      "facts.school.k": "பள்ளி",
      "facts.school.v": "அரசு மேல்நிலைப் பள்ளி, வடமணப்பாக்கம், செய்யாறு",
      "facts.home.k": "சொந்த ஊர்",
      "facts.home.v": "வடதின்னலூர், திருவண்ணாமலை மாவட்டம்",
      "stats.books": "வெளியான நூல்கள்",
      "stats.years": "ஆண்டுகள் ஆசிரியப் பணி",
      "stats.genres": "வகைகள்: கவிதை, கட்டுரை, வழிகாட்டல்",
      "stats.since": "முதல் நூல் வெளியீடு",

      "themes.eyebrow": "இவரது எழுத்துகள்",
      "themes.title": "அடுத்த தலைமுறைக்கான சொற்கள்",
      "themes.poetry.t": "கவிதைகள்",
      "themes.poetry.d": "சமூகம், இளமை, பெற்றோர், உறவுகள் பற்றிய புதுக்கவிதைகள். சிறியவை, ஆனால் கூர்மையானவை.",
      "themes.essays.t": "அனுபவக் கட்டுரைகள்",
      "themes.essays.d": "தன் வாழ்விலிருந்தும் வகுப்பறையிலிருந்தும் இன்றைய மாணவர்களுக்காக எழுதிய சிந்தனைகள்.",
      "themes.guide.t": "மாணவர் வழிகாட்டல்",
      "themes.guide.d": "பள்ளி, கல்லூரி மாணவர்களுக்கு, குறிப்பாகக் கிராமப்புற மாணவர்களுக்கு, தேவையான கருத்துக்கள்.",
      "themes.stories.t": "சிறுகதைகள்",
      "themes.stories.d": "அன்றாட வாழ்வின் ஞானமும் மனிதநேயமும் சுமந்த சிறிய கதைகள்.",

      "books.eyebrow": "நூல்கள்",
      "books.title": "மூன்று நூல்கள், ஒரே நோக்கம்",
      "books.sub": "அனைத்தும் தமிழ் நூல்கள். விவரங்களுக்கு அட்டையைத் தொடவும்.",
      "books.more": "நூல் விவரம்",
      "books.book": "நூல்",

      "meta.year": "வெளியீடு",
      "meta.genre": "வகை",
      "meta.pages": "பக்கங்கள்",
      "meta.price": "விலை",
      "meta.publisher": "பதிப்பகம்",
      "meta.isbn": "ISBN",

      "words.eyebrow": "அவரது பக்கங்களிலிருந்து",
      "words.title": "மனதில் தங்கும் வரிகள்",

      "journey.eyebrow": "பயணம்",
      "journey.title": "ஒவ்வொரு நூலாக ஓர் எழுத்துப் பயணம்",
      "journey.1.y": "10+ ஆண்டுகள்",
      "journey.1.t": "அரசுப் பள்ளி ஆசிரியப் பணி",
      "journey.1.d": "வரலாற்றுப் பட்டதாரி ஆசிரியராக மாணவர்களுக்கு வழிகாட்டுதல்; வாசிப்பிலும் எழுத்திலும் நீங்காத ஆர்வம்.",
      "journey.2.t": "நானும் பேசுவேன்",
      "journey.2.d": "முதல் நூல்: இன்றைய மாணவர்களுக்குத் தேவையான கருத்துக்கள் கொண்ட அனுபவக் கட்டுரைகள்.",
      "journey.3.t": "உயிர் பெறும் பூக்கள்",
      "journey.3.d": "இரண்டாம் நூல், முதல் கவிதைத் தொகுப்பு. ஆகஸ்ட் 2025இல் வெளியானது.",
      "journey.4.t": "இருட்டல்ல… வெளிச்சம்",
      "journey.4.d": "மூன்றாம் நூல்: கல்லூரிக்குச் செல்லும் கிராமப்புற மாணவர்களுக்கான அன்பான வழிகாட்டி.",

      "praise.eyebrow": "வாழ்த்துகள்",
      "praise.title": "அணிந்துரைகளிலிருந்து",
      "praise.1.q": "ஒவ்வொரு பக்கத்திலும் உள்ள கவிதைகள் வானத்து நட்சத்திரமாய் மிளிர்கின்றன. சமூகம் சார்ந்து இயங்கும் மனிதரால் ஒரு சராசரியானவரைப் போல இயங்க முடியாது என்பதற்குக் கண்முன் சாட்சியாகக் கவிஞர் கா. ரகுபதியும் அவரது கவிதைகளும் விளங்குகின்றன.",
      "praise.1.n": "ஜெ. மதிவேந்தன்",
      "praise.1.r": "அணிந்துரை, உயிர் பெறும் பூக்கள்",
      "praise.2.q": "அவர் மற்றவர்களோடு பகிர்ந்துகொள்ளும் ஒவ்வொரு இனிமையான சொற்களும் இப்புத்தகத்தில் கவிதை மயங்களாக உருப்பெற்றுள்ளன. தன் வாழ்வியலையும் சமூகத்தின் மீதான அக்கறையையும் நூலாசிரியர் வெளிப்படுத்துகிறார்.",
      "praise.2.n": "திரு. ஜெ. பாபு",
      "praise.2.r": "தலைமையாசிரியர் (ஓய்வு), வாழ்த்துரை, உயிர் பெறும் பூக்கள்",
      "praise.3.q": "தனது ஆசிரியர் பணியில் மாணவ சமுதாயத்தின் நலனில் அதிக அக்கறை கொண்டவராக, மாணவர்களை நேசித்து, மாணவரிடையே பாரபட்சமின்றி இனிமையாகப் பழகி, வளர்ச்சிக்கு வழிகாட்டும் சிறந்த ஆசிரியராகத் தனது அறப்பணியை மேன்மைப்படுத்திக் கொண்டிருக்கின்றார்.",
      "praise.3.n": "கு. அன்பரசு",
      "praise.3.r": "தலைமையாசிரியர் (ஓய்வு), செய்யாறு, வாழ்த்துரை, நானும் பேசுவேன்",

      "contact.eyebrow": "நூல்களைப் பெற",
      "contact.title": "நூல் வாங்க அல்லது ஆசிரியரை அழைக்க",
      "contact.p": "நூல்கள் அவற்றின் பதிப்பகங்களில் கிடைக்கின்றன. நூல் பிரதிகள், பள்ளி உரைகள், வாசகர் சந்திப்புகளுக்குக் கீழ்க்காணும் பதிப்பகங்களைத் தொடர்பு கொள்ளவும்.",
      "pub.kavi.n": "கவித்தேடல் பதிப்பகம்",
      "pub.kavi.a": "2/517, சந்தனூர்மேடு, திப்பிரெட்டிஅள்ளி அஞ்சல், தருமபுரி 635301",
      "pub.kavi.b": "உயிர் பெறும் பூக்கள்",
      "pub.surabi.n": "தமிழ்ச்சுரபி பதிப்பகம்",
      "pub.surabi.a": "51/24, ஈஸ்வரதாஸ் தெரு, திருவல்லிக்கேணி, சென்னை 600005",
      "pub.surabi.b": "இருட்டல்ல… வெளிச்சம்",
      "pub.nellai.n": "நெல்லை பதிப்பகம்",
      "pub.nellai.a": "திருவல்லிக்கேணி, சென்னை 600005",
      "pub.nellai.b": "நானும் பேசுவேன்",

      "footer.quote": "“கல்வியும் நன்னடத்தையுமே ஒரு மனிதனை நல்லவனாக்குகின்றன.” — அரிஸ்டாட்டில்",
      "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
  };

  const books = [
    {
      id: "naanum",
      title: "நானும் பேசுவேன்",
      translit: "Naanum Pesuven",
      cover: "assets/img/cover-naanum.jpg",
      glow: "#ff5a3d",
      year: "2023",
      pages: "64",
      price: "₹60",
      isbn: "978-81-969659-9-0",
      en: {
        meaning: "“I Too Will Speak”",
        genre: "Essays from experience",
        tags: ["Essays", "For students", "First book"],
        publisher: "Nellai Pathippagam, Chennai",
        desc: "His debut: a collection of essays drawn from his own life and years in the classroom. Written in simple, warm language, it takes on the issues shaping today's students: mobile phone use, changing attitudes to duty, the attention children need from parents, protecting nature, and the courage to dream and be prepared.",
        excerpt: ""
      },
      ta: {
        meaning: "முதல் நூல்",
        genre: "அனுபவக் கட்டுரைகள்",
        tags: ["கட்டுரைகள்", "மாணவர்களுக்கு", "முதல் நூல்"],
        publisher: "நெல்லை பதிப்பகம், சென்னை",
        desc: "தன் வாழ்வியல் அனுபவங்களைக் கட்டுரைகளாக்கி, இன்றைய நவீன காலத்து மாணவர்களுக்குத் தேவையான கருத்துக்களைத் தொகுத்துத் தந்த முதல் நூல். அலைபேசி பயன்பாடு, மாணவர்களின் கடமைகள், பெற்றோரின் கவனம், இயற்கைப் பாதுகாப்பு, கனவுகள் எனப் பல முக்கியக் கருத்துக்களை எளிய நடையில் பேசுகிறது.",
        excerpt: ""
      }
    },
    {
      id: "uyir",
      title: "உயிர் பெறும் பூக்கள்",
      translit: "Uyir Perum Pookkal",
      cover: "assets/img/cover-uyir.jpg",
      glow: "#8b6cff",
      year: "2025",
      pages: "66",
      price: "₹100",
      isbn: "978-81-992083-4-6",
      excerpt: "வழக்கம் போல்\nபொழுது விடிந்தது\nஎந்த மாற்றமும் இல்லை\nஉயிர் இருக்கிறது",
      en: {
        meaning: "“Flowers That Come Alive”",
        genre: "Poetry collection",
        tags: ["Poetry", "Modern verse", "August 2025"],
        publisher: "Kavithedal Pathippagam, Dharmapuri",
        desc: "A collection of modern Tamil poems that turns memories of youth and the troubles of society into vivid images. The poems touch on society, education, youth, father, mother and relationships, and the bond between teacher and student. Some are tiny and sharp as a fish hook; some longer ones unfold like short stories."
      },
      ta: {
        meaning: "கவிதைத் தொகுப்பு",
        genre: "கவிதைத் தொகுப்பு",
        tags: ["கவிதை", "புதுக்கவிதை", "ஆகஸ்ட் 2025"],
        publisher: "கவித்தேடல் பதிப்பகம், தருமபுரி",
        desc: "சமூகத்தில் காணப்படும் தீமைகளையும் இளமையில் பயணித்த நாட்களையும் காட்சிப் படமாக்கும் கவிதைத் தொகுப்பு. சமூகம், கல்வி, இளமைப் பருவம், தந்தை, தாய், உறவுகள் என அனைத்தையும் தொடுகின்றன இக்கவிதைகள். சில துணுக்குகள் தூண்டில் முள்ளாய்ச் சிக்குகின்றன; சில நெடுங்கவிதைகள் சிறுகதையைப் போலக் கருக்கொள்கின்றன."
      }
    },
    {
      id: "irutalla",
      title: "இருட்டல்ல… வெளிச்சம்",
      translit: "Iruttalla… Velichcham",
      cover: "assets/img/cover-irutalla.jpg",
      glow: "#ff9a2e",
      year: "2026",
      pages: "20",
      price: "₹20",
      isbn: "978-81-69577-10-6",
      excerpt: "கல்வியும்\nநன்னடத்தையுமே\nஒரு மனிதனை\nநல்லவனாக்குகின்றன.\n— அரிஸ்டாட்டில்",
      en: {
        meaning: "“Not Darkness… But Light”",
        genre: "Guidance for students",
        tags: ["Inspiration", "College students", "New"],
        publisher: "Thamizhsurabi Pathippagam, Chennai",
        desc: "Dedicated to the young brothers and sisters who travel from villages to study in college. A short, heartfelt guide that reminds them of their parents' sacrifice, the value of every opportunity, and how education can turn a dark moment into a doorway of light."
      },
      ta: {
        meaning: "மாணவர் வழிகாட்டி",
        genre: "மாணவர் வழிகாட்டல்",
        tags: ["தன்னம்பிக்கை", "கல்லூரி மாணவர்கள்", "புதியது"],
        publisher: "தமிழ்ச்சுரபி பதிப்பகம், சென்னை",
        desc: "கிராமங்களிலிருந்து கல்லூரிக்கு வரக்கூடிய தம்பி, தங்கைகளுக்காக எழுதப்பட்ட நூல். பெற்றோரின் உழைப்பின் மதிப்பையும், கிடைக்கும் வாய்ப்புகளைத் தவறவிடாமல் பயன்படுத்துவதையும், கல்வி எவ்வாறு இருளை வெளிச்சமாக்கும் என்பதையும் அன்புடன் எடுத்துரைக்கிறது."
      }
    }
  ];

  const quotes = [
    {
      ta: "வழக்கம் போல்\nபொழுது விடிந்தது\nஎந்த மாற்றமும் இல்லை\nஉயிர் இருக்கிறது",
      en: "As always, the day dawned.\nNothing has changed.\nThere is still life.",
      src: { en: "Uyir Perum Pookkal", ta: "உயிர் பெறும் பூக்கள்" }
    },
    {
      ta: "புதிய வீடு\nகுடி புகுந்தது\nசிலந்தி",
      en: "Moving into\nthe new house first:\na spider.",
      src: { en: "Uyir Perum Pookkal", ta: "உயிர் பெறும் பூக்கள்" }
    },
    {
      ta: "தன்மானத்துடன்\nதூரத்தில் இருக்கிறது\nவானம்",
      en: "With its self-respect intact,\nthe sky\nkeeps its distance.",
      src: { en: "Uyir Perum Pookkal", ta: "உயிர் பெறும் பூக்கள்" }
    },
    {
      ta: "மனதிலும் கண்களிலும்\nஒட்டிக்கொள்ளும் தொற்று\nவறுமை",
      en: "The infection that clings\nto the mind and the eyes:\npoverty.",
      src: { en: "Uyir Perum Pookkal", ta: "உயிர் பெறும் பூக்கள்" }
    },
    {
      ta: "கல்வியும் நன்னடத்தையுமே\nஒரு மனிதனை\nநல்லவனாக்குகின்றன.",
      en: "Education and good conduct alone\nmake a person good.\n(Aristotle, quoted on the cover)",
      src: { en: "Iruttalla… Velichcham", ta: "இருட்டல்ல… வெளிச்சம்" }
    }
  ];

  /* ------------------------------------------------------------------
   * Language
   * ---------------------------------------------------------------- */
  let lang = "en";
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ta") lang = saved;
    else if ((navigator.language || "").toLowerCase().startsWith("ta")) lang = "ta";
  } catch (_) { /* storage unavailable */ }

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  function splitChars(el) {
    // Tamil letters are grapheme clusters, so split with Intl.Segmenter when available.
    const text = el.textContent;
    const seg = window.Intl && Intl.Segmenter ? new Intl.Segmenter(lang, { granularity: "grapheme" }) : null;
    const graphemes = s => (seg ? Array.from(seg.segment(s), x => x.segment) : Array.from(s));
    el.textContent = "";
    let i = 0;
    text.split(" ").forEach((word, wi, arr) => {
      const w = document.createElement("span");
      w.className = "w";
      graphemes(word).forEach(g => {
        const c = document.createElement("span");
        c.className = "ch";
        c.textContent = g;
        c.style.transitionDelay = `${0.25 + i++ * 0.035}s`;
        w.appendChild(c);
      });
      el.appendChild(w);
      if (wi < arr.length - 1) el.appendChild(document.createTextNode(" "));
    });
  }

  function applyLang() {
    const dict = t[lang];
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    $$("[data-i18n]").forEach(el => {
      const v = dict[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    $$(".split").forEach(splitChars);
    $$("[data-set-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
    positionPill();
    renderBooks();
    renderQuotes();
    observeReveals();
  }

  function positionPill() {
    const active = $(`[data-set-lang="${lang}"]`);
    const pill = $(".lang-pill");
    if (!active || !pill) return;
    pill.style.width = `${active.offsetWidth}px`;
    pill.style.transform = `translateX(${active.offsetLeft - 4}px)`;
  }

  $$("[data-set-lang]").forEach(btn =>
    btn.addEventListener("click", () => {
      if (btn.dataset.setLang === lang) return;
      lang = btn.dataset.setLang;
      try { localStorage.setItem("lang", lang); } catch (_) { /* ignore */ }
      document.body.classList.add("lang-fade");
      setTimeout(() => {
        applyLang();
        requestAnimationFrame(() => document.body.classList.remove("lang-fade"));
      }, reduceMotion ? 0 : 220);
    })
  );
  window.addEventListener("resize", positionPill);

  /* ------------------------------------------------------------------
   * Books
   * ---------------------------------------------------------------- */
  function renderBooks() {
    const list = $("#bookList");
    const d = t[lang];
    list.innerHTML = "";
    books.forEach((b, i) => {
      const L = b[lang];
      const art = document.createElement("article");
      art.className = "book";
      art.innerHTML = `
        <div class="book-visual reveal" style="--glow:${b.glow}">
          <div class="book-3d" tabindex="0" role="button" aria-label="${d["books.more"]}: ${b.title}">
            <div class="back"></div>
            <div class="front"><img src="${b.cover}" alt="${b.title} cover" loading="lazy" /></div>
          </div>
        </div>
        <div class="book-info">
          <span class="book-num reveal">${d["books.book"]} 0${i + 1} · ${b.year}</span>
          <h3 class="reveal">${b.title}</h3>
          <p class="book-translit reveal">${lang === "en" ? `${b.translit} · ${L.meaning}` : b.translit}</p>
          <div class="book-tags reveal">${L.tags.map((tg, k) => `<span class="tag${k === 0 ? " hl" : ""}">${tg}</span>`).join("")}</div>
          <p class="reveal">${L.desc}</p>
          ${b.excerpt ? `<div class="book-excerpt reveal">${b.excerpt}</div>` : ""}
          <button class="link-btn reveal" type="button"><span class="arr">→</span>${d["books.more"]}</button>
        </div>`;
      const open = () => openModal(b);
      $(".book-3d", art).addEventListener("click", open);
      $(".book-3d", art).addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
      $(".link-btn", art).addEventListener("click", open);
      bookTilt($(".book-3d", art));
      list.appendChild(art);
    });
  }

  function bookTilt(el) {
    if (reduceMotion || matchMedia("(hover: none)").matches) return;
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${-8 + x * 22}deg) rotateX(${-y * 14}deg) translateY(-10px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  }

  /* ------------------------------------------------------------------
   * Modal
   * ---------------------------------------------------------------- */
  const modal = $("#bookModal");
  let lastFocus = null;
  function openModal(b) {
    const L = b[lang];
    const d = t[lang];
    lastFocus = document.activeElement;
    $("#modalCover").src = b.cover;
    $("#modalCover").alt = `${b.title} cover`;
    $("#modalGenre").textContent = L.genre;
    $("#modalTitle").textContent = b.title;
    $("#modalTranslit").textContent = lang === "en" ? `${b.translit} · ${L.meaning}` : b.translit;
    $("#modalDesc").textContent = L.desc;
    $("#modalExcerpt").textContent = b.excerpt || "";
    const meta = [
      ["meta.year", b.year], ["meta.genre", L.genre], ["meta.pages", b.pages],
      ["meta.price", b.price], ["meta.publisher", L.publisher], ["meta.isbn", b.isbn]
    ];
    $("#modalMeta").innerHTML = meta.map(([k, v]) => `<dt>${d[k]}</dt><dd>${v}</dd>`).join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal-close", modal).focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $$("[data-close]", modal).forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  /* ------------------------------------------------------------------
   * Quotes carousel
   * ---------------------------------------------------------------- */
  let qi = 0;
  let qTimer = null;
  function renderQuotes() {
    const wrap = $("#quoteSlides");
    const dots = $("#quoteDots");
    wrap.innerHTML = quotes.map((q, i) => `
      <figure class="quote${i === qi ? " active" : ""}">
        <div class="quote-mark">“</div>
        <p>${q.ta}</p>
        ${lang === "en" ? `<p class="tr">${q.en}</p>` : ""}
        <cite>${q.src[lang]}</cite>
      </figure>`).join("");
    dots.innerHTML = quotes.map((_, i) => `<button type="button" role="tab" aria-label="${i + 1}" class="${i === qi ? "active" : ""}"></button>`).join("");
    $$("button", dots).forEach((b, i) => b.addEventListener("click", () => showQuote(i)));
    restartQuotes();
  }
  function showQuote(i) {
    qi = (i + quotes.length) % quotes.length;
    $$(".quote").forEach((q, k) => q.classList.toggle("active", k === qi));
    $$("#quoteDots button").forEach((b, k) => {
      b.classList.remove("active");
      if (k === qi) { void b.offsetWidth; b.classList.add("active"); }
    });
    restartQuotes();
  }
  function restartQuotes() {
    clearInterval(qTimer);
    qTimer = setInterval(() => showQuote(qi + 1), 6000);
  }

  /* ------------------------------------------------------------------
   * Scroll effects
   * ---------------------------------------------------------------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains("reveal"));
          el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 6) * 0.08}s`;
          el.classList.add("in");
          io.unobserve(el);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

  function observeReveals() {
    $$(".reveal:not(.in)").forEach(el => (io ? io.observe(el) : el.classList.add("in")));
  }

  // Counters
  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      const start = end > 1000 ? end - 40 : 0;
      const dur = reduceMotion ? 1 : 1600;
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(start + (end - start) * eased) + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach(el => counterIO.observe(el));

  // Nav state, progress bar, timeline line, active link
  const nav = $(".nav");
  const progress = $(".progress");
  const timeline = $(".timeline");
  const sections = $$("main section[id]");
  const navLinks = $$(".nav-links a");
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 30);
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.75 - r.top) / r.height, 0), 1);
      timeline.style.setProperty("--tl", p.toFixed(3));
    }
    let current = "";
    sections.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * 0.4) current = s.id; });
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
  }
  addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const menuBtn = $(".menu-btn");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  navLinks.forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  /* ------------------------------------------------------------------
   * Pointer effects: cursor glow, tilt cards, magnetic buttons
   * ---------------------------------------------------------------- */
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (finePointer && !reduceMotion) {
    const glow = $(".cursor-glow");
    let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
    addEventListener("mousemove", e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() {
      gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
      glow.style.transform = `translate3d(${gx - 210}px, ${gy - 210}px, 0)`;
      requestAnimationFrame(loop);
    })();

    $$(".tilt").forEach(el => {
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 8}deg) rotateX(${(0.5 - y) * 8}deg)`;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });

    $$(".magnetic").forEach(el => {
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  } else {
    const glow = $(".cursor-glow");
    if (glow) glow.style.display = "none";
  }

  /* ------------------------------------------------------------------
   * Hero canvas: drifting Tamil letters and embers
   * ---------------------------------------------------------------- */
  function heroCanvas() {
    const canvas = $(".hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const letters = "அஆஇஈஉஊஎஏஐஒஓஔகஙசஞடணதநபமயரலவழளறன".split("");
    let w, h, dpr, parts = [];
    let mx = -9999, my = -9999;

    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(w * h / 16000, 90));
      parts = Array.from({ length: n }, () => make(true));
    }
    function make(init) {
      const isLetter = Math.random() < 0.32;
      return {
        x: Math.random() * w,
        y: init ? Math.random() * h : h + 30,
        r: isLetter ? 14 + Math.random() * 26 : 0.6 + Math.random() * 2.2,
        vy: -(0.15 + Math.random() * 0.5),
        vx: (Math.random() - 0.5) * 0.25,
        a: 0.1 + Math.random() * (isLetter ? 0.22 : 0.7),
        rot: (Math.random() - 0.5) * 0.6,
        vr: (Math.random() - 0.5) * 0.004,
        ch: isLetter ? letters[(Math.random() * letters.length) | 0] : null,
        hue: Math.random() < 0.7 ? 40 : Math.random() < 0.5 ? 18 : 250,
        tw: Math.random() * Math.PI * 2
      };
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.tw += 0.03;
        const dx = p.x - mx, dy = p.y - my, dist = Math.hypot(dx, dy);
        if (dist < 140) { p.x += dx / dist * 1.4; p.y += dy / dist * 1.4; }
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        if (p.y < -50 || p.x < -50 || p.x > w + 50) parts[i] = make(false);
        const alpha = p.a * (0.7 + 0.3 * Math.sin(p.tw));
        if (p.ch) {
          ctx.save();
          ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.font = `700 ${p.r}px "Noto Serif Tamil", serif`;
          ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${alpha})`;
          ctx.fillText(p.ch, 0, 0);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${alpha})`;
          ctx.shadowBlur = 12; ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${alpha})`;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      if (running) requestAnimationFrame(frame);
    }
    let running = true;
    resize();
    addEventListener("resize", resize);
    canvas.parentElement.addEventListener("mousemove", e => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener("mouseleave", () => { mx = my = -9999; });
    if (reduceMotion) { frame(); running = false; return; }
    new IntersectionObserver(([e]) => {
      const was = running;
      running = e.isIntersecting;
      if (running && !was) requestAnimationFrame(frame);
    }).observe(canvas);
    requestAnimationFrame(frame);
  }

  /* ------------------------------------------------------------------
   * Boot
   * ---------------------------------------------------------------- */
  $("#year").textContent = new Date().getFullYear();
  applyLang();
  onScroll();
  heroCanvas();

  const ready = () => setTimeout(() => document.body.classList.add("loaded"), reduceMotion ? 0 : 500);
  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 2500))]).then(ready);
  } else {
    addEventListener("load", ready);
  }
})();
