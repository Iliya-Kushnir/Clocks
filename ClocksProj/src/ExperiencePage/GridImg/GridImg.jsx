import React from "react";
import styles from "./GridImg.module.scss";

const GridLayout = () => {

    return (
        <>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem1}><img className={styles.img} src="/compressed/RoundWatch.png" alt="" /></div>
                <div className={styles.gridItem3}><img className={styles.img} src="/compressed/SmallWatch.png" alt="" /></div>
                <div className={styles.gridItem4}><img className={styles.img} src="/compressed/SmallWatch2.png" alt="" /></div>
                <div className={styles.gridItem2}><img className={styles.img} src="/compressed/BigWatch.png" alt="" /></div>
            </div>
        </>
    )
}

export default GridLayout