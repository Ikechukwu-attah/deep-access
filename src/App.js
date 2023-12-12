import styled from "styled-components";
import { StyledContainer } from "./components/Common/StyledContainer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
function App() {
  const StyledPlayer = styled(AudioPlayer)``;
  return (
    <StyledContainer>
      <h1 style={{ color: "green" }}>hello world</h1>

      <StyledPlayer
        // autoPlay
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        onPlay={(e) => console.log("onPlay")}
        layout="horizontal-reverse"
        loop={false}
        customVolumeControls={[1]}
        showJumpControls={false}
        customAdditionalControls={[]}

        // other props here
      />
    </StyledContainer>
  );
}

export default App;
