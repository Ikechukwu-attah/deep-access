import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledDeepPlayer } from "../Common/StyledDeepPlayer";
import { StyledWrapper } from "../Common/StyledWrapper";

const DeepPlayer = () => {
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
        gap="4rem"
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
          width="90%"
          border="none"
          boxShadow="none"
        />

        <StyledContainer>hello</StyledContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default DeepPlayer;
