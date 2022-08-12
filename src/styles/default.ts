import { TagName } from '../services/Atom'
import COLORS from '../theme/colors'
import FONTS from '../theme/fonts'

const defaultValue: Partial<Record<TagName, any>> = {
    "Text": {
        "color": COLORS.MAIN.TEXT,
        "fontSize": FONTS.SIZE[14],
        "fontFamily": FONTS.FAMILY.Montserrat_400Regular,
        "fontWeight": FONTS.WEIGHT.normal,
    },
    "View": {
        "backgroundColor": COLORS.MAIN.BACKGROUND,
        "margin": 0,
        "padding": 0,
        "boxSizing": "border-box",
        "position": "static"
    },
    "Pressable": {
        "backgroundColor": COLORS.SECONDARY.BACKGROUND
    },
}

export default defaultValue
