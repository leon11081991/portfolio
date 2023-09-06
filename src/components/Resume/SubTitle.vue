<template>
  <h2 class="subtitle">{{ text }}</h2>
</template>

<script>
export default {
  Name: "SubTitle",

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h2.subtitle {
  font-family: PingFang TC;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.5px;
}
</style>
