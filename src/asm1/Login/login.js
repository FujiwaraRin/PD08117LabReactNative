import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello</Text>
      <Text style={[styles.Text, {color: '#1877F2'}]}>Again!</Text>
      <Text style={styles.welcomeText}>
        Welcome back you’ve{'\n'}
        been missed
      </Text>
      <Text style={styles.usernameText}>Username</Text>
      <TextInput style={styles.TextInput}></TextInput>
      <Text style={[styles.usernameText, {marginTop: 16}]}>Password</Text>
      <TextInput style={styles.TextInput}></TextInput>
      <View style={[styles.viewRemember, {justifyContent: 'space-between'}]}>
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
        <Text style={styles.viewForgot}>Forgot the password ?</Text>
      </View>
      <Pressable style={styles.btnLogin}>
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <Text style={styles.textContinue}>Or Continue With</Text>

      <View style={[styles.viewRemember, {justifyContent: 'space-between'}]}>
        <Pressable style={styles.buttonSocial}>

          <Text>Facebook</Text>
        </Pressable>
        <Pressable style={styles.buttonSocial}>

          <Text>Google</Text>
        </Pressable>
      </View>
      <Text style={styles.textResign}>Don't have an account?</Text>
    </View>
  );
};

export default login;

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
  }
});
