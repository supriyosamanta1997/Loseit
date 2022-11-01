import styles from "../Styles/Store.module.css"
function Store()
{
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
            <h3 className={styles.Mobile}>Get Started on Mobile</h3>
            <div className={styles.media}>
                <div className={styles.y}>
                    <img src="https://assets.loseit.com/website/home/Download_Apple.svg" alt="apple" width="92%"/>
                </div>
                <div className={styles.y}>
                <img src="https://assets.loseit.com/website/home/Download_GooglePlay.svg" alt="apple" width="100%"/>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Store