<template>
  <section class="Portfolio text-center" id="Portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>Latest Works</h1>

          <p>
            Skilled UI Developer with extensive experience in structuring,<br />
            developing and implementing interactive user interfaces
          </p>
        </div>
      </div>
      <ul class="tabs">
        <li
          @click="activeTap = '1'"
          :class="[activeTap === '1' ? 'active' : '']"
        >
          All
        </li>
        <li
          @click="activeTap = '2'"
          :class="[activeTap === '2' ? 'active' : '']"
        >
          Ui&UX
        </li>
        <li
          @click="activeTap = '3'"
          :class="[activeTap === '3' ? 'active' : '']"
        >
          Web Design
        </li>
        <li
          @click="activeTap = '4'"
          :class="[activeTap === '4' ? 'active' : '']"
        >
          Vue js
        </li>
      </ul>
      <div class="content-one" v-if="activeTap === '1'">
        <div class="row">
          <div
            class="Portfolio_Item col-sm-6 col-md-4"
            v-for="item in AllItems"
            :key="item.id"
          >
            <a :href="item.ItemLink" target="_blank">
              <img
                :src="require(`@/${item.ItemImg}`)"
                alt="Portfolio Item"
                class="img-fluid"
              />
            </a>
            <div class="item-overlay">
              <div class="item-text">
                <h3>{{ item.ItemText }}</h3>

                <div class="item-icons">
                  <div class="icon-container">
                    <a
                      :href="item.ItemLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <font-awesome-icon icon="fa-solid fa-link" />
                    </a>
                    <h4>Live preview</h4>
                  </div>
                  <div
                    class="icon-container"
                    v-if="item.ItemText === 'web design'"
                  >
                    <a
                      :href="item.ItemCode"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                    <h4>source code</h4>
                  </div>
                </div>
              </div>
              <div class="titel">
                <h4>{{ item.ItemTitle }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-two" v-if="activeTap === '2'">
        <div class="row">
          <div
            class="Portfolio_Item col-sm-6 col-md-4"
            v-for="item in UiItems"
            :key="item.id"
          >
            <a :href="item.ItemLink" target="_blank">
              <img
                :src="require(`@/${item.ItemImg}`)"
                alt="Portfolio Item"
                class="img-fluid"
              />
            </a>
            <div class="item-overlay">
              <div class="item-text">
                <h3>{{ item.ItemText }}</h3>

                <div class="item-icons">
                  <div class="icon-container">
                    <a
                      :href="item.ItemLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <font-awesome-icon icon="fa-solid fa-link" />
                    </a>
                    <h4>Live preview</h4>
                  </div>
                </div>
              </div>
              <div class="titel">
                <h4>{{ item.ItemTitle }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-three" v-if="activeTap === '3'">
        <div class="row">
          <div
            class="Portfolio_Item col-sm-6 col-md-4"
            v-for="item in webItems"
            :key="item.id"
          >
            <a :href="item.ItemLink" target="_blank">
              <img
                :src="require(`@/${item.ItemImg}`)"
                alt="Portfolio Item"
                class="img-fluid"
              />
            </a>
            <div class="item-overlay">
              <div class="item-text">
                <h3>{{ item.ItemText }}</h3>

                <div class="item-icons">
                  <div class="icon-container">
                    <a
                      :href="item.ItemLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <font-awesome-icon icon="fa-solid fa-link" />
                    </a>
                    <h4>Live preview</h4>
                  </div>
                  <div class="icon-container">
                    <a
                      :href="item.ItemCode"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                    <h4>source code</h4>
                  </div>
                </div>
              </div>
              <div class="titel">
                <h4>{{ item.ItemTitle }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-four" v-if="activeTap === '4'">
        <div class="row">
          <div
            class="Portfolio_Item col-sm-6 col-md-4"
            v-for="item in vueItems"
            :key="item.id"
          >
            <a :href="item.ItemLink" target="_blank">
              <img
                :src="require(`@/${item.ItemImg}`)"
                alt="Portfolio Item"
                class="img-fluid"
              />
            </a>
            <div class="item-overlay">
              <div class="item-text">
                <h3>{{ item.ItemText }}</h3>

                <div class="item-icons">
                  <div class="icon-container">
                    <a
                      :href="item.ItemLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <font-awesome-icon icon="fa-solid fa-link" />
                    </a>
                    <h4>Live preview</h4>
                  </div>
                  <div class="icon-container">
                    <a
                      :href="item.ItemCode"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                    <h4>source code</h4>
                  </div>
                </div>
              </div>
              <div class="titel">
                <h4>{{ item.ItemTitle }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import portfolioAll from "/data/Portfolioall.json";
import portfolioUi from "/data/PortfolioUI.json";
import Portfolioweb from "/data/Portfolioweb.json";
import Portfoliovue from "/data/Portfoliovue.json";

export default {
  name: "portfolio",
  data() {
    return {
      activeTap: "1",
      AllItems: portfolioAll,
      UiItems: portfolioUi,
      webItems: Portfolioweb,
      vueItems: Portfoliovue,
    };
  },
};
</script>

<style scoped>
.Portfolio {
  padding: 120px 0 130px;
}
.Portfolio h1 {
  position: relative;
  text-transform: capitalize;
  font-weight: 700;
  color: #32333c;
  padding-bottom: 20px;
  margin-top: 0;
  margin-bottom: 35px;
  transition: all 0.3s;
}
.Portfolio p {
  padding: 20px;
}
.Portfolio h1::before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 45%;
  width: 100px;
  height: 4px;
  background: #feb633;
  transition: all 0.3s;
}
.active {
  color: var(--Main-color);
  border-bottom: 2px solid;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 4rem;
}

.tabs li {
  cursor: pointer;
  text-transform: capitalize;
  font-size: 1.2em;
}
.Portfolio img {
  height: 350px !important;
  width: 350px !important;
  padding: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.Portfolio_Item {
  position: relative !important;
}

.Portfolio .content {
  margin: 25px;
  text-transform: capitalize;
  background: var(--main-color);
  color: #fff;
  border: 0px;
  font-family: var(--main-font);
}

.Portfolio_Item:hover .item-overlay {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  opacity: 1;
}
.item-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.item-icons h4 {
  text-align: center;
  font-size: 1rem;
  color: #fff;
  padding: 7px;
  text-transform: capitalize;
}
.icon-container {
  border: 2px dotted #fff;
  border-radius: 5px;
}

.item-overlay {
  width: 80%;
  max-height: 250px;
  position: absolute;
  bottom: 0;
  left: 10%;
  text-align: center;
  top: 10%;
  right: 4px;
  background: rgb(251 210 20);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  opacity: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.item-overlay svg {
  height: 30px;
  width: 30px;
  text-align: center;
  font-size: 26px;
  margin: 5px 3px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.item-overlay .item-text {
  padding: 20px;
}

.item-overlay .titel {
  position: absolute;
  bottom: 2px;
  text-align: center;
  background: #fff;
  left: 0px;
  right: 0px;
}

.titel h4 {
  font-size: 1.2em;
  text-align: center;
  color: var(--Main-color);
  text-transform: uppercase;
}

.item-overlay h3 {
  line-height: 2;
  font-size: 24px;
  color: #ffff;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 5px;
  margin-bottom: 5px;
}
.item-overlay a {
  color: var(--white);
}
</style>
