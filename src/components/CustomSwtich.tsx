import React, { useContext, useState } from 'react';
import { Switch } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    isOn: boolean
    onChange: (value: boolean) => void

}

export const CustomSwtich = ({ isOn, onChange }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext)

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <Switch
            trackColor={{ false: colors.text, true: colors.primary, }} // color del switch 1: inactive, 2: active => false: '#D9D9DB', true: '#5856D6'
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

