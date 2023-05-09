import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwtich } from '../components/CustomSwtich';

export const SwitchScreen = () => {


    // Valores por default de los switches
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: false
    })

    const { isActive, isHappy, isHungry } = state; // usamos esto porq sino el isOn del switch no esta en sincronia, si lo pones por default en false o true, pareciera que esta desincronizado

    // const onChange = (value: boolean, fiel: string) => {
    //     setState({
    //         ...state,
    //         [fiel]: value
    //     })
    // }

    const onChange = (value: boolean, fiel: keyof typeof state) => { // keyof typeof state => con este typado solamente va a tomar un valor existente en el state
        setState({
            ...state,
            [fiel]: value
        })
    }

    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title='Switches' />

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isActive</Text>
                <CustomSwtich isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHungry</Text>
                <CustomSwtich isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHappy</Text>
                <CustomSwtich isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>


            <Text style={styles.switchText}>
                {
                    JSON.stringify(state, null, 5)
                }
            </Text>

        </View>
    )
}



const styles = StyleSheet.create({
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
