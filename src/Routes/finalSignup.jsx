import { Alert, AlertIcon, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../Components/Styles/finalsignup.module.css"
import { useUserAuth } from "../context/Authcontext"
function FinalSignup()
{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate=useNavigate();
    const {SignUp}=useUserAuth()
    const handleSubmit=async ()=>{
        setError("")
        try{
            await SignUp(email,password);
            alert("Account Created Succesfully!")
            navigate("/login")
           
        }
        catch(err)
        {
            setError(err.message)
            alert("Email Or Password is Required")
           
        }
    }
    return(
        <div className={styles.outer}>
        <img className={styles.image} src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg" width="16%" alt="logo"/>
        <div className={styles.inner}>
        <div className={styles.titlediv}>
                    <h1 className={styles.title}>Create an account to save your plan.</h1>
        </div>
        {/* {error && <Alert status='error'> <AlertIcon /> {error}</Alert>} */}
        <VStack maxW="xs" margin='auto' mt={20}>
        <FormControl isRequired>
        {/* <FormLabel>First name</FormLabel> */}
        <Input  borderColor="gray.400" placeholder='First Name' />
        </FormControl>
        <br/>
        <FormControl isRequired>
        {/* <FormLabel>First name</FormLabel> */}
        <Input  borderColor="gray.400" variant='outline' placeholder='Last Name' />
        </FormControl>
        <br/>
        <br/>
        <FormControl isRequired>
        {/* <FormLabel>First name</FormLabel> */}
        <Input  borderColor="gray.400" variant='outline' 
        type='email'
         placeholder='Email' 
         onChange={(e)=>setEmail(e.target.value)} />
         
        </FormControl>
        <br/>
        <br/>
        <FormControl isRequired>
        {/* <FormLabel>First name</FormLabel> */}
        <Input  borderColor="gray.400" variant='outline' 
         placeholder=' Password (Must Be Atleast  of 6 Characters)'
         onChange={(e)=>setPassword(e.target.value)} />
        </FormControl>

        </VStack>
        <div className={styles.button} onClick={handleSubmit} >Get Started</div>
        </div>
        </div>
    )
}
export default FinalSignup