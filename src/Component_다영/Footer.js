import styles from './Footer.module.css';
import { A1, B1, C1, D1  } from '.';

function Footer() {
  
  return (
    <footer>
      <section className={styles.section}>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <div className={styles.div4}>
                <div className={styles.Abox}>
                  <A1 />
                </div>
                <div className={styles.Bbox}>
                  <B1 />
                </div>
                <div className={styles.Cbox}>
                  <C1 />
                </div>
                <div className={styles.Dbox}>
                  <D1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer >
  );
}

export default Footer;
