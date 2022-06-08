import Profile from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import StatisticsList from './Statistics/StatisticsList';

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
    </div>
  );
};

{
  /* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    ></div> */
}
