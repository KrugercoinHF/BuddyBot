import { Bot, CalendarCheck2, MessageSquareText, Sparkles, TrendingUp } from 'lucide-react';

const cards = [
  {
    icon: Sparkles,
    title: 'AI focus',
    value: 'Daily routines',
    note: 'Personalized suggestions based on your rhythm.',
  },
  {
    icon: MessageSquareText,
    title: 'Conversations',
    value: '24 threads',
    note: 'Organized context for your ongoing chats.',
  },
  {
    icon: CalendarCheck2,
    title: 'Tasks',
    value: '8 due today',
    note: 'Keep your next actions clear and actionable.',
  },
  {
    icon: TrendingUp,
    title: 'Progress',
    value: '82% momentum',
    note: 'You are steadily moving toward your goals.',
  },
];

const priorities = [
  'Review your quick wins for the morning',
  'Prepare the next message for your team update',
  'Check in on the project milestone timeline',
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">
            <Bot size={22} />
          </div>
          <div>
            <p className="eyebrow">Companion</p>
            <h1>BuddyBot</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Inbox</button>
          <button className="nav-item">Focus</button>
          <button className="nav-item">Settings</button>
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Good afternoon</p>
            <h2>Welcome back</h2>
          </div>
          <button className="primary-btn">New assistant task</button>
        </header>

        <section className="hero-card">
          <div>
            <p className="eyebrow">Today&apos;s guide</p>
            <h3>Your personal AI rhythm is on track.</h3>
          </div>
          <p>
            BuddyBot keeps your work, notes, and follow-ups organized so you can stay in flow.
          </p>
        </section>

        <section className="stats-grid">
          {cards.map(({ icon: Icon, title, value, note }) => (
            <article key={title} className="stat-card">
              <div className="icon-wrap">
                <Icon size={18} />
              </div>
              <div>
                <p>{title}</p>
                <strong>{value}</strong>
              </div>
              <span>{note}</span>
            </article>
          ))}
        </section>

        <section className="lower-grid">
          <div className="panel">
            <p className="eyebrow">Priority list</p>
            <ul className="priority-list">
              {priorities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel accent-panel">
            <p className="eyebrow">AI summary</p>
            <h3>Focus on what matters most next.</h3>
            <p>
              Your assistant has identified a strong momentum window for decision-making and
              follow-through.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
