<template>
  <nav class="navbar" id="mynavbar">
    <div class="container">
      <h1>| CANTINA |</h1>
      <router-link to="/">
        <font-awesome-icon icon="home" />Accueil
      </router-link>
      <router-link :to="{name : 'list'}">
        <font-awesome-icon icon="list-ul" />Liste des recettes
      </router-link>
      <router-link to="/add">
        <font-awesome-icon icon="utensils" />Ajouter une recette
      </router-link>
    </div>
    <a class="icon" @click="burger">
      <font-awesome-icon icon="bars" />
    </a>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    burger: function() {
      var x = document.getElementById("mynavbar");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #efefef;
  overflow: hidden;
  margin-bottom: 1em;
  border-bottom: 2px solid #cd4031;
  z-index: 10;
}

.navbar > .container {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container a {
  margin: 1em;
}

.navbar a:link,
.navbar a:visited {
  position: relative;
  color: rgb(105, 105, 105);
  text-decoration: none;
  display: inline-block;
  padding: 0.75em 1em;
  transition: all 150ms;
  transform: scale(1);
}
.navbar a:hover {
  background-color: #ffc107;
  transform: scale(1.05);
  color: #ffffff;
}

.navbar a:hover path {
  color: #cd4031;
}
.navbar a.router-link-exact-active {
  background-color: #cd4031;
  color: #ffffff;
}

.navbar a.router-link-exact-active path {
  color: #ffc107;
}

.navbar a:active {
  transition: none;
  color: #ffffff;
}

.navbar {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a.active {
  background-color: #4caf50;
  color: white;
}

.icon {
  display: none !important;
}

@media screen and (max-width: 780px) {
  .navbar a:not(:first-child) {
    display: none;
  }
  .icon {
    display: block !important;
    position: absolute;
    top: 15px;
    right: 0;
  }

  .navbar.responsive {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .navbar.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }

  .none {
    display: none !important;
  }
  .navbar > .container {
    display: flex;
    flex-direction: column !important;
  }
}
</style>
