import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Input from '../Component/Input';
import TextHeader from '../Component/TextHeaderLogin';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Checkbox from '../Component/Checkbox';
import Button from '../Component/Button';
import Seperator from '../Component/Seperator';
import SocialLogin from '../Component/FB&GG Button';

const Login = () => {
  const [checked, setChecked] = useState(false);
  const onSignin = () => {
    console.log('test signin');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello</Text>
      <Text style={[styles.Text, {color: '#1877F2'}]}>Again!</Text>
      <Text style={styles.welcomeText}>
        Welcome back you’ve{'\n'}
        been missed
      </Text>

      <Input lable="Gmail" placeholder="example@gmail.com" />
      <Input isPassowrd lable="Password" placeholder="********" />
      <View style={styles.checkRow}>
        <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
        <Text style={styles.checkText}> I agree with Terns & Privacy</Text>
      </View>
      <Button style={styles.button} title="Sign Up"></Button>
      <Seperator text="or continue with"></Seperator>
      <SocialLogin></SocialLogin>

      <Text style={styles.footerText}>
        Don't have an account? 
        <Text onPress={onSignin} style={styles.footerlink}>
          Create account
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 24,
    marginEnd: 24,
    flexDirection: 'column',
  },
  textHello: {
    color: '#1877F2',
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    color: '#4F63AC',
    marginHorizontal: 13,
  },
  button: {
    marginVertical: 20,
  },
  footerText: {
    marginTop: 16,
    color: '#4E4B66',
    marginBottom: 56,
    textAlign: 'center',
  },
  footerlink: {
    fontWeight: '600',
    color: '#1877F2',
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
});
