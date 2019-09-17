<template>
  <article class="recipe-card">
    <div class="recette-card">
      <figure>
        <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" />
      </figure>

      <div class="encart-list">
        <h2>
          <a href="#">{{recipe.titre}}</a>
        </h2>

        <div class="information-recette detail">
          <div class="border-right">
            <p class="font-quantico">Niveau :</p>
            <span>{{recipe.niveau}}</span>
          </div>

          <div class="border-right">
            <p class="font-quantico">Personne(s) :</p>
            <span>{{recipe.personnes}}</span>
          </div>

          <div>
            <p class="font-quantico">Temps :</p>
            <span>{{recipe.tempsPreparation}} min</span>
          </div>
        </div>

        <div class="btn-voir-recette">
          <a href="#" class="btn btn-small" @click.prevent="onRemove">Supprimer</a>
          <router-link :to="`/edit/${recipe.id}`" class="btn btn-small">Modifier</router-link>
          <router-link :to="`/detail/${recipe.id}`" class="btn btn-small">Détail</router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object
    }
  },
  computed: {
    DEFAULT_PHOTO: function() {
      return "https://cdn.pixabay.com/photo/2019/09/15/14/42/dish-4478482_960_720.png";
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
/** 
 TITRE NIVEAU 2
 **/
h2 {
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.3em;
}

h2 > a {
  text-decoration: none;
}

/** 
 BALISE ARTCILE
 **/
.recipe-card {
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: auto auto 30px auto;
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.68);
}

.recipe-card figure img {
  display: block;
  max-width: 270px;
  margin: auto;
}

.recipe-card div {
  font-size: 1em;
  line-height: 1.6em;
}

/** 
CHAMPS NIVEAU PERSONNES ET TEMPS PREPARATION
 **/
.information-recette {
  display: flex;
  justify-content: space-around;
}

.information-recette div {
  padding: 1em 0.6em;
  text-align: center;
  width: 125px;
}

/** 
 BOUTON
 **/
.btn-voir-recette {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-voir-recette a {
  margin: 10px 1px;
}
</style>
