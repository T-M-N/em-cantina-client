<template>
  <form class="userform" @submit.prevent="onSubmit">
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

    <!-- <div class="form-group">
      <label for="niveau">niveau :</label>
      <input
        type="text"
        v-model="$v.recipe.niveau.$model"
        @blur="$v.recipe.niveau.$touch()"
        id="niveau"
        placeholder="niveau"
      />
      <span v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.required">Le champs est requis</span>
    </div> -->

    <div class="form-group">
      <label for="niveau">niveau :</label>
      <select  v-model="$v.recipe.niveau.$model">
        <option :value="maitre">{{maitre}}</option>
          <option :value="jedi">{{jedi}}</option>
            <option  :value="padawan">{{padawan}}</option>
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
      <span v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.integer">Le champs est requis</span>
    </div>

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



    <div
      class="form-group"
      v-for="(ingredient,index) in recipe.ingredients"
      :recipe="ingredient"
      :key="ingredient.id"
    >
      <label for="ingredient">ingredient :</label>
      <input type="text" v-model="ingredient[0]" id="ingredient" placeholder="ingredient" />
      <input type="text" v-model="ingredient[1]" id="ingredient" placeholder="ingredient" />
      <a href="#" title="Supprimer cette tâche" @click.prevent="supprimerIngredient(index)">❌</a>
      <span v-if="$v.recipe.ingredient.$dirty">Le champs est requis</span>
    </div>

<button class="button btn-primary" @click.prevent="ajouterIngredient">Ajouter un ingrédient</button>

    <div class="form-group" v-for="(etape, index) in recipe.etapes" :recipe="etape" :key="index">
      <label for="etapes">etape :</label>
      <input type="text" v-model="recipe.etapes[index]" id="etape" placeholder="etape" />
      <a href="#" title="Supprimer cette tâche" @click.prevent="supprimerEtape(index)">❌</a>
      <span v-if="$v.recipe.etape.$dirty">Le champs est requis</span>
    </div>
<button class="button btn-primary" @click.prevent="ajouterEtape">Ajouter un ingrédient</button>

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
          ingredients:[[""]],
          etapes: [""],
          tempsPreparation: null,
          photo: ""
        };
      }
    }
  },
  data : function(){
    return{
          maitre : "maitre",
          jedi : "jedi",
          padawan : "padawan"
    }
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
    ajouterIngredient: function(){
      this.recipe.ingredients.push([]);
    },
     ajouterEtape: function(){
      this.recipe.etapes.push([]);
    },
    supprimerIngredient : function(index) {
        this.recipe.ingredients.splice(index, 1);
    },
     supprimerEtape : function(index) {
        this.recipe.etapes.splice(index, 1);
    },
    onSubmit: function() {
      if (this.$v.recipe.$invalid) return this.$v.recipe.$touch();
      this.$emit("send", this.recipe);
    },

  }
};
</script>

<style scoped>
.userform {
  margin: 2em 0;
}

.userform .form-group {
  margin-bottom: 1.2em;
}

.userform label {
  display: inline-block;
  vertical-align: middle;
  min-width: 150px;
  text-align: right;
}
.userform input[type="radio"] + label {
  min-width: 0;
  text-align: left;
  cursor: pointer;
}

.userform input:not([type="radio"]) {
  min-width: 200px;
  vertical-align: middle;
}

.userform input ~ span {
  display: block;
  font-size: 0.8em;
  color: red;
}

.userform .input-error {
  border: 1px solid red;
}
</style>
