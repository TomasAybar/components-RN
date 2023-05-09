import React from 'react';
import { View, Button, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

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
    const showPrompt = () => {
        Alert.prompt(
            'Esta seguro?', // titulo
            'Esta accion no se puede revertir', // cuerpo de la alerta
            (valor: string) => console.log('info: ', valor),
            'plain-text', // es como el tipo de prompt, ver los demas valores, este es como el default
            'Hola mundo', // valor por defecto del prompt
            'number-pad' // el valor del teclado keyboardType
        )
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alertas' />

            <Button title='Mostrar alerta' onPress={showAlert} />
            <Button title='Mostrar prompt' onPress={showPrompt} />
        </View>
    )
}
