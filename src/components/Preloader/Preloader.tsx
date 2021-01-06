import loading from "../../assets/Blocks-1s-200px.svg";
import useStyles from "./PreloaderStyle";

const Preloader = () => {
    const s = useStyles ();

    return (
        <div className = {s.preloaderWrapper} >
            <img alt = "Preloader" src = {loading} />
        </div>
    )
}

export default Preloader;