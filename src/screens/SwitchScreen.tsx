import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);
    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title='Switches' />

            <Switch
                trackColor={{ true: '#5856D6' }} // color del switch 1: inactive, 2: active => false: '#D9D9DB', true: '#5856D6'
                // thumbColor={isEnabled ? 'green' : 'red'}
                // thumbColor={isEnabled ? 'green' : 'red'}
                // thumbColor={(Platform.OS === 'android') ? '#585656' : ''}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});