import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
const EmptyComponent = ({text,urlImage} ) => {

  return (
    <View style={styles.container}>
        <Image src={urlImage} style={styles.img} />
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default EmptyComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    img: {
        width: 200,
        height: 200
    }   

})