"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Workspace() {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("New tender package");
  const [busy, setBusy] = useState(false);
  function onFiles(list) {
    setFiles(Array.from(list).map((f) => ({ name: f.name, type: guess(f.name) })));
  }
  function guess(n) {
    const u = n.toUpperCase();
    if (u.includes("S-") || /struct/i.test(n)) return "Structural";
    if (u.includes("E-") || /elec/i.test(n)) return "Electrical";
    if (u.includes("M-") || /mech|hvac/i.test(n)) return "Mechanical";
    return "Architectural";
  }
  async function run() {
    setBusy(true);
    await new Promise((r) => setTimeout(r, 1400));
    router.push("/project/demo-amman-villa");
  }
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link href="/" className="brand" style={{ marginBottom: 24 }}><span className="logo">T</span> TraceBOQ</Link>
        <Link href="/app" className="side-link active">New project</Link>
        <Link href="/project/demo-amman-villa" className="side-link">Sample villa BOQ</Link>
        <Link href="/pricing" className="side-link">Plans</Link>
      </aside>
      <main className="main">
        <div className="kicker">Workspace</div>
        <h1 style={{ fontSize: 32, margin: "8px 0 6px" }}>Create a takeoff project</h1>
        <p className="muted">Upload drawing PDFs. Review the first-pass BOQ before export.</p>
        <div className="card" style={{ marginTop: 24, maxWidth: 720 }}>
          <label className="muted" style={{ fontSize: 12 }}>Project name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", margin: "8px 0 18px", padding: 10, borderRadius: 8, border: "1px solid var(--line)", background: "#0f151c", color: "var(--text)" }} />
          <div className="drop" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onFiles(e.dataTransfer.files); }}>
            <strong>Drop architectural, structural, electrical, mechanical drawings</strong>
            <p className="muted" style={{ margin: "8px 0 14px" }}>PDF preferred.</p>
            <input type="file" multiple onChange={(e) => onFiles(e.target.files)} />
          </div>
          <div className="file-list">
            {files.map((f) => (
              <div className="file" key={f.name}><span>{f.name}</span><span className="muted">{f.type}</span></div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button className="btn btn-primary" onClick={run} disabled={busy}>{busy ? "Reading drawings..." : "Generate traceable BOQ"}</button>
            <Link href="/project/demo-amman-villa" className="btn">Use sample package</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
