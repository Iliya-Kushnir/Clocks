import React from "react";
import styles from "./GridImg.module.scss";

const GridLayout = () => {

    /*
                <div className={styles.gridContainer}>
                <div className={styles.gridItem1}><img className={styles.img} src="/compressed/RoundWatch.png" alt="" /></div>
                <div className={styles.gridItem3}><img className={styles.img} src="/compressed/SmallWatch.png" alt="" /></div>
                <div className={styles.gridItem4}><img className={styles.img} src="/compressed/SmallWatch2.png" alt="" /></div>
                <div className={styles.gridItem2}><img className={styles.img} src="/compressed/BigWatch.png" alt="" /></div>
            </div>
            <div className={styles.restImgs}>
                <div>

                </div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>
    */

    return (
        <>
            <div class={styles.worksGrid}>
                <img src="/compressed/RoundWatch.png" className={styles.wide}/>
                <img src="/images/light.png" className={styles.small} />
                <img src="/compressed/SmallWatch2.png" className={styles.small} />
                <img src="/compressed/BigWatch.png" className={styles.wide} />
                <img src="/images/bigWatch2.png" className={styles.wide} />
                <img src="/images/vostok.png" className={styles.small} />
                <img src="/images/alarm.png" className={styles.small} />
                <img src="/images/lighthouse.png" className={styles.small} />
                <img src="/compressed/SmallWatch.png" className={styles.small}  />
                <img src="/images/bigClock.png" className={styles.wide} />
            </div>


        </>
    )
}

export default GridLayout