"""CRRC variants of the presentation maps."""
import sys
sys.path.insert(0, "/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad")
from maps import *  # noqa

RED = "#C8102E"

def map_platform_crrc():
    fig, ax = setup(13.0, 5.6, 8, 122, 14, 56)
    col = {"Turkey": NAVY, "China": RED,
           "Bulgaria": MID, "North Macedonia": MID, "Greece": ICE, "Romania": ICE, "Republic of Serbia": ICE,
           "Albania": ICE, "Kosovo": ICE, "Bosnia and Herzegovina": ICE, "Montenegro": ICE, "Georgia": ICE,
           "Azerbaijan": ICE, "Iraq": ICE, "Syria": ICE, "Jordan": ICE, "Saudi Arabia": ICE, "Kuwait": ICE,
           "United Arab Emirates": ICE, "Qatar": ICE, "Oman": ICE, "Kazakhstan": ICE, "Uzbekistan": ICE,
           "Turkmenistan": ICE, "Kyrgyzstan": ICE, "Israel": ICE, "Lebanon": ICE, "Bahrain": ICE, "Armenia": ICE,
           "Croatia": ICE, "Slovenia": ICE, "Hungary": ICE, "Moldova": ICE}
    draw_countries(ax, geo50, col, lw=0.5)
    zz = (113.13, 27.83)  # CRRC Zhuzhou Institute
    arc(ax, zz, (33.0, 40.6), bend=-0.14, color=RED, lw=3.0, arrow=True)
    for dest in [(23.5, 42.6), (21.3, 41.6), (44.5, 30.5), (47.5, 24.5), (63.0, 41.0), (45.0, 41.8)]:
        arc(ax, (35.5, 39.0), dest, bend=0.18, color=BLUE, lw=1.8, ls=(0, (4, 3)), arrow=True)
    dot(ax, *zz, c=RED, s=90); dot(ax, 32.85, 39.93, c=NAVY, s=50)
    ax.text(96.0, 34.0, "CRRC", fontsize=18, color="white", weight="bold", ha="left", zorder=9)
    ax.text(96.0, 32.0, "Zhuzhou · China", fontsize=11, color="white", ha="left", zorder=9)
    label(ax, 35.5, 36.6, "TÜRKİYE", dx=0, dy=-1.9, size=15, c=NAVY, weight="bold", ha="center")
    label(ax, 20.8, 45.4, "BALKANS · SE EUROPE", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    label(ax, 44.5, 22.0, "MIDDLE EAST · GULF", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    label(ax, 66.0, 44.2, "CENTRAL ASIA · CAUCASUS", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    save(fig, "map_platform_crrc.png")

def map_projects_crrc():
    fig, ax = setup(9.6, 5.4, 17.0, 49.0, 28.0, 46.0)
    col = {"Turkey": NAVY, "Bulgaria": BLUE, "North Macedonia": BLUE}
    draw_countries(ax, geo50, col, lw=0.5)
    pts = [("Radilovo", 24.30, 42.07, "PV"), ("Katselovo", 25.93, 43.55, "PV"), ("Karnobat", 26.98, 42.65, "PV"),
           ("PLAKE", 20.95, 41.20, "W"), ("Makedonski Brod", 21.21, 41.51, "W")]
    for n, x, y, t in pts:
        dot(ax, x, y, c="#F2A900" if t == "PV" else "#2BB673", s=40)
    for n, x, y, t in pts[:3]:
        off = {"Radilovo": (0.0, -1.15, "center"), "Katselovo": (0.5, 0.35, "left"), "Karnobat": (0.55, -0.25, "left")}[n]
        ax.text(x + off[0], y + off[1], n, fontsize=11, color=INK, weight="bold", ha=off[2], zorder=9)
    ax.text(20.2, 39.7, "PLAKE ·\nMakedonski Brod", fontsize=11, color=INK, weight="bold", ha="center", va="top", zorder=9)
    # Türkiye: ongoing CRRC wind project (location not shown) + pipeline
    for x, y in [(27.2, 41.4), (27.4, 38.7), (31.8, 37.2), (36.2, 36.9), (37.6, 39.6)]:
        ax.scatter([x], [y], s=150, facecolors="none", edgecolors="white", linewidths=2.0, zorder=7)
    ax.text(33.6, 38.75, "TÜRKİYE", fontsize=14, color="white", weight="bold", ha="center", zorder=9)
    ax.text(33.6, 38.0, "ongoing project + pipeline", fontsize=10, color=MID, ha="center", zorder=9)
    ax.text(25.6, 44.6, "BULGARIA", fontsize=10, color=BLUE, weight="bold", ha="center", zorder=9)
    ax.scatter([44.5], [30.6], s=520, facecolors="none", edgecolors="#E4572E", linewidths=2.2, zorder=7, ls=(0, (3, 2)))
    dot(ax, 44.5, 30.6, c="#E4572E", s=40, ring=False)
    ax.text(44.5, 31.6, "Middle East off-grid\n(location indicative)", fontsize=10.5, color="#C2410C", weight="bold", ha="center", zorder=9)
    save(fig, "map_projects_crrc.png")

def map_turkiye_wind():
    fig, ax = setup(10.4, 5.2, 25.4, 45.2, 35.3, 42.6)
    draw_countries(ax, geo10, {"Turkey": ICE}, default="#E9EEF3", lw=0.8, edge="#FFFFFF")
    draw_countries(ax, {"features": [f for f in geo10["features"] if f["properties"]["ADMIN"] == "Turkey"]}, {"Turkey": "#CBDDEF"}, lw=1.4, edge=MID)
    C = [(1, 27.3, 41.45), (2, 27.5, 38.75), (3, 36.2, 36.95), (4, 37.0, 39.7), (5, 32.6, 37.7), (6, 26.4, 40.25)]
    for n, x, y in C:
        ax.scatter([x], [y], s=2400, c=BLUE, alpha=0.14, zorder=5, edgecolors="none")
        ax.scatter([x], [y], s=520, c=NAVY, zorder=6, edgecolors="white", linewidths=2)
        ax.text(x, y - 0.02, str(n), fontsize=15, color="white", weight="bold", ha="center", va="center", zorder=7)
    save(fig, "map_turkiye_wind.png")

if __name__ == "__main__":
    map_platform_crrc(); map_projects_crrc(); map_turkiye_wind()
