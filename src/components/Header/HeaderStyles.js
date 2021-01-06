import {createUseStyles} from 'react-jss'

const useStyles  = createUseStyles ({
    row: {
        display: "flex",
        height: "100px",
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: "55px",
    },
    menu: {
        display: "flex",
        ailgnItems: "center",
    },
    logoText: {
        fontSize: "35px",
    }
})

export default useStyles;