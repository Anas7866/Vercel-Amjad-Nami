import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";

const delayTime = 2000;

const routes = [
  // {
  //   path: "/",
  //   component: lazy(() =>
  //     fakeDelay(delayTime)(import("../Pages/AdminPages/DashBoard/Dashboard.js"))
  //   ),
  //   exact: true,
  //   role: [1, 3, 4, 5],
  // },
  {
    path: "/",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/AdminPages/DashBoard/Dashboard.js"))),
    ispublic: true,
    exact: true,
  },
  {
    path: "/login",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/Login"))),
    ispublic: true,
    exact: true,
  },
  {
    path: "/signup",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/SignUp"))),
    ispublic: true,
    exact: true,
  },
  {
    path: "/congrats",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/Congrats/Congrats.jsx"))),
    ispublic: true,
    exact: true,
  },
  // { path: '/*', component: Error404, role: [1, 3, 4, 5] }
];

export default routes;
