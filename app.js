const DAYS = ["월", "화", "수", "목", "금", "토"];
const SLOT_LABELS = ["월 오전", "월 오후", "화 오전", "화 오후", "수 오전", "수 오후", "목 오전", "목 오후", "금 오전", "금 오후", "토 오전"];

const doctors = [
  { floor: "6층 재활", department: "재활의학과", code: "RM_1", name: "서휘", slots: ["진료","","","진료","","진료","","","진료","","진료"] },
  { floor: "6층 재활", department: "재활의학과", code: "RM_2", name: "박여진", slots: ["진료","","","","진료","","","진료","","진료","진료"] },
  { floor: "6층 재활", department: "재활의학과", code: "RM_3", name: "차은겸", slots: ["","진료","","진료","진료","","진료","","","","진료"] },
  { floor: "6층 재활", department: "재활의학과", code: "RM_4", name: "김인혜", slots: ["","","진료","","","진료","진료","","","진료","진료"] },
  { floor: "6층 재활", department: "재활의학과", code: "RM_5", name: "김완호", slots: ["","진료","진료","","","","","진료","진료","","진료"] },
  { floor: "3층 센터", department: "영상의학과·갑상선&유방", code: "RD_1", name: "백선미", slots: ["","","","","진료","진료","시술","","진료","","진료"] },
  { floor: "3층 센터", department: "영상의학과·갑상선&유방", code: "RD_2", name: "신수영", slots: ["진료","진료","진료","진료","진료","진료","진료","","진료","시술","진료"] },
  { floor: "3층 센터", department: "영상의학과·갑상선&유방", code: "RD_3", name: "손정민", slots: ["진료","진료","진료","진료","진료","시술","진료","진료","","","진료"] },
  { floor: "3층 센터", department: "영상의학과·갑상선&유방", code: "RD_5", name: "김현수", slots: ["진료","시술","진료","진료","","","진료","진료","진료","진료","진료"] },
  { floor: "3층 센터", department: "영상의학과·갑상선&유방", code: "RD_10", name: "서영화", slots: ["진료","진료","진료","진료","진료","진료","진료","진료","진료","진료","진료"] },
  { floor: "3층 센터", department: "소화기내과", code: "IM_1", name: "고인영", slots: ["진료","","내시경","회의/내시경","진료","내시경","내시경","진료","진료","내시경","내시경"] },
  { floor: "3층 센터", department: "소화기내과", code: "IM_3", name: "남지현", slots: ["진료","내시경","내시경","","진료","진료","내시경","진료","진료","","내시경"] },
  { floor: "3층 센터", department: "소화기내과", code: "IM_5", name: "정민정", slots: ["내시경","진료","진료","진료","내시경","","진료","","내시경","진료","진료"] },
  { floor: "3층 센터", department: "소화기내과", code: "IM_7", name: "류승훈", slots: ["내시경","진료","진료","진료","내시경","","진료","내시경","내시경","진료","진료"] },
  { floor: "3층 센터", department: "내분비내과", code: "EI", name: "박미경", slots: ["진료","진료","진료","진료","진료","진료","진료","","진료","진료","진료"] },
  { floor: "3층 센터", department: "심장내과", code: "CI", name: "박민아", slots: ["진료","","진료","","진료","","진료","","진료","","진료"] },
  { floor: "3층 센터", department: "가정의학과", code: "FM", name: "황은교", slots: ["진료","진료","진료","진료","진료","","진료","진료","진료","진료","진료"] },
  { floor: "3층 센터", department: "한방과", code: "한방", name: "김종삼", slots: ["","진료","","진료","","진료","","진료","","진료",""] }
];

const services = [
  { category: "내시경", name: "위 수면비", price: 60000, note: "원본 비고란에 'asdasd' 기재", warning: true },
  { category: "내시경", name: "대장 수면비", price: 80000 },
  { category: "내시경", name: "위+대장 수면비", price: 130000, note: "동시 진행 시 대장 수면비 70,000원 적용" },
  { category: "내시경", name: "위 내시경", price: 40000 },
  { category: "내시경", name: "대장 내시경", price: 60000 },
  { category: "내시경", name: "위+대장 내시경", price: 100000 },
  { category: "초음파", name: "경동맥 초음파", price: 70000 },
  { category: "초음파", name: "유방 초음파", price: 160000, note: "유증상 시 본인부담가격(급여) 50,000원 / 90,000원" },
  { category: "초음파", name: "유방 횡파탄성초음파", priceText: "50,000원 / 80,000원", note: "원본 금액칸은 공란, 비고 기재값" },
  { category: "초음파", name: "갑상선 초음파", price: 120000, note: "시술 후 50,000원 / 90,000원" },
  { category: "초음파", name: "심장초음파", price: 200000, note: "유증상 시 본인부담가격(급여) 90,000원 / 170,000원" },
  { category: "초음파", name: "상복부(급여)", price: 60000, note: "연 1회 / 급여 시 본인부담 금액" },
  { category: "초음파", name: "상복부(비급여)", price: 160000 },
  { category: "초음파", name: "하복부(급여)", price: 40000, note: "연 1회 / 급여 시 본인부담 금액" },
  { category: "초음파", name: "하복부(비급여)", price: 80000 },
  { category: "초음파", name: "상·하복부(급여)", price: 60000, note: "연 1회 / 급여 시 본인부담 금액" },
  { category: "초음파", name: "상·하복부(비급여)", price: 170000 },
  { category: "예방접종", name: "폐렴(프리베나)", price: 150000 },
  { category: "예방접종", name: "폐렴(박스뉴반스)", price: 130000 },
  { category: "예방접종", name: "폐렴(프로디악스)", price: 60000 },
  { category: "예방접종", name: "A형간염", price: 80000 },
  { category: "예방접종", name: "B형간염", price: 30000 },
  { category: "예방접종", name: "백일해(부스트릭스)", price: 50000 },
  { category: "예방접종", name: "일본뇌염(이모젭)", price: 70000 },
  { category: "가다실", name: "가다실 1회", price: 230000, note: "할인 제외" },
  { category: "가다실", name: "가다실 3회 일괄", price: 650000 },
  { category: "가다실", name: "가다실 직원·직계·방계 3회", price: 500000, note: "배우자 측 직계·방계 할인 불가" },
  { category: "대상포진", name: "스카이조스터", price: 160000, note: "할인 규정 적용" },
  { category: "대상포진", name: "싱그릭스(2회)", price: 500000, note: "직원·직계·방계 400,000원 / 배우자 측 직계·방계 할인 불가" },
  { category: "호르몬", name: "네비도", price: 270000, note: "최대 30% 할인 / 직원가 별도" },
  { category: "알러지 검사", name: "알러지 검사 220종", price: 350000, note: "최대 30% 할인" },
  { category: "알러지 검사", name: "알러지 검사 90종", price: 200000, note: "최대 30% 할인" },
  { category: "기타", name: "미네랄모발검사", price: 150000, note: "최대 30% 할인" },
  { category: "기타", name: "리브레", price: 110000, note: "할인 제외" },
  { category: "기타", name: "EGF 새살연고", price: 28800, note: "할인 제외" },
  { category: "비만 치료제", name: "위고비 0.25mg", price: 250000 },
  { category: "비만 치료제", name: "위고비 0.5mg", price: 270000 },
  { category: "비만 치료제", name: "위고비 1.0mg", price: 300000 },
  { category: "비만 치료제", name: "위고비 1.7mg", price: 380000 },
  { category: "비만 치료제", name: "위고비 2.4mg", price: 450000 },
  { category: "비만 치료제", name: "마운자로 2.5mg", price: 340000 },
  { category: "비만 치료제", name: "마운자로 5mg", price: 450000 },
  { category: "비만 치료제", name: "마운자로 7.5mg", price: 600000 }
];

const staffPrices = [
  { name: "약침", standard: 10000, staff: 7000, acquaintance: 9000 },
  { name: "한약 15일분", standard: 200000, staff: 14000, acquaintance: 180000, warning: "직원가 14,000원은 원본 표기값입니다. 오기 가능성을 확인하세요." },
  { name: "한약 30일분", standard: 380000, staff: 266000, acquaintance: 342000 },
  { name: "한약 녹용추가", standard: 400000, staff: 280000, acquaintance: 360000 },
  { name: "공진단 10개", standard: 150000, staff: 105000, acquaintance: 135000 },
  { name: "정골추나", standard: 40000, staff: 28000, acquaintance: 36000 },
  { name: "경골추나", standard: 30000, staff: 21000, acquaintance: 27000 },
  { name: "신선불취단", standard: 2000, staff: 1400, acquaintance: 1800 },
  { name: "한방파스", standard: 5000, staff: 3500, acquaintance: 4500 }
];

const contacts = [
  { title: "9층 관리사무소", phone: "051-744-3399", description: "행정·관리 문의" },
  { title: "햇님약국", phone: "051-747-0881", description: "약국 문의" }
];

const favoriteSites = [
  { name: "NH농협 기업인터넷뱅킹", description: "기업 금융 업무", url: "https://ibz.nonghyup.com/#!" },
  { name: "서울시 학습과정 신청", description: "교육과정 조회·신청", url: "https://sll.seoul.go.kr/lms/requestCourse/doListView.do?main_se=lie&course_category_id=202601165794088&mnid=202412980695" },
  { name: "HIRA 자동차보험심사", description: "건강보험심사평가원", url: "https://aq.hira.or.kr/hira_mc/index.jsp" },
  { name: "해나행", description: "사용자 로그인", url: "https://user.haenahaeng.com/login/" },
  { name: "업무용 구글 스프레드시트", description: "공유 업무 시트", url: "https://docs.google.com/spreadsheets/d/1i5dR3yAsLSyGH4atEsfrTCFZSajFpc8Dz54Tyyq72Xs/edit?gid=417334077#gid=417334077" },
  { name: "센텀종합병원 홈페이지", description: "병원 공식 홈페이지", url: "https://snh.or.kr/main/main.php" },
  { name: "유스마트", description: "U-SMART", url: "https://u-smart.co.kr/" },
  { name: "중앙응급의료센터 포털", description: "NEMC 회원 로그인", url: "https://portal.nemc.or.kr:444/member/login_page.do" },
  { name: "요양기관정보마당", description: "국민건강보험", url: "https://medicare.nhis.or.kr/portal/index.do" },
  { name: "고용·산재보험 토탈서비스", description: "근로복지공단", url: "https://total.comwel.or.kr/" },
  { name: "질병보건통합관리시스템", description: "질병관리청", url: "https://is.kdca.go.kr/" },
  { name: "메디통", description: "병원 업무 포털", url: "https://www.meditong.com/?return_Url=%2Fbizwiz%2Findex%2Easp" },
  { name: "NEMC AIR", description: "중앙응급의료센터 로그인", url: "https://air.nemc.or.kr/member/login_page.do" },
  { name: "NICE PARK", description: "주차 통합관리", url: "https://npdc-i.nicepark.co.kr/" }
];

const state = { view: "schedule", filter: "전체", query: "" };
const els = {
  content: document.querySelector("#content"),
  filterBar: document.querySelector("#filterBar"),
  resultMeta: document.querySelector("#resultMeta"),
  empty: document.querySelector("#emptyState"),
  title: document.querySelector("#viewTitle"),
  search: document.querySelector("#globalSearch")
};

const won = value => `${Number(value).toLocaleString("ko-KR")}원`;
const normalize = value => String(value ?? "").toLowerCase().replace(/\s+/g, "");
const searchable = obj => normalize(Object.values(obj).flat().join(" "));

function setView(view) {
  state.view = view;
  state.filter = "전체";
  document.querySelectorAll("[data-view]").forEach(button => {
    if (button.closest(".view-tabs")) button.classList.toggle("active", button.dataset.view === view);
  });
  const titles = { schedule: "진료 시간표", services: "검사·시술 비용", staff: "직원·지인 금액", contact: "연락처", sites: "자주 들어가는 사이트" };
  els.title.textContent = titles[view];
  document.querySelector("#guide").scrollIntoView({ behavior: "smooth", block: "start" });
  render();
}

function renderFilters(items) {
  const labels = ["전체", ...items];
  els.filterBar.innerHTML = labels.map(label =>
    `<button type="button" class="${state.filter === label ? "active" : ""}" data-filter="${label}">${label}</button>`
  ).join("");
  els.filterBar.hidden = labels.length === 1;
}

function weekMarkup(slots) {
  const days = DAYS.map((day, index) => {
    const am = slots[index * 2] || "";
    const pm = index === 5 ? "" : slots[index * 2 + 1] || "";
    const active = am || pm;
    const short = [am, pm].filter(Boolean).map(v => v === "진료" ? "●" : v).join(" · ");
    return `<div class="day ${active ? "" : "off"}"><strong>${day}</strong><span title="${short}">${short || "–"}</span></div>`;
  }).join("");
  const details = slots.map((slot, i) => slot ? `<span>${SLOT_LABELS[i]} · ${slot}</span>` : "").join("");
  return `<div class="week">${days}</div><div class="schedule-detail">${details}</div>`;
}

function doctorCard(doctor) {
  return `<article class="card doctor-card">
    <div class="card-top"><span class="dept">${doctor.department}</span><span class="code">${doctor.code}</span></div>
    <h3 class="doctor-name">${doctor.name}</h3>
    <p class="doctor-sub">${doctor.floor}</p>
    ${weekMarkup(doctor.slots)}
  </article>`;
}

function serviceCard(item) {
  return `<article class="card service-card">
    <div class="card-top"><span class="category-pill">${item.category}</span></div>
    <h3 class="service-name">${item.name}</h3>
    <p class="service-note">${item.note || "별도 비고 없음"}</p>
    ${item.warning ? `<span class="warning">⚠ 원본 확인 권장</span>` : ""}
    <div class="price-row"><span class="price">${item.priceText || won(item.price)}</span></div>
  </article>`;
}

function staffTable(rows) {
  return `<div class="card price-table"><table>
    <thead><tr><th>품명</th><th>금액</th><th>직원 30%</th><th>지인 10%</th></tr></thead>
    <tbody>${rows.map(row => `<tr>
      <td><strong>${row.name}</strong>${row.warning ? `<br><span class="warning">⚠ ${row.warning}</span>` : ""}</td>
      <td>${won(row.standard)}</td><td>${won(row.staff)}</td><td>${won(row.acquaintance)}</td>
    </tr>`).join("")}</tbody>
  </table></div>`;
}

function contactCard(item) {
  return `<article class="card contact-card">
    <span class="contact-icon">☎</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <a href="tel:${item.phone}">${item.phone}</a>
  </article>`;
}

function siteCard(item) {
  const domain = new URL(item.url).hostname.replace(/^www\./, "");
  return `<a class="card site-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
    <div class="site-icon" aria-hidden="true">↗</div>
    <div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span>${domain}</span>
    </div>
  </a>`;
}

function render() {
  const query = normalize(state.query);
  let list = [];
  let html = "";

  if (state.view === "schedule") {
    const filters = [...new Set(doctors.map(item => item.department))];
    renderFilters(filters);
    list = doctors.filter(item =>
      (state.filter === "전체" || item.department === state.filter) &&
      (!query || searchable(item).includes(query))
    );
    html = list.map(doctorCard).join("");
  } else if (state.view === "services") {
    const filters = [...new Set(services.map(item => item.category))];
    renderFilters(filters);
    list = services.filter(item =>
      (state.filter === "전체" || item.category === state.filter) &&
      (!query || searchable(item).includes(query))
    );
    html = list.map(serviceCard).join("");
  } else if (state.view === "staff") {
    renderFilters([]);
    list = staffPrices.filter(item => !query || searchable(item).includes(query));
    html = list.length ? staffTable(list) : "";
  } else if (state.view === "contact") {
    renderFilters([]);
    list = contacts.filter(item => !query || searchable(item).includes(query));
    html = list.map(contactCard).join("");
  } else {
    renderFilters([]);
    list = favoriteSites.filter(item => !query || searchable(item).includes(query));
    html = list.map(siteCard).join("");
  }

  els.content.innerHTML = html;
  els.empty.hidden = list.length > 0;
  els.resultMeta.innerHTML = state.query
    ? `<strong>“${state.query}”</strong> 검색 결과 ${list.length}건`
    : `전체 ${list.length}건`;
}

document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => setView(button.dataset.view));
});
els.filterBar.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  render();
});
els.search.addEventListener("input", event => {
  state.query = event.target.value.trim();
  render();
});
document.querySelector("#clearSearch").addEventListener("click", () => {
  els.search.value = "";
  state.query = "";
  els.search.focus();
  render();
});

document.querySelector("#doctorCount").textContent = doctors.length;
document.querySelector("#serviceCount").textContent = services.length + staffPrices.length;
render();
