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
  font-family: "quanticoregular";
  overflow-x: hidden;
}

p,
ul li {
  font-family: "poppinslight";
}

/**
FONT QUANTICO
**/
@font-face {
  font-family: "quanticobold";
  src: url("./fonts/quantico/quantico-bold-webfont.woff2") format("woff2"),
    url("./fonts/quantico/quantico-bold-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "quanticoregular";
  src: url("./fonts/quantico/quantico-regular-webfont.woff2") format("woff2"),
    url("./fonts/quantico/quantico-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

/**
FONT Poppins
**/
@font-face {
  font-family: "poppinslight";
  src: url("./fonts/poppins/poppins-light-webfont.woff2") format("woff2"),
    url("./fonts/poppins/poppins-light-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "poppinsblack";
  src: url("./fonts/poppins/poppins-black-webfont.woff2") format("woff2"),
    url("./fonts/poppins/poppins-black-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.fond {
  background-image: url(./assets/fond_legume.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-color: #ffffff;
  position: relative;
}

a {
  color: #cd4031;
}

a:hover {
  color: #cd4031;
}

.actions {
  margin-top: 1.4em;
}

/**
 STYLES POUR BOUTONS
**/
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
  font-size: 0.9em;
}

/**
 Style pour les formulaires
**/
label {
  text-transform: uppercase;
}

button[type="submit"] {
  display: flex;
  margin: auto;
}

/**
 STYLE POUR DETAIL RECETTE
**/
.border-right {
  border-right: 1px solid #cccccc;
}

.font-quantico {
  font-family: "Quantico", sans-serif;
  font-weight: 700;
}

/**
LIST
**/
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

path {
  color: #ffc107;
}

.svg-inline--fa {
  width: 50 !important;
}

figure {
  padding: 2em;
  margin: 0;
}
/**
RESPONSIVE
**/
@media screen and (max-width: 780px) {
  h1 {
    font-size: 1.5em;
  }
}
</style>
