import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { colors } from '../global/colors'

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
    </View>
  )
}

export default LoadingSpinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
    },
})