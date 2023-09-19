<template>
  <div class="text-center">
    <button class="btn btn--sm">
      <slot> </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Btn",
  props: {
    name: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped></style>
