<template>
  <div>
    <div>
      <button class="button btn-primary" @click.prevent="addRow">Ajouter une étape</button>
    </div>
    <div class="form-group" v-for="(etape, index) in recipe.etapes" :recipe="etape" :key="index">
      <label for="etapes">etape :</label>
      <input type="text" v-model="recipe.etapes[index]" id="etape" placeholder="etape" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Etape",
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {
          etapes: [Array, String]
        };
      }
    }
  },
  methods: {
    addRow: function() {
      this.recipe.etapes.push({});
    },

    onSubmit: function() {
      if (this.$v.recipe.$invalid) return this.$v.recipe.$touch();
      this.$emit("send", this.recipe);
    }
  }
};
</script>

<style scoped>
.recipeform {
  margin: 2em 0;
}

.recipeform .form-group {
  margin-bottom: 1.2em;
}

.recipeform label {
  display: inline-block;
  vertical-align: middle;
  min-width: 150px;
  text-align: right;
}
.recipeform input[type="radio"] + label {
  min-width: 0;
  text-align: left;
  cursor: pointer;
}

.recipeform input:not([type="radio"]) {
  min-width: 200px;
  vertical-align: middle;
}

.recipeform input ~ span {
  display: block;
  font-size: 0.8em;
  color: red;
}

.recipeform .input-error {
  border: 1px solid red;
}
</style>
