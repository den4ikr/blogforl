import {createUseStyles} from 'react-jss'

const useStyles  = createUseStyles ({
    title: {
        fontSize: "25px",
        padding: "20px 0px 15px 25px",
        textDecoration: "none",
    },
    body: {
        fontSize: "20px",
        paddingLeft: "25px",
    },
    postWrapper: {
        minHeight: "150px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        marginTop: "55px",
        paddingRight: "20px",
        paddingBottom: "20px",

    },
    inputBlock: {
        marginTop: "55px",
    },
    input: {
        marginTop: "10px",
    },
    buttonBlock: {
        marginTop: "10px",
    }
})

export default useStyles;