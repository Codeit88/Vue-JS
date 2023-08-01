const app=Vue.createApp({
   data(){
      return{
         template:'I am hunter',
         noir:[{name:'ALi' ,gender:'male',fav:true},
         {name:'ALia' ,gender:'female',fav:false},
         {name:'ALina' ,gender:'female',fav:true}],
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

 <style>
 body{
background-color: blue;
text-align: justify;
padding: 0%;
 }

li{
background-color: aliceblue;
}

.favis{
background-color: brown;
}
</style>
</head>
<body>

<div id="app">
<div v-if="showNoir">
<ul>
 <li v-for="key in noir" :class="{favis:key.fav}">
 <p>{{key.name}}</p>
 <p>{{key.gender}}</p>
 </li>
</ul>
</div>
