import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, RefreshControl, ScrollView } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {

    const [refresing, setRefresing] = useState(false)
    const [data, setData] = useState<string>()

    const { theme: { colors } } = useContext(ThemeContext)

    const onRefresh = () => {

        setRefresing(true);
        setTimeout(() => {
            console.log('terminamos');
            setRefresing(false);
            setData('Hola mundo!!')
        }, 3000);

    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    onRefresh={onRefresh}
                    progressViewOffset={10} // es como un margin top
                    progressBackgroundColor={colors.text}
                    colors={[colors.primary]} // cambia de color la flechita del loading
                // style={{ backgroundColor: '#5856d6' }} // IOS
                // tintColor={'white'} // IOS
                // title='Refreshing' // IOS
                // titleColor={'white'} // IOS
                />
            }
        >

            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />

                {
                    data && <HeaderTitle title={data} />
                }


            </View>
        </ScrollView>
    )
}

// const styles = StyleSheet.create({

// });