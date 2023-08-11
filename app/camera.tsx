import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';

import { View, Text } from '../components/Themed';

export default function CameraView() {
  return (
    <View>
      <Text>CameraView</Text>
    </View>
  )
}