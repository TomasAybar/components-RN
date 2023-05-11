import { View } from "react-native"
import { ThemeContext } from "../context/theme/ThemeContext"
import { useContext } from "react"

export const ItemSeparator = () => {
    const { theme: { dividerColor } } = useContext(ThemeContext)

    return (
        <View
            style={{
                borderWidth: 1,
                // opacity: 0.4,
                marginVertical: 8,
                borderBottomColor: dividerColor
            }}
        />
    )
}