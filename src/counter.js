import { RotateCcw } from "react-feather";
import { Hash } from "react-feather";
import { ChevronUp } from "react-feather";
import { ChevronDown } from "react-feather";
import { ChevronsUp } from "react-feather";
import { ChevronsDown } from "react-feather";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseByOne = () => {
    return setCount(count + 1);
  };

  const increaseByTen = () => {
    return setCount(count + 10);
  };

  const setReset = () => {
    return setCount(0);
  };

  const decreaseByOne = () => {
    return setCount(count - 1);
  };

  const decreaseByTen = () => {
    return setCount(count - 10);
  };

  const setRandom = () => {
    return setCount(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="counter_container">
      <p>Current Value:</p>
      <h1> {count} </h1>

      <div className="icon_container">
        <ChevronUp className="icon" onClick={increaseByOne} />
        <ChevronsUp className="icon" onClick={increaseByTen} />
        <RotateCcw className="icon" onClick={setReset} />
        <Hash className="icon" onClick={setRandom} />
        <ChevronsDown className="icon" onClick={decreaseByTen} />
        <ChevronDown className="icon" onClick={decreaseByOne} />
      </div>
    </div>
  );
};

export default Counter;
