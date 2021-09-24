<template>
  <div class="container">
    <h2>ComponentTwo</h2>
    <p>{{ message }}</p>
    <button @click.prevent="deleteText" class="btn">delete</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("textModule");

export default {
  name: "ComponentTwo",
  computed: {
    ...mapGetters({
      message: "upperCaseText",
    }),
  },
  methods: {
    ...mapActions(["deleteText"]),
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 48%;
  height: 20rem;
  padding: 2rem;

  background-color: rgb(211, 248, 219);
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