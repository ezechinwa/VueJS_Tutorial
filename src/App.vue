<template>
  <div >

    <ul class="nav justify-content-between bg-dark text-white">
      <li class="nav-item">
        <router-link to="/login" class="nav-link text-white">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/home" class="nav-link text-white">Home</router-link>
      </li>
    </ul>

    <div class="container mt-5">

        <router-view v-slot="slotProps" >
          <transition name="route"  mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>


    </div>



  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
    }
  },
  methods:{

  }


}
</script>

<style>
div{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:hover,
a:active,
a.router-link-active{
  color:#f1a80a;
  border-color: #f1a80a;
  background-color: darkgray;
}


.route-enter-from{
opacity: 0;
}

.route-enter-active
{
  transition: all 0.9s ease-in;
}

.route-enter-to{
  opacity: 1;
}

.route-leave-from{
  opacity: 1;
}

.route-leave-active
{
  transition: all 0.9s ease-out;
}

.route-leave-to{
  opacity: 0;
}

</style>
