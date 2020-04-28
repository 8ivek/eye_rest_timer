<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button.start_timer {
  height: 2.2em;
  margin: 1em;
  font-size: 2em;
  border-radius: 0.3em;
  padding: 0 1em 0 1em;
  background: linear-gradient(to right, #016326, #687461);
  color: white;
}

button.stop_timer {
  height: 2.2em;
  margin: 1em;
  font-size: 2em;
  border-radius: 0.3em;
  padding: 0 1em 0 1em;
  background: linear-gradient(to right, #360000, #ac7c7c);
  color: white;
}

button:focus {
  outline: none;
}

input {
  display: inline-block;
  box-sizing: border-box;
  width: 30%;
  height: 1.8em;
  padding: 0.5em;
  margin: 0.2em;
  font: 0.8em 'Avenir', Helvetica, sans-serif;
}
</style>
