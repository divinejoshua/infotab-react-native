import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
// import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import CameraButtonContols from '../components/Button';

export default function App() {

  //Data 
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);

  // @ts-ignore: true 
  const [type, setType] = useState(Camera.Constants.Type.back); //Set the camera to back camera by default
  // @ts-ignore: true 
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off); //Set the flash mode off by default
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {

      // Request permission  camera and media library 
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();

      //@ts-ignore : true
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);


  // Take the picture 
  const takePicture = async () => {
    if (cameraRef) {
      try {
        //@ts-ignore: true 
        const data = await cameraRef.current.takePictureAsync();
        // console.log(data);

        // Set image 
        setImage(data.uri);
      } catch (error) {
        // console.log(error);
      }
    }
  };

  // Save the image to gallery 
  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
        setImage(null);
        // console.log('saved successfully');
      } catch (error) {
        // console.log(error);
      }
    }
  };

  // If permission was not graunted 
  if (hasCameraPermission === false) {
    return (
        <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>
          <Text>No access to camera</Text>
        </SafeAreaView>
    );
  }

  // Main return 
  return (
    <View style={styles.container}>

      {/* If there is no image taken, then display the camera  */}
      {!image ? (

        // Main camera 
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >

          {/* Top view on camera  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}
          >
            {/* Change camera tpye (Front / Back ) */}
            <CameraButtonContols
              title=""
              color=''
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />

            {/* Change flash mode (Front / Back) */}
            <CameraButtonContols
              onPress={() =>
                setFlash(
                  // @ts-ignore: true 
                  flash === Camera.Constants.FlashMode.off
                  // @ts-ignore: true 
                    ? Camera.Constants.FlashMode.on
                    // @ts-ignore: true 
                    : Camera.Constants.FlashMode.off
                )
              }
              icon="flash"
              // @ts-ignore: true 
              color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
            />
          </View>


        </Camera>
      ) 
      
      : 
      
      // If there is an image, then display the image 
      (

        <Image source={{ uri: image }} style={
          [styles.photograph, 
            // If front camera, then change the scale of how the image is displayed
            type === CameraType.front ? {transform: [{scaleX: -1}]} : {}
          ]
        } />
      )}


      {/* If there is an image, then also display an extra view for controls  */}
      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >

            {/* Retake image button  */}
            <CameraButtonContols
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />

            {/* Save image button  */}
            <CameraButtonContols title="Save" onPress={savePicture} icon="check" />
          </View>
        )
        
        : 
        // If there is no image, display a button to take an image 
        (
          <CameraButtonContols title="Take a picture" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  photograph: {
    flex: 5,
    borderRadius: 20,
    
  },
  topControls: {
    flex: 1,
  },
});