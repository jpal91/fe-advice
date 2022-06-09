import borders from '../borders'
import colors from '../colors'

const { borderRadius } = borders
const { neutral } = colors

const card = {
    styleOverrides: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 375,
            maxWidth: 490,
            borderRadius: borderRadius.xl,
            backgroundColor: neutral.dgBlue,
            overflow: 'visible'
        }
    }
}

export default card