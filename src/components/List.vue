<template>
<div>
  <h1>Recettes</h1>
  <br/>
  <form class="filterform" @submit.prevent>
      <input type="search" v-model="userSearch" placeholder="Tapez un nom ou un lieu ...">

      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="filterValue">
        <option value="name">Nom de la recette</option>
        <option value="personnes">Personnes</option>
      </select>
    </form>

    <div class="userlist" v-if="usersList">
    <RecipeCard v-for="user in filteredList" :user="user" :key="user.id" @remove="removeUser"/>
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
    usersList: null,
    filterValue: "name"
  };
},
computed: {
  userSearch: {
    get: function() {
      return this.$store.state.userSearch;
    },
    set: function(newVal) {
      this.$store.dispatch("updateUserSearch", newVal);
    }
  },
    filteredList: function() {
      return this.usersList.filter(({ titre, niveau, personnes }) => {
        let searchText = this.$store.state.userSearch.toLowerCase();
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
  removeUser: function(userToDelete) {
    RecipeService.removeUser(userToDelete)
      .then(res => {
        let index = this.usersList.indexOf(userToDelete);
        if (index > -1) {
          this.usersList.splice(index, 1);
        }
        this.$toasted.success(
          `Collaborateur ${res.removed.titre} supprimé ! 💪`
        );
      })
      .catch(({ message }) => this.$toasted.error(message));
  }
},
created: function() {
  RecipeService.fetchAll().then(usersList => {
    this.usersList = usersList;
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
.userlist{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 2em;
  flex-wrap: wrap;  
}
</style>
