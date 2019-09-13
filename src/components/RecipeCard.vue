<template>
  <article class="recipe-card">
    <div class="recette_card">
      <figure>
        <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" />
      </figure>
      <h2>
        <a href="#">{{recipe.titre}}</a>
      </h2>

      <div class="information_recette detail">
        <div class="border-right">
          <p class="font-quantico">Niveau :</p>
          <span>{{recipe.niveau}}</span>
        </div>

        <div class="border-right">
          <p class="font-quantico">Personnes :</p>
          <span>{{recipe.personnes}}</span>
        </div>

        <div>
          <p class="font-quantico">Etapes :</p>
          <span>{{recipe.tempsPreparation}} min</span>
        </div>
      </div>

     <div class="btn_voir_recette">
        <a href="#" class="btn btn-small" @click.prevent="onRemove">Supprimer</a>
        <router-link :to="`/edit/${recipe.id}`" class="btn btn-small">Modifier</router-link>
        <router-link :to="`/detail/${recipe.id}`" class="btn btn-small">Détail</router-link>
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
      return "https://s1.qwant.com/thumbr/0x0/2/2/6788a08a24aefe72817478982ee2e6/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fgurucul.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fdefault-user-icon-profile.png&q=0&b=1&p=0&a=1";
    }
},
  methods: {
    onRemove: function() {
      this.$emit("remove", this.recipe); // Envoi l'objet 'user' vers le parent via l'événement personnalisé 'remove'
    }
  }
};
</script>

<style scoped>
.recette_card{
   padding:1em;
}
article{
  margin:5px;
}

h2 {
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size:1.3em;
}

h2 > a{
  text-decoration:none;
  /*color:#f4f4f4;*/
}

.recipe-card figure img {
  display: block;
  max-width: 270px;
  margin:auto;
}

.recipe-card div {
  font-size: 1em;
  line-height: 1.6em;
}

.information_recette {
  display: flex;
  justify-content: space-around;
}

.information_recette div{
  padding: 1em 0.6em;
    text-align: center;
    width: 91px;
}

.btn_voir_recette {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn_voir_recette a{
  margin:10px 1px;
}
</style>
