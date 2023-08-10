import { View, Text, Image, TouchableOpacity, useColorScheme, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { useNavigation,  } from '@react-navigation/native';
import Colors from '../../../constants/Colors';

export default function profile() {

  // Get theme 
  const currentTheme = useColorScheme();
  const backgroundColor = currentTheme === "light" ? Colors.light.background :Colors.dark.background

  // Navigation 
  const navigation = useNavigation();


  return (
    <SafeAreaView style={[styles.container, {backgroundColor: backgroundColor, flex: 1,}]} > 
       {/* Drawer options  */}
       <Drawer.Screen
        options={{
          // Open Drawer on press
          headerLeft: () => (
              //@ts-ignore: true
            <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
              <Image 
                source={require("../../../assets/images/profile.jpg")} 
                resizeMode='contain' 
                style={{width:30, height:30, marginLeft: 20, borderRadius:100}}
                
                />
            </TouchableOpacity>
          ),
          headerTitle: "Profile",
        }}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
