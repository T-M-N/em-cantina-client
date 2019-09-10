<template>
  <div>
    <span>Détail recette</span>
    <h1>{{user.titre}}</h1>
    <div class="detail_recette">
        <p>{{user.etapes}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    user: {
      type: Object
    }
  }
};
</script>

<style scoped>
.detail_recette{
    width:550px;
    margin:auto;
}
</style>
