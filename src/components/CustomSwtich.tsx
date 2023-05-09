import React, { useState } from 'react';
import { Switch } from 'react-native';

interface Props {
    isOn: boolean
    onChange: (value: boolean) => void

}

export const CustomSwtich = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <Switch
            trackColor={{ true: '#5856D6' }} // color del switch 1: inactive, 2: active => false: '#D9D9DB', true: '#5856D6'
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

