import styled from "styled-components";
import { useState, useEffect } from "react";
import { SideMenuBox } from "../components/sideMenu/SideMenuBox";

export const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  return (
    <>
      <button onClick={() => setMenuOpen(menuOpen ? false : true)}>
        사이드메뉴바입니다. <span>on</span> / <span>off</span>
      </button>
      <SideMenuBox menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};
