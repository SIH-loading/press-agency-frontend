"use client";

import React from "react";
import NavbarPress from "@/components/PressAgency/navbar";

export default function Layout(props) {
  return (
    <>
      <NavbarPress />
      <div>{props.children}</div>
    </>
  );
}
