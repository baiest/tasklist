<template>
    <div class = "m-8">
      <h1 class="titulo">Practica Task List</h1>
      <b-form @submit="Agregar" @reset="Reset">
      <b-form-input class ="nuevo" v-model="form.description" placeholder="Ingresa tu tarea nueva"></b-form-input>
      <b-button class="m-2 d-inline-block" type="submit" variant="primary">Crear</b-button>
      <b-button class="d-inline-block" type="reset" variant="danger">Cancel</b-button>
      </b-form>
      <b-form-checkbox
        size= "lg"
        class = "option"
        name= "checkbox"
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
      form: {
        description: '',
        realizada: false
      },
      tasks: []
    }
  },
  methods: {
    async Agregar(evt){
      evt.preventDefault();
      this.tasks.push(this.form);
      await axios.post('http://localhost:3000/nuevo', this.form)
        .then(res => console.log(res))
        .catch(()=> console.log('No post'));
      this.Reset(evt);

    },
    Reset(evt){
      evt.preventDefault();
      this.form = {
        description: '',
        realizada: false
      }
    }
  },
  created(){
    axios.get('http://localhost:3000/')
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
