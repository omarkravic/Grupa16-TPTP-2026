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

// === TAMNI / SVJETLI MOD ===

const themeToggle = document.getElementById("themeToggle");

// Provjeri da li postoji sačuvana tema u LocalStorage
const savedTheme = localStorage.getItem("theme");

// Ako postoji "dark", primijeni
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

// Klik na dugme mijenja temu
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Provjera trenutnog stanja
  const isDark = document.body.classList.contains("dark-mode");

  // U LocalStorage snimi izbor
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Promijeni emoji ikonu
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});
// Klik na rezultat -> prikaz poruke o statistici
function otvoriStatistiku(naziv) {
  window.location.href = "sadrzaj.html";
}
// Klik na "Kupi kartu" -> prikaz / sakrivanje mape
const kupiBtn = document.getElementById("kupiKartuBtn");
if (kupiBtn) {
  kupiBtn.addEventListener("click", () => {
    document.getElementById("mapaBox").classList.toggle("hidden");
  });
}
// === STATISTIKA IGRAČA ===

const poeni = [
  { ime: "Shai Gilgeous-Alexander", tim: "OKC Thunder", stat: 32.7 },
  { ime: "Giannis Antetokounmpo", tim: "Milwaukee Bucks", stat: 30.4 },
  { ime: "LeBron James", tim: "LA Lakers", stat: 28.9 },
  { ime: "Jayson Tatum", tim: "Boston Celtics", stat: 27.5 },
  { ime: "Luka Dončić", tim: "Dallas Mavericks", stat: 27.1 },
  { ime: "Kevin Durant", tim: "Phoenix Suns", stat: 26.8 },
  { ime: "Donovan Mitchell", tim: "Cleveland Cavaliers", stat: 26.2 },
  { ime: "Stephen Curry", tim: "Golden State Warriors", stat: 25.9 },
  { ime: "Anthony Davis", tim: "LA Lakers", stat: 25.3 },
  { ime: "Jalen Brunson", tim: "New York Knicks", stat: 24.8 },
];

const asistencije = [
  { ime: "Tyrese Haliburton", tim: "Indiana Pacers", stat: 11.2 },
  { ime: "Luka Dončić", tim: "Dallas Mavericks", stat: 10.5 },
  { ime: "Trae Young", tim: "Atlanta Hawks", stat: 10.1 },
  { ime: "LeBron James", tim: "LA Lakers", stat: 9.8 },
  { ime: "Jalen Brunson", tim: "New York Knicks", stat: 8.9 },
  { ime: "Shai Gilgeous-Alexander", tim: "OKC Thunder", stat: 8.4 },
  { ime: "James Harden", tim: "LA Clippers", stat: 8.1 },
  { ime: "Chris Paul", tim: "Golden State Warriors", stat: 7.8 },
  { ime: "Darius Garland", tim: "Cleveland Cavaliers", stat: 7.5 },
  { ime: "Fred VanVleet", tim: "Houston Rockets", stat: 7.2 },
];

const skokovi = [
  { ime: "Victor Wembanyama", tim: "San Antonio Spurs", stat: 13.1 },
  { ime: "Anthony Davis", tim: "LA Lakers", stat: 12.8 },
  { ime: "Giannis Antetokounmpo", tim: "Milwaukee Bucks", stat: 12.3 },
  { ime: "Nikola Jokić", tim: "Denver Nuggets", stat: 11.9 },
  { ime: "Bam Adebayo", tim: "Miami Heat", stat: 11.2 },
  { ime: "Domantas Sabonis", tim: "Sacramento Kings", stat: 10.9 },
  { ime: "Karl-Anthony Towns", tim: "New York Knicks", stat: 10.5 },
  { ime: "Evan Mobley", tim: "Cleveland Cavaliers", stat: 10.1 },
  { ime: "Walker Kessler", tim: "Utah Jazz", stat: 9.8 },
  { ime: "Jaren Jackson Jr.", tim: "Memphis Grizzlies", stat: 9.4 },
];

function popuniIgraceTabelu(podaci, jedinica) {
  const tbody = document.getElementById("igracBody");
  const header = document.getElementById("statHeader");
  if (!tbody || !header) return;

  header.textContent = jedinica;
  tbody.innerHTML = "";

  podaci.forEach((igrac, index) => {
    const red = document.createElement("tr");

    let medalja = "";
    if (index === 0) medalja = "🥇";
    else if (index === 1) medalja = "🥈";
    else if (index === 2) medalja = "🥉";
    else medalja = index + 1;

    red.innerHTML = `
      <td style="text-align:center; font-weight:bold;">${medalja}</td>
      <td style="font-weight:bold;">${igrac.ime}</td>
      <td style="color:#666;">${igrac.tim}</td>
      <td style="text-align:center; font-weight:bold; color:var(--plava);">${igrac.stat}</td>
    `;

    if (index === 0) red.style.backgroundColor = "#fff8e1";
    else if (index === 1) red.style.backgroundColor = "#f5f5f5";
    else if (index === 2) red.style.backgroundColor = "#fbe9e7";

    tbody.appendChild(red);
  });
}

function prikaziPoene() { popuniIgraceTabelu(poeni, "PPG"); }
function prikaziAsistencije() { popuniIgraceTabelu(asistencije, "APG"); }
function prikaziSkokove() { popuniIgraceTabelu(skokovi, "RPG"); }

// === GALERIJA GOAT VOTE ===
const igraci = [
  "LeBron James",
  "Michael Jordan",
  "Stephen Curry",
  "Kobe Bryant",
  "Wilt Chamberlain",
  "Shaquille O'Neal"
];

let trenutniIndex = 0;

function ucitajGlasove() {
  igraci.forEach(igrac => {
    const glasovi = localStorage.getItem("vote_" + igrac) || 0;
    const el = document.getElementById("vote-" + igrac);
    if (el) el.textContent = glasovi;
  });
}

function provjeriGlasanje() {
  const glasao = localStorage.getItem("glasao_za");
  if (glasao) {
    document.querySelectorAll(".vote-btn").forEach(btn => {
      btn.classList.add("glasao");
      btn.textContent = "✅ Glasano";
      btn.disabled = true;
    });
  }
}

function glasaj(igrac) {
  if (localStorage.getItem("glasao_za")) {
    document.getElementById("vote-poruka").textContent = "❌ Već si glasao!";
    return;
  }
  const trenutno = parseInt(localStorage.getItem("vote_" + igrac) || 0);
  localStorage.setItem("vote_" + igrac, trenutno + 1);
  localStorage.setItem("glasao_za", igrac);
  ucitajGlasove();
  provjeriGlasanje();
  document.getElementById("vote-poruka").textContent = "✅ Glasao si za " + igrac + " kao GOAT!";
}

function prikaziIgraca(index) {
  const kartice = document.querySelectorAll(".igrac-karta");
  kartice.forEach(k => k.classList.remove("aktivna"));
  kartice[index].classList.add("aktivna");
}

window.addEventListener("load", () => {
  // Tabela konferencija
  if (document.getElementById("tabelaBody")) {
    popuniTabelu(istočna);
  }

  // Statistika igrača
  if (document.getElementById("igracBody")) {
    popuniIgraceTabelu(poeni, "PPG");
  }

  // Galerija
  const btnLijevo = document.getElementById("btnLijevo");
  const btnDesno = document.getElementById("btnDesno");

  if (btnLijevo && btnDesno) {
    prikaziIgraca(0);
    ucitajGlasove();
    provjeriGlasanje();

    btnDesno.addEventListener("click", () => {
      trenutniIndex = (trenutniIndex + 1) % igraci.length;
      prikaziIgraca(trenutniIndex);
    });

    btnLijevo.addEventListener("click", () => {
      trenutniIndex = (trenutniIndex - 1 + igraci.length) % igraci.length;
      prikaziIgraca(trenutniIndex);
    });
  }
});


// VALIDACIJA KONTAKT FORME
// Uz pomoć Claudea sam razumio kako regex za email radi: ^ označava početak stringa,
// [\w.-]+ znači jedno ili više alfanumeričkih znakova/tačke/crtice, @ je literal,
// [a-z]{2,} je ekstenzija min 2 slova, /i = case-insensitive. Za telefon: \+? opcionalni
// +, [\d\s\-]{6,15} su cifre/razmaci/crtice.


var emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
var telefonRegex = /^\+?[\d\s\-]{6,15}$/;

function prikaziGresku(id, poruka) {
  var el = document.getElementById(id);
  var inputId = id.replace('-greska', '');
  var input = document.getElementById(inputId);
  if (el) el.textContent = poruka;
  if (input) input.classList.add('greska');
}

function ukloniGresku(id) {
  var el = document.getElementById(id);
  var inputId = id.replace('-greska', '');
  var input = document.getElementById(inputId);
  if (el) el.textContent = '';
  if (input) input.classList.remove('greska');
}

function validirajIme() {
  var v = document.getElementById('ime');
  if (!v) return true;
  if (!v.value.trim() || v.value.trim().length < 2) {
    prikaziGresku('ime-greska', 'Unesite ime (min. 2 znaka).');
    return false;
  }
  ukloniGresku('ime-greska');
  return true;
}

function validirajPrezime() {
  var v = document.getElementById('prezime');
  if (!v) return true;
  if (!v.value.trim() || v.value.trim().length < 2) {
    prikaziGresku('prezime-greska', 'Unesite prezime (min. 2 znaka).');
    return false;
  }
  ukloniGresku('prezime-greska');
  return true;
}

function validirajEmail() {
  var v = document.getElementById('email');
  if (!v) return true;
  if (!v.value.trim()) {
    prikaziGresku('email-greska', 'Unesite e-mail adresu.');
    return false;
  }
  if (!emailRegex.test(v.value.trim())) {
    prikaziGresku('email-greska', 'Unesite ispravnu e-mail adresu (npr. ime@mail.com).');
    return false;
  }
  ukloniGresku('email-greska');
  return true;
}

function validirajTelefon() {
  var v = document.getElementById('telefon');
  if (!v) return true;
  if (!v.value.trim()) {
    prikaziGresku('telefon-greska', 'Unesite broj telefona.');
    return false;
  }
  if (!telefonRegex.test(v.value.trim())) {
    prikaziGresku('telefon-greska', 'Dozvoljene su cifre, razmaci i crtice (6–15 znakova).');
    return false;
  }
  ukloniGresku('telefon-greska');
  return true;
}

function validirajTemu() {
  var v = document.getElementById('tema');
  if (!v) return true;
  if (!v.value) {
    prikaziGresku('tema-greska', 'Odaberite temu upita.');
    return false;
  }
  ukloniGresku('tema-greska');
  return true;
}

function validirajPoruku() {
  var v = document.getElementById('poruka');
  if (!v) return true;
  if (!v.value.trim() || v.value.trim().length < 20) {
    prikaziGresku('poruka-greska', 'Poruka mora imati najmanje 20 znakova (još ' + Math.max(0, 20 - v.value.trim().length) + ').');
    return false;
  }
  ukloniGresku('poruka-greska');
  return true;
}

// Live validacija na blur
var imeEl     = document.getElementById('ime');
var prezimeEl = document.getElementById('prezime');
var emailEl   = document.getElementById('email');
var telefonEl = document.getElementById('telefon');
var temaEl    = document.getElementById('tema');
var porukaEl  = document.getElementById('poruka');
var brojanikEl = document.getElementById('poruka-brojac');

if (imeEl)     imeEl.addEventListener('blur', validirajIme);
if (prezimeEl) prezimeEl.addEventListener('blur', validirajPrezime);
if (emailEl)   emailEl.addEventListener('blur', validirajEmail);
if (telefonEl) telefonEl.addEventListener('blur', validirajTelefon);
if (temaEl)    temaEl.addEventListener('change', validirajTemu);
if (porukaEl) {
  porukaEl.addEventListener('blur', validirajPoruku);
  porukaEl.addEventListener('input', function () {
    var d = porukaEl.value.trim().length;
    if (brojanikEl) {
      brojanikEl.textContent = d + ' / 20 znakova minimalno';
      brojanikEl.style.color = d >= 20 ? '#2e7d32' : '#999';
    }
  });
}

