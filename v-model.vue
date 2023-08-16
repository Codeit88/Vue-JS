<template>
<bind></bind>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import bind from './components/bind.vue';
@Options({
  components: {
    bind,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.main-content {
  padding: 20px;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

</style>



/////////////////////////////////////////////////////////////////
<template>

<input type="text" placeholder="kuch to daal bawle" v-model="para">
    <h1>
        tum {{para}} ho
    </h1>
</template>

<script>
export default {
data(){
    return{
        para:'',
    }
}
}  

</script>
<style>

</style>