const app=Vue.createApp({
   data(){
      return{
         template:'I am hunter',
         noir:'Good to go',
         age: 15,
      };
   },
   methods:{
      incAge(){
         return this.age++;
      }
   }
 });
 app.mount('#app');


 ---/////////////////////html


<button v-on:click='incAge()'>Increase Age</button>