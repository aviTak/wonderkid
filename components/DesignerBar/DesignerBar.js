import styles from './DesignerBar.module.css'

export default function DesignerBar(){
    return (
        <div className={styles.container}>
            <div className={styles.blue_circle}></div>
            <div className={styles.outer_circle}></div>
            <div className={styles.triangle}></div>
            <div className={styles.rectangle}></div>
            <div className={styles.big_orange}></div>
            <div className={styles.small_orange}></div>
            <div className={styles.arrow_container}>
                <div className={styles.arrow}>

                    <div className={styles.contain_1}>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>
                        <span className={styles.arrow_tilt_1}>|</span>                    
                    </div>

                    <div className={styles.contain_2}>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                        <span className={styles.arrow_tilt_2}>|</span>
                    </div>
                </div>
            </div>
            <div className={styles.yellow_circle}></div>
        </div>
    )
}