import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextHeader = ({textHeader}) => {
  return (
    <View style={styles.container}> 
    <Text style={styles.textHeader}>{textHeader}</Text>
    <Text style={styles.textSignup}>Signup to get Started</Text>
    </View>
  )
}

export default TextHeader;

export const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        marginHorizontal:8,
        height:100
    },
    textHeader:{
        fontFamily: 'Popins',
        fontSize: 40,
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#1877F2',
    },
    textSignup:{
        fontFamily: 'Popins',
        fontSize: 20,
        fontWeight: '400',
        fontStyle: 'normal',
        color: '#4E4B66',
    }

})