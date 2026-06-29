// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#2c2c2e");
  tg.setBackgroundColor("#1c1c1d");

  // --- CONFIGURATION DES LIENS DE CONTACT ---
  const contactLinks = [
    {
      name: "CANAL TELEGRAM 🌐",
      url: "https://t.me/+wiXvxF0gNDk0ZWNk",
      icon: "#icon-telegram",
      id: "telegram-main",
      className: "telegram-main",
      text: "CANAL TELEGRAM 🌐",
      showQR: true,
      qrImage: "QrCanal.jpg",
    },
    {
      name: "CHAT TELEGRAM 🌐",
      url: "https://t.me/+jTK1EzwLogg3YjM0",
      icon: "#icon-telegram",
      id: "telegram-chat",
      className: "telegram-main",
      text: "CHAT TELEGRAM 🌐",
      showQR: true,
      qrImage: "QrChat.jpg",
    },
    {
      name: "SIGNAL",
      url: "https://signal.me/#eu/JagCUeBZvx2yM2TUAh-mBKpDquHPnqo3SHoLUOBWrkZAxCR853NB37ctXUXzVlGq",
      icon: "#icon-signal",
      id: "signal-main",
      className: "signal",
      text: "SIGNAL ",
      showQR: true,
      qrImage: "QrSignal.png",
    },
    {
      name: "PAGE INSTAGRAM 🟣",
      url: "https://www.instagram.com/1st.avenue__eu?igsh=Z2o3ZXN5cmFubmo4&utm_source=qr",
      icon: "#icon-instagram",
      id: "insta-main",
      className: "insta-main",
      text: "INSTAGRAM 🟣",
    },
    /*  {
        name: 'POTATO 🥔',
        url: ',
        icon: '#icon-potato',
        id: 'potato-main',
        className: 'potato-main',
        text: "POTATO 🥔"
    } */
  ];

  // --- DONNÉES DE L'APPLICATION (V2.4 - FORMATAGE STRICT DES TARIFS) ---
  const appData = [
    // --- Catégorie 1: HASH ---
    {
      id: "HASH",
      name: "🍪 Hash 🍪",
      farm: "",
      type: "Hash",
      quality: " 🍪 Hash 🍪",
      image: "CategHash.png",
      directToProducts: false,
      farms: [
        {
          id: "MOUNTAIN_MEDS",
          name: "🅼🅾🆄🅽🆃🅰🅸🅽 🅼🅴🅳🆂 🇺🇸",
          image: "",
          badgeText: "Hand Crafted Frozen",
          products: [
            {
              id: "MM_1",
              name: "Lemon Cherry 🍋🍒",
              farm: "Mountain Meds 🇺🇸",
              type: "Hash",
              image: "ProductFUSA.jpg",
              video: "VideoFUSA.mp4",
              description:
                "La variété Lemon Cherry (souvent appelée Lemon Cherry Gelato) est un hybride à dominance Indica (60% Indica / 40% Sativa) issu du croisement entre Sunset Sherbet et Girl Scout Cookies. Réputée pour son puissant taux de THC atteignant souvent 25 % à 28 %, elle séduit par son profil aromatique complexe et ses effets équilibrés. [1, 2, 3, 4]\n\n 🍋 Profil Aromatique et Saveurs\n Arôme : Un mélange sucré et acidulé, dominé par des notes de citron frais et de cerise, avec une légère touche terreuse ou boisée.\n Goût : Une explosion de saveurs fruitées crémeuses, rappelant un sorbet aux fruits, avec un équilibre parfait entre le côté acidulé du citron et la douceur de la cerise. [1, 2, 3, 4]\n\n 🧠 Effets et Sensation\n Les consommateurs apprécient cette variété pour sa polyvalence. [1]\n Début : Une vague initiale d'euphorie cérébrale qui stimule la créativité, la sociabilité et chasse le stress et la négativité.\n Évolution : L'effet glisse progressivement vers une profonde relaxation physique, calmant les tensions musculaires sans pour autant clouer au canapé.\n Utilisation : Idéale pour les activités artistiques, la socialisation ou pour se détendre en fin de journée.[1, 2, 3, 4, 5, 6]",
              tarifs: [
                { weight: "10g", price: 160.0 },
                { weight: "25g", price: 350.0 },
                { weight: "50g", price: 650.0 },
                { weight: "100g", price: 1200.0 },
              ],
            },
            {
              id: "MM_2",
              name: "Lemon OG 🍋⛽️",
              farm: "Mountain Meds 🇺🇸",
              type: "Hash",
              image: "ProductFUSA.jpg",
              video: "VideoFUSA.mp4",
              description:
                "La Lemon OG (ou Lemon OG Kush) est un hybride à dominance indica (60% indica / 40% sativa) issu du croisement entre la Las Vegas Lemon Skunk et l'OG #18. Réputée pour son profil terpénique unique, elle offre un arôme intense de citron et de diesel, et est idéale pour soulager le stress, la douleur et favoriser le sommeil. [1, 2, 3, 4]\n\n 🍋 Profil et Arômes\n Goût et Odeur : Un bouquet très alimoné, relevé par des notes de carburant (diesel) et des nuances fruitées.\n Aspect : Des têtes denses et résineuses, avec un excellent ratio calice/feuille facilitant la manucure après la récolte. [1, 2, 3]\n\n ✨ Effets\n Puissance : Un taux de THC souvent supérieur à 20%.\n Sensation : Un effet qui frappe rapidement avec une euphorie joyeuse, suivie d'une profonde relaxation physique.\n Usage recommandé : En soirée ou en fin d'après-midi. À forte dose, c'est une variété très sédative parfaite pour lutter contre l'insomnie et stimuler l'appétit. [1, 2, 3, 4, 5]",
              tarifs: [
                { weight: "10g", price: 160.0 },
                { weight: "25g", price: 350.0 },
                { weight: "50g", price: 650.0 },
                { weight: "100g", price: 1200.0 },
              ],
            },
            {
              id: "MM_3",
              name: "Cream Caramel 🧁🥮",
              farm: "Mountain Meds 🇺🇸",
              type: "Hash",
              image: "ProductFUSA.jpg",
              video: "VideoFUSA.mp4",
              description:
                "La variété Cream Caramel (souvent appelée \"Caramel\") est une légende à dominance Indica issue du croisement entre Blue Black, Maple Leaf Indica et White Rhino. Elle est très prisée pour ses saveurs sucrées et son effet profondément relaxant. [1, 2]\n\n 🌿 Fiche Technique\n Dominance : Indica\n Taux de THC : Généralement entre 15 % et 21 % selon la version\n\n 👅 Arômes et Goût\n ette variété tire son nom de son profil terpénique unique. À la dégustation, elle offre une fumée très douce et crémeuse avec des notes intenses de caramel sucré et de bonbon, accompagnées de subtils arrière-goûts terreux et boisés hérités de ses ancêtres afghans et blue. [1, 2, 3, 4]\n\n 🧠 Effets\n Fidèle à son héritage Indica, Cream Caramel offre un high à la fois mentalement euphorique et physiquement très apaisant. Elle est particulièrement recherchée pour : [1]\n Une profonde relaxation musculaire.\n Aider à gérer le stress, l'anxiété ou les insomnies.\n Un effet de longue durée qui détend sans pour autant clouer au canapé (sauf à forte dose)",
              tarifs: [
                { weight: "10g", price: 160.0 },
                { weight: "25g", price: 350.0 },
                { weight: "50g", price: 650.0 },
                { weight: "100g", price: 1200.0 },
              ],
            },
            {
              id: "MM_4",
              name: "Gush Mintz 🫐🍃",
              farm: "Mountain Meds 🇺🇸",
              type: "Hash",
              image: "ProductFUSA.jpg",
              video: "VideoFUSA.mp4",
              description:
                'La Gush Mintz (ou Gush Mints) est une variété hybride à dominance indica (70/30) réputée pour son profil terpénique mentholé et fruité, ainsi que pour sa très forte puissance. Croisée à partir de génétiques prestigieuses (Kush Mints x F1 Durb x Gushers), elle affiche des taux de THC souvent compris entre 20 % et plus de 30 %. [1, 2, 3, 4, 5]\n\n 🌿 Arômes et Goûts\n En bouche : Un goût distinctif et rafraîchissant de menthol et d\'herbes, qui évolue rapidement vers des notes de bonbons fruités et sucrés.\n Au nez : Un arôme complexe, à la fois terreux, épicé et très diesel, couronné par une intense fraîcheur mentholée. [1, 2, 3, 4, 5]\n\n 🧠 Effets et Puissance\n Début du high : Une montée rapide qui frappe d\'abord le cerveau avec une vague d\'euphorie, de bonheur et de soulagement face aux pensées négatives. [1]\n Descente : Très vite, un puissant effet de "body melt" envahit le corps. Les consommateurs ressentent une profonde relaxation physique pouvant mener à un effet sédatif ou de blocage sur le canapé (couch-lock). [1, 2]\n\n 🌙 Usage Thérapeutique Recommandé\n En raison de son taux de THC élevé et de ses propriétés anesthésiantes pour le corps, les utilisateurs médicaux privilégient cette variété pour soulager : [1, 2]\n Les insomnies et troubles du sommeil\n Le stress chronique et l\'anxiété\n Les douleurs physiques et l\'inflammation [1, 2, 3]',
              tarifs: [
                { weight: "10g", price: 160.0 },
                { weight: "25g", price: 350.0 },
                { weight: "50g", price: 650.0 },
                { weight: "100g", price: 1200.0 },
              ],
            },
            {
              id: "MM_5",
              name: "Dosidos 🍋‍🟩🍑⛽️",
              farm: "Mountain Meds 🇺🇸",
              type: "Hash",
              image: "ProductFUSA.jpg",
              video: "VideoFUSA.mp4",
              description:
                "Le Dosidos (Do-Si-Dos) est un puissant hybride à dominance indica (70 %) issu du croisement entre la Girl Scout Cookies et la Face Off OG. Réputé pour son taux de THC souvent très élevé (variant généralement entre 19 % et 30 %), il offre une expérience psychoactive intense qui séduit de nombreux consommateurs.[1, 2]\n\n 🧬 Générique & Arômes\n Origines : Un croisement prestigieux entre la Girl Scout Cookies et la Face Off OG.\n Saveur et Odeur : Complexe et gourmand, le profil terpénique se caractérise par des notes de biscuits sucrés, accentuées par des nuances terreuses, de pin et une pointe d'agrumes (ou de menthe selon les phénotypes). [1, 2, 3, 4]\n\n ⚡ Effets ressentis\n La montée est rapide et frappe fort. [1]\n Début : Une bouffée d'euphorie cérébrale et stimulante, accompagnée d'une vague d'énergie positive.[1, 2]\n Milieu : Une introspection joyeuse s'installe. [1]\n Fin : Les effets se dirigent vers une relaxation physique profonde. Le corps se détend complètement, soulageant les tensions musculaires. [1, 2]\n Utilisation idéale : Grâce à ses puissantes propriétés sédatives, c'est une variété très populaire pour une consommation en soirée, idéale pour aider à lutter contre le stress, la douleur chronique ou l'insomnie.",
              tarifs: [
                { weight: "10g", price: 160.0 },
                { weight: "25g", price: 350.0 },
                { weight: "50g", price: 650.0 },
                { weight: "100g", price: 1200.0 },
              ],
            },
            {
              id: "MM_6",
              name: "Headbanger OG ⛽️🍋🍪🍬",
              farm: "Mountain Meds 🇺🇸",
              type: "Hash",
              image: "ProductFUSA.jpg",
              video: "VideoFUSA.mp4",
              description:
                "La Headbanger (ou Headbanger OG) est une variété hybride à dominance sativa (70/30) créée par Karma Genetics. Très prisée pour un usage de jour, elle est issue d'un croisement entre la légendaire Sour Diesel et la Biker Kush. Ses têtes denses et résineuses offrent des effets puissants, cérébraux et très énergisants. [1, 2, 3, 4, 5]\n\n 🧠 Les Effets\n Un rush cérébral instantané : Très stimulante, elle provoque une euphorie rapide et booste la créativité et la concentration.\n Idéale en journée : Elle est parfaite pour travailler, socialiser ou rester actif, sans provoquer de sédation ou d'effet \"canapé\".\n Potentiel thérapeutique : Souvent utilisée pour soulager le stress, la fatigue et les symptômes de la dépression. [1, 2, 3, 4]\n\n 🍋 Arômes et Goûts\n Profil olfactif : Un mélange puissant et piquant avec des notes très fortes de diesel, combinées à du citron vert et des touches terreuses / pin.\n Saveur : Très fruitée avec une forte acidité, suivie d'un goût prononcé de Kush épicée et un arrière-goût classique de carburant. [1, 2, 3, 4]",
              tarifs: [
                { weight: "10g", price: 160.0 },
                { weight: "25g", price: 350.0 },
                { weight: "50g", price: 650.0 },
                { weight: "100g", price: 1200.0 },
              ],
            },
           
          ],
        },
        {
          id: "TRICHOMES_EXTRACT",
          name: "🆃🆁🅸🅲🅷🅾🅼🅴🆂🅴🆇🆃🆁🅰🅲🆃🅻🅰🅱🆉",
          image: "",
          badgeText: "Premium Static",
          products: [
            {
              id: "TE_1",
              name: "Melón guava x 24k 🍈🍊🍇",
              farm: "TrichomesExtractLabz 🔬",
              type: "Hash",
              image: "",
              video: "",
              description:
                "Le croisement Melon Guava x 24k (souvent appelée Melon 24k) est un hybride exotique très aromatique. Ce profil marie la douceur crémeuse et tropicale de la Melon Guava avec les notes d'agrumes vifs et sucrés de la 24k Gold (Kosher Kush x Tangie). [1, 2, 3, 4]\n\n Profil des Variétés Parents\n Melon Guava : Un phénotype hybride réputé pour son goût très fruité, évoquant un cocktail de fruits tropicaux et de pastèque avec un effet relaxant.\n 24k Gold (Kosher Tangie) : Un hybride à dominance indica (60/40) célèbre pour ses arômes intenses d'orange et d'agrumes. [1, 2, 3]\n\n Avis et Expérience\n Goût et Arôme : Le profil terpénique est dominé par des notes sucrées, acidulées et crémeuses. On y retrouve un mélange de melon, de goyave et une finale fraîche et piquante d'agrumes (mandarine/orange).\n Effets : L'effet combine le high cérébral euphorique et énergisant de la lignée Tangie (parfait pour stimuler la créativité ou l'humeur) avec la relaxation physique profonde héritée de la Kosher Kush. [1]\n Puissance : Le taux de THC varie généralement entre 20% et 24%, ce qui en fait une variété bien équilibrée, adaptée aux consommateurs ayant une tolérance moyenne à élevée. [1]\n Idéale pour une consommation en journée ou en début de soirée, cette génétique est prisée tant pour son goût de bonbon tropical que pour son high joyeux et apaisant.",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 270.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 800.0 },
                { weight: "500g", price: 3500.0 },
              ],
            },
          ],
        },
        {
          id: "VVS_TANGER_160",
          name: "🆅🆅🆂 🆃🅰🅽🅶🅴🆁 ①⑥⓪/⑨⓪",
          image: "",
          badgeText: "Premium Frozen",
          products: [
            {
              id: "VVS_1",
              name: "Orange Slush 🍊🍬",
              farm: "💎 VVS Tanger 💎",
              type: "Hash",
              image: "ProductOS.png",
              video: "VideoOS.mov",
              description:
                "La variété Orange Slush (ou Orange Slushie) est un hybride prisé pour ses arômes intenses d'agrumes et son effet à la fois énergisant et relaxant. [1, 2, 3]\n\n 🍇 Génétique et Arômes\n Lignée : Un croisement généralement issu de l'Orange Zkittlez et du Slurricane (ou Orange Punch).\n Profil de saveur : Un goût de zeste d'orange sucré, de bonbon aux agrumes et une touche terreuse en fin de bouche.\n Aspect : Des bourgeons denses et givrés qui se parent parfois de teintes violettes. [1, 2, 3, 4]\n\n ⚡ Effets et Expérience (Consensus des utilisateurs)\n Montée : Donne un regain d'énergie initial et alerte, parfait pour socialiser, se promener ou jouer.\n Descente : Évolue vers une douce relaxation corporelle et une sensation de légèreté, sans clouer au canapé. [1, 2, 3, 4]",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 120.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 450.0 },
                { weight: "100g", price: 750.0 },
                { weight: "500g", price: 3500.0 },
                { weight: "1kg", price: 6000.0 },
              ],
            },
            {
              id: "VVS_2",
              name: "Too Much Z 🍭🫐🍇",
              farm: "💎 VVS Tanger 💎",
              type: "Hash",
              image: "ProductTMZ.png",
              video: "VideoTMZ.mov",
              description:
                "La Zkittlez est un hybride à dominance indica (60/40) mondialement primé, célèbre pour son profil terpénique exceptionnel. Elle doit son nom à ses arômes fruités et sucrés rappelant les célèbres bonbons. C'est une variété idéale pour la journée, offrant un high cérébral euphorique et une douce relaxation corporelle. [1, 2, 3, 4, 5]\n\n 🧬 Généalogie et Arômes\n Parents : Issue d'un croisement complexe entre la Grape Ape et la Grapefruit (avec parfois d'autres influences selon les phénotypes).\n Goût et Odeur : Un véritable cocktail de fruits tropicaux (raisin, pamplemousse, baies) avec une note finale sucrée et acidulée. [1, 2, 3]\n\n ⚖️ Effets\n Niveau de THC : Modéré à élevé, oscillant généralement entre 15 % et 24 % selon les cultures et les sélections.\n Expérience : Elle offre une montée d'énergie positive et euphorique, parfaite pour socialiser ou stimuler la créativité sans clouer au canapé. Le stone physique est présent mais reste léger et confortable.",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 120.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 450.0 },
                { weight: "100g", price: 750.0 },
                { weight: "500g", price: 3500.0 },
                { weight: "1kg", price: 6000.0 },
              ],
            },
            {
              id: "VVS_3",
              name: "Pinata 🍍🍍",
              farm: "💎 VVS Tanger 💎",
              type: "Hash",
              image: "ProductP.png",
              video: "VideoP.mov",
              description:
                "La Piñata est une variété hybride très réputée (50% indica / 50% sativa) créée par Grounded Genetics. Issue d'un croisement entre une Gelato 41 et une Runtz, elle est célèbre pour ses effets puissants (souvent plus de 25% de THC) et son profil aromatique complexe et gourmand. [1, 2, 3, 4]\n\n Aperçu et Caractéristiques\n Génétique : Gelato 41 x Runtz\n Taux de THC : Élevé, allant de 20% à plus de 26%\n Arômes et Goûts\n Les phénotypes de la Piñata offrent une palette de saveurs très recherchée :\n Notes sucrées : Des arômes exotiques et de bonbons hérités de la lignée Runtz.\n Gourmandise : Un goût riche de noisette grillée ou de dessert, qui rappelle le baklava (apport de la Gelato 41).\n Gaz et crémeux : De subtiles nuances gazeuses (gassy) et crémeuses typiques de la famille Gelato. [1, 2, 3, 4]\n\n Effets\n Grâce à son profil équilibré, la Piñata offre une expérience complète :\n Puissance : Son taux élevé de THC la rend idéale pour les consommateurs expérimentés ou en fin de journée.\n Sensation : Elle procure une euphorie relaxante tout en gardant une dimension cérébrale stimulante. Elle est souvent appréciée pour ses propriétés thérapeutiques apaisantes.",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 120.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 450.0 },
                { weight: "100g", price: 750.0 },
                { weight: "500g", price: 3500.0 },
                { weight: "1kg", price: 6000.0 },
              ],
            },
            {
              id: "VVS_4",
              name: "Fruit Joy 🍇🍇🍇",
              farm: "💎 VVS Tanger 💎",
              type: "Hash",
              image: "ProductFJ.png",
              video: "VideoFJ.mov",
              description:
                'La variété Fruit Joy (créée par The Grateful Seeds) est un hybride à dominance Indica (70%) issu du croisement entre la Papaya et la Barbara Bud. Réputée pour ses profils terpéniques très gourmands, elle offre un goût prononcé de fruits exotiques avec des notes douces et acidulées. [1, 2, 3, 4]\n\n 🧬 Générique & Lignée\n Génétique : Papaya x Barbara Bud\n Type : 70% Indica / 30% Sativa\n Origine : Sélectionnée par le breeder espagnol The Grateful Seeds. [1, 2, 3]\n\n 🌿 Arômes & Saveurs\n Cette souche est très prisée par les amateurs de concentrés (Water Hash, Piatella) pour son profil aromatique de "salade de fruits". [1, 2, 3]\n Notes de dégustation : Des arômes intenses de papaye et de mangue, équilibrés par une touche zeste d\'agrumes et une légère nuance gazeuse (gassy) en fin de bouche. [1, 2]\n\n ⚡ Effets & THC\n Taux de THC : Généralement entre 17 % et 22 % (selon les phénotypes et les cultures).\n Sensation : Un "high" hybride qui commence par une douce euphorie cérébrale et évolue rapidement vers un effet relaxant et apaisant pour le corps, typique des variétés Indica. [1, 2, 3, 4]💎 Premium Frozen 160/90u. Une salade de fruits rouges concentrée dans un bloc de résine ultra-premium. Curing stabilisé.',
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 120.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 450.0 },
                { weight: "100g", price: 750.0 },
                { weight: "500g", price: 3500.0 },
                { weight: "1kg", price: 6000.0 },
              ],
            },
          ],
        },
        {
          id: "VVS_TANGER_105",
          name: "🆅🆅🆂 🆃🅰🅽🅶🅴🆁 105/220u",
          image: "",
          badgeText: "Premium Frozen",
          products: [
            {
              id: "LEMONCHERYGELATO",
              name: "Tropicana x LCG 🏝️",
              farm: "💎 VVS Tanger 💎",
              type: "Hash",
              image: "",
              video: "",
              description:
                "Le croisement Tropicana x LCG (Lemon Cherry Gelato) est un hybride très recherché qui combine l'énergie pétillante des agrumes de la Tropicana avec la douceur crémeuse et fruitée de la LCG. Souvent plébiscitée sous forme de résine, cette variété offre une expérience premium, idéale pour la journée et les interactions sociales. [1, 2, 3, 4, 5]\n\n Profil & Caractéristiques\n Génétique : Hybride à dominance Sativa (Tropicana) combinée à une génétique complexe de type Gelato (LCG). [1, 2]\n Arôme et Goût : Une véritable explosion de saveurs. Vous retrouverez des notes zestées et acidulées (orange/citron) héritées de la Tropicana, parfaitement adoucies par le goût crémeux, sucré et de bonbon aux fruits rouges de la LCG. [1]\n\n Effets & Expérience\n Montée : Le high commence par une stimulation cérébrale énergique. La Tropicana apporte une clarté mentale et un élan de créativité, parfait pour rester actif. [1]\n Descente : La LCG prend ensuite le relais avec une profonde relaxation corporelle, qui détend les muscles sans vous clouer au canapé. [1]\n Usage recommandé : Idéale en journée pour chasser le stress et booster l'humeur, tout en profitant d'une agréable sensation de bien-être physique.",
              tarifs: [
                { weight: "5g", price: 50.0 },
                { weight: "10g", price: 90.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4700.0 },
              ],
            },
            {
              id: "frobiedenfruit",
              name: "Forbiddden Fruit 🍎",
              farm: "💎 VVS Tanger 💎",
              type: "Hash",
              image: "ProductFF.jpg",
              video: "VideoFF.mp4",
              description:
                "La Forbidden Fruit est un hybride à dominance Indica (environ 70 %) réputé pour son profil aromatique exceptionnel et ses effets profondément relaxants. Issue du croisement entre la Cherry Pie et la Tangie, elle séduit aussi bien les amateurs de saveurs fruitées que ceux qui recherchent un puissant soulagement physique. [1, 2, 3]\n\n 🧬 Généalogie & Apparence\n Lignée : Croisement légendaire entre Cherry Pie et Tangie.\n\n Taux de THC : Généralement compris entre 20 % et 24 % (très faible en CBD). [1, 2, 3, 4, 5, 6, 7, 8]\n\n 🍋 Arômes & Goût\n Son nom n'a pas été choisi par hasard : la variété offre une véritable explosion de saveurs fruitées. [1, 2]\n Au nez : Un bouquet complexe qui rappelle une salade de fruits frais, mêlant le zeste d'agrumes (pamplemousse, orange) au côté sucré de la cerise et de la mangue. [1, 2, 3]\n En bouche : Des notes de cerise confite, de fruits tropicaux et de bonbon, soutenues par une très légère touche terreuse ou pin en arrière-plan. [1, 2, 3]\n\n 🛋️ Effets & Utilisation\n Grâce à ses origines génétiques, la Forbidden Fruit offre un équilibre unique entre l'euphorie cérébrale et la relaxation musculaire. [1]\n Effet de tête : Montée rapide avec une douce euphorie et une sensation de bonheur.\n Effet corporel : Évolue rapidement vers une détente profonde et durable qui détend le corps sans clouer au canapé.\n Utilité thérapeutique : Très appréciée par les utilisateurs cherchant à apaiser le stress, l'anxiété, la dépression ou les tensions musculaires.",
              tarifs: [
                { weight: "5g", price: 50.0 },
                { weight: "10g", price: 90.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4700.0 },
              ],
            },
          ],
        },
        {
          id: "SELECTION_1ST",
          name: "𝔖é𝔩𝔢𝔠𝔱𝔦𝔬𝔫 1𝔰𝔱 𝔞𝔳𝔢𝔫𝔲𝔢 𝔡𝔯𝔶",
          image: "",
          badgeText: "90/120",
          products: [
            {
              id: "S1_1",
              name: "nectarine gazzy 🍊⛽️",
              farm: "1st Avenue 🛩",
              type: "Hash",
              image: "ProductNG.png",
              video: "VideoNG.mov",
              description:
                "La Nectarine Jelly (souvent appelée Nectarine Gazz en raison de ses notes pétrolières) est un hybride à dominance sativa créé par Purple City Genetics (issu du croisement Peach Panther et GovernMint Oasis). Très prisée par les amateurs de saveurs complexes, elle est particulièrement réputée pour son profil terpénique et ses effets équilibrés. [1, 2, 3]\n\n 🌿 Les Arômes et le Goût\n Saveur fruitée : Des notes prononcées de nectarine, d'abricot et de bonbons sucrés à la pêche.\n La touche \"Gazz\" : Le profil s'ouvre sur des notes très exotiques pour évoluer vers un arrière-goût terreux, \"dank\" et skunky/diesel bien affirmé.\n Apparence : Des têtes denses et résineuses vert citron, ornées de pistils aux reflets orangés et violets.[1, 2, 3, 4, 5]\n\n ⚡ Les Effets\n Montée cérébrale : Un effet immédiat qui apporte de l'énergie, de la concentration et une vague d'euphorie positive.\n Descente relaxante : Après l'euphorie initiale, l'effet se dissipe doucement vers une relaxation corporelle et apaisante qui n'assomme pas. [1, 2, 3]\n C'est une variété très polyvalente, idéale pour une consommation en journée ou en début de soirée, offrant à la fois stimulation créative et détente",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 400.0 },
                { weight: "500g", price: 1800.0 },
                { weight: "1kg", price: 3500.0 },
              ],
            },
            {
              id: "S1_2",
              name: "Orange wave 🍊🍊🍊",
              farm: "1st Avenue 🛩",
              type: "Hash",
              image: "ProductOW.png",
              video: "VideoOW.mov",
              description:
                "🔬 Génétique et Ligne\n\n Orange Wave est un assemblage issu de quatre souches Sativa de culture régénérative biologique (certifiées Dem Pure) cultivées à Humboldt en Californie. Ses lignées incluent : [1]\n Coyote Blue\n 2Wave HoldDown\n Orange Marmalade\n Clementine",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 400.0 },
                { weight: "500g", price: 1800.0 },
                { weight: "1kg", price: 3500.0 },
              ],
            },
            {
              id: "S1_3",
              name: "Lemona Acaï 🍋🍇🍌",
              farm: "1st Avenue 🛩",
              type: "Hash",
              image: "ProductLA.png",
              video: "VideoLA.mov",
              description:
                "Lemon Acai est un hybride à dominance sativa (60 % sativa / 40 % indica) créé par Black Farm Genetix en croisant Lemon Miracle et Acai Cake. Connue pour son arôme de fruits tropicaux crémeux et son taux de THC pouvant atteindre 25 %, cette variété offre un effet à la fois cérébral et profondément relaxant. [1, 2, 3, 4]\n\n 🧬 Génétique et Arômes\n Origine : Descendante directe de souches américaines très recherchées, elle combine la douceur et les notes de baies du phénotype Acai avec la fraîcheur acidulée du Lemon.\n\n 🌿 Effets ressentis\n Cérébral : Dès les premières bouffées, elle procure un effet énergisant et motivant, idéal pour rester concentré tout au long de la journée ou pour stimuler la créativité. \n\n Physique : Cet élan mental est rapidement suivi par un soulagement corporel profond. Sans clouer au canapé, elle offre une lourdeur apaisante de la tête aux pieds.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 400.0 },
                { weight: "500g", price: 1800.0 },
                { weight: "1kg", price: 3500.0 },
              ],
            },
            {
              id: "S1_4",
              name: "Gak tangie 🍊⛽️🍇",
              farm: "1st Avenue 🛩",
              type: "Hash",
              image: "ProductGT.png",
              video: "VideoGT.mov",
              description:
                "La GAK Tangie (parfois simplement GAK) est une variété hybride à dominance Sativa issue d'un croisement entre la Sour Gak et la célèbre Tangie. Réputée pour son profil terpénique exceptionnel, elle offre une expérience stimulante et riche en saveurs, idéale pour une consommation en journée. \n Ethos Cannabis +1\n\n 🍋 Profil Aromatique et Visuel\n Arôme et Goût : Dès l'ouverture, elle dégage un parfum puissant de mandarine et d'agrumes sucrés, hérité de ses gènes Tangie. En bouche, elle développe des notes acidulées, terreuses et épicées (grâce au limonène et au caryophyllène). MMJ Health +1\n\n Apparence : Ses têtes sont denses, d'un vert vif, parsemées de pistils orangés et recouvertes d'une épaisse couche de trichomes résineux.\n\n 🧠 Effets et Expérience\n Cérébral : Elle procure un \"high\" immédiat, caractérisé par une forte euphorie, une hausse de l'humeur et une grande clarté mentale. Elle stimule la créativité et la concentration, ce qui en fait un excellent choix pour les activités artistiques ou sociales. MMJ Health\n\n Physique : Bien qu'elle soit stimulante, elle détend légèrement le corps sans provoquer d'effet sédatif (lourd). MMJ Health\n\n Taux de THC : Généralement élevé, oscillant souvent entre 20 % et 25 %, ce qui la rend puissante ; elle doit donc être consommée avec modération par les novices.\n\n 🩺 Usages Thérapeutiques Potentiels\n Dans les communautés de patients, la GAK Tangie est souvent recherchée pour aider à soulager :\n Le stress et l'anxiété.\n La fatigue chronique.\n La dépression et la baisse de moral, grâce à ses effets euphorisants",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 400.0 },
                { weight: "500g", price: 1800.0 },
                { weight: "1kg", price: 3500.0 },
              ],
            },
            {
              id: "S1_5",
              name: "Pink honey 🌹🍯",
              farm: "1st Avenue 🛩",
              type: "Hash",
              image: "ProductPH.png",
              video: "VideoPH.mov",
              description:
                'La Pink Honey est une variété hybride créée par Grounded Genetics. Issue du croisement entre (Papaya x GMO) x Ozark, elle est très prisée pour ses têtes denses aux pistils roses vibrants et son profil terpénique exotique. [1, 2, 3]\n\n 🌿 Profil et Arômes\n Goût : Un mélange complexe de fruits tropicaux (provenant de la lignée Papaya), de gaz "funky" (de la GMO) et une finale sucrée-terreuse. [1, 2]\n\n Aspect : Des bourgeons denses et givrés, parfaits pour les amateurs d\'extractions (Catégorisée comme "Certified Washers" par le breeder). [1]\n Effets : Les phénotypes expriment souvent des taux de THC élevés (dépassant parfois 27%), offrant un "high" à la fois énergétique et élévateur. [1]',
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 400.0 },
                { weight: "500g", price: 1800.0 },
                { weight: "1kg", price: 3500.0 },
              ],
            },
            {
              id: "S1_6",
              name: "Frosty diesel ⛽️⛽️",
              farm: "1st Avenue 🛩",
              type: "Hash",
              image: "ProductFD.png",
              video: "VideoFD.mov",
              description:
                'La variété Frosty Diesel est un hybride très recherché pour son incroyable production de trichomes (effet "givré") et son profil aromatique unique. Elle offre un excellent équilibre entre les effets relaxants physiques et un "high" cérébral euphorique, tout en proposant un goût de carburant classique avec des nuances douces.[1, 2, 3, 4, 5]\n\n 🧬 Généalogie et Arômes\n Origine : Dérivée des célèbres génétiques de la famille Diesel (souvent croisée avec des variétés comme Frosty/Frosty OG ou Strawberry Diesel).\n Aspect : Des têtes extrêmement denses et résineuses, recouvertes d\'une épaisse couche de cristaux blancs.\n Arôme : Un profil aromatique très prononcé qui mêle des notes terreuses, de pin, d\'agrumes et le fameux goût âcre d\'essence (diesel). [1, 2, 3, 4]\n\n ⚡ Effets et Utilisation\n Type : Hybride à dominance Indica ou Sativa selon le phénotype, mais toujours très puissante.\n Effet mental : Procure une euphorie heureuse, stimulante et idéale pour la créativité.\n Effet physique : Une relaxation corporelle profonde qui détend les muscles sans provoquer d\'effet "canapé" (sauf en forte consommation).\n Usage médical : Très appréciée par les patients pour soulager le stress, l\'anxiété, la dépression et les douleurs chroniques.',
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 400.0 },
                { weight: "500g", price: 1800.0 },
                { weight: "1kg", price: 3500.0 },
              ],
            },
            {
              id: "S1_7",
              name: "Chimera #7 🍋🍋🍋",
              farm: "1st Avenue 🛩",
              type: "Hash",
              image: "ProductC.png",
              video: "VideoC.mov",
              description:
                "La Chimera (souvent connue sous le nom de Chimera #7 ou Chimera Cut) est une variété de cannabis hybride très prisée, issue du croisement entre la White Truffle et The Creature. Sélectionnée par le célèbre éleveur Beleaf, elle est réputée pour ses têtes denses, ses reflets violets et son profil terpénique unique. [1, 2, 3, 4]\n\n 🧬 Génétique et Arômes\n Origine : White Truffle × The Creature\n Arôme : Des notes douces et complexes de vin de porto, de caramel au beurre (butterscotch) et de bonbon fruité (type Tic-Tac à l'orange).\n\n 💨 Effets et Utilisation\n Type d'effet : Un hybride puissant mais polyvalent. Elle procure généralement une sensation de détente profonde (parfaite pour décompresser) tout en stimulant la créativité et l'euphorie, convenant aussi bien aux novices qu'aux habitués",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 400.0 },
                { weight: "500g", price: 1800.0 },
                { weight: "1kg", price: 3500.0 },
              ],
            },
            {
              id: "S1_8",
              name: "Milo cheese ⛽️🧀",
              farm: "1st Avenue 🛩",
              type: "Hash",
              image: "ProductMC.png",
              video: "VideoMC.mov",
              description:
                "La célèbre variété de cannabis Cheese (également connue sous le nom de Big Buddha Cheese) a été stabilisée et popularisée par le breeder britannique Milo Yung. Cette variété de légende, issue d'une sélection de Skunk #1, est réputée pour son arôme pénétrant de fromage épicé et son effet équilibré. [1, 2, 3]\n\n Revue et Caractéristiques\n Génétique : Un phénotype spécifique de Skunk, dont le clone original a été retravaillé pour offrir des graines stables et féminisées.\n\n Arôme et Goût : Son odeur est l'une des plus reconnaissables au monde : un mélange puissant de fromage affiné, de terre et de notes skunky, adouci par une légère touche sucrée.\n Effets : Elle offre un high cérébral euphorique et créatif, qui évolue rapidement vers une profonde relaxation physique et durable.\n Taux de THC : Généralement autour de 20%, offrant une puissance solide mais sans l'effet assommant de certains hybrides modernes.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 400.0 },
                { weight: "500g", price: 1800.0 },
                { weight: "1kg", price: 3500.0 },
              ],
            },
          ],
        },
      ],
    },

    // --- Catégorie 2: FLEURS ---
    {
      id: "FLEURS",
      name: " 🪴 Fleurs 🪴",
      farm: "",
      type: "Weed",
      quality: " 🪴 Fleurs 🪴",
      image: "CategFleurs.png",
      directToProducts: false,
      farms: [
        {
          id: "Amnesia",
          name: "Amnesia 🌷",
          image: "",
          badgeText: "Grow / CaliSpain",
          products: [
            {
              id: "Amne",
              name: "Amnesia Haze 😶‍🌫🍃",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductA.png",
              video: "VideoA.mp4",
              description:
                "🌷 Le classique indémodable. Effet sativa surpuissant, nez citronné/terreux authentique. Un standard incontournable.",
              tarifs: [
                { weight: "100g", price: 300.0 },
                { weight: "500g", price: 1400.0 },
                { weight: "1kg", price: 2500.0 },
              ],
            },
          ],
        },
        {
          id: "Trapnumberz 🎸",
          name: "🆃🆁🅰🅿🅽🆄🅼🅱🅴🆁🆉 🇬🇧🇪🇸",
          image: "",
          badgeText: "Grow / CaliSpain",
          products: [
            {
              id: "TN_1",
              name: "Cream Smoothie 🍦🥤",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductCS.png",
              video: "VideoCS.mp4",
              description:
                "Cream Smoothie est un hybride à dominante indica issu du croisement entre Gelonade et C.R.E.A.M. (ou Cream). Réputée pour ses saveurs douces et fruitées dignes d'un dessert, cette variété offre un parfait équilibre entre une euphorie mentale stimulante et une relaxation corporelle profonde sans lourdeur. [1, 2, 3]\n\n 🌿 Arômes et Saveurs\n La Cream Smoothie porte très bien son nom grâce à son profil terpénique très gourmand. [1, 2]\n Goût : Des notes crémeuses et sucrées de vanille, mélangées à un zeste d'agrumes (orange, citron) qui rappelle un \"orange creamsicle\" ou un smoothie fruité.\n Arôme : Un nez floral et tropical avec une finition soyeuse, presque beurrée. [1, 2, 3]\n\n 🧠 Effets ressentis\n C'est une variété idéale pour une session en après-midi ou en début de soirée. [1]\n Début (High) : Une montée rapide de joie, d'énergie créative et de clarté mentale.\n Fin (Body Stone) : L'effet s'estompe vers une détente musculaire et un apaisement corporel parfaits pour se relaxer après une longue journée, sans pour autant clouer au canapé. [1, 2, 3, 4]\n\n 🔬 Profil et Culture\n Taux de THC : Généralement situé entre 20 % et 25 %.\n Aspect : Des têtes denses et givrées avec de beaux reflets vert foncé et parfois des teintes violettes.\n Floraison : En culture intérieure, elle demande environ 8 à 9 semaines pour fleurir et offre un rendement satisfaisant. [1, 2, 3, 4, 5]",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_2",
              name: "Transcendence 🌌✨",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductT.png",
              video: "VideoT.mp4",
              description:
                "La variété de cannabis Transcendence (un hybride à dominance indica issu du croisement entre Sunset Sherbert et Devil Driver, créé par Clearwater Genetics et Tiki Madman) est réputée pour ses effets relaxants et cérébraux. [1]\n\n Voici une analyse détaillée de cette variété :\n\n 🧠 Effets et Expérience\n Coup de boost initial : Les utilisateurs signalent une montée euphorique et créative rapide, qui stimule l'humeur. [1]\n Détente corporelle : Un apaisement physique fluide s'installe ensuite, soulageant les tensions musculaires sans pour autant clouer au canapé. [1]\n Usage : Idéale pour se détendre après une journée de travail, pratiquer des activités artistiques, ou simplement pour passer un moment de bonheur léger avec des amis. [1, 2]\n\n 🌿 Arômes et Profil Terpénique\n Saveurs : Elle offre des notes de citron doux et acidulé, mêlées à des touches diesel et de musc terreux.\n Apparence : Les têtes sont souvent denses, vert clair et enrobées de trichomes scintillants.\n",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_3",
              name: "Apple Juice 🍏🧃",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "La variété de cannabis Apple Juice (hybride à dominance indica) est appréciée pour son goût distinctif et ses effets équilibrés. [1, 2]\n\n Profil et Effets :\n Arômes : Des notes douces de pommes fraîches, d'agrumes et de fruits acidulés. [1, 2, 3]\n Effets ressentis : Une montée relaxante qui détend le corps (particulièrement la partie supérieure) tout en stimulant la créativité. C'est une variété qui apaise sans pour autant vous clouer au canapé. [1, 2]\n Avis des consommateurs : Les utilisateurs sur Leafly soulignent que c'est une excellente option pour décompresser après le travail ou lors d'une journée de repos, sans ressentir de fatigue excessive ni d'effet \"couch-lock\"",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_4",
              name: "Rs11 🌈⛽",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "🇬La RS11 (Rainbow Sherbert #11) est un hybride à dominance indica issu du croisement entre la Pink Guava et l'OZK. Très prisée pour sa qualité \"exotique\" venue de Californie, elle est célèbre pour son profil aromatique fruité unique et son effet parfaitement équilibré. [1, 2, 3, 4]\n\n 🧬 Caractéristiques et Génétique\n Génétique : Hybride (Pink Guava × OZK).\n Taux de THC : Élevé, oscillant généralement entre 20 % et 27 % selon la culture.\n Aspect visuel : Des têtes denses et compactes, souvent parsemées de nuances vert-lime et bleu-vert, le tout enrobé de trichomes brillants. [1, 2, 3, 4, 5]\n\n 🍓 Arômes et Saveurs\n La RS11 offre une expérience gustative complexe, très recherchée par les connaisseurs : [1, 2, 3, 4]\n Nez : Un mélange de fruits sucrés, de bonbons acidulés et de notes crémeux, avec une subtile touche terreuse et de pin en arrière-plan.\n Goût : Une fumée douce et fruitée qui rappelle les agrumes, les baies et une légère touche de \"gas\" (carburant) en fin de bouche. [1, 2, 3, 4, 5]\n\n 💨 Effets\n Cette variété est particulièrement appréciée pour son \"high\" équilibré : [1, 2, 3, 4]\n Mental : Elle procure une douce sensation de bien-être, une élévation de l'humeur et une clarté mentale qui vous garde alerte.\n Physique : Une relaxation corporelle s'installe progressivement, apaisant les tensions sans provoquer de sédation trop lourde",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_5",
              name: "Str8 Lemonade 🍋🥤",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "Vue d'ensemble de la variété\n\n Lignée : Lemon OG × Gorilla Haze\n Type : Sativa dominante\n Arômes et saveurs : Citron fraîchement pressé, terreux, acidulé et une légère touche de cannabis classique\n Effets principaux : Euphorique, créatif, énergisant et élévateur d'humeur\n Profil de terpènes : Myrcène, Pinène, Limonène, et Terpinolène [1, 2, 3, 4]\n\n Les effets en détail\n Connue pour son profil riche en limonène (le terpène responsable de l'odeur de citron), la Str8 Lemonade offre un puissant élan de bonheur. Les consommateurs rapportent qu'elle induit un état de \"flux créatif\" idéal pour les tâches quotidiennes ou les moments passés entre amis. Elle est généralement moins adaptée pour le soir ou pour ceux qui recherchent un effet purement sédatif ou calmant",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_6",
              name: "Rnbz 🌈🍬",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductRBZ.png",
              video: "VideoRBZ.mp4",
              description:
                "The RNB strain, widely known as Rainbow Blast, is a potent 70% indica-dominant hybrid crossing Zkittlezand Rainbow Chip. It is celebrated for its highly stimulating, euphoric, and giggly high that gently fades into cozy, sedative relaxation. [1]\n\n Profil et Effets\n Souvent vendue par des dispensaires comme Curaleaf, cette variété offre une expérience hybride unique : [1]\n Niveau de THC : Élevé, allant de 26% à 38%.\n Arôme et Goût : Saveurs de baies sucrées et fruitées avec une expiration skunky (épicée et citronnée).\n Effets Principaux : Euphorie instantanée, stimulation cérébrale, soulagement du stress et des maux de tête. Le high s'accompagne souvent d'un léger picotement physique qui se termine par une douce somnolence.\n Recommandation Médicale : Utilisée par des patients pour gérer le stress, l'anxiété, la dépression, les migraines et le SSPT",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_7",
              name: "Troplimez 🌴🍋‍🟩",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTL.png",
              video: "VideoTL.mp4",
              description:
                "The Tropical Limez weed strain (often referred to as Troplimez) by Grounded Genetics is a premium hybrid highly praised for its explosive citrus flavor and potent, balanced effects. [1, 2]\n\n 🍋 Profil Aromatique et Goût\n Saveurs : Un mélange explosif de citron, de fruits tropicaux et de notes douces rappelant la limonade.\n Terpènes principaux : Limonène (donne le côté agrumes), myrcène (effets relaxants) et caryophyllène (touche épicée). [1]\n\n ⚡ Effets\n Sensation : Offre un effet à la fois énergisant et euphorisant (grâce au limonène), suivi d'une agréable détente corporelle sans assommer.\n Utilisation : Polyvalente, elle est idéale pour être consommée en journée tout en restant créatif ou en soirée pour se relaxer. [1, 2]\n\n 🌿 Culture\n Génétique : Créée par la banque américaine Grounded Genetics.\n Aspect : Les têtes sont denses, résineuses et visuellement magnifiques, typiques des variétés de cannabis modernes haut de gamme.",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_8",
              name: "Fantaz 🍊🥤",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "Le terme \"Fantaz\" (parfois \"Fanta\" ou \"Fantazy\") fait généralement référence à des variétés hybrides ou Sativa caractérisées par leurs arômes fruités et leurs taux de THC souvent très élevés. Trois des lignées les plus connues du marché se distinguent : \n\n Génétique : Hybride à dominance Indica ((Fantasy Melon x TMZ) x Blackberry Octane).\n Arôme/Saveur : Smoothie aux fruits rouges et au melon avec des notes épicées.\n\n Effets et Avis : Connue pour ses magnifiques têtes violettes. Le buzz commence par une vague euphorique avant de se transformer en une relaxation corporelle profonde sans clouer l'utilisateur au canapé. \n Très populaire pour ses niveaux de THC frôlant souvent les 28%.",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_9",
              name: "Prodigy 🌟🔥",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "La variété de cannabis Prodigy est un hybride à forte dominance sativa (environ 90 %) connu pour ses effets énergisants et créatifs. Les utilisateurs l'apprécient pour son high cérébral, ses saveurs citronnées et terreuses, et son taux élevé de THC, ce qui la rend idéale pour un regain de concentration ou d'énergie durant la journée. [1, 2]\n\n 🌿 Profil et Effets\n Génétique : Hybride à dominance sativa (90/10).\n Arôme & Goût : Un mélange d'agrumes, de diesel et de notes terreuses ou de pin.\n Taux de THC : Élevé (souvent autour de 25-28 %).\n Effets : Procure une sensation euphorique, élévatrice et stimulante. Elle est parfaite pour chasser le stress, vaincre la fatigue et stimuler la créativité ou les tâches nécessitant de la concentration. [1, 2]\n\n ⚠️ Précautions et Avis\n Effets secondaires : Comme beaucoup de sativas fortes, elle peut provoquer une sécheresse buccale ou oculaire. Les consommateurs sujets à l'anxiété devraient l'aborder avec modération en raison de sa puissance.\n Consensus : Très populaire auprès des consommateurs récréatifs et médicaux cherchant un coup de boost sans s'endormir. [1]",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_10",
              name: "Cheese x Zunami 🧀🌊",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "The Cheese x Zunami cross, officially released as Zkunk by Grounded Genetics, is a highly acclaimed hybrid that marries old-school UK skunk with modern, fruity dessert genetics. \n kleine knospe\n\n 🧬 Génétique\n Parentale : Exodus Cheese (phénotype Skunk #1 vieux de 30 ans) × Zunami (Zkittlez × [Gelato 41 x Sherb BX1]).\n Dominance : Hybride, bien que la plupart des phénotypes soient fortement dominés par les traits et la structure de l'Exodus Cheese. \n\n 🍃 Arômes et Goût\n L\'odeur est extrêmement piquante et terreuse, fidèle au profil aromatique classique du fromage \"Cheese\".\n Les gènes de la Zunami adoucissent la fumée, ajoutant des nuances crémeuses, sucrées et légèrement fruitées à l'expiration. kleine knospe +1\n\n  🧠 Effets\n Offre une montée euphorique et élévatrice qui équilibre la lourdeur physique et la relaxation.\n Très appréciée pour détendre le corps tout en gardant un esprit alerte, ce qui la rend utile pour soulager le stress ou stimuler l'humeur. House of Seeds +2\n\n 🌱 Culture\n Temps de floraison : 9 à 10 semaines.",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_11",
              name: "Emerz 💎🍃",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "L'EmergenZ (parfois appelée Emergen-C) est un hybride (souvent à dominance sativa) issu du croisement entre l'Orange Push Pop et la Sunset Sherbet. Elle est réputée pour ses puissantes saveurs d'agrumes, son taux de THC élevé—souvent entre 25 % et plus de 30 %—et ses effets énergisants. [1, 2, 3]\n\n 🍋 Profil et Arômes\n Goût et Odeur : Son profil de terpènes (dominé par le limonène et le caryophyllène) rappelle une orange fraîchement pressée ou le soda Orange Crush. On y détecte des notes crémeuses, de pamplemousse et parfois une légère touche de pin.\n Aspect : Les têtes sont souvent denses, de couleur vert émeraude, recouvertes d'une épaisse couche de trichomes dorés. [1, 2, 3, 4]\n\n ⚡ Effets et Utilisation\n Sensation : Connue pour un effet \"coup de boost\", elle procure rapidement une montée d'énergie cérébrale. Elle favorise la concentration, la créativité et l'humeur euphorique.\n Utilisation médicale : Très prisée pour combattre la fatigue, le stress et les symptômes de dépression.[1, 2, 4, 5]\n\n ⚖️ Avis de la Communauté\n Points forts : Les consommateurs apprécient particulièrement son goût sucré et onctueux, ainsi que sa capacité à stimuler la journée sans provoquer d'effet sédatif lourd. [1, 2, 3, 4]\n Mises en garde : En raison de son taux de THC extrême, les utilisateurs inexpérimentés devraient y aller doucement.",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_12",
              name: "Wilato 🍧🍦",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "The \"Wilato\" strain (often a regional variant or phonetic spelling of the popular Gelato-lineage) is an evenly balanced hybrid famous for its sweet dessert flavors, rapid cerebral euphoria, and soothing body relaxation. It is highly prized by both recreational and medical users for daytime stress relief and creative inspiration. [1, 2, 3, 4]\n\n Profil de la Variété (Strain Profile)\n Génétique : Hybride issu de la famille Gelato (souvent un croisement avec des génétiques comme Wilson ou Do-Si-Dos).\n Teneur en THC : Varie généralement entre 22 % et 29 %, offrant une puissance assez élevée.\n Dominance : Hybride équilibré (50% Indica / 50% Sativa). [1, 2, 3, 4, 5]\n\n Effets et Utilisations\n Effets mentaux : Un \"high\" euphorique qui arrive rapidement, stimulant la créativité et l'humeur.\n Effets physiques : Procure une profonde relaxation corporelle sans pour autant clouer au canapé (couch-lock).\n Usage médical : Souvent recommandée pour apaiser le stress chronique, l'anxiété et la dépression, ainsi que pour stimuler l'appétit. [1, 2, 3, 4, 5]\n\n Arômes et Saveurs\n Saveur : Sucrée et crémeuse avec de fortes notes de fruits des bois, d'agrumes et une légère touche terreuse en fin de bouche.\n Arôme : Un parfum de bonbon fruité mélangé à une douce fraîcheur florale.",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_13",
              name: "Alien Tarantula 👽🕷️",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "Alien Tarantula est une variété hybride rare créée par Obsoul33t Genetics, issue d'un croisement entre Alien Tech et Tarantula. Réputée pour ses effets puissants, cette souche offre une expérience cérébrale stimulante accompagnée d'un effet relaxant profond sur le corps, sans pour autant clouer au canapé. \n\n Profil et Effets\n Génétique : Hybride à dominance Indica/Sativa.\n Effets : Un « high » cérébral qui stimule la créativité, suivi d'une douce relaxation corporelle.\n Utilisation thérapeutique : Souvent recherchée par les consommateurs cherchant à apaiser le stress, l'anxiété et la dépression. \n\n Arômes et Saveurs\n Cette variété est très appréciée pour son profil terpénique unique : \n\n Nez : Un mélange piquant de diesel, de carburant, de terre et d'épices, adouci par des notes de miel.\n Goût : Des saveurs prononcées de terre et d'essence qui laissent un arrière-goût floral et mielleux très agréable en bouche.",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_14",
              name: "Blucci Lemon 🫐🍋",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductBL.png",
              video: "VideoBL.mp4",
              description:
                "Le \"Blucci Lemon\" (probablement lié à la célèbre Sour Blucci de Grounded Genetics ou à un croisement citronné) est un hybride prisé pour ses arômes complexes et ses effets équilibrés. \n House of Seeds +1\n\n Voici un aperçu de ses caractéristiques principales :\n Arômes et Goût : Un profil terpénique très audacieux qui combine des notes de carburant/diesel, de bonbon crémeux et des touches acidulées d'agrumes (citron). La fumée est douce, avec un arrière-goût floral. \n Effets : Un \"high\" cérébral stimulant qui favorise la créativité et la sociabilité, accompagné d'une douce relaxation physique qui réduit le stress sans provoquer de somnolence excessive. C'est une variété idéale pour une consommation en soirée lorsque l'on souhaite rester actif tout en se détendant.House of Seeds\n\n Taux de THC : Généralement très élevé, oscillant souvent entre 23% et 28%. Growlobby\n\n Génétique : Souvent issue de croisements impliquant le pollen de Blucci (qui tire elle-même ses origines de génétiques comme la Sunset Sherbet et la Zkittlez) pour garantir une production de résine abondante et des couleurs violettes/vertes spectaculaires.",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_15",
              name: "OZK x Zunami 🌪️🌊",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "L'OZK (souvent appelé OZ Kush) croisé avec la Zunami (Zkittlez x Gelato 41) donne naissance à un hybride moderne très puissant. Côté saveurs, vous pouvez vous attendre à un profil sucré, fruité et acidulé, mêlé à des notes terreuses et gazeuses typiques des variétés OG. \n Leafly +1\n\n Effets et Avis\n Effets : Cet hybride à dominance indica délivre un high équilibré. Il commence souvent par une euphorie cérébrale et stimulante, avant de glisser vers une relaxation physique profonde. Leafly +2\n\n Puissance : Le taux de THC est généralement élevé (souvent entre 22 % et 28 %). Leafly +1\n\n Usage thérapeutique : Les consommateurs médicaux l'apprécient pour aider à soulager le stress, l'anxiété, la dépression et les douleurs chroniques. Leafly +1\n\n Arômes et Goût\n Nez : Très complexe et puissant, il marie les arômes de bonbon tropical (\"Zkittlez\") à des touches épicées et terreuses (\"OG Kush\").\n Palais : À l'expiration, on perçoit souvent des notes de raisin, de pamplemousse et d'agrumes, le tout soutenu par une fumée épaisse et légèrement diesel..",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
            {
              id: "TN_16",
              name: "Pineapple cherry cookie 🍍🍒🍪",
              farm: "Trapnumberz 🎸",
              type: "Weed",
              image: "ProductTrap.jpg",
              video: "",
              description:
                "La Pineapple Cherry Cookies est un hybride à dominante indica issu du croisement entre des génétiques tropicales et des variétés de la famille \"Cookies\". Elle est très appréciée par les connaisseurs pour son profil aromatique fruité et ses effets à la fois relaxants et mentalement stimulants. \n Theory Wellness +1\n\n 🍍 Arômes et Goût\n Saveur : Des notes douces de cerise et de fruits tropicaux (comme l'ananas) se mêlent à un arrière-plan terreux classique des variétés Cookies. Theory Wellness +1\n\n Arôme : Un parfum gourmand qui rappelle les pâtisseries aux fruits. Les effluves de cerise et d'ananas sont généralement dominantes à l'ouverture du sachet. Theory Wellness +1\n\n 💨 Effets\n Niveau d'énergie : C'est une variété qui offre une belle euphorie cérébrale tout en évitant l'effet \"canapé\".\n Bien-être : Les utilisateurs rapportent une réduction significative du stress et de la fatigue quotidienne.\n Utilisation : Idéale pour les activités créatives, les sorties entre amis ou simplement pour se détendre en fin de journée sans s'endormir immédiatement..",
              tarifs: [
                { weight: "3.5g", price: 35.0 },
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 200.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 550.0 },
                { weight: "500g", price: 2500.0 },
                { weight: "1kg", price: 4500.0 },
              ],
            },
          ],
        },
      ],
    },

    // --- Catégorie 3: WPFF ---
    {
      id: "WPFF",
      name: " 💎 Wpff 💎",
      farm: "",
      type: "WPFF",
      quality: " 💎 Wpff 💎",
      image: "CategWpff.png",
      directToProducts: false,
      farms: [
        {
          id: "SPACEFARM",
          name: "🆂🅿🅰🅲🅴🅵🅰🆁🅼",
          image: "",
          badgeText: "WPFF",
          products: [
            {
              id: "SF_1",
              name: "🍇 Dulce de uva 45𝐔",
              farm: "🚀 Spacefarm",
              type: "WPFF",
              image: "Product45.png",
              video: "Video45.mov",
              description:
                "La variété Dulce de Uva (qui signifie « raisin doux » en espagnol) est un hybride à dominance indica (environ 60% indica / 40% sativa) issu du croisement entre la Grape Pie et la OG Kush. Elle est particulièrement réputée pour son profil aromatique intense de bonbon au raisin, sa belle production de résine et ses effets profondément relaxants. [1, 2]\n\n 🍇 Arômes et Saveurs\n Le nom de cette variété reflète parfaitement son goût. [1]\n Arôme : Un mélange sucré et fruité de raisins mûrs et de baies, avec des notes terreuses et épicées héritées de sa lignée OG Kush.\n Goût : Dès la première bouffée, vous remarquerez des notes douces de raisin, suivies d'une expiration crémeuse et biscuitée avec une finale épicée. [1, 2]\n\n ✨ Effets\n La Dulce de Uva offre un high parfaitement équilibré pour se détendre sans être totalement assommé. [1, 2]\n Montée : Elle commence par une douce sensation d'euphorie et de bonheur qui améliore l'humeur. [1, 2]\n Descente : Elle évolue rapidement vers une relaxation physique profonde, idéale pour apaiser les tensions musculaires et décompresser après une longue journée. [1]\n Usage médical : De nombreux utilisateurs l'apprécient pour aider à soulager le stress, l'anxiété, la dépression et les douleurs chroniques. [1, 2]",
              tarifs: [
                { weight: "1g", price: 35.0 },
                { weight: "5g", price: 150.0 },
                { weight: "10g", price: 270.0 },
              ],
            },
            {
              id: "SF_2",
              name: "🍓 Strawpicanna 90𝐔",
              farm: "🚀 Spacefarm",
              type: "WPFF",
              image: "Product90.png",
              video: "Video90.mov",
              description:
                "Strawpicanna (croisement entre Strawberry Banana et Tropicanna Cookies) est une variété hybride très réputée pour son profil terpénique fruité et ses effets énergisants. Elle offre une expérience gustative intense de fraises crémeuses et d'agrumes épicés, tout en procurant un effet cérébral euphorique, idéal pour socialiser ou rester créatif sans sombrer dans l'effet \"canapé\". [1, 2]\n\n 🧬 Généalogie et Profil\n Génétique : Hybride issu de Strawberry Banana (Strawnana) et de Tropicanna Cookies.\n\n Dominance : Hybride équilibré (Indica/Sativa). [1, 2, 3, 4, 5]\n\n 🌿 Arômes et Goût\n Saveur : Fidèle à son nom, elle propose un goût lourd de fruits rouges, principalement la fraise, combiné à des notes tropicales et une touche épicée. [1, 2]\n Terpènes principaux : Myrcène, Humulène, Limonène, Caryophyllène. [1, 2]\n Aspect : Les fleurs sont souvent allongées, d'un vert très foncé avec des reflets violets et une épaisse couche de résine brillante, ce qui en fait une excellente candidate pour les extractions. [1]\n\n ⚡ Effets et Utilisation\n Effets : Un \"high\" cérébral dynamique et enjoué. Les consommateurs décrivent un sentiment de bonheur pétillant, idéal pour les activités de jour ou les moments de socialisation. [1, 2]\n Utilisation thérapeutique : Très appréciée pour lutter contre le stress ou la fatigue, car elle stimule l'humeur sans provoquer de sédation. [1, 2].",
              tarifs: [
                { weight: "1g", price: 50.0 },
                { weight: "5g", price: 225.0 },
                { weight: "10g", price: 400.0 },
              ],
            },
          ],
        },
      ],
    },
  ];

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories";
  let currentCategoryId = null;
  let currentFarmId = null;
  let appliedPromo = null;
  let paymentMethod = "Espèce";

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    ACTUPLUG33: {
      type: "fixed",
      value: 10,
      appliesTo: "eligible",
    },
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");
  const filterContainer = document.querySelector(".filters");
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      for (const farm of category.farms) {
        const product = farm.products.find((p) => p.id === productId);
        if (product) {
          return product;
        }
      }
    }
    return undefined;
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    // Coupe toutes les vidéos instantanément au changement de page
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });

    pages.forEach((p) => p.classList.remove("active"));
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info");
    const contactNav = document.getElementById("nav-contact");

    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");

    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else {
      homeNav.classList.add("active");
    }
  }

  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune sous-catégorie disponible.</p>';
      return;
    }

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "sub-categories-container";

    farms.forEach((farm) => {
      const button = document.createElement("button");
      button.className = "sub-category-btn";
      button.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        button.style.opacity = "0.6";
        button.style.cursor = "not-allowed";
      }

      const productCount = farm.products.length;
      const badgeTextContent =
        productCount > 0
          ? `${productCount} produit${productCount > 1 ? "s" : ""}`
          : farm.badgeText || "";

      button.innerHTML = `
            <span>${farm.name}</span>
            ${badgeTextContent ? `<span class="sub-btn-badge">${badgeTextContent}</span>` : ""}
        `;
      buttonsContainer.appendChild(button);
    });

    productListContainer.appendChild(buttonsContainer);
  }

  function renderHomePage() {
    filterContainer.style.display = "flex";

    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();
    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "flex";
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";

      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
      backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid rgb(0 60 165);
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
      filterContainer.prepend(backButton);
    } else if (currentView === "products") {
      renderProductList(currentCategoryId);
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";

      // LIGNE AJOUTÉE ICI : On met les packs sur 1 colonne, le reste sur 2
      if (currentCategoryId === "PackPromo") {
        productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
      } else {
        productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
      }

      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${category.name}`;
      backButton.style.cssText = ` background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid rgb(0 60 165);
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
      filterContainer.prepend(backButton);
    }
  }

  function renderCategoryList() {
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.dataset.categoryId = category.id;

      card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
            `;
      productListContainer.appendChild(card);
    });
  }

  function renderProductList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    let allProducts = [];

    if (currentFarmId) {
      const selectedFarm = category.farms.find((f) => f.id === currentFarmId);
      if (selectedFarm) {
        allProducts = selectedFarm.products;
      }
      const backButton = document.createElement("button");
      backButton.className = "back-to-farms-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> Retour aux choix`;
      backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); border-bottom: 2px solid rgb(0 60 165); border-top: none; border-left: none; border-right: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;`;

      const existingBtn = filterContainer.querySelector(".back-to-farms-btn");
      if (!existingBtn) filterContainer.prepend(backButton);
    } else {
      allProducts = category.farms.flatMap((farm) => farm.products);
      // On ne met pas le bouton retour ici car il est géré dans renderHomePage
    }

    if (!allProducts || allProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    const filteredProducts = allProducts.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch = currentFarmId
        ? true
        : currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");

      if (product.type === "Promo") {
        card.className = "product-card promo-card";
        card.innerHTML = `
                <div class="info">
                    <div class="promo-icon">🎄</div>
                    <div class="name">${product.name}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      } else {
        card.className = "product-card product-item-card";
        card.dataset.productId = product.id;

        if (product.clickable === false) {
          card.classList.add("unclickable");
        }

        let flagHTML = product.flag
          ? `<span class="product-flag">${product.flag}</span>`
          : "";

        // LIGNE AJOUTÉE ICI : On affiche l'image QUE si elle n'est pas vide
        let imgHTML = product.image
          ? `<img src="${product.image}" alt="${product.name}">`
          : "";

        card.innerHTML = `
                ${imgHTML}
                <div class="info" style="${!product.image ? "" : ""}">
                    <div class="name" style="${!product.image ? "font-size: 1.2rem;" : ""}">${product.name} ${flagHTML}</div>
                    <div class="farm" style="${!product.image ? "font-size: 1rem; margin-bottom: 10px;" : ""}">${product.farm}</div>
                    <div class="price" style="${!product.image ? "" : ""}">${typeof product.tarifs[0].price === "number" ? product.tarifs[0].price.toFixed(2) + "€" : product.tarifs[0].price}</div>
                </div>
            `;
      }

      productListContainer.appendChild(card);
    });
  }

  // --- FONCTION MODIFIÉE POUR GÉRER LE PRIX TEXTE, LES CARROUSELS ET LE BADGE PROMO ---
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    let mediaHTML = "";

    if (product.videos && product.videos.length > 0) {
      const slides = product.videos
        .map(
          (vid, index) => `
            <div class="carousel-slide">
                <video class="product-video" src="${vid}" controls playsinline ${index === 0 && product.image ? `poster="${product.image}"` : ""}></video>
            </div>
        `,
        )
        .join("");

      mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les vidéos</div>
        `;
    } else if (product.images && product.images.length > 0) {
      const slides = product.images
        .map(
          (img) => `
            <div class="carousel-slide">
                <img src="${img}" alt="${product.name}">
            </div>
        `,
        )
        .join("");

      mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les photos</div>
        `;
    } else if (product.video || product.image) {
      mediaHTML = `
            <video class="product-video" poster="${product.image || ""}" src="${product.video || ""}" ${product.video ? "controls playsinline" : ""}></video>
        `;
    }

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    const weightStyle = product.useSmallText
      ? "font-size: 1.8vh; line-height: 1.2;"
      : "";

    let tarifsHTML = product.tarifs
      .map((tarif) => {
        const isPriceNumber = typeof tarif.price === "number";
        const priceDisplay = isPriceNumber
          ? tarif.price.toFixed(2) + "€"
          : tarif.price;

        const actionButton = isPriceNumber
          ? `<button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                     <svg width="20" height="20"><use href="#icon-cart"/></svg>
                   </button>`
          : `<button class="contact-btn-small" style="background: none; border: 1px solid black; width: 5vh; border-radius: 20px;" onclick="window.Telegram.WebApp.openLink('https://t.me/THEGAZCOMMANDE')">
                     <svg width="20" height="20" style="fill:white"><use href="#icon-telegram"/></svg>
                   </button>`;

        // --- NOUVEAUTÉ : GÉNÉRATION DU BADGE PROMO ---
        let promoBadge = "";
        // On vérifie si le type du produit contient le mot "FROZEN" (ça marche pour "FRESH FROZEN", "FROZEN SIFT", "💎 Fresh Frozen 💎", etc.)
        /*   if (product.type && product.type.toUpperCase().includes('FROZEN')) {
                promoBadge = `<div style="position: absolute; top: -8px; left: -8px; background: linear-gradient(45deg, #ff0000, #ff8c00); color: white; padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 900; font-family: 'Impact', sans-serif; border: 1px solid white; box-shadow: 0px 0px 8px rgba(255,0,0,0.8); transform: rotate(-5deg); z-index: 10;">🔥 PROMO</div>`;
            } */

        // On ajoute "position: relative;" sur la div principale pour que le badge se positionne bien par rapport à la case
        return `
        <div class="tarif-item" style="position: relative;">
            ${promoBadge}
            <div class="box-tarif">
                <div class="tarif-wieght" style="${weightStyle}">${tarif.weight}</div>
                <div class="tarif-price">${priceDisplay}</div>
            </div>
            ${actionButton}
        </div>
        `;
      })
      .join("");

    let descriptionHTML = "";
    if (product.description) {
      descriptionHTML = `<div class="product-description">${product.description}</div>`;
    }

    const pageContent = document.querySelector("#page-product .page-content");

    pageContent.innerHTML = `
        ${mediaHTML}
        <div id="product-details-content" class="product-details">
            <div class="name" style="text-align: center;">${product.name}</div>
            <div class="farm" style="text-align: center;">${product.farm}</div>
            ${descriptionHTML} 
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">
                ${tarifsHTML}
            </div>
        </div>
    `;

    showPage("page-product");
  }

  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <img src="${item.image || ""}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];

      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }

      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        // 'fixed'
        discount = promo.value;
      }
    }

    if (discount > subTotal) {
      discount = subTotal;
    }

    const totalPrice = subTotal - discount;

    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
             <div class="cart-item">
                <img src="${item.image || ""}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `,
      )
      .join("");

    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    const summaryContainer = document.getElementById("confirmation-summary");
    let summaryHTML = `
            <div class="summary-line">
                <span>Sous-total:</span>
                <span>${subTotal.toFixed(2)}€</span>
            </div>
        `;
    if (discount > 0) {
      summaryHTML += `
            <div class="summary-line discount">
                <span>Réduction:</span>
                <span>-${discount.toFixed(2)}€</span>
            </div>
            `;
    }
    summaryHTML += `
            <div class="summary-line total">
                <span>💰 Total final:</span>
                <span>${totalPrice.toFixed(2)}€</span>
            </div>
        `;
    summaryContainer.innerHTML = summaryHTML;

    showPage("page-confirmation");
  }

  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");

    linksContainer.innerHTML = contactLinks
      .map((link) => {
        const marginBtm = link.showQR ? "0" : "15px";
        const radiusBtm = link.showQR ? "0" : "15px";

        let btnHtml = `
            <a href="${link.url}" class="contact-link ${link.className}" target="_blank" style="margin-bottom: ${marginBtm}; border-bottom-left-radius: ${radiusBtm}; border-bottom-right-radius: ${radiusBtm};">
                <svg width="24" height="24"><use href="${link.icon}"/></svg>
                <span>${link.text}</span>
            </a>`;

        if (link.showQR) {
          // Logique conditionnelle : utilise ton image perso SI elle existe, sinon utilise l'API
          const imgSrc = link.qrImage
            ? link.qrImage
            : `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link.url)}&format=svg`;

          return `
                <div class="qr-link-wrapper" style="margin-bottom: 15px; border-radius: 15px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                    ${btnHtml}
                    <div class="qr-section" style="display: flex; flex-direction: column; align-items: center; padding: 15px; background: rgba(0,0,0,0.2);">
                        <div style="background: white; padding: 8px; border-radius: 12px; display: inline-block;">
                            <img src="${imgSrc}" alt="QR Code" style="width: 100px; height: 100px; display: block;">
                        </div>
                        <span style="color: var(--hint-color); font-size: 0.75rem; margin-top: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Scannez pour rejoindre</span>
                    </div>
                </div>
                `;
        }

        return btnHtml;
      })
      .join("");
  }

  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    const allNestedProducts = appData.flatMap((category) =>
      category.farms.flatMap((farm) => farm.products),
    );

    const categoryQualities = appData.map((c) => c.quality);
    const qualities = ["all", ...new Set(categoryQualities)];

    const productFarms = allNestedProducts.map((p) => p.farm);
    const farms = ["all", ...new Set(productFarms)];

    qualityFilter.innerHTML = qualities
      .map(
        (q) => `<option value="${q}">${q === "all" ? "CATEGORIE" : q}</option>`,
      )
      .join("");
    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "LES FARM" : farm}</option>`,
      )
      .join("");

    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  function addToCart(productId, weight, price) {
    const cartItemId = `${productId}-${weight}`;
    const existingItem = cart.find((item) => item.id === cartItemId);

    const product = getProductById(productId);

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    } else {
      cart.push({
        id: cartItemId,
        productId: productId,
        name: product.name,
        image: product.image,
        weight: weight,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }

  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  function formatOrderMessage() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      let discountableAmount = 0;
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleString("fr-FR", { month: "long" })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;

    let message = "NOUVELLE COMMANDE\n\n";
    message += "====================\n";
    message += "RESUME:\n";
    message += `- ${totalItems} article${totalItems > 1 ? "s" : ""} commande\n`;
    message += `- Méthode de paiement: ${paymentMethod}\n`;
    message += "====================\n";
    message += `DETAIL DES ARTICLES:\n`;

    cart.forEach((item) => {
      message += `\n- ${item.id}`;
      message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
      message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
      message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
    });

    message += `\n\n====================\n`;
    message += `\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
    if (discount > 0) {
      message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`;
    }
    message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
    message += " \n-LIVRAISON: A convenir\n";
    message += " \n-CONTACT: Merci de confirmer cette commande\n";
    message += ` \n-Commande passee le: ${formattedDate}\n`;
    return message;
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });

  document.body.addEventListener("click", function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false;
      return;
    }

    // LIGNE MODIFIÉE ICI : Le cœur de l'interception des packs
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      currentCategoryId = categoryCard.dataset.categoryId;

      const category = appData.find((c) => c.id === currentCategoryId);

      if (!category) {
        console.error("Catégorie introuvable :", currentCategoryId);
        return;
      }

      if (category.directToProducts === true) {
        currentView = "products";
        currentFarmId = null;
      } else {
        currentView = "farms";
        currentFarmId = null;
      }

      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      accordionItem.classList.toggle("active");
      return;
    }

    const subCategoryBtn = target.closest(".sub-category-btn");

    if (subCategoryBtn) {
      if (subCategoryBtn.style.cursor === "not-allowed") return;

      currentView = "products";
      currentFarmId = subCategoryBtn.dataset.farmId;

      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase();

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null;
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation();
    }

    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation();
    }

    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");
      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
      );
    }

    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    if (target.closest(".close-button")) {
      showPage("page-home");
    }

    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
    }

    if (target.closest(".back-button")) {
      showPage("page-home");
    }

    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    if (target.closest("#checkout-button")) {
      renderConfirmation();
    }

    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    if (target.closest("#confirm-order-button")) {
      // Remplace l'ancien identifiant par le bon compte de réception
      const targetUsername = "TERPSCOMMANDE33";

      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");
      const encodedMessage = encodeURIComponent(message);
      const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;
      tg.openLink(telegramUrl);
    }
  });

  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage();
      updateCartCount();
      showPage("page-home");
    }, 1500);
  }

  init();
});
