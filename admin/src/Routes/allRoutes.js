import React from "react";
import { Redirect } from "react-router-dom";

//pages
import DashboardAnalytics from "../pages/DashboardAnalytics";
// import Starter from "../pages/Pages/Starter/Starter";

//login
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";

//users management
import UserProfile from "../pages/Authentication/user-profile";
import Maintenance from "../pages/Maintenance";
import ShBet from "../pages/ShBet/CreateShBet";

import Users from "../pages/Authentication/Users";
import Actions from "../pages/Authentication/Action";
import Roles from "../pages/Authentication/Role";
import RoleActions from "../pages/Authentication/RoleAction";

import F8Bet from "../pages/F8Bet";
import Jun88 from "../pages/Jun88";
import Bet789 from "../pages/789Bet";
import Jun41 from "../pages/Jun41";
import New88 from "../pages/New88";

const authProtectedRoutes = [
  // { path: "/pages-starter", component: Starter },
  { path: "/dashboard-analytics", component: DashboardAnalytics },
  { path: "/profile", component: UserProfile },
  { path: "/sh-bet/:id", component: ShBet },
  { path: "/users", component: Users },
  { path: "/roles", component: Roles },
  { path: "/actions", component: Actions },
  { path: "/roleActions", component: RoleActions },
  { path: "/f8-bet/:id", component: F8Bet },
  { path: "/jun88/:id", component: Jun88 },
  { path: "/789bet/:id", component: Bet789 },
  { path: "/jun41/:id", component: Jun41 },
  { path: "/new88/:id", component: New88 },

  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/users" />,
  },
  {
    path: "/maintenance",
    component: Maintenance,
  },

];

const publicRoutes = [
  // Authentication Page
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },

 
  // Users management
];

export { authProtectedRoutes, publicRoutes };

