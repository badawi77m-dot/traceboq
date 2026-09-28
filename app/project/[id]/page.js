"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import * as XLSX from "xlsx";
import { SAMPLE_PROJECT } from "../../../lib/sample";

export default function ProjectPage() {
  const [items, setItems] = useState(SAMPLE_PROJECT.items);
  const [sel, setSel] = useState(SAMPLE_PROJECT.items[0].id);
  const [filter, setFilter] = useState("All");
  const active = items.find((i) => i.id === sel) || items[0];
  const p = SAMPLE_PROJECT;
  const visible = useMemo(() => items.filter((i) => filter === "All" || i.discipline === filter), [items, filter]);
  function setQty(id, qty) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty, status: "edited" } : i)));
  }
  function exportXlsx() {
    const rows = items.map((i) => ({
      Code: i.code, Description: i.description, Unit: i.unit, Quantity: i.qty,
      Discipline: i.discipline, Drawing: i.drawing, Page: i.page,
      Calculation: i.calc, Evidence: i.evidence,
      Confidence: Math.round(i.confidence * 100) + "%", Status: i.status
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "BOQ");
    XLSX.writeFile(wb, p.id + "-BOQ.xlsx");
  }
  function exportPdf() {
    const w = window.open("", "_blank");
    w.document.write("<title>" + p.name + " BOQ</title><style>body{font-family:sans-serif;padding:32px}table{border-collapse:collapse;width:100%;font-size:12px}td,th{border:1px solid #ccc;padding:6px;text-align:left}</style>");
    w.document.write("<h1>" + p.name + "</h1><p>" + p.client + " · " + p.location + "</p><table><tr><th>Code</th><th>Description</th><th>Unit</th><th>Qty</th><th>Source</th></tr>");
    items.forEach((i) => {
      w.document.write("<tr><td>" + i.code + "</td><td>" + i.description + "</td><td>" + i.unit + "</td><td>" + i.qty + "</td><td>" + i.drawing + " p." + i.page + "</td></tr>");
    });
    w.document.write("</table>");
    w.document.close();
    w.print();
  }
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link href="/" className="brand" style={{ marginBottom: 24 }}><span className="logo">T</span> TraceBOQ</Link>
        <Link href="/app" className="side-link">New project</Link>
        <Link href="/project/demo-amman-villa" className="side-link active">Current BOQ</Link>
        <Link href="/pricing" className="side-link">Plans</Link>
      </aside>
      <main className="main">
        <div className="kicker">Review · {p.id}</div>
        <h1 style={{ fontSize: 28, margin: "6px 0 4px" }}>{p.name}</h1>
        <p className="muted">{p.client} · {p.location} · {p.drawings.length} drawings · {items.length} line items</p>
        <div className="toolbar">
          {["All", "Architectural", "Structural", "Electrical", "Mechanical"].map((f) => (
            <button key={f} className="btn" onClick={() => setFilter(f)} style={filter === f ? { borderColor: "var(--accent)", color: "var(--accent2)" } : {}}>{f}</button>
          ))}
          <span style={{ flex: 1 }} />
          <button className="btn" onClick={exportXlsx}>Export Excel</button>
          <button className="btn btn-primary" onClick={exportPdf}>Export PDF</button>
        </div>
        <div className="boq-layout">
          <div className="card" style={{ padding: 0, overflow: "auto" }}>
            <table>
              <thead><tr><th>Code</th><th>Description</th><th>Unit</th><th>Qty</th><th>Source</th><th>Conf.</th></tr></thead>
              <tbody>
                {visible.map((i) => (
                  <tr key={i.id} className={i.id === sel ? "selected" : ""} onClick={() => setSel(i.id)}>
                    <td>{i.code}</td>
                    <td>{i.description}{i.status === "edited" && <div className="muted" style={{ fontSize: 11 }}>Edited by reviewer</div>}</td>
                    <td>{i.unit}</td>
                    <td><input className="qty" type="number" step="0.01" value={i.qty} onChange={(e) => setQty(i.id, Number(e.target.value))} onClick={(e) => e.stopPropagation()} /></td>
                    <td>{i.drawing} · p.{i.page}</td>
                    <td style={{ color: i.confidence < 0.85 ? "var(--warn)" : "var(--good)" }}>{Math.round(i.confidence * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="trace">
            <div className="kicker">Traceability</div>
            <h3 style={{ margin: "8px 0 10px" }}>{active.description}</h3>
            <div className="drawing">
              <div className="hot" style={{ left: active.bbox.x + "%", top: active.bbox.y + "%", width: active.bbox.w + "%", height: active.bbox.h + "%" }} />
            </div>
            <p style={{ marginTop: 12, fontSize: 13 }}><strong>Drawing</strong> {active.drawing} · page {active.page} · {active.discipline}</p>
            <p style={{ marginTop: 10, fontSize: 13 }}><strong>Evidence</strong><br />{active.evidence}</p>
            <p style={{ marginTop: 10, fontSize: 13 }}><strong>Calculation</strong><br />{active.calc}</p>
            <p style={{ marginTop: 12, fontSize: 13 }}>Confidence</p>
            <div className="meter" style={{ marginTop: 6 }}><i style={{ width: (active.confidence * 100) + "%", background: active.confidence < 0.85 ? "var(--warn)" : "var(--good)" }} /></div>
            <p className="muted" style={{ marginTop: 8, fontSize: 12 }}>{Math.round(active.confidence * 100)}% — review items below 85% before issuing the BOQ.</p>
          </aside>
        </div>
      </main>
    </div>
  );
}
