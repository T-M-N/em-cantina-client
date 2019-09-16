<template>
  <div class="container">
    <TemplateDetail :recipe="recipe" v-if="recipe" @send="update" @remove="removeRecipe" />
  </div>
</template>

<script>
import TemplateDetail from "./TemplateDetail.vue";
import RecipeService from "../services/RecipeService.js";

export default {
  name: "Detail",
  components: {
    TemplateDetail
  },
  data: function() {
    return {
      recipesList: null,
      recipe: null
    };
  },
 
  methods: {
    update: function(recipe) {
      RecipeService.updateRecipe(recipe)
        .then(() => {
          this.$toasted.success("Recette mise à jour ! 😉");
          this.$router.replace("/list");
        })
        .catch(({ message }) => this.$toasted.error(message));
    },
    removeRecipe: function(recipeToDelete) {
      RecipeService.removeRecipe(recipeToDelete)
        .then(res => {
          let index = this.recipesList.indexOf(recipeToDelete);
          if (index) {
            this.recipesList.splice(index);
          }
          this.$toasted.success(`Recette ${res.recette.titre} supprimée ! 💪`);
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  },
   created: function() {
    RecipeService.fetchOne(this.$route.params.id)
      .then(recipe => {
        this.recipe = recipe;
      })
      .catch(({ message }) => {
        this.$toasted.error(message);
        this.$router.replace("/");
      });
  },
};
</script>

<style>
</style>
