import React, { useState, useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledDeepPlayer } from "../Common/StyledDeepPlayer";
import { StyledWrapper } from "../Common/StyledWrapper";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import DeepAccessPlayerDropDown from "../DeepAccessPlayerDropdown/DeepAccessPlayerDropDown";
import Florence_US from "../../untitled folder/Florence_US.mp3";

const DeepPlayer = () => {
  const [showAppFeatures, setShowAppFeatures] = useState(false);
  const playerRef = useRef(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

  useEffect(() => {
    const player = playerRef.current;
    if (player && player.audio.current) {
      player.audio.current.playbackRate = playbackSpeed;
      console.log("playback speed:", playbackSpeed);
    }
  }, [playbackSpeed]);

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
          ref={playerRef}
          src={Florence_US}
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

        {showAppFeatures ? (
          <StyledContainer
            cursor="pointer"
            position="absolute"
            top="18px"
            right="17px"
            onClick={() => setShowAppFeatures(false)}
          >
            <MdOutlineClose size={22} color="gray" />
          </StyledContainer>
        ) : (
          <StyledContainer
            cursor="pointer"
            position="absolute"
            top="18px"
            right="17px"
            onClick={() => setShowAppFeatures(true)}
          >
            <IoSettingsOutline size={22} />
          </StyledContainer>
        )}

        {showAppFeatures && (
          <DeepAccessPlayerDropDown setPlaybackSpeed={setPlaybackSpeed} />
        )}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default DeepPlayer;
