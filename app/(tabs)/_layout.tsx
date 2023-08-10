import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, TouchableOpacity, useColorScheme } from 'react-native';
import { Drawer } from 'expo-router/drawer';

import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Colors from '../../constants/Colors';

import TabOneScreen from './index'
import TabTwoScreen from './two'
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

// const Drawer = createDrawerNavigator();



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
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Tab One',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //       headerRight: () => (
    //         <Link href="/modal" asChild>
    //           <Pressable>
    //             {({ pressed }) => (
    //               <FontAwesome
    //                 name="info-circle"
    //                 size={25}
    //                 color={Colors[colorScheme ?? 'light'].text}
    //                 style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
    //               />
    //             )}
    //           </Pressable>
    //         </Link>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="two"
    //     options={{
    //       title: 'Tab Two',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
    // </Tabs>

    // Added navigaton drawers 
  //   <NavigationContainer independent={true}>
  //       <Drawer.Navigator initialRouteName="Home"
  //       drawerContent={(props) => <CustomDrawerContent {...props} />}

  //           screenOptions={{
  //               drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
  //               drawerStyle: {
  //                 // backgroundColor: '#c6cbef', //Set Drawer background
  //                 width: '70%', //Set Drawer width
  //               },
  //               headerStyle: {
  //                 // backgroundColor: '#f4511e', //Set Header color
  //               },
  //               // headerTintColor: '#fff', //Set Header text color
  //               headerTitleStyle: {
  //                 fontWeight: 'bold', //Set Header text style
  //               }
  //             }}
  //         >
  //         <Drawer.Screen name="Home" component={TabOneScreen} />
  //         <Drawer.Screen name="Notifications" component={TabTwoScreen} />
  //       </Drawer.Navigator>
  // </NavigationContainer>


// Drawer from expo router 
    <Drawer
      drawerContent={(props) =>(
        <CustomDrawerContent {...props}/>
      )}
      screenOptions={({ navigation }) => ({
        headerLeft: (props) =>
        ( 
          <TouchableOpacity onPress={() =>navigation.toggleDrawer()}>
            <Image 
              source={require("../../assets/images/profile.jpg")} 
              resizeMode='contain' 
              style={{width:30, height:30, marginLeft: 20, borderRadius:100}}
              
              />
            </TouchableOpacity>
        ),
        headerShadowVisible: false,
        // drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        drawerStyle: {
          // backgroundColor: '#c6cbef', //Set Drawer background
          width: '70%', //Set Drawer width
        },
        headerStyle: {
          // backgroundColor: '#f4511e', //Set Header color
        },
        // headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      })}
  >

    {/* Drawer screens */}
      <Drawer.Screen
          name="index"
          options={{
            title: 'Home',
            drawerIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
      <Drawer.Screen
          name="two"
          options={{
            title: 'Tab Two',
            drawerIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          }}
        />
  
  </Drawer>

  
    
  );
}
