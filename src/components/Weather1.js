import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Weather1() {
    const apiKey = "e0ddc538b3415427caeb7901218a30dd";
    const [text, setText] = useState("Ho Chi Minh");
    const [data, setData] = useState(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}`;
    const getData = () => {
        axios.get(url).then(function (res) {
            setData(res.data);
            console.log(res);
        });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder="Nhập tên thành phố"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter" && text) {
                        getData();
                    }
                }}
            />
            <h1>{data && data.weather[0].description}</h1>
            <img src={`http://openweathermap.org/img/w/${data && data.weather[0].icon}.png`} />
        </div>
    );
}
