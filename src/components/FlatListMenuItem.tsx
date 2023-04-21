import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
	menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
	return (
		<TouchableOpacity activeOpacity={0.6}>
			<View style={styles.container}>
				<Ionicons name={menuItem.icon} size={23} color='gray' />

				<Text style={styles.itemText}>{menuItem.name}</Text>
				<View
					style={{
						flex: 1,
					}}
				/>
				<Ionicons name='arrow-forward-outline' size={23} color='gray' />
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
