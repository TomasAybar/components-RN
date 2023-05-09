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

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alertas' />

            <Button title='Mostrar alerta' onPress={showAlert} />
        </View>
    )
}
