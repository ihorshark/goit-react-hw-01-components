import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function Transaction({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
