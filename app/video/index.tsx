import { Text, View } from 'react-native';


import { ConfettiVideo } from '@/components/video/ConfettiVideo';


export default function VideoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>VideoScreen</Text>
      <ConfettiVideo />
    </View>
  )
}
