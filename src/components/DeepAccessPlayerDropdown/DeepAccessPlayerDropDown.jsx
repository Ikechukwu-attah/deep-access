import React, { useState } from "react";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledWrapper } from "../Common/StyledWrapper";
import { StyledText } from "../Common/StyledText";
import { MdOutlineSpeed } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";
import Select, { components } from "react-select";

const DeepAccessPlayerDropDown = () => {
  const [showSpeedDropDown, setShowSpeedDropDown] = useState(false);
  const [showSpeed, setShowSpeed] = useState(true);

  const speedOptions = [
    { value: "0.5x", label: "0.5x" },
    { value: "1x", label: "1x" },
    { value: "1.5x", label: "1.5x" },
    { value: "2x", label: "2x" },
  ];
  return (
    <StyledContainer
      display="flex"
      flexDirection="column"
      gap="1rem"
      position="absolute"
      top="80px"
      right="17px"
    >
      <StyledWrapper>
        {showSpeed && (
          <StyledWrapper
            display="flex"
            gap="1rem"
            alignItems="center"
            cursor="pointer"
            border="1px solid hsl(0, 0%, 80%)"
            padding="0.5rem"
            borderRadius="5px"
            onClick={() => {
              setShowSpeedDropDown(true);
              setShowSpeed(false);
            }}
          >
            <MdOutlineSpeed size={22} />
            <StyledText Fs="1.5rem">Speed</StyledText>
          </StyledWrapper>
        )}

        {showSpeedDropDown && <Select options={speedOptions} />}
      </StyledWrapper>

      <StyledWrapper>
        <StyledWrapper
          display="flex"
          gap="1rem"
          alignItems="center"
          cursor="pointer"
          border="1px solid hsl(0, 0%, 80%)"
          padding="0.5rem"
          borderRadius="5px"
        >
          <RiUserVoiceFill size={22} />
          <StyledText Fs="1.5rem">Voice</StyledText>
        </StyledWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default DeepAccessPlayerDropDown;
