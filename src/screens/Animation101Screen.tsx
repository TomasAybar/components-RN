import React, { useContext, useRef } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/theme/ThemeContext'

export const Animation101Screen = () => {
	const { fadeIn, fadeOut, opacity, position, startMovingPosition } =
		useAnimation()

	const { theme: { colors } } = useContext(ThemeContext)

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					...styles.purpleBox,
					backgroundColor: colors.primary,
					marginBottom: 20,
					opacity: opacity,
					transform: [
						{
							translateX: position,
						},
					],
				}}
			/>
			<Button
				title='FadeIn'
				onPress={() => {
					fadeIn()
					startMovingPosition(100)
				}}
				color={colors.primary}
			/>
			<Button
				title='fadeOut'
				onPress={() => fadeOut()}
				color={colors.primary}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	purpleBox: {
		width: 150,
		height: 150,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
