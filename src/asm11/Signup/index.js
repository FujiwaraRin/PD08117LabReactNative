import { View, Text, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import Input from '../Component/Input'
import TextHeader from '../Component/TextHeader/index'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Checkbox from '../Component/Checkbox';
import Button from '../Component/Button';
import Seperator from '../Component/Seperator';
import SocialLogin from '../Component/FB&GG Button';

const Signup = () => {
  const[checked, setChecked]=useState(false)
  const onSignin = () =>{
    console.log('test signin')
  }
  return (
    <View style={styles.container}>
      <TextHeader style={styles.textHello} textHeader="Hello!"/>
      <Input lable="Name" placeholder=" Example John" />
      <Input lable="Gmail" placeholder="example@gmail.com"/>
      <Input isPassowrd lable="Password" placeholder="********"/>
      <View style={styles.checkRow}>
        <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
        <Text style={styles.checkText}> I agree with Terns & Privacy</Text>
      </View>
      <Button style={styles.button} title="Sign Up"></Button>
      <Seperator text="or continue with"></Seperator>
      <SocialLogin></SocialLogin>

      <Text style={styles.footerText}>Already have an account?
      <Text onPress={onSignin} style={styles.footerlink}>Login</Text>
      </Text>
    </View>
  )
}

export default Signup


const styles = StyleSheet.create({ 
    container:{
      flex: 1,
      marginStart: 24,
      marginEnd: 24,
      flexDirection: 'column',
    },
    textHello:{
      color:"#1877F2"
    },
    checkRow:{
      flexDirection:'row',
      alignItems:'center',

    },
    checkText:{
      color:'#4F63AC',
      marginHorizontal:13,
    },
    button:{
      marginVertical:20
    },
    footerText:{
      color:"#4E4B66",
      marginBottom:56,
      textAlign:'center'
    },
    footerlink:{
      fontWeight:'600',
      color:"#1877F2"
    }
})