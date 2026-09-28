export const SAMPLE_PROJECT = {
  id: "demo-amman-villa",
  name: "Amman Hillside Villa — Tender Package",
  client: "Al-Noor Developments",
  location: "Dabouq, Amman",
  currency: "JOD",
  drawings: [
    { id: "A-101", name: "A-101 Ground Floor Plan.pdf", discipline: "Architectural", pages: 1 },
    { id: "A-201", name: "A-201 Elevations.pdf", discipline: "Architectural", pages: 2 },
    { id: "S-101", name: "S-101 Foundation Plan.pdf", discipline: "Structural", pages: 1 },
    { id: "E-101", name: "E-101 Lighting Layout.pdf", discipline: "Electrical", pages: 1 },
    { id: "M-101", name: "M-101 HVAC Layout.pdf", discipline: "Mechanical", pages: 1 }
  ],
  items: [
    { id: "1.1", code: "02.01.010", description: "Site excavation for foundations — ordinary soil", unit: "m³", qty: 186.4, discipline: "Structural", drawing: "S-101", page: 1, evidence: "Footprint 18.20 × 12.40 m measured on S-101; excavation depth 0.85 m from existing grade (note N3).", calc: "18.20 × 12.40 × 0.85 = 191.83 m³ − 5.43 m³ ramps/voids = 186.4 m³", confidence: 0.91, bbox: { x: 18, y: 28, w: 54, h: 38 }, status: "ai" },
    { id: "1.2", code: "03.01.020", description: "Plain concrete blinding under footings C15", unit: "m³", qty: 8.64, discipline: "Structural", drawing: "S-101", page: 1, evidence: "12 isolated footings F1–F8 + strip footing SF-1. Typical F1 1.80 × 1.80 m; blinding 75 mm.", calc: "Footings area 115.2 m² × 0.075 m = 8.64 m³", confidence: 0.88, bbox: { x: 22, y: 34, w: 46, h: 30 }, status: "ai" },
    { id: "1.3", code: "03.02.110", description: "Reinforced concrete isolated footings C30", unit: "m³", qty: 28.8, discipline: "Structural", drawing: "S-101", page: 1, evidence: "Schedule on S-101: 8× F1 (1.8×1.8×0.50) + 4× F2 (2.2×2.2×0.60) + strip 14.4×0.60×0.40.", calc: "8×1.62 + 4×2.904 + 3.456 = 28.80 m³", confidence: 0.86, bbox: { x: 20, y: 32, w: 50, h: 34 }, status: "ai" },
    { id: "2.1", code: "04.01.010", description: "External concrete block wall 200 mm, including mortar", unit: "m²", qty: 312.6, discipline: "Architectural", drawing: "A-101", page: 1, evidence: "External perimeter from A-101 ground floor + A-201 elevations. Height GF 3.15 m less openings.", calc: "Perimeter 68.4 m × 3.15 m = 215.5 + first floor 154.2 − openings 57.1 = 312.6 m²", confidence: 0.84, bbox: { x: 16, y: 22, w: 62, h: 52 }, status: "ai" },
    { id: "2.2", code: "08.02.040", description: "Aluminum sliding window 1.50 × 1.40 m, double glazed", unit: "nr", qty: 18, discipline: "Architectural", drawing: "A-201", page: 1, evidence: "Window schedule W2 counted on north/south elevations A-201.", calc: "North 7 + South 6 + East 3 + West 2 = 18 nr", confidence: 0.93, bbox: { x: 30, y: 18, w: 40, h: 55 }, status: "ai" },
    { id: "2.3", code: "09.03.020", description: "Ceramic floor tiles 60×60 to living and circulation", unit: "m²", qty: 148.2, discipline: "Architectural", drawing: "A-101", page: 1, evidence: "Room areas R01, R02, R07, corridor measured on A-101. Finish legend key F-1.", calc: "42.8 + 38.6 + 51.4 + 15.4 = 148.2 m²", confidence: 0.9, bbox: { x: 24, y: 30, w: 42, h: 36 }, status: "ai" },
    { id: "3.1", code: "26.05.110", description: "LED downlight 12W recessed, including first-fix box", unit: "nr", qty: 64, discipline: "Electrical", drawing: "E-101", page: 1, evidence: "Symbol count on E-101 lighting layout. Fixture type L1.", calc: "GF 36 + FF 28 = 64 nr", confidence: 0.95, bbox: { x: 14, y: 16, w: 70, h: 64 }, status: "ai" },
    { id: "3.2", code: "26.24.010", description: "Distribution board 24-way, 3-phase, complete", unit: "nr", qty: 2, discipline: "Electrical", drawing: "E-101", page: 1, evidence: "DB-GF and DB-FF tagged on E-101 near service riser.", calc: "2 boards as tagged", confidence: 0.97, bbox: { x: 72, y: 40, w: 12, h: 14 }, status: "ai" },
    { id: "4.1", code: "23.07.020", description: "Insulated flexible duct Ø150 to ceiling diffusers", unit: "m", qty: 86.5, discipline: "Mechanical", drawing: "M-101", page: 1, evidence: "Centerline run measured on M-101 from AHU-1 to 14 supply points.", calc: "Sum of routed lengths 82.0 m + 5% fittings allowance = 86.5 m", confidence: 0.79, bbox: { x: 20, y: 24, w: 58, h: 48 }, status: "review" },
    { id: "4.2", code: "23.34.010", description: "Ceiling cassette AC 18,000 BTU, including condensate", unit: "nr", qty: 6, discipline: "Mechanical", drawing: "M-101", page: 1, evidence: "Equipment schedule AC-1 to AC-6 on M-101.", calc: "6 units as scheduled", confidence: 0.96, bbox: { x: 28, y: 26, w: 44, h: 40 }, status: "ai" }
  ]
};

export const PLANS = [
  { name: "Starter", price: 29, size: "Small project / limited drawings", pages: "up to 15 pages" },
  { name: "Professional", price: 59, size: "Medium project", pages: "up to 40 pages" },
  { name: "Business", price: 99, size: "Large project", pages: "up to 100 pages" },
  { name: "Enterprise", price: "199+", size: "Large drawing packages", pages: "custom SLA" }
];

export const SUBS = [
  { name: "Solo", price: 49 },
  { name: "Professional", price: 99 },
  { name: "Team", price: 249 },
  { name: "Enterprise", price: "Custom" }
];
