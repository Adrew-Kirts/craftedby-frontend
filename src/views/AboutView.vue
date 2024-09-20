<template>
  <div class="container mx-auto px-4 py-8 flex flex-col">
    <section class="craftedby-intro bg-gray-100 p-6 rounded-lg mb-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Bienvenue sur CraftedBy</h1>
      <p class="text-lg text-justify">
        CraftedBy est une plateforme dédiée à la mise en valeur des créations artisanales uniques. Nous proposons une
        expérience utilisateur fluide et intuitive,
        permettant de découvrir facilement des produits authentiques réalisés par des artisans talentueux. Naviguez à
        travers différentes catégories,
        personnalisez vos achats, et plongez dans l’histoire de chaque création et de son créateur. Chez CraftedBy,
        chaque produit raconte une histoire.
      </p>
    </section>

    <section class="about bg-white shadow-lg rounded-lg p-6 flex flex-col">
      <h1 class="text-4xl font-bold mb-6 text-center">Politique de Confidentialité et RGPD</h1>
      <h2 class="text-2xl font-semibold mb-4">Traitement des Données Personnelles</h2>

      <p class="mb-6">
        Voici la liste des traitements nécessaires au fonctionnement de notre application ainsi que leur base légale :
      </p>

      <div class="overflow-x-auto">
        <table class="w-full table-auto border-collapse">
          <thead>
          <tr class="bg-gray-200">
            <th class="border px-4 py-2">Finalité</th>
            <th class="border px-4 py-2">Données collectées</th>
            <th class="border px-4 py-2">Base légale</th>
            <th class="border px-4 py-2">Mention d’information</th>
          </tr>
          </thead>
          <tbody>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2">Création de compte utilisateur</td>
            <td class="border px-4 py-2">Nom, prénom, email, mot de passe</td>
            <td class="border px-4 py-2">Consentement</td>
            <td class="border px-4 py-2">
              Nous collectons votre nom, prénom, adresse email et mot de passe pour la création de votre compte
              utilisateur sur notre site.
              Votre consentement à cette collecte est nécessaire pour nous permettre de vous fournir nos services. Vous
              avez le droit de retirer
              votre consentement à tout moment, mais cela pourrait affecter votre capacité à utiliser certains services.
            </td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Création de compte artisan</td>
            <td class="border px-4 py-2">Nom, prénom, email, mot de passe, informations professionnelles (ex : numéro
              SIRET)
            </td>
            <td class="border px-4 py-2">Consentement</td>
            <td class="border px-4 py-2">
              Pour créer un compte artisan, nous recueillons des informations telles que votre nom, prénom, adresse
              email, mot de passe et informations professionnelles.
              Ces données sont nécessaires pour valider votre statut d'artisan et vous permettre d'utiliser nos
              services. Votre consentement est requis pour cette collecte.
            </td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2">Laisser un commentaire</td>
            <td class="border px-4 py-2">Nom d'utilisateur, commentaire</td>
            <td class="border px-4 py-2">Intérêt légitime</td>
            <td class="border px-4 py-2">
              Vos commentaires sur nos produits ou services sont collectés sous votre nom d'utilisateur. Cette collecte
              se base sur notre intérêt légitime à recevoir
              des feedbacks pour améliorer nos offres.
            </td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Envoyer un message à un artisan</td>
            <td class="border px-4 py-2">Nom d'utilisateur, email, message</td>
            <td class="border px-4 py-2">Consentement</td>
            <td class="border px-4 py-2">
              Pour faciliter la communication entre utilisateurs et artisans, nous collectons votre nom d'utilisateur,
              adresse email et le contenu de votre message.
              Le consentement à cette collecte est nécessaire pour activer cette fonctionnalité.
            </td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2">Acheter un produit</td>
            <td class="border px-4 py-2">Nom, prénom, adresse de livraison, détails de paiement</td>
            <td class="border px-4 py-2">Exécution du contrat</td>
            <td class="border px-4 py-2">
              Lorsque vous achetez un produit, nous collectons votre nom, prénom, adresse de livraison et informations
              de paiement pour traiter votre commande.
              Cette collecte est nécessaire pour l'exécution du contrat de vente entre vous et nous.
            </td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Renseigner info carte de crédit</td>
            <td class="border px-4 py-2">Détails de la carte de crédit</td>
            <td class="border px-4 py-2">Consentement</td>
            <td class="border px-4 py-2">
              Nous collectons les détails de votre carte de crédit uniquement avec votre consentement explicite pour
              faciliter les transactions sur notre site.
              Ces informations sont traitées de manière sécurisée pour garantir votre protection.
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- Ajout des mentions obligatoires -->
      <section class="mentions bg-gray-50 p-4 rounded-lg mt-6">
        <h3 class="text-xl font-semibold mb-4">Vos droits et informations supplémentaires</h3>
        <p class="mb-4">
          Conformément à la réglementation en vigueur, vous disposez des droits suivants : droit d'accès, de rectification,
          à l'effacement, à la portabilité, à la limitation du traitement et d'opposition au traitement de vos données personnelles.
          Vous pouvez exercer ces droits en nous contactant à l’adresse suivante : <a href="mailto:admin@craftedby.com" class="text-blue-600 underline">admin@craftedby.com</a>.
          Vous avez également le droit de retirer votre consentement à tout moment.
        </p>
        <p class="mb-4">
          Vos données personnelles sont conservées pour une durée nécessaire à la réalisation des finalités pour lesquelles elles
          ont été collectées, et sont stockées sur des serveurs situés en Europe.
        </p>
        <p class="mb-4">
          Si vous avez des questions concernant notre politique de confidentialité ou si vous souhaitez déposer une plainte,
          vous pouvez également nous écrire à l'adresse suivante : <strong>1 Esplanade Augustin, Rue Eugène Aussedat, Annecy</strong>.
        </p>
        <p class="mb-4">
          En cas de violation de vos données personnelles, nous nous engageons à en informer les autorités compétentes et à
          prendre toutes les mesures nécessaires pour minimiser les impacts potentiels.
        </p>
        <p class="mb-4">
          Vous avez également la possibilité de déposer une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.
        </p>
      </section>
    </section>
  </div>

</template>

<style scoped>
</style>
