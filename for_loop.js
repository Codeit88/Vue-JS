const app=Vue.createApp({
   data(){
      return{
         template:'I am hunter',
         noir:[{name:'ALi' ,gender:'male'},
         {name:'ALia' ,gender:'female'},
         {name:'ALina' ,gender:'female'}],
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

<div id="app">
<div v-if="showNoir">
    <ul>
        <li v-for="key in noir">
        <p>{{key.name}}</p>
        <p>{{key.gender}}</p>
        </li>
    </ul>
</div>