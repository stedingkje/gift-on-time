# Gift on Time

Gift on Time is een innovatieve applicatie die gebruikers helpt om belangrijke data's zoals verjaardagen en trouwdagen te onthouden en te vieren. Met geïntegreerde geschenksuggesties, evenementenbeheer en een sociaal aspect, streeft Gift on Time ernaar om het geven en ontvangen van geschenken naadloos en vreugdevol te maken.

## Inhoudsopgave

- [Inleiding](#inleiding)
- [Projectstructuur](#projectstructuur)
- [Tech Stack](#tech-stack)
- [Meer Info](#meer-info)
- [Vereisten](#vereisten)
- [Aan de slag](#aan-de-slag)
  - [Algemeen](#algemeen)
  - [Backend](#backend)
    - [Testen (Backend)](#testen-backend)
    - [Database Migraties (Backend)](#database-migraties-backend)
  - [Web Frontend](#web-frontend)
  - [Mobile App](#mobile-app)
- [Functies](#functies)
- [Contact](#contact)
- [Changelog](#changelog)
- [Licentie](#licentie)

## Inleiding

Gift on Time is ontworpen om het leven een beetje eenvoudiger en vreugdevoller te maken. In onze drukke levens vergeten we vaak belangrijke data's zoals verjaardagen of jubilea. Deze app helpt niet alleen bij het onthouden van deze data's, maar biedt ook suggesties voor geschenken via affiliate marketing, waardoor het kiezen van het perfecte cadeau een fluitje van een cent wordt.

## Functies

- **Datumherinneringen**: Nooit meer een belangrijke datum vergeten.
- **Geschenksuggesties**: Ontvang suggesties voor geschenken op basis van de gelegenheid.
- **Evenementenbeheer**: Maak evenementen aan en nodig mensen uit.
- **Wensenlijst**: Voorkom dubbele geschenken en zorg ervoor dat je krijgt wat je echt wilt.
- **Sociale Integratie**: Voeg vrienden toe en bekijk hun wensenlijst.
- **Loyaliteitssysteem**: Verdien punten en wissel ze in voor kortingen.

## Projectstructuur

- **backend**: Bevat de server-side code voor de API.
- **frontend/web**: Bevat de code voor het web-based beheerdersdashboard.
- **frontend/mobile**: Bevat de code voor de mobiele applicatie.

## Tech Stack

- **Backend**: Node.js, Express.js, TypeORM, PostgreSQL, TypeScript, Jest
- **Web Frontend**: Next.js, TailwindCSS, TypeScript, Jest
- **Mobile App**: React Native, TypeScript, Jest
- **Database**: PostgreSQL (via Docker voor lokale ontwikkeling)
- **Version Control**: Git
- **Authenticatie & Beveiliging**: Passport.js, JWT
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Version Control**: Git

## Vereisten

- Node.js en npm geïnstalleerd op je machine.
- Docker geïnstalleerd voor het draaien van de PostgreSQL-database lokaal.
- Git geïnstalleerd voor versiebeheer.

## Aan de slag

### Algemeen

1. Clone de repository: 

       git clone https://github.com/stedingkje/gift-on-time.git

### Backend

1. Navigeer naar de `backend` map: 

       cd backend

2. Installeer de dependencies: 

       npm install

3. Start de server: 

       npm start

#### Testen (Backend)

Om de tests uit te voeren, gebruik: 

       npm test

#### Database Migraties (Backend)

- Maak een nieuwe migratie: 

       npm run migrate:create

- Voer migraties uit: 

       npm run migrate:run

- Draai migraties terug: 

       npm run migrate:revert

### Web Frontend

1. Navigeer naar de `web` map: 

       cd frontend/web

2. Installeer de dependencies: 

       npm install

3. Start de app: 

       npm run dev

#### Testen (Web)

Om de tests uit te voeren, gebruik: 

    npm test

### Mobile App

1. Navigeer naar de `mobile` map: 

       cd frontend/mobile

2. Installeer de dependencies: 

       npm install

3. Start de app: 

       npm start

#### Testen (Mobile)

Om de tests uit te voeren, gebruik: 

    npm test

## Contact

Heb je vragen, feedback of suggesties? Neem gerust contact met ons op via [info@giftontime](mailto:info@giftontime).

## Changelog

**v0.0.1** - Opzet project.

## Licentie

Dit project is gelicenseerd onder de MIT Licentie.
