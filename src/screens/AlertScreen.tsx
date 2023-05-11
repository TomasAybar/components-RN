import React, { useContext } from 'react';
import promptANDROID from 'react-native-prompt-android';
import { View, Button, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const AlertScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext)

    const showAlert = () => {
        Alert.alert(
            'Titulo',
            'Este es el mensaje de la alerta',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
            , {
                cancelable: true, // se agrega un argunmento mas, para que al tocar afuera de la alerta pueda cerrarse tambien, esto no dispara acciones
                onDismiss: () => console.log('onDismiss') // se ejecuta una funcion al tocar fuera de la pantalla
            }
        );
    }

    // Esto no funciona en android, solo funciona en IOS
    // https://reactnative.dev/docs/alert#prompt-ios
    const showPromptIOS = () => {
        Alert.prompt(
            'Esta seguro?', // titulo
            'Esta accion no se puede revertir', // cuerpo de la alerta
            (valor: string) => console.log('info: ', valor),
            'plain-text', // es como el tipo de prompt, ver los demas valores, este es como el default
            'Hola mundo', // valor por defecto del prompt
            'number-pad' // el valor del teclado keyboardType
        )
    }

    // Funciona gracias a react-native-prompt-android

    // ESTO MISMO SE PUEDE HACER CON UN MODAL
    const showPrompt = () => {

        console.log('hola')
        // promptANDROID(
        //     'Enter password',
        //     'Enter your password to claim your $1.5B in lottery winnings',
        //     [
        //         { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        //         { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
        //     ],
        //     {
        //         type: 'secure-text',
        //         cancelable: false,
        //         defaultValue: 'test',
        //         placeholder: 'placeholder'
        //     }

        // );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alertas' />

            <Button title='Mostrar alerta' onPress={showAlert} color={colors.primary} />
            <View style={{ height: 10 }} />
            <Button title='Mostrar prompt IOS' onPress={showPromptIOS} color={colors.primary} />
            <View style={{ height: 10 }} />
            <Button title='Mostrar prompt LIB' onPress={showPrompt} color={colors.primary} />
        </View>
    )
}
