import { useRef, useState } from 'react';
import { View, Text } from  '../components/Themed'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    TouchableOpacity,
  } from "@gorhom/bottom-sheet";
import { Button, Pressable, StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';
import { Switch } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function BottomSheet() {



    // Get theme 
    const currentTheme = useColorScheme();
    const backgroundColor = currentTheme === "light" ? Colors.light.background :Colors.dark.background
    const borderColor = currentTheme === "light" ? Colors.light.borderColor :Colors.dark.borderColor


    // Bottom sheet snapPoints 
    const snapPoints = ["25%", "50%", "100%"];

    const bottomSheetModalRef = useRef(null);

    // Data 
    const [darkmode, setDarkmode] = useState(false);
    const [device, setDevice] = useState(false);
    const { width } = useWindowDimensions();
    const [theme, setTheme] = useState("dim");
    const [isOpen, setIsOpen] = useState(false);


        // Handle bottom sheet over lay 
    function handlePresentModal() {
        //@ts-ignore: true
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
        setIsOpen(true);
        }, 100);
    }




  return (
    <BottomSheetModalProvider>

            {/* Bottom sheet handler button  */}
            <TouchableOpacity style={[styles.presentButton]} onPress={handlePresentModal}>
                <Text style={styles.buttonText}>Open bottom sheet </Text>
            </TouchableOpacity>

            {/* Bottom sheet Modal  */}
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                backgroundStyle={{ borderRadius: 50, backgroundColor: backgroundColor }}
                handleIndicatorStyle={{ backgroundColor: borderColor }} // Customize the indicator style
                onDismiss={() => setIsOpen(false)}
            >
            
                    {/* Inside the bottom sheet  */}
                    <View style={styles.contentContainer}>
                        <Text style={[styles.title, { marginBottom: 20 }]}>
                            Settings
                        </Text>

                          {/* Dark mode  */}
                        <View style={styles.row}>
                            <Text style={styles.subtitle}>Dark mode</Text>

                            {/* Switch  */}
                            <Switch
                                value={darkmode}
                                onChange={() => setDarkmode(!darkmode)}
                            />
                        </View>

                        {/* Device settings  */}
                        <View style={styles.row}>
                            <Text style={styles.subtitle}>Use device settings</Text>
                            <Switch value={device} onChange={() => setDevice(!device)} />
                        </View>
                        <Text style={styles.description}>
                            Set Dark mode to use the Light or Dark selection located in your
                            device Display and Brightness settings.
                        </Text>

                        {/* Second section  */}
                        <View
                            style={{
                            width: width,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderBottomColor: "gray",
                            marginVertical: 30,
                            }}
                        />
                        {/* Theme  */}
                        <Text style={[styles.title, { width: "100%" }]}>Theme</Text>

                            {/* Dim  */}
                            <Pressable style={styles.row} onPress={() => setTheme("dim")}>
                                <Text style={styles.subtitle}>Dim</Text>
                                {theme === "dim" ? (
                                <AntDesign name="checkcircle" size={24} color="#4A98E9" />
                                ) : (
                                <Entypo name="circle" size={24} color="#56636F" />
                                )}
                            </Pressable>

                            {/* Lights out  */}
                            <Pressable
                                style={styles.row}
                                onPress={() => setTheme("lightsOut")}
                            >
                                <Text style={styles.subtitle}>Lights out</Text>
                                {theme === "lightsOut" ? (
                                <AntDesign name="checkcircle" size={24} color="#4A98E9" />
                                ) : (
                                <Entypo name="circle" size={24} color="#56636F" />
                                )}
                            </Pressable>
                    </View>
            </BottomSheetModal>
  </BottomSheetModalProvider>



  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "gray",
      alignItems: "center",
      justifyContent: "center",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 15,
    },
    row: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    title: {
      fontWeight: "900",
      letterSpacing: 0.5,
      fontSize: 16,
    },
    subtitle: {
    //   color: "#101318",
      fontSize: 14,
      fontWeight: "bold",
    },
    description: {
    //   color: "#56636F",
      fontSize: 13,
      fontWeight: "normal",
      width: "100%",
    },

    presentButton : {
        width: "70%",
        fontSize : 15,
        height: 40,
        borderRadius : 100,
        backgroundColor : "#3b82f6",
        color : "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText:{
        color:"#fff",
        fontWeight: "bold",
    }
  });