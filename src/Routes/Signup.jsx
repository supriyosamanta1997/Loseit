import styles from "../Components/Styles/signup.module.css"
import {Button} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
function Signup()
{
    const navigate=useNavigate()
    return (
        <div className={styles.outer}>
           

            <img className={styles.image} src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg" width="16%" alt="logo"/>
            <div className={styles.inner}>
                    <div className={styles.photo}>
                        <div className={styles.phtitlediv}>
                            <h1 className={styles.phtitle}>Take the first step towards
                            a healthier you with Lose It!
                            </h1>
                        </div>
                        <div className={styles.imgRow}>
                            <div className={styles.rowImg}>
                                <img src='https://assets.loseit.com/website/onboarding/SetGoal.svg'  width='80%' alt="set"/>
                                <p style={{fontSize:"13px",textAlign:"center",marginTop:"10px"}}>SET YOUR GOALS</p>
                            </div>
                            <div className={styles.rowImg}>
                            <img src='https://assets.loseit.com/website/onboarding/TrackFoods.svg'  width='80%' alt="set"/>
                                <p style={{width:"110%",fontSize:"13px",textAlign:"center",marginTop:"10px"}}>TRACK YOUR FOOD</p>
                            </div>
                            <div className={styles.rowImg}>
                            <img src='https://assets.loseit.com/website/onboarding/LoseWeight.svg'  width='80%' alt="set"/>
                                <p style={{fontSize:"13px",textAlign:"center",marginTop:"10px"}}>LOSE WEIGHT</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.details}>
                        <div className={styles.countdiv}>

                        <h1 className={styles.counted}>Have You Counted Callories Before?</h1>
                        </div>
                        <div className={styles.button}>
                            <Button 
                            variant="unstyled" 
                            bg="#FF9400" 
                            color="#fff"
                            onClick={()=>navigate("/signup1")} 
                            paddingInline="40%">YES</Button>
                            <br/>
                            <br/>
                            <Button 
                            variant="unstyled" 
                            bg="#FF9400" 
                            color="#fff" 
                            onClick={()=>navigate("/signup2")} 
                            paddingInline="42%">No</Button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Signup