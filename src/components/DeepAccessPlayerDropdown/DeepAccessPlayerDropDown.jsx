import React from "react";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledWrapper } from "../Common/StyledWrapper";
import { StyledText } from "../Common/StyledText";
import { MdOutlineSpeed } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";

const DeepAccessPlayerDropDown = () => {
  return (
    <StyledContainer
      display="flex"
      flexDirection="column"
      gap="1rem"
      position="absolute"
      top="80px"
      right="17px"
    >
      <StyledWrapper
        display="flex"
        gap="1rem"
        alignItems="center"
        cursor="pointer"
      >
        <MdOutlineSpeed size={22} />
        <StyledText Fs="1.5rem">Speed</StyledText>
      </StyledWrapper>

      <StyledWrapper
        display="flex"
        gap="1rem"
        alignItems="center"
        cursor="pointer"
      >
        <RiUserVoiceFill size={22} />
        <StyledText Fs="1.5rem">Voice</StyledText>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default DeepAccessPlayerDropDown;
