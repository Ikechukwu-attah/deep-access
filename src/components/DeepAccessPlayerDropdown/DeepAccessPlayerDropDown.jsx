import React, { useState } from "react";
import styled from "styled-components";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledWrapper } from "../Common/StyledWrapper";
import { StyledText } from "../Common/StyledText";
import { MdOutlineSpeed } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";
import Select, { components } from "react-select";
import { StyledSpan } from "../Common/StyledSpan";

const DeepAccessPlayerDropDown = ({
  setPlaybackSpeed,
  playbackSpeed,
  humanVoice,
  setHumanVoice,
}) => {
  const [showSpeedDropDown, setShowSpeedDropDown] = useState(false);
  const Angelina_AU =
    "https://comfy-quokka-558ae5.netlify.app/Audios/Angelina_AU.mp3";
  const Bosco_SA =
    "https://comfy-quokka-558ae5.netlify.app/Audios/Bosco_SA.mp3";
  const Jalia_SA =
    "https://comfy-quokka-558ae5.netlify.app/Audios/Jalia_SA.mp3";
  const Jeff_AU = "https://comfy-quokka-558ae5.netlify.app/Audios/Jeff_AU.mp3";
  const Mike_UK = "https://comfy-quokka-558ae5.netlify.app/Audios/Mike_UK.mp3";
  const Xavier_US =
    "https://comfy-quokka-558ae5.netlify.app/Audios/Xavier_US.mp3";

  const BlackVoiceIcon = styled(RiUserVoiceFill)`
    color: #000;
  `;
  const BlackSpeedIcon = styled(MdOutlineSpeed)`
    color: #000;
  `;

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
      // color: "blue !important",
      // fontSize: "1rem !important",
      fontWeight: "400",
      fontSize: "1.2rem !important",

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
      borderBottom: "1px solid gray !important",
      cursor: "pointer !important",
      backgroundColor: state.isSelected
        ? "blue !important"
        : state.isFocused
        ? "lightgray !important"
        : "#F4F7FF !important",
      color: state.isSelected ? "#fff !important" : "black !important",
      ":hover": {
        // Hover state styles
        backgroundColor: "lightgray  !important",
        color: "black !important",
      },
      //   fontWeight: state.isSelected ? "700" : "500",
      fontSize: "1.2rem !important ",
    }),

    input: (provided, state) => ({
      ...provided,

      minWidth: "7rem !important",
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
            {/* <MdOutlineSpeed color="#000 !important" /> */}
            <BlackSpeedIcon size={22} />
            <StyledSpan Fs="1.5rem !important" color="#000!important">
              Speed
            </StyledSpan>
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
            background="#fff"
            borderRadius="5px"
            onClick={() => {
              setShowVoiceDropdown(true);
              setShowVoice(false);
            }}
          >
            {/* <RiUserVoiceFill size={22} color="#000 !important" /> */}
            <BlackVoiceIcon size={22} />
            <StyledSpan Fs="1.5rem !important" color="#000 !important">
              Voice
            </StyledSpan>
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
