import { Box, Container, Image } from "@chakra-ui/react"
import styles from "../Styles/Pounds.module.css"

function Poundlist()
{
    return(
    <Container maxW='8xl' className={styles.outer}>
        <Box className={styles.content}>
            <Image src="https://assets.loseit.com/website/home/Ticker_Celebratory.svg" width={220} margin='auto' alt="img"/>
            <h1 className={styles.poundsLost}>124,234,560</h1>
            <h2 className={styles.poundslostTitle}>POUNDS LOST</h2>
            <hr className={styles.hrTag}/>
        </Box>
        <h3 className={styles.asseen}>AS SEEN ON</h3>
        <div className={styles.seenOnLogos}>
            <img className={styles.img1} src="https://assets.loseit.com/website/home/Feature_TodayShow.png" alt="today show" />
            <img className={styles.img1}  src="https://assets.loseit.com/website/home/Feature_People.png" alt="People magazine" />
            <img className={styles.img1} src="https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png" alt="good morning america" />
            <img className={styles.img1} src="https://assets.loseit.com/website/home/Feature_WomensHealth.png" alt="women's health" />
        </div>

    </Container>
    )
}
export default Poundlist