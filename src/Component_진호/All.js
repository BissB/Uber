import {TextContent1, Image1, TextContent2, Image2} from ".";
import styles from './All.module.css';

function All() {
  return (
    <>
    <div className={styles.All}>
      <Image1 />
      <TextContent1 />
    </div>
    <div className={styles.All}>
      <TextContent2 />
      <Image2 />
    </div>
    </>
  );
}

export default All;
