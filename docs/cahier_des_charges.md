# Cahier des charges

## Suivi du quota horaire pour étudiants étrangers en France

Version 1.0, rédigé le 5 août 2026

---

## 1. Contexte et problème

Tout étudiant étranger non UE titulaire d'un titre de séjour ou VLS-TS mention étudiant a le droit de travailler jusqu'à 964 heures par an, soit environ 60% de la durée légale du travail en France. Dépasser ce plafond expose l'étudiant à un risque de refus de renouvellement de son titre de séjour, voire à une obligation de quitter le territoire dans les cas les plus graves.

Le problème n'est pas seulement le calcul, c'est le suivi dans la durée. Un étudiant qui cumule plusieurs jobs (restauration rapide, livraison, caisse, mission ponctuelle) avec des horaires irréguliers perd rapidement le fil de ses heures cumulées, et découvre souvent le dépassement trop tard, une fois l'infraction déjà commise.

Il existe aujourd'hui des calculateurs statiques et gratuits en ligne qui permettent d'estimer un scénario hypothétique, mais aucun outil trouvé ne permet de suivre dans la durée les heures réellement travaillées, avec historique, alertes et preuve exportable pour la préfecture.

Autre point de confusion identifié sur le terrain, y compris chez des professionnels du droit : certaines sources affirment que le compteur repart au 1er janvier de chaque année civile, d'autres affirment que la période de référence court sur 12 mois consécutifs à partir de la date de validation du titre de séjour. Le produit doit trancher cette ambiguïté de façon transparente pour l'utilisateur plutôt que de l'ignorer.

## 2. Objectif du produit

Donner à un étudiant étranger un compteur fiable, à jour en temps réel, de ses heures de travail consommées et restantes sur son quota annuel, avec des alertes préventives avant tout dépassement, et un document exportable utilisable comme preuve auprès de la préfecture au moment du renouvellement de titre de séjour.

## 3. Cible

Étudiants étrangers non UE inscrits dans l'enseignement supérieur en France, titulaires d'un VLS-TS ou d'une carte de séjour mention étudiant, qui cumulent un job à côté de leurs études (restauration, livraison, commerce, mission ponctuelle). Cible prioritaire : primo-arrivants, plus exposés au risque de mal calculer leur quota faute d'expérience du système.

## 4. Proposition de valeur et différenciation

Le calcul en lui-même n'est pas différenciant, il existe déjà gratuitement ailleurs sous forme d'outils statiques. La valeur du produit tient à trois éléments que les calculateurs gratuits ne proposent pas : la persistance des données dans le temps (saisie réelle des shifts, pas un scénario théorique), les alertes proactives avant d'accepter un nouveau shift, et l'export documentaire daté et structuré utilisable comme pièce de dossier administratif.

## 5. Périmètre fonctionnel du MVP

### 5.1 Authentification et profil
Création de compte par email. Saisie initiale de la date de validation du titre de séjour ou VLS-TS, information qui détermine le point de départ de la période de référence de 964 heures.

### 5.2 Choix explicite de la méthode de calcul
Au vu de l'ambiguïté identifiée entre calcul en année civile et calcul en 12 mois glissants depuis la date du titre, l'application doit présenter les deux méthodes à l'utilisateur, expliquer la source de la divergence, et le laisser choisir ou lui recommander une méthode par défaut prudente, avec une marge de sécurité intégrée au calcul.

### 5.3 Saisie des heures travaillées
Ajout manuel d'un shift avec date, durée, et employeur. Interface pensée pour une saisie rapide, quelques secondes, pas un formulaire lourd. Possibilité de saisir un shift récurrent hebdomadaire pour éviter la ressaisie manuelle chaque semaine.

### 5.4 Compteur en temps réel
Affichage immédiat des heures consommées, des heures restantes sur la période de référence en cours, et d'une projection si l'utilisateur maintient son rythme actuel jusqu'à la fin de la période.

### 5.5 Alertes préventives
Notification par email lorsque l'utilisateur approche d'un seuil critique, par exemple 80% et 95% du quota consommé. Simulateur intégré permettant de tester l'effet d'un nouveau shift proposé avant de l'accepter, sans encore le valider dans le compteur réel.

### 5.6 Export PDF, fonctionnalité payante à l'unité
Génération d'un document PDF daté, listant l'historique des heures saisies, le calcul du quota, la méthode de calcul retenue et sa justification légale, prêt à être joint à un dossier de renouvellement de titre de séjour.

### 5.7 Gestion de l'abonnement
Intégration Stripe pour l'abonnement mensuel et le paiement ponctuel de l'export. Gestion des échecs de paiement et des relances automatiques.

## 6. Hors périmètre du MVP

Pas de vérification automatique des heures auprès des employeurs, l'utilisateur reste seul responsable de l'exactitude de sa saisie. Pas de conseil juridique personnalisé, l'application affiche une information calculée à titre indicatif, pas un avis d'avocat. Pas d'application mobile native en version 1, une interface web responsive suffit. Pas de multi-titre de séjour ou de gestion de plusieurs profils par compte en version 1.

## 7. Modèle économique

Abonnement mensuel à 4,97 euros, donnant accès à la saisie illimitée, au compteur en temps réel et aux alertes. Export PDF facturé 10 euros à l'unité, achat ponctuel indépendant de l'abonnement, pensé pour être acheté au moment du renouvellement annuel du titre de séjour.

## 8. Exigences légales et de sécurité

Conformité RGPD obligatoire, les données traitées incluent des informations liées au statut migratoire de l'utilisateur, catégorie sensible. Chiffrement des données au repos et en transit. Mentions légales explicites précisant que l'outil fournit un calcul indicatif et ne constitue pas un conseil juridique, avec clause de non-responsabilité claire. Politique de suppression de compte et de données conforme au droit à l'effacement.

## 9. Stack technique retenue

Frontend en Next.js et React. Backend et logique de calcul en Python avec FastAPI. Base de données et authentification via Supabase, sur PostgreSQL managé. Paiement et abonnement récurrent via Stripe. Notifications et automatisations via n8n. Hébergement sur Vercel pour le frontend, infrastructure Supabase pour le backend de données.

## 10. Indicateurs de succès

Taux de conversion de l'inscription gratuite vers l'abonnement payant. Taux de rétention mensuel des abonnés. Nombre d'exports PDF vendus rapporté au nombre d'abonnés actifs, indicateur de la valeur perçue de la fonctionnalité documentaire. Taux d'ouverture des emails d'alerte, indicateur d'engagement réel avec la fonction préventive du produit.

## 11. Risques identifiés

Risque de substitution par les calculateurs gratuits existants si la valeur ajoutée du suivi dans la durée n'est pas assez visible dès l'onboarding. Risque juridique lié à la nature sensible des données traitées, à encadrer strictement dans les mentions légales et la politique de confidentialité. Risque de fiabilité perçue si la méthode de calcul choisie par défaut s'avère contestée lors d'un contrôle préfectoral, d'où la nécessité de documenter clairement la source légale de chaque méthode proposée.

## 12. Prochaines étapes

Validation du choix de méthode de calcul par défaut, idéalement confirmée par une source juridique fiable avant le développement. Cadrage des maquettes d'interface pour la saisie rapide de shift. Développement du MVP en priorisant saisie, compteur et alertes avant l'export PDF, fonctionnalité secondaire mais génératrice de revenu ponctuel.
