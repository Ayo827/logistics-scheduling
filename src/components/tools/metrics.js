import React from 'react';
import "./metrics.css";

export default function Metrics() {
    const metricsData = [
        {
            currency: "$",
            amount: "500",
            percentageIncrease: "+12.5%",
            name: "Revenue",
            time: "(Last 30 Days)",
        },
        {
            currency: "$",
            amount: "300",
            percentageIncrease: "+12.5%",
            name: "Gross Margin",
            time: "",
        },
        {
            currency: "$",
            amount: "200",
            percentageIncrease: "+12.5%",
            name: "ROI for Vehicle",
            time: "",
        },
        {
            currency: "$",
            amount: "500m",
            percentageIncrease: "+12.5%",
            name: "Avg Rental Rate Across Fleets",
            time: "",
        },
        {
            currency: "$",
            amount: "300m",
            percentageIncrease: "+12.5%",
            name: "Annual Gain",
            time: "",
        }
    ]
    return (
        <div className='Metrics'>
            {
                metricsData.map((item, index) => {
                    return <div className={index === 0 ? "Metrics__list Metrics__list_first" : 'Metrics__list'} key={index}>
                        <p className='amount'>{item.currency} {item.amount}</p>
                        <div className='Metrics_details'>
                            <div className='metrics_percent'><small>{item.percentageIncrease}</small></div>
                            <div className='metrics_name'>
                                <p>{item.name}</p>
                                <p>{item.time}</p>
                            </div>
                        </div>
                    </div>
                })
            }
            <div className='Metrics__list_last Metrics__list_first'>
                <div className='metric_container'>
                    <p className='amount'>$ 70m</p>
                    <div className='Metrics_details'>
                        <div className='metrics_percent'><small>+12.5%</small></div>
                        <div className='metrics_name'>
                            <p>Total Pipeline</p>
                        </div>
                    </div>
                </div>
                <ul className='Metrics__sidelist'>
                    <li><small>$70m - $100m (High)</small></li>
                    <li><small>$40m - $70m (Mid)</small></li>
                    <li><small>$0m - $40m (Low)</small></li>
                </ul>
            </div>
        </div>

    )
}