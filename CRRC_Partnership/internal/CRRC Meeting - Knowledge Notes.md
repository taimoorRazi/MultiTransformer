# CRRC Meeting, Zhuzhou — Knowledge Notes

Background for answering follow-up questions. It follows the deck and is **internal only**. Slide numbers refer to the 59-slide version.

---

## 1. Wind basics you will hear in the room

**Power, energy, capacity factor**

- **MW**: power (rate). **MWh**: energy (amount). A 7 MW turbine running at full power for one hour makes 7 MWh.
- **Capacity factor**: actual yearly energy ÷ (rated power × 8,760 h). Good Turkish onshore sites reach about **30–40%**. A 7 MW turbine at 35% makes about **21.5 GWh a year**.
- **AEP** (annual energy production): the number developers and banks care about most. It depends on the wind speed, the rotor size and availability.
- **P50 / P90**: AEP that will be exceeded in 50% / 90% of years. **Banks lend on P90.**

**Turbine size terms**

- **Rated power** (MW) is the generator's maximum. **Rotor diameter** (m) decides how much wind is captured. The name "D175" or "D195" usually refers to the **rotor diameter**, here 175 m or 195 m.
- **Hub height**: tower height to the rotor centre. Higher means stronger, steadier wind but a more expensive tower and more difficult logistics.
- **Specific power** (W/m² of swept area): lower values mean a big rotor on a modest generator, which suits **medium and low wind** sites (much of inland Türkiye).
- **IEC wind class** (I, II, III; A/B/C for turbulence): class I = high wind, III = low wind. "IIB+" means a medium-wind design with medium turbulence, slightly extended. This is the D175's design class.

**Drivetrain types**

- **DFIG (doubly-fed induction generator) + gearbox**: the generator is connected directly to the grid, and a partial-size converter (about 30% of rating) controls it. It is lighter and cheaper. This is CRRC's main onshore concept (the "6.X–8.X MW DFIG drivetrain").
- **Medium-speed / PMSG with full converter**: the permanent-magnet generator and full-size converter give better grid support. Common with other Chinese OEMs.
- **Direct drive**: no gearbox (Enercon, Goldwind).
- Expect CRRC to defend DFIG on **cost, weight and proven reliability**, and full converters on grid-code support. Do not take sides; ask.

**Availability**

- **Time-based availability (TBA)**: % of time the turbine is able to run. The 98% on slide 32 is CRRC's figure versus a 97% industry average.
- **Energy-based availability**: % of possible energy actually produced. Lenders increasingly prefer this.
- Availability guarantees, usually 95–97% in the service contract, with liquidated damages, are a key part of bankability.

**Grid code terms**

- **LVRT / HVRT** (low/high-voltage ride-through): the turbine must stay connected during grid voltage dips or spikes. Required by TEİAŞ and European grid codes.
- **Reactive power / power factor**: the turbine must help control grid voltage.
- **Frequency response**: the turbine reduces or raises output when grid frequency changes.
- **Grid-forming** (for batteries and PCS): the inverter creates its own voltage and frequency reference, so it can run an **island system** with no utility grid. A normal "grid-following" inverter cannot. This is essential for the Middle East off-grid project.

---

## 2. Turbine component glossary (slide 32 and slide 39)

| Component | What it does | Notes |
|---|---|---|
| **Blades** | Capture the wind | 80–95 m long for 175–195 m rotors. The biggest logistics challenge |
| **Pitch system** | Turns each blade to control power and to stop the rotor safely | Electric pitch with **supercapacitors** as emergency backup (CRRC) |
| **Hub and main bearing** | Connect the blades to the shaft | |
| **Gearbox** | Raises the slow rotor speed (about 10 rpm) to generator speed | Most frequent major failure in older fleets; a key service topic |
| **Generator** | Converts rotation to electricity | DFIG in CRRC's main onshore line |
| **Converter** | Power electronics between generator and grid; controls speed, LVRT and reactive power | Built from **IGBTs**. CRRC makes its own IGBT chips (Times Electric), a real differentiator |
| **Nacelle transformer** | Steps up the turbine's low voltage (about 0.69–1 kV) to collection voltage (20–35 kV) | **Dry-type** inside the nacelle (CRRC). Older designs put it at the tower base |
| **Yaw system** | Turns the nacelle into the wind | |
| **Tower** | Steel tubular, concrete or hybrid | **Segmented steel** towers can be transported in smaller pieces. Towers are the easiest part to localise in Türkiye |
| **SCADA / controller** | Monitors and controls each turbine and the whole wind farm | Must integrate with TEİAŞ / the TSO |

**Plant-level equipment**

- **Collection system**: 20 kV or 33–35 kV cables linking the turbines to the substation.
- **Main substation**: steps up to 110 kV (North Macedonia) or 154 kV (Türkiye). Main power transformers are **outside CRRC's documented range** (dashed boxes in the deck). CRRC offers **prefabricated substations up to 220 kV**.
- **Met mast**: measures wind on site before construction. Makedonski Brod has 12 months of data from an 80 m mast.

---

## 3. Solar and storage glossary (slides 29, 41, 43, 45)

| Term | Meaning |
|---|---|
| **MWp vs MW AC** | MWp = DC panel rating; MW AC = inverter output. The DC/AC ratio is usually 1.2–1.4 (the off-grid project uses 1.4) |
| **String inverter** | Many small inverters (e.g. 350 kW, CRRC NM5.350K). Easier to maintain; common now |
| **Central inverter** | Few large inverters (2.5–5 MW) |
| **PV MV station / skid** | Inverter + MV transformer + switchgear in one container (CRRC TGN series) |
| **DC combiner box** | Combines PV strings before the inverter (CRRC tDriver-EC, 1,500 V) |
| **LFP** | Lithium iron phosphate, the standard safe battery chemistry for grid storage |
| **BESS container** | Battery racks + cooling + fire safety (CRRC CESS-L5016, about 5 MWh) |
| **PCS** | Power conversion system: the inverter for batteries (CRRC APCS-2500, 2.5 MW) |
| **PCS + MV station** | PCS + transformer + switchgear in one skid (CRRC CESS-eStation-5000) |
| **EMS** | Energy management system: decides when to charge and discharge |
| **Duration** | MWh ÷ MW. Karnobat 45 MW / 90 MWh = **2 hours**; Radilovo 175 / 700 = **4 hours** |
| **KYN61-40.5 / KYN28A-12** | Chinese metal-clad switchgear types for 35–40.5 kV and 12 kV |

---

## 4. Türkiye wind market — how it works

**Two ways to build a wind farm in Türkiye**

1. **YEKA** (renewable energy resource areas): state tenders for defined zones. Winners get a fixed price (YEKA RES-2026: about **3.5 €c/kWh**), but must meet **local-content rules**: at least **55 "yerlilik" points** backed by domestic-goods certificates (tower and blades at least 65% domestic). This is effectively closed to imported turbines today.
2. **Licensed private projects**: developers get a licence through EPDK and TEİAŞ grid capacity, then sell in the market or under PPAs. **No mandatory local-content points.** This is where CRRC can enter now.

**Other routes**

- **Capacity extensions** (2023 rules): existing licensed wind farms can add turbines up to their licence or connection limits. Quick, because the grid connection already exists.
- **Repowering**: about 30% of Türkiye's installed wind is turbines under 3 MW (built before about 2012). Replacing them with fewer, larger turbines will be a large market from about 2027.
- **Storage-integrated licences**: wind or solar plants with storage equal to their capacity. About 33 GW of pre-licences, including 263 wind projects; very few built.
- **Hybrid solar at wind farms**: adding solar under the same connection.

**Local-content incentives (YEKDEM)**

- Plants using domestic components get a bonus on top of the tariff (about TL 0.08/kWh for some components, for the first years of operation). From 2026 the incentive rules add domestic nacelle and generator requirements.
- **Offshore**: the first 1 GW tender (planned Q1 2027) requires 25% local content of total capex, with a penalty of about US$5m per missing point.

**Who decides**

- **EPDK**: the energy regulator (licences, storage rules).
- **MENR / Energy Ministry**: policy and YEKA tenders.
- **TEİAŞ**: the transmission operator (grid connection, grid code).
- **TÜREB**: the Turkish Wind Energy Association (statistics, lobbying).
- **Buyers**: Turkish energy groups and IPPs. They choose turbines on price, delivery slots, bankability, service and personal trust.

**Key numbers (all on the slides)**

- Wind installed: about **15.5 GW** (end-Sep 2026, 12.2% of 127.4 GW).
- Additions: about 1.3 GW (2024), **2.1 GW record (2025)**, about 2.5 GW expected (2026). Türkiye was #2 in Europe for new wind in 2025.
- Target: **63 GW by 2040** (about 57 GW onshore + 6 GW offshore). That means about 3 GW a year.
- **YEKA RES-2026**: 1.5 GW, 7 zones, 5 Turkish developers. **None has announced a turbine order yet.**
- **China–Türkiye MoU** (12 Nov 2026): up to US$15bn for 7 GW of wind and solar plus storage, tied to local turbine production. **Non-binding; no Chinese company named.**
- Caution: do not add Ministry MWe figures to TÜREB MWm figures. They measure differently.

---

## 5. Competitors (slide 49)

| OEM | Türkiye position | Notes |
|---|---|---|
| **Nordex** | ~34% of installed base, #1 | New İzmir blade plant (May 2026, about 1,200 blades a year); record 525 MW order |
| **Enercon** | ~24% | Own blade plant in Bergama (about €50m, 150 sets a year, from Q4 2026); generators and hybrid towers with ATEŞ |
| **GE / Vestas** | ~15% each | Vestas also active in Bulgaria (Strazhitsa) |
| **Siemens Gamesa** | ~8% | |
| **Goldwind** | ~2% | 1.2 GW+ installed and contracted; blade plant at site-selection stage. Under an in-depth EU FSR review since Feb 2026 |
| **Envision** | | 232 MW Karaman (Türkiye); 131 MW Štip, North Macedonia (Phase 1, financial close Sep 2026, EBRD loan) |
| **SANY** | | 168 MW Alibunar, Serbia, construction started Jun 2026; build-own-operate |
| **Dongfang** | | Proposed US$250m, 2 GW a year plant in Türkiye (proposal only) |

**What it means for CRRC**

- Incumbents have factories and service networks. Their strength is the YEKA and utility segment.
- Chinese peers prove that **Chinese turbines are bankable in the region**, especially outside the EU (Türkiye, North Macedonia, Serbia).
- A 2025 Turkish **anti-dumping case on Chinese blades** was **closed without duties** (31 Dec 2025) because the complainant stopped cooperating. It shows local blade makers may litigate again.
- **EU**: anti-dumping duties on Chinese steel wind towers since 2021, plus the FSR review. These matter for Bulgaria and Romania, not for Türkiye.

---

## 6. CRRC quick facts (to speak their language)

- **CRRC Corporation**: the world's largest rolling-stock maker. State-owned; group revenue about RMB 246bn.
- **CRRC Zhuzhou Institute** (in Zhuzhou, Hunan): CRRC's power-electronics and new-energy arm. It includes **CRRC Wind** (wind turbines), **Times Electric** (listed in Hong Kong and Shanghai: IGBTs, converters, traction systems; RMB 24.9bn revenue in 2024), and solar, storage and hydrogen power supplies. Public evidence supports Institute revenue of "more than RMB 60bn" (RMB 52.3bn in 2023). **Do not quote US$9.68bn.**
- **Wind ranking**: **#7 globally** in GWEC's 2025 supplier ranking (after Goldwind, Envision, Windey, Mingyang, SANY and Vestas).
- **Platforms**: onshore 5–12.5 MW; offshore 8.5–26 MW (a 12 MW offshore DFIG unit was hoisted in Aug 2025).
  - **D175, 6.25 MW** (configurable 6.25–8.5 MW, IEC IIB+): the European platform, designed for German, Italian and Spanish grid codes. First unit installed 14 Jun 2026 at the CEPRI Zhangbei test field. Certification in progress.
  - **D195, 7.15 MW**: **TÜV SÜD type certificate** received at WindEnergy Hamburg, 22 Sep 2026.
- **Overseas wind references**: **Kazakhstan, Arkalyk 50 MW** (8 turbines, Kostanay region, fully connected 22 Dec 2025); **Vietnam, Shuang'an 46.2 MW** (14 × 3.3 MW, Gia Lai; CRRC's first overseas complete-turbine export). CRRC says it sells in Germany, Denmark, France, Australia, India, Brazil and others.
- **CRRC's own figures** (from its presentation): 300+ wind farms, about 9,000 turbines under service, 98% TBA, 70 GW+ PV inverters. Treat these as company claims.
- **CRRC in Türkiye (rail)**:
  - **Ankara metro** (2012): 324 cars (one source says 342), about US$391m, with local-content commitments.
  - **CRRC-MNG plant**, near Ankara (opened 2014, about 108,000 m²).
  - **İstanbul M11 airport metro**: 176 cars, 60% local content, assembled in Ankara, in service since Jan 2023.
  - **400+ metro cars** delivered to İstanbul, Ankara and İzmir in total.
- **Middle East**: CRRC is in the MAPA–Limak–CRRC consortium for the **Dubai Metro Blue Line** (awarded Dec 2024, AED 20.5bn). Limak is a Turkish group: a useful talking point.

**Protocol tips**

- Use full titles. Address the most senior person first, and thank them first and last.
- Present business cards with both hands, Chinese side up if printed.
- Silence after a question is normal. Do not fill it.
- "We will study it" usually means "not now". Do not push in the room.

---

## 7. Project notes (technical points you may be asked)

### Ongoing wind project with CRRC Wind (Türkiye) — slide 37

- **Do not name it**, and do not give the site, customer, capacity or schedule in the plenary.
- Talk about the role: customer relationship, local coordination, the technical-commercial process, and lessons on bankability, grid code, logistics and service.

### PLAKE + Makedonski Brod (North Macedonia) — slides 38–39

- **PLAKE: 72 MW = 10 × 7.2 MW.** The study assumes 20 kV collection, **2 × 40 MVA 110/20 kV** transformers (from the June 2024 connection study, done for 70 MW), and a 110 kV line of **about 7 km**.
- **Makedonski Brod: 55 MW = 10 × 5.5 MW.** 12 months of wind data from an 80 m mast; voltage levels not yet defined; grid line **about 12 km**.
- **Platform fit**: the D175 (6.25–8.5 MW) can be configured at 7.2 MW. For 5.5 MW, ask CRRC whether a derated D175 or a smaller platform fits, or whether fewer larger turbines would give better yield.
- North Macedonia is **outside the EU**, so there is no FSR friction. Envision's Štip project is a precedent for a Chinese OEM with EBRD financing.
- Main transformers and lines are outside CRRC's range.
- **Note:** the TBEA deck used PLAKE + Golem Kamen (140 MW). Confirm the current configuration with the partner.

### Radilovo + Katselovo (Bulgaria) — slides 40–41

- 371 MW AC solar, 370 MW / 1,200 MWh storage, two 33/220 kV substations.
  - Radilovo: 176 MW AC, 175 MW / 700 MWh (4 h), 220 kV, about 9.1 km to Aleko.
  - Katselovo: 195 MW AC, 195 MW / 500 MWh (about 2.6 h), about 12.5 km to Dve Mogili.
- A 3-year offtake offer at **€185/MWh**. Bulgarian day-ahead prices were about €166 (Sep 2026) and €232 (Oct 2026). The feasibility model used last year's cautious price assumption.
- **EU grant support expected for 500 MWh** of storage. Check the grant rules for any non-EU supplier conditions.
- Bulgaria is a **storage market more than a wind market**: wind is flat at about 0.7 GW, while the RESTORE storage rounds awarded about 14 GWh.

### Karnobat (Bulgaria) — slides 42–43

- Operating since 2023; 150 MW export / 25 MW import connection at 110 kV (TSO addendum Oct 2026).
- The opportunity is what is still to be built: about 121 MW of new solar phases and 45 MW / 90 MWh of storage (2 h).

### Middle East off-grid — slides 44–45

- Three options: 5 / 10 / 20 MW, with 20 / 40 / 80 MWh and 7 / 14 / 28 MWp.
- **55 °C ambient**: CRRC's string-type battery is rated to 55 °C; the centralized type only to 50 °C. Inverters and PCS derate above 40–45 °C.
- An island system needs **grid-forming PCS** and a microgrid EMS. CRRC launched a 2.5 MW grid-forming product in 2026; check its island-mode capability and its temperature rating.
- The location is shown as indicative only. Share details under NDA.

---

## 8. Terms you may hear

| Term | Meaning |
|---|---|
| **Type certificate** | Independent certification (TÜV SÜD, DNV, etc.) that a turbine design meets IEC 61400. Lenders require it |
| **Power curve** | Output vs wind speed. Guaranteed in the supply contract |
| **TSA / SA** | Turbine supply agreement / service agreement |
| **LTSA** | Long-term service agreement (10–20 years) |
| **LDs** | Liquidated damages: penalties for late delivery or low availability |
| **EPC / BOP** | Engineering-procurement-construction / balance of plant (roads, foundations, cables, substation) |
| **COD** | Commercial operation date |
| **Curtailment** | When the grid operator orders the plant to reduce output |
| **YEKDEM** | Türkiye's renewable support mechanism (feed-in tariff plus a local-content bonus) |
| **Yerli Malı belgesi** | Domestic-goods certificate, the basis of local-content points |
| **OIZ (OSB)** | Organised industrial zone |
| **FSR** | EU Foreign Subsidies Regulation |
| **CEPRI** | China Electric Power Research Institute (operates the Zhangbei test field) |
| **GWEC / CWEA** | Global Wind Energy Council / Chinese Wind Energy Association |

---

## 9. Likely technical follow-ups — short answers

- **"What wind speeds are typical in Türkiye?"** The best Aegean and Thrace sites have about 7–8.5 m/s at hub height; inland sites have about 6–7 m/s. That favours large rotors (low specific power).
- **"What grid voltage do Turkish wind farms connect at?"** Usually 154 kV (TEİAŞ), with 33–34.5 kV collection. Large plants connect at 380/400 kV.
- **"How long from order to installation?"** Typically 12–18 months, including logistics. Developers decide 12–24 months before COD.
- **"Which ports?"** Aegean ports near İzmir (Aliağa, Nemrut) and Bandırma for Marmara; İskenderun and Mersin for the Eastern Mediterranean.
- **"Do Turkish banks accept Chinese turbines?"** Yes. Goldwind and Envision projects have been financed. Lenders want a type certificate, a power-curve guarantee, availability LDs and a credible local service plan.
- **"Is there a turbine import duty?"** Turbines from China face customs duty unless an incentive certificate (investment incentive) exempts it. Confirm the current rate with a customs adviser; do not quote a number.
- **"Who certifies grid-code compliance?"** TEİAŞ requires compliance tests and model validation before full commercial operation.
