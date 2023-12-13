import styled from "styled-components";
import { commonCSS } from "./Common";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export const StyledDeepPlayer = styled(AudioPlayer)`
  ${commonCSS}

  .rhap_horizontal-reverse .rhap_controls-section {
    flex: none;
  }

  .rhap_progress-bar-show-download .rhap_progress-indicator {
    background: green;
  }

  .rhap_progress-indicator {
    width: 14px;
    height: 14px;
    top: calc(50% - 8px);
  }
`;
