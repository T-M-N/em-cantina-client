<template>
  <div class="container fond">
    <h1>
      <font-awesome-icon icon="utensils" />Ajouter une recette
    </h1>

    <Form @send="addRecipe"></Form>
  </div>
</template>

<script>
import Form from "./Form";
import RecipeService from "../services/RecipeService";

export default {
  name: "Add",
  components: {
    Form
  },

  methods: {
    addRecipe: function(recipe) {
      RecipeService.addRecipe(recipe)
        .then(() => {
          this.$router.replace("/list");
          this.$toasted.success("Recette correctement ajoutée 😉 !");
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  }
};
</script>

<style scoped>
</style>
