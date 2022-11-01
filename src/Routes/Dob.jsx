import { Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "../Components/Styles/dob.module.css";
import {ChevronLeftIcon} from "@chakra-ui/icons"
function Dob()
{
    const navigate=useNavigate();
    return (
        <div className={styles.outer}>
            <img className={styles.image} src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg" width="16%" alt="logo"/>
            <div className={styles.inner}>
                <h1 style={{cursor:"pointer"}} onClick={()=>navigate("/height")} ><ChevronLeftIcon/></h1>
                <br/>
                    <h1 className={styles.title}>When's your birthday?</h1>
                    <div className={styles.date}>

                    <Input isRequired type="date"/>
                    </div>
                    <div className={styles.button}>
                    <Button 
                            variant="unstyled" 
                            bg="#FF9400" 
                            color="#fff"
                            onClick={()=>navigate("/plan")} 
                            paddingInline="30%">CONTINUE</Button>
                            <br/>
                        </div>
                        <p className={styles.footer}>
                    To create your personalized weight loss plan, Lose It! uses 
                    BMR (Basal Metabolic Rate) to calculate your calorie budget, 
                    which requires weight, height, biological sex and age as inputs.
                    </p>
            </div>

        </div>
    )
}
export default Dob