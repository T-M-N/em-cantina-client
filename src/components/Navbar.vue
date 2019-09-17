<template>
  <nav class="navbar" id="mynavbar">
    <div class="container">
      <router-link class="logo" to="/">
        <h1>| CANTINA |</h1>
      </router-link>
      <router-link to="/">
        <font-awesome-icon icon="home" />Accueil
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
/** 
 BARRE DE NAVIGATION
 **/

.navbar {
  background-color: #efefef;
  overflow: hidden;
  border-bottom: 5px solid #ffc107;
}

.navbar > .container {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
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
  padding: 0.3em 1em;
  transition: all 150ms;
  transform: scale(1);
}

.navbar a:hover:not(.logo) {
  background-color: #ffc107;
  transform: scale(1.05);
  color: #ffffff;
}

.navbar a:hover path {
  color: #cd4031;
}

.navbar a.router-link-exact-active:not(.logo) {
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

/** 
 BURGER MENU CACHER SUR DESKTOP
 **/

.icon {
  display: none !important;
}

/** 
 RESPONSIVE 
 **/
@media screen and (min-width: 780px) {
  .logo h1 {
    font-size: 1.9em !important;
  }
  .navbar {
    position: fixed;
    z-index: 1;
    width: 100%;
  }
}

@media screen and (max-width: 780px) {
  .navbar a:not(:first-child) {
    display: none;
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

  .navbar > .container {
    display: flex;
    flex-direction: column !important;
  }

/** 
BURGER MENU
 **/
  .icon {
    display: block !important;
    position: absolute;
    top: 0px;
    right: 0;
  }

}
</style>
