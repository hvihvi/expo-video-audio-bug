import { useVideoPlayer, VideoView } from "expo-video";
import { useMemo, useState } from "react";
import { View } from "react-native";

export function ConfettiVideo() {
    const [showConfetti, setShowConfetti] = useState(true);
    const source = useMemo(() => require("./confettis.mp4"), []);
    const player = useVideoPlayer(source, (player) => {
      player.loop = false;
      player.play();
      player.audioMixingMode = "mixWithOthers";
      player.addListener("playToEnd", () => {
        setShowConfetti(false);
      });
    });
  
    if (!showConfetti) {
      return null;
    }
  
    return (
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <VideoView
          player={player}
          contentFit="cover"
          nativeControls={false}
          accessible={false}
          accessibilityIgnoresInvertColors
          allowsVideoFrameAnalysis={false}
          style={{ flex: 1 }}
        />
      </View>
    );
  }