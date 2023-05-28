<template>
  <component :is="icon" class="icon" />
</template>

<script setup>
// IMPORT NECESSARY
import { defineAsyncComponent } from "vue";
// VARIABLE NECESSARY
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
// DATA
const icon = defineAsyncComponent(() =>
  import(`../../assets/svg/${props.name}.svg`)
);
</script>

<style lang="scss" scoped>
.icon {
  display: block;
  width: 25px;
  height: 25px;
  margin: 3px;
  padding: 5px;
  &.initial {
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
  }
}
</style>
