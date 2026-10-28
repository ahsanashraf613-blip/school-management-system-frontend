const navigation = [
  { label: 'Dashboard', active: true, icon: '▣' },
  { label: 'Students', icon: '◫' },
  { label: 'Teachers', icon: '◮' },
  { label: 'Attendance', icon: '◎' },
  { label: 'Exams', icon: '▤' },
  { label: 'Fees', icon: '◬' },
  { label: 'Messages', icon: '✉' },
  { label: 'Settings', icon: '⚙' },
];

const stats = [
  { title: 'Total Students', value: '18,245', delta: '+12%', tone: 'blue' },
  { title: 'Faculty', value: '1,126', delta: '+4.8%', tone: 'green' },
  { title: 'Attendance', value: '94.7%', delta: '+2.1%', tone: 'orange' },
  { title: 'Revenue', value: '$48.2K', delta: '+8.4%', tone: 'purple' },
];

const classPerformance = [
  { label: 'Grade 1', value: 76 },
  { label: 'Grade 2', value: 82 },
  { label: 'Grade 3', value: 64 },
  { label: 'Grade 4', value: 88 },
  { label: 'Grade 5', value: 91 },
  { label: 'Grade 6', value: 72 },
  { label: 'Grade 7', value: 79 },
  { label: 'Grade 8', value: 87 },
];

const announcements = [
  { title: 'Science fair registration', time: '08:30 AM', color: 'blue' },
  { title: 'PTA meeting schedule', time: '11:00 AM', color: 'purple' },
  { title: 'Fees due reminder', time: '02:15 PM', color: 'orange' },
];

const recentStudents = [
  { name: 'Riya Sharma', className: 'Grade 8-A', status: 'Present', score: '94%' },
  { name: 'Ayaan Khan', className: 'Grade 7-B', status: 'Late', score: '86%' },
  { name: 'Maya Ibrahim', className: 'Grade 9-C', status: 'Present', score: '91%' },
  { name: 'Zayan Ali', className: 'Grade 6-A', status: 'Absent', score: '74%' },
];

const events = [
  { day: '12', month: 'APR', title: 'Campus Tour' },
  { day: '15', month: 'APR', title: 'Exam Prep' },
  { day: '20', month: 'APR', title: 'Parent Meet' },
  { day: '28', month: 'APR', title: 'Science Expo' },
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">E</div>
          <div>
            <p className="eyebrow">Institution</p>
            <h1>EduPeak</h1>
          </div>
        </div>

        <nav className="nav">
          {navigation.map((item) => (
            <button key={item.label} className={`nav-item ${item.active ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="side-card">
          <p className="eyebrow">Today</p>
          <h3>12 Classes</h3>
          <p>4 lab sessions scheduled for afternoon.</p>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>School Management Dashboard</h2>
          </div>

          <div className="top-actions">
            <div className="search-box">Search...</div>
            <button className="action-btn ghost">+ New Record</button>
            <div className="profile-pill">
              <div className="avatar">AR</div>
              <div>
                <strong>Arham</strong>
                <small>Admin</small>
              </div>
            </div>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.title} className={`stat-card ${stat.tone}`}>
              <div className="stat-icon">↗</div>
              <div>
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
                <span>{stat.delta} from last month</span>
              </div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel chart-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Performance</p>
                <h3>Academic progress</h3>
              </div>
              <button className="link-btn">View report</button>
            </div>

            <div className="bar-chart">
              {classPerformance.map((item) => (
                <div key={item.label} className="bar-item">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: `${item.value}%` }} />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel announcements-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Schedule</p>
                <h3>Announcements</h3>
              </div>
            </div>

            <div className="announcement-list">
              {announcements.map((item) => (
                <div key={item.title} className="announcement-item">
                  <span className={`dot ${item.color}`} />
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel table-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Students</p>
                <h3>Recent attendance</h3>
              </div>
              <button className="link-btn">Export</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Class</th>
                  <th>Status</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((student) => (
                  <tr key={student.name}>
                    <td>{student.name}</td>
                    <td>{student.className}</td>
                    <td>
                      <span className={`status ${student.status.toLowerCase()}`}>
                        {student.status}
                      </span>
                    </td>
                    <td>{student.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="panel calendar-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Calendar</p>
                <h3>Upcoming events</h3>
              </div>
            </div>

            <div className="event-list">
              {events.map((event) => (
                <div key={`${event.day}-${event.title}`} className="event-item">
                  <div className="event-date">
                    <strong>{event.day}</strong>
                    <span>{event.month}</span>
                  </div>
                  <p>{event.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
