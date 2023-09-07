

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
  background-color: black;
}
@font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/Montserrat-VariableFont_wght.ttf');
}
</style>
