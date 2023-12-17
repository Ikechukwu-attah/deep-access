import React, { useState, useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { StyledContainer } from "../Common/StyledContainer";
import { StyledDeepPlayer } from "../Common/StyledDeepPlayer";
import { StyledWrapper } from "../Common/StyledWrapper";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import DeepAccessPlayerDropDown from "../DeepAccessPlayerDropdown/DeepAccessPlayerDropDown";
// import Florence_US from "../../Audios/Florence_US.mp3";

const DeepPlayer = () => {
  const Florence_US =
    "https://comfy-quokka-558ae5.netlify.app/Audios/Florence_US.mp3";
  const [showAppFeatures, setShowAppFeatures] = useState(false);
  const playerRef = useRef(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [humanVoice, setHumanVoice] = useState(Florence_US);

  useEffect(() => {
    const player = playerRef.current;
    if (player && player.audio.current) {
      player.audio.current.playbackRate = playbackSpeed;
      console.log("playback speed:", playbackSpeed);
    }
  }, [playbackSpeed]);

  return (
    <StyledContainer
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      zIndex="1000"

      // marginTop="4rem"
    >
      <StyledWrapper
        width="100%"
        display="flex"
        alignItems="center"
        position="relative"
        background="#fff"
        borderRadius="5px"
        padding="0 0 0 0.5rem"
        // gap="4rem"
        boxShadow="0 0 3px 0 rgba(0, 0, 0, 0.2)"
        //padding="0 1rem 0 0"
      >
        <StyledDeepPlayer
          ref={playerRef}
          src={humanVoice}
          onPlay={(e) => console.log("onPlay")}
          layout="horizontal-reverse"
          loop={false}
          customVolumeControls={[1]}
          showJumpControls={false}
          customAdditionalControls={[]}
          width="95%"
          border="none"
          boxShadow="none"
          autoPlay={false}
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
            <IoSettingsOutline size={22} color="gray" />
          </StyledContainer>
        )}

        {showAppFeatures && (
          <DeepAccessPlayerDropDown
            setPlaybackSpeed={setPlaybackSpeed}
            playbackSpeed={playbackSpeed}
            humanVoice={humanVoice}
            setHumanVoice={setHumanVoice}
          />
        )}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default DeepPlayer;
