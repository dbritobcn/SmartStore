import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../../shared/components/header/header";

export const RootPage = () => (
  <>
    <Header/>
    <Outlet/>
  </>
)
