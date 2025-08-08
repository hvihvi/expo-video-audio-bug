import { useAudioPlayer } from "expo-audio";
import { useCallback } from "react";




export const useSfx = () => {
  const player = useAudioPlayer(require("./sfx_button_press.aac"));

  return {
    play: useCallback(
      () => {
        player.seekTo(0);
        player.volume = 1;
        player.play();
      },
      [player]
    ),
  };
};
