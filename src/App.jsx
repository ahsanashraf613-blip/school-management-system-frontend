import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const initialStudents = [
  { id: 1, name: 'Riya Sharma', className: 'Grade 8-A', status: 'Active', attendance: '96%', grade: 'A' },
  { id: 2, name: 'Ayaan Khan', className: 'Grade 7-B', status: 'On Leave', attendance: '88%', grade: 'B+' },
  { id: 3, name: 'Maya Ibrahim', className: 'Grade 9-C', status: 'Active', attendance: '92%', grade: 'A' },
  { id: 4, name: 'Zayan Ali', className: 'Grade 6-A', status: 'Needs Review', attendance: '81%', grade: 'B' },
  { id: 5, name: 'Aisha Noor', className: 'Grade 10-B', status: 'Active', attendance: '97%', grade: 'A+' },
];

const initialTeachers = [
  { id: 1, name: 'Ms. Aisha Khan', subject: 'Mathematics', department: 'Science', email: 'aisha.khan@edupeak.edu' },
  { id: 2, name: 'Mr. Hamza Ali', subject: 'English', department: 'Humanities', email: 'hamza.ali@edupeak.edu' },
  { id: 3, name: 'Mrs. Sana Iqbal', subject: 'Biology', department: 'Science', email: 'sana.iqbal@edupeak.edu' },
  { id: 4, name: 'Mr. Bilal Rahman', subject: 'History', department: 'Humanities', email: 'bilal.rahman@edupeak.edu' },
];

const navItems = [
  { to: '/', label: 'Dashboard', icon: '▣' },
  { to: '/students', label: 'Students', icon: '◫' },
  { to: '/teachers', label: 'Teachers', icon: '◮' },
  { to: '/attendance', label: 'Attendance', icon: '◎' },
  { to: '/exams', label: 'Exams', icon: '▤' },
  { to: '/fees', label: 'Fees', icon: '◬' },
  { to: '/messages', label: 'Messages', icon: '✉' },
  { to: '/settings', label: 'Settings', icon: '⚙' },
];

const cards = [
  { title: 'Total Students', value: '18,245', change: '+12%', tone: 'blue' },
  { title: 'Faculty', value: '1,126', change: '+4.8%', tone: 'green' },
  { title: 'Attendance', value: '94.7%', change: '+2.1%', tone: 'orange' },
  { title: 'Revenue', value: '$48.2K', change: '+8.4%', tone: 'purple' },
];

const classPerformance = [
  { label: 'G1', value: 76 },
  { label: 'G2', value: 82 },
  { label: 'G3', value: 64 },
  { label: 'G4', value: 88 },
  { label: 'G5', value: 91 },
  { label: 'G6', value: 72 },
  { label: 'G7', value: 79 },
  { label: 'G8', value: 87 },
];

const upcomingEvents = [
  { day: '12', month: 'APR', title: 'Campus Orientation', time: '9:00 AM' },
  { day: '15', month: 'APR', title: 'Exam Prep Session', time: '11:00 AM' },
  { day: '20', month: 'APR', title: 'Parent Meeting', time: '2:00 PM' },
  { day: '28', month: 'APR', title: 'Science Expo', time: '10:30 AM' },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [teachers, setTeachers] = useState(initialTeachers);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('school-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('school-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const activeStudents = useMemo(
    () => students.filter((student) => student.status === 'Active').length,
    [students]
  );

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
  };

  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const handleAddTeacher = (teacher) => {
    setTeachers((prev) => [...prev, { ...teacher, id: Date.now() }]);
  };

  const handleDeleteTeacher = (id) => {
    setTeachers((prev) => prev.filter((teacher) => teacher.id !== id));
  };

  return (
    <BrowserRouter>
      <div className={`app-shell ${darkMode ? 'theme-dark' : 'theme-light'}`}>
        <aside className="sidebar">
          <div className="brand-wrap">
            <div className="brand-mark">E</div>
            <div>
              <p className="eyebrow">Institution</p>
              <h1>EduPeak</h1>
            </div>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="side-card">
            <p className="eyebrow">Quick view</p>
            <h3>{totalStudents} students</h3>
            <p>{activeStudents} active learners this week.</p>
          </div>
        </aside>

        <main className="main-panel">
          <header className="topbar">
            <div>
              <p className="eyebrow">Overview</p>
              <h2>School Management Suite</h2>
            </div>

            <div className="top-actions">
              <div className="search-box">Search...</div>
              <button className="action-btn ghost">+ New Record</button>
              <button className="theme-toggle" onClick={() => setDarkMode((current) => !current)}>
                {darkMode ? '☀ Light' : '☾ Dark'}
              </button>
              <div className="profile-pill">
                <div className="avatar">AR</div>
                <div>
                  <strong>Arham</strong>
                  <small>Admin</small>
                </div>
              </div>
            </div>
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  cards={cards}
                  classPerformance={classPerformance}
                  students={students}
                  teachers={teachers}
                  upcomingEvents={upcomingEvents}
                />
              }
            />
            <Route
              path="/students"
              element={<StudentsPage students={students} onAddStudent={handleAddStudent} onDeleteStudent={handleDeleteStudent} />}
            />
            <Route
              path="/teachers"
              element={<TeachersPage teachers={teachers} onAddTeacher={handleAddTeacher} onDeleteTeacher={handleDeleteTeacher} />}
            />
            <Route path="/attendance" element={<PlaceholderPage title="Attendance" />} />
            <Route path="/exams" element={<PlaceholderPage title="Exams" />} />
            <Route path="/fees" element={<PlaceholderPage title="Fees" />} />
            <Route path="/messages" element={<PlaceholderPage title="Messages" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function Dashboard({ cards, classPerformance, students, teachers, upcomingEvents }) {
  return (
    <>
      <section className="stats-grid">
        {cards.map((card) => (
          <article key={card.title} className={`stat-card ${card.tone}`}>
            <div className="stat-icon">↗</div>
            <div>
              <p>{card.title}</p>
              <h3>{card.value}</h3>
              <span>{card.change} from last month</span>
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

        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Overview</p>
              <h3>Quick stats</h3>
            </div>
          </div>
          <div className="mini-stat-list">
            <div className="mini-stat">
              <strong>{students.length}</strong>
              <span>Students</span>
            </div>
            <div className="mini-stat">
              <strong>{teachers.length}</strong>
              <span>Teachers</span>
            </div>
            <div className="mini-stat">
              <strong>96%</strong>
              <span>Consistency</span>
            </div>
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
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.slice(0, 5).map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.className}</td>
                  <td>
                    <span className={`status ${student.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>{student.attendance}</td>
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
            {upcomingEvents.map((event) => (
              <div key={`${event.day}-${event.title}`} className="event-item">
                <div className="event-date">
                  <strong>{event.day}</strong>
                  <span>{event.month}</span>
                </div>
                <div>
                  <p>{event.title}</p>
                  <small>{event.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function StudentsPage({ students, onAddStudent, onDeleteStudent }) {
  const [form, setForm] = useState({ name: '', className: '', status: 'Active', attendance: '92%', grade: 'A' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) return;
    onAddStudent(form);
    setForm({ name: '', className: '', status: 'Active', attendance: '92%', grade: 'A' });
  };

  return (
    <div className="page-grid">
      <div className="panel form-panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Student</p>
            <h3>Add student</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="crud-form">
          <label>
            Full name
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            Class
            <input value={form.className} onChange={(e) => setForm({ ...form, className: e.target.value })} />
          </label>
          <label>
            Status
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              <option>Active</option>
              <option>On Leave</option>
              <option>Needs Review</option>
            </select>
          </label>
          <label>
            Attendance
            <input value={form.attendance} onChange={(e) => setForm({ ...form, attendance: e.target.value })} />
          </label>
          <label>
            Grade
            <input value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} />
          </label>
          <button type="submit" className="action-btn">Save student</button>
        </form>
      </div>

      <div className="panel table-panel full-width">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Directory</p>
            <h3>Student records</h3>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Status</th>
              <th>Attendance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td>
                  <span className={`status ${student.status.toLowerCase().replace(/\s+/g, '-')}`}>{student.status}</span>
                </td>
                <td>{student.attendance}</td>
                <td>
                  <button className="table-btn danger" onClick={() => onDeleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TeachersPage({ teachers, onAddTeacher, onDeleteTeacher }) {
  const [form, setForm] = useState({ name: '', subject: '', department: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) return;
    onAddTeacher(form);
    setForm({ name: '', subject: '', department: '', email: '' });
  };

  return (
    <div className="page-grid">
      <div className="panel form-panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Teacher</p>
            <h3>Add teacher</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="crud-form">
          <label>
            Full name
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            Subject
            <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
          </label>
          <label>
            Department
            <input value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
          </label>
          <label>
            Email
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <button type="submit" className="action-btn">Save teacher</button>
        </form>
      </div>

      <div className="panel table-panel full-width">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Faculty</p>
            <h3>Teacher records</h3>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Department</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.department}</td>
                <td>{teacher.email}</td>
                <td>
                  <button className="table-btn danger" onClick={() => onDeleteTeacher(teacher.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="panel empty-panel">
      <p className="eyebrow">Module</p>
      <h3>{title}</h3>
      <p>This section is ready for future workflows and screens.</p>
    </div>
  );
}

export default App;
