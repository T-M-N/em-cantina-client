<template>
  <form class="recipeform" @submit.prevent="onSubmit">
     <div class="form-group">
      <label for="titre">Titre :</label>
      <input
        type="text"
        v-model="$v.recipe.titre.$model"
        @blur="$v.recipe.titre.$touch()"
        id="titre"
        placeholder="Titre"
      >
      <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Le champs est requis</span>
      <span
        v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div>

 <div class="form-group">
      <label for="description">Description :</label>
      <input
        type="text"
        v-model="$v.recipe.description.$model"
        @blur="$v.recipe.description.$touch()"
        id="description"
        placeholder="Description"
      >
      <span v-if="$v.recipe.description.$dirty && !$v.recipe.description.required">Le champs est requis</span>
      <span
        v-if="$v.recipe.description.$dirty && !$v.recipe.description.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div>

   <!-- <div class="form-group">
      <label for="niveau">Niveau :</label>
      <input
        type="text"
        v-model="$v.recipe.niveau.$model"
        @blur="$v.recipe.niveau.$touch()"
        id="niveau"
        placeholder="niveau"
      >
      <span v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.required">Le champs est requis</span>
      <span
        v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div> -->

  <div class="form-group">
    <label for="niveau">Niveau :</label>
  <select v-model="$v.recipe.niveau.$model"
        @blur="$v.recipe.niveau.$touch()"
        id="niveau">
        <option v-for="rechercheTitre in recipesList" :recipe="rechercheTitre" :key="rechercheTitre.id">{{rechercheTitre.niveau}}</option>
      </select>
       <span v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.required">Le champs est requis</span>
      <span
        v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.alpha"
      >Le champs ne doit contenir que des lettres</span>
  </div> 
  

    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>
  </form>
</template>

<script>
import { required, alpha,  url } from "vuelidate/lib/validators";
import RecipeService from "../services/RecipeService.js";
export default {
  name: "Form",
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {
          id: null,
          titre:"",
          description: "",
          niveau:""
        };
      }
    },
    recipesList: {
      type: Object
    }
  },

  validations: {
    recipe: {
       titre: { required, alpha },
      description: { required },
       niveau: { required, alpha }
    }
  },
   methods: {
    onSubmit: function() {
      // Si les règles de l'objet 'recipe' sont invalides, on stoppe l'exécution de la fonction
      if (this.$v.recipe.$invalid) return this.$v.recipe.$touch();

      // Fait remonter un événement vers le composant parent
      this.$emit("send", this.recipe);
    }
  },
  created: function() {
    RecipeService.fetchAll().then(recipesList => {
      this.recipesList = recipesList;
    });
  }
};
</script>

<style scoped>
.recipeform {
  margin: 2em 0;
}

.recipeform .form-group {
  margin-bottom: 1.2em;
}

.recipeform label {
  display: inline-block;
  vertical-align: middle;
  min-width: 150px;
  text-align: right;
}
.recipeform input[type="radio"] + label {
  min-width: 0;
  text-align: left;
  cursor: pointer;
}

.recipeform input:not([type="radio"]) {
  min-width: 200px;
  vertical-align: middle;
}

.recipeform input ~ span {
  display: block;
  font-size: 0.8em;
  color: red;
}

.recipeform .input-error {
  border: 1px solid red;
}
</style>
