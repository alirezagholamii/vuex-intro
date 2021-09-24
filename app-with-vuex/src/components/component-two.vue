<template>
  <div class="container">
    <h2>ComponentTwo</h2>
    <p>{{ message }}</p>
    <button @click.prevent="deleteText" class="btn">delete</button>
  </div>
</template>

<script>
import {
  mapGetters,
  //  mapMutations,
  mapActions,
} from "vuex";

export default {
  name: "ComponentTwo",
  computed: {
    // message() {
    //   return this.$store.state.text;
    // },
    ...mapGetters({
      message: "upperCaseText",
    }),
  },
  methods: {
    // 1
    // deleteText() {
    //   const newText = this.message.slice(0, -1);
    //   this.$store.commit("deleteText", newText);
    // },
    // 2
    // ...mapMutations(["deleteText"]),
    // 3
    ...mapActions(["deleteText"]),
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 48%;
  height: 20rem;
  padding: 2rem;

  background-color: rgb(221, 241, 209);
}
.btn {
  display: inline-block;
  padding: 0.2em 1.45em;
  margin: 0.1em;
  border: 0.15em solid #cccccc;
  text-decoration: none;
  font-weight: 400;
  color: #000000;
  background-color: #cccccc;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }
}
</style>