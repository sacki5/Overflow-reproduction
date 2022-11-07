<script setup></script>

<template>
  <Story>
    <div class="container">
      <div class="popup">Visible in dev but not in build and preview</div>
    </div>
  </Story>
</template>

<style>
.container {
  width: 100px;
  height: 50px;
  background-color: green;
  position: relative;
}
.popup {
  position: absolute;
  top: 50px;
  background: yellow;
}
</style>
