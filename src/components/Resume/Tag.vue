<template>
  <span class="person-tag">{{ tag }}</span>
</template>
<script>
export default {
  name: "Tag",
  props: {
    tag: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.person-tag {
  padding: 4px 10px;
  display: inline-block;
  border-radius: 50px;
  background: $secondary02;
}
</style>
