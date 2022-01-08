<template>
<div>
  <h1>Welcome</h1>
   <p>Counter = {{ get_counter }}</p>


  <div class=" d-flex justify-content-center align-items-center">
    <div class=" spinner-border text-primary mb-2 mt-2" v-if="get_loading" role="status">
      <span class="sr-only"></span>
    </div>
  </div>


   <button class="btn btn-primary" @click="addCounter" >Increase counter </button>


</div>
</template>

<script>
import  {mapGetters,mapActions} from 'vuex';
export default {
  name: "Welcome.vue",
  computed: {
    ...mapGetters(['get_counter','get_loading'])
  },
  methods:{
    // addCounter(){
    //   this.$store.dispatch('_addCounter',{value : 10});
    // }
    ...mapActions(['_addCounter'])
  },

}
</script>

<style scoped>


</style>
