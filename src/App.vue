<template>
  <div id="app">
    <v-main/>
  </div>
</template>

<script>

import vMain from './components/v-main'


export default {
  name: 'App',
  components: {
   vMain
  }
}
</script>

<style>
#app {
 font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

textarea {
    resize: none; 
} 
</style>
