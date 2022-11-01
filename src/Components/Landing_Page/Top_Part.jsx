
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Top_Part.module.css"
function Top_Part()
{
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/login")
    }
    return (
        <div className={styles.outer}>
            <div className={styles.logo}>
                <img src='https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg' alt="Logo" width="64%"/>
            </div>
            <div className={styles.btw}></div>
            <div className={styles.login}>
            <button onClick={handleClick} className={styles.button} >
                LogIn
            </button>
            </div>


        </div>
    )
}
export default Top_Part;