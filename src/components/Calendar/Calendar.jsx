import { addLeadingZero } from "../../utils/addLeadingZero";
import css from "./Calendar.module.css";
import PropTypes from "prop-types";
const Calendar = ({ year, month, day }) => {
  return (
    <div className={css.container}>
      <div className={css.text}>day: {addLeadingZero(day)}.</div>
      <div className={css.text}>month: {addLeadingZero(month)}.</div>
      <div>year: {year}</div>
    </div>
  );
};

Calendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  day: PropTypes.number,
};
export default Calendar;
