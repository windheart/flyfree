import {createMuiTheme} from '@material-ui/core';
import {blueGrey} from '@material-ui/core/colors';

export const theme = createMuiTheme({
    typography: {
        htmlFontSize: 16,
    },
    palette: {
        text: {
            primary: blueGrey[800],
        }
    }
})