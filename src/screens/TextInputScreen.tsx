import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { CustomSwtich } from '../components/CustomSwtich';
import { useForm } from '../hooks/useForm';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {

    const { theme: { colors, dividerColor } } = useContext(ThemeContext)

    const { form, onChange, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.globalMargin}>
                        <HeaderTitle title='TextInputs' />
                        {/* https://reactnative.dev/docs/textinput */}


                        <TextInput
                            style={{ ...stylesScreen.inputStyle, borderColor: colors.border, color: colors.text }}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                            cursorColor={colors.text}
                            placeholderTextColor={dividerColor}
                        />
                        <TextInput
                            // style={{ ...stylesScreen.inputStyle, color: colors.primary }}
                            style={{ ...stylesScreen.inputStyle, borderColor: colors.border, color: colors.text }}
                            placeholder='Ingrese su email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark' // SOLO FUNCIONA EN IOS
                            cursorColor={colors.text}
                            placeholderTextColor={dividerColor}
                        />

                        {/* Ejemplo */}
                        <View style={stylesScreen.switchRow}>
                            <Text style={{ ...stylesScreen.switchText, color: colors.text }}>Suscribirme</Text>
                            <CustomSwtich isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            // style={stylesScreen.inputStyle}
                            style={{ ...stylesScreen.inputStyle, borderColor: colors.border, color: colors.text }}
                            placeholder='Ingrese su telefono'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                            cursorColor={colors.text}
                            placeholderTextColor={dividerColor}
                        />

                        <View style={{ height: 100 }} />


                    </View>

                </TouchableWithoutFeedback>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

