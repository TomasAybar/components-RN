import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme { // necesito las propiedades del theme que proporciona react navigation, adicionando props
    currentTheme: 'light' | 'dark';
    dividerColor: string;

}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false, // para el stack navigator
    colors: {
        primary: '#5856d6',
        background: '#fff',
        card: '#fff',
        text: '#000',
        border: '#000',
        notification: 'teal',
    },
    dividerColor: 'rgba(0,0,0,0.7)'
}
export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    colors: {
        primary: '#5856d6',
        background: '#000',
        card: '#fff',
        text: '#fff',
        border: '#5856d6',
        notification: 'teal',
    },
    dividerColor: 'rgba(255,255,255,0.6)'
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':

            return { ...lightTheme }

        case 'set_dark_theme':

            return { ...darkTheme }

        default:
            return state;
    }



}