import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, View } from './Themed'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { FontAwesome } from '@expo/vector-icons'

export default function CustomDrawer(props : any) {
  return (
    <>
            {/* Top View  */}
            <SafeAreaView >
                <View style={styles.container}>
                    <Image source={require('../assets/images/profile.jpg')} style={[styles.profileImage]} />

                    {/* Profile info  */}
                    <View style={styles.profileInfo}>

                        {/* Profile details  */}
                        <View>
                            <Text style={styles.fullName}>Shalipopi</Text>
                            <Text style={styles.username}>View profile</Text>
                        </View>

                        {/* Dropdown icon  */}
                        <FontAwesome style={styles.icon} size={20} name='caret-down'></FontAwesome>
                    </View>
                </View>
            </SafeAreaView>

            {/* Draw Scroll view  */}
            {/* <DrawerContentScrollView> */}
                    <DrawerItemList {...props}/>
            {/* </DrawerContentScrollView> */}


            {/* Footer  */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom:20,
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 100,
        overflow: "hidden",

    },
    profileInfo :{
        flexDirection: "row",
        marginTop:12,
        justifyContent: "space-between",
    },
    fullName: {
        fontWeight: '300',
        fontSize: 17,
    },
    username: {
        marginTop:6,
        color: '#999',
    },
    icon: {
        marginRight:20,
        color:'gray'
    },

    footer:{
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 50,
        paddingHorizontal:40,
    },

    logoutBtn:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:.5,
        borderColor: '#666',
        borderRadius:30
    }

   
  });
  