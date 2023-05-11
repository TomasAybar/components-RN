import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>

            <HeaderTitle title='Theme' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={setLightTheme}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                    >
                        Light
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={setDarkTheme}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                    >
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


