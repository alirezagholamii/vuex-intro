<template>
  <div class="container">
    <p>{{ message }}</p>
    <button @click.prevent="deleteText" class="btn">delete</button>
  </div>
</template>

<script>
export default {
  name: "ComponentOne",
  props: {
    msg: String,
  },
  data() {
    return {
      message: this.msg,
    };
  },
  watch: {
    msg(value) {
      this.message = value;
    },
  },
  methods: {
    deleteText() {
      this.message = this.message.slice(0, -1);
      this.$emit("deleteText", this.message);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 48%;
  height: 20rem;
  padding: 2rem;

  background-color: azure;
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
