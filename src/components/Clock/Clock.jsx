import { addLeadingZero } from "../../utils/addLeadingZero";
import css from "./Clock.module.css";
import PropTypes from "prop-types";
const Clock = ({ hours, minutes, seconds }) => {
  return (
    <div className={css.container}>
      <div className={css.hour}>{addLeadingZero(hours)} : </div>
      <div className={css.hour}>{addLeadingZero(minutes)} : </div>
      <div>{addLeadingZero(seconds)}</div>
    </div>
  );
};
Clock.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};
export default Clock;
