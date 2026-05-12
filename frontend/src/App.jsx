import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [confessions, setConfessions] = useState([]);

  const submitConfession = async () => {
    await fetch("http://localhost:5000/confessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    setMessage("");
    const res = await fetch("http://localhost:5000/confessions");
    const data = await res.json();
    setConfessions(data);
  };

  useEffect(() => {
    let ignore = false;

    const fetchConfessions = async () => {
      const res = await fetch("http://localhost:5000/confessions");
      const data = await res.json();

      if (!ignore) {
        setConfessions(data);
      }
    };

    fetchConfessions();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <main className="confession-page">
        <section className="hero-card">
          <p className="eyebrow">Safe space. No names. No judgment.</p>
          <h1>Anonymous Confession Wall</h1>
          <p className="hero-copy">
            Drop your thoughts into the night and let them rest where nobody knows your name.
          </p>

          <div className="composer-card">
            <textarea
              rows="4"
              placeholder="Write your confession here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="confession-input"
            />

            <div className="composer-footer">
              <span className="composer-note">Your words appear anonymously on the wall.</span>
              <button onClick={submitConfession} className="post-button">
                Post Confession
              </button>
            </div>
          </div>
        </section>

        <section className="wall-section">
          <div className="wall-header">
            <h2>Recent Confessions</h2>
            <span className="confession-count">{confessions.length} shared</span>
          </div>

          <div className="confession-grid">
            {confessions.map((item, index) => (
              <article key={item._id} className="confession-card">
                <span className="card-badge">#{String(index + 1).padStart(2, "0")}</span>
                <p>{item.message}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
