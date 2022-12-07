import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../../shared/components/header/header";

export const RootPage = () => (
  <div className="pb-5">
    <Header />
    <Outlet/>
  </div>
)
