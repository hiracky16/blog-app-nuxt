<template>
  <v-layout>
    AR
    <v-flex height="100%">
      <a-scene embedded>
        <a-sky></a-sky>
        <a-entity
          camera
          look-controls
          wasd-controls
          position="0 1 3"
          rotation="-15 0 0"
        ></a-entity>
        <a-box v-bind:color="color" opacity="0.75" visible="true"></a-box>
        <a-marker-camera preset="hiro"></a-marker-camera>
      </a-scene>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js'
        },
        {
          src: 'https://aframe.io/releases/0.9.1/aframe.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
