<template>
  <div class="container">
    <TemplateDetail   :recipe="recipe" v-if="recipe"  @remove="removeRecipe" />
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
      recipe: null
    };
  },
 
  methods: {
    removeRecipe: function(recipeToDelete) {
      if (confirm("Etes-vous sûr de vouloir supprimer cette recette ?"))
      RecipeService.removeRecipe(recipeToDelete)
        .then(res => {
          this.$router.push('/');
          this.$toasted.success(`Recette ${res.recette.titre} supprimée ! 💪`);
        })
        .catch(({ message }) => this.$toasted.error(message));
    },
    fetchOneRecipe : function(id){
      //method pour récupérer une recette
     RecipeService.fetchOne(id)
      .then(recipe => {
        this.recipe = recipe;
      })
      .catch(({ message }) => {
        this.$toasted.error(message);
        this.$router.replace("/");
      });
  }
  },
  
   created: function() {
   this.fetchOneRecipe(this.$route.params.id)
  },
  beforeRouteUpdate: function(to, from, next){
    if(to.params.id != from.params.id){
      this.fetchOneRecipe(to.params.id)
    }
    // dis au router d'aller à la route suiviante (ici to)
    next();
  },
};
</script>

<style scoped>

</style>
