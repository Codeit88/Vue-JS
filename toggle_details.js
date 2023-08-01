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
      },
      toggleNoir(){
       this.showNoir=!this.showNoir;
      }
   }
 });
 app.mount('#app');


 ---/////////////////////html

<div v-if="showNoir">
    <p>{{template}} - {{noir}} - {{age}}</p>
</div>

<button v-on:click="toggleNoir">
<div v-if=showNoir>Toggle Details</div>
<div v-if=!showNoir>Toggle Details</div>
</button>