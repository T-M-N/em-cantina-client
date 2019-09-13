<template>
  <form class="recipeform" @submit.prevent="onSubmit">

    <div class="form-group">
      <label for="titre">titre :</label>
      <input
        type="text"
        v-model="$v.recipe.titre.$model"
        @blur="$v.recipe.titre.$touch()"
        id="titre"
        placeholder="titre"
      >
      <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Le champs est requis</span>
      <span
        v-if="$v.recipe.titre.$dirty &&  !$v.recipe.titre.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div>

   <div class="form-group">
      <label for="description">description :</label>
      <input
        type="text"
        v-model="$v.recipe.description.$model"
        @blur="$v.recipe.description.$touch()"
        id="description"
        placeholder="description"
      >
      <span v-if="$v.recipe.description.$dirty && !$v.recipe.description.required">Le champs est requis</span>
      <span
        v-if="$v.recipe.description.$dirty &&  !$v.recipe.description.alpha"
      >Le champs ne doit contenir que des lettres</span>
    </div>

    <div class="form-group">
     <label for="personnes">Number of personnes (1-20):</label>
      <input type="number" id="personnes"
       min="1" max="20"
       v-model.number="$v.recipe.personnes.$model"
       
      @blur="$v.recipe.personnes.$touch()">
      <span v-if="!$v.recipe.personnes.required">Le champs est requis</span>
    </div>


    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>
  </form>
</template>

<script>
import { required, helpers,  minLength } from 'vuelidate/lib/validators'

// Pour accepter les espaces
let alpha = value => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return true
  }
  //je ne veux pas des symboles </{} etc
  return /^[a-zA-Z\s\W]+$/g.test(value)
}

import RecipeService from "../services/RecipeService.js";

export default {
  name: "Form",
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {
          id: null,
          titre: "",
          description:"",
          personnes:null,
         minLength: 3,
        };
      }
    }
  },

  validations: {
    recipe: {
      titre: { required, alpha },
      description: { required, alpha },
     personnes: { required }
    }
  },

methods: {
    onSubmit: function() {
      if (this.$v.recipe.$invalid) return this.$v.recipe.$touch();
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
