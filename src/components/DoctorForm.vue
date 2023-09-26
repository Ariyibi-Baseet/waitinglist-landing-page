<template>
  <div>
    <div class="mb-3">
      <div class="row">
        <div class="col">
          <label class="form-label">First Name</label>
          <input type="text" class="form-control shadow-none" placeholder="" />
        </div>
        <div class="col">
          <label class="form-label">Last Name</label>
          <input type="text" class="form-control shadow-none" placeholder="" />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <div class="row">
        <div class="col">
          <label class="form-label">Doctor Specialty</label>
          <input type="text" class="form-control shadow-none" placeholder="" />
        </div>
        <div class="col">
          <label class="form-label">Phone Number</label>
          <input type="text" class="form-control shadow-none" placeholder="" />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Email Address</label>
      <input type="text" class="form-control shadow-none" placeholder="" />
    </div>
    <button class="submit-btn mt-3 w-100" data-bs-dismiss="modal">
      Join waitlist
    </button>
  </div>
</template>

<script>
export default {
  name: "DoctorForm",
};
</script>
