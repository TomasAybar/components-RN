import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MenuItem } from '../interfaces/appInterfaces'
import { FlatListMenuItem } from '../components/FlatListMenuItem'

const menuItems: MenuItem[] = [
	{
		name: 'animation 101',
		icon: 'cube-outline',
		component: 'Animation101Screen',
	},
	{
		name: 'animation 102',
		icon: 'albums-outline',
		component: 'Animation102Screen',
	},
]

export const HomeScreen = () => {
	const { top } = useSafeAreaInsets()

	const renderListHeader = () => {
		return (
			<View style={{ marginTop: top + 20, marginBottom: 20 }}>
				<Text style={styles.title}>Opciones de Menu</Text>
			</View>
		)
	}

	const itemSeparator = () => {
		return (
			<View
				style={{
					borderWidth: 1,
					opacity: 0.4,
					marginVertical: 8,
				}}
			/>
		)
	}

	return (
		<View style={{ flex: 1, ...styles.globalMargin }}>
			<FlatList
				data={menuItems}
				renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
				keyExtractor={(item) => item.name}
				ListHeaderComponent={renderListHeader}
				ItemSeparatorComponent={itemSeparator} // aparece entre los items
			/>
		</View>
	)
}

// const styles = StyleSheet.create({})
