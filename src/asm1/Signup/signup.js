import { StyleSheet, Text, View, TextInput, Pressable, Image  } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const signup = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.Text, {color:'#1877F2'}]}>Hello!</Text>
      <Text style={styles.welcomeText}>Signup to get Started</Text>
      <Text style={styles.usernameText}>Gmail</Text>
      <TextInput placeholder='example@gmail.com' style={styles.usernameText}></TextInput>
      <Text style={styles.usernameText}>Username</Text>
      <TextInput placeholder='Example An' style={styles.TextInput}></TextInput>
      <Text style={[styles.usernameText, {marginTop: 16}]}>Password</Text>
      <TextInput placeholder='********' style={styles.TextInput}></TextInput>
      <Text style={[styles.usernameText ,{marginTop:16}]}>Re-password</Text>
      <TextInput placeholder='********' style={styles.TextInput}></TextInput>
      <View style={styles.viewRemember}>
          <BouncyCheckbox
            marginTop={8}
            size={25}
            fillColor="blue"
            unfillColor="#FFFFFF"
            text="Remember me"
            iconStyle={{borderColor: 'red'}}
            innerIconStyle={{
              borderRadius: 0, // to make it a little round increase the value accordingly
            }}
            textStyle={{fontFamily: 'Popins'}}
            onPress={(isChecked: Boolean) => {}}
          />
        </View>
        <Pressable style={styles.btnLogin}>
        <Text style={styles.textLogin}></Text>
      </Pressable>
      <Text style={styles.textContinue}>Or Continue With</Text>
      <View style={[styles.viewRemember, {justifyContent: 'space-between'}]}>
        <Pressable style={styles.buttonSocial}>
          <Image
            style={styles.imageSocial}
            source={require('./')}></Image>
          <Text>Facebook</Text>
        </Pressable>
        <Pressable style={styles.buttonSocial}>
          <Image
            style={styles.imageSocial}
            source={require('./images/icongoogle.png')}></Image>
          <Text>Google</Text>
        </Pressable>
      </View>
<View>
  <Text style={styles.textHaveAnAcc}>Already have an account ?</Text>
  <Text style={styles.textLoginEnd}>Login</Text>
</View>

    </View>
  )
}

export default signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 24,
    marginEnd: 24,
    flexDirection: 'column',
  },
  Text: {
    fontFamily: 'Popins',
    fontSize: 40,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#050505',
  },
  welcomeText: {
    fontFamily: 'Popins',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 0.12,
    marginTop: 4,
    color: '#4E4B66',
    marginBottom: 48,
  },
  usernameText: {
    fontFamily: 'Popins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#4E4B66',
  },
  TextInput: {
    display: 'flex',
    height: 48,
    padding: 10,
    alignItems: 'flex-start',
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 6,
    paddingTop: 4,
    borderWidth: 1,
  },
  viewRemember: {
    flexDirection: 'row',
  },
  viewForgot: {
    fontFamily: 'Popins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#5890FF',
    marginTop: 12,
  },
  btnLogin: {
    height: 48,
    backgroundColor: '#1877F2',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  textLogin: {
    fontFamily: 'Popins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#FFFFFF',
  },
  textContinue: {
    fontFamily: 'Popins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#4E4B66',
    alignSelf: 'center',
    marginTop: 16,
  },
  imageSocial: {
    width: 21,
    height: 21,
    marginEnd: 10,
  },
  buttonSocial: {
    flexDirection: 'row',
    width: 174,
    height: 48,
    backgroundColor: '#EEF1F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  textResign:{
    fontFamily: 'Popins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#4E4B66',
    alignSelf: 'center',
    marginTop: 16,
  },
  textHaveAnAcc:{
    fontFamily:'Popins',
    fontSize:14,
    fontStyle:'normal',
    fontWeight:'400',
    color:'#4E4B66'
  },
  textLoginEnd:{
    fontFamily:'Popins',
    fontSize:14,
    fontStyle:'normal',
    fontWeight:'600',
    color:'#1877F2'
  }
});
