import React, { useState, useEffect } from 'react';
import "./schedule.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import MyCalendar from "../calendar";
import Assets from '../assets/asset';
import Progress from "../tools/progress";


export default function Schedule() {
    const [asset, setAsset] = useState("");

    const options = [
        'drivers', 'vehicle'
    ];
    const defaultOption = options[1];
    const AssetList = [
        { image: "https://th.bing.com/th/id/OIP.PEwCZ4UmvaOPh9diPWWupgHaE8?pid=ImgDet&rs=1", driverImage:"https://th.bing.com/th/id/OIP.NIdd_P5O33UO3dmzoM1dkwHaLJ?pid=ImgDet&rs=1", name: "Lexus GLS 500", type: "Full size SUV", task: "needs repair", tasktype: 0, startDate: "2023-02-06T14:19:34.919165+00", endDate: "2023-02-06T14:19:34.919165+00", days: 3, driver: "Winton Gay", client: "Bill", driverPosition: "senior driver", organisation: "Dangote Ltd" },
        { image: "https://th.bing.com/th/id/R.c67ca8681051c8a6b4c029392dc35118?rik=%2b654gK6REPeQrg&pid=ImgRaw&r=0", driverImage: "https://i.pinimg.com/736x/94/a1/f9/94a1f98e6debf0118b9bb0169512bcb0.jpg", name: "Lexus GLS 450", type: "Full size SUV", driverPosition: "senior driver", task: "Great Condtion", tasktype: 1, startDate: "2023-02-06T14:19:34.919165+00", endDate: "2023-02-07T14:19:34.919165+00", days: 2, driver: "Winton Gay", client: "Richard", organisation: "Individual" },
        { image: "https://th.bing.com/th/id/OIP.EDuUvybM6ljsHgBvjc1YCwHaEo?pid=ImgDet&rs=1", driverImage: "https://th.bing.com/th/id/OIP.34GzR67PLDXmQg8Hx3OhPgAAAA?pid=ImgDet&w=350&h=550&rs=1", name: "Toyota Camry", type: "Mid Size Sedan", task: "Great Condtion", tasktype: 1, startDate: "2023-02-06T14:19:34.919165+00", endDate: "2023-02-09T14:19:34.919165+00", days: 4, driver: "Winton Gay", driverPosition: "standard driver", client: "Charles", organisation: "British petroleum" }
,]
    function getFirstDayOfWeek(date) {
        const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
        const daysToSubtract = (dayOfWeek + 6) % 7;
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() - daysToSubtract);
    }
    function getWeekFromDate(date) {
        const firstDayOfWeek = getFirstDayOfWeek(date); // Assuming you have the getFirstDayOfWeek function

        const week = Array.from({ length: 7 }, (_, i) => {
            const currentDate = new Date(firstDayOfWeek);
            currentDate.setDate(firstDayOfWeek.getDate() + i);
            return currentDate;
        });

        return week;
    }


    const currentDate = new Date(AssetList[0].startDate.split("T")[0]); // You can replace this with any date you want
    const firstDayOfWeek = getFirstDayOfWeek(currentDate);
    const weekStartingFromFirstDay = getWeekFromDate(firstDayOfWeek);
    const [week, setWeek] = useState(weekStartingFromFirstDay);
    // useEffect(() => {
    //     setWeek(weekStartingFromFirstDay)

    // }, [weekStartingFromFirstDay])
    const scheduleDate = [];
    return (
        <div className='schedule'>
            <div className='schedule__top'>
                <div className='schedule__select'>
                    <p>Schedule for</p>
                    <Dropdown className='schedule__dropdown' onChange={(e => setAsset(e.label))} options={options} value={defaultOption}  placeholder="Select an option" />
                </div>
                <div className='schedule__select'>
                    <p>View:</p>
                    <div className='schedule__select__button'>
                        <button>Day</button>
                        <button>Month</button>
                        <button>Year</button>
                    </div>
                </div>
            </div>
            <div className='schedule__bottom'>
                <MyCalendar values={AssetList.map(item => new Date(item.endDate.split("T")[0]))} />
                <div className='schedule_container'>
                    <div className='schedule_table'>
                        <div className='schedule_table_side1'>
                            <div className='schedule_table_header'>
                                <p>{asset === "drivers" ? "Drivers" : "Vehicles"}</p>
                            </div>
                            {
                                AssetList.map((item, index) => {
                                    return <Assets key={index} image={asset === "drivers" ? item.driverImage : item.image} name={asset === "drivers"? item.driver :item.name} type= { asset === "drivers" ? item.driverPosition : item.type} task={asset === "drivers" ? "" : item.task} tasktype={asset === "drivers" ? "" : item.tasktype} />

                                })
                            }
                        </div>
                        <div className='schedule_table_side2'>
                            <div className='schedule_table_header schedule_table_header_side2'>
                                {week.map((day, index) => { return <p key={index}>{day.toDateString().split(" ")[0] + " " + day.toDateString().split(" ")[2]}</p> })}
                            </div>
                            {
                                AssetList.map((item, index)=> {
                                    return   <Progress key={index} assetname={asset === "drivers" ? item.name : item.driver} client={item.client} company={item.organisation} width={(item.days / 7) * 100} />

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}