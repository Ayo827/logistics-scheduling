import React from "react";
import Menu from "../../components/menu/menu";
import "./Home.css";
import Tool from "../../components/tools/tool";
import Metrics from "../../components/tools/metrics";
import Schedule from "../../components/schedule/schedule";
import { useStateValue } from "../../StateProvider";


export default function Home() {
    const [{ title }, dispatch] = useStateValue();

    return (
        <div className="Home">
        <div className="Home__main">
            <Menu />
            <section className="home__section">
                <Tool />
                <div className="home__section__inner">
                    <h2>{title}</h2>
                    <Metrics />
                </div>
                <Schedule />
            </section>
            </div>
        </div>
    )
}