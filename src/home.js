import React from "react";
import './home.css'
import Lp from "./component/landing-page";
import Policy from "./component/policy";

function Home() {
    return(
        <div className="home">
            <Lp/>
            <Policy/>
        </div>
    )
};

export default Home;