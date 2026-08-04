import Navigation from "./Navigation";
import MainSection from "./MainSection";
import SideBar from "./SideBar";

function AmazonPage(){
    return(
        <div>
            <Navigation img={"https://m.media-amazon.com/images/I/719M6JVne6L._AC_UL480_FMwebp_QL65_.jpg"} />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <MainSection />
            </div>
        </div>
    );
}

export default AmazonPage;