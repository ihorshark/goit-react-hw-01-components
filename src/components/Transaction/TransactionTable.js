import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './Transaction.module.css';

export default function TransactionTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr className={s.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
