<template>
  <div class="home">
    <component-one :msg="msg" @deleteText="messageChanged" />
    <component-two :msg="msg" @deleteText="messageChanged" />
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
  data() {
    return {
      msg: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature`,
    };
  },
  methods: {
    messageChanged(value) {
      this.msg = value;
    },
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
