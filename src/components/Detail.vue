<template>
  <div class="container centered">
    <TemplateDetail :recipe="recipe" v-if="recipe" @send="update"/> 
  </div>
</template>

<script>
import TemplateDetail from "./TemplateDetail";
import RecipeService from "../services/RecipeService";

export default {
  name: "Detail",
  components: {
    TemplateDetail
  },
  data: function() {
    return {
      recipe: null
    };
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
  methods: {
    update: function(recipe) {
     RecipeService.updateRecipe(recipe)
        .then(() => {
          this.$toasted.success("Collaborateur mis à jour ! 😉");
          this.$router.replace("/list");
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  }
};
</script>

<style>
</style>
