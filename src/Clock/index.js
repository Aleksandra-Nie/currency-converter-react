import { useState, useEffect } from "react";
import { Timer } from "./styled";

const formatDate = {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Timer>
            Dzisiaj jest {date.toLocaleString(undefined, formatDate)}
        </Timer>
    );
};

export default Clock;