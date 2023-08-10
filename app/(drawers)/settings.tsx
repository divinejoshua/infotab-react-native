import { Image, Pressable, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Drawer } from 'expo-router/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router/src/useNavigation';
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function TabTwoScreen() {

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
          headerShown : true,
          // Open Drawer on press
          headerLeft: () => (
              //@ts-ignore: true
            <Pressable onPress={()=> navigation.toggleDrawer()}>
               {({ pressed }) => (
                <FontAwesome
                  name="bars"
                  size={20}
                  color={Colors[currentTheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 ,marginLeft: 20, }}
                />
              )}
            </Pressable>
          ),
          headerTitle: "Settings",
        }}
      />


      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
