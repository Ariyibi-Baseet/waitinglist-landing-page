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

      <div class="mt-3 content">
        <h4 class="text-center text-white">
          Be the First to Experience Health & Wellness Like Never Before!
        </h4>
        <p class="text-center text-white">
          Don't miss out—reserve your spot today and be part of our health
          revolution! 🚀
        </p>
        <button
          class="btn mt-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Join waitlist now
        </button>
      </div>
    </div>
  </div>

  <!-- MODAL BOX FOR FORMDATA -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Choose Your Status
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <router-link class="dct-btn-wrapper" :to="{ name: 'doctor' }"
            ><button class="doctor-btn">Doctor</button></router-link
          >
          <router-link :to="{ name: 'patient' }"
            ><button class="patient-btn ms-3">Patient</button></router-link
          >

          <div class="mt-5">
            <router-view></router-view>
          </div>
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div> -->
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
