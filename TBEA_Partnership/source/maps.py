"""Generate presentation maps in the Ulusoy palette (Natural Earth data)."""
import json, math, sys
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon as MPoly, FancyArrowPatch
from matplotlib import font_manager as fm

S = "/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad/"
for f in ["LiberationSans-Regular.ttf", "LiberationSans-Bold.ttf"]:
    fm.fontManager.addfont("/usr/share/fonts/truetype/liberation/" + f)
plt.rcParams["font.family"] = "Liberation Sans"

NAVY = "#0F2B45"; INK = "#16293C"; BLUE = "#1C6EA8"; MUTED = "#5B6B7C"
PALE = "#F2F6FA"; ICE = "#D9E7F4"; MID = "#AEC6DB"; TBEA = "#0050A0"; SEA = "#FFFFFF"
LAND = "#E6EEF6"; BORDER = "#FFFFFF"

geo50 = json.load(open(S + "geo/ne_50m_admin_0_countries.geojson"))
geo10 = json.load(open(S + "geo/ne_10m_admin_0_countries.geojson"))

def polys(feat):
    g = feat["geometry"]
    if g["type"] == "Polygon":
        return [g["coordinates"][0]]
    return [p[0] for p in g["coordinates"]]

def draw_countries(ax, geo, colors, default=LAND, lw=0.6, edge=BORDER):
    for f in geo["features"]:
        name = f["properties"]["ADMIN"]
        c = colors.get(name, default)
        for ring in polys(f):
            ax.add_patch(MPoly(np.array(ring), closed=True, fc=c, ec=edge, lw=lw, zorder=1))

def setup(w_in, h_in, lon0, lon1, lat0, lat1, bg=SEA):
    fig = plt.figure(figsize=(w_in, h_in), dpi=220)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(lon0, lon1); ax.set_ylim(lat0, lat1)
    ax.set_aspect(1 / math.cos(math.radians((lat0 + lat1) / 2)))
    ax.axis("off"); fig.patch.set_facecolor(bg); ax.set_facecolor(bg)
    return fig, ax

def arc(ax, p0, p1, bend=0.2, color=BLUE, lw=2.2, ls="-", z=5, arrow=False, alpha=1):
    (x0, y0), (x1, y1) = p0, p1
    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
    dx, dy = x1 - x0, y1 - y0
    cx, cy = mx - dy * bend, my + dx * bend
    t = np.linspace(0, 1, 80)
    xs = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t ** 2 * x1
    ys = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t ** 2 * y1
    ax.plot(xs, ys, color=color, lw=lw, ls=ls, zorder=z, solid_capstyle="round", alpha=alpha)
    if arrow:
        ax.annotate("", xy=(xs[-1], ys[-1]), xytext=(xs[-6], ys[-6]),
                    arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=16), zorder=z)

def dot(ax, x, y, c=NAVY, s=60, ring=True, z=6):
    if ring:
        ax.scatter([x], [y], s=s * 3.2, c="white", zorder=z, edgecolors=c, linewidths=1.6)
    ax.scatter([x], [y], s=s, c=c, zorder=z + 1)

def label(ax, x, y, txt, dx=0.3, dy=0.25, size=11, c=INK, weight="normal", ha="left", z=8):
    ax.text(x + dx, y + dy, txt, fontsize=size, color=c, weight=weight, ha=ha, va="bottom", zorder=z)

def save(fig, name):
    fig.savefig(S + "assets/" + name, dpi=220, facecolor=fig.get_facecolor())
    plt.close(fig)
    print("saved", name)

# ---------------------------------------------------------------- 1. Regional platform (China -> Türkiye -> region)
def map_platform():
    fig, ax = setup(13.0, 5.6, 8, 122, 14, 56)
    col = {"Turkey": NAVY, "China": TBEA,
           "Bulgaria": MID, "North Macedonia": MID, "Greece": ICE, "Romania": ICE, "Republic of Serbia": ICE,
           "Albania": ICE, "Kosovo": ICE, "Bosnia and Herzegovina": ICE, "Montenegro": ICE, "Georgia": ICE,
           "Azerbaijan": ICE, "Iraq": ICE, "Syria": ICE, "Jordan": ICE, "Saudi Arabia": ICE, "Kuwait": ICE,
           "United Arab Emirates": ICE, "Qatar": ICE, "Oman": ICE, "Kazakhstan": ICE, "Uzbekistan": ICE,
           "Turkmenistan": ICE, "Kyrgyzstan": ICE, "Israel": ICE, "Lebanon": ICE, "Bahrain": ICE, "Armenia": ICE,
           "Croatia": ICE, "Slovenia": ICE, "Hungary": ICE, "Moldova": ICE}
    draw_countries(ax, geo50, col, lw=0.5)
    tr = (35.0, 39.2); cn = (87.3, 44.0)  # TBEA HQ region (Changji / Ürümqi, Xinjiang)
    arc(ax, cn, (33.0, 40.6), bend=-0.18, color=TBEA, lw=3.0, arrow=True)
    for dest in [(23.5, 42.6), (21.3, 41.6), (44.5, 30.5), (47.5, 24.5), (63.0, 41.0), (45.0, 41.8)]:
        arc(ax, (35.5, 39.0), dest, bend=0.18, color=BLUE, lw=1.8, ls=(0, (4, 3)), arrow=True)
    dot(ax, *cn, c=TBEA, s=90); dot(ax, 32.85, 39.93, c=NAVY, s=50)
    ax.scatter([112.57], [26.89], s=150, c="white", zorder=8, edgecolors=TBEA, linewidths=1.5)
    ax.text(111.3, 26.6, "Hengyang", fontsize=11, color="white", weight="bold", ha="right", va="center", zorder=9)
    ax.text(88.5, 38.6, "TBEA", fontsize=18, color="white", weight="bold", ha="left", zorder=9)
    ax.text(88.5, 36.6, "Xinjiang · China", fontsize=11, color="white", ha="left", zorder=9)
    label(ax, 35.5, 36.6, "TÜRKİYE", dx=0, dy=-1.9, size=15, c=NAVY, weight="bold", ha="center")
    label(ax, 20.8, 45.4, "BALKANS · SE EUROPE", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    label(ax, 44.5, 22.0, "MIDDLE EAST · GULF", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    label(ax, 66.0, 44.2, "CENTRAL ASIA · CAUCASUS", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    save(fig, "map_platform.png")

# ---------------------------------------------------------------- 2. Ulusoy historical reach
def map_reach():
    fig, ax = setup(8.4, 5.6, -3, 46, 34.5, 55)
    col = {"Turkey": NAVY, "Italy": ICE, "Germany": ICE, "United Kingdom": ICE, "Russia": LAND, "Ukraine": ICE,
           "Iraq": ICE, "Iran": ICE}
    draw_countries(ax, geo50, col, lw=0.5)
    P = {"London": (-0.13, 51.5), "Munich": (11.58, 48.14), "Trieste": (13.77, 45.65), "Çeşme": (26.30, 38.32),
         "İstanbul": (28.98, 41.01), "Ankara": (32.85, 39.93), "Samsun": (36.33, 41.29), "Trabzon": (39.72, 41.0),
         "Novorossiysk": (37.77, 44.72), "Chornomorsk": (30.66, 46.30), "Yevpatoria": (33.37, 45.19),
         "Derince": (29.81, 40.75), "Zonguldak": (31.79, 41.45)}
    # sea lines
    arc(ax, P["Çeşme"], P["Trieste"], bend=-0.12, color=BLUE, lw=2.6)
    arc(ax, P["Samsun"], P["Novorossiysk"], bend=0.1, color=BLUE, lw=2.0)
    arc(ax, P["Derince"], P["Chornomorsk"], bend=-0.1, color=BLUE, lw=2.0)
    arc(ax, P["Zonguldak"], P["Yevpatoria"], bend=0.1, color=BLUE, lw=2.0)
    # TIR road links
    for a, b in [("İstanbul", "Munich"), ("Munich", "London")]:
        arc(ax, P[a], P[b], bend=0.08, color=NAVY, lw=1.6, ls=(0, (4, 3)))
    for k in ["London", "Munich", "Trieste"]:
        dot(ax, *P[k], c=NAVY, s=46)
    for k in ["Çeşme", "Samsun", "Novorossiysk", "Chornomorsk", "Yevpatoria", "Derince", "Zonguldak"]:
        dot(ax, *P[k], c=BLUE, s=26, ring=False)
    for k in ["İstanbul", "Ankara", "Trabzon"]:
        dot(ax, *P[k], c="white", s=26, ring=False)
    lab = {"London": (0.6, 0.2), "Munich": (0.6, 0.2), "Trieste": (-0.4, 0.5, "right"), "Çeşme": (-0.5, -1.1, "right"),
           "Novorossiysk": (0.5, 0.1), "Chornomorsk": (-0.5, 0.2, "right"), "Yevpatoria": (0.4, 0.3)}
    for k, v in lab.items():
        ha = v[2] if len(v) > 2 else "left"
        label(ax, *P[k], k, dx=v[0], dy=v[1], size=10.5, ha=ha, weight="bold" if k in ("London", "Munich", "Trieste") else "normal")
    ax.text(33.0, 37.4, "TÜRKİYE", fontsize=13, color="white", weight="bold", ha="center", zorder=9)
    ax.text(17.5, 41.0, "Çeşme–Trieste Ro-Ro corridor", fontsize=10, color=BLUE, style="italic", ha="center", rotation=-28, zorder=9)
    ax.text(36.0, 43.3, "Black Sea Ro-Ro lines", fontsize=10, color=BLUE, style="italic", ha="center", zorder=9)
    save(fig, "map_reach.png")

# ---------------------------------------------------------------- 3. Regional project map
def map_projects():
    fig, ax = setup(9.6, 5.4, 17.0, 49.0, 28.0, 46.0)
    col = {"Turkey": NAVY, "Bulgaria": BLUE, "North Macedonia": BLUE}
    draw_countries(ax, geo50, col, lw=0.5)
    pts = [("Radilovo", 24.30, 42.07, "PV", "W"), ("Katselovo", 25.93, 43.55, "PV", "N"), ("Karnobat", 26.98, 42.65, "PV", "E"),
           ("PLAKE", 20.95, 41.20, "W", "W"), ("Golem Kamen", 21.35, 41.03, "W", "S")]
    for n, x, y, t, side in pts:
        dot(ax, x, y, c="#F2A900" if t == "PV" else "#2BB673", s=40)
    # Türkiye clusters (hollow markers)
    for x, y in [(29.0, 40.9), (32.85, 39.93), (27.4, 38.9), (32.5, 37.9), (38.8, 37.2)]:
        ax.scatter([x], [y], s=150, facecolors="none", edgecolors="white", linewidths=2.0, zorder=7)
    # Middle East indicative
    ax.scatter([44.5], [30.6], s=520, facecolors="none", edgecolors="#E4572E", linewidths=2.2, zorder=7, ls=(0, (3, 2)))
    dot(ax, 44.5, 30.6, c="#E4572E", s=40, ring=False)
    for n, x, y, t, side in pts[:3]:
        off = {"Radilovo": (0.0, -1.15, "center"), "Katselovo": (0.5, 0.35, "left"), "Karnobat": (0.55, -0.25, "left")}[n]
        ax.text(x + off[0], y + off[1], n, fontsize=11, color=INK, weight="bold", ha=off[2], zorder=9)
    ax.text(20.4, 39.7, "PLAKE ·\nGolem Kamen", fontsize=11, color=INK, weight="bold", ha="center", va="top", zorder=9)
    ax.text(35.0, 38.75, "TÜRKİYE", fontsize=14, color="white", weight="bold", ha="center", zorder=9)
    ax.text(35.0, 38.0, "pipeline clusters", fontsize=10, color=MID, ha="center", zorder=9)
    ax.text(25.6, 44.6, "BULGARIA", fontsize=10, color=BLUE, weight="bold", ha="center", zorder=9)
    ax.text(44.5, 31.6, "Middle East off-grid\n(location indicative)", fontsize=10.5, color="#C2410C", weight="bold", ha="center", zorder=9)
    save(fig, "map_projects.png")
    return pts

# ---------------------------------------------------------------- 4. Türkiye opportunity clusters
def map_turkiye():
    fig, ax = setup(10.4, 5.2, 25.4, 45.2, 35.3, 42.6)
    col = {"Turkey": ICE}
    draw_countries(ax, geo10, col, default="#F4F7FA", lw=0.8)
    C = [(1, 29.1, 40.85), (2, 32.85, 39.93), (3, 27.4, 38.7), (4, 32.6, 37.6), (5, 38.8, 37.3), (6, 26.9, 41.4)]
    for n, x, y in C:
        ax.scatter([x], [y], s=2400, c=BLUE, alpha=0.14, zorder=5, edgecolors="none")
        ax.scatter([x], [y], s=520, c=NAVY, zorder=6, edgecolors="white", linewidths=2)
        ax.text(x, y - 0.02, str(n), fontsize=15, color="white", weight="bold", ha="center", va="center", zorder=7)
    save(fig, "map_turkiye.png")

if __name__ == "__main__":
    map_platform(); map_reach(); map_projects(); map_turkiye()
