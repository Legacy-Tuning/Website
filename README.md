# Legacy Tuning — VW PD TDI

Mørk-modus React/Vite-side for Legacy Tuning. Fokuserer på VW T5 2.5 TDI 275 hk / 600 Nm egenbygger-guide. JSON-drevet innhold og klar for GitHub Pages.

## Stack
- React 18 + Vite
- TypeScript
- React Router (HashRouter for GitHub Pages)
- JSON-drevet innhold i `src/data`

## Utvikling
```bash
npm install
npm run dev
```

## Bygg
```bash
npm run build
npm run preview
```

## Deploy til GitHub Pages
To alternativer:

1) NPM script (gh-pages):
```bash
npm run deploy
```
Dette bygger og pusher `dist/` til `gh-pages` branch. Aktiver GitHub Pages i repo-innstillinger, kilde: `gh-pages` branch.

2) GitHub Actions (anbefalt):
- Push til `main` vil bygge og deploye automatisk via `.github/workflows/deploy.yml`.

Vite er konfigurert med `base: './'` slik at assets fungerer i underkataloger.

## Ruter
- `/` Hjem
- `/t5-byggeguide`
- `/deler`
- `/mapping`
- `/verktøy`
- `/lovlig`
- `/kontakt`

## Logo & Favicon
- Inline SVG-logo i `src/components/Logo.tsx`
- Favicon i `public/favicon.svg`

## Data
- `src/data/parts.json`
- `src/data/benefits.json`
- `src/data/testimonials.json`
- `src/data/guide.json`
- `src/data/maps.json`

## Kartplassholdere og ECU-spesifikke filer
- På `/mapping` kan du lime inn ECU-ID og få to kartplassholdere: Trygg (230/500) og Full Send (275/600).
- Når du sender ECU-ID til oss, legger vi inn versjonsspesifikke .bin-filer slik:
  1. Opprett katalog: `public/maps/<ECU-ID>/`
  2. Legg inn filer: `trygg.bin` og `fullsend.bin`
  3. Oppdater `src/data/maps.json`:
     ```json
     {
       "<ECU-ID>": {
         "trygg": "/maps/<ECU-ID>/trygg.bin",
         "fullsend": "/maps/<ECU-ID>/fullsend.bin"
       }
     }
     ```
  4. Build og deploy. UI vil automatisk vise nedlastingsknapper for matchende ECU-ID.

## Kartforespørsel
Bruk knappen "Kopier forespørsel" på `/mapping` for å sende oss ECU-ID og detaljer. Når vi har ECU-ID, legger vi inn .bin-filer som beskrevet over.