<template>
  <div>
    <div> <h1> Login View</h1></div>
    <transition>
      <div v-if="animate" class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cupiditate dolore quam vel veritatis. Ad adipisci deserunt, enim, est eum facilis hic ipsa laboriosam minus pariatur tenetur totam ullam?
      </div>
    </transition>

    <button class="btn btn-primary" @click="triggeranimation">Animate</button>

    <user-list></user-list>

  </div>


</template>

<script>
export default {
  name: "Login.vue",
  data(){
    return {
      animate: false
    }
  },
  methods:{
    triggeranimation(){
      console.log('trigggeranimation fired', this.animate)
        this.animate = !this.animate

    }
  }
}
</script>

<style scoped>

.animateobject{


}

.v-enter-from{
  opacity: 0;
  transform: translateY(0px);
}
.v-enter-active{
  transition: all 0.3s ease-in;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.v-leave-from{
  opacity: 1;
  transform: translateY(0px);
}
.v-leave-active{
  transition: all 0.3s ease-out;
}
.v-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>
