import {Routes,Route} from "react-router-dom";
import Dob from "./Dob";
import FinalSignup from "./finalSignup";
import Gender from "./gender";
import Height from "./Height";
import Home from "./Home";
import Login from "./Login";
import Plan from "./plan";
import Signup from "./Signup";
import Signup1 from "./SIgnup1";
import Signup2 from "./Signup2";
function AllRoute()
{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signup1" element={<Signup1/>}/>
            <Route path="/signup2" element={<Signup2/>}/>
            <Route path="/gender" element={<Gender/>}/>
            <Route path="/height" element={<Height/>}/>
            <Route path="/dob" element={<Dob/>}/>
            <Route path="/plan" element={<Plan/>}/>
            <Route path="/finalsignup" element={<FinalSignup/>}/>
        </Routes>
    )
}
export default AllRoute;