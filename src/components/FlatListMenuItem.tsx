import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useTheme } from '@react-navigation/native'
import { ThemeContext } from '../context/theme/ThemeContext'

interface Props {
	menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
	const navigation = useNavigation();

	// const { colors } = useTheme(); // accedo a los colores del theme de reactnavigation
	const { theme: { colors } } = useContext(ThemeContext);

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={() => navigation.navigate(menuItem.component as never)}
		>
			<View style={styles.container}>
				<Ionicons name={menuItem.icon as never} size={23} color={colors.primary} />

				<Text style={{ ...styles.itemText, color: colors.text }}>{menuItem.name}</Text>
				<View
					style={{
						flex: 1,
					}}
				/>
				<Ionicons name='chevron-forward-outline' size={23} color={colors.primary} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	itemText: {
		marginLeft: 10,
		fontSize: 19,
	},
})
