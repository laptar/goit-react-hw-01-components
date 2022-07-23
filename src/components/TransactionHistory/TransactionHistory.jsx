import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(({ id, type, amount, currency }, idx) => {
          return (
            <tr
              className={`${s.row} ${idx % 2 ? s.secRow : s.frstRow}`}
              key={id}
            >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      namcurrencye: PropTypes.string,
    })
  ),
};
