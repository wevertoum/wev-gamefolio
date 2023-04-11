/// <reference types="react-scripts" />

namespace Models {
  interface MusicContext {
    playingMusic: boolean;
    setPlayingMusic: React.Dispatch<React.SetStateAction<boolean>>;
    audio: any;
  }
}
