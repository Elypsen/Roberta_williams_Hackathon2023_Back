const mongoose = require("mongoose");


const festivalSchema = mongoose.Schema({
        datasetid: String,
        recordid: String,
        fields: {
          envergure_territoriale: String,
          code_insee_commune: String,
          geocodage_xy: [Number, Number],
          complement_d_adresse_facultatif: String,
          type_de_voie_rue_avenue_boulevard_etc: String,
          annee_de_creation_du_festival: String,
          periode_principale_de_deroulement_du_festival: String,
          discipline_dominante: String,
          nom_du_festival: String,
          libelle_epci_collage_en_valeur: String,
          commune_principale_de_deroulement: String,
          region_principale_de_deroulement: String,
          code_insee_epci_collage_en_valeur: String,
          adresse_postale: String,
          departement_principal_de_deroulement: String,
          numero_de_voie: String,
          identifiant: String,
          code_postal_de_la_commune_principale_de_deroulement: String,
          site_internet_du_festival: String,
          adresse_e_mail: String,
          nom_de_la_voie: String,
          decennie_de_creation_du_festival: String,
          sous_categorie_arts_visuels_et_arts_numeriques: String,
          sous_categorie_livre_et_litterature: String,
        },
        geometry: {
          type: String,
          coordinates: [Number, Number],
        },
        record_timestamp: String,
      
})

const Festival = mongoose.model('Festival', festivalSchema);

module.exports = Festival;