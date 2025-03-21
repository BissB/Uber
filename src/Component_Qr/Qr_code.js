import styles from "./Qr_code.module.css";
import { Header, Img, P, Img2, P2 } from "./Index";

function Qr_code() {
  return (
    <>
    <div className={styles.wrap}>
    <Header />
      <div className={styles.outlinebox}>
        <div className={styles.middlelinebox}>
          <a
            href="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3Dc0869c02-ea0b-4a0e-9858-2e42ecdb18da"
            className={styles.linkbox}
          >
            <div className={styles.innerbox}>
              <Img />
              <P />
              <div className={styles.arrow1}>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>

          <a
            href="https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792?referrer=singular_click_id%3D14b1add4-8a73-4f11-a3a2-db4daaf8392c"
            className={styles.linkbox2}
          >
            <div className={styles.innerbox2}>
              <Img2 />
              <P2 />
              <div className={styles.arrow2}>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Qr_code;
