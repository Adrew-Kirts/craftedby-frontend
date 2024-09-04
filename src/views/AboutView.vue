<template>
  <div class="craftedby-intro bg-gray-100 p-6 rounded-lg mb-8 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Bienvenue sur CraftedBy</h1>
    <p class="text-lg">
      CraftedBy est une plateforme dédiée à la mise en valeur des créations artisanales uniques. Nous proposons une expérience utilisateur fluide et intuitive,
      permettant de découvrir facilement des produits authentiques réalisés par des artisans talentueux. Naviguez à travers différentes catégories,
      personnalisez vos achats, et plongez dans l’histoire de chaque création et de son créateur. Chez CraftedBy, chaque produit raconte une histoire.
    </p>
  </div>

  <div class="about p-8 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
    <h1 class="text-4xl font-bold mb-6">Politique de Confidentialité et RGPD</h1>
    <h2 class="text-2xl font-semibold mb-4">Traitement des Données Personnelles</h2>

    <p class="mb-6">
      Voici la liste des traitements nécessaires au fonctionnement de notre application ainsi que leur base légale :
    </p>

    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <!-- Table head -->
        <thead>
        <tr>
          <th>Finalité</th>
          <th>Données collectées</th>
          <th>Base légale</th>
          <th>Mention d’information</th>
        </tr>
        </thead>
        <tbody>
        <!-- Row 1 -->
        <tr>
          <td>Création de compte utilisateur</td>
          <td>Nom, prénom, email, mot de passe</td>
          <td>Consentement</td>
          <td>
            Nous collectons votre nom, prénom, adresse email et mot de passe pour la création de votre compte utilisateur sur notre site.
            Votre consentement à cette collecte est nécessaire pour nous permettre de vous fournir nos services. Vous avez le droit de retirer
            votre consentement à tout moment, mais cela pourrait affecter votre capacité à utiliser certains services.
          </td>
        </tr>
        <!-- Row 2 -->
        <tr>
          <td>Création de compte artisan</td>
          <td>Nom, prénom, email, mot de passe, informations professionnelles (ex : numéro SIRET)</td>
          <td>Consentement</td>
          <td>
            Pour créer un compte artisan, nous recueillons des informations telles que votre nom, prénom, adresse email, mot de passe et informations professionnelles.
            Ces données sont nécessaires pour valider votre statut d'artisan et vous permettre d'utiliser nos services. Votre consentement est requis pour cette collecte.
          </td>
        </tr>
        <!-- Row 3 -->
        <tr>
          <td>Laisser un commentaire</td>
          <td>Nom d'utilisateur, commentaire</td>
          <td>Intérêt légitime</td>
          <td>
            Vos commentaires sur nos produits ou services sont collectés sous votre nom d'utilisateur. Cette collecte se base sur notre intérêt légitime à recevoir
            des feedbacks pour améliorer nos offres.
          </td>
        </tr>
        <!-- Row 4 -->
        <tr>
          <td>Envoyer un message à un artisan</td>
          <td>Nom d'utilisateur, email, message</td>
          <td>Consentement</td>
          <td>
            Pour faciliter la communication entre utilisateurs et artisans, nous collectons votre nom d'utilisateur, adresse email et le contenu de votre message.
            Le consentement à cette collecte est nécessaire pour activer cette fonctionnalité.
          </td>
        </tr>
        <!-- Row 5 -->
        <tr>
          <td>Acheter un produit</td>
          <td>Nom, prénom, adresse de livraison, détails de paiement</td>
          <td>Exécution du contrat</td>
          <td>
            Lorsque vous achetez un produit, nous collectons votre nom, prénom, adresse de livraison et informations de paiement pour traiter votre commande.
            Cette collecte est nécessaire pour l'exécution du contrat de vente entre vous et nous.
          </td>
        </tr>
        <!-- Row 6 -->
        <tr>
          <td>Renseigner info carte de crédit</td>
          <td>Détails de la carte de crédit</td>
          <td>Consentement</td>
          <td>
            Nous collectons les détails de votre carte de crédit uniquement avec votre consentement explicite pour faciliter les transactions sur notre site.
            Ces informations sont traitées de manière sécurisée pour garantir votre protection.
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: #f9fafb;
  border-radius: 12px;
}

.craftedby-intro {
  background-color: #f9fafb;
}
</style>

<script setup>
</script>
