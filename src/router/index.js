import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DoctorForm from "@/components/DoctorForm.vue";
import PatientForm from "@/components/PatientForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "doctor",
    children: [
      {
        path: "/doctor",
        name: "doctor",
        component: DoctorForm,
      },
      {
        path: "/patient",
        name: "patient",
        component: PatientForm,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
