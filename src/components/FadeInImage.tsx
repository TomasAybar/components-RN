import React, { useContext, useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    uri: string
    style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext)

    const { opacity, fadeIn } = useAnimation();

    const [isLoading, setIsLoading] = useState(true)

    const finishLoading = () => {
        setIsLoading(false);

        fadeIn()

    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            {
                isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    color={colors.primary}
                    size={30}
                />
            }


            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}

                style={{
                    ...style as any, // confia en mi yo se lo que hago, otra opcion es hacer una evaluacion ternaria para verificar que si es un objeto
                    opacity
                }}
            />
        </View>

    )
}
