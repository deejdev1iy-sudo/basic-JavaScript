import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./Home";
import About from "./About";
import OtherRouting from "./OtherRouting";
import Page404 from "./404";

function Routing () {
    return(
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/other/route/curve" element={<OtherRouting />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
     </BrowserRouter>
    ); 
}

export default Routing;