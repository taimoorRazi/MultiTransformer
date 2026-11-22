"""AIMS variant of the regional platform map."""
import sys
sys.path.insert(0, "/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad")
from maps import *  # noqa

ORANGE = "#3F4BB0"

def map_platform_ailu():
    fig, ax = setup(13.0, 5.6, 8, 126, 14, 56)
    col = {"Turkey": NAVY, "China": ORANGE,
           "Bulgaria": MID, "North Macedonia": MID, "Greece": ICE, "Romania": ICE, "Republic of Serbia": ICE,
           "Albania": ICE, "Kosovo": ICE, "Bosnia and Herzegovina": ICE, "Montenegro": ICE, "Georgia": ICE,
           "Azerbaijan": ICE, "Iraq": ICE, "Syria": ICE, "Jordan": ICE, "Saudi Arabia": ICE, "Kuwait": ICE,
           "United Arab Emirates": ICE, "Qatar": ICE, "Oman": ICE, "Kazakhstan": ICE, "Uzbekistan": ICE,
           "Turkmenistan": ICE, "Kyrgyzstan": ICE, "Israel": ICE, "Lebanon": ICE, "Bahrain": ICE, "Armenia": ICE,
           "Croatia": ICE, "Slovenia": ICE, "Hungary": ICE, "Moldova": ICE}
    draw_countries(ax, geo50, col, lw=0.5)
    sh = (121.47, 31.23); hf = (117.23, 31.82)
    arc(ax, sh, (33.0, 40.6), bend=-0.14, color=ORANGE, lw=3.0, arrow=True)
    for dest in [(23.5, 42.6), (21.3, 41.6), (44.5, 30.5), (47.5, 24.5), (63.0, 41.0), (45.0, 41.8)]:
        arc(ax, (35.5, 39.0), dest, bend=0.18, color=BLUE, lw=1.8, ls=(0, (4, 3)), arrow=True)
    dot(ax, *sh, c=ORANGE, s=90); dot(ax, 32.85, 39.93, c=NAVY, s=50)
    ax.text(97.0, 35.0, "AILU", fontsize=18, color="white", weight="bold", ha="left", zorder=9)
    ax.text(97.0, 33.0, "Shanghai · China", fontsize=11, color="white", ha="left", zorder=9)
    label(ax, 35.5, 36.6, "TÜRKİYE", dx=0, dy=-1.9, size=15, c=NAVY, weight="bold", ha="center")
    label(ax, 20.8, 45.4, "BALKANS · SE EUROPE", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    label(ax, 44.5, 22.0, "MIDDLE EAST · GULF", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    label(ax, 66.0, 44.2, "CENTRAL ASIA · CAUCASUS", dx=0, dy=0, size=12, c=BLUE, weight="bold", ha="center")
    save(fig, "map_platform_ailu.png")

if __name__ == "__main__":
    map_platform_ailu()
