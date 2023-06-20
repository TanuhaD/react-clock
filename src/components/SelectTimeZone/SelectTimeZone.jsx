import PropTypes from "prop-types";
import css from "./SelectTimeZone.module.css";
const SelectTimeZone = ({ timeZone, setTimeZone }) => {
  const handleChangeTime = (e) => {
    setTimeZone(+e.target.value);
  };
  return (
    <div className={css.container}>
      <select
        onChange={handleChangeTime}
        value={timeZone}
        className={css.select}
      >
        <option value={-12}>-12</option>
        <option value={-11}>-11</option>
        <option value={-10}>-10</option>
        <option value={-9}>-9</option>
        <option value={-8}>-8</option>
        <option value={-7}>-7</option>
        <option value={-6}>-6</option>
        <option value={-5}>-5</option>
        <option value={-4}>-4</option>
        <option value={-3}>-3</option>
        <option value={-2}>-2</option>
        <option value={-1}>-1</option>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
      </select>
    </div>
  );
};
SelectTimeZone.propTypes = {
  setTimeZone: PropTypes.func,
  timeZone: PropTypes.number,
};
export default SelectTimeZone;
