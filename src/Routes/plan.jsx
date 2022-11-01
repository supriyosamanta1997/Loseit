
import { useNavigate } from 'react-router-dom'
import styles from '../Components/Styles/plan.module.css';
import {ChevronLeftIcon} from "@chakra-ui/icons"
function Plan()
{
    const navigate=useNavigate()
    return(
        <div className={styles.outer}>
            <img className={styles.image} src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg" width="16%" alt="logo"/>
            <div className={styles.inner}>
            <h1 style={{cursor:"pointer"}} onClick={()=>navigate("/dob")}><ChevronLeftIcon/></h1>
            <br/>
                    <h1 className={styles.title}>Your personal weight loss<br/> plan is ready.</h1>
                    <div className={styles.list}>
                        <div className={styles.icon} >
                            <img src='https://assets.loseit.com/website/onboarding/PlanWatermelon.svg' alt="" width='70%' />
                        </div>
                        <div className={styles.details}>
                            <h1>Daily calorie budget:</h1>
                            <h1 className={styles.calories}>1744 calories</h1>
                        </div>
                        
                    </div>
                    <br/>
                    
                    <div className={styles.list}>
                        <div className={styles.icon} >
                            <img src='https://assets.loseit.com/website/onboarding/PlanAward.svg' alt="" width='70%' />
                        </div>
                        <div className={styles.details}>
                            <h1>Total Weight Loss:</h1>
                            <h1 className={styles.calories}>135 Pounds</h1>
                        </div>
                        
                    </div>
                    <br/>
                    <div className={styles.list}>
                        <div className={styles.icon} >
                            <img src='https://assets.loseit.com/website/onboarding/PlanCalendar.svg' alt="" width='70%' />
                        </div>
                        <div className={styles.details}>
                            <h1>Weekly weight Loss:</h1>
                            <h1 className={styles.calories}>2 Pounds</h1>
                        </div>
                        
                    </div>
                    <br/>
                    <div className={styles.list}>
                        <div className={styles.icon} >
                            <img src='https://assets.loseit.com/website/onboarding/PlanStar.svg' alt="" width='70%' />
                        </div>
                        <div className={styles.details}>
                            <h1>Goal Date:</h1>
                            <h1 className={styles.calories}>September 15, 2024</h1>
                        </div>
                        
                    </div>
            <div className={styles.button} onClick={()=>navigate("/finalsignup")}>GET LOSE IT!</div>
            </div>
        </div>
    )
    
}
export default Plan