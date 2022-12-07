import {Header} from "../../components/header/header";
import React from "react";
import {Outlet} from "react-router-dom";

export const RootPage = () => (
  <div className="pb-5">
    <Header />
    <Outlet/>
  </div>
)
