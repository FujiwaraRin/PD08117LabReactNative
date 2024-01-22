import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seperator = ({text}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>{text}</Text>
      
    </View>
  )
}

export default React.memo(Seperator)

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 20,
        alignSelf:'center'
    },
    text:{
        color:'#4E4B66',
        fontWeight:'400',
        marginHorizontal:8,
        
    }
})