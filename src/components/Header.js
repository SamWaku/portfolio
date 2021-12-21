import Typed from "react-typed";
const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1> Hi. I'm Sam,
                    Welcome to my portfolio</h1>
                <Typed
                    className="typed-text"
                    strings={["Web dev", "Mobile App Dev", "Blochain tech", "NFTs", "Smart contracts"]}
                    startDelay={10}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                />
                
                <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header;