import Link from "next/link";
import { PLANS, SUBS } from "../../lib/sample";

export default function Pricing() {
  return (
    <>
      <header className="container nav">
        <Link href="/" className="brand"><span className="logo">T</span> TraceBOQ</Link>
        <Link href="/app" className="btn btn-primary">Start a project</Link>
      </header>
      <main className="container section">
        <div className="kicker">Pricing</div>
        <h1 style={{ fontSize: 42 }}>Pay per project first.</h1>
        <p className="lead" style={{ margin: "12px 0 32px" }}>Built for offices that tender occasionally.</p>
        <div className="pricing">
          {PLANS.map((p) => (
            <div className="card" key={p.name}>
              <strong>{p.name}</strong>
              <div className="price">{typeof p.price === "number" ? `$${p.price}` : p.price}</div>
              <p className="muted">{p.size}</p>
              <p style={{ marginTop: 10 }}>{p.pages}</p>
              <Link href="/app" className="btn btn-primary" style={{ marginTop: 16, width: "100%" }}>Select</Link>
            </div>
          ))}
        </div>
        <h2 style={{ margin: "48px 0 16px" }}>Subscriptions for frequent users</h2>
        <div className="pricing">
          {SUBS.map((s) => (
            <div className="card" key={s.name}>
              <strong>{s.name}</strong>
              <div className="price">{typeof s.price === "number" ? `$${s.price}` : s.price}</div>
              <p className="muted">Monthly allocation of projects and AI pages. Extra projects billed separately.</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
