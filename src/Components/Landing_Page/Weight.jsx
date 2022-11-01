import styles from '../Styles/Weight.module.css'
import {Box, Container, SimpleGrid} from "@chakra-ui/react"
function Weight()
{
    return (
        <Container maxW='8xl' className={styles.outer}>
            <h2 className={styles.heading}>Weight Loss Made Easy</h2>
            <SimpleGrid columns={3}  className={styles.content}>
                <Box className={styles.box}>
                <div className={styles.flexElement}>
                <h3 className={styles.feheading}>Set Your Goals</h3>
                <img src="https://assets.loseit.com/website/home/Home_SetGoal.svg" alt="flag"/>
                <p className={styles.fetitle}>Tell us what you want to acheive and receive personalized goals.</p>
                </div>
                </Box>
                <Box className={styles.box}>
                <div className={styles.flexElement}>
                <h3 className={styles.feheading}>Track Your Food</h3>
                <img src="https://assets.loseit.com/website/home/Home_TrackFoods.svg" alt="food"/>
                <p className={styles.fetitle}>Learn about the foods you’re eating and keep your calories within your daily budget.</p>
                </div>
                </Box>
                <Box className={styles.box}>
                <div className={styles.flexElement}>
                <h3 className={styles.feheading}>Lose Weight</h3>
                <img src="https://assets.loseit.com/website/home/Home_LoseWeight.svg" alt="ribbon"/>
                <p className={styles.fetitle}>Reach your goals and continue to set new ones for a happier, healthier you!</p>
                </div>
                </Box>

            </SimpleGrid>
        </Container>
    )
}
export default Weight