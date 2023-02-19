import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;


const fonts_family = StyleSheet.create({
    black: { fontFamily: `SFUIDisplay-Black` },

    bold: { fontFamily: `SFUIDisplay-Bold` },

    heavy: { fontFamily: `SFUIDisplay-Heavy` },

    light: { fontFamily: `SFUIDisplay-Light` },

    medium: { fontFamily: `SFUIDisplay-Medium` },

    regular: { fontFamily: `SFUIDisplay-Regular` },

    semibold: { fontFamily: `SFUIDisplay-Semibold` },

    thin: { fontFamily: `SFUIDisplay-Thin` },

    ultralight: { fontFamily: `SFUIDisplay-Ultralight` },

})

const size = StyleSheet.create({
    double: { fontSize: 0.10 * width},
    xxl: { fontSize: 0.08 * width},
    xl: { fontSize: 0.06 * width },
    l: { fontSize: 0.05 * width },
    d: { fontSize : 0.04 * width },
    m: { fontSize: 0.03 * width },
    s: { fontSize: 0.02 * width },
    xs: { fontSize: 0.02 * width },
})

export { size, fonts_family };