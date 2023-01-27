import styled from "styled-components";

export const Darkmode = ({ setisDark }) => {
  return (
    <DarkmodeToggle>
      <input type="checkbox" id="toggle" />
      <label
        onClick={() => setisDark((prev) => (prev ? false : true))}
        htmlFor="toggle"
        className="toggleSwitch"
      >
        <span className="toggleButton"></span>
      </label>
    </DarkmodeToggle>
  );
};

const DarkmodeToggle = styled.span`
  position: fixed;
  top: 3vw;
  right: 7vw;
  & input {
    display: none;
  }
  & .toggleSwitch {
    width: 40px;
    height: 20px;
    display: block;
    position: relative;
    border-radius: 30px;
    background-color: black;
    box-shadow: 0 0 3px 0px gray;
    cursor: pointer;
  }
  & .toggleSwitch .toggleButton {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: white;
  }
  & #toggle:checked ~ .toggleSwitch {
    background: white;
  }
  & #toggle:checked ~ .toggleSwitch .toggleButton {
    left: 22px;
    background: black;
  }
  & .toggleSwitch,
  .toggleButton {
    transition: all 0.2s ease-in;
  }
`;
