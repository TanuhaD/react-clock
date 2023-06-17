import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock/Clock";
import PointerClock from "./components/PointerClock/PointerClock";
import SelectTimeZone from "./components/SelectTimeZone/SelectTimeZone";
import Calendar from "./components/Calendar/Calendar";
const date = new Date();
function App() {
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());
  const [timeZone, setTimeZone] = useState(0);

  const upDateTime = (tz) => {
    const currentDate = new Date(Date.now() + tz * 60 * 60 * 1000);
    console.log("currentDate.getHours()", currentDate.getHours());
    console.log("timeZone", tz);
    setHours(currentDate.getHours());
    setMinutes(currentDate.getMinutes());
    setSeconds(currentDate.getSeconds());
    setYear(currentDate.getFullYear());
    setMonth(currentDate.getMonth() + 1);
    setDay(currentDate.getDate());
  };

  useEffect(() => {
    const intervalId = setInterval(upDateTime, 1000, timeZone);
    return () => {
      clearInterval(intervalId);
    };
  }, [timeZone]);

  return (
    <>
      <Calendar year={year} month={month} day={day} />
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <PointerClock hours={hours} minutes={minutes} seconds={seconds} />
      <SelectTimeZone timeZone={timeZone} setTimeZone={setTimeZone} />
    </>
  );
}

export default App;
