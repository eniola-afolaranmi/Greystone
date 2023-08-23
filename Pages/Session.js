import React from "react";
import "./Session.css";
import { Card } from "../src/containers";
import mountain from "./assets/cn-gray.svg"

const Session = () => {
    return (
        <div className="Session">
            <div className="Mountain_background">
                <img src={mountain}/>
            </div>
            <Card />
        </div>
    )
}

export default Session