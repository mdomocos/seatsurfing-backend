import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
    de: {
        translation: {
            "privacy": "Datenschutz",
            "imprint": "Impressum",
            "mangageOrgHeadline": "Organisation verwalten.",
            "emailAddress": "E-Mail Adresse",
            "errorInvalidEmail": "Ungültige E-Mail-Adresse.",
            "errorNoAuthProviders": "Für diesen Nutzer stehen keine Anmelde-Möglichkeiten zur Verfügung.",
            "errorInvalidPassword": "Ungültiges Kennwort.",
            "password": "Kennwort",
            "signin": "Anmelden",
            "back": "Zurück",
            "signinAsAt": "Als {{user}} an {{org}} anmelden:",
            "users": "Benutzer",
            "areas": "Bereiche",
            "spaces": "Plätze",
            "bookings": "Buchungen",
            "today": "Heute",
            "yesterday": "Gestern",
            "thisWeek": "Diese Woche",
            "lastWeek": "Letzte Woche",
            "utilization": "Auslastung",
            "loadingHint": "Daten werden geladen...",
            "search": "Suchen",
            "logout": "Abmelden",
            "dashboard": "Dashboard",
            "settings": "Einstellungen",
            "errorValidateDomain": "Fehler beim Bestätigen der Domain {{domain}}: Bitte stellen Sie sicher, dass der notwendige DNS-TXT-Record korrekt eingerichtet ist.",
            "errorAddDomain": "Fehler beim Hinzufügen der Domain.",
            "confirmDeleteDomain": "Soll die Domain {{domain}} wirklich entfernt werden?",
            "errorDeleteDomain": "Fehler beim Entfernen der Domain.",
            "confirmDeleteOrg": "Diese Organisation unwiederbringlich löschen?",
            "confirmDeleteOrg2": "Sind Sie ganz sicher? Wenn Sie diese Organisation löschen, werden alle Buchungen, Bereiche, Plätze und Benutzer unwiederbringlich gelöscht. Eine Wiederherstellung ist nicht möglich.",
            "errorTryAgain": "Etwas ist schief gegangen. Bitte probieren Sie es später erneut.",
            "yourDomainPlaceholder": "ihre-domain.de",
            "verifyDomain": "Domain bestätigen",
            "verifyDomainHowto": "Um die Domain {{domain}} zu bestätigen, fügen Sie im DNS-Server der Domain bitte folgenden TXT-Record hinzu:",
            "verifyNow": "Jetzt bestätigen",
            "domain": "Domain",
            "verify": "Bestätigen",
            "remove": "Entfernen",
            "noRecords": "Keine Datensätze gefunden.",
            "name": "Name",
            "type": "Typ",
            "subscriptionActive": "Sie haben ein aktives Abonnement von Seatsurfing mit bis zu {{num}} Benutzern.",
            "subscriptionManage": "Abonnement verwalten",
            "subscriptionInactive": "Sie verwenden aktuell die kostenfreie Version von Seatsurfing mit bis zu {{num}} Benutzern.",
            "deleteOrg": "Organisation löschen",
            "entryUpdated": "Eintrag wurde aktualisiert.",
            "errorSave": "Fehler beim Speichern, bitte kontrollieren Sie die Angaben.",
            "save": "Speichern",
            "org": "Organisation",
            "organizations": "Organisationen",
            "primaryContact": "Primärkontakt",
            "allowAnyUser": "Login aller authentifzierbaren Benutzer erlauben",
            "maxBookingsPerUser": "Buchungen je Nutzer",
            "maxDaysInAdvance": "Max. Buchungs-Vorlauf",
            "days": "Tage",
            "dailyBasisBooking": "Nur tageweise Buchung erlauben",
            "showNames": "Namen der Buchenden anzeigen (Datenschutz beachten!)",
            "allowBookingNonExistUsers": "Buchungen für nicht existierende Benutzer zulassen (Erstellen beim Buchen)",
            "maxBookingDurationHours": "Max. Buchungs-Dauer",
            "hours": "Stunden",
            "domains": "Domains",
            "addDomain": "Domain hinzufügen",
            "subscription": "Abonnement",
            "authProviders": "Auth Providers",
            "add": "Neu",
            "dangerZone": "Kritische Funktionen",
            "noResults": "Keine Ergebnisse.",
            "searchForX": "Suche nach '{{keyword}}'",
            "errorLoginFailed": "Login fehlgeschlagen.",
            "loginFailedDescription": "Möglicherweise ist das verwendete Konto nicht für diese Organisation freigeschaltet.",
            "map": "Karte",
            "admin": "Administrator",
            "yes": "Ja",
            "loginMeans": "Anmeldung",
            "username": "Benutzername",
            "enter": "Beginn",
            "leave": "Ende",
            "confirmDeleteUser": "Benutzer löschen?",
            "editUser": "Benutzer bearbeiten",
            "editOrg": "Organisation bearbeiten",
            "errorSubscriptionLimit": "Sie haben die maximale Anzahl von Benutzern erreicht.",
            "delete": "Löschen",
            "passwordLogin": "Login mit Kennwort",
            "passwordChange": "Kennwort ändern",
            "confirmDeleteAuthProvider": "Provider löschen? Logins über diesen Provider sind dann nicht mehr möglich!",
            "editAuthProvider": "Auth Provider bearbeiten",
            "pleaseSelect": "bitte auswählen",
            "automatic": "automatisch",
            "templates": "Vorlagen",
            "userinfoEmailField": "Userinfo E-Mail-Feld",
            "mapFileTypes": "PNG, JPEG oder GIF",
            "confirmDeleteArea": "Bereich löschen? Alle Plätze und Buchungen gehen verloren!",
            "unnamed": "Unbenannt",
            "confirmDiscard": "Es gibt ungespeicherte Änderungen! Wirklich verwerfen?",
            "editArea": "Bereich bearbeiten",
            "duplicate": "Duplizieren",
            "deleteSpace": "Platz löschen",
            "addPlace": "Platz hinzufügen",
            "floorplan": "Raumplan",
            "confluenceServerSharedSecret": "Confluence Shared Secret",
            "confluenceAnonymous": "Anonyme Confluence-Benutzer zulassen (nur zu Demo-Zwecken)",
            "description": "Beschreibung",
            "orgId": "Instanz ID",
            "featureCurrentlyUnavailable": "Diese Funktion steht aktuell nicht zur Verfügung.",
            "orgSignupSuccess": "Es kann losgehen! Deine Seatsurfing-Organisation ist eingerichtet.",
            "orgSignupGoToLogin": "Zum Admin-Interface",
            "orgSignupFailed": "Das hat leider nicht geklappt! Möglicherweise ist Deine Registrierung bereits abgelaufen.",
            "firstname": "Vorname",
            "lastname": "Nachname",
            "country": "Land",
            "language": "Sprache",
            "maxConcurrentBookings": "Max. Buchungen",
            "defaultTimezone": "Standard-Zeitzone",
            "timezone": "Zeitzone",
            "default": "Standard",
            "role": "Rolle",
            "roleUser": "Benutzer",
            "roleSpaceAdmin": "Raumplan-Administrator",
            "roleOrgAdmin": "Organisations-Administrator",
            "user": "Benutzer",
            "area": "Bereich",
            "space": "Platz",
            "download": "Herunterladen",
            "analysis": "Auswertung",
            "all": "Alle",
            "confirmCancelBooking": "Buchung stornieren?",
            "bookingui": "Buchungsseite",
            "updateAvailable": "Bitte aktualisiere Seatsurfing auf die neuste Version {{version}}.",
        }
    },
    en: {
        translation: {
            "privacy": "Privacy",
            "imprint": "Imprint",
            "mangageOrgHeadline": "Manage organization.",
            "emailAddress": "Email address",
            "errorInvalidEmail": "Invalid email address.",
            "errorNoAuthProviders": "No authentication providers available for this user.",
            "errorInvalidPassword": "Invalid password.",
            "password": "Password",
            "signin": "Sign in",
            "back": "Back",
            "signinAsAt": "Sign is as {{user}} at {{org}}:",
            "users": "Users",
            "areas": "Areas",
            "spaces": "Spaces",
            "bookings": "Bookings",
            "today": "Today",
            "yesterday": "Yesterday",
            "thisWeek": "This week",
            "lastWeek": "Last week",
            "utilization": "Utilization",
            "loadingHint": "Loading data...",
            "search": "Search",
            "logout": "Log out",
            "dashboard": "Dashboard",
            "settings": "Settings",
            "errorValidateDomain": "Error verifying domain {{domain}}: Please ensure that you've set up the DNS TXT record correctly.",
            "errorAddDomain": "Error adding the domain.",
            "confirmDeleteDomain": "Really remove domain {{domain}}?",
            "errorDeleteDomain": "Errpr removing the domain.",
            "confirmDeleteOrg": "Really delete this organization permanently?",
            "confirmDeleteOrg2": "Are you REALLY sure? If you delete this organization, all bookings, areas, spaces and users will be deleted irretrievably. No recovery will be possible.",
            "errorTryAgain": "Something went wrong. Please try again later.",
            "yourDomainPlaceholder": "your-domain.com",
            "verifyDomain": "Verify domain",
            "verifyDomainHowto": "To verify domain {{domain}}, please add the following TXT record to your DNS server:",
            "verifyNow": "Verify now",
            "domain": "Domain",
            "verify": "Verify",
            "remove": "Remove",
            "noRecords": "No records found.",
            "name": "Name",
            "type": "Type",
            "subscriptionActive": "You have an active Seatsurfing subscription with up to {{num}} users.",
            "subscriptionManage": "Manage subscription",
            "subscriptionInactive": "You're using Seatsurfing's free version with up to {{num}} users.",
            "deleteOrg": "Delete organization",
            "entryUpdated": "Entry updated.",
            "errorSave": "Error while saving, please check your input.",
            "save": "Save",
            "org": "Organization",
            "organizations": "Organizations",
            "primaryContact": "Primary contact",
            "allowAnyUser": "Allow login of all authenticatable users",
            "maxBookingsPerUser": "Max. bookings per user",
            "maxDaysInAdvance": "Max. days in advance",
            "days": "days",
            "dailyBasisBooking": "Allow bookings on a daily basis only",
            "showNames": "Show bookers' names (mind the privacy!)",
            "allowBookingNonExistUsers": "Allow bookings for non-existing users (create on booking)",
            "maxBookingDurationHours": "Max. booking duration",
            "hours": "hours",
            "domains": "Domains",
            "addDomain": "Add domain",
            "subscription": "Subscription",
            "authProviders": "Auth Providers",
            "add": "Add",
            "dangerZone": "Danger zone",
            "noResults": "No results.",
            "searchForX": "Search for '{{keyword}}'",
            "errorLoginFailed": "Login failed.",
            "loginFailedDescription": "Possibly your account is not activated in this organization.",
            "map": "Map",
            "admin": "Administrator",
            "yes": "Yes",
            "loginMeans": "Login",
            "username": "Username",
            "enter": "Enter",
            "leave": "Leave",
            "confirmDeleteUser": "Delete user?",
            "editUser": "Edit user",
            "editOrg": "Edit organization",
            "errorSubscriptionLimit": "You've reached the maximum number of users.",
            "delete": "Delete",
            "passwordLogin": "Password login",
            "passwordChange": "Change password",
            "confirmDeleteAuthProvider": "Delete Auth Provider? Logins using this provider will not be possible anymore!",
            "editAuthProvider": "Edit Auth Provider",
            "pleaseSelect": "please choose",
            "automatic": "automatic",
            "templates": "Templates",
            "userinfoEmailField": "Userinfo Email field",
            "mapFileTypes": "PNG, JPEG or GIF",
            "confirmDeleteArea": "Delete area? All spaces and bookings will be lost!",
            "unnamed": "Unnamed",
            "confirmDiscard": "Discard unsaved changed?",
            "editArea": "Edit area",
            "duplicate": "Duplicate",
            "deleteSpace": "Delete space",
            "addSpace": "Add space",
            "floorplan": "Floorplan",
            "confluenceServerSharedSecret": "Confluence Shared Secret",
            "confluenceAnonymous": "Allow anonymous Confluence users (for demonstration purposes only)",
            "description": "Description",
            "orgId": "Instance ID",
            "featureCurrentlyUnavailable": "This feature is currently unavailable.",
            "orgSignupSuccess": "You're ready to go! Your Seatsurfing organisation has been set up.",
            "orgSignupGoToLogin": "Continue to the admin panel",
            "orgSignupFailed": "That didn't work as expected! Maybe your registration has timed out.",
            "firstname": "Firstname",
            "lastname": "Lastname",
            "country": "Country",
            "language": "Language",
            "maxConcurrentBookings": "Max. bookings",
            "defaultTimezone": "Default time zone",
            "timezone": "Time zone",
            "default": "Default",
            "role": "Role",
            "roleUser": "User",
            "roleSpaceAdmin": "Floor plan administrator",
            "roleOrgAdmin": "Organisation administrator",
            "user": "User",
            "area": "Area",
            "space": "Space",
            "download": "Download",
            "analysis": "Analysis",
            "all": "All",
            "confirmCancelBooking": "Cancel booking?",
            "bookingui": "Booking Site",
            "updateAvailable": "Please update Seatsurfing to the latest version {{version}}.",
        }
    }
};

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    fallbackLng: "en",
    keySeparator: false
});

export default i18n;
