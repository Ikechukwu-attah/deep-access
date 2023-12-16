import React, { useState } from "react";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledWrapper } from "../Common/StyledWrapper";
import { StyledText } from "../Common/StyledText";
import { MdOutlineSpeed } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";
import Select, { components } from "react-select";
import Angelina_AU from "../../Audios/Angelina_AU.mp3";
import Bosco_SA from "../../Audios/Bosco_SA.mp3";
import Jalia_SA from "../../Audios/Jalia_SA.mp3";
import Jeff_AU from "../../Audios/Jeff_AU.mp3";
import Mike_UK from "../../Audios/Mike_UK.mp3";
import Xavier_US from "../../Audios/Xavier_US.mp3";

const DeepAccessPlayerDropDown = ({
  setPlaybackSpeed,
  playbackSpeed,
  humanVoice,
  setHumanVoice,
}) => {
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
    { value: Xavier_US, label: "Male - US" },
    { value: Jalia_SA, label: "Female - US" },
    { value: Mike_UK, label: "Male - UK" },
    { value: Angelina_AU, label: "Female - UK" },
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
            background="#fff"
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
            menuPlacement="top"
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
            background="#fff"
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
            onChange={(e) => setHumanVoice(e.value)}
            value={voiceOptions.find(
              (voice) => voice.value === humanVoice.toString()
            )}
          />
        )}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default DeepAccessPlayerDropDown;
