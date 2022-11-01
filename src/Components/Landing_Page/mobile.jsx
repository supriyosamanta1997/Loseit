import { Box, Container, Image, SimpleGrid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import styles from '../Styles/Mobile.module.css'
function Mobile()
{
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/signup")
    }
    return(
        <Container maxW='8xl' className={styles.outer}>
            <SimpleGrid columns={2} spacing={20} className={styles.inner}>
                <Box maxW='md' ml={10} className={styles.box}>
                    <Image src='https://assets.loseit.com/website/home/Screenshot_LogScreenFixed.png' alt="mobile" width='88%'/>
                </Box>
                <Box maxW='lg' ml={-40} className={styles.box}>
                <h1 className={styles.heading}>Top Rated<br/> Weight Loss Plan</h1>
                <p className={styles.p}>Track the foods you love and lose weight</p>
                <button onClick={handleClick} className={styles.button} >
                Sign Up For Free
                </button>
                <Box className={styles.rating}>
                
                </Box>   
                </Box>

            </SimpleGrid>
        </Container>
    )
}
export default Mobile