<template>
  <footer class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p>Copyright © 2023. All Rights Reserved to Mahmoud Raslan</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Myfooter",
};
</script>

<style scoped>
footer {
  background-color: var(--Main-color);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

footer p {
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  line-height: 2;
  margin-top: 10px;
}
</style>
