import Profile from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transaction/transactions.json';
import StatisticsList from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionTable from './Transaction/TransactionTable';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};
