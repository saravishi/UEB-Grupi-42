## Car Marketplace - UEB-GRUPI-42-1
Ky projekt është një platformë moderne për blerjen dhe shitjen e makinave, i ndërtuar si pjesë e lëndës së Teknologjive Web. Projekti përfshin një version statik (HTML/CSS/JS) dhe një version të avancuar të ndërtuar me React.

## Struktura e Projektit
Projekti është i ndarë në dy pjesë kryesore:

Versioni Web Klasik: Ndërtuar me HTML5, CSS3 (Grid & Flexbox) dhe JavaScript të pastër.

Versioni React: Një version modern i ndërtuar me React.js dhe Tailwind CSS.

## Dosjet Kryesore:
index.html: Faqja kryesore me prezantimin e ofertave.

products.html: Listimi i makinave me sistem filtrimi.

services.html: Detajet mbi shërbimet dhe çmimore.

contact.html: Formë kontakti me validim në anën e klientit.

/css: Stilimi i detajuar dhe animacionet.

/js: Logjika e filtrimit dhe validimi i formave.

/react-version: Aplikacioni i plotë në React.

# Teknologjitë e Përdorura
Front-end: HTML5, CSS3, JavaScript (ES6+).

Frameworks: React.js, Tailwind CSS (në versionin React).

Libraritë: Animacione me CSS dhe validim me JS.

## Si ta ekzekutoni projektin
Versioni Standard
Thjesht hapni skedarin index.html në çdo shfletues (browser).

Versioni React
Për të nisur versionin React, ndiqni këto hapa:

Navigoni te dosja: cd react-version

Instaloni varësitë: npm install

Nisni projektin: npm run dev

## Veçoritë (Features)
Responsive Design: Faqja përshtatet në të gjitha pajisjet (Mobile, Tablet, Desktop).

Sistemi i Filtrave: Kërkimi i makinave sipas llojit, çmimit ose markës.

Validimi i Formave: Siguron që të dhënat e kontaktit të jenë të sakta përpara dërgimit.

Interactive UI: Përdorimi i React Components për një eksperiencë më të shpejtë përdoruesi.

## Ndarja e punëve
| Anëtari | Detyra |
| :--- | :--- |
| **Sara Vishi** | Team Lead, React |
| **Emri 2** | Developer, HTML |
| **Emri 3** | Developer, CSS dhe JavaScript |

## Struktura e projektit
UEB-GRUPL-42-1/
│
├── 📁 css/ # CSS për projektin kryesor
│ └── style.css # Të gjitha stilet (Grid, Flexbox, Animacione)
│
├── 📁 js/ # JavaScript files
│ ├── main.js # Funksionaliteti kryesor
│ └── validation.js # Validimi i formës së kontaktit
│
├── 📁 images/ # Fotot dhe assets
│ ├── car1.jpg, car2.jpg, ... # Fotot e makinave
│ └── logo.png # Logo e kompanisë
│
├── 📁 react-version/ # PROJEKTI REACT (i veçantë)
│ ├── 📁 src/
│ │ ├── components/ # Komponentët React
│ │ ├── pages/ # Faqet
│ │ └── App.jsx Aplikacioni kryesor
│ ├── package.json # Dependencies
│ └── tailwind.config.js # Konfigurimi i Tailwind CSS
│
├── 📄 index.html # 🏠 Faqja Kryesore
├── 📄 products.html # 🚗 Të gjitha Makinat (me filtra)
├── 📄 services.html # 🛠️ Shërbimet dhe çmimet
├── 📄 contact.html # 📞 Kontakt (me formë validuese)
├── 📄 about.html # ℹ️ Rreth Nesh
│
├── 📄 .gitignore # Skedarët që nuk ngarkohen në Git
├── 📄 README.md # 📖 Ky dokument
└── 📄 package.json # Vetëm për react-version/
