import FONTS from '../theme/fonts'
import METRICS from '../theme/metrics'

const STYLES = {
    "display-flex": {
        "display": "flex" as const
    },
    "flex-1": {
        "flex": 1 as const
    },
    "flex-wrap-wrap": {
        "flexWrap": "wrap" as const
    },
    "flex-direction-row": {
        "flexDirection": "row" as const
    },
    "justify-content-center": {
        "justifyContent": "center" as const
    },
    "justify-content-space-between": {
        "justifyContent": "space-between" as const
    },
    "align-items-center": {
        "alignItems": "center" as const
    },
    "border-radius-5": {
        "borderRadius": 5 as const
    },
    "font-family-montserrat-bold": {
        "fontFamily": FONTS.FAMILY.Montserrat_700Bold
    },
    "color-black": {
        "color": "black" as const
    },
    "background-color-white": {
        "backgroundColor": "white" as const
    },
    "background-color-black": {
        "backgroundColor": "black" as const
    },
    "margin-right-20": {
        "marginRight": 20 as const
    },
    "margin-left-20": {
        "marginLeft": 20 as const
    },
    "margin-top-40": {
        "marginTop": 40 as const
    },
    "margin-bottom-40": {
        "marginBottom": 40 as const
    },
    "margin-bottom-20": {
        "marginBottom": 20 as const
    },
    "padding-top-10": {
        "paddingTop": 10 as const
    },
    "padding-right-20": {
        "paddingRight": 20 as const
    },
    "padding-bottom-10": {
        "paddingBottom": 10 as const
    },
    "padding-left-20": {
        "paddingLeft": 20 as const
    },
    "padding-top-50": {
        "paddingTop": 50 as const
    },
    "padding-right-50": {
        "paddingRight": 50 as const
    },
    "padding-bottom-50": {
        "paddingBottom": 50 as const
    },
    "padding-left-50": {
        "paddingLeft": 50 as const
    },
    "position-absolute": {
        "position": "absolute" as const
    },
    "z-index-1": {
        "zIndex": 1
    },
    "left-0": {
        "left": 0 as const
    },
    "left-20": {
        "left": 20 as const
    },
    "top-20": {
        "top": 20 as const
    },
    "right-20": {
        "right": 20 as const
    },
    "bottom-20": {
        "bottom": 20 as const
    },
    "min-width-100%/7": {
        "minWidth": METRICS.screenWidth / 7
    },
    "max-width-100%/7": {
        "maxWidth": METRICS.screenWidth / 7
    },
    "width-100%/7": {
        "width": METRICS.screenWidth / 7
    },
    "width-80%": {
        "width": METRICS.screenWidth * 0.8
    },
    "width-100%": {
        "width": "100%"
    },
    "width-100px": {
        "width": 100
    },
    "height-80%": {
        "height": "80%" as const
    },
    "height-100%": {
        "height": "100%" as const
    },
    "height-70px": {
        "height": 70
    },
    "height-50px": {
        "height": 50
    },
    "height-100px": {
        "height": 100
    },
    "height-300px": {
        "height": 300 as const
    },
    "height-500px": {
        "height": 500 as const
    },
    "text-decoration-line-underline": {
        "textDecorationLine": "underline"
    }
}

export default STYLES
