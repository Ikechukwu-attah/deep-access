import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledDeepPlayer } from "../Common/StyledDeepPlayer";
import { StyledWrapper } from "../Common/StyledWrapper";
import { IoSettingsOutline } from "react-icons/io5";
import DeepAccessPlayerDropDown from "../DeepAccessPlayerDropdown/DeepAccessPlayerDropDown";

const DeepPlayer = () => {
  const [showAppFeatures, setShowAppFeatures] = useState(false);
  return (
    <StyledContainer
      // width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop="4rem"
    >
      <StyledWrapper
        width="50%"
        display="flex"
        alignItems="center"
        position="relative"
        // gap="4rem"
        boxShadow="0 0 3px 0 rgba(0, 0, 0, 0.2)"
        //padding="0 1rem 0 0"
      >
        <StyledDeepPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
          onPlay={(e) => console.log("onPlay")}
          layout="horizontal-reverse"
          loop={false}
          customVolumeControls={[1]}
          showJumpControls={false}
          customAdditionalControls={[]}
          width="95%"
          border="none"
          boxShadow="none"
        />

        <StyledContainer
          cursor="pointer"
          position="absolute"
          top="18px"
          right="17px"
          onClick={(prev) => setShowAppFeatures(!showAppFeatures)}
        >
          <IoSettingsOutline size={22} />
        </StyledContainer>
        {showAppFeatures && <DeepAccessPlayerDropDown />}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default DeepPlayer;
