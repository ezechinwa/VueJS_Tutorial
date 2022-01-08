<template>
  <div class="hello">
      <header>
        <h1>Vue Dynamic Styling</h1>
      </header>




    <section id="styling" class="uk-flex uk-flex-column uk-flex-center">
      <div  @click="is_clicked" :class="{'uk-background-primary': selected, 'text-white': selected  }"  class=" uk-card uk-card-default uk-card-body uk-margin uk-width-1-3 uk-align-center">Item 1</div>
      <div class="uk-card uk-card-default uk-card-body uk-margin uk-width-1-3 uk-align-center">Item 2</div>
      <div class="uk-card uk-card-default uk-card-body  uk-margin uk-width-1-3 uk-align-center">Item 3</div>
    </section>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      name:"Williams Chinwa",
      selected:false
    }
  },
  methods: {
    is_clicked(){
      this.selected= !this.selected
    }
  },
  watch: {
    name(){
      console.log("name changed "+ this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.text-white{
  color: #ffffff
}

.text-black{
  color: #000000;
}

#styling{
  border: antiquewhite;
  border-radius: 25px;
  box-shadow: black;

}
</style>
