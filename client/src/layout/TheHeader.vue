<template>
  <nav>
    <h1>Quran Duas</h1>
    <div>
      <img src="../assets/images/bismillah.png" alt="Bismillah" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  color: white;
  background-color: #114b5f;
  text-align: center;
}

h1 {
  margin: 0;
  padding-top: 10px;
  font-size: 1.4em;
}

div {
  width: 160px;
  height: 70px;
  margin: 0 auto;
}

img {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 768px) {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10em;
  }

  div {
    margin: 0;
  }
}
</style>
