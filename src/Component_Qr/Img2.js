import uberImage from './Img/Uber-App.jpg';
import styles from './Componentindex.module.css';


function Img2() {

    return (
        <div className= {styles.imgFile2}>
        <img src={uberImage} alt="uber.img">
        </img>
        </div>
    );
}


export default Img2;