<template>
  <div>
      Recettes : 
    <div class="userlist" v-if="usersList">
      <Usercard />
    </div>
  </div>
</template>

<script>
import Usercard from "./Usercard.vue";
import UserService from "../services/UserService.js";

export default {
  name: "List",
  components: {
    Usercard
  },
  data: function() {
    return {
      usersList: null
    };
  },
  created: function() {
    UserService.fetchAll().then(usersList => {
      this.usersList = usersList;
    });
  }
};
</script>

<style>

</style>
