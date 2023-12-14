import React, { useState } from "react";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledWrapper } from "../Common/StyledWrapper";
import { StyledText } from "../Common/StyledText";
import { MdOutlineSpeed } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";
import Select, { components } from "react-select";

const DeepAccessPlayerDropDown = ({ setPlaybackSpeed, playbackSpeed }) => {
  const [showSpeedDropDown, setShowSpeedDropDown] = useState(false);
  const [showSpeed, setShowSpeed] = useState(true);
  const [showVoiceDropdown, setShowVoiceDropdown] = useState(false);
  const [showVoice, setShowVoice] = useState(true);

  const speedOptions = [
    { value: "0.8", label: "Speed 0.8x" },
    { value: "1.0", label: "Speed 1.0x" },
    { value: "1.2", label: "Speed 1.2x" },
    { value: "1.5", label: "Speed 1.5x" },
    { value: "2.0", label: "Speed 2x" },
  ];

  const voiceOptions = [
    { value: "0.5x", label: "Male - US" },
    { value: "1x", label: "Female - US" },
    { value: "1.5x", label: "Male - UK" },
    { value: "2x", label: "Female - UK" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      //   backgroundColor: "#fff !important",
      //   color: "blue !important",
      //   fontSize: "1rem !important",
      fontWeight: "400",
      fontSize: "1.2rem",

      //   border: "1px solid hsl(0, 0%, 80%)",
      border: state.isFocused
        ? "1px solid hsl(0, 0%, 80%)"
        : "1px solid hsl(0, 0%, 80%)",
      boxShadow: state.isFocused
        ? "0 0 0 1px 1px solid hsl(0, 0%, 80%)"
        : "none",
      "&:hover": {
        border: state.isFocused
          ? "1px solid hsl(0, 0%, 80%)"
          : "1px solid hsl(0, 0%, 80%)",
      },
    }),

    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid gray",
      //   backgroundColor: state.isSelected ? "blue" : "#F4F7FF",
      //   color: state.isSelected ? "#fff" : "black",
      //   fontWeight: state.isSelected ? "700" : "500",
      //   fontSize: state.isSelected ? "2rem" : "2rem",
      fontSize: "1.2rem",
    }),

    input: (provided, state) => ({
      ...provided,

      minWidth: "7rem",
    }),
  };

  return (
    <StyledContainer
      display="flex"
      flexDirection="column"
      gap="1rem"
      position="absolute"
      top="80px"
      right="17px"
      //   width="100%"
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

        {showSpeedDropDown && (
          <Select
            options={speedOptions}
            placeholder="Speed"
            className="select-dropdown"
            styles={customStyles}
            value={speedOptions.find(
              (option) => option.value === playbackSpeed.toString()
            )}
            onChange={(e) => {
              setPlaybackSpeed(e.value);

              console.log(e);
            }}
          />
        )}
      </StyledWrapper>

      <StyledWrapper>
        {showVoice && (
          <StyledWrapper
            display="flex"
            gap="1rem"
            alignItems="center"
            cursor="pointer"
            border="1px solid hsl(0, 0%, 80%)"
            padding="0.5rem"
            borderRadius="5px"
            onClick={() => {
              setShowVoiceDropdown(true);
              setShowVoice(false);
            }}
          >
            <RiUserVoiceFill size={22} />
            <StyledText Fs="1.5rem">Voice</StyledText>
          </StyledWrapper>
        )}

        {showVoiceDropdown && (
          <Select
            options={voiceOptions}
            styles={customStyles}
            placeholder="Voices"
            className="select-dropdown"
          />
        )}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default DeepAccessPlayerDropDown;
