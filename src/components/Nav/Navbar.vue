<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#Home">M.</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon"> <font-awesome-icon icon="fa-solid fa-bars" /></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              @click="activeSection = 'Home'"
              :class="[activeSection === 'Home' ? 'active' : '']"
              class="nav-link"
              aria-current="page"
              href="#Home"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              @click="activeSection = 'About'"
              :class="[activeSection === 'About' ? 'active' : '']"
              class="nav-link"
              href="#about"
              >About Me
            </a>
          </li>
          <li class="nav-item">
            <a
              @click="activeSection = 'Services'"
              :class="[activeSection === 'Services' ? 'active' : '']"
              class="nav-link"
              href="#Services"
              >Services
            </a>
          </li>
          <li class="nav-item">
            <a
              @click="activeSection = 'Portfolio'"
              :class="[activeSection === 'Portfolio' ? 'active' : '']"
              class="nav-link"
              href="#Portfolio"
              >Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a
              @click="activeSection = 'Contact'"
              :class="[activeSection === 'Contact' ? 'active' : '']"
              class="nav-link"
              href="#Contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MY_Nav",
  data() {
    return {
      activeSection: "Home",
    };
  },
};
</script>

<style scoped>
.nav-item .nav-link {
  color: var(--back-color);
  font-weight: 400;
  padding: 20px 10px;
  display: block;
  font-size: 1rem;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  text-transform: capitalize;
  position: relative;
  margin: 0 23px;
  font-family: var(--Main-font);
}
.navbar-brand {
  color: var(--Main-color);
  text-transform: capitalize;
  font-size: 50px;
}
.navbar-brand span {
  color: var(--Main-color);
  text-transform: capitalize;
}

.icon svg {
  color: var(--text-color);
  font-size: 1.5rem;
}
.navbar-toggler {
  border: 0px;
}
.navbar-toggler:focus {
  box-shadow: var(--shadow);
}

.nav-item .nav-link:hover,
.navbar-brand:hover {
  color: var(--Main-color);
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.sticky-top {
  background-color: #fff;
  -webkit-box-shadow: 3px 0px 5px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 0px 5px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 0px 5px -4px rgba(0, 0, 0, 0.75);
}
.active {
  color: var(--Main-color) !important;
  border-bottom: 2px solid;
}
</style>
