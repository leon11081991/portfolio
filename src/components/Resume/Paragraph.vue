<template>
  <p>
    <span>{{ mainText }}</span>
    <span class="separate" v-if="subText">/</span>
    <span>{{ subText }}</span>
  </p>
</template>

<script>
export default {
  Name: "Paragraph",
  props: {
    mainText: {
      type: [String, Number],
      required: true,
    },
    subText: {
      type: [String, Number],
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 1px;
  color: $gray01;
}

.separate {
  display: inline-block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
