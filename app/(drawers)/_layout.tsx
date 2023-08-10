import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, TouchableOpacity, useColorScheme } from 'react-native';
import { Drawer } from 'expo-router/drawer';

import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Colors from '../../constants/Colors';

import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

// Custom drawer component 
function CustomDrawerContent(props : any) {
  return (
    <>
    <SafeAreaView>
      <Text>All is well</Text>
    </SafeAreaView>
    <DrawerContentScrollView >
            <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    <SafeAreaView>
      <Text>Footer</Text> 
    </SafeAreaView>
    </>
  );
}


export default function TabLayout() {
  const colorScheme = useColorScheme();


  return (

// Drawer from expo router 
    <Drawer
      drawerContent={(props) =>(
        <CustomDrawerContent {...props}/>
      )}
      screenOptions={({ navigation, route }) => ({
        drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown : false,
        headerShadowVisible: false,
        drawerStyle: {
          width: '70%', //Set Drawer width
        },
      })}
  >

    {/* Drawer screens */}
      <Drawer.Screen
          name="(main)"
          options={{
            title: 'Home',
            drawerIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
     {/* Settings  */}
      <Drawer.Screen
          name="settings"
          options={{
            title: 'Settings',
            drawerIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          }}
        />
  
  </Drawer>

  
    
  );
}
