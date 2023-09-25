<template>
  <div class="waitlist-wrapper">
    <div class="container">
      <h1 class="text-center fs-2 fw-bold text-white mt-3">
        Our waiting list is here
      </h1>

      <div class="d-flex align-items-center justify-content-center mt-3">
        <div class="count-down-wrapper d-flex">
          <div>
            <p class="hour fw-bold text-white">00<span>:</span></p>
          </div>
          <div>
            <p class="minute fw-bold text-white">00<span>:</span></p>
          </div>
          <div><p class="second fw-bold text-white">00</p></div>
        </div>
      </div>

      <div class="mx-auto">
        <WaitlistImage />
      </div>

      <div class="mt-3">
        <h4 class="text-center text-white">
          Be the First to Experience Health & Wellness Like Never Before!
        </h4>
        <p class="text-center text-white">
          Don't miss out—reserve your spot today and be part of our health
          revolution! 🚀
        </p>
        <button class="btn mt-3">Join waitlist now</button>
      </div>
    </div>
  </div>
</template>

<script>
import WaitlistImage from "@/components/WaitlistImage.vue";

export default {
  name: "HomeView",
  components: {
    WaitlistImage,
  },
};
</script>

<style>
/* body {
  background: #232835;
} */
</style>
