// assets/js/main.js

// ============================
// Smooth scroll for nav links
// ============================

(function () {
  const navButtons = document.querySelectorAll("[data-scroll-target]");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-scroll-target");
      if (!targetId) return;
      const el = document.getElementById(targetId);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

// ============================
// Multilingual content
// ============================

const SECURoCON_TRANSLATIONS = {
  en: {
    "brand.subtitle": "Remote Home Digital Protection",

    "nav.home": "Home",
    "nav.services": "Services",
    "nav.packages": "Packages",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",

    "hero.badge": "Remote-only | Secure your digital home",
    "hero.title": "Elite remote protection for your digital home.",
    "hero.subtitle":
      "We secure your accounts, devices, router and smart home – remotely, discreetly and guided step by step.",
    "hero.primaryCta": "Book remote protection",
    "hero.secondaryCta": "View packages & pricing",
    "hero.trust":
      "Remote-only service for Germany, Austria, Switzerland & EU.",
    "hero.shield": "Live remote protection call",
    "hero.item1": "Secure Google, WhatsApp, Facebook, Instagram.",
    "hero.item2": "Encrypt laptop (BitLocker/FileVault).",
    "hero.item3": "Harden router & isolate IoT devices.",
    "hero.item4": "Set up YubiKey for strong 2FA.",

    "problem.title": "Your home network is more exposed than you think.",
    "problem.subtitle":
      "Most households run 6–12 connected devices, weak passwords and unprotected accounts – a perfect target for attackers.",
    "problem.cards.devices.title": "Too many devices, zero overview",
    "problem.cards.devices.body":
      "Smartphones, laptops, tablets, smart TVs, consoles and IoT gadgets all sit on the same home Wi-Fi – often without segmentation or monitoring.",
    "problem.cards.accounts.title": "Accounts without real protection",
    "problem.cards.accounts.body":
      "Google, WhatsApp, Facebook and Instagram logins are reused across services, with weak 2FA or no hardware keys at all.",
    "problem.cards.router.title": "Router & IoT misconfigured",
    "problem.cards.router.body":
      "Default router settings, open ports, guest networks off and insecure IoT devices create invisible entry points into your home.",

    "solution.title":
      "SECURoCON protects your digital life – remotely and systematically.",
    "solution.subtitle":
      "We join a secure remote session, you click, we guide – and together we harden every critical point in your digital home.",
    "solution.items.accounts.title": "Account protection",
    "solution.items.accounts.body":
      "Google, Gmail, Photos, Contacts, WhatsApp, Facebook, Instagram – with strong passwords and secure 2FA.",
    "solution.items.laptop.title": "Laptop & data safety",
    "solution.items.laptop.body":
      "BitLocker/FileVault encryption, login hardening and basic endpoint hygiene for your primary work and family devices.",
    "solution.items.router.title": "Router & Wi-Fi hardening",
    "solution.items.router.body":
      "Secure router setup, guest networks for IoT, safer Wi-Fi keys and reduced attack surface.",
    "solution.items.family.title": "Family & parental controls",
    "solution.items.family.body":
      "Safer accounts and devices for children, basic content controls and clear rules for digital safety at home.",

    "process.title": "Remote protection in 5 simple steps.",
    "process.subtitle":
      "No technician in your living room – everything happens over a secure video call, with you in full control.",
    "process.steps.1.title": "Book a remote session",
    "process.steps.1.body":
      "You pick a package and time slot. We confirm and send you a secure video call link and preparation checklist.",
    "process.steps.2.title": "Join the live video call",
    "process.steps.2.body":
      "We meet via encrypted video call. You stay on your own devices – we never take full control.",
    "process.steps.3.title": "Click, we guide.",
    "process.steps.3.body":
      "You click through settings while we explain and verify every security change together.",
    "process.steps.4.title": "YubiKey & 2FA rollout",
    "process.steps.4.body":
      "You order YubiKeys online. We configure them for your critical accounts during the session.",
    "process.steps.5.title": "Router & IoT hardening",
    "process.steps.5.body":
      "We secure your router, activate guest networks for IoT devices and verify that your home is significantly harder to attack.",

    "packages.title": "Packages & pricing",
    "packages.subtitle": "Four transparent remote packages.",
    "packages.basic.badge": "Starter protection",
    "packages.basic.name": "Remote Basic",
    "packages.basic.price": "59 €",
    "packages.basic.desc": "Google + mobile basic protection.",
    "packages.basic.item1": "Google account security check.",
    "packages.basic.item2": "Basic 2FA setup on main device.",
    "packages.basic.item3": "Security hygiene checklist.",

    "packages.standard.badge": "Most booked",
    "packages.standard.name": "Remote Standard",
    "packages.standard.price": "149 €",
    "packages.standard.desc":
      "Google + WhatsApp + Meta. YubiKey setup if you already own the keys.",
    "packages.standard.item1": "Full Google account hardening.",
    "packages.standard.item2": "WhatsApp and Meta account protection.",
    "packages.standard.item3":
      "YubiKey integration for your key accounts (keys provided by client).",

    "packages.family.badge": "For families",
    "packages.family.name": "Remote Family",
    "packages.family.price": "249 €",
    "packages.family.desc":
      "Up to 4 persons + 10 devices. Includes YubiKey setup if keys are available.",
    "packages.family.item1": "Account protection for up to 4 people.",
    "packages.family.item2": "Up to 10 devices covered.",
    "packages.family.item3":
      "YubiKey configuration for family accounts (keys provided by client).",

    "packages.premium.badge": "Maximum protection",
    "packages.premium.name": "Remote Premium",
    "packages.premium.price": "329 €",
    "packages.premium.desc":
      "Everything + router hardening + parental controls + yearly review. Full YubiKey rollout if keys are available.",
    "packages.premium.item1": "Full home digital protection.",
    "packages.premium.item2": "Router and IoT segmentation.",
    "packages.premium.item3":
      "Yearly remote follow-up review and YubiKey check.",

    "packages.cta": "Request this package",
    "packages.note":
      "Hardware keys (e.g. YubiKey 5 NFC) are not included in the price. You normally order them yourself; on request we can purchase and ship keys for you (+60 € per key plus shipping).",

    "contact.title": "Ready to secure your digital home?",
    "contact.subtitle":
      "Send us a short message with your situation, preferred package and time window. We will get back with a proposed slot.",
    "contact.region":
      "Remote-only service · Germany · Austria · Switzerland · EU",
    "contact.whatsapp": "WhatsApp – request remote protection",
    "contact.email": "contact@securocon.example",

    "footer.tagline": "Remote Home Digital Protection",
    "footer.link.home": "Home",
    "footer.link.services": "Services",
    "footer.link.packages": "Packages",
    "footer.link.faq": "FAQ",
    "footer.link.contact": "Contact",
    "footer.copyright":
      "© SECURoCON – Remote Home Digital Protection",
    "footer.remoteOnly": "Remote-only · No on-site visits"
  },

  de: {
    "brand.subtitle": "Digitale Heimsicherheit aus der Ferne",

    "nav.home": "Start",
    "nav.services": "Leistungen",
    "nav.packages": "Pakete",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",

    "hero.badge": "Nur remote | Schützen Sie Ihr digitales Zuhause",
    "hero.title": "Premium-Remote-Schutz für Ihr digitales Zuhause.",
    "hero.subtitle":
      "Wir sichern Ihre Konten, Geräte, den Router und das Smart Home – remote, diskret und Schritt für Schritt erklärt.",
    "hero.primaryCta": "Remote-Schutz buchen",
    "hero.secondaryCta": "Pakete & Preise ansehen",
    "hero.trust":
      "Remote-Service für Deutschland, Österreich, Schweiz & EU.",
    "hero.shield": "Live-Remote-Schutz-Call",
    "hero.item1": "Schutz für Google, WhatsApp, Facebook, Instagram.",
    "hero.item2": "Laptop-Verschlüsselung (BitLocker/FileVault).",
    "hero.item3": "Router-Hardening & Trennung von IoT-Geräten.",
    "hero.item4": "YubiKey-Einrichtung für starke Zwei-Faktor-Anmeldung.",

    "problem.title":
      "Ihr Heimnetz ist stärker gefährdet, als Sie denken.",
    "problem.subtitle":
      "In den meisten Haushalten laufen 6–12 Geräte, schwache Passwörter und ungeschützte Konten – ein ideales Ziel für Angreifer.",
    "problem.cards.devices.title":
      "Zu viele Geräte, kein Überblick",
    "problem.cards.devices.body":
      "Smartphones, Laptops, Tablets, Smart-TVs, Konsolen und IoT-Geräte hängen alle im gleichen WLAN – meist ohne Segmentierung oder Überwachung.",
    "problem.cards.accounts.title":
      "Konten ohne echten Schutz",
    "problem.cards.accounts.body":
      "Logins für Google, WhatsApp, Facebook und Instagram werden wiederverwendet, mit schwacher oder ganz ohne Zwei-Faktor-Absicherung.",
    "problem.cards.router.title": "Router & IoT falsch konfiguriert",
    "problem.cards.router.body":
      "Standard-Routereinstellungen, offene Ports, inaktive Gastnetze und unsichere IoT-Geräte öffnen unsichtbare Türen in Ihr Zuhause.",

    "solution.title":
      "SECURoCON schützt Ihr digitales Leben – remote und strukturiert.",
    "solution.subtitle":
      "Wir verbinden uns in einer sicheren Remote-Session, Sie klicken, wir führen – und gemeinsam härten wir alle kritischen Punkte in Ihrem digitalen Zuhause.",
    "solution.items.accounts.title": "Kontoschutz",
    "solution.items.accounts.body":
      "Google, Gmail, Fotos, Kontakte, WhatsApp, Facebook, Instagram – mit starken Passwörtern und sicherer Zwei-Faktor-Anmeldung.",
    "solution.items.laptop.title": "Laptop- & Datensicherheit",
    "solution.items.laptop.body":
      "BitLocker/FileVault-Verschlüsselung, sichere Anmeldungen und grundlegende Sicherheits-Hygiene für Ihre wichtigsten Geräte.",
    "solution.items.router.title": "Router- & WLAN-Hardening",
    "solution.items.router.body":
      "Sichere Routerkonfiguration, Gastnetzwerke für IoT-Geräte, stärkere WLAN-Schlüssel und weniger Angriffsfläche.",
    "solution.items.family.title": "Familie & Kinderschutz",
    "solution.items.family.body":
      "Sichere Konten und Geräte für Kinder, einfache Inhaltsfilter und klare Regeln für digitale Sicherheit in der Familie.",

    "process.title": "Remote-Schutz in 5 einfachen Schritten.",
    "process.subtitle":
      "Kein Techniker im Wohnzimmer – alles läuft über einen sicheren Video-Call, Sie behalten jederzeit die Kontrolle.",
    "process.steps.1.title": "Remote-Termin buchen",
    "process.steps.1.body":
      "Sie wählen ein Paket und ein Zeitfenster. Wir bestätigen und senden einen sicheren Video-Link plus kurze Vorbereitungsliste.",
    "process.steps.2.title": "Am Live-Video-Call teilnehmen",
    "process.steps.2.body":
      "Wir treffen uns per verschlüsseltem Video-Call. Sie arbeiten an Ihren eigenen Geräten – wir übernehmen keinen Vollzugriff.",
    "process.steps.3.title": "Sie klicken, wir führen.",
    "process.steps.3.body":
      "Sie klicken durch die Einstellungen, wir erklären jeden Schritt und kontrollieren gemeinsam die Sicherheitsänderungen.",
    "process.steps.4.title": "YubiKey & Zwei-Faktor-Rollout",
    "process.steps.4.body":
      "Sie bestellen YubiKeys online. Wir binden sie während der Session an Ihre wichtigsten Konten an.",
    "process.steps.5.title": "Router- & IoT-Hardening",
    "process.steps.5.body":
      "Wir sichern Ihren Router, aktivieren Gastnetze für IoT-Geräte und prüfen, dass Ihr Zuhause deutlich schwerer anzugreifen ist.",

    "packages.title": "Pakete & Preise",
    "packages.subtitle": "Vier transparente Remote-Pakete.",
    "packages.basic.badge": "Einstiegsschutz",
    "packages.basic.name": "Remote Basic",
    "packages.basic.price": "59 €",
    "packages.basic.desc": "Basis-Schutz für Google & Smartphone.",
    "packages.basic.item1": "Sicherheitscheck für das Google-Konto.",
    "packages.basic.item2": "Einfache Zwei-Faktor-Anmeldung am Hauptgerät.",
    "packages.basic.item3": "Checkliste für digitale Sicherheits-Hygiene.",

    "packages.standard.badge": "Am meisten gebucht",
    "packages.standard.name": "Remote Standard",
    "packages.standard.price": "149 €",
    "packages.standard.desc":
      "Google + WhatsApp + Meta. YubiKey-Einrichtung, wenn die Schlüssel bereits vorhanden sind.",
    "packages.standard.item1": "Umfassende Härtung des Google-Kontos.",
    "packages.standard.item2": "Schutz für WhatsApp- und Meta-Konten.",
    "packages.standard.item3":
      "Einbindung von YubiKey für zentrale Konten (Schlüssel werden vom Kunden gestellt).",

    "packages.family.badge": "Für Familien",
    "packages.family.name": "Remote Family",
    "packages.family.price": "249 €",
    "packages.family.desc":
      "Bis zu 4 Personen + 10 Geräte. YubiKey-Einrichtung inklusive, sofern Schlüssel vorhanden sind.",
    "packages.family.item1":
      "Kontoschutz für bis zu 4 Familienmitglieder.",
    "packages.family.item2": "Abdeckung von bis zu 10 Geräten.",
    "packages.family.item3":
      "YubiKey-Konfiguration für Familienkonten (Schlüssel werden vom Kunden gestellt).",

    "packages.premium.badge": "Maximaler Schutz",
    "packages.premium.name": "Remote Premium",
    "packages.premium.price": "329 €",
    "packages.premium.desc":
      "Alles inklusive + Router-Hardening + Kinderschutz + jährlicher Check. Vollständiger YubiKey-Rollout, sofern Schlüssel vorhanden sind.",
    "packages.premium.item1":
      "Vollständiger Schutz für das digitale Zuhause.",
    "packages.premium.item2":
      "Segmentierung von Router und IoT-Geräten.",
    "packages.premium.item3":
      "Jährlicher Remote-Check inklusive YubiKey-Überprüfung.",

    "packages.cta": "Dieses Paket anfragen",
    "packages.note":
      "Hardware-Schlüssel (z. B. YubiKey 5 NFC) sind nicht im Paketpreis enthalten. In der Regel bestellen Sie diese selbst; auf Wunsch können wir die Schlüssel für Sie bestellen und zusenden (+60 € pro Schlüssel zzgl. Versand).",

    "contact.title": "Bereit, Ihr digitales Zuhause zu schützen?",
    "contact.subtitle":
      "Schreiben Sie uns kurz Ihre Situation, Ihr Wunschpaket und ein Zeitfenster. Wir melden uns mit einem Terminvorschlag.",
    "contact.region":
      "Remote-Service · Deutschland · Österreich · Schweiz · EU",
    "contact.whatsapp": "WhatsApp – Remote-Schutz anfragen",
    "contact.email": "contact@securocon.example",

    "footer.tagline": "Digitale Heimsicherheit aus der Ferne",
    "footer.link.home": "Start",
    "footer.link.services": "Leistungen",
    "footer.link.packages": "Pakete",
    "footer.link.faq": "FAQ",
    "footer.link.contact": "Kontakt",
    "footer.copyright":
      "© SECURoCON – Remote Home Digital Protection",
    "footer.remoteOnly":
      "Nur remote · Keine Vor-Ort-Einsätze"
  },

  hr: {
    "brand.subtitle": "Udaljena zaštita digitalnog doma",

    "nav.home": "Početna",
    "nav.services": "Usluge",
    "nav.packages": "Paketi",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",

    "hero.badge": "Samo remote | Zaštitite svoj digitalni dom",
    "hero.title": "Vrhunska udaljena zaštita za vaš digitalni dom.",
    "hero.subtitle":
      "Štitimo vaše račune, uređaje, ruter i pametni dom – na daljinu, diskretno i kroz jasne korake.",
    "hero.primaryCta": "Zakaži remote zaštitu",
    "hero.secondaryCta": "Pogledaj pakete i cijene",
    "hero.trust":
      "Remote usluga za Njemačku, Austriju, Švicarsku i EU.",
    "hero.shield": "Live poziv za udaljenu zaštitu",
    "hero.item1":
      "Zaštita Google, WhatsApp, Facebook i Instagram računa.",
    "hero.item2": "Enkripcija laptopa (BitLocker/FileVault).",
    "hero.item3":
      "Zaštita rutera i odvajanje IoT uređaja u gost mrežu.",
    "hero.item4":
      "Postavljanje YubiKey ključa za snažnu dvofaktorsku prijavu.",

    "problem.title":
      "Vaša kućna mreža je izloženija nego što mislite.",
    "problem.subtitle":
      "Većina kućanstava ima 6–12 povezanih uređaja, slabe lozinke i nezaštićene račune – savršena meta za napadače.",
    "problem.cards.devices.title":
      "Previše uređaja, nikakav pregled",
    "problem.cards.devices.body":
      "Pametni telefoni, laptopi, tableti, pametni TV-i, konzole i IoT uređaji dijele isti Wi-Fi – obično bez segmentacije i nadzora.",
    "problem.cards.accounts.title":
      "Računi bez prave zaštite",
    "problem.cards.accounts.body":
      "Prijave za Google, WhatsApp, Facebook i Instagram ponavljaju se na više mjesta, s slabom ili nikakvom dvofaktorskom zaštitom.",
    "problem.cards.router.title": "Ruter i IoT krivo podešeni",
    "problem.cards.router.body":
      "Zadane postavke rutera, otvoreni portovi, isključene gost mreže i nesigurni IoT uređaji otvaraju skrivene ulaze u vaš dom.",

    "solution.title":
      "SECURoCON štiti vaš digitalni život – udaljeno i sustavno.",
    "solution.subtitle":
      "Spajamo se u sigurnoj remote sesiji, vi klikate, mi vodimo – i zajedno učvršćujemo svaku kritičnu točku digitalnog doma.",
    "solution.items.accounts.title": "Zaštita računa",
    "solution.items.accounts.body":
      "Google, Gmail, Fotografije, Kontakti, WhatsApp, Facebook, Instagram – sa snažnim lozinkama i sigurnom dvofaktorskom prijavom.",
    "solution.items.laptop.title": "Sigurnost laptopa i podataka",
    "solution.items.laptop.body":
      "BitLocker/FileVault enkripcija, sigurna prijava i osnovna sigurnosna higijena za glavne kućne i radne uređaje.",
    "solution.items.router.title": "Zaštita rutera i Wi-Fi mreže",
    "solution.items.router.body":
      "Sigurna konfiguracija rutera, gost mreže za IoT uređaje, jače lozinke za Wi-Fi i manja površina napada.",
    "solution.items.family.title": "Obitelj i roditeljska kontrola",
    "solution.items.family.body":
      "Sigurniji računi i uređaji za djecu, osnovne roditeljske kontrole i jasna pravila za digitalnu sigurnost.",

    "process.title": "Remote zaštita u 5 jednostavnih koraka.",
    "process.subtitle":
      "Nema tehničara u dnevnom boravku – sve ide preko sigurnog video poziva, a vi cijelo vrijeme imate kontrolu.",
    "process.steps.1.title": "Dogovor termina",
    "process.steps.1.body":
      "Odaberete paket i vremenski termin. Mi potvrdimo i pošaljemo sigurni link za video poziv i kratku pripremnu listu.",
    "process.steps.2.title": "Spajanje na live video poziv",
    "process.steps.2.body":
      "Spajamo se putem šifriranog video poziva. Radite na vlastitim uređajima – mi ne preuzimamo potpuni pristup.",
    "process.steps.3.title": "Vi klikate, mi vodimo.",
    "process.steps.3.body":
      "Vi klikate kroz postavke, mi objašnjavamo i zajedno provjeravamo svaku sigurnosnu promjenu.",
    "process.steps.4.title": "YubiKey i dvofaktorska zaštita",
    "process.steps.4.body":
      "YubiKey ključeve naručujete online. Tijekom sesije ih povezujemo s vašim najvažnijim računima.",
    "process.steps.5.title": "Zaštita rutera i IoT uređaja",
    "process.steps.5.body":
      "Štitimo vaš ruter, aktiviramo gost mreže za IoT uređaje i provjeravamo da je dom značajno teže napasti.",

    "packages.title": "Paketi i cijene",
    "packages.subtitle": "Četiri jasna remote paketa.",
    "packages.basic.badge": "Osnovna zaštita",
    "packages.basic.name": "Remote Basic",
    "packages.basic.price": "59 €",
    "packages.basic.desc": "Osnovna zaštita Google računa i mobitela.",
    "packages.basic.item1": "Sigurnosna provjera Google računa.",
    "packages.basic.item2":
      "Osnovno postavljanje dvofaktorske prijave na glavnom uređaju.",
    "packages.basic.item3":
      "Kratka lista za osnovnu digitalnu sigurnosnu higijenu.",

    "packages.standard.badge": "Najčešći odabir",
    "packages.standard.name": "Remote Standard",
    "packages.standard.price": "149 €",
    "packages.standard.desc":
      "Google + WhatsApp + Meta. Postavljanje YubiKey ključeva ako ih već posjedujete.",
    "packages.standard.item1":
      "Detaljna zaštita i učvršćivanje Google računa.",
    "packages.standard.item2":
      "Zaštita WhatsApp i Meta (Facebook/Instagram) računa.",
    "packages.standard.item3":
      "Integracija YubiKey ključeva za ključne račune (ključeve osigurava klijent).",

    "packages.family.badge": "Za obitelji",
    "packages.family.name": "Remote Family",
    "packages.family.price": "249 €",
    "packages.family.desc":
      "Do 4 osobe i 10 uređaja. Uključuje postavljanje YubiKey ključeva ako su dostupni.",
    "packages.family.item1":
      "Zaštita računa za do 4 člana obitelji.",
    "packages.family.item2": "Obuhvaćeno do 10 uređaja.",
    "packages.family.item3":
      "Konfiguracija YubiKey ključeva za obiteljske račune (ključeve osigurava klijent).",

    "packages.premium.badge": "Maksimalna zaštita",
    "packages.premium.name": "Remote Premium",
    "packages.premium.price": "329 €",
    "packages.premium.desc":
      "Sve uključeno + zaštita rutera + roditeljska kontrola + godišnja revizija. Potpuni YubiKey rollout ako su ključevi dostupni.",
    "packages.premium.item1":
      "Potpuna zaštita digitalnog doma.",
    "packages.premium.item2":
      "Segmentacija rutera i IoT uređaja.",
    "packages.premium.item3":
      "Godišnja remote provjera postavki i YubiKey konfiguracije.",

    "packages.cta": "Zatraži ovaj paket",
    "packages.note":
      "Hardverski ključevi (npr. YubiKey 5 NFC) nisu uključeni u cijenu paketa. U pravilu ih klijent sam naručuje; na zahtjev ih možemo naručiti i poslati za vas (+60 € po ključu + poštarina).",

    "contact.title": "Spremni ste zaštititi svoj digitalni dom?",
    "contact.subtitle":
      "Pošaljite nam kratku poruku sa svojom situacijom, željenim paketom i terminom. Javimo se s prijedlogom termina.",
    "contact.region":
      "Remote usluga · Njemačka · Austrija · Švicarska · EU",
    "contact.whatsapp": "WhatsApp – zatraži remote zaštitu",
    "contact.email": "contact@securocon.example",

    "footer.tagline": "Udaljena zaštita digitalnog doma",
    "footer.link.home": "Početna",
    "footer.link.services": "Usluge",
    "footer.link.packages": "Paketi",
    "footer.link.faq": "FAQ",
    "footer.link.contact": "Kontakt",
    "footer.copyright":
      "© SECURoCON – Remote Home Digital Protection",
    "footer.remoteOnly":
      "Samo remote · Bez dolaska na lokaciju"
  }
};

// ============================
// FAQ – 8+ Q&A na tri jezika
// ============================

const SECURoCON_FAQ = [
  {
    id: "faq1",
    q: {
      en: "What exactly is remote home digital protection?",
      de: "Was genau ist digitaler Heimsicherheitsschutz per Remote?",
      hr: "Što točno znači udaljena zaštita digitalnog doma?"
    },
    a: {
      en: "We connect with you via secure video call and guide you step by step through the security settings on your own devices. We do not sell software or subscriptions. We work directly in your Google, WhatsApp, Meta accounts, router and devices to harden them against typical attacks.",
      de: "Wir verbinden uns per sicherem Video-Call mit Ihnen und führen Sie Schritt für Schritt durch die Sicherheitseinstellungen Ihrer eigenen Geräte. Wir verkaufen keine Software und keine Abos. Wir arbeiten direkt in Ihren Google-, WhatsApp-, Meta-Konten, am Router und an den Geräten, um sie gegen typische Angriffe zu härten.",
      hr: "Spajamo se s vama preko sigurnog video poziva i vodimo vas korak po korak kroz sigurnosne postavke na vašim uređajima. Ne prodajemo softver niti pretplate. Radimo direktno u vašim Google, WhatsApp, Meta računima, ruteru i uređajima kako bismo ih ojačali protiv tipičnih napada."
    }
  },
  {
    id: "faq2",
    q: {
      en: "Do you take full remote control of my computer?",
      de: "Übernehmen Sie die vollständige Fernsteuerung meines Computers?",
      hr: "Preuzimate li potpuni udaljeni pristup mom računalu?"
    },
    a: {
      en: "No. You stay in control at all times. You share your screen, we explain what to click and why. For sensitive steps you can temporarily stop screen sharing or type passwords without us seeing them.",
      de: "Nein. Sie behalten jederzeit die Kontrolle. Sie teilen Ihren Bildschirm, wir erklären, was Sie wo klicken und warum. Bei sensiblen Schritten können Sie die Bildschirmfreigabe kurz pausieren oder Passwörter eingeben, ohne dass wir diese sehen.",
      hr: "Ne. Vi ste cijelo vrijeme u potpunoj kontroli. Vi dijelite ekran, a mi objašnjavamo što i gdje treba kliknuti. Kod osjetljivih koraka možete privremeno zaustaviti dijeljenje ekrana ili upisati lozinke tako da ih mi ne vidimo."
    }
  },
  {
    id: "faq3",
    q: {
      en: "Which countries do you serve?",
      de: "In welchen Ländern bieten Sie die Dienstleistung an?",
      hr: "Za koje države nudite uslugu?"
    },
    a: {
      en: "We work fully remote and currently focus on Germany, Austria, Switzerland and other EU countries. As long as you have a stable Internet connection and can join a video call, we can help.",
      de: "Wir arbeiten vollständig remote und konzentrieren uns derzeit auf Deutschland, Österreich, die Schweiz und weitere EU-Länder. Solange Sie eine stabile Internetverbindung haben und an einem Video-Call teilnehmen können, können wir Sie unterstützen.",
      hr: "Radimo potpuno na daljinu i trenutno smo fokusirani na Njemačku, Austriju, Švicarsku i ostale države EU. Dok god imate stabilnu internetsku vezu i možete se spojiti na video poziv, možemo vam pomoći."
    }
  },
  {
    id: "faq4",
    q: {
      en: "Do you install antivirus software?",
      de: "Installieren Sie Antivirus-Software?",
      hr: "Instalirate li antivirusni softver?"
    },
    a: {
      en: "We primarily work with the tools you already have, for example Microsoft Defender on Windows or built-in protection on macOS. If we see a clear need for additional software, we explain options and let you decide which solution to buy or install.",
      de: "Wir arbeiten in erster Linie mit den Werkzeugen, die bereits vorhanden sind – zum Beispiel Microsoft Defender unter Windows oder eingebauter Schutz unter macOS. Nur wenn wir einen klaren Bedarf erkennen, besprechen wir zusätzliche Software und Sie entscheiden, was Sie kaufen oder installieren.",
      hr: "U pravilu radimo s alatima koje već imate, na primjer Microsoft Defender na Windowsu ili ugrađenu zaštitu na macOS-u. Ako vidimo da je dodatni softver stvarno potreban, objasnit ćemo opcije, a vi odlučujete što želite kupiti ili instalirati."
    }
  },
  {
    id: "faq5",
    q: {
      en: "What do I need to prepare before the session?",
      de: "Was sollte ich vor der Session vorbereiten?",
      hr: "Što trebam pripremiti prije sessiona?"
    },
    a: {
      en: "Ideally have your main devices ready (laptop, smartphone, possibly tablet), access to your router and a list of the most important accounts you want to protect. If you plan to use YubiKeys, order them in advance so we can configure them during the call.",
      de: "Idealerweise halten Sie Ihre Hauptgeräte bereit (Laptop, Smartphone, eventuell Tablet), Zugriff auf Ihren Router sowie eine Liste der wichtigsten Konten, die Sie schützen möchten. Wenn Sie YubiKeys einsetzen möchten, bestellen Sie diese möglichst vorher, damit wir sie während des Calls einrichten können.",
      hr: "Idealno je da pripremite glavne uređaje (laptop, mobitel, po potrebi tablet), pristup ruteru i popis najvažnijih računa koje želite zaštititi. Ako planirate koristiti YubiKey ključeve, naručite ih unaprijed kako bismo ih mogli postaviti tijekom poziva."
    }
  },
  {
    id: "faq6",
    q: {
      en: "How long does a typical session take?",
      de: "Wie lange dauert eine typische Session?",
      hr: "Koliko dugo traje jedna session?"
    },
    a: {
      en: "For the Basic package you should plan around 60–90 minutes. Standard and Family sessions usually take between 2 and 3 hours, depending on the number of devices and accounts. Premium protection is often split into two appointments.",
      de: "Für das Basic-Paket sollten Sie etwa 60–90 Minuten einplanen. Standard- und Family-Sessions dauern in der Regel 2 bis 3 Stunden – je nach Anzahl der Geräte und Konten. Beim Premium-Paket teilen wir die Arbeit häufig auf zwei Termine auf.",
      hr: "Za Basic paket obično je dovoljno 60–90 minuta. Standard i Family seanse najčešće traju između 2 i 3 sata, ovisno o broju uređaja i računa. Premium zaštita se često odradi u dva odvojena termina."
    }
  },
  {
    id: "faq7",
    q: {
      en: "Can you guarantee that I will never be hacked?",
      de: "Können Sie garantieren, dass ich nie gehackt werde?",
      hr: "Možete li garantirati da nikada neću biti hakiran?"
    },
    a: {
      en: "In cybersecurity there is no 100% guarantee. Our goal is to close the most common gaps in private households and make attacks much harder and less likely. We also explain simple habits you can use to keep your protection level high over time.",
      de: "In der IT-Sicherheit gibt es keine 100%-Garantie. Unser Ziel ist es, die typischen Lücken in Privathaushalten zu schließen und Angriffe deutlich schwerer und unwahrscheinlicher zu machen. Zusätzlich erklären wir einfache Gewohnheiten, mit denen Sie Ihr Schutzniveau langfristig hoch halten.",
      hr: "U kibernetičkoj sigurnosti ne postoji 100% garancija. Naš cilj je zatvoriti najčešće rupe u kućanstvima i napade učiniti puno težima i manje vjerojatnima. Uz to objašnjavamo jednostavne navike koje vam pomažu da dugoročno zadržite visoku razinu zaštite."
    }
  },
  {
    id: "faq8",
    q: {
      en: "What happens after the session is finished?",
      de: "Was passiert nach der abgeschlossenen Session?",
      hr: "Što se događa nakon završetka sessiona?"
    },
    a: {
      en: "You receive a short summary of the most important changes and recommendations for the next months. Premium packages also include a yearly remote review, where we check if anything should be updated or improved.",
      de: "Sie erhalten eine kurze Zusammenfassung der wichtigsten Änderungen und Empfehlungen für die nächsten Monate. Im Premium-Paket ist zusätzlich ein jährlicher Remote-Check enthalten, bei dem wir prüfen, ob etwas aktualisiert oder verbessert werden sollte.",
      hr: "Dobivate kratki sažetak najvažnijih promjena i preporuke za sljedeće mjesece. U Premium paketu je uključen i godišnji remote pregled gdje provjeravamo treba li nešto osvježiti ili dodatno poboljšati."
    }
  }
];

// ============================
// Render FAQ for current lang
// ============================

function renderFaq(lang) {
  const faqList = document.getElementById("faqList");
  if (!faqList) return;
  faqList.innerHTML = "";

  SECURoCON_FAQ.forEach((item) => {
    const wrapper = document.createElement("article");
    wrapper.className = "sc-faq-item";

    const q = document.createElement("button");
    q.type = "button";
    q.className = "sc-faq-question";
    q.textContent = item.q[lang] || item.q.en;

    const a = document.createElement("div");
    a.className = "sc-faq-answer";
    a.textContent = item.a[lang] || item.a.en;

    // simple accordion toggle
    q.addEventListener("click", () => {
      wrapper.classList.toggle("is-open");
    });

    wrapper.appendChild(q);
    wrapper.appendChild(a);
    faqList.appendChild(wrapper);
  });
}

// ============================
// Apply translations
// ============================

(function () {
  let currentLang = "de";
  const langButtons = document.querySelectorAll(".sc-lang-btn");

  function setActiveLangButton(lang) {
    langButtons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      btn.classList.toggle("is-active", btnLang === lang);
    });
  }

  function applyTranslations(lang) {
    currentLang = lang;
    const dict = SECURoCON_TRANSLATIONS[lang] || {};

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") {
        el.textContent = value;
      }
    });

    renderFaq(lang);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (!lang || lang === currentLang) return;
      applyTranslations(lang);
      localStorage.setItem("securocon-lang", lang);
      setActiveLangButton(lang);
    });
  });

  const storedLang = localStorage.getItem("securocon-lang");
  const initialLang = storedLang || "de";
  applyTranslations(initialLang);
  setActiveLangButton(initialLang);
})();
