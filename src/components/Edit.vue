<template>
  <div class="fond">
    <h1>
      <font-awesome-icon icon="edit" />  Modifier une recette
    </h1>

    <Form :recipe="recipe" v-if="recipe" @send="update" />
  </div>
</template>

<script>
import Form from "./Form.vue";
import RecipeService from "../services/RecipeService.js";

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
          this.$toasted.success("Recette mise à jour ! 😉");
          this.$router.replace("/");
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  }
};
</script>

<style scoped>
h1{
  padding: 5.5em 0em 1.5em 0em
}
</style>
