
import styles from "../Styles/Footer.module.css";
import {AiFillApple} from "react-icons/ai";
import {FaFacebook,FaGoogle} from "react-icons/fa";
function Footer()
{
    return (
       <div className={styles.outer}>
        <div className={styles.links}>
            <img src='https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg'  alt="logo" className={styles.image} width={120}/>
            <div className={styles.inner}>

            <div style={{width:"28%",height:"80%"}}>
            <h3 className={styles.title}>Member Resources</h3>
            <p className={styles.content}>How It Works</p>
            <p className={styles.content}>Premier</p>
            <p className={styles.content}>Lose It! Blog</p>
            <p className={styles.content}>Help Center</p>
            </div>
            <div style={{width:"27%",height:"80%"}}>
            <h3 className={styles.title}>Contact around us</h3>
            <p className={styles.content}>Press And Media Kit</p>
            <p className={styles.content}>Contact Us</p>
            <p className={styles.content}>Partners & Api</p>
            <p className={styles.content}>Share Your Story</p>
            </div>
            <div style={{width:"25%",height:"80%"}}>
            <h3 className={styles.title}>Our Team</h3>
            <p className={styles.content}>About Us</p>
            <p className={styles.content}>Careers</p>
            <p className={styles.content}>Diversity</p>
           
            </div>
            </div>
        <div className={styles.socialMedia}>
            <div className={styles.icon}>
                
                <div ><AiFillApple w={8} h={8} /></div>
                <div ><FaFacebook/></div>
                <div ><FaGoogle/></div>
                <div ></div>
            </div>
            <p style={{width:"90%",marginTop:"3%",marginLeft:"auto",fontSize:"15px",fontWeight:"500"}}>Copyright 2008-2021 FitNow, Inc, All Rights Reserved</p>
            <span className={styles.span} >Privacy |</span> 
            <span className={styles.span2} > Terms Of Service</span>
           
        </div>
        
        </div>
       </div>

    )
}
export default Footer