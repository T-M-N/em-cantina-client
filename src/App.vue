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

.container {
  max-width: 1152px;
  margin: 0 auto;
}

.centered {
  text-align: center;
}

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
  background: linear-gradient(to bottom, #9db668 50%, #9db668);
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

form input[type="text"],
form input[type="search"],
form input[type="password"],
form input[type="date"],
form input[type="url"],
form select {
  padding: 0.5em 0.9em;
  border-radius: 2px;
  border: thin solid #c0c0c0;
  background: linear-gradient(to bottom, #e6e6e6 0%, transparent 20%);
}
</style>
