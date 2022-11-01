import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "../Components/Styles/height.module.css";
import { ChevronLeftIcon} from "@chakra-ui/icons"
function Height()
{
    const navigate=useNavigate();
    return (
        <div className={styles.outer}>
            <img className={styles.image} src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg" width="16%" alt="logo"/>
            <div className={styles.inner}>
                <h1 style={{cursor:"pointer"}} onClick={()=>navigate("/gender")} ><ChevronLeftIcon/></h1>
                <br/>
                    <h1 className={styles.title}>What's your height?</h1>
                    <input isRequired style={{padding:"7px 0%",marginLeft:"7%",marginTop:"20px",border:"1px solid #FF9400",borderRight:"1px solid white",outline:"none"}} placeholder="Height" type="number"/>
                    <select isRequired style={{padding:"10px 18%",marginTop:"20px",border:"1px solid #FF9400",outline:"none"}}>
                        
                        <option>ft/in</option>
                        <option>cm</option>
                    </select>
                    <div className={styles.button}>
                            <Button 
                            variant="unstyled" 
                            bg="#FF9400" 
                            color="#fff"
                            onClick={()=>navigate("/dob")} 
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
export default Height