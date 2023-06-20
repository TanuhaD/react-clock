import css from "./PointerClock.module.css";
import PropTypes from "prop-types";
const PointerClock = ({ hours, minutes, seconds }) => {
  const deg = 6;
  const hoursDeg = hours * 30;
  const minutesDeg = minutes * deg;
  const secondsDeg = seconds * deg;

  return (
    <div className={css.container}>
      <div className={css.clock}>
        <div className={css.hours}>
          <div
            className={css.hoursArrow}
            style={{
              transform: `rotateZ(${hoursDeg + minutes / 12}deg)`,
            }}
          ></div>
        </div>
        <div className={css.minutes}>
          <div
            className={css.minutesArrow}
            style={{
              transform: `rotateZ(${minutesDeg}deg)`,
            }}
          ></div>
        </div>
        <div className={css.seconds}>
          <div
            className={css.secondsArrow}
            style={{
              transform: `rotateZ(${secondsDeg}deg)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
PointerClock.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default PointerClock;
