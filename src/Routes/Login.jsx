
import {Button, Container, Divider, FormControl, FormHelperText, FormLabel, HStack, Image, Input, TagLabel, Text, VStack} from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/Authcontext";
function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("")
    const {LogIn,GooglesignIn}=useUserAuth();
    const navigate=useNavigate();
    const handleSubmit=async ()=>{
        setError("")
        try{
            await LogIn(email,password);
            alert("Login  Succesfully!")
            navigate("/")
           
        }
        catch(err)
        {
            setError(err.message)
            alert("Email Or Password is Not Correct")
           
        }
    };
    const handleGoogleSignIn= async()=>{
        try{
            await GooglesignIn();
            alert("Login  Succesfully!")
            navigate("/")
           
        }
        catch(err)
        {
            setError(err.message)
            alert("Log In With Google Failed")
           
        } 
    }
    return (
        <Container  maxW='md' mt={10} height='100vh' border='1px solid #fff'>
            <Image src='https://my.loseit.com/LoseIt_Logo_FullColor.png' alt='logo' m='auto' mb={18} mt={8} width='30%' />
            <VStack>

            <FormControl maxW="sm">
            <FormLabel fontSize={14} fontWeight={500} required>Email address</FormLabel>
            <Input type='email' onChange={(e)=>setEmail(e.target.value)} isRequired/>
            </FormControl>
    
            <FormControl maxW="sm">
            <FormLabel fontSize={14} fontWeight={500}>Password</FormLabel>
            <Input type='Password' onChange={(e)=>setPassword(e.target.value)}  isRequired />
            </FormControl>
            <br/>
            <Button variant='unstyled' bg='#ff9400' paddingInline='40%'  color='#fff' onClick={handleSubmit} >Log In</Button>
            <br/>
            <p style={{color:"#ff9400",fontSize:"12px Avenir",marginBottom:'-10px'}}>Forgot Your Password?</p>
            <div>

            <span style={{ color:"#374151",fontWeight:"500",fontSize:"12px Avenir"}}>Don't have an account? </span>
            <span onClick={()=>navigate("/signup")} style={{color:"#ff9400",cursor:"pointer",fontSize:"12px Avenir"}}>Create One Now!</span>
            </div>
            
            </VStack>
            <HStack direction='row' h='100px' p={4}>
            <Divider ColorScheme="red" orientation='horizontal' />
            <Text>OR</Text>
            <Divider colorScheme="gray" orientation='horizontal' />
            </HStack>
            <VStack>

            <Button variant='unstyled' bg='black' 
            paddingInline='30%'  color='#fff' onClick={handleGoogleSignIn} >Sign in With Google</Button>
            <p style={{fontSize:"13px",fontWeight:"400"}}>Sign in with Facebook is no longer available</p>
            <p style={{fontSize:"13px",fontWeight:"400",color:"#ff9400"}}>Create A New Password?</p>
            </VStack>

        </Container>
    )
}
export default Login