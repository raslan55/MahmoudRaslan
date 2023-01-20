<template>
  <div>
    <MY_Nav />
    <My_Main />
    <About />
    <Services />
    <portfolio />
    <Contact />
    <Myfooter />
  </div>
</template>

<script>
import MY_Nav from "@/components/Nav/Navbar.vue";
import My_Main from "@/components/Main/Main.vue";
import About from "@/components/About/About.vue";
import portfolio from "@/components/Portfolio/portfolio.vue";
import Services from "@/components/MyServices/MyServices.vue";
import Contact from "@/components/Contact/Contact.vue";
import Myfooter from "@/components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    My_Main,
    About,
    portfolio,
    MY_Nav,
    Services,
    Contact,
    Myfooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap");

:root {
  --Main-font: "Poppins", sans-serif;
  --Main-color: #fbd214;
  --back-color: #081213;
  --text-color: #32333c;
  --second-color: #666;
  --shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  --section-back: #101112;
  --white: #fff;
}

* {
  margin: 0;
  padding: 0 !;
}

#app {
  font-family: var(--Main-font);
}
a {
  text-decoration: none !important;
}
li {
  list-style: none;
}

h1 {
  color: var(--text-color);
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
}
.btn {
  margin-top: 39px;
  width: 200px;
  height: 50px;
  text-align: center;
  font-size: 1.3rem;
  text-transform: capitalize;
  border: 0px;
  border-radius: 0px;
  background-color: var(--Main-color);
  color: #fff;
}
html {
  scroll-behavior: smooth;
}
</style>
