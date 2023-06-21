<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  Name: "Paragraph",

  props: {
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  position: relative;
  line-height: 22px;
  margin: 0 0 0.3em 1em;
  font-size: 15px;
  color: #1a1a1a;
  &::after {
    content: "-";
    display: inline-block;
    position: absolute;
    top: 0;
    left: -1em;
  }
}
</style>
