<template>
  <div>
    <header>
      <div class="line"></div>
      <nav class="gnav">
        <a href="/">
          <img src="../static/title.png" />
        </a>
        <h1 class="site-logo">
          <a href="/">
            Web メディア研究所
          </a>
        </h1>
        <ul>
          <li>
            <a href="#">
              <img class="sns" src="../static/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img class="sns" src="../static/tiktok.png" />
            </a>
          </li>
        </ul>
        <div class="nav__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  </div>
</template>

<style>
header {
  background: rgba(36, 45, 51);
  width: 100%;
  height: 80px;
  z-index: 9999;
  /* box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); */
  left: 0px;
  top: 0px;
  position: fixed;
  transition: 0.5s;
  justify-content: space-between;
}
a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  text-decoration: none;
}
nav {
  color: #fff;
  max-width: 1180px;
  height: 70px;
  margin: 0px auto;
  display: -webkit-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
}

h1 {
  margin-left: 10px;
  margin-right: auto;
  font-size: 24px;
}

h1 a {
  color: #fff;
}

ul {
  display: -webkit-flex;
  display: flex;
  list-style: none;
}

ul li a {
  color: #fff;
  margin: 0px 10px;
  padding: 10px;
}
.nav__icon,
.nav__icon span {
  display: none;
}

.sns {
  width: 35px;
  height: 35px;
}

.line {
  height: 10px;
  width: 100%;
  background-color: #faff00;
  z-index: 10000;
}
</style>
