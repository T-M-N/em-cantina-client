<template>
  <form class="userform" @submit.prevent="onSubmit">
    <div class="container">
      <div class="form-group">
        <label for="titre">titre :</label>
        <input
          type="text"
          v-model="$v.recipe.titre.$model"
          @blur="$v.recipe.titre.$touch()"
          id="titre"
          placeholder="titre"
        />
        <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Le champs est requis</span>
      </div>

      <div class="form-group">
        <label for="description">description :</label>
        <input
          type="text"
          v-model="$v.recipe.description.$model"
          @blur="$v.recipe.description.$touch()"
          id="description"
          placeholder="description"
        />
        <span
          v-if="$v.recipe.description.$dirty && !$v.recipe.description.required"
        >Le champs est requis</span>
      </div>

      <div class="col-2">
        <div class="form-group">
          <label for="niveau">niveau :</label>
          <select v-model="$v.recipe.niveau.$model">
            <option :value="maitre">{{maitre}}</option>
            <option :value="jedi">{{jedi}}</option>
            <option :value="padawan">{{padawan}}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="personnes">personnes :</label>
          <input
            min="1"
            max="20"
            type="number"
            v-model.number="$v.recipe.personnes.$model"
            @blur="$v.recipe.personnes.$touch()"
            id="personnes"
            placeholder="personnes"
          />
          <span
            v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.integer"
          >Le champs est requis</span>
        </div>
      </div>

      <div class="col-2">
        <div class="form-group">
          <label for="tempsPreparation">tempsPreparation :</label>
          <input
            type="number"
            v-model.number="$v.recipe.tempsPreparation.$model"
            @blur="$v.recipe.tempsPreparation.$touch()"
            id="tempsPreparation"
            placeholder="tempsPreparations"
          />
          <span
            v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.integer"
          >Le champs est requis</span>
        </div>

        <div class="form-group">
          <label for="photo">Photo :</label>
          <input type="url" v-model.lazy="$v.recipe.photo.$model" id="photo" placeholder="http://" />
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="form-group"
        v-for="(ingredient,index) in recipe.ingredients"
        :recipe="ingredient"
        :key="index"
      >
        <label for="ingredient">Ingredients :</label> &nbsp;
        <div class="col-2">
          <input type="text" v-model="ingredient[0]" id="ingredient" placeholder="25L" />
          <input type="text" v-model="ingredient[1]" id="ingredient" placeholder="de Lait" />
          &nbsp;
          <a href="#" title="Supprimer cette tâche" @click.prevent="supprimerIngredient(index)">
            <font-awesome-icon icon="times-circle" />
          </a>
          <span v-if="$v.recipe.ingredient.$dirty">Le champs est requis</span>
        </div>
      </div>
      <button @click.prevent="ajouterIngredient">
        <font-awesome-icon icon="plus-circle" />&nbsp;Ajouter un ingrédient
      </button>
    </div>

    <div class="container">
      <div class="form-group" v-for="(etape, index) in recipe.etapes" :recipe="etape" :key="index">
        <label for="etapes">Etapes :</label> &nbsp;
        <div class="col-2">
          <input type="text" v-model="recipe.etapes[index]" id="etape" placeholder="etape" />
          &nbsp;
          <a href="#" title="Supprimer cette tâche" @click.prevent="supprimerEtape(index)">
            <font-awesome-icon icon="times-circle" />
          </a>
          <span v-if="$v.recipe.etape.$dirty">Le champs est requis</span>
        </div>
      </div>

      <button @click.prevent="ajouterEtape">
        <font-awesome-icon icon="plus-circle" />&nbsp;Ajouter une étape
      </button>
    </div>
    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>
  </form>
</template>

<script>
import RecipeService from "../services/RecipeService.js";
import { required, url, alpha, integer } from "vuelidate/lib/validators";

export default {
  name: "Form",
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {
          id: null,
          titre: "",
          description: "",
          niveau: "",
          personnes: null,
          ingredients: [[""]],
          etapes: [""],
          tempsPreparation: null,
          photo: ""
        };
      }
    }
  },
  data: function() {
    return {
      maitre: "maitre",
      jedi: "jedi",
      padawan: "padawan"
    };
  },
  validations: {
    recipe: {
      titre: { required },
      description: { required },
      niveau: { required },
      personnes: { required, integer },
      ingredient: { alpha },
      etape: { alpha },
      tempsPreparation: { required, integer },
      photo: {}
    }
  },
  methods: {
    ajouterIngredient: function() {
      this.recipe.ingredients.push([]);
    },
    ajouterEtape: function() {
      this.recipe.etapes.push([]);
    },
    supprimerIngredient: function(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    supprimerEtape: function(index) {
      this.recipe.etapes.splice(index, 1);
    },
    onSubmit: function() {
      if (this.$v.recipe.$invalid) return this.$v.recipe.$touch();
      this.$emit("send", this.recipe);
    }
  }
};
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: auto auto 30px auto;
  max-width: 800px;
  background-color:rgba(255,255,255,0.64);
}

@media screen and (max-width: 780px) {
 .col-2 {
  flex-direction: column;
}

}
.col-2 {
  display: flex;
  align-items: center;
  padding: 0px;
}

.col-2 div {
  width: 100%;
}

input,
select {
  width: 100%;
  outline-color: red;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  background-color: #cd4031;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  width: 50%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  background: transparent;
  border: 1px solid #cd4031;
  color: #cd4031;
}

button[type="submit"] {
  width: 35%;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  padding: 20px;
}

</style>
