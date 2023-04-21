import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../theme/appTheme'

interface MenuItem {
	name: string
	icon: string
	component: string
}

const menuItems = [
	{
		name: 'animation 101',
		icon: 'cube-outline',
		component: 'Animation101Screen',
	},
]

export const HomeScreen = () => {
	const renderMenuItem = (menuItem: MenuItem) => {
		return (
			<View>
				<Text>
					{menuItem.name} - {menuItem.icon}
				</Text>
			</View>
		)
	}

	const renderListHeader = () => {
		return (
			<View>
				<Text style={styles.title}>Opciones de Menu</Text>
			</View>
		)
	}

	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.title}>Opciones de Menu</Text>

			<FlatList
				data={menuItems}
				renderItem={({ item }) => renderMenuItem(item)}
				keyExtractor={(item) => item.name}
			/>
		</View>
	)
}

// const styles = StyleSheet.create({})
