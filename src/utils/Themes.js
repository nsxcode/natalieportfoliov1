import {defaultThemeColours, luxuryThemeColours, defaultNavGradient} from "./Colours";

export const defaultTheme = {
    navbarBackground: defaultNavGradient["background"],
    navLinks: defaultThemeColours["black"],
    background: defaultThemeColours['yellowBeige'],
    text: defaultThemeColours['black'],
    borderColor: defaultThemeColours['flushedPink'],
    hoverColor: defaultThemeColours['flushedPink'],
    cardBackgroundColor: defaultThemeColours['lightPink'],
    footerBackground:  defaultThemeColours['lightPink'],
};

export const luxuryTheme = {
    navbarBackground: luxuryThemeColours['navyBlue'],
    navLinks: luxuryThemeColours['white'],
    background: luxuryThemeColours['lightNavyBlue'] ,
    text: luxuryThemeColours['white'],
    borderColor: luxuryThemeColours['oceanBlue'],
    hoverColor: luxuryThemeColours['oceanBlue'],
    cardBackgroundColor: luxuryThemeColours['skyBlue'],
    footerBackground: luxuryThemeColours['navyBlue'],
};
