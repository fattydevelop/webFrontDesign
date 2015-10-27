<style>
</style>
<template>
<carousel class="carousel">
  <slider>
    <img src="http://placehold.it/1200x400?text=one">
      <div class="carousel-caption">
       ...
     </div>
  </slider>
  <slider>
    <img src="http://placehold.it/1200x400?text=two">
  </slider>
  <slider>
    <img src="http://placehold.it/1200x400?text=three">
  </slider>
</carousel>
</template>

<script>
    module.exports = {
        components :{
            carousel:require('vue-strap').carousel,
            slider:require('vue-strap').slider
        }
    }
</script>