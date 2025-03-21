import uberImage from './Img/Uber-App.jpg';
import styles from './Componentindex.module.css';


function Img() {

    return (
        <div className= {styles.imgFile}>
        <img src={uberImage} alt="uber.img">
        </img>
        </div>
    );
}


export default Img;