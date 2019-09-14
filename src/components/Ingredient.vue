<template>
  <div>
    <div>
      <button class="button btn-primary" @click.prevent="addRow">Ajouter un ingrédient</button>
    </div>

    <!-- <div class="form-group" 
     v-for="ingredient in recipe.ingredients"  :recipe="ingredient"
      :key="ingredient.id">
      <label for="ingredient">ingredient :</label>
      <input type="text"  v-model="ingredients" id="ingredient" placeholder="ingredient" />
    </div> -->
    
  </div>
</template>

<script>

import RecipeService from "../services/RecipeService.js";
import { required, url, alpha, integer } from "vuelidate/lib/validators";

export default {
  name: "Ingredient",
   props: {
    recipe: {
      type: Object,
      default: function() {
        return {
    
      ingredients:[Array, Array, String, String]
  
        }}}
  },
  methods: {
     addRow: function() {
      this.recipe.etapes.push({});
     
    },
    onSubmit: function() {
      if (this.$v.recipe.$invalid) return this.$v.recipe.$touch();
      this.$emit("send", this.recipe);
    }
  }
};
</script>

<style scoped>
.userform {
  margin: 2em 0;
}

.userform .form-group {
  margin-bottom: 1.2em;
}

.userform label {
  display: inline-block;
  vertical-align: middle;
  min-width: 150px;
  text-align: right;
}
.userform input[type="radio"] + label {
  min-width: 0;
  text-align: left;
  cursor: pointer;
}

.userform input:not([type="radio"]) {
  min-width: 200px;
  vertical-align: middle;
}

.userform input ~ span {
  display: block;
  font-size: 0.8em;
  color: red;
}

.userform .input-error {
  border: 1px solid red;
}
</style>
