<template>
  <footer class="site-footer">
    <p class="copyright">@2019</p>
    <div class="bottom-line"></div>
  </footer>
</template>

<style>
.site-footer {
  background: rgba(36, 45, 51);
  width: 100%;
  height: 50px;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
}
.copyright {
  color: #fff;
  font-size: 12px;
  text-align: right;
  vertical-align: middle;
  padding-top: 5px;
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
