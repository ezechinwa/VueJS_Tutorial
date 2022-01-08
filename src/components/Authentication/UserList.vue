<template>
    <div class="container m-4 p-2">

        <transition-group tag="ul" name="user-list">
          <li v-for="user in users" :key="user" @click="removeUser(user[0])"> {{user[1]}}</li>
        </transition-group>



      <div class="d-flex justify-content-between">
        <input type="text" name="username" v-model="username" placeholder="Add Username">
        <button class="btn btn-primary" @click="addUser"> Add User</button>
        <button class="btn btn-primary" @click="shuffle"> Shuffle</button>
      </div>

    </div>
</template>

<script>
export default {
  name: "UserList.vue",
  created() {
    var self = this
    setInterval(()=>{
      self.perform_shuffle(self.users)
    },2000)
  },
  data(){
    return {
      users: [[1,"williams"], [2,"chinwa"], [3,"tina"], [4,"micheal"]],
      username:"",
      keyrand:null
    }
  },
  methods:{
    generate_random(){
      var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      var result = ""
      var charactersLength = characters.length;

      for ( var i = 0; i < 5 ; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    perform_shuffle(array){

        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    },
    addUser(){

      let user = this.username;
       this.users.unshift([ this.generate_random(), user])
      this.username = ''
    },
    removeUser(id){
      this.users = this.users.filter(user=> user[0] !== id)
    },

    shuffle(){
      this.users = this.perform_shuffle(this.users)
      //this.users.shuffle();
    }

  },
  computed(){

  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
}
li{
  text-align: center;
  text-decoration: none;
  border: 1px solid grey;
  margin: 5px;
  padding: 5px;
}


.user-list-enter-from{
  opacity: 0;
  transform: translateX(30px);

}
.user-list-enter-active{
  transition: all 0.4s ease-in-out;

}
.user-list-enter-to{
  opacity: 1;
  transform: translateX(0px);
}

  .user-list-move{
    transition: transform 0.8s ease;
  }

.user-list-leave-from{
  opacity: 1;
  transform: translateX(0px);

}

.user-list-leave-active{
  transition: all 0.4s ease-in-out;

}
.user-list-leave-to{
  opacity: 0;
  transform: translateX(-30px);
}


</style>
