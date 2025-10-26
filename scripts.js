// Objekt obsahující veškeré texty pro vícejazyčnost
const translations = {
    cz: {
        // NAVIGACE A HLAVIČKA
        pageTitle: "DualWorks s.r.o. - Svařování, montáže, zámečnictví",
        navAbout: "O nás",
        navProjects: "Projekty",
        navCareer: "Kariéra",
        navContact: "Kontakt",
        
        // HERO
        heroH1: "Naše práce drží svět pohromadě.",
        heroH2: "DualWorks s.r.o. – váš partner pro kvalitní průmyslové montáže, svařování a zámečnictví v Evropě.",
        ctaInquiry: "Zadat poptávku",
        ctaCareer: "Přidat se k týmu",

        // 2. O NÁS / SLUŽBY / VÝHODY (KONSOLIDACE)
        aboutH2_new: "Založeno na zkušenostech, zaměřeno na budoucnost.",
        aboutText_new: `
            <p>DualWorks s.r.o. byla založena v Praze v roce 2025, ale naše kořeny sahají mnohem hlouběji. Vznikli jsme z dlouholeté praxe expertů v oboru, spojujeme tradiční řemeslo s nejmodernějšími technologiemi.</p>
            <p>Jsme hrdí na to, že působíme jak v České republice, tak na mezinárodním trhu, a dodáváme našim klientům prvotřídní řešení.</p>
        `,
        // SPECIÁLNÍ OBLASTI (SLUŽBY)
        specialH2: "Naše speciální oblasti",
        specialPerex: "Nabízíme komplexní řešení v oblastech průmyslových montáží, potrubních systémů, ocelových konstrukcí a svařovacích prací.",
        special1H: "Industriální montáže",
        special1P: "Profesionální montáž průmyslových zařízení a strojů.",
        special2H: "Potrubní systémy",
        special2P: "Plánování a instalace komplexních potrubních systémů.",
        special3H: "Ocelové konstrukce",
        special3P: "Výroba a montáž robustních ocelových konstrukcí.",
        special4H: "Svařování",
        special4P: "Certifikované svařovací práce dle nejvyšších standardů.",

        // NAŠE SLUŽBY
        servicesH2: "Naše Služby",
        servicesPerex: "Specializujeme se na řemeslné práce, průmyslové montáže, svařování, zámečnictví a kapacitní výpomoc pro vaše projekty.",
        service1H: "Svářečské práce",
        service1P: "Certifikovaná kvalita (111, 135, 136, 141).",
        service2H: "Zámečnické práce",
        service2P: "Kompletní zámečnické a kovodělné služby na míru vašim požadavkům.",
        service3H: "Montážní práce",
        service3P: "Profesionální montážní práce v průmyslovém sektoru s důrazem na kvalitu.",
        service4H: "Broušení kovů",
        service4P: "Dokonalá povrchová úprava a precizní broušení kovových součástí.",
        service5H: "Kapacitní výpomoc",
        service5P: "Flexibilní posílení vašeho týmu o naše zkušené a kvalifikované řemeslníky.",

        // VÝHODY
        advantagesH2_new: "Proč si vybrat DualWorks?",
        advantagesPerex_new: "Stojíme za kvalitou, efektivitou a bezpečností každého projektu.",
        advantage1H_new: "Kvalifikovaný tým",
        advantage1P_new: "Naši experti přinášejí dlouholeté zkušenosti a odborné znalosti.",
        advantage2H_new: "Flexibilita",
        advantage2P_new: "Přizpůsobíme se flexibilně vašim požadavkům a časovým plánům.",
        advantage3H_new: "Odpovědnost",
        advantage3P_new: "Přebíráme plnou odpovědnost za kvalitu a úspěch projektů.",
        advantage4H_new: "Bezpečnost",
        advantage4P_new: "Nejvyšší bezpečnostní standardy jsou u nás prioritou.",
        
        // 3. PROJEKTY
        projectsH2: "Naše Klíčové Projekty",
        projectsPerex: "Důvěra v kvalitu se měří zkušenostmi. Zde je výběr náročných průmyslových projektů, kde naši specialisté uplatnili své dovednosti.",
        project1H: "Jaderné elektrárny a energetika",
        project1Perex: "Montáže a svařování vysoce kritických potrubních systémů a konstrukcí, kde je vyžadována nulová tolerance k chybám a nejvyšší certifikace (např. v Temelíně, Dukovanech, Mochovcích).",
        project1Type: "Svařování (TIG/MAG), Montáže",
        project2H: "Offshore a Těžké strojírenství (Huisman)",
        project2Perex: "Práce na masivních jeřábových systémech a těžkých lodních konstrukcích. Přesné zámečnické a svářečské práce pro nadnárodní klienty jako Huisman a Hoogen.",
        project2Type: "Zámečnictví, Svařování, Kapacitní výpomoc",
        project3H: "Velkokapacitní průmyslové komory",
        project3Perex: "Výroba a montáž rozměrných komor a technologických celků pro elektrárny a teplárny v ČR (např. Mělník) a Německu. Složité sestavy a finální instalace.",
        project3Type: "Montáže, Ocelové konstrukce",
        project4H: "Mezinárodní projekty a údržba",
        project4Perex: "Pravidelná údržba a nasazení montérů na krátkodobé i dlouhodobé projekty po celé Evropě. Rychlá reakce a dodání kvalifikované síly.",
        project4Type: "Montáže, Kapacitní výpomoc, Zámečnictví",
        ctaProjects: "Zadat poptávku na Váš projekt",

        // 4. KARIÉRA
        careerH1: "Staň se součástí našeho týmu svářečů, montérů a zámečníků.",
        careerH2: "Získej stabilní práci v Česku i zahraničí.",
        ctaCareerLarge: "Vyplnit přihlášku",

        // 5. KONTAKT A FOOTER
        contactH1: "Kontaktujte nás",
        contactPerex: "Spojte se s námi pro cenovou nabídku, dotazy nebo jakékoli jiné informace.",
        labelName: "Jméno/Firma",
        labelEmail: "Email",
        labelPhone: "Telefon",
        labelMessage: "Zpráva/Poptávka",
        inputNamePlaceholder: "Zadejte své jméno nebo název firmy",
        inputEmailPlaceholder: "Zadejte svůj email",
        inputPhonePlaceholder: "Zadejte své telefonní číslo",
        inputMessagePlaceholder: "Napište nám zprávu nebo poptávku",
        buttonSubmit: "Odeslat poptávku",
        infoH3: "Kontaktní informace",
        infoCompanyName: "DualWorks s.r.o.",
        infoAddress: "Na Folimance 15, Praha 2",
        infoICO: "IČO: 23397071",
        infoTel: "Tel: +420 735 128 003",
        infoEmail: "Email: obchod@dualworks.cz",
        footerContact: "Kontakt",
        footerAddress: "Na Folimance 15, Praha 2",
        footerTel: "Tel: +420 735 128 003",
        footerEmail: "Email: obchod@dualworks.cz"
    },
    en: {
        // NAVIGACE A HLAVIČKA
        pageTitle: "DualWorks s.r.o. - Welding, Assembly, Locksmith Services",
        navAbout: "About Us",
        navProjects: "Projects",
        navCareer: "Career",
        navContact: "Contact",
        
        // HERO
        heroH1: "Our work holds the world together.",
        heroH2: "DualWorks s.r.o. – Your partner for high-quality industrial assembly, welding, and locksmith services across Europe.",
        ctaInquiry: "Submit Inquiry",
        ctaCareer: "Join Our Team",

        // 2. O NÁS / SLUŽBY / VÝHODY (KONSOLIDACE)
        aboutH2_new: "Built on experience, focused on the future.",
        aboutText_new: `
            <p>DualWorks s.r.o. was founded in Prague in 2025, but our roots run much deeper. We originated from the long-term practice of industry experts, combining traditional craftsmanship with the latest technologies.</p>
            <p>We are proud to operate both in the Czech Republic and internationally, delivering first-class solutions to our clients.</p>
        `,
        // SPECIÁLNÍ OBLASTI (SLUŽBY)
        specialH2: "Our Specialised Fields",
        specialPerex: "We offer comprehensive solutions in industrial assembly, piping systems, steel structures, and welding services.",
        special1H: "Industrial Assembly",
        special1P: "Professional assembly of industrial equipment and machinery.",
        special2H: "Piping Systems",
        special2P: "Planning and installation of complex piping systems.",
        special3H: "Steel Structures",
        special3P: "Manufacturing and assembly of robust steel structures.",
        special4H: "Welding",
        special4P: "Certified welding services according to the highest standards.",

        // OUR SERVICES
        servicesH2: "Our Services",
        servicesPerex: "We specialize in craft work, industrial assembly, welding, locksmith services, and capacity assistance for your projects.",
        service1H: "Welding Services",
        service1P: "Certified quality (111, 135, 136, 141).",
        service2H: "Locksmith Services",
        service2P: "Complete locksmith and metalworking services tailored to your requirements.",
        service3H: "Assembly Work",
        service3P: "Professional assembly work in the industrial sector with an emphasis on quality.",
        service4H: "Metal Grinding",
        service4P: "Perfect surface treatment and precise grinding of metal components.",
        service5H: "Capacity Assistance",
        service5P: "Flexible reinforcement of your team with our experienced and qualified craftsmen.",

        // VÝHODY
        advantagesH2_new: "Why Choose DualWorks?",
        advantagesPerex_new: "We stand for quality, efficiency, and safety in every project.",
        advantage1H_new: "Qualified Team",
        advantage1P_new: "Our experts bring years of experience and certified professional knowledge.",
        advantage2H_new: "Flexibility",
        advantage2P_new: "We flexibly adapt to your project requirements and timelines.",
        advantage3H_new: "Accountability",
        advantage3P_new: "We take full responsibility for the quality and success of projects.",
        advantage4H_new: "Safety",
        advantage4P_new: "The highest safety standards are our priority.",
        
        // 3. PROJEKTY
        projectsH2: "Our Key Projects",
        projectsPerex: "Trust in quality is measured by experience. Here is a selection of challenging industrial projects where our specialists applied their skills.",
        project1H: "Nuclear Power Plants and Energy",
        project1Perex: "Assembly and welding of highly critical piping systems and structures, where zero tolerance for errors and the highest certification are required (e.g., in Temelín, Dukovany, Mochovce).",
        project1Type: "Welding (TIG/MAG), Assembly",
        project2H: "Offshore and Heavy Engineering (Huisman)",
        project2Perex: "Work on massive crane systems and heavy marine structures. Precise locksmith and welding work for multinational clients like Huisman and Hoogen.",
        project2Type: "Locksmith Services, Welding, Capacity Assistance",
        project3H: "Large-Capacity Industrial Chambers",
        project3Perex: "Production and assembly of large chambers and technological units for power and heating plants in the Czech Republic and Germany. Complex assemblies and final installation.",
        project3Type: "Assembly, Steel Structures",
        project4H: "International Projects and Maintenance",
        project4Perex: "Regular maintenance and deployment of assemblers for short-term and long-term projects across Europe. Quick response and delivery of qualified workforce.",
        project4Type: "Assembly, Capacity Assistance, Locksmith Services",
        ctaProjects: "Submit an Inquiry for Your Project",

        // 4. KARIÉRA
        careerH1: "Join our team of welders, assemblers, and locksmiths.",
        careerH2: "Gain stable employment in the Czech Republic and abroad.",
        ctaCareerLarge: "Fill out the Application",

        // 5. KONTAKT A FOOTER
        contactH1: "Contact Us",
        contactPerex: "Get in touch with us for a price quote, inquiries, or any other information.",
        labelName: "Name/Company",
        labelEmail: "Email",
        labelPhone: "Phone",
        labelMessage: "Message/Inquiry",
        inputNamePlaceholder: "Enter your name or company name",
        inputEmailPlaceholder: "Enter your email",
        inputPhonePlaceholder: "Enter your phone number",
        inputMessagePlaceholder: "Write us a message or inquiry",
        buttonSubmit: "Send Inquiry",
        infoH3: "Contact Information",
        infoCompanyName: "DualWorks s.r.o.",
        infoAddress: "Na Folimance 15, Prague 2",
        infoICO: "ID: 23397071",
        infoTel: "Phone: +420 735 128 003",
        infoEmail: "Email: obchod@dualworks.cz",
        footerContact: "Contact",
        footerAddress: "Na Folimance 15, Prague 2",
        footerTel: "Phone: +420 735 128 003",
        footerEmail: "Email: obchod@dualworks.cz"
    },
    de: {
        // NAVIGACE A HLAVIČKA
        pageTitle: "DualWorks s.r.o. - Schweißen, Montage, Schlosserarbeiten",
        navAbout: "Über uns",
        navProjects: "Projekte",
        navCareer: "Karriere",
        navContact: "Kontakt",
        
        // HERO
        heroH1: "Unsere Arbeit hält die Welt zusammen.",
        heroH2: "DualWorks s.r.o. – Ihr Partner für hochwertige Industriemontage, Schweiß- und Schlosserarbeiten in Europa.",
        ctaInquiry: "Anfrage senden",
        ctaCareer: "Dem Team beitreten",

        // 2. O NÁS / SLUŽBY / VÝHODY (KONSOLIDACE)
        aboutH2_new: "Gegründet auf Erfahrung, ausgerichtet auf die Zukunft.",
        aboutText_new: `
            <p>DualWorks s.r.o. wurde 2025 in Prag gegründet, aber unsere Wurzeln reichen viel tiefer. Entstanden aus der langjährigen Erfahrung von Branchenexperten, vereinen wir traditionelles Handwerk mit modernsten Technologien.</p>
            <p>Wir sind stolz darauf, sowohl in der Tschechischen Republik als auch auf dem internationalen Markt tätig zu sein und unseren Kunden erstklassige Lösungen zu liefern.</p>
        `,
        // SPECIÁLNÍ OBLASTI (SLUŽBY)
        specialH2: "Unsere Spezialgebiete",
        specialPerex: "Wir bieten umfassende Lösungen in den Bereichen Industriemontagen, Rohrleitungssysteme, Stahlkonstruktionen und Schweißarbeiten.",
        special1H: "Industriemontagen",
        special1P: "Professionelle Montage von Industrieanlagen und Maschinen.",
        special2H: "Rohrleitungssysteme",
        special2P: "Planung und Installation komplexer Rohrleitungssysteme.",
        special3H: "Stahlkonstruktionen",
        special3P: "Fertigung und Montage von robusten Stahlkonstruktionen.",
        special4H: "Schweißen",
        special4P: "Zertifizierte Schweißarbeiten nach höchsten Standards.",

        // UNSERE DIENSTLEISTUNGEN
        servicesH2: "Unsere Dienstleistungen",
        servicesPerex: "Wir spezialisieren uns auf Handwerksarbeiten, Industriemontagen, Schweißarbeiten, Schlosserarbeiten und Kapazitätsunterstützung für Ihre Projekte.",
        service1H: "Schweißarbeiten",
        service1P: "Zertifizierte Qualität (111, 135, 136, 141).",
        service2H: "Schlosserarbeiten",
        service2P: "Komplette Schlosser- und Metallbearbeitungsdienste, maßgeschneidert auf Ihre Anforderungen.",
        service3H: "Montagearbeiten",
        service3P: "Professionelle Montagearbeiten im Industriebereich mit Schwerpunkt auf Qualität.",
        service4H: "Metallschleifen",
        service4P: "Perfekte Oberflächenbehandlung und präzises Schleifen von Metallkomponenten.",
        service5H: "Kapazitätsunterstützung",
        service5P: "Flexible Verstärkung Ihres Teams durch unsere erfahrenen und qualifizierten Handwerker.",

        // VÝHODY
        advantagesH2_new: "Ihre Vorteile mit DualWorks",
        advantagesPerex_new: "Wir stehen für Qualität, Effizienz und Sicherheit bei jedem Projekt.",
        advantage1H_new: "Qualifiziertes Team",
        advantage1P_new: "Unsere Experten bringen langjährige Erfahrung und Fachwissen mit.",
        advantage2H_new: "Flexibilität",
        advantage2P_new: "Wir passen uns flexibel an Ihre Projektanforderungen und Zeitpläne an.",
        advantage3H_new: "Verantwortungsbewusstsein",
        advantage3P_new: "Wir übernehmen die volle Verantwortung für die Qualität und den Erfolg Ihrer Projekte.",
        advantage4H_new: "Sicherheit",
        advantage4P_new: "Höchste Sicherheitsstandards haben bei uns oberste Priorität.",
        
        // 3. PROJEKTY
        projectsH2: "Unsere Schlüsselprojekte",
        projectsPerex: "Vertrauen in Qualität wird durch Erfahrung gemessen. Hier ist eine Auswahl an anspruchsvollen Industrieprojekten, bei denen unsere Spezialisten ihr Können eingesetzt haben.",
        project1H: "Kernkraftwerke und Energiewirtschaft",
        project1Perex: "Montage und Schweißen von hochkritischen Rohrleitungssystemen und Konstruktionen, bei denen Null-Fehlertoleranz und höchste Zertifizierung erforderlich sind (z.B. in Temelín, Dukovany, Mochovce).",
        project1Type: "Schweißen (WIG/MAG), Montage",
        project2H: "Offshore und Schwermaschinenbau (Huisman)",
        project2Perex: "Arbeiten an massiven Kransystemen und schweren Schiffskonstruktionen. Präzise Schlosser- und Schweißarbeiten für multinationale Kunden wie Huisman und Hoogen.",
        project2Type: "Schlosserarbeiten, Schweißen, Kapazitätsassistenz",
        project3H: "Großraumindustriekammern",
        project3Perex: "Fertigung und Montage von großformatigen Kammern und technologischen Einheiten für Kraftwerke und Heizwerke in Tschechien und Deutschland. Komplexe Baugruppen und Endinstallation.",
        project3Type: "Montage, Stahlkonstruktionen",
        project4H: "Mezinárodní projekty a údržba",
        project4Perex: "Regelmäßige Wartung und Einsatz von Monteuren für kurz- und langfristige Projekte po celé Evropě. Rychlá reakce a dodání kvalifikované síly.",
        project4Type: "Montage, Kapacitní výpomoc, Zámečnictví",
        ctaProjects: "Anfrage für Ihr Projekt senden",
        
        // 4. KARIÉRA
        careerH1: "Werden Sie Teil unseres Teams aus Schweißern, Monteuren und Schlossern.",
        careerH2: "Sichern Sie sich eine stabile Anstellung in Tschechien und im Ausland.",
        ctaCareerLarge: "Bewerbung ausfüllen",

        // 5. KONTAKT A FOOTER
        contactH1: "Kontaktieren Sie uns",
        contactPerex: "Kontaktieren Sie uns für ein Preisangebot, Fragen oder andere Informationen.",
        labelName: "Name/Firma",
        labelEmail: "E-Mail",
        labelPhone: "Telefon",
        labelMessage: "Nachricht/Anfrage",
        inputNamePlaceholder: "Geben Sie Ihren Namen oder Firmennamen ein",
        inputEmailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
        inputPhonePlaceholder: "Geben Sie Ihre Telefonnummer ein",
        inputMessagePlaceholder: "Schreiben Sie uns eine Nachricht oder Anfrage",
        buttonSubmit: "Anfrage senden",
        infoH3: "Kontaktinformationen",
        infoCompanyName: "DualWorks s.r.o.",
        infoAddress: "Na Folimance 15, Prag 2",
        infoICO: "ID: 23397071",
        infoTel: "Tel: +420 735 128 003",
        infoEmail: "E-Mail: obchod@dualworks.cz",
        footerContact: "Kontakt",
        footerAddress: "Na Folimance 15, Prag 2",
        footerTel: "Tel: +420 735 128 003",
        footerEmail: "E-Mail: obchod@dualworks.cz"
    }
};

let currentLang = 'cz';

// Funkce pro nastavení jazyka
function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Změna jazyka HTML a titulek
    document.getElementById('pageTitle').innerText = t.pageTitle;
    document.documentElement.lang = lang;
    
    // NAVIGACE
    document.getElementById('navAbout').innerText = t.navAbout;
    document.getElementById('navProjects').innerText = t.navProjects;
    document.getElementById('navCareer').innerText = t.navCareer;
    document.getElementById('navContact').innerText = t.navContact;

    // HERO
    document.getElementById('heroH1').innerText = t.heroH1;
    document.getElementById('heroH2').innerText = t.heroH2;
    document.getElementById('ctaInquiry').querySelector('span').innerText = t.ctaInquiry;
    document.getElementById('ctaCareer').querySelector('span').innerText = t.ctaCareer;

    // O NÁS
    document.getElementById('aboutH2_new').innerText = t.aboutH2_new;
    document.getElementById('aboutText_new').innerHTML = t.aboutText_new;
    // SPECIÁLNÍ OBLASTI (SLUŽBY)
    document.getElementById('specialH2').innerText = t.specialH2;
    document.getElementById('specialPerex').innerText = t.specialPerex;
    document.getElementById('special1H').innerText = t.special1H;
    document.getElementById('special1P').innerText = t.special1P;
    document.getElementById('special2H').innerText = t.special2H;
    document.getElementById('special2P').innerText = t.special2P;
    document.getElementById('special3H').innerText = t.special3H;
    document.getElementById('special3P').innerText = t.special3P;
    document.getElementById('special4H').innerText = t.special4H;
    document.getElementById('special4P').innerText = t.special4P;

    // VÝHODY
    document.getElementById('advantagesH2_new').innerText = t.advantagesH2_new;
    document.getElementById('advantagesPerex_new').innerText = t.advantagesPerex_new;
    document.getElementById('advantage1H_new').innerText = t.advantage1H_new;
    document.getElementById('advantage1P_new').innerText = t.advantage1P_new;
    document.getElementById('advantage2H_new').innerText = t.advantage2H_new;
    document.getElementById('advantage2P_new').innerText = t.advantage2P_new;
    document.getElementById('advantage3H_new').innerText = t.advantage3H_new;
    document.getElementById('advantage3P_new').innerText = t.advantage3P_new;
    document.getElementById('advantage4H_new').innerText = t.advantage4H_new;
    document.getElementById('advantage4P_new').innerText = t.advantage4P_new;
    
    // NAŠE SLUŽBY
    document.getElementById('servicesH2').innerText = t.servicesH2;
    document.getElementById('servicesPerex').innerText = t.servicesPerex;
    document.getElementById('service1H').innerText = t.service1H;
    document.getElementById('service1P').innerText = t.service1P;
    document.getElementById('service2H').innerText = t.service2H;
    document.getElementById('service2P').innerText = t.service2P;
    document.getElementById('service3H').innerText = t.service3H;
    document.getElementById('service3P').innerText = t.service3P;
    document.getElementById('service4H').innerText = t.service4H;
    document.getElementById('service4P').innerText = t.service4P;
    document.getElementById('service5H').innerText = t.service5H;
    document.getElementById('service5P').innerText = t.service5P;

    // PROJEKTY
    document.getElementById('projectsH2').innerText = t.projectsH2;
    document.getElementById('projectsPerex').innerText = t.projectsPerex;
    document.getElementById('project1H').innerText = t.project1H;
    document.getElementById('project1Perex').innerText = t.project1Perex;
    document.getElementById('project1Type').innerText = t.project1Type;
    document.getElementById('project2H').innerText = t.project2H;
    document.getElementById('project2Perex').innerText = t.project2Perex;
    document.getElementById('project2Type').innerText = t.project2Type;
    document.getElementById('project3H').innerText = t.project3H;
    document.getElementById('project3Perex').innerText = t.project3Perex;
    document.getElementById('project3Type').innerText = t.project3Type;
    document.getElementById('project4H').innerText = t.project4H;
    document.getElementById('project4Perex').innerText = t.project4Perex;
    document.getElementById('project4Type').innerText = t.project4Type;
    document.getElementById('ctaProjects').querySelector('span').innerText = t.ctaProjects;

    // KARIÉRA
    document.getElementById('careerH1').innerText = t.careerH1;
    document.getElementById('careerH2').innerText = t.careerH2;
    document.getElementById('ctaCareerLarge').querySelector('span').innerText = t.ctaCareerLarge;

    // KONTAKT
    document.getElementById('contactH1').innerText = t.contactH1;
    document.getElementById('contactPerex').innerText = t.contactPerex;
    document.getElementById('labelName').innerText = t.labelName;
    document.getElementById('labelEmail').innerText = t.labelEmail;
    document.getElementById('labelPhone').innerText = t.labelPhone;
    document.getElementById('labelMessage').innerText = t.labelMessage;
    
    document.getElementById('inputName').placeholder = t.inputNamePlaceholder;
    document.getElementById('inputEmail').placeholder = t.inputEmailPlaceholder;
    document.getElementById('inputPhone').placeholder = t.inputPhonePlaceholder;
    document.getElementById('inputMessage').placeholder = t.inputMessagePlaceholder;
    
    document.getElementById('buttonSubmit').innerText = t.buttonSubmit;
    document.getElementById('infoH3').innerText = t.infoH3;
    document.getElementById('infoCompanyName').innerText = t.infoCompanyName;
    
    // FOOTER A KONTAKTNÍ ÚDAJE (Používají se shodná ID/data)
    document.getElementById('infoAddress').innerText = t.infoAddress;
    document.getElementById('infoICO').innerText = t.infoICO;
    document.getElementById('infoTel').innerText = t.infoTel;
    document.getElementById('infoEmail').innerText = t.infoEmail;
    document.getElementById('footerContact').innerText = t.footerContact;
    document.getElementById('footerAddress').innerText = t.footerAddress;
    document.getElementById('footerTel').innerText = t.footerTel;
    document.getElementById('footerEmail').innerText = t.footerEmail;


    // Zvýraznění aktivního jazyka
    document.querySelectorAll('.flex.items-center.gap-2 button').forEach(button => {
        button.classList.remove('border-b-2', 'border-primary', 'opacity-100');
        button.classList.add('opacity-50');
    });
    document.getElementById('lang-' + lang).classList.add('border-b-2', 'border-primary', 'opacity-100');
    document.getElementById('lang-' + lang).classList.remove('opacity-50');
}

// Inicializace: Načtení výchozího jazyka při startu
document.addEventListener('DOMContentLoaded', () => {
    // Kontrola, zda je jazyk uložen v localStorage
    const savedLang = localStorage.getItem('dualworks_lang');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('cz'); // Výchozí jazyk
    }

    // Uložení zvoleného jazyka po kliknutí
    document.querySelectorAll('.flex.items-center.gap-2 button').forEach(button => {
        button.addEventListener('click', (e) => {
            const langCode = e.target.id.split('-')[1];
            setLanguage(langCode);
            localStorage.setItem('dualworks_lang', langCode);
        });
    });
});