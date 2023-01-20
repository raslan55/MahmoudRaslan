<template>
  <section class="About" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="heading"><h2>About Me</h2></div>
        </div>
        <div class="col-lg-8">
          <div class="about-content">
            <p>
              Highly talented UI Developer with a good sense of user needs,
              preferences, and performance requirements, with extensive
              experience in structuring, developing and implementing interactive
              user interfaces, <br />
              proficiency in HTML, JavaScript, and CSS, as well as UI &UX 🎨👨‍💻
            </p>
            <div class="social">
              <ul>
                <li class="social-link">
                  <a
                    href="https://www.linkedin.com/in/mahmoud-raslan-382a29157/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="social-link">
                  <a
                    href="https://github.com/raslan55"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <font-awesome-icon icon="fa-brands fa-github"
                  /></a>
                </li>
                <li class="social-link">
                  <a
                    href="https://api.whatsapp.com/send?phone=01009335998"
                    target="
                      _blank"
                  >
                    <font-awesome-icon icon="fa-brands fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.About {
  padding: 120px 0 130px;
}
.About h2 {
  color: var(--text-color);
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 600;
}
.heading {
  position: relative;
  margin-top: 95px;
}
.heading h2::before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100px;
  height: 4px;
  background: #feb633;
  transition: all 0.3s;
}
.About .btn {
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
  margin-left: 20px;
}
.About .btn-border {
  margin-top: 39px;
  width: 200px;
  height: 50px;
  text-align: center;
  font-size: 1.3rem;
  text-transform: capitalize;
  border: 2px solid var(--Main-color);
  color: var(--Main-color);
  background: transparent;
  margin-left: 20px;
}
.About .btn-border:hover {
  background-color: var(--Main-color);
  color: var(--white);
}
.About .btn:hover {
  border: 2px solid var(--Main-color);
  transition: 0.6s ease-in-out;
  background-color: var(--white);
  color: var(--Main-color);
}
.about-content p {
  line-height: 2.5;
  color: var(--second-color);
}

.social ul {
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 0px;
}
.social ul li {
  margin-left: 17px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: relative;
  text-align: center;
}
.social ul li:hover {
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
  transition: all 0.5s;
}
.social-link svg {
  display: var(--fa-display, inline-block);
  height: 2.5em;
  overflow: visible;
  vertical-align: -2.125em;
  color: var(--Main-color);
}
</style>
