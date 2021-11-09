import Typed from "react-typed";
const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1> welcome to my portfolio</h1>
                <Typed
                    className="typed-text"
                    strings={[" Web development","Machine learning", "mobile app"]}
                    typeSpeed={15}
                    backSpeed={20}
                    loop
                />
                
                <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header;