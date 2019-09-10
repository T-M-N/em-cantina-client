<template>
  <nav class="navbar">
    <div class="container">
    <h1>| Recettes Geek | </h1>
      <router-link to="/">Accueil</router-link>
      <router-link :to="{name : 'list'}">Liste des recettes</router-link>
      <router-link to="/add">Ajouter une recette</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #EFEFEF;
  overflow: hidden;
  margin-bottom: 3em;
  border-bottom:5px solid #9DB668;
}

.navbar > .container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.container a{
    margin:1em;
}

.navbar a:link,
.navbar a:visited {
  color: rgb(105, 105, 105);
  text-decoration: none;
  display: inline-block;
  padding: 0.75em 1em;
  transition: all 150ms;
  transform: scale(1);
}

.navbar a:hover {
  background-color: #9DB668;
  transform: scale(1.05);
  color:#ffffff;
}

.navbar a.router-link-exact-active {
  background-color: #CD4031;
  color:#ffffff;
}

.navbar a:active {
  transition: none;
  color: #ffffff;
}

.navbar a:last-of-type {
  margin-left: auto;
}
</style>
