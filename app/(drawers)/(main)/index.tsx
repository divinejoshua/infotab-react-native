import { Image, SafeAreaView, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Drawer } from 'expo-router/drawer';
import { useNavigation,  } from '@react-navigation/native';

export default function TabOneScreen() {

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
          headerTitle: "Home",
        }}
      />


      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </SafeAreaView>
  );
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
