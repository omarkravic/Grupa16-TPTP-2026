// Klik na rezultat -> prikaz poruke o statistici
function otvoriStatistiku(naziv) {
  window.location.href = "sadrzaj.html";
}

// === TABELA KONFERENCIJA ===

const istočna = [
  { tim: "Cleveland Cavaliers", logo: "images/cavs.png", pobjede: 64, porazi: 18 },
  { tim: "Boston Celtics", logo: "images/celtics.png", pobjede: 61, porazi: 21 },
  { tim: "New York Knicks", logo: "images/knicks.png", pobjede: 52, porazi: 30 },
  { tim: "Milwaukee Bucks", logo: "images/bucks.png", pobjede: 49, porazi: 33 },
  { tim: "Miami Heat", logo: "images/miami.png", pobjede: 46, porazi: 36 },
  { tim: "Indiana Pacers", logo: "images/pacers.png", pobjede: 44, porazi: 38 },
  { tim: "Orlando Magic", logo: "images/orlandomagic.png", pobjede: 41, porazi: 41 },
  { tim: "Philadelphia 76ers", logo: "images/76ers.png", pobjede: 38, porazi: 44 },
  { tim: "Chicago Bulls", logo: "images/bulls.png", pobjede: 34, porazi: 48 },
  { tim: "Atlanta Hawks", logo: "images/hawks.png", pobjede: 31, porazi: 51 },
  { tim: "Brooklyn Nets", logo: "images/nets.png", pobjede: 22, porazi: 60 },
  { tim: "Toronto Raptors", logo: "images/raptors.png", pobjede: 19, porazi: 63 },
];

const zapadna = [
  { tim: "Oklahoma City Thunder", logo: "images/okcthunder.png", pobjede: 68, porazi: 14 },
  { tim: "Houston Rockets", logo: "images/rockets.png", pobjede: 57, porazi: 25 },
  { tim: "Los Angeles Lakers", logo: "images/lalakers.png", pobjede: 50, porazi: 32 },
  { tim: "Golden State Warriors", logo: "images/gsw.png", pobjede: 48, porazi: 34 },
  { tim: "Dallas Mavericks", logo: "images/mavs.png", pobjede: 46, porazi: 36 },
  { tim: "Memphis Grizzlies", logo: "images/memphis.png", pobjede: 43, porazi: 39 },
  { tim: "Phoenix Suns", logo: "images/suns.png", pobjede: 40, porazi: 42 },
  { tim: "Sacramento Kings", logo: "images/kings.png", pobjede: 38, porazi: 44 },
  { tim: "San Antonio Spurs", logo: "images/spurs.png", pobjede: 35, porazi: 47 },
  { tim: "Utah Jazz", logo: "images/jazz.png", pobjede: 28, porazi: 54 },
  { tim: "Portland Trail Blazers", logo: "images/portland.png", pobjede: 24, porazi: 58 },
  { tim: "Detroit Pistons", logo: "images/pistons.png", pobjede: 20, porazi: 62 },
];

function popuniTabelu(podaci) {
  const tbody = document.getElementById("tabelaBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  podaci.forEach((ekipa, index) => {
    const winPct = (ekipa.pobjede / (ekipa.pobjede + ekipa.porazi) * 100).toFixed(1);
    const red = document.createElement("tr");

    red.innerHTML = `
      <td style="display:flex; align-items:center; gap:10px;">
        <img src="${ekipa.logo}" alt="${ekipa.tim}" 
             style="width:30px; height:30px; object-fit:contain; background:white; border-radius:50%; padding:2px;">
        <span>${ekipa.tim}</span>
      </td>
      <td>${ekipa.pobjede}</td>
      <td>${ekipa.porazi}</td>
      <td>${winPct}%</td>
    `;

    // Top 6 = playoff zona (zelenkasta)
    if (index < 6) {
      red.style.borderLeft = "4px solid #2e7d32";
    }

    tbody.appendChild(red);
  });
}

function prikaziIstočnu() {
  popuniTabelu(istočna);
}

function prikaziZapadnu() {
  popuniTabelu(zapadna);
}

// Učitaj istočnu po defaultu
window.addEventListener("load", () => {
  if (document.getElementById("tabelaBody")) {
    popuniTabelu(istočna);
  }
});