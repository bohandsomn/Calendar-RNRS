function fontSize(size: number) {
    return size
}

const size = {
    14: fontSize(14),
    16: fontSize(16),
    24: fontSize(24),
    64: fontSize(64),
}

const weight = {
    black: '900' as const,
    extrabold: '800' as const,
    bold: '700' as const,
    semiBold: '600' as const,
    medium: '500' as const,
    normal: '400' as const,
    light: '300' as const,
    extraLight: '200' as const,
    thin: '100' as const,
}

const family = {
    Montserrat_400Regular: 'Montserrat_400Regular' as const,
    Montserrat_700Bold: 'Montserrat_700Bold' as const,
}

const FONTS = {
    SIZE: size,
    WEIGHT: weight,
    FAMILY: family
}

export default FONTS
