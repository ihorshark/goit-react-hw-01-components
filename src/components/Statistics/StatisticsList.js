import Statistics from './Statistics';
import s from './Statistics.module.css';

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

export default function StatisticsList({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.starList}>
        {stats.map(stat => (
          <li key={stat.id} style={{ backgroundColor: `#${randomColor()}` }}>
            <Statistics label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
