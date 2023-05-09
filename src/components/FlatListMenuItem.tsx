import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface Props {
	menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={() => navigation.navigate(menuItem.component as never)}
		>
			<View style={styles.container}>
				<Ionicons name={menuItem.icon} size={23} color='#5856D6' />

				<Text style={styles.itemText}>{menuItem.name}</Text>
				<View
					style={{
						flex: 1,
					}}
				/>
				<Ionicons name='arrow-forward-outline' size={23} color='#5856D6' />
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
