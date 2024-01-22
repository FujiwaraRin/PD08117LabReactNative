import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SocialLogin = () => {
    const handSocialLogin = async()=>{
        console.log('SocialLogin')
    };
  return (
    <View style={[styles.view, {justifyContent:'center'}]}>
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={handSocialLogin}
    style={styles.container}>
        <Image style={styles.imageSocial} source={require('./icongoogle.png')}></Image>
        <Text>Facebook</Text>
    </TouchableOpacity>

    <TouchableOpacity
    activeOpacity={0.6}
    onPress={handSocialLogin}
    style={styles.container}>
        <Image style={styles.imageSocial} source={require('./icongoogle.png')}></Image>
        <Text>Google</Text>
        
    </TouchableOpacity>
    </View>

   

  
    
  )
}

export default SocialLogin

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 174,
        height: 48,
        backgroundColor: '#667080',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
    imageSocial: {
        width: 40,
        height: 40,
      },
      text:{
        fontFamily: 'Popins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        color: '#4E4B66',
        textAlign:'center',
        alignSelf: 'center',
        marginTop: 16,
      },
      view:{
        flexDirection:'row',
 
      }



})