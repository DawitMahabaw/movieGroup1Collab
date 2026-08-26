import React from 'react'

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.contents}>
                <img className={styles.logoImg} src={bannerLogo} alt="Netflix Logo" />
                <h1 className={styles.title}>Bridgerton</h1>

                <h1 className={styles.description}>Hey hsdbhs sbshs shbashd sad hdbshad hd sha</h1>

                <div className={styles.buttonContainer}>
                    <button className={styles.button}>
                        <Play size={30} />
                        Play
                    </button>
                    <button className={styles.button}>
                        <Info size={30} />
                        My List
                    </button>
                </div>


            </div >
            <div className={styles.fadeBottom}></div>
        </div >
    )
}

export default Banner
