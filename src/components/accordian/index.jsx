import data from "./data";
import { useState } from "react";
import "./index.css";

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setenableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    function handleSingleSeclction(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSeclction(getCurrentId) {
        let copymultiple = [...multiple];
        const indexOfCurrentId = copymultiple.indexOf(getCurrentId);
        if (indexOfCurrentId === -1) {
        copymultiple.push(getCurrentId);
        } else {
        copymultiple.splice(indexOfCurrentId, 1);
        }
        setMultiple(copymultiple);
        console.log(indexOfCurrentId);
    }
    return (
        <div className="wrapper">
        <button
            className="enable-btn"
            onClick={() => setenableMultiSelection(!enableMultiSelection)}
        >
            {enableMultiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
        </button>
        <div className="Accordian">
            {data && data.length > 0 ? (
            data.map((accordian) => (
                <center>
                <div
                    className='item'
                >
                    <div
                    onClick={() =>
                        enableMultiSelection
                        ? handleMultiSeclction(accordian.id)
                        : handleSingleSeclction(accordian.id)
                    }
                    className="title"
                    >
                    <h3>{accordian.question}</h3>
                    <span>+</span>
                    </div>
                    {enableMultiSelection
                    ? multiple.indexOf(accordian.id) !== -1 && (
                        <div className="answer">{accordian.answer}</div>
                        )
                    : selected === accordian.id && (
                        <div className="answer">{accordian.answer}</div>
                        )}
                </div>
                </center>
            ))
            ) : (
            <center>
                <div>No data found !</div>
            </center>
            )}
        </div>
        </div>
    );
}
export default Accordian;
