import logo from "./assets/alogo.png";

function Navigation() {
    return (
        <div>
            <h2>Navigation section</h2>
            <div className="nav">
                <img src={logo} width="45px" />
                <input placeholder="Search" />
            </div>
        </div>
    );
}

export default Navigation;




