import MobileMenuContent from "./MobileMenuContent";
import styled from "styled-components";
import DarkModeToggle from "./darkModeToggle";
import "./Header.css";

const Title = styled.h1`
  color: #666;
  font-size: 30px;
`;
const Counter = styled.p`
  font-size: 30px;
`;
const Description = styled.p`
  font-size: 20px;
`;
const MenuIcon = styled.div`
  color: #fff;
  display: flex;
  gap: 10px;
`;

export default function Header(props: { time: number }): JSX.Element {
  return (
    <div className="header">
      <div className="header-container">
        <Title className="title-header">Welcome</Title>

        <MenuIcon>
          <MobileMenuContent />

          <DarkModeToggle />
        </MenuIcon>
      </div>

      <Description>
        Use this as a starting point to develop your own application :-)
      </Description>

      <Counter>{props.time}</Counter>
    </div>
  );
}
