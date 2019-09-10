<template>
  <div class="container centered">
    <TemplateDetail :user="user" v-if="user" @send="update"/> 
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
      user: null
    };
  },
  created: function() {
    RecipeService.fetchOne(this.$route.params.id)
      .then(user => {
        this.user = user;
      })
      .catch(({ message }) => {
        this.$toasted.error(message);
        this.$router.replace("/");
      });
  },
  methods: {
    update: function(user) {
     RecipeService.updateUser(user)
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
