import { css } from "styled-components";
// import {
//   largeDevice,
//   mediumDevice,
//   smallDevice,
//   smallestDevice,
// } from "../../../Constants/MediaQuery/MediaQuery";

export const commonCSS = css`
  background-color: ${({ background }) => background};
  background-image: ${({ bgImage }) => bgImage};
  background-size: ${({ bgSize }) => bgSize};
  background-repeat: ${({ bgRepeat }) => bgRepeat};
  background-position: ${({ bgPosition }) => bgPosition};
  object-fit: ${({ objectFit }) => objectFit};
  font-size: ${({ Fs }) => Fs};
  flex: ${({ flex }) => flex};
  color: ${({ color }) => color};
  place-items: ${({ placeItems }) => placeItems};
  place-content: ${({ placeContent }) => placeContent};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
  inset: ${({ inset }) => inset};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-row-gap: ${({ gridRowGap }) => gridRowGap};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};

  left: ${({ left }) => left};
  cursor: ${({ cursor }) => cursor};
  gap: ${({ gap }) => gap};
  z-index: ${({ zIndex }) => zIndex};
  transform: ${({ transform }) => transform};
  flex-direction: ${({ flexDirection }) => flexDirection};
  box-shadow: ${({ boxShadow }) => boxShadow};
  align-self: ${({ alignSelf }) => alignSelf};
  line-height: ${({ lineHeight }) => lineHeight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-right: ${({ borderRight }) => borderRight};
  border-left: ${({ borderLeft }) => borderLeft};
  border-top: ${({ borderTop }) => borderTop};
  overflow-y: ${({ overFlowY }) => overFlowY};
  overflow-x: ${({ overFlowX }) => overFlowX};
  opacity: ${({ opacity }) => opacity};
  scale: ${({ scale }) => scale};
  transition: ${({ transition }) => transition};
  :hover {
    background-color: ${({ hoverBg }) => hoverBg};
    color: ${({ hoverColor }) => hoverColor};
    scale: ${({ scaleOut }) => scaleOut};
    transform: ${({ transformOnHover }) => transformOnHover};
    z-index: ${({ zIndexOnHover }) => zIndexOnHover};
    opacity: ${({ hoverOpacity }) => hoverOpacity};
  }

  &:focus {
    border-color: ${({ focusedBorderColor }) => focusedBorderColor};
  }

  :before {
    content: ${({ beforeContent }) => beforeContent};
    height: ${({ beforeHeight }) => beforeHeight};
    width: ${({ beforeWidth }) => beforeWidth};
    top: ${({ beforeTop }) => beforeTop};
    background-color: ${({ beforeBackground }) => beforeBackground};
    transform: ${({ beforeTransform }) => beforeTransform};
    position: ${({ beforePosition }) => beforePosition};
  }
`;
