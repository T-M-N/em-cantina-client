<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
body {
  margin: 0;
  font-family: "Quantico", sans-serif;
  overflow-x: hidden;
}

.fond {
  background-image: url(./assets/fond_legume.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-color: #ffffff;
  position: relative;
}

p {
  font-family: "Poppins", sans-serif;
}
a {
  color: #cd4031;
}

a:hover {
  color: #cd4031;
}

/* .centered {
  text-align: center;
} */

.actions {
  margin-top: 1.4em;
}

/**
   * Styles pour un bouton
   */

.btn {
  display: inline-block;
  padding: 0.5em 1.4em;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  background: linear-gradient(to bottom, #cd4031, #cd4031);
}

.btn:hover {
  color: #fff;
  background: linear-gradient(to bottom, #ffc107 50%, #ffc107);
}

.btn:active {
  background: linear-gradient(to bottom, #cd4031, #cd4031 50%);
}

.btn:disabled {
  background: linear-gradient(to bottom, #eeeeee, #d3d3d3);
  cursor: not-allowed;
}

.btn.btn-small {
  padding: 0.15em 0.5em;
  font-size: 0.9em;
}

/**
   * Style pour les formulaires
   */

label {
  text-transform: uppercase;
}

button[type="submit"] {
  display: flex;
  margin: auto;
}

/**
   * Style pour les détails recettes
   */

.border-right {
  border-right: 1px solid #cccccc;
}
.font-quantico {
  font-family: "Quantico", sans-serif;
  font-weight: 700;
}

/**
   * List
   */
.filterform {
  text-align: center;
}
h1 {
  text-align: center;
  text-transform: uppercase;
  color: #cd4031;
  font-weight: 700;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 780px) {
  h1 {
    font-size: 1.5em;
  }
}

path {
  color: #ffc107;
}

.svg-inline--fa {
  width: 50 !important;
}
</style>
