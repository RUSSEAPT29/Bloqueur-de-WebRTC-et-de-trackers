🚀 Fonctionnalités
✅ Bloque WebRTC → Empêcher la fuite de ton adresse IP réelle .
✅ Bloquer les scripts de tracking → Supprime les trackers de Google, Facebook, Twitter, Amazon, Bing, etc.
✅ Désactivez les référents HTTP → Cache l'origine de vos requêtes web pour éviter le suivi.
✅ Correction du bug d'affichage YouTube → Plus de carré noir ou d'espace vide après le blocage des pubs.
✅ Désactivez les pixels espions invisibles → Bloquez les balises et iframe de tracking .
✅ Optimisé pour la performance → Aucun ralentissement du navigateur .

📥 Installation
1️⃣ Installateur Tampermonkey

Chrome
Firefox
Bord
[Brave/Opera] → Compatible avec l'extension Chrome
2️⃣ Ajouter le script Privacy Shield

Ouvre Tampermonkey → Créer un nouveau script
Copier-colle le code du script (voir privacy-shield.user.js)
Sauvegarde et activation du script
🔧 Configuration Avancée (Facultatif)
Si vous voulez désactiver certaines protections , modifiez ces parties du script :

Désactiver le blocage WebRTC → Commenter la sectionRTCPeerConnection
Autoriser un tracker spécifique → Supprimer son domaine de la listetrackerDomains
Changer la configuration anti-empreinte → Modifier navigator.plugins, navigator.languages, etc.
🛠️ Dépendances
Ce script utilise :

Tampermonkey pour exécuter les modifications.
GM_addStyle (si disponible) pour ajouter des règles CSS sans casser l'affichage.
📜 Source du code
Le script est disponible dans le fichier privacy-shield.user.js.

📝 Journal des modifications
🆕 v3.0 (correction de bug)

🔧 Correction du bug d'affichage YouTube (plus de carré noir).
🚀 Optimisation du blocage WebRTC (encore plus efficace).
🛡️ Amélioration du blocage des pixels de tracking invisibles .
⚡ Meilleure compatibilité avec les navigateurs (Chrome, Firefox, Edge, Brave) .
📢 Soutien et contributions
Si vous trouvez un bug ou souhaitez améliorer le script, ouvre un problème ou fais une pull request sur GitHub .

🚀 Protège ta vie privée et navigation anonymement ! 🔥
