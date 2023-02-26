import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";

function MobileMenuContent(): JSX.Element {
  const [menuToggle, setMenuToggle] = useState(false);

  const menuToggleHandler = () => {
    setMenuToggle(!menuToggle);
  };
  const MobileMenu = styled.div`
    transition: right 0.4s ease-in-out;
    background-color: #fff;
    position: fixed;
    padding: 20px;
    width: 100%;
    height: 100%;
    top: 0;
    left: ${menuToggle ? "0" : "100%"};
  `;
  const ContainerMenuMobile = styled.div`
    @media (min-width: 992px) {
      display: none;
    }
  `;
  return (
    <>
      <ContainerMenuMobile>
        <BiMenu onClick={menuToggleHandler} />
      </ContainerMenuMobile>

      <MobileMenu>
        <BiMenu style={{ color: "#000" }} onClick={menuToggleHandler} />
      </MobileMenu>
    </>
  );
}

export default MobileMenuContent;
