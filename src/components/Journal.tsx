import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../firebase';
import '../index.css';

interface JournalEntry {
  id: string;
  skill: string;
  summary: string;
  date: string;
  time: string;
}

function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [skill, setSkill] = useState('');
  const [summary, setSummary] = useState('');
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // ── Fetch entries from Firebase on load ──
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const q = query(
          collection(db, 'journal'),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as JournalEntry[];
        setEntries(data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  // ── Add entry to Firebase ──
  const handleAdd = async () => {
    if (!skill.trim() || !summary.trim()) return;

    const now = new Date();
    const newEntry = {
      skill,
      summary,
      date: now.toLocaleDateString('en-KE', {
        weekday: 'short', year: 'numeric',
        month: 'short', day: 'numeric',
      }),
      time: now.toLocaleTimeString('en-KE', {
        hour: '2-digit', minute: '2-digit',
      }),
      createdAt: now.toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, 'journal'), newEntry);
      setEntries([{ id: docRef.id, ...newEntry }, ...entries]);
      setSkill('');
      setSummary('');
      setShowForm(false);
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  // ── Delete entry from Firebase ──
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'journal', id));
      setEntries(entries.filter(e => e.id !== id));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const filtered = entries.filter(e =>
    e.skill.toLowerCase().includes(search.toLowerCase()) ||
    e.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="journal-page">

      {/* ── Header ── */}
      <div className="journal-header">
        <h2 className="headers">Learning Journal</h2>
        <p className="journal-subtitle">
          {'>'}_  Documenting the journey, one skill at a time.
        </p>
      </div>

      {/* ── Search + Add Button ── */}
      <div className="journal-toolbar">
        <div className="journal-search-wrapper">
          <span className="journal-search-icon">⌕</span>
          <input
            type="text"
            className="journal-search"
            placeholder="Search by keyword..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button
          className="journal-add-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? '✕ Cancel' : '+ New Entry'}
        </button>
      </div>

      {/* ── Add Form ── */}
      {showForm && (
        <div className="journal-form">
          <div className="journal-form-row">
            <label className="journal-label">Skill Learned</label>
            <input
              type="text"
              className="journal-input"
              placeholder="e.g. SQL Joins, React Hooks, Nmap..."
              value={skill}
              onChange={e => setSkill(e.target.value)}
            />
          </div>
          <div className="journal-form-row">
            <label className="journal-label">Summary</label>
            <textarea
              className="journal-textarea"
              placeholder="What did you learn? Key takeaways, commands, concepts..."
              value={summary}
              onChange={e => setSummary(e.target.value)}
              rows={4}
            />
          </div>
          <button className="journal-submit-btn" onClick={handleAdd}>
            {'>'}_  Log Entry
          </button>
        </div>
      )}

      {/* ── Loading ── */}
      {loading && (
        <div className="journal-empty">
          {'>'}_ Loading entries...
        </div>
      )}

      {/* ── Entries ── */}
      {!loading && (
        <div className="journal-entries">
          {filtered.length === 0 && (
            <div className="journal-empty">
              {search
                ? `>_ No entries matching "${search}"`
                : '>_ No entries yet. Start logging your journey.'}
            </div>
          )}

          {filtered.map(entry => (
            <div className="journal-entry" key={entry.id}>
              <div className="journal-entry-header">
                <div className="journal-entry-meta">
                  <span className="journal-entry-skill">{entry.skill}</span>
                  <span className="journal-entry-datetime">
                    {entry.date} — {entry.time}
                  </span>
                </div>
                <button
                  className="journal-delete-btn"
                  onClick={() => handleDelete(entry.id)}
                >
                  ✕
                </button>
              </div>
              <p className="journal-entry-summary">{entry.summary}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Journal;