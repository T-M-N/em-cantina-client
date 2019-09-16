<template>
  <div class="container fond">
    <h1>
      <font-awesome-icon icon="list-ul" />Liste des recettes
    </h1>
    <br />
    <form class="filterform" @submit.prevent>
      <input type="search" v-model="recipeSearch" placeholder="Tapez un nom ou un lieu ..." />

      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="filterValue">
        <option value="">filtre</option>
        <option value="titre">recette</option>
        <option value="niveau">Niveau</option>
      </select>
    </form>

    <div class="recipelist" v-if="recipesList">
      <RecipeCard
        v-for="recipe in filteredList"
        :recipe="recipe"
        :key="recipe.id"
        @remove="removeRecipe"
      />
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
      filterValue: ""
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
        let searchText = this.$store.state.recipeSearch;
        titre = titre.toLowerCase();
        niveau = niveau.toLowerCase();

        return this.filterValue === "titre"
          ? titre.includes(searchText)
          : this.filterValue === "niveau"
          ? niveau.includes(searchText)
          : this.filterValue === "personnes"
          ? personnes >= Number(searchText)
          : true;
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
          this.$toasted.success(`Recette ${res.recette.titre} supprimée ! 💪`);
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

<style scoped>
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

@media screen and (max-width: 780px) {
  .filterform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    widows: 100%;
  }
  form{
    padding:0em 2em 0em 2em;
  }
  input,
  select {
    width: 100% !important;
  }
}

input,
select {
  width: 20%;
  outline-color: red;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


.recipelist {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 2em;
  flex-wrap: wrap;
}
</style>
