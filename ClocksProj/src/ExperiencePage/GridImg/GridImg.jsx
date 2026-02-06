import React from "react";
import styles from "./GridImg.module.scss";

const GridLayout = () => {
    return (
        <>
            <div className={styles.worksGrid}>
                {/* Оригинальные фото (1-32) — оставляем как было для сохранения старой сетки */}
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
                <img src="/images/watchesDefault.jpg" alt="" className={styles.small}/>
                <img src="/images/TomyWatches.jpg" className={styles.small} />
                <img src="/images/SuitWatches.jpg" alt="" className={styles.small}/>
                <img src="/images/oldWatches.jpg" className={styles.small} />
                <img src="/images/Majak.jpg" className={styles.small} />
                <img src="/images/Orient.jpg" alt="" className={styles.small}/>
                <img src="/images/Carnival.jpg" className={styles.small} />
                <img src="/images/Canion.jpg" className={styles.small} />
                <img src="/images/Spring1.jpg" className={styles.small} />
                <img src="/images/Spring2.jpg" alt="" className={styles.small}/>
                <img src="/images/QQ.jpg" className={styles.small} />
                <img src="/images/sohne.jpg" className={styles.small} />
                <img src="/images/sohne2.jpg" alt="" className={styles.small}/>
                <img src="/images/Jantar.jpg" className={styles.small} />
                <img src="/images/Majak2.jpg" className={styles.small} />
                <img src="/images/seiko.jpg" alt="" className={styles.small}/>
                <img src="/images/michaelKors.jpg" className={styles.small} />
                <img src="/images/longines.jpg" className={styles.small} />
                <img src="/images/lighthouse.png" className={styles.small} />
                <img src="/compressed/SmallWatch.png" alt="" className={styles.small}/>
                <img src="/images/light.png" className={styles.small} />

                {/* --- НОВЫЕ ФОТО (33-54) ПЕРЕГРУППИРОВАНЫ ПО 6 ШТУК --- */}

                {/* Группа 1 (33-38) */}
                <img src="/images/hublot.jpeg" className={styles.wide}/>   {/* 33: Wide лево */}
                <img src="/images/photo_2026-01-26 18.41.18.jpeg" className={styles.small} />         {/* 34: Small центр верх */}
                <img src="/images/photo_2026-01-26 18.41.25.jpeg" className={styles.small} />          {/* 35: Small центр верх */}
                <img src="/images/photo_2026-01-26 18.41.28.jpeg" className={styles.wide} />    {/* 36: Wide право */}
                <img src="/images/photo_2026-01-26 18.41.30.jpeg" className={styles.small} />      {/* 37: Small центр низ */}
                <img src="/images/photo_2026-01-26 18.41.33.jpeg" className={styles.small} />     {/* 38: Small центр низ */}

                {/* Группа 2 (39-44) */}
                <img src="/images/photo_2026-01-26 18.41.36.jpeg" className={styles.wide} />        {/* 39: Wide лево */}
                <img src="/images/photo_2026-01-26 18.41.39.jpeg" className={styles.small} /> {/* 40: Small центр верх */}
                <img src="/images/photo_2026-01-26 18.41.42.jpeg" className={styles.small} /> {/* 41: Small центр верх */}
                <img src="/images/photo_2026-01-26 18.41.44.jpeg" className={styles.wide} />           {/* 42: Wide право */}
                <img src="/images/photo_2026-01-26 20.31.54.jpeg" className={styles.small} />    {/* 43: Small центр низ */}
                <img src="/images/photo_2026-01-26 20.31.57.jpeg" className={styles.small} />    {/* 44: Small центр низ */}

                {/* Группа 3 (45-50) */}
                <img src="/images/photo_2026-01-26 20.31.59.jpeg" className={styles.wide} />        {/* 45: Wide лево */}
                <img src="/images/photo_2026-01-26 20.32.02.jpeg" className={styles.small} />         {/* 46: Small центр верх */}
                <img src="/images/photo_2026-01-26 20.32.04.jpeg" className={styles.small} />        {/* 47: Small центр верх */}
                <img src="/images/photo_2026-01-26 20.32.06.jpeg" className={styles.wide} />          {/* 48: Wide право */}
                <img src="/images/photo_2026-01-26 20.32.08.jpeg" className={styles.small} />             {/* 49: Small центр низ */}
                <img src="/images/photo_2026-01-26 20.32.11.jpeg" className={styles.small} />          {/* 50: Small центр низ */}

                {/* Остаток (51-54) — Начало новой группы */}
                <img src="/images/photo_2026-01-26 20.32.13.jpeg" className={styles.wide} />           {/* 51: Wide лево */}
                <img src="/images/photo_2026-01-26 20.32.16.jpeg" className={styles.small} />         {/* 52: Small центр верх */}
                <img src="/images/photo_2026-01-26 20.35.37.jpeg" className={styles.small} />    {/* 53: Small центр верх */}
                <img src="/images/photo_2026-01-26 20.35.40.jpeg" className={styles.wide} />        {/* 54: Wide право */}
                <img src="/images/Spring1.jpg" className={styles.small} />
                <img src="/images/light.png" className={styles.small} />
                <img src="/images/hublot.jpeg" className={styles.small} />
            </div>
        </>
    );
};

export default GridLayout;