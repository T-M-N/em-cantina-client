<template>
  <div>
    <div class="information_recette">
      <div class="photo_recette">
        <figure>
          <img :src="user.photo || DEFAULT_PHOTO" :alt="`Photo de ${user.titre}`" />
        </figure>

        <div class="titre_recette">
          <span>Détail recette</span>
          <h1>{{user.titre}}</h1>
        </div>
      </div>
      <!-- Pour voir les étapes sans les crochets il est préférable de faire 
    un double tableau en partant de :
    v-for="user in filteredList" :user="user" :key="user.id"

    j'aurais un autre
    v-for="etape in user" :user="etape" :key="etaper.id" 
      -->

      <div class="description_recette">
        <div>
          <p>{{user.description}}</p>
        </div>

        <div class="detail">
          <div>
            <p>Niveau :</p>
            <span>{{user.niveau}}</span>
          </div>

          <div>
            <p>Personnes :</p>
            <span>{{user.personnes}}</span>
          </div>

          <div>
            <p>Temps préparation :</p>
            <span>{{user.tempsPreparation}}</span>
          </div>
        </div>

        <div class="detail2">
          <div>
            <ul v-for="n in user" :key="n.id">
              <!-- Créer un ul li avec une boucle sur le ul pour appeler les ingrédients -->
              <li>
                  {{user.ingredients}}
                </li>
            </ul>
          </div>
          <div>
            <span>-{{user.etapes[0]}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import RecipeService from "../services/RecipeService.js";
export default {
  name: "TemplateDetail",
  data: function() {
    return {
      usersList: null
    };
  },
  props: {
    user: {
      type: Object
    }
  }
};
</script>

<style scoped>
.detail2 {
  flex-direction: columns;
}
.photo_recette {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.titre_recette {
  color: #908f8f;
  background: #f4f4f4;
  position: relative;
  width: 200px;
  /*margin: auto;*/
  padding: 1em 2em;
  top: -90px;
}
.information_recette {
  display: flex;
  justify-content: space-around;
}

.detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description_recette {
  display: flex;
  flex-direction: column;
}
figure img {
  display: block;
  max-width: 270px;
  margin: auto;
}
</style>
