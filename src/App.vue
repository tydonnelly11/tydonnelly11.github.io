

<template>
  <div class="container">
    <homepage></homepage>
  </div>
</template>

<script>
import homepage from './components/homepage.vue';
export default {
  name: "App",
  components: {
    homepage,
  },
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--color-bg);
}
</style>
