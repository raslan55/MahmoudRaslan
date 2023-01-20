<template>
  <section class="Services text-center" id="Services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="Heading">
            <h1>Services</h1>
            <p>You can find your professional need service .</p>
          </div>
        </div>
        <div class="col-lg-4" v-for="card in Cards" :key="card.id">
          <div class="card single-service">
            <div class="card-body">
              <div class="card-num">
                <span class="num">{{ card.id }} </span>
              </div>
              <div class="single-icon">
                <img
                  :src="require(`@/${card.CardImg}`)"
                  alt="single-icon"
                  class="img-fluid"
                />
              </div>
              <div class="single-text">
                <h6>{{ card.Text }}</h6>
                <p>
                  {{ card.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardsData from "/data/data.json";
export default {
  name: "Services",
  data() {
    return { Cards: CardsData };
  },
};
</script>

<style scoped>
.Services {
  padding: 120px 0 130px;
  background-color: #fbfbfb;
}
.Heading p {
  margin-bottom: 60px;
}
.single-icon {
  display: flex;
  justify-content: center;
}
.single-icon img {
  width: 70px;
  margin-bottom: 15px;
}

.Services h2 {
  color: var(--Main-color);
  text-transform: capitalize;
  font-weight: bold;
}

.Services .num {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--Main-color);
  color: #fff;
  font-size: 1.5rem;
  width: 67px;
  height: 62px;
  line-height: 2;

  text-align: center;
  border-radius: 0px 0px 40px 0px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.single-service svg {
  color: var(--Main-color);
  font-size: 2.3rem;
  margin: 10px;
  margin-bottom: 20px;
}

.Services .single-service {
  border: none;
  transition: all 0.3s;
  padding: 20px 20px;

  z-index: 2;
}

.Services .single-service:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.single-service h6 {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 1.6rem;
  color: var(--Main-color);
}

.single-service p {
  font-size: 1rem;
}

.Services h1 {
  position: relative;
  text-transform: capitalize;
  font-weight: 700;
  color: #32333c;
  padding-bottom: 20px;
  margin-top: 0;
  margin-bottom: 35px;
  transition: all 0.3s;
}
.Services h1::before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 45%;
  width: 100px;
  height: 4px;
  background: #feb633;
  transition: all 0.3s;
}
</style>
