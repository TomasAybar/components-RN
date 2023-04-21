import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'

export const Animation101Screen = () => {
	const opacity = useRef(new Animated.Value(0.4)).current

	const fadeIn = () => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true,
		}).start(() => console.log('animacion termino'))
	}

	const fadeOut = () => {
		Animated.timing(opacity, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start()
	}

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					...styles.purpleBox,
					marginBottom: 20,
					opacity: opacity,
				}}
			/>
			<Button title='FadeIn' onPress={fadeIn} />
			<Button title='fadeOut' onPress={fadeOut} />
		</View>
	)
}

const styles = StyleSheet.create({
	purpleBox: {
		backgroundColor: '#5856d6',
		width: 150,
		height: 150,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
