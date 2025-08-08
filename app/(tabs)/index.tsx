import { Pressable, StyleSheet, Text, View } from "react-native";

import { ConfettiVideo } from "@/components/video/ConfettiVideo";
import { useSfx } from "@/hooks/sfx/useSfx";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const theme = useTheme();
  const { play } = useSfx();
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showConfetti && <ConfettiVideo />}
      <View style={styles.absCenter}>
        <Pressable
          onPress={() => {
            setShowConfetti((prev) => !prev);
          }}
          onPressIn={() => {
            play();
          }}
        >
          <Text
            style={{
              color: theme.colors.primary,
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Toggle Video
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  absCenter: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
