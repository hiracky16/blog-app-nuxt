<template>
  <footer class="site-footer">
    <p class="copyright">@2019</p>
    <div class="bottom-line"></div>
  </footer>
</template>

<style>
footer {
  height: 70px;
  width: 100%;
  padding: 30px 0;
  position: relative; /*←絶対位置*/
  bottom: 0; /*下に固定*/
}
.site-footer {
  background: rgba(36, 45, 51);
  width: 100%;
  height: 70px;
}
.copyright {
  color: #fff;
  font-size: 12px;
  text-align: right;
  padding-top: 15px;
  padding-right: 15px;
}

.bottom-line {
  height: 10px;
  width: 100%;
  background-color: #faff00;
  z-index: 10000;
  bottom: 0;
  position: absolute;
}
</style>
