import { Howl } from "howler";
import React, { createContext, useMemo, useState } from "react";
import { audioUrl } from "utils/constants";

const MusicContext = createContext({} as Models.MusicContext);

interface Props {}
export const MusicContextProvider: React.FC<Props> = ({ children }) => {
  const [playingMusic, setPlayingMusic] = useState(false);

  const audio = useMemo(
    () =>
      new Howl({
        src: audioUrl,
        onplay: () => setPlayingMusic(true),
        onpause: () => setPlayingMusic(false),
        loop: true,
        volume: 0.2,
      }),
    [setPlayingMusic]
  );

  return (
    <MusicContext.Provider
      value={{
        audio,
        playingMusic,
        setPlayingMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
