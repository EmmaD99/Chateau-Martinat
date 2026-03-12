/* ========================================
   CHÂTEAU MARTINAT - INTERNATIONALISATION (FR / EN)
   ======================================== */

const translations = {
  fr: {
    /* Navigation */
    'nav.home':       'Accueil',
    'nav.wines':      'Nos Vins',
    'nav.property':   'Propriété',
    'nav.news':       'Actualités et Presse',
    'nav.gift':       'Bon Cadeau',
    'nav.contact':    'Contact',

    /* Age Gate */
    'age.title':    'Êtes-vous âgé(e) de 18 ans ou plus ?',
    'age.subtitle': "L'abus d'alcool est dangereux pour la santé. À consommer avec modération.",
    'age.yes':      'Oui, j\'ai 18 ans ou plus',
    'age.no':       'Non',
    'age.refused':  'Vous devez avoir 18 ans ou plus pour accéder à ce site.',

    /* Hero index */
    'hero.subtitle': 'Vignerons indépendants en Côtes de Bourg',
    'hero.banner':   '🍷 Certification HVE - Haute Valeur Environnementale',

    /* Wines section */
    'wines.title':   'Nos Vins',
    'wines.intro':   "Découvrez notre collection de vins d'exception, fruits d'un terroir unique et d'un savoir-faire transmis de génération en génération.",
    'wines.cta':     'Voir la fiche technique',
    'wines.belair':  "Château Belair l'Escudier",

    /* Property section — index */
    'property.title': 'Propriété',
    'property.p1':    "Le vignoble de Château Martinat est situé sur la commune de Lansac, au cœur de l'appellation Côtes de Bourg, dans un paysage vallonné à proximité du fleuve de la Gironde. Cette situation géographique offre au domaine un climat tempéré et un ensoleillement favorable. Une belle veine de grave blanche traverse la propriété et enrichie le terroir de cette propriété.",
    'property.p2':    "Reprise en 1994 avec l'ambition de révéler tout le potentiel de son terroir, la propriété est aujourd'hui certifiée <strong>HVE 4</strong> (Haute Valeur Environnementale).",
    'property.btn':   'En savoir plus sur le domaine',

    /* ══════════════════════════════════════
       PAGE PROPRIÉTÉ — toutes les clés
       ══════════════════════════════════════ */
    'prop.hero.title': 'Notre Propriété',

    /* Équipe */
    'prop.team.title':           'Notre Équipe',
    'prop.team.p1':              'Deux collaborateurs font partie du « Martinat team » : Cyrille Baillou et Sophie Baraillé. Chaque année, nous faisons également appel à une petite équipe pour les travaux de la vigne et notamment pour les vendanges.',
    'prop.team.p2':              'Notre équipe passionnée met son savoir-faire au service de la qualité de nos vins, dans le respect des traditions viticoles et de notre terroir exceptionnel.',
    'prop.team.lucie.role':      'Viticultrice',
    'prop.team.stephane.role':   'Viticulteur',

    /* Carousel */
    'prop.carousel.slide1.title': 'Notre Vignoble',
    'prop.carousel.slide1.sub':   "10 hectares de vignes sur un terroir d'exception",
    'prop.carousel.slide2.title': 'Notre Chai',
    'prop.carousel.slide2.sub':   'Élevage traditionnel en barriques de chêne français',
    'prop.carousel.slide3.title': 'Château Martinat',
    'prop.carousel.slide3.sub':   'Une propriété familiale depuis plusieurs générations',
    'prop.carousel.slide4.title': 'Viticulture Raisonnée',
    'prop.carousel.slide4.sub':   'Certification HVE — Haute Valeur Environnementale',

    /* Vignoble */
    'prop.vineyard.title':        'Les Vignes',
    'prop.vineyard.p1':           "Château Martinat regroupe 10 hectares au centre de l'appellation Côtes de Bourg, sur un terroir particulier caractérisé par la présence de veines de petites graves et d'argiles rouges et brunes — un atout qualitatif précieux pour la maturité de nos raisins et la densité de nos vins. L'âge des vignes est de 30 ans en moyenne. L'encépagement est à dominante Merlot (70 %), Cabernet franc (5 %) et Malbec (25 %). Nous respectons à tout moment notre terroir et perpétuons l'ébourgeonnage, les vendanges en vert, l'effeuillage et les vendanges manuelles.",
    'prop.vineyard.stat1.num':    'Merlot 70% · Malbec 25% · Cab. Franc 5%',
    'prop.vineyard.stat1.label':  'Encépagement',
    'prop.vineyard.stat2.num':    '30 ans en moyenne',
    'prop.vineyard.stat2.label':  'Âge des vignes',

    /* Philosophie */
    'prop.philosophy.title': 'Philosophie',
    'prop.philosophy.name':  'Château Martinat',
    'prop.philosophy.quote': "Apprendre le métier… Comprendre les cycles de la vigne. Raisonner la tenue du vignoble, s'adapter aux caprices du ciel ! Se remettre en question… et puis vendanger avec cœur et raison, vinifier avec minutie et ambition ! Et enfin patienter avec humilité pour que les vins soient fins et gourmands. Nous vous souhaitons de belles dégustations avec nos Flacons !",
    'prop.philosophy.sig':   '— Lucie et Stéphane',

    /* Chai */
    'prop.cellar.title': 'Notre Chai',
    'prop.cellar.p1':    "Le vignoble de Château Martinat est situé sur la commune de Lansac, au cœur de l'appellation Côtes de Bourg. Située sur la rive droite de la Dordogne et de la Gironde, à environ 35 km au nord de Bordeaux, l'appellation Côtes de Bourg est l'une des plus anciennes et des plus pittoresques de la région. Surnommée la « Petite Suisse Girondaise » en raison de ses paysages vallonnés, elle offre un terroir de caractère exceptionnel.",

    /* Région */
    'prop.region.title':       'Découvrir notre Région',
    'prop.region.intro':       "Située sur la rive droite de la Dordogne et de la Gironde, à environ 35 km au nord de Bordeaux, l'appellation Côtes de Bourg est l'une des plus anciennes et des plus pittoresques de la région. Surnommée la « Petite Suisse Girondaise », elle offre un terroir de caractère au cœur d'un patrimoine exceptionnel.",
    'prop.region.card1.title': 'Citadelle de Bourg',
    'prop.region.card1.desc':  "Monument historique surplombant l'estuaire, offrant une vue panoramique exceptionnelle sur la Gironde et ses environs.",
    'prop.region.card2.title': 'Route des Vins',
    'prop.region.card2.desc':  "Parcourez la Route des Châteaux et découvrez les domaines viticoles de l'appellation Côtes de Bourg.",
    'prop.region.card3.title': 'Moulin de Lansac',
    'prop.region.card3.desc':  "Moulin à vent historique emblématique de Lansac, offrant un panorama remarquable sur les vignes de Côtes de Bourg et la vallée de la Gironde.",
    'prop.region.card4.title': 'Bordeaux',
    'prop.region.card4.desc':  "À 45 minutes, découvrez la capitale mondiale du vin, classée au patrimoine UNESCO pour son architecture.",
    'prop.region.card5.title': 'Côte Atlantique',
    'prop.region.card5.desc':  "Les plages de l'Atlantique sont à moins d'une heure, parfaites pour une escapade en bord de mer.",
    'prop.region.card6.title': 'Gastronomie locale',
    'prop.region.card6.desc':  "Savourez les spécialités bordelaises : lamproie, entrecôte, cannelés et les huîtres d'Arcachon.",

    /* Contact page propriété */
    'prop.contact.title':     'Nous Contacter',
    'prop.contact.address':   'Adresse',
    'prop.contact.email':     'Email',
    'prop.contact.phone':     'Téléphone',
    'prop.contact.gps':       'GPS',
    'prop.contact.hours':     'Horaires',
    'prop.contact.hours.val': 'Lundi – Samedi : 10h – 18h<br>Fermé 1<sup>re</sup> quinzaine de janvier<br>et 2<sup>e</sup> quinzaine d\'août<br>Visite sur rendez-vous',
    'prop.contact.cta':       'Demander nos tarifs',

    /* News section */
    'news.title':  'Actualités et Presse',
    'news.p1':     "Retrouvez ici toutes les dernières nouvelles du Château Martinat, nos participations aux salons, récompenses et articles dans la presse spécialisée.",
    'news.p2':     "Chaque événement et chaque parution témoigne de la passion que nous mettons dans nos vins.",
    'news.p3':     'Pour plus d\'informations, vous pouvez <a href="#contact">nous contacter</a>.',

    /* Gift section */
    'gift.title':        'Bon Cadeau',
    'gift.intro':        'Offrez une expérience unique au Château Martinat',
    'gift.card1.title':  'Dégustation Gourmande',
    'gift.card1.desc':   "Ce bon donne droit à une dégustation privée de nos vins (3 cuvées) pour 2 personnes, avec assortiment de fromages et pains.<br>Réservation obligatoire (mail ou tel).<br>Valeur 25.00€.<br>Validité : 6 mois. Non remboursable.",
    'gift.card2.title':  'Coffret Flacons Martinat',
    'gift.card2.desc':   "Assortiment de 6 bouteilles de vins.<br>Le coffret « Côtes à Côtes ».<br>3 Côtes de Bourg + 3 Blayes Côtes de Bordeaux 64.00€.<br>Le coffret « Cépages ».<br>2 bouteilles 100% Merlot + 2 bouteilles 100% Malbec + 2 bouteilles assemblage merlot/malbec 70.00€.<br>Possibilité caisse bois +10.00€. Bon valable 12 mois.",

    /* Contact section — index */
    'contact.title':   'Contact',
    'contact.address': 'Adresse',
    'contact.email':   'Email',
    'contact.phone':   'Téléphone',
    'contact.gps':     'Coordonnées GPS',
    'contact.cta':     'Nous écrire',


    /* Formulaire de contact */
    'contact.form.title':                'Envoyer un message',
    'contact.form.firstname':            'Prénom',
    'contact.form.lastname':             'Nom',
    'contact.form.email':                'Email',
    'contact.form.phone':                'Téléphone',
    'contact.form.subject':              'Objet',
    'contact.form.subject.placeholder':  '— Choisir un objet —',
    'contact.form.subject.order':        'Commande de vins',
    'contact.form.subject.prices':       'Demande de tarifs',
    'contact.form.subject.visit':        'Visite & dégustation',
    'contact.form.subject.futures':      'Réservation primeurs',
    'contact.form.subject.gift':         'Bon cadeau',
    'contact.form.subject.pro':          'Professionnel / importateur',
    'contact.form.subject.press':        'Presse & médias',
    'contact.form.subject.other':        'Autre',
    'contact.form.message':              'Message',
    'contact.form.message.placeholder':  'Votre message…',
    'contact.form.send':                 'Envoyer le message',
    'contact.form.rgpd':                 'Vos données sont utilisées uniquement pour répondre à votre demande et ne sont jamais transmises à des tiers.',

    /* Footer */
    'footer.rights': '© 2026 Château Martinat – Tous droits réservés',
    'footer.legal':  "L'abus d'alcool est dangereux pour la santé. À consommer avec modération.",

    /* Wine pages */
    'wine.back':     'Retour',
    'wine.download': 'Télécharger la fiche technique',
    'wine.subtitle': 'GRAND VIN DE BORDEAUX',
    'wine.awards':   'Distinctions',
  },

  en: {
    /* Navigation */
    'nav.home':       'Home',
    'nav.wines':      'Our Wines',
    'nav.property':   'Estate',
    'nav.news':       'News & Press',
    'nav.gift':       'Gift Vouchers',
    'nav.contact':    'Contact',

    /* Age Gate */
    'age.title':    'Are you 18 years of age or older?',
    'age.subtitle': 'Drink responsibly. Alcohol abuse is dangerous to your health.',
    'age.yes':      'Yes, I am 18 or over',
    'age.no':       'No',
    'age.refused':  'You must be 18 or over to access this website.',

    /* Hero index */
    'hero.subtitle': 'Independent winemakers in Côtes de Bourg',
    'hero.banner':   '🍷 HVE Certified – High Environmental Value',

    /* Wines section */
    'wines.title':   'Our Wines',
    'wines.intro':   'Discover our exceptional wine collection, the fruit of a unique terroir and expertise passed down through generations.',
    'wines.cta':     'View technical sheet',
    'wines.belair':  "Château Belair l'Escudier",

    /* Property section — index */
    'property.title': 'Estate',
    'property.p1':    "Château Martinat's vineyard is located in the commune of Lansac, at the heart of the Côtes de Bourg appellation, in a rolling landscape close to the Gironde river. This geographical setting provides the estate with a temperate climate and favourable sunshine. A beautiful vein of white gravel runs through the property, enriching the terroir.",
    'property.p2':    'Taken over in 1994 with the ambition of revealing the full potential of its terroir, the estate is now certified <strong>HVE 4</strong> (High Environmental Value).',
    'property.btn':   'Learn more about the estate',

    /* ══════════════════════════════════════
       PAGE PROPRIÉTÉ — toutes les clés
       ══════════════════════════════════════ */
    'prop.hero.title': 'Our Estate',

    /* Équipe */
    'prop.team.title':           'Our Team',
    'prop.team.p1':              '"Martinat team" consists of two collaborators: Cyrille Baillou and Sophie Baraillé. Each year, we also call on a small team for vineyard work, especially during harvest.',
    'prop.team.p2':              'Our passionate team applies their expertise to the quality of our wines, respecting winemaking traditions and our exceptional terroir.',
    'prop.team.lucie.role':      'Winemaker',
    'prop.team.stephane.role':   'Winemaker',

    /* Carousel */
    'prop.carousel.slide1.title': 'Our Vineyard',
    'prop.carousel.slide1.sub':   '10 hectares of vines on an exceptional terroir',
    'prop.carousel.slide2.title': 'Our Cellar',
    'prop.carousel.slide2.sub':   'Traditional ageing in French oak barrels',
    'prop.carousel.slide3.title': 'Château Martinat',
    'prop.carousel.slide3.sub':   'A family estate across several generations',
    'prop.carousel.slide4.title': 'Sustainable Viticulture',
    'prop.carousel.slide4.sub':   'HVE Certified – High Environmental Value',

    /* Vignoble */
    'prop.vineyard.title':        'The Vines',
    'prop.vineyard.p1':           "Château Martinat covers 10 hectares at the heart of the Côtes de Bourg appellation, on a distinctive terroir characterised by veins of small gravel and red and brown clays — a precious quality asset for the ripeness of our grapes and the density of our wines. The average vine age is 30 years. The grape varieties are predominantly Merlot (70%), Cabernet Franc (5%) and Malbec (25%). We respect our terroir at all times and continue hand-harvesting, green harvesting, bud removal and leaf thinning.",
    'prop.vineyard.stat1.num':    'Merlot 70% · Malbec 25% · Cab. Franc 5%',
    'prop.vineyard.stat1.label':  'Grape varieties',
    'prop.vineyard.stat2.num':    '30 years on average',
    'prop.vineyard.stat2.label':  'Vine age',

    /* Philosophie */
    'prop.philosophy.title': 'Philosophy',
    'prop.philosophy.name':  'Château Martinat',
    'prop.philosophy.quote': "Learning the craft… Understanding the cycles of the vine. Managing the vineyard with reason, adapting to the whims of the sky! Questioning ourselves… then harvesting with heart and reason, vinifying with precision and ambition! And finally waiting with humility for the wines to be elegant and delicious. We wish you wonderful tastings with our bottles!",
    'prop.philosophy.sig':   '— Lucie and Stéphane',

    /* Chai */
    'prop.cellar.title': 'Our Cellar',
    'prop.cellar.p1':    "Château Martinat's vineyard is located in the commune of Lansac, at the heart of the Côtes de Bourg appellation. Situated on the right bank of the Dordogne and the Gironde, approximately 35 km north of Bordeaux, the Côtes de Bourg appellation is one of the oldest and most picturesque in the region. Nicknamed the \"Little Swiss Gironde\" due to its rolling landscape, it offers a terroir of exceptional character.",

    /* Région */
    'prop.region.title':       'Discover our Region',
    'prop.region.intro':       "Situated on the right bank of the Dordogne and the Gironde, approximately 35 km north of Bordeaux, the Côtes de Bourg appellation is one of the oldest and most picturesque in the region. Nicknamed the \"Little Swiss Gironde\", it offers a terroir of character at the heart of an exceptional heritage.",
    'prop.region.card1.title': 'Citadel of Bourg',
    'prop.region.card1.desc':  'A historic monument overlooking the estuary, offering an exceptional panoramic view of the Gironde and its surroundings.',
    'prop.region.card2.title': 'Wine Route',
    'prop.region.card2.desc':  'Follow the Route des Châteaux and discover the wine estates of the Côtes de Bourg appellation.',
    'prop.region.card3.title': 'Moulin de Lansac',
    'prop.region.card3.desc':  'A historic windmill iconic to Lansac, with a remarkable panoramic view over the Côtes de Bourg vineyards and the Gironde valley.',
    'prop.region.card4.title': 'Bordeaux',
    'prop.region.card4.desc':  '45 minutes away, discover the world capital of wine, listed as a UNESCO World Heritage site for its architecture.',
    'prop.region.card5.title': 'Atlantic Coast',
    'prop.region.card5.desc':  'The Atlantic beaches are less than an hour away, perfect for a seaside escape.',
    'prop.region.card6.title': 'Local Gastronomy',
    'prop.region.card6.desc':  "Enjoy Bordeaux specialities: lamprey, entrecôte, cannelés and oysters from Arcachon.",

    /* Contact page propriété */
    'prop.contact.title':     'Contact Us',
    'prop.contact.address':   'Address',
    'prop.contact.email':     'Email',
    'prop.contact.phone':     'Phone',
    'prop.contact.gps':       'GPS',
    'prop.contact.hours':     'Opening Hours',
    'prop.contact.hours.val': 'Monday – Saturday: 10am – 6pm<br>Closed first two weeks of January<br>and last two weeks of August<br>Visits by appointment',
    'prop.contact.cta':       'Request our price list',

    /* News section */
    'news.title':  'News & Press',
    'news.p1':     'Find all the latest news from Château Martinat: our appearances at trade fairs, awards and articles in the specialist press.',
    'news.p2':     'Each event and each publication reflects the passion we put into our wines.',
    'news.p3':     'For more information, please <a href="#contact">contact us</a>.',

    /* Gift section */
    'gift.title':        'Gift Vouchers',
    'gift.intro':        'Give the gift of a unique experience at Château Martinat',
    'gift.card1.title':  'Gourmet Tasting',
    'gift.card1.desc':   'This voucher entitles the holder to a private tasting of our wines (3 cuvées) for 2 people, with a selection of cheeses and breads.<br>Reservation required (email or phone).<br>Value €25.00.<br>Validity: 6 months. Non-refundable.',
    'gift.card2.title':  'Martinat Wine Box',
    'gift.card2.desc':   "Assortment of 6 bottles.<br>The 'Côtes à Côtes' box: 3 Côtes de Bourg + 3 Blaye Côtes de Bordeaux €64.00.<br>The 'Cépages' box: 2 bottles 100% Merlot + 2 bottles 100% Malbec + 2 bottles Merlot/Malbec blend €70.00.<br>Wooden case option +€10.00. Voucher valid 12 months.",

    /* Contact section — index */
    'contact.title':   'Contact',
    'contact.address': 'Address',
    'contact.email':   'Email',
    'contact.phone':   'Phone',
    'contact.gps':     'GPS Coordinates',
    'contact.cta':     'Send us a message',


    /* Formulaire de contact */
    'contact.form.title':                'Send a message',
    'contact.form.firstname':            'First name',
    'contact.form.lastname':             'Last name',
    'contact.form.email':                'Email',
    'contact.form.phone':                'Phone',
    'contact.form.subject':              'Subject',
    'contact.form.subject.placeholder':  '— Choose a subject —',
    'contact.form.subject.order':        'Wine order',
    'contact.form.subject.prices':       'Price list request',
    'contact.form.subject.visit':        'Visit & tasting',
    'contact.form.subject.futures':      'Futures reservation',
    'contact.form.subject.gift':         'Gift voucher',
    'contact.form.subject.pro':          'Professional / importer',
    'contact.form.subject.press':        'Press & media',
    'contact.form.subject.other':        'Other',
    'contact.form.message':              'Message',
    'contact.form.message.placeholder':  'Your message…',
    'contact.form.send':                 'Send message',
    'contact.form.rgpd':                 'Your data is used solely to respond to your enquiry and is never shared with third parties.',

    /* Footer */
    'footer.rights': '© 2026 Château Martinat – All rights reserved',
    'footer.legal':  'Drink responsibly. Alcohol abuse is dangerous to your health.',

    /* Wine pages */
    'wine.back':     'Back',
    'wine.download': 'Download technical sheet',
    'wine.subtitle': 'GRAND VIN DE BORDEAUX',
    'wine.awards':   'Awards',
  }
};

/* ════════════════════════════════════════
   MOTEUR i18n
   - localStorage : persiste entre pages,
     onglets et sessions (≠ sessionStorage)
   - Auto-exécution immédiate : applique la
     langue avant le rendu visible du DOM
   ════════════════════════════════════════ */
const i18n = {
  current: 'fr',

  init() {
    // Lire depuis localStorage (persiste entre toutes les pages)
    const saved = localStorage.getItem('martinat_lang') || 'fr';
    this.applyLang(saved, false);

    // Attacher les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
      // Supprimer l'ancien listener si init() est rappelé
      btn.removeEventListener('click', btn._langHandler);
      btn._langHandler = () => this.applyLang(btn.dataset.lang, true);
      btn.addEventListener('click', btn._langHandler);
    });
  },

  applyLang(lang, save) {
    this.current = lang;
    if (save) localStorage.setItem('martinat_lang', lang);

    // SEO + accessibilité
    document.documentElement.lang = lang;

    // Traduire tous les éléments [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key  = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text === undefined) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    // Traduire les placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key  = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text !== undefined) el.placeholder = text;
    });

    // Blocs de contenu bilingues (.lang-fr / .lang-en)
    document.querySelectorAll('.lang-fr').forEach(el => {
      el.style.display = lang === 'fr' ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
    document.querySelectorAll('.awards-fr').forEach(el => {
      el.style.display = lang === 'fr' ? '' : 'none';
    });
    document.querySelectorAll('.awards-en').forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });

    // Bouton actif
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  },

  t(key) {
    return translations[this.current]?.[key] ?? translations['fr']?.[key] ?? key;
  }
};

/* ════════════════════════════════════════
   EXÉCUTION IMMÉDIATE
   Applique la langue sauvegardée dès que
   le DOM est parsé, sur TOUTES les pages.
   Masque le body pendant l'initialisation
   pour éviter tout flash de contenu.
   ════════════════════════════════════════ */
(function () {
  const lang = localStorage.getItem('martinat_lang') || 'fr';
  document.documentElement.lang = lang;

  // Masquer le body immédiatement pour éviter le flash
  document.documentElement.style.visibility = 'hidden';

  function reveal() {
    i18n.init();
    document.documentElement.style.visibility = '';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reveal);
  } else {
    reveal();
  }
})();