<template>
  <div>  
    <p> test : {{user.titre}}</p>
  </div>
</template>

<script>
export default {
  name: "Usercard",
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    onRemove: function() {
      this.$emit("remove", this.user); // Envoi l'objet 'user' vers le parent via l'événement personnalisé 'remove'
    }
  }
};
</script>

<style>

</style>
