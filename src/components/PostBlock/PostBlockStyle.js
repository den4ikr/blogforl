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
    button: {
        paddingLeft: "25px",
        paddingTop: "25px",
        display: 'flex',
        
    },
    existTitle: {
        textAlign: "center",
        fontSize: "25px",
        paddingTop: "50px"
    },
    comment: {
        marginLeft: "25px",
    },
    editModeBlock: {
        display: 'flex',
    },
    editModeButton: {
        marginLeft: "15px",
    },
    commentBody: {
        paddingLeft: "25px",
        fontSize: "20px",
        paddingTop: "15px",
    },
    commentTitle: {
        paddingLeft: "25px",
        fontSize: "25px",
        paddingTop: "25px",
    }
})

export default useStyles;