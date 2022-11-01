

import Footer from "../Components/Footer/Footer"
import CarouselComponent from "../Components/Landing_Page/carousalcomponent"
import CarouselComponent2 from "../Components/Landing_Page/carouselComponent2"
import Mobile from "../Components/Landing_Page/mobile"
import Poundlist from "../Components/Landing_Page/PoundList"
import Store from "../Components/Landing_Page/store"
import Top_Part from "../Components/Landing_Page/Top_Part"
import Weight from "../Components/Landing_Page/Weight"

function Home()
{
    return (
        <>
        <Top_Part/>
        <Mobile/>
        <Weight/>
        <CarouselComponent/>
        <Poundlist/>
        <CarouselComponent2/>
        <Store/>
        <Footer/>
        </>
    )
}
export default Home