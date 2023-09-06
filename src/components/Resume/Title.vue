<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  Name: "Title",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: PingFang TC;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.5px;
}
</style>
