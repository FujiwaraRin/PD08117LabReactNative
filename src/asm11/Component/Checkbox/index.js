import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Checkbox = ({checked, onCheck}) => {
  return (
<TouchableOpacity
   activeOpacity={1}
   onPress={() => onCheck(!checked)}
   style={styles.container}>
   {checked ? (
    <View style={styles.innerContainer}>
        <Image
        style={styles.checkIcon}
        source={require('./check.png')}
        />
    </View>
   ):null}

</TouchableOpacity>
  )
}

export default Checkbox
const styles = StyleSheet.create({
    container:{
        borderColor:'#8D9BB5',
        borderWidth:1,
        borderRadius:4,
        width:24,
        height:24
    },
    innerContainer:{
        backgroundColor:'#8D9BB5',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    checkIcon:{
        width:24,
        height:24,
    }
})

