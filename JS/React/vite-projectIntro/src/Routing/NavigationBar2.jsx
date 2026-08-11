import { useNavigate, useLocation } from "react-router";

function NavigationBar2() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (btnLocation) => {
        if(location.pathname === btnLocation) {
            return {backgroundColor: 'blue', color: 'black'}
        }
        return {}
    };

    return (
        <div>
            <button style={isActive("/")} onClick={() =>navigate ("/")}>Home</button>
            <button style={isActive("/about")}onClick={() => navigate("/about")}>About</button>
            <button style={isActive("/other/route/curve")}onClick={() => navigate("/other/route/curve")}>OtherRouting</button>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
}

export default NavigationBar2;