# TBEA Meeting — Knowledge Notes

Background for answering follow-up questions. It is organised to follow the deck and is **internal only**. Slide numbers refer to the 54-slide version.

---

## 1. Electrical basics you will hear in the room

**Power, capacity, energy**

- **MW**: power (rate). **MWh**: energy (amount). A battery rated 45 MW / 90 MWh can deliver 45 MW for 2 hours.
- **Duration** = MWh ÷ MW. Radilovo: 700 ÷ 175 = **4 h**. Katselovo: 500 ÷ 195 ≈ **2.6 h**. Karnobat: 90 ÷ 45 = **2 h**.
- **MVA**: apparent power, the rating for transformers and switchgear. MW = MVA × power factor (pf ≈ 0.9–0.95). A 70 MW plant needs about 74–78 MVA of transformer capacity.
- **MWp (DC) vs MW AC**: solar panels are rated in MWp (DC peak). Inverters limit the AC output. **DC/AC ratio** = MWp ÷ MW AC, typically 1.2–1.4. Middle East: 7.007 MWp ÷ 5 MW = **1.40**.
- **GW vs TWh**: 1 GW running all year = 8.76 TWh. Türkiye's 360.9 TWh a year averages about 41 GW of load; the peak was 59.5 GW.
- **Capacity factor**: actual output ÷ maximum possible output. Solar in Türkiye is about 18–22%, wind about 30–35%. This is why many GW of renewables are needed to replace firm capacity.

**Voltage levels**

| Level | Range | Türkiye | Bulgaria | N. Macedonia | Gulf / ME |
|---|---|---|---|---|---|
| LV | < 1 kV | 0.4 kV | 0.4 kV | 0.4 kV | 0.4 kV |
| MV | 1–36 kV | **34.5 / 33 kV**, 15.8, 10.5 kV | 20 kV, 10 kV | 20 kV, 10 kV | 33 kV, 11 kV |
| HV | 52–245 kV | **154 kV** (also some 66 kV) | 110 kV, 220 kV | 110 kV, (220 kV) | 132 kV |
| EHV | > 245 kV | **400 kV** | 400 kV | 400 kV | 400 kV |

- **Equipment rated voltage (Um) ≠ system voltage.** A 154 kV system needs **170 kV-class** equipment. 110 kV needs 123/126 kV class (126 is the Chinese class). 132 kV needs 145 kV. 220 kV needs 245/252 kV.
- **Key point for TBEA:** its brochure lists 126 kV and 252 kV GIS lines. Türkiye's 154 kV needs **170 kV**. Ask whether TBEA has 170 kV GIS, CT/VT and 154 kV transformers with IEC type tests.

**AC vs DC**

- PV panels and batteries produce **DC**. The grid is **AC**. Inverters (PV) and PCS (battery) convert between them.
- **HVDC** moves very large power over long distances or undersea with lower losses. There are converter stations at each end.

---

## 2. Equipment glossary (what each block on the slides does)

### Transformers

- **Power transformer (main / step-up / GSU):** steps plant voltage up to grid voltage (33/154 kV, 33/220 kV, 20/110 kV). Rated in MVA.
- **Key specs buyers ask:** MVA, voltage ratio, **vector group** (e.g. YNd11), **cooling** (ONAN natural; **ONAF** with fans), **impedance %**, losses (no-load / load), **OLTC** (on-load tap changer for adjusting voltage under load, e.g. Karnobat's 98–123 kV range), noise and transport dimensions and weight.
- **YNd11:** HV side star with earthed neutral, LV side delta, 30° phase shift. This is standard for generator step-up units.
- **Turbine / PV step-up transformer:** steps 0.6–0.9 kV inverter or turbine output up to 20 or 33 kV. In wind it can sit in the **nacelle**, the **tower base** or a **kiosk** next to the tower.
- **Distribution transformer:** MV/LV (e.g. 34.5/0.4 kV). This is a commodity and is heavily contested in Türkiye.
- **Dry-type:** no oil, so better for fire safety indoors (data centers, buildings).
- **Ester-oil transformer:** biodegradable fluid with higher fire point. TBEA makes them up to 500 kV.
- **Converter transformer:** used in HVDC stations. TBEA is a world leader (±1,100 kV).

### Switchgear

- **Circuit breaker:** interrupts load and fault current.
- **Disconnector:** visible isolation, operated with no current.
- **Earthing switch:** earths equipment so it is safe for maintenance.
- **AIS (air-insulated):** equipment in open air. Cheaper, but needs much more land.
- **GIS (gas-insulated):** inside SF₆-filled metal enclosures. Compact (up to about 70% less land), suits urban sites, data centers and harsh environments. More expensive.
- **HGIS:** hybrid of the two.
- **SF₆:** a strong greenhouse gas. Newer "eco" GIS uses vacuum breakers or mixed gas. TBEA has a 126 kV vacuum eco-GIS.
- **Bay:** one switching circuit (line bay, transformer bay, bus-coupler).
- **MV switchgear (metal-clad, withdrawable):** for example TBEA's KYN61-40.5 for 33–35 kV. Contains **vacuum circuit breakers** (VCB, e.g. VTB-40.5).
- **RMU (ring main unit):** compact MV switch unit used at each turbine or PV block on the collector ring.

### Instrument transformers

- **CT (current transformer):** scales current down for meters and relays.
- **VT / PT (voltage transformer):** scales voltage down.
- **CVT (capacitor voltage transformer):** used at higher voltages, and can also carry communication signals.
- **Metering CTs/VTs** need a higher accuracy class (e.g. 0.2S) than protection CTs.

### Cables and lines

- **XLPE cable:** cross-linked polyethylene insulation. The standard for MV and HV underground cable.
- **Collector system:** the MV cables linking turbines or PV blocks to the substation.
- **ACSR conductor:** "Aluminium Conductor Steel Reinforced" overhead line. **240/40** means 240 mm² aluminium and 40 mm² steel. It carries roughly **645 A**, which is about **120 MVA at 110 kV**. That is enough for PLAKE's 70 MW with margin.
- **OPGW:** overhead earth wire with optical fibres inside, used for protection communication and SCADA.

### Protection and control (secondary systems)

- **Protection relay:** detects faults and trips the breaker in milliseconds.
- **ANSI codes on the slides:**
  - **87T** transformer differential; **87L** line differential (Karnobat); **87B** busbar differential.
  - **50/51** overcurrent (instantaneous / time); **50N/51N** earth-fault overcurrent.
  - **REF (64)** restricted earth fault on transformer windings.
  - **27/59** under/over-voltage; **81** frequency; **21** distance protection.
- **Substation automation system (SAS):** collects status, measurements and alarms; enables remote control.
- **IEC 61850:** the standard protocol inside substations.
- **SCADA:** supervisory control, linking the plant to the operator. **IEC 60870-5-104** is the telecontrol protocol over TCP/IP to the grid operator (Karnobat → Bulgarian TSO). **Modbus** is a simple industrial protocol for inverters and meters.
- **EMS (energy management system):** decides when batteries charge or discharge, and coordinates PV, battery and load. In off-grid systems it is the "brain".
- **AC/DC auxiliary system:** batteries, chargers and UPS that keep protection and control alive during outages. Karnobat needs **≥ 2 h backup**.
- **LV panels (MNS / GCS / GCK / GGD):** Chinese standard low-voltage switchboard families for auxiliary loads.

### Power quality

- **SVG / STATCOM:** power electronics that inject or absorb reactive power fast, for voltage control. Grid codes require renewable plants to provide reactive power (Karnobat: −28% / +34% of gross power). TBEA has more than 17 Gvar installed.
- **Capacitor banks / reactors:** slower, cheaper reactive power compensation. **Shunt reactors** absorb the capacitive charging of long cables.

### Solar and storage equipment

- **String inverter:** many small units (e.g. 250–330 kW). Easier maintenance, and a failure affects only a small part of the plant.
- **Central inverter:** fewer, very large units.
- **MV skid / power station:** pre-assembled block with inverter or PCS, transformer and RMU on one base. Faster to install.
- **PCS (power conversion system):** bidirectional inverter for batteries (AC→DC to charge, DC→AC to discharge).
  - **Grid-following PCS** needs an existing grid to synchronise to.
  - **Grid-forming PCS** creates the voltage and frequency itself. It is **essential for off-grid systems** (Middle East) and is increasingly valued for grid stability.
- **LFP (lithium iron phosphate) battery:** the dominant stationary chemistry. It is safer and has longer life than NMC. Usually sold in **20-ft liquid-cooled containers** of about 5 MWh (TBEA TB-S2000: 5.015 MWh, 314 Ah cells, −30 to +50 °C).
- **Installed vs usable energy:** usable is lower because of depth-of-discharge limits.
- **BOL / EOL:** beginning and end of life. Capacity fades about 2–3% a year, and **augmentation** (adding modules later) keeps the guaranteed capacity.
- **C-rate:** power ÷ energy. A 2-hour system is 0.5C; a 4-hour system is 0.25C.
- **BESS balance-of-plant (BoP):** everything except the battery cells and racks, meaning PCS, transformers, MV switchgear, cables, EMS and fire protection. This is a realistic TBEA entry point even when cells come from elsewhere.

### Substation formats

- **Prefabricated / modular substation:** factory-built, pre-wired cabins. TBEA claims 4–6 months instead of about 12, and 60% less footprint.
- **Mobile (vehicle-mounted) substation:** a complete substation on trailers (35–380 kV). Used for emergencies, maintenance outages, temporary supply and fast connections.

### HVDC

- **LCC (line-commutated):** classic, very high power, needs a strong AC grid.
- **VSC (voltage-source converter):** modern and flexible. It can supply weak grids, provide black start and works with offshore wind. Türkiye's planned design is **±525 kV, 2 GW VSC bipole**.
- **Main equipment:** converter valves (usually Hitachi, Siemens, GE or Chinese majors), **converter transformers**, smoothing reactors, AC/DC filters, DC cables or lines, and GIS.
- TBEA's realistic share: converter transformers, reactors, capacitors, bushings, GIS and cables.

---

## 3. How the project schematics work

**Solar + storage plant (Radilovo / Katselovo, Karnobat)**
`PV strings (DC) → string inverters (DC→AC, ~0.8 kV) → step-up transformer (to 33 kV) → MV cables → 33 kV switchgear (collector busbar) → main transformer (33/220 or MV/110 kV) → HV switchgear + CT/VT → overhead line → grid substation`

Battery branch: `LFP containers (DC) → PCS (DC↔AC) → step-up transformer → same 33 kV busbar`

**Wind farm (PLAKE / Golem Kamen)**
`Turbine generator → nacelle/tower cables → turbine step-up transformer (to 20 kV) → RMU → 20 kV collector cables → 20 kV switchgear → main transformer 110/20 kV → 110 kV switchgear → overhead line → grid`

**Off-grid microgrid (Middle East)**
`PV + battery (grid-forming PCS) → 33 kV collector switchgear → 33/11 kV transformers (OLTC) → 11 kV distribution switchgear → site loads`. There is no utility grid: the PCS and EMS hold voltage and frequency.

**Why the main transformer is often 2 × units:** redundancy. PLAKE's 2 × 40 MVA for 70 MW means that if one transformer fails, about half the plant can still export.

---

## 4. Standards and qualification (what "qualified" means)

| Area | Standard |
|---|---|
| Power transformers | IEC 60076 |
| HV switchgear / GIS | IEC 62271 |
| MV switchgear | IEC 62271-200 |
| Instrument transformers | IEC 61869 |
| MV cables / HV cables | IEC 60502 / IEC 60840, 62067 |
| Substation communication | IEC 61850 |
| Telecontrol | IEC 60870-5-104 |
| Battery safety | IEC 62619, UL 9540A (fire propagation) |
| Power converter safety | IEC 62477-1 |
| PV inverters | IEC 62109, IEC 61727 / grid code |

- **Type test:** a one-off test of a design (short-circuit withstand, lightning impulse, temperature rise), done at an independent lab such as **KEMA, CESI or ASTA**. Buyers want certificates for the *same design and rating*.
- **Routine test:** done on every unit at the factory (FAT, the factory acceptance test). Big buyers often witness it.
- **Turkish utilities and TEİAŞ** issue their own technical specifications and may require approved-vendor status. Connection substations built by private developers are often **handed over to TEİAŞ**, so TEİAŞ specs apply.
- **Bulgaria / EU:** the EU grid code (**RfG**) classifies plants. **Type D** means connection at ≥ 110 kV (Karnobat), which brings the strictest requirements (fault ride-through, reactive power, frequency response).
- **The first local reference** is often the hardest step. After one successful project, approval for the next becomes much easier.

---

## 5. Türkiye market structure (who decides what)

**Institutions**

- **MENR** (Ministry of Energy and Natural Resources): policy, targets, YEKA auctions.
- **EPDK / EMRA:** the regulator. It issues licences, sets tariffs and approves distribution investment (TL 776bn for 2026–30).
- **TEİAŞ:** state transmission system operator. It owns and runs the 154/400 kV grid, gives connection opinions, and tenders substations and lines (often with World Bank money). About 824 substations.
- **EÜAŞ:** state generation company.
- **21 distribution companies (EDAŞ):** privatised regional networks (e.g. Enerjisa, CK Enerji). They buy MV equipment, distribution transformers and RMUs. This is the domestic-dominated commodity segment.
- **OIZs (OSB):** organised industrial zones. **218 run their own distribution networks** and buy their own 154/34.5 kV substations.

**How renewable projects get built**

1. Grid capacity is allocated, through **YEKA auctions** (state-designated zones; about 2 GW a year) or licence or pre-licence applications.
2. **Storage-integrated licences** (2022–23 window): a wind or solar plant could get capacity if it added storage at least equal to its capacity. This produced about 33 GW of applications, and most are not yet built.
3. The developer gets TEİAŞ connection approval, builds the plant and the connection substation (via an EPC), and often transfers the substation to TEİAŞ.
4. **EPC contractors** frequently choose or shortlist the equipment, so EPC relationships matter as much as developer relationships.

**Procurement rules**

- **Public tenders (Law 4734):** domestic goods may get a **price advantage of up to 15%**, and for some listed products it is compulsory. A "Yerli Malı Belgesi" (domestic goods certificate) is issued via TOBB and the chambers. In H1 2026 it was applied in about 42% of tenders open to foreign bidders.
- **Private procurement** (developers, EPCs, data centers, industry): no domestic preference. The decision is on price, delivery, quality, references, service and financing.
- **World Bank-financed:** World Bank Procurement Regulations apply, with open international competitive bidding and prequalification for large contracts. Domestic preference applies only if stated in the bidding documents. Bid evaluation looks at experience, financial capacity, technical compliance and lowest evaluated cost.

**Grid links:** Türkiye is synchronously connected with continental Europe's grid (ENTSO-E) since 2015. There are interconnections with Bulgaria and Greece, and an Azerbaijan–Georgia–Türkiye–Bulgaria green-energy corridor was signed at COP31 in November 2026.

---

## 6. The numbers on the slides: meaning and caveats

| Number | What it means | Caveat |
|---|---|---|
| 127.4 GW installed (end-Sep 2026) | Total generation capacity; 63% renewable | Monthly MENR data |
| Solar 28.2 GW > gas 25.0 GW | Solar is now the 2nd-largest source after hydro (32.3 GW) | — |
| 120 GW wind + solar by 2035 | Today 43.8 GW, so about 76 GW more is needed (8–10 GW/yr) | Record year was about 6.5 GW (Ember) |
| 360.9 TWh (2025) | Record annual consumption | — |
| 680 TWh / 281 GW (2040) | New "Milli Enerji 2040" strategy (5 Nov 2026) | A current-policies scenario gives about 551 TWh |
| $28bn transmission to 2035 | Part of a $108bn generation + grid programme | Stated by the Minister (Sep 2026) |
| ~9,580 km / 28 GW HVDC | Planned HVDC corridors | Revised down from 14,700 km / 40 GW (2024) |
| 77k → 112k km; ~200 → 316 GW | HV lines and transformer capacity, today vs 2040 | Unit of transformer capacity as reported (likely GVA) |
| TL 776bn ≈ $18.5bn | Approved distribution investment 2026–30 | EPDK tariff period |
| ~33 GW vs ~0.2 GW | Storage-linked licences vs installed (Feb 2026) | Many licences may never be built |
| 1 GW data centers by 2030 | National AI Action Plan target | "~250 MW today" is an estimate; sources range 66–250 MW |
| 218 OIZs | Zones with their own distribution networks | 374 OIZs in total (Ministry count) |
| ~$748m World Bank (P508354) | TEİAŞ transmission project, approved Aug 2025 | First phase of $1.5bn; up to $6bn under discussion |
| €289.5m (P169143) | Earlier World Bank project (2020), included GIS substations | Closed Sep 2025 |

---

## 7. Project notes (technical points you may be asked)

### Radilovo + Katselovo (Bulgaria)

- 176 + 195 = **371 MW AC PV**. 175 + 195 = **370 MW** battery power. 700 + 500 = **1,200 MWh**.
- Radilovo is a **4-hour** battery, suited to energy shifting. Katselovo is about **2.6 h**.
- Two separate **33/220 kV substations**. Lines: Radilovo → Aleko (9.1 km), Katselovo → Dve Mogili (about 12.5 km).
- **Open:** number and MVA of main transformers, GIS vs AIS, feeder count, inverter and PCS models.
- **Rough sizing (for intuition only):** 371 MW of PV at about 300 kW per string inverter is roughly 1,200+ inverters. 1,200 MWh in 5 MWh containers is roughly 240+ containers. Each site likely needs one or two large 33/220 kV transformers (150–250 MVA class).
- **Note:** due diligence shows Radilovo PV as 175 MW in one document and 176 MW in another. We use "working values".

### Karnobat (Bulgaria)

- **150 MW total PV connection:** 28.9 MW existing + 121.1 MW new (5 × 20 + 21.1 MW). First new 20 MW phase commissioned Oct 2026.
- **BESS 45 MW / 90 MWh (2 h).** Grid limits are 150 MW export and **25 MW import**, so charging from the grid alone takes 90 ÷ 25 = **3.6 h**. The battery mainly charges from the plant's own PV.
- **110 kV connection, Type D** under the EU grid code. Requirements include voltage control at 118 kV ± 2 kV, reactive power −28% / +34%, frequency protection 47.5 / 50.3 Hz, and SCADA to the TSO via IEC 60870-5-104.
- Existing assets: 33/110 kV substations, a 110 kV line (ACO 400 conductor, 26 towers), OPGW.
- **Reference datasheet in the developer deck is Sungrow** (ST2752UX + SC5000UD-MV). Do not show this to TBEA, but it explains the "supplier to be confirmed" wording.
- **Financial model (internal only, do not share):**
  - The model covers a 100 MW AC / 118 MWp PV-only case: €73.8m capex, 65% senior debt (EURIBOR + 3.1%).
  - Project IRR is about 6% and sponsor IRR about 9.8%; minimum DSCR is 1.40×.
  - The model has known inconsistencies.

### PLAKE + Golem Kamen (North Macedonia)

- 70 + 70 = **140 MW**, 20 turbine locations (about 7 MW per turbine).
- **PLAKE:** 20 kV collection; **2 × 40 MVA, 110/20 kV, YNd11, ONAF**; ACSR 240/40 line on alternative routes of 24 km (Ohrid) or 30 km (Bitola 1).
- **Golem Kamen:** preliminary. Connection may be 110 kV or 220 kV; the 80–100 MVA figure is a substation range, not a single transformer rating.
- Makedonski Brod / STARCI is at the measurement stage, with no capacity yet.
- TBEA's portfolio covers wind towers, nacelle transformers and cables. That is a "full electrical balance-of-plant + towers" story.
- The national TSO is **MEPSO**.

### Middle East off-grid

- Three alternatives (not cumulative): **5 / 10 / 20 MW**, **20 / 40 / 80 MWh** net AC energy (about 4 h), PV 7.0 / 14.0 / 28.0 MWp.
- 20 MW option: 80 × 250 kW inverters, 8 PV skids, 8 BESS skids (2.5 MW PCS + 3.15 MVA), 20 LFP containers (about 5 MWh each), 2 × 25 MVA 33/11 kV OLTC transformers.
- **Engineering issues:**
  - **55 °C ambient** vs the battery catalogue limit of 50 °C, which may need extra cooling or shading.
  - **Inverter derating:** 250 kW at 30 °C falls to 208 kW at 50 °C, so 80 inverters give about 16.6 MW at 50 °C, not 20 MW.
  - **Grid-forming PCS** is mandatory, because there is no grid to follow.
- Protection functions listed: 87T, REF, 50/51, 50N/51N, 27/59, 81. Communication: IEC 61850, IEC 60870-5-104, Modbus. Redundant SCADA.

---

## 8. Competitors (quick facts)

| Company | What to know |
|---|---|
| **Astor Enerji** (BIST: ASTOR) | Largest Turkish transformer and switchgear maker. Order backlog about $1.84bn, mostly export. Frequent TEİAŞ transformer tender winner. |
| **Europower Enerji** (BIST: EUPWR) | Transformers; building a new transformer factory (about $100m). Has reportedly held sale talks. |
| **BEST** (Balıkesir Elektromekanik) | Power transformers up to 1,250 MVA / 765 kV; strong R&D. |
| **EKOS** | Transformers and compact substations; exports to 38+ countries. |
| **Kontrolmatik / Pomega** | Battery systems and an LFP cell plant (about 3 GWh). A direct competitor in BESS. |
| **Hitachi Energy** | New Dilovası power-transformer factory (Jun 2026, about $70m). HVDC MoU with TEİAŞ (Nov 2026). |
| **Siemens** (Siemens AG) | LV/MV switchgear in Gebze. Siemens Energy local HV plant not confirmed. |
| **Chinese importers** | Inverters are already largely Chinese (Huawei, Sungrow etc.). Competition is on price in private projects. |

**What this means:** avoid public tenders with domestic preference at first. Local factories are full, so **delivery slots** are a real selling point.

---

## 9. TBEA quick facts (to speak their language)

- **TBEA Co., Ltd.** is headquartered in Changji, Xinjiang, and is listed in Shanghai. Group revenue is about **$20bn** (2025) with 40,000+ employees.
- **Four core industries:** electrical equipment; renewables (polysilicon via Xinte Energy; inverters; EPC); new materials (aluminium); traditional energy (coal, power).
- **TBEA Electrical Equipment Group:** transformers, switchgear, cables, capacitors/reactors/SVG, and control and protection.
- **Headline figures:**
  - 500,000 MVA a year of transformer capacity.
  - UHV transformer share in China: 33% DC and 37% AC.
  - 20,000+ GIS bays delivered.
  - 3,600 km a year of HV cable.
- **Overseas:** 100+ branches, 90+ countries, $30bn+ signed, ENR #54 global contractor (2025). Signature project: Dushanbe 500 kV substation in Tajikistan (Luban Prize).
- **Likely people in the room:** international business / overseas company, transformer business unit, switchgear unit, new energy (inverters/BESS), and EPC.
- **Their likely priorities:** overseas growth, utilisation of factory capacity, references in new markets, avoiding channel conflict, and payment security.

---

## 10. Terms you may hear

| Term | Meaning |
|---|---|
| EPC | Engineering, procurement and construction contractor (builds turnkey) |
| IPP | Independent power producer (private plant owner) |
| BoP | Balance of plant (everything except the main generator or battery cells) |
| PPA | Power purchase agreement (long-term electricity sale contract) |
| Merchant | Selling electricity at market prices, without a PPA |
| P50 / P90 | Yield estimates exceeded with 50% / 90% probability (banks use P90) |
| DSCR | Debt service coverage ratio (cash flow ÷ debt payments) |
| ICB / ICP | International competitive bidding / procurement |
| FAT / SAT | Factory / site acceptance test |
| N-1 | Grid can lose one element without losing supply |
| NTC | Net transfer capacity (cross-border) |
| Sinosure | China's export credit insurer (often behind Chinese supplier financing) |
| YEKA | Renewable Energy Resource Area auctions (Türkiye) |
| OSB / OIZ | Organised industrial zone |
| TSO / DSO | Transmission / distribution system operator |
| ESO / MEPSO | Bulgarian / North Macedonian TSO |

---

## 11. Likely technical follow-ups — short answers

- **"Which products should TBEA lead with in Türkiye?"** 154 kV power transformers, 170 kV GIS and CT/VT, 36 kV switchgear, protection and automation, and PCS/BESS balance-of-plant for storage projects.
- **"What are typical lead times locally?"** Local transformer factories are heavily booked with export orders. If TBEA can offer competitive delivery for 154 kV-class units, that is a real advantage. Confirm TBEA's current slots.
- **"Do Turkish buyers accept Chinese equipment?"** Yes in inverters and increasingly in BESS. In HV transformers and GIS acceptance depends on TEİAŞ specs, type tests, references and local service. That is the qualification work.
- **"Why GIS rather than AIS?"** GIS when land is scarce or expensive (cities, data centers, industrial zones), the environment is harsh, or reliability needs are high. AIS is cheaper for remote renewable sites with land available.
- **"What does grid-forming mean?"** The PCS creates voltage and frequency instead of following the grid. It is required for off-grid systems and increasingly asked for in weak grids.
- **"Is the World Bank money still available?"** Phase-one packages may already be in procurement. Further phases ($1.5bn programme, up to $6bn discussed) are the bigger opportunity. We will check the procurement plan.
- **"What about HVDC?"** It is at specification stage (±525 kV, 2 GW VSC). No construction tender yet. Hitachi Energy signed an MoU. TBEA's realistic share is converter transformers, reactors, bushings, GIS and cables.
- **"What payment or financing structures are common?"** Private developers often use project finance (bank debt 60–75%). Supplier credit or export credit (Sinosure-backed) can make an equipment offer more competitive.
