<template>
  <!-- start contact me -->
  <section class="contact" id="Contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="info">
            <h3>My contact info</h3>
            <a href="tel:01127990329 " target="-blank">
              <div class="contact-info">
                <font-awesome-icon icon="fa-solid fa-phone" />
                <span> 01127990329 </span>
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=:mahmoudraslan180@gmail.com"
              target="-blank"
            >
              <div class="contact-info">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                <span> Mahmoudraslan180@gmail.com </span>
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=01009335998"
              target="-blank"
            >
              <div class="contact-info">
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
                <span> Whatsapp Message </span>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-6">
          <h3 class="form">contact ME</h3>
          <form class="form">
            <div class="form-group">
              <input
                type="name"
                class="form-control"
                id="Name"
                aria-describedby="Name"
                placeholder="Your Name *"
                required
              />
              <input
                type="email"
                class="form-control"
                id="Email"
                aria-describedby="Email"
                placeholder="Your Email *"
                required
              />
              <textarea
                class="form-control"
                name="massage"
                id="massage"
                cols="20"
                rows="4 "
                placeholder="Your Message *"
                required
              ></textarea>
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  padding: 120px 0 130px;
  background-color: #fbfbfb;
}
.contact h2 {
  color: #fff;
}
.contact-info {
  padding: 9px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
  background-color: #fff;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 10px;
}

.contact-info span {
  margin-left: 25px;
  font-size: 1rem;
  cursor: pointer;
  color: var(--Main-color);
}

.contact .info a:hover {
  text-decoration: none;
}

.contact-info:hover {
  color: #fff;
  background-color: var(--Main-color);
  transition: 0.3s all ease-in-out;
}
.contact-info:hover span {
  color: #fff;
}
.contact-info:hover a {
  color: #fff;
}

.contact-info:hover svg {
  color: #fff;
}

.contact-info a {
  text-decoration: none;
  color: var(--Main-color);
}

.contact-info svg {
  color: var(--Main-color);
  height: 20px;
  display: inline-block;
  padding: 10px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  transition: all 0.5s;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
}

.svg-inline--fa {
  vertical-align: -1em;
}
.contact h3 {
  color: var(--Main-color);
  padding: 20px;
  text-transform: capitalize;
  font-weight: bold;
}

.form-control {
  display: block;
  width: 85%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  border: 0px;
  margin-top: 11px;
  transition: all 0.5s ease;
}

.form textarea {
  height: auto;
}
.form-control:focus,
.form-control:hover {
  border-color: var(--Main-color);
  transition: all 0.5s ease;
}

.form-control::placeholder {
  text-align: center;
  text-transform: capitalize;
  font-family: var(--Main-font);
}

.form .btn-primary {
  margin-top: 11px;
  text-transform: capitalize;
  background-color: var(--Main-color);
  border: 0px;
}
.btn-primary:hover {
  background-color: var(--Main-color) !important;
}
.btn-primary:active {
  background-color: var(--Main-color) !important;
}
</style>
