<template>
  <article class="user-card">
    <div class="recette_card">
      <figure>
        <img :src="user.photo || DEFAULT_PHOTO" :alt="`Photo de ${user.titre}`" />
      </figure>
      <h2>
        <a href="#">{{user.titre}}</a>
      </h2>

      <div class="information_recette">
        <div>
          <p>Niveau :</p>
          <span>{{user.niveau}}</span>
        </div>

        <div>
          <p>Personnes :</p>
          <span>{{user.personnes}}</span>
        </div>

        <div>
          <p>Etapes :</p>
          <span>{{user.tempsPreparation}}</span>
        </div>
      </div>

     <div class="btn_voir_recette">
        <a href="#" class="btn btn-small" @click.prevent="onRemove">Supprimer</a>
        <router-link :to="`/edit/${user.id}`" class="btn btn-small">Modifier</router-link>
        <router-link :to="`/detail/${user.id}`" class="btn btn-small">Détail</router-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    user: {
      type: Object
    }
  }
};
</script>

<style scoped>
.recette_card{
   /*background-color:#004284;*/
   padding:1em;
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

.user-card figure img {
  display: block;
  max-width: 270px;
}

.user-card div {
  margin: 0.25em;
  font-size: 1em;
  line-height: 1.6em;
}

.information_recette {
  display: flex;
  justify-content: space-around;
}

.btn_voir_recette {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
