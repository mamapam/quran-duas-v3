<template>
  <header>
    <nav>
      <h1>Duas From the Quran</h1>
      <div>
        <img src="../../assets/images/bismillah.png" alt="Bismillah" />
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  /* height: 80px; */
  /* max-height: max-content; */
  margin: 0px;
  /* padding-top: 50px;
  padding-bottom: 50px; */
  background-color: #114b5f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

h1 {
  padding: 0;
  margin: 0;
  font-size: 2rem;
}

div {
  height: 110px;
}

img {
  height: 100%;
}

@media only screen and (min-width: 768px) {
  header,
  nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
