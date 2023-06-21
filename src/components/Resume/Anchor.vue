<template>
  <a :href="link" target="_blank">{{ text }}</a>
</template>

<script>
export default {
  Name: "Anchor",

  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  line-height: 22px;
  margin: 0;
  font-size: 15px;
  color: #303030;
}
</style>
