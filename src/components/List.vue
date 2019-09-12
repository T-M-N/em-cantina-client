<template>
<div>
  <h1>Recettes</h1>
  <br/>
  <form class="filterform" @submit.prevent>
      <input type="search" v-model="recipeSearch" placeholder="Tapez un nom ou un lieu ...">

      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="filterValue">
        <option value="name">Nom de la recette</option>
        <option value="personnes">Personnes</option>
      </select>
    </form>

    <div class="recipelist" v-if="recipesList">
    <RecipeCard v-for="recipe in filteredList" :recipe="recipe" :key="recipe.id" @remove="removeRecipe"/>
  </div>
</div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
import RecipeService from "../services/RecipeService.js";

export default {
name: "List",
components: {
  RecipeCard
},
data: function() {
  return {
    recipesList: null,
    filterValue: "name"
  };
},
computed: {
  recipeSearch: {
    get: function() {
      return this.$store.state.recipeSearch;
    },
    set: function(newVal) {
      this.$store.dispatch("updateRecipeSearch", newVal);
    }
  },
    filteredList: function() {
      return this.recipesList.filter(({ titre, niveau, personnes }) => {
        let searchText = this.$store.state.recipeSearch.toLowerCase();
        titre = titre.toLowerCase();
        niveau = niveau;
        personnes = personnes;

        return this.filterValue === "name"
          ? `${titre}`.includes(searchText) ||
              `${niveau}`.includes(searchText)||
              `${personnes}`.includes(searchText) 
          : niveau.includes(searchText);
      });
    }
},
methods: {
  removeRecipe: function(recipeToDelete) {
    RecipeService.removeRecipe(recipeToDelete)
      .then(res => {
        let index = this.recipesList.indexOf(recipeToDelete);
        if (index > -1) {
          this.recipesList.splice(index, 1);
        }
        this.$toasted.success(
          `Collaborateur ${res.removed.titre} supprimé ! 💪`
        );
      })
      .catch(({ message }) => this.$toasted.error(message));
  }
},
created: function() {
  RecipeService.fetchAll().then(recipesList => {
    this.recipesList = recipesList;
  });
}
};
</script>


<style>
.filterform{
  text-align: center;
}
h1{
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}
.recipelist{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 2em;
  flex-wrap: wrap;  
}
</style>
