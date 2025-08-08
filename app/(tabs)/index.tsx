import { Pressable, Text } from 'react-native';

import { useSfx } from '@/hooks/sfx/useSfx';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { play } = useSfx();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => {
        router.push('/video');
      }}
      onPressIn={() => {
        play();
      }}
      >
        <Text style={{ color: theme.colors.primary, fontSize: 20, fontWeight: '500' }}>Go to Video</Text>
      </Pressable>
      </SafeAreaView>
  );
}


