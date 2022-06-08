import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ label, percentage }) {
  return (
    <div className={s.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
