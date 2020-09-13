<template>
  <div class = "cont">
  <div class="titulo">Practica Task List</div>
  <b-form-input class ="nuevo" v-model="text" placeholder="Ingresa tu tarea nueva"></b-form-input>
  <b-button class="m-4" type="submit" variant="primary">Crear</b-button>
  <b-form-checkbox
    size= "lg"
    class = "option"
    id="checkbox-1"
    v-model= "select"
    name= "checkbox-1"
    unchecked-value="not_accepted"
    :key="task.id"
    v-for="task in tasks">{{task.description}}</b-form-checkbox>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      tasks: []
    }
  },
  created(){
    axios.get('http://localhost:3000')
    .then(res => this.tasks = res.data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titulo{
  font-size: 25px;
}
.nuevo{
  display: inline-block;
  width: 60%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
