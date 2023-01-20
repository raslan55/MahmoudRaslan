<template>
  <section class="Main" id="Home">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="My-title">
            <h1>i'm Mahmoud</h1>
            <h4>Junior Front-End | UI Developer</h4>
            <a
              class="btn"
              href="https://www.linkedin.com/in/mahmoud-raslan-382a29157/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="My-img">
            <img
              class="img-fluid"
              src="@/assets/images/hero_img.png"
              alt="My personal picture"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "My_Main",

  components: {},
};
</script>

<style scoped>
.Main {
  background-color: #fbfbfb;
}
.My-title {
  padding-top: 120px;
}
.My-title {
  color: var(--second-color);
  text-transform: capitalize;
}

.My-title .btn {
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
.My-title .btn:hover {
  border: 2px solid var(--Main-color);
  transition: 0.6s ease-in-out;
  background-color: var(--white);
  color: var(--Main-color);
  transition: all 0.3s;
}
Button a {
  color: var(--white);
}
.btn:hover a {
  color: var(--Main-color);
}
</style>
