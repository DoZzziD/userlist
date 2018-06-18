<template>
  <section class="users">
    <h1> Users </h1>

      <form v-on:submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="Enter name here" />
        <br />
        <input type="text" v-model="newUser.email" placeholder="Enter email address" />
        <br />
        <input type="submit" value="Submit" />
      </form>

    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" />
        <span :class="{contacted: user.contacted}"> 
          {{ user.name }}: {{ user.email }} 
          </span>
      </li>
    </ul>
  </section>
</template>

<script src="./users.js">
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
li {
  text-align: left;
  list-style: none;
}
</style>
