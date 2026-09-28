import Link from "next/link";
import { PLANS } from "../lib/sample";

export default function Home() {
  return (
    <>
      <header className="container nav">
        <Link href="/" className="brand"><span className="logo">T</span> TraceBOQ</Link>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <Link href="/pricing">Pricing</Link>
          <Link href="/app" className="btn btn-primary">Open workspace</Link>
        </nav>
      </header>
      <section className="container hero">
        <div>
          <div className="kicker">For engineers, QSs and contractors</div>
          <h1>Upload your drawings.<br />Get a traceable BOQ in minutes.</h1>
          <p className="lead">AI identifies construction elements, extracts dimensions, and calculates quantities with every line linked back to the source page, evidence, calculation, and confidence.</p>
          <div className="hero-actions">
            <Link href="/app" className="btn btn-primary">Start a project</Link>
            <Link href="/project/demo-amman-villa" className="btn">View sample BOQ</Link>
          </div>
        </div>
        <div className="preview">
          <h3>First-pass takeoff · Amman Hillside Villa</h3>
          <div className="row head"><span>Item</span><span>Qty</span><span>Unit</span><span>Source</span></div>
          <div className="row"><span>RC isolated footings C30</span><span>28.80</span><span>m3</span><span>S-101</span></div>
          <div className="row"><span>200 mm block wall</span><span>312.6</span><span>m2</span><span>A-101</span></div>
          <div className="row"><span>Aluminum window W2</span><span>18</span><span>nr</span><span>A-201</span></div>
          <div className="row"><span>LED downlight L1</span><span>64</span><span>nr</span><span>E-101</span></div>
        </div>
      </section>
      <section className="container section" id="how">
        <div className="kicker">The product</div>
        <h2 style={{ fontSize: 32, margin: "10px 0 24px" }}>Hours of measuring work, returned to the engineer.</h2>
        <div className="steps">
          {[["01", "Upload drawings", "Architectural, structural, electrical, and mechanical PDFs."],["02", "AI takeoff", "Elements, dimensions, and quantities with confidence."],["03", "Trace and review", "Every quantity opens source page, evidence, and calculation."],["04", "Export BOQ", "Excel or print-ready PDF after you edit line items."]].map(([n, t, d]) => (
            <div className="step" key={n}><n>{n}</n><h3>{t}</h3><p className="muted" style={{ marginTop: 6, fontSize: 14 }}>{d}</p></div>
          ))}
        </div>
      </section>
      <section className="container section">
        <div className="grid3">
          {[["Not another chatbot BOQ", "Each number is bound to a drawing, page, and formula."],["Pay per project", "Start at $29. No monthly lock-in."],["Path to a full estimate", "Drawings to takeoff to BOQ to local prices."]].map(([t, d]) => (
            <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>
      <section className="container section">
        <div className="kicker">Pay-per-project</div>
        <h2 style={{ fontSize: 32, margin: "10px 0 24px" }}>Price the hours you save, not the AI.</h2>
        <div className="pricing">
          {PLANS.map((p) => (
            <div className="card" key={p.name}>
              <div className="muted">{p.name}</div>
              <div className="price">{typeof p.price === "number" ? `$${p.price}` : p.price}</div>
              <p>{p.size}</p>
              <p style={{ marginTop: 8 }}>{p.pages}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="container footer">TraceBOQ</footer>
    </>
  );
}
