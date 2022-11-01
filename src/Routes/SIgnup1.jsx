
import { useNavigate } from "react-router-dom"
import styles from "../Components/Styles/signup1.module.css";
import { ChevronLeftIcon } from '@chakra-ui/icons'
function Signup1()
{
    const navigate=useNavigate()
    return <div className={styles.outer}>
         <img className={styles.image} src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg" width="16%" alt="logo"/>
         <div className={styles.inner}>
           
                <div className={styles.titlediv}>
                    <h1 className={styles.title}>You know the deal! Follow your <br/>calorie
                     budget to eat less than you<br/> burn and lose weight.</h1>
                </div>
                <div className={styles.weightdiv}>
                <div style={{cursor:"pointer"}} onClick={()=>navigate("/signup")}><ChevronLeftIcon/></div>
                    <br/>
                    <h1 className={styles.title}>Current Weight</h1>
                    <input isRequired style={{padding:"7px 0%",marginLeft:"7%",marginTop:"20px",border:"1px solid #FF9400",borderRight:"1px solid white",outline:"none"}} placeholder="Weight" type="number"/>
                    <select isRequired style={{padding:"10px 18%",marginTop:"20px",border:"1px solid #FF9400",outline:"none"}}>
                        <option>lb</option>
                        <option>kg</option>
                        <option>cm</option>
                    </select>
                    <br/><br/>
                    <h1 className={styles.title}>Goal Weight</h1>
                    <input isRequired style={{padding:"7px 0%",marginLeft:"7%",marginTop:"15px",border:"1px solid #FF9400",borderRight:"1px solid white",outline:"none"}} placeholder="Weight" type="number"/>
                    <select isRequired style={{padding:"10px 18%",marginTop:"15px",border:"1px solid #FF9400",outline:"none"}}>
                        <option>lb</option>
                        <option>kg</option>
                        <option>cm</option>
                    </select>
                    <br/><br/>
                    <div className={styles.button} onClick={()=>navigate("/gender")}>Continue</div>
                    <p className={styles.footer}>
                    To create your personalized weight loss plan, Lose It! uses 
                    BMR (Basal Metabolic Rate) to calculate your calorie budget, 
                    which requires weight, height, biological sex and age as inputs.
                    </p>
                </div>
         </div>
    </div>
}
export default Signup1