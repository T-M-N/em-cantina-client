<template>
  <div class="container centered">
    <h1>Edition</h1>

    <Form :recipe="recipe" v-if="recipe" @send="update"/>
  </div>
</template>

<script>
import Form from "./Form";
import RecipeService from "../services/RecipeService";

export default {
  name: "Edit",
  components: {
    Form
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
