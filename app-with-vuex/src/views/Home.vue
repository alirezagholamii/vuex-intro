<template>
  <div class="home">
    <component-one  />
    <component-two  />
  </div>
</template>

<script>
import ComponentOne from "@/components/component-one.vue";
import ComponentTwo from "@/components/component-two.vue";


export default {
  name: "Home",
  components: {
    "component-one": ComponentOne,
    "component-two": ComponentTwo,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
