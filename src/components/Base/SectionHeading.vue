<template>
  <div class="section-heading">
    <h3 class="section-heading-txt">{{ heading }}</h3>
  </div>
</template>

<script>
export default {
  name: "SectionHeading",
  props: ["heading"],
};
</script>

<style lang="scss" scoped>
.section-heading {
  margin-bottom: 1rem;
  &-txt {
    @extend .txt-headline4;
  }
}
</style>
