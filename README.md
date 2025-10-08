# fund-stream

Landing page de génération de leads B2B pour des financements professionnels aux États-Unis.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
app/
├── components/          # Composants réutilisables
│   ├── Hero.tsx        # Section hero avec CTA
│   ├── ApplicationForm.tsx  # Formulaire multi-étapes (4 steps)
│   ├── HowItWorks.tsx  # Section "Comment ça marche"
│   ├── WhyFundStream.tsx    # Section bénéfices
│   ├── SocialProof.tsx # Témoignages et statistiques
│   ├── FAQ.tsx         # Questions fréquentes
│   ├── FinalCTA.tsx    # CTA final
│   └── Footer.tsx      # Footer avec liens légaux
├── thank-you/          # Page de remerciement
│   └── page.tsx
├── page.tsx            # Page principale
├── layout.tsx          # Layout racine
└── globals.css         # Styles globaux
```

## 🎨 Brand Kit

### Couleurs
- **Navy Blue**: `#1E3A5F` - Textes, header, footer
- **Teal**: `#00B8A9` - CTA, liens, accents
- **Light Gray**: `#F5F7FA` - Backgrounds
- **Medium Gray**: `#6B7280` - Textes secondaires

### Typographie
- **Headlines**: Poppins (SemiBold 600, Bold 700)
- **Body**: Inter (Regular 400, Medium 500, SemiBold 600)

## ✅ Conformité

Le site est conforme aux réglementations US :
- **CCPA** (California Consumer Privacy Act)
- **FCC Lead Generation Rules**
- **CFPB** (Consumer Financial Protection Bureau)

## 🔧 Technologies

- **Next.js 15** avec App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts** (Inter, Poppins)

## 📱 Responsive

Le site est optimisé pour tous les écrans :
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📝 Notes

- Pas de navigation, pas de menu (landing page pure)
- Un seul objectif: remplir le formulaire
- Modèle PPL (Pay-Per-Lead)
- Service 100% gratuit pour l'utilisateur final

---

© 2025 BPC Group. All rights reserved.
