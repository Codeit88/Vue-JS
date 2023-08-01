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
      },
      toggleFav(num){
         this.noirs[num].fav=true;
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

<div v-if="showNoir">
    <ul>
        <li v-for="(noir, index) in noirs" :key="index" :class="{favis:noir.fav}" @click="toggleFav(index)">
        <p>{{noir.name}}</p>
        <p>{{noir.gender}}</p>
        </li>
    </ul>
</div>
