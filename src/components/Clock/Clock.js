import React, {useState} from "react";
import ReactInterval from "react-interval";
import * as moment from "moment";

const Clock = () => {

    const [date, setDate] = useState(new Date());

    const handleInterval = () => {
        setDate(new Date());
    };

    return (
        <>
            <ReactInterval timeout={1000} enabled={true} callback={handleInterval}/>
            <span>{moment(date).format("YYYY.MM.DD. HH:mm:ss")}</span>
        </>
    );
};

export default Clock;