import PropTypes from 'prop-types';
export default function Transaction({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
