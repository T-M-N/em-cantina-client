<template>
  <div>
<main>
    <div class="wrapper">
      <section>
        <figure>
          <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" />
        </figure>
      </section>

      <section class="description">
        <div class="titre_recette">
          <span>Détail recette</span>
          <h1>{{recipe.titre}}</h1>
           <p>{{recipe.description}}</p>
        </div>

        <br/>

        <div class="detail">
          <div class="border-right">
            <p class="font-quantico">Niveau :</p>
            <span>{{recipe.niveau}}</span>
          </div>

          <div class="border-right">
            <p class="font-quantico">Personnes :</p>
            <span>{{recipe.personnes}}</span>
          </div>

          <div>
            <p class="font-quantico">Temps préparation :</p>
            <span>{{TempsPreparation}}</span>
          </div>
        </div>
      </section>
    </div>
    <div class="wrapper2">
      <section class=" ingredient">
          <p>Les ingrédients:</p>
         
          <ul class="list_ingredient">
            <li v-for="ingredient in recipe.ingredients" :recipe="ingredient" :key="ingredient.id">{{ingredient[0]}}-{{ingredient[1]}}</li>
          </ul>
        
      </section>
      <section class=" w-500 ingredient">
          <p>Etapes de préparation :</p>
          <p>-{{recipe.etapes[0]}}</p>
      </section>
    </div>
</main>
  </div>
</template>

<script>
import RecipeService from "../services/RecipeService.js";
export default {
  name: "TemplateDetail",
  props: {
    recipe: {
      type: Object
    }
  },
  computed: {
    TempsPreparation: function() {
      var min = this.recipe.tempsPreparation;
      var hours = Math.floor(min / 60);
      var minutes = min % 60;
      return hours + "h" + minutes;
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 900px;
  margin: auto;
}
.wrapper2{
 display: flex;
    -ms-flex-pack: center;
    width: 900px;
    margin: auto;
    justify-content: space-between;
    background: #f4f4f4;
    padding: 2em;
}
.w-500{
    width:500px;
}

.ingredient p {
    text-align:left;
}

li{
    text-align:left;
}

.baseline{
    align-items: baseline
}

.detail {
  display: flex;
  justify-content: space-between;
  align-self: normal;
}


.detail div:nth-child(odd) {
 /* background-color: #9db668;*/
  padding: 2em;
  width: 118px;
}

.detail div:nth-child(even) {
 /* background-color: #f4f4f4;*/
  padding: 2em;
  width: 118px;
}


.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titre_recette {
  color: #908f8f;
  background: #f4f4f4;
  display: inline-flex;
  flex-direction: column;
  padding: 2em;
}

.titre_recette h1{
    color:#cd4031 !important;
}
figure img {
  display: block;
  max-width: 350px;
  margin: auto;
}
</style>
