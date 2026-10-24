# PICTORESCU by ART JUNKIE — Starter v0.1

Starter tehnic pentru un proiect **independent** Next.js + MongoDB, cu homepage, design system, pagini publice, autentificare administrator și CMS de bază **read-only**.

## Ce funcționează acum
- Homepage responsive și navigare în limba română.
- Pagini Galerie, Artiști, Înrămări, Shop și Devino artist.
- Galeria citește exclusiv lucrări aprobate, publicate și disponibile din MongoDB (fără fotografii până la integrarea media).
- Login administrator cu NextAuth Credentials și hash bcrypt.
- /admin protejat server-side, dashboard cu statistici MongoDB, liste de artiști/lucrări, afișare politică comercială.
- Script pentru indexuri MongoDB și setări inițiale.

## Ce NU este implementat
Conturi artiști, formulare de înscriere, aprobări, încărcare imagini, CRUD CMS, coș, checkout, plăți, decontări, livrări, facturare, configurator de rame, upload Cloudinary, politici juridice. **Nu lansați vânzări reale pe această versiune.**

## Pornire locală
1. Instalați Node.js 20+.
2. `npm install`
3. Copiați `.env.example` în `.env.local`.
4. Configurați `MONGODB_URI`, `MONGODB_DB`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `ADMIN_EMAIL`.
5. Generați hash pentru parolă: `npm run hash-password -- "o-parola-lunga-si-unica"` și copiați rezultatul în `ADMIN_PASSWORD_HASH` din `.env.local`.
6. `npm run seed` (citește `.env.local` prin Node.js 20+).
7. `npm run dev` și deschideți `http://localhost:3000`.
8. CMS: `http://localhost:3000/login`.

## GitHub
Creați un repository privat `pictorescu-platform`, încărcați conținutul acestui folder (nu arhiva în interiorul repo-ului) și verificați că `.env.local` nu este inclus. Apoi conectați repository-ul în Vercel.

## Vercel
- Framework: Next.js; Build: `npm run build`.
- Adăugați variabilele de mediu pentru fiecare environment. În production, `NEXTAUTH_URL=https://pictorescu.ro` doar după ce domeniul este configurat; până atunci utilizați URL-ul deploymentului.
- MongoDB Atlas: configurați accesul de rețea și utilizatorul cu privilegii minime. Nu includeți secrete în `NEXT_PUBLIC_*`.
- Folosiți un mediu staging separat înainte de a conecta domeniul public.

## Observații de securitate
Login-ul inițial este pentru **un singur administrator**, nu pentru utilizare multi-admin în producție. Înainte de lansarea publică a CMS: MFA, rate limiting distribuit pentru login, jurnal de audit, administrare utilizatori, backup testat, politici de retenție și protecție suplimentară pentru endpointuri. Hash-ul și secretul nu se comit în Git.

## Arhitectură următoare
Module propuse: auth, artists, artworks, moderation, catalog, inventory, orders, payments, shipping, settlements, framing, cms. Nu există încă implementare funcțională a acestor fluxuri.
