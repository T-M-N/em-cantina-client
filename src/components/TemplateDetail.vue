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
          <div class="titre-recette">
            <span>Détail recette</span>
            <h1>{{recipe.titre}}</h1>
            <p>{{recipe.description}}</p>
          </div>

          <br />

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
              <p class="font-quantico">Temps :</p>
              <span>{{TempsPreparation}}</span>
            </div>
          </div>

          <div class="btn-voir-recette">
            <a href="#" class="btn btn-small" @click.prevent="onRemove">Supprimer cette recette</a>&nbsp;
            <router-link :to="`/edit/${recipe.id}`" class="btn btn-small">Modifier</router-link>
          </div>
        </section>
      </div>
      <div class="wrapper2">
        <section class="ingredient">
          <p>Les ingrédients:</p>
          <ul class="list-ingredient">
            <li
              v-for="ingredient in recipe.ingredients"
              :recipe="ingredient"
              :key="ingredient.id"
            >{{ingredient[0]}}-{{ingredient[1]}}</li>
          </ul>
        </section>
        <section class="w-500 ingredient">
          <p>Etapes de préparation :</p>
          <ul class="list-ingredient">
            <li v-for="etape in recipe.etapes" :recipe="etape" :key="etape.id">{{etape}}</li>
          </ul>
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
  },
  methods: {
    onRemove: function() {
      this.$emit("remove", this.recipe);
    }
  }
};
</script>

<style scoped>
main {
  max-width: 1100px;
  margin: auto;
}

.wrapper,
.wrapper2 {
  align-items: center;
}

.wrapper {
  display: flex;
  justify-content: space-around;
  margin: auto;
}
.wrapper2 {
  display: flex;
  -ms-flex-pack: center;
  margin: auto;
  justify-content: space-between;
  background: #f4f4f4;
  align-items: baseline;
}

/** 
BOUTON, LIST, TITRE
 **/
.titre-recette h1 {
  color: #cd4031 !important;
}

.titre-recette {
  color: #908f8f;
  background: #f4f4f4;
  display: inline-flex;
  flex-direction: column;
  padding: 2em;
  align-items: center;
}

.btn-voir-recette {
  margin: auto;
  text-align: center;
}

ul li {
  margin-bottom: 10px;
  line-height: 1.8em;
}

/** 
INGREDIENT
 **/
.ingredient {
  padding: 2em;
  margin-top: 5px;
}

.ingredient p {
  text-align: left;
  color: #cd4031;
  font-family: "poppinsblack";
}

.baseline {
  align-items: baseline;
}

/** 
NIVEAU, PERSONNES, TEMPS PREPARATION
 **/
.detail {
  display: flex;
  justify-content: space-between;
  align-self: normal;
  text-align: center;
}

.detail div:nth-child(odd),
.detail div:nth-child(even) {
  padding: 1em;
  margin-bottom: 5px;
}

.detail div:nth-child(odd) {
  width: 100%;
}

.detail div:nth-child(even) {
  width: 100%;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

figure img {
  display: block;
  max-width: 350px;
  margin: auto;
}

/** 
RESPONSIVE
 **/
@media screen and (min-width: 880px) {
  .wrapper {
    padding-top: 110px;
  }

  .w-500 {
    width: 50%;
  }
}

@media screen and (max-width: 780px) {
  figure {
    margin-top: 2em !important;
  }
}

@media screen and (max-width: 880px) {
  .wrapper,
  .wrapper2 {
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }

  figure {
    margin-top: 8em;
  }

  figure img {
    max-width: 250px !important;
  }

  .detail {
    align-items: baseline;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
  }
}
</style>
