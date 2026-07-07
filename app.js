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
  { floor: "3층 센터", department: "영상의학과·갑상선&유방", code: "RD_3", name: "신민지", slots: ["진료","진료","진료","","진료","","진료","진료","진료","","진료"] },
  { floor: "3층 센터", department: "영상의학과·갑상선&유방", code: "RD_5", name: "김현수", slots: ["진료","시술","진료","진료","","","진료","진료","진료","진료","진료"] },
  { floor: "3층 센터", department: "영상의학과·갑상선&유방", code: "RD_10", name: "서영화", slots: ["진료","진료","진료","진료","진료","진료","진료","","진료","진료","진료"] },
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
  { category: "내시경", name: "위 수면비", price: 60000 },
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
  { name: "한약 15일분", standard: 200000, staff: 140000, acquaintance: 180000 },
  { name: "한약 30일분", standard: 380000, staff: 266000, acquaintance: 342000 },
  { name: "한약 녹용추가", standard: 400000, staff: 280000, acquaintance: 360000 },
  { name: "공진단 10개", standard: 150000, staff: 105000, acquaintance: 135000 },
  { name: "정골추나", standard: 40000, staff: 28000, acquaintance: 36000 },
  { name: "경골추나", standard: 30000, staff: 21000, acquaintance: 27000 },
  { name: "신선불취단", standard: 2000, staff: 1400, acquaintance: 1800 },
  { name: "한방파스", standard: 5000, staff: 3500, acquaintance: 4500 }
];

const contacts = [
  { title: "9층 관리사무소", description: "행정·관리 문의", numbers: [{ label: "TEL", value: "051-744-3399" }] },
  { title: "햇님약국", description: "약국 문의", numbers: [{ label: "TEL", value: "051-747-0881" }] },
  { title: "사설앰블 · 중앙911", description: "이상민", numbers: [
    { label: "TEL", value: "010-2606-0423" },
    { label: "TEL", value: "010-2777-6216" }
  ] },
  { title: "엠시스텍", description: "고객지원 연락처", numbers: [
    { label: "TEL", value: "02-2002-8736" },
    { label: "TEL", value: "02-2002-8733" },
    { label: "TEL", value: "02-2002-8729" },
    { label: "TEL", value: "032-899-4370" }
  ] },
  { title: "해운대지사 산정특례담당자", description: "산정특례 관련 문의", numbers: [
    { label: "TEL", value: "051-749-8183" },
    { label: "TEL", value: "051-749-8185" },
    { label: "FAX", value: "051-801-4473", fax: true }
  ] }
];

const organizationInfo = [
  { type: "개인", category: "사업자등록번호", number: "671-92-08917" },
  { type: "법인", category: "사업자등록번호", number: "580-82-00671", note: "2026.04.30 시작" },
  { type: "개인", category: "요양기관번호", number: "21203202" },
  { type: "법인", category: "요양기관번호", number: "21204977", note: "2026.04.30 시작" }
];

const extensions = [
  { section: "진료부", team: "영상의학과", contact: "백선미 병원장", number: "0511" },
  { section: "진료부", team: "영상의학과", contact: "김현수 진료", number: "0512" },
  { section: "진료부", team: "영상의학과", contact: "신민지 진료", number: "0513" },
  { section: "진료부", team: "영상의학과", contact: "신수영 진료", number: "0514" },
  { section: "진료부", team: "영상의학과", contact: "서영화 진료", number: "0807" },
  { section: "진료부", team: "재활의학과", contact: "김인혜 진료", number: "7501" },
  { section: "진료부", team: "재활의학과", contact: "차은겸 진료", number: "7502" },
  { section: "진료부", team: "재활의학과", contact: "박여진 진료", number: "7503" },
  { section: "진료부", team: "재활의학과", contact: "김완호 진료", number: "7504" },
  { section: "진료부", team: "재활의학과", contact: "서휘 진료", number: "7505" },
  { section: "진료부", team: "내과", contact: "박민아 진료", number: "0540" },
  { section: "진료부", team: "내과", contact: "남지현 진료", number: "0541" },
  { section: "진료부", team: "내과", contact: "김상우 진료", number: "0542" },
  { section: "진료부", team: "내과", contact: "고인영 진료", number: "0543" },
  { section: "진료부", team: "내과", contact: "정민정 진료", number: "0545" },
  { section: "진료부", team: "내과", contact: "박미경 진료", number: "0802" },
  { section: "진료부", team: "가정의학과", contact: "황은교 진료", number: "0520" },
  { section: "진료부", team: "한방과", contact: "김종삼 진료", number: "0540" },
  { section: "진료부", team: "당직의", contact: "당직의", number: "0589" },
  { section: "전담부서", team: "QPS팀", contact: "QPS팀", number: "0599" },
  { section: "전담부서", team: "감염관리팀", contact: "감염관리팀", number: "0533" },
  { section: "전담부서", team: "안전관리", contact: "안전관리자", number: "0800" },
  { section: "전담부서", team: "보건관리", contact: "보건관리자", number: "0801" },
  { section: "통합지원", team: "갑상선유방센터", contact: "갑상선유방팀", number: "0523" },
  { section: "통합지원", team: "갑상선유방센터", contact: "갑상선유방팀", number: "0524" },
  { section: "통합지원", team: "갑상선유방센터", contact: "갑상선유방팀", number: "0525" },
  { section: "통합지원", team: "갑상선유방센터", contact: "갑상선유방팀", number: "0526" },
  { section: "통합지원", team: "갑상선유방센터", contact: "갑상선유방팀", number: "0806" },
  { section: "통합지원", team: "내과내시경센터", contact: "주사실", number: "0528" },
  { section: "통합지원", team: "내과내시경센터", contact: "내시경실", number: "0547" },
  { section: "통합지원", team: "내과내시경센터", contact: "내과 외래", number: "0546" },
  { section: "통합지원", team: "내과내시경센터", contact: "내과 외래", number: "0548" },
  { section: "통합지원", team: "내과내시경센터", contact: "순환기 외래", number: "0549" },
  { section: "통합지원", team: "내과내시경센터", contact: "순환기 외래", number: "0519" },
  { section: "통합지원", team: "건강증진센터", contact: "안내데스크", number: "0586" },
  { section: "통합지원", team: "건강증진센터", contact: "안내데스크", number: "0587" },
  { section: "통합지원", team: "건강증진센터", contact: "건강증진센터 팀장", number: "7553" },
  { section: "통합지원", team: "건강증진센터", contact: "건강검진상담실", number: "0534" },
  { section: "통합지원", team: "비타민면역센터", contact: "가정의학 외래", number: "0518" },
  { section: "통합지원", team: "영상의학팀", contact: "영상의학팀", number: "0516" },
  { section: "통합지원", team: "진단검사팀", contact: "진단검사의학팀장", number: "0558" },
  { section: "통합지원", team: "진단검사팀", contact: "진단검사의학팀", number: "0557" },
  { section: "브랜딩실", team: "브랜드실", contact: "사용불가", number: "0804", unavailable: true },
  { section: "브랜딩실", team: "뉴미디어팀", contact: "사용불가", number: "0805", unavailable: true },
  { section: "브랜딩실", team: "홍보팀", contact: "사용불가", number: "0554", unavailable: true },
  { section: "브랜딩실", team: "홍보팀", contact: "사용불가", number: "0553", unavailable: true },
  { section: "조성실", team: "조성실", contact: "박인영(실장)", number: "0811" },
  { section: "조성실", team: "HR팀", contact: "박수진(이사)", number: "0813" },
  { section: "조성실", team: "HR팀", contact: "김성희(인사)", number: "0814" },
  { section: "조성실", team: "HR팀", contact: "한성자(급여)", number: "0823" },
  { section: "재활지원", team: "재활간호팀", contact: "간호팀장", number: "7500" },
  { section: "재활지원", team: "재활간호팀", contact: "진료협력(입원상담)", number: "0573, 0808" },
  { section: "재활지원", team: "재활간호팀", contact: "5층 생활재활센터", number: "0550~1" },
  { section: "재활지원", team: "재활간호팀", contact: "6층 생활재활센터", number: "0560~1" },
  { section: "재활지원", team: "재활간호팀", contact: "7층 생활재활센터", number: "0570~1" },
  { section: "재활지원", team: "재활간호팀", contact: "8층 생활재활센터", number: "0580~1" },
  { section: "재활지원", team: "재활간호팀", contact: "9층 일상재활센터", number: "0562" },
  { section: "재활지원", team: "재활간호팀", contact: "간호행정사무실", number: "0552" },
  { section: "재활지원", team: "재활간호팀", contact: "재활외래", number: "7575" },
  { section: "재활지원", team: "재활간호팀", contact: "한방외래", number: "0549" },
  { section: "재활지원", team: "재활치료", contact: "치료1팀 팀장(4F)", number: "0530" },
  { section: "재활지원", team: "재활치료", contact: "치료2팀 팀장(7F)", number: "0820" },
  { section: "재활지원", team: "재활치료", contact: "입원통증치료실(4F)", number: "7510" },
  { section: "재활지원", team: "재활치료", contact: "물리치료실(4F)", number: "7512" },
  { section: "재활지원", team: "재활치료", contact: "작업치료실(4F)", number: "7513" },
  { section: "재활지원", team: "재활치료", contact: "연하치료실(4F)", number: "7514" },
  { section: "재활지원", team: "재활치료", contact: "외래치료실(6F)", number: "7516" },
  { section: "재활지원", team: "재활치료", contact: "SCI 센터(5F)", number: "7519" },
  { section: "재활지원", team: "재활치료", contact: "6층 일상작업치료실", number: "0563" },
  { section: "재활지원", team: "재활치료", contact: "생활치료실(7F)", number: "1718" },
  { section: "재활지원", team: "재활치료", contact: "생활치료실(8F)", number: "0538, 0803" },
  { section: "재활지원", team: "재활치료", contact: "치료팀 코디", number: "7533" },
  { section: "재활지원", team: "사회사업팀", contact: "김지헌(팀장)", number: "0536" },
  { section: "재활지원", team: "사회사업팀", contact: "이지혜(부팀장)", number: "0809" },
  { section: "재활지원", team: "사회사업팀", contact: "정주영", number: "0535" },
  { section: "재활지원", team: "사회사업팀", contact: "이하늘", number: "0584" },
  { section: "재활지원", team: "재활코치", contact: "부서공용", number: "0515" },
  { section: "재활의료전문센터", team: "언어인지재활전문센터", contact: "언어치료실(4F) 1번방", number: "0816" },
  { section: "재활의료전문센터", team: "언어인지재활전문센터", contact: "언어치료실(4F) 2, 3번방", number: "7515" },
  { section: "재활의료전문센터", team: "언어인지재활전문센터", contact: "인지치료실(4F)", number: "0817" },
  { section: "재활의료전문센터", team: "언어인지재활전문센터", contact: "임상심리사(7F)", number: "-" },
  { section: "법인", team: "의료법인 나눔과행복의료재단", contact: "박선미(사무처장)", number: "0537" },
  { section: "법인", team: "의료법인 나눔과행복의료재단", contact: "성유진(팀장)", number: "0824" },
  { section: "법인", team: "사)나눔으로행복한동행", contact: "이재욱(사무처장)", number: "0822" },
  { section: "경영지원실", team: "총무팀", contact: "류미경(팀장)", number: "0595" },
  { section: "경영지원실", team: "총무팀", contact: "박대호(총무)", number: "0598" },
  { section: "경영지원실", team: "총무팀", contact: "김태영(구매)", number: "0812" },
  { section: "경영지원실", team: "총무팀", contact: "공문 FAX", number: "726-0564" },
  { section: "경영지원실", team: "시설팀", contact: "부서공용", number: "0597" },
  { section: "경영지원실", team: "전산팀", contact: "전산팀", number: "0531" },
  { section: "경영지원실", team: "재무팀", contact: "사용불가", number: "0590", unavailable: true },
  { section: "경영지원실", team: "재무팀", contact: "사용불가", number: "0528", unavailable: true },
  { section: "경영지원실", team: "재무팀", contact: "사용불가", number: "0593", unavailable: true },
  { section: "경영지원실", team: "원무팀", contact: "원무팀", number: "0501" },
  { section: "경영지원실", team: "원무팀", contact: "산재보험", number: "0504" },
  { section: "경영지원실", team: "원무팀", contact: "의무기록관리", number: "0508" },
  { section: "경영지원실", team: "원무팀", contact: "접수/수납(3F)", number: "0505~7" },
  { section: "경영지원실", team: "원무팀", contact: "접수/수납(6F)", number: "0503~4" },
  { section: "경영지원실", team: "심사팀", contact: "심사팀장", number: "0510" },
  { section: "경영지원실", team: "심사팀", contact: "심사팀", number: "0567, 0569" },
  { section: "경영지원실", team: "약제팀", contact: "약제팀장", number: "0565" },
  { section: "경영지원실", team: "약제팀", contact: "약제팀", number: "0566" },
  { section: "경영지원실", team: "영양팀", contact: "영양팀", number: "0574" },
  { section: "경영지원실", team: "영양팀", contact: "주방", number: "0577" }
];

const favoriteSites = [
  { name: "통장 입금확인 · 농협 빠른조회(법인)", description: "농협 기업인터넷뱅킹", url: "https://ibz.nonghyup.com/#!" },
  { name: "서울시 학습과정 신청", description: "교육과정 조회·신청", url: "https://sll.seoul.go.kr/lms/requestCourse/doListView.do?main_se=lie&course_category_id=202601165794088&mnid=202412980695" },
  { name: "HIRA 자동차보험심사", description: "건강보험심사평가원", url: "https://aq.hira.or.kr/hira_mc/index.jsp" },
  { name: "해나행", description: "사용자 로그인", url: "https://user.haenahaeng.com/login/" },
  { name: "위탁진료 링크", description: "공유 업무 시트", url: "https://docs.google.com/spreadsheets/d/1i5dR3yAsLSyGH4atEsfrTCFZSajFpc8Dz54Tyyq72Xs/edit?gid=417334077#gid=417334077" },
  { name: "센텀종합병원 홈페이지", description: "병원 공식 홈페이지", url: "https://snh.or.kr/main/main.php" },
  { name: "유스마트", description: "U-SMART", url: "https://u-smart.co.kr/" },
  { name: "중앙응급의료센터 포털", description: "NEMC 회원 로그인", url: "https://portal.nemc.or.kr:444/member/login_page.do" },
  { name: "요양기관정보마당", description: "국민건강보험", url: "https://medicare.nhis.or.kr/portal/index.do" },
  { name: "고용·산재보험 토탈서비스", description: "근로복지공단", url: "https://total.comwel.or.kr/" },
  { name: "질병보건통합관리시스템", description: "질병관리청", url: "https://is.kdca.go.kr/" },
  { name: "메디통", description: "병원 업무 포털", url: "https://www.meditong.com/?return_Url=%2Fbizwiz%2Findex%2Easp" },
  { name: "NEMC AIR", description: "중앙응급의료센터 로그인", url: "https://air.nemc.or.kr/member/login_page.do" },
  { name: "NICE PARK", description: "주차 통합관리", url: "https://npdc-i.nicepark.co.kr/" },
  { name: "엠시스텍 문의", description: "엠시스텍 고객지원 홈페이지", url: "http://www.msystech.co.kr/xe/" },
  { name: "병원서류 인터넷발급 서비스", description: "온라인 제증명 발급", url: "https://clinic.tobecon.io/" },
  { name: "통장 입금확인 · 농협 빠른조회(개인)", description: "농협 개인 빠른조회", url: "https://branch.nonghyup.com/servlet/IPMSP0011I.view" }
];

const VIEW_TITLES = {
  schedule: "진료 시간표",
  services: "검사·시술 비용",
  staff: "직원·지인 금액",
  contact: "연락처",
  extensions: "내선번호(연락처)",
  organization: "사업자등록번호 · 요양기관번호",
  sites: "자주 들어가는 사이트",
  favorites: "★ 즐겨찾기 목록"
};

const state = { view: "schedule", filter: "전체", query: "", extensionQuery: "" };
const els = {
  content: document.querySelector("#content"),
  filterBar: document.querySelector("#filterBar"),
  resultMeta: document.querySelector("#resultMeta"),
  empty: document.querySelector("#emptyState"),
  title: document.querySelector("#viewTitle"),
  search: document.querySelector("#globalSearch"),
  extensionSearchBar: document.querySelector("#extensionSearchBar"),
  extensionSearch: document.querySelector("#extensionSearch")
};

const won = value => `${Number(value).toLocaleString("ko-KR")}원`;
const normalize = value => String(value ?? "").toLowerCase().replace(/\s+/g, "");
const searchable = obj => normalize(JSON.stringify(obj));

const favorites = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem("ahtim_favorites") || "[]");
    } catch {
      return [];
    }
  },
  toggle: (id) => {
    let list = favorites.get();
    if (list.includes(id)) {
      list = list.filter(x => x !== id);
      showToast("★ 즐겨찾기에서 해제되었습니다.");
    } else {
      list.push(id);
      showToast("★ 즐겨찾기에 추가되었습니다.");
    }
    localStorage.setItem("ahtim_favorites", JSON.stringify(list));
    render();
  },
  has: (id) => favorites.get().includes(id)
};
window.toggleStar = (id) => {
  favorites.toggle(id);
};

const starBtn = (id) => {
  const active = favorites.has(id);
  return `<button class="star-btn ${active ? "active" : ""}" onclick="event.stopPropagation(); toggleStar('${id}')" aria-label="즐겨찾기 토글" title="즐겨찾기 등록/해제">★</button>`;
};

function highlight(text) {
  const query = state.query || (state.view === "extensions" ? state.extensionQuery : "");
  if (!query) return String(text ?? "");
  const str = String(text ?? "");
  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  return str.replace(regex, "<mark>$1</mark>");
}

function setView(view) {
  state.view = view;
  state.filter = "전체";
  document.querySelectorAll("[data-view]").forEach(button => {
    if (button.closest(".view-tabs")) button.classList.toggle("active", button.dataset.view === view);
    if (button.closest(".quick-links")) button.classList.toggle("active", button.dataset.view === view);
  });
  els.title.textContent = VIEW_TITLES[view];
  els.extensionSearchBar.hidden = view !== "extensions";
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
  const id = `doc_${doctor.code}`;
  return `<article class="card doctor-card">
    <div class="card-top">
      <span class="dept">${doctor.department}</span>
      <div style="display: flex; gap: 8px; align-items: center;">
        <span class="code">${doctor.code}</span>
        ${starBtn(id)}
      </div>
    </div>
    <h3 class="doctor-name">${highlight(doctor.name)}</h3>
    <p class="doctor-sub">${doctor.floor}</p>
    ${weekMarkup(doctor.slots)}
  </article>`;
}

function serviceCard(item) {
  const id = `srv_${item.name}`;
  return `<article class="card service-card">
    <div class="card-top">
      <span class="category-pill">${item.category}</span>
      ${starBtn(id)}
    </div>
    <h3 class="service-name">${highlight(item.name)}</h3>
    <p class="service-note">${item.note || "별도 비고 없음"}</p>
    ${item.warning ? `<span class="warning">⚠ 원본 확인 권장</span>` : ""}
    <div class="price-row"><span class="price">${item.priceText || won(item.price)}</span></div>
  </article>`;
}

function staffTable(rows) {
  return `
  ${staffCalculator()}
  <div class="card price-table"><table>
    <thead><tr><th>품명</th><th>금액</th><th>직원 30%</th><th>지인 10%</th></tr></thead>
    <tbody>${rows.map(row => `<tr>
      <td><strong>${highlight(row.name)}</strong>${row.warning ? `<br><span class="warning">⚠ ${row.warning}</span>` : ""}</td>
      <td>${won(row.standard)}</td><td>${won(row.staff)}</td><td>${won(row.acquaintance)}</td>
    </tr>`).join("")}</tbody>
  </table></div>`;
}

function contactCard(item) {
  const id = `con_${item.title}`;
  return `<article class="card contact-card">
    <div class="card-top" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
      <span class="contact-icon">☎</span>
      ${starBtn(id)}
    </div>
    <h3 style="margin-top: 15px;">${highlight(item.title)}</h3>
    <p>${item.description}</p>
    <div class="contact-numbers">${item.numbers.map(number => number.fax
      ? `<span class="contact-number fax" onclick="copyText('${number.value}', '${item.title} 팩스번호')"><small>${number.label}</small>${number.value}</span>`
      : `<span class="contact-number copyable-number" onclick="copyText('${number.value}', '${item.title} 전화번호')"><small>${number.label}</small>${number.value}</span>`
    ).join("")}</div>
    <p class="copy-tip">번호 클릭 시 복사</p>
  </article>`;
}

function extensionResultCard(item) {
  const id = `ext_${item.team}_${item.contact}_${item.number}`;
  return `<article class="card compact-result-card" onclick="copyText('${item.number}', '${item.contact} 내선번호')">
    <div class="card-top">
      <span class="dept">${item.section}</span>
      <div style="display: flex; gap: 8px; align-items: center;">
        <span class="code">내선번호</span>
        ${starBtn(id)}
      </div>
    </div>
    <h3>${highlight(item.contact)}</h3>
    <p>${highlight(item.team)}</p>
    <strong class="copyable-number">${highlight(item.number)}</strong>
  </article>`;
}

function staffResultCard(item) {
  return `<article class="card compact-result-card">
    <div class="card-top"><span class="category-pill">직원·지인 금액</span></div>
    <h3>${highlight(item.name)}</h3>
    <p>기본 ${won(item.standard)} · 직원 ${won(item.staff)} · 지인 ${won(item.acquaintance)}</p>
  </article>`;
}

function organizationCard(item) {
  return `<article class="card organization-card" onclick="copyText('${item.number}', '${item.category}')">
    <div class="card-top">
      <span class="organization-type">${item.type}</span>
      <span class="code">기관정보</span>
    </div>
    <p>${item.category}</p>
    <strong class="copyable-number">${highlight(item.number)}</strong>
    ${item.note ? `<span class="organization-note">${item.note}</span>` : ""}
    <p class="copy-tip">번호 클릭 시 복사</p>
  </article>`;
}

function extensionTable(rows) {
  return `<div class="extension-emergency">
    <div><span>응급</span><strong class="copyable-number" onclick="copyText('0888', '응급 번호')">0888</strong></div>
    <p>외부에서 직접 통화 시 <b>726 + 내선번호</b> (번호 클릭 시 복사)</p>
  </div>
  <div class="card extension-table">
    <div class="extension-revision">최종수정 2025.12.31</div>
    <table>
      <thead><tr><th>★</th><th>구분</th><th>부서</th><th>담당</th><th>내선번호</th></tr></thead>
      <tbody>${rows.map(row => {
        const id = `ext_${row.team}_${row.contact}_${row.number}`;
        const isStarred = favorites.has(id);
        return `<tr class="${row.unavailable ? "unavailable" : ""}" onclick="copyText('${row.number}', '${row.contact} 내선번호')">
          <td onclick="event.stopPropagation();"><button class="star-btn ${isStarred ? "active" : ""}" onclick="toggleStar('${id}')">★</button></td>
          <td><span class="section-tag">${row.section}</span></td>
          <td>${highlight(row.team)}</td>
          <td>${highlight(row.contact)}</td>
          <td><strong class="copyable-number">${highlight(row.number)}</strong></td>
        </tr>`;
      }).join("")}</tbody>
    </table>
  </div>`;
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

function staffCalculator() {
  return `<div class="card calculator-card">
    <div class="calculator-header">
      <span class="calculator-badge">계산기</span>
      <h3>원무 할인율 계산기</h3>
      <p>비급여 수가나 맞춤 금액을 입력하면 직원가(30%) 및 지인가(10%)를 실시간 계산합니다.</p>
    </div>
    <div class="calculator-body">
      <div class="input-group">
        <label for="calcInput">금액 입력 (원)</label>
        <div class="input-shell">
          <input id="calcInput" type="number" placeholder="예: 500000" min="0" oninput="updateCalculator(this.value)">
          <span class="currency">원</span>
        </div>
      </div>
      <div class="calc-results">
        <div class="calc-res-item staff">
          <span class="res-label">직원 (30% 할인)</span>
          <strong id="calcStaffResult">0원</strong>
          <small id="calcStaffDiscount">(할인액: 0원)</small>
        </div>
        <div class="calc-res-item acquaintance">
          <span class="res-label">지인 (10% 할인)</span>
          <strong id="calcAcquaintanceResult">0원</strong>
          <small id="calcAcquaintanceDiscount">(할인액: 0원)</small>
        </div>
      </div>
    </div>
  </div>`;
}

function updateCalculator(val) {
  const amount = Number(val) || 0;
  const staffDiscount = Math.round(amount * 0.3);
  const staffPrice = amount - staffDiscount;
  
  const acqDiscount = Math.round(amount * 0.1);
  const acqPrice = amount - acqDiscount;
  
  document.querySelector("#calcStaffResult").textContent = won(staffPrice);
  document.querySelector("#calcStaffDiscount").textContent = `(할인액: -${won(staffDiscount)})`;
  
  document.querySelector("#calcAcquaintanceResult").textContent = won(acqPrice);
  document.querySelector("#calcAcquaintanceDiscount").textContent = `(할인액: -${won(acqDiscount)})`;
}
window.updateCalculator = updateCalculator;

function copyText(text, label = "정보") {
  if (!text || text === "-") return;
  const cleanText = text.split(",")[0].split("~")[0].replace(/\(.*?\)/g, "").trim();
  navigator.clipboard.writeText(cleanText).then(() => {
    showToast(`📋 ${label} [${cleanText}] 복사 완료!`);
  }).catch(err => {
    console.error("복사 실패:", err);
  });
}
window.copyText = copyText;

function showToast(message) {
  let container = document.querySelector("#toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => toast.classList.add("show"), 10);
  
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function renderFavorites() {
  const starredIds = favorites.get();
  if (starredIds.length === 0) {
    return `<div class="empty-state">
      <span style="font-size: 45px; color: #cbd5e1;">★</span>
      <h3>즐겨찾기된 항목이 없습니다</h3>
      <p>시간표, 비용, 연락처, 내선번호의 별(★) 아이콘을 눌러 추가해 보세요.</p>
    </div>`;
  }
  
  let html = "";
  const starredDocs = doctors.filter(doc => starredIds.includes(`doc_${doc.code}`));
  if (starredDocs.length > 0) {
    html += `<div class="fav-section"><h2>진료 일정 (시간표)</h2><div class="content-grid">${starredDocs.map(doctorCard).join("")}</div></div>`;
  }
  
  const starredSrvs = services.filter(srv => starredIds.includes(`srv_${srv.name}`));
  if (starredSrvs.length > 0) {
    html += `<div class="fav-section"><h2>검사·시술 비용</h2><div class="content-grid">${starredSrvs.map(serviceCard).join("")}</div></div>`;
  }
  
  const starredCons = contacts.filter(con => starredIds.includes(`con_${con.title}`));
  if (starredCons.length > 0) {
    html += `<div class="fav-section"><h2>중요 연락처</h2><div class="content-grid">${starredCons.map(contactCard).join("")}</div></div>`;
  }
  
  const starredExts = extensions.filter(ext => starredIds.includes(`ext_${ext.team}_${ext.contact}_${ext.number}`));
  if (starredExts.length > 0) {
    html += `<div class="fav-section"><h2>내선번호</h2><div class="content-grid">${starredExts.map(extensionResultCard).join("")}</div></div>`;
  }
  
  return html;
}

function render() {
  const query = normalize(state.query);
  let list = [];
  let html = "";

  if (query) {
    els.title.textContent = "통합 검색 결과";
    els.extensionSearchBar.hidden = true;
    renderFilters([]);
    const matchedDoctors = doctors.filter(item => searchable(item).includes(query));
    const matchedServices = services.filter(item => searchable(item).includes(query));
    const matchedStaff = staffPrices.filter(item => searchable(item).includes(query));
    const matchedContacts = contacts.filter(item => searchable(item).includes(query));
    const matchedExtensions = extensions.filter(item => searchable(item).includes(query));
    const matchedOrganization = organizationInfo.filter(item => searchable(item).includes(query));
    const matchedSites = favoriteSites.filter(item => searchable(item).includes(query));
    list = [
      ...matchedDoctors,
      ...matchedServices,
      ...matchedStaff,
      ...matchedContacts,
      ...matchedExtensions,
      ...matchedOrganization,
      ...matchedSites
    ];
    html = [
      ...matchedDoctors.map(doctorCard),
      ...matchedServices.map(serviceCard),
      ...matchedStaff.map(staffResultCard),
      ...matchedContacts.map(contactCard),
      ...matchedExtensions.map(extensionResultCard),
      ...matchedOrganization.map(organizationCard),
      ...matchedSites.map(siteCard)
    ].join("");
  } else if (state.view === "schedule") {
    els.title.textContent = VIEW_TITLES[state.view];
    els.extensionSearchBar.hidden = true;
    const filters = [...new Set(doctors.map(item => item.department))];
    renderFilters(filters);
    list = doctors.filter(item =>
      (state.filter === "전체" || item.department === state.filter) &&
      (!query || searchable(item).includes(query))
    );
    html = list.map(doctorCard).join("");
  } else if (state.view === "services") {
    els.title.textContent = VIEW_TITLES[state.view];
    els.extensionSearchBar.hidden = true;
    const filters = [...new Set(services.map(item => item.category))];
    renderFilters(filters);
    list = services.filter(item =>
      (state.filter === "전체" || item.category === state.filter) &&
      (!query || searchable(item).includes(query))
    );
    html = list.map(serviceCard).join("");
  } else if (state.view === "staff") {
    els.title.textContent = VIEW_TITLES[state.view];
    els.extensionSearchBar.hidden = true;
    renderFilters([]);
    list = staffPrices.filter(item => !query || searchable(item).includes(query));
    html = list.length ? staffTable(list) : "";
  } else if (state.view === "contact") {
    els.title.textContent = VIEW_TITLES[state.view];
    els.extensionSearchBar.hidden = true;
    renderFilters([]);
    list = contacts.filter(item => !query || searchable(item).includes(query));
    html = list.map(contactCard).join("");
  } else if (state.view === "extensions") {
    els.title.textContent = VIEW_TITLES[state.view];
    els.extensionSearchBar.hidden = false;
    const groups = ["진료부", "통합지원", "재활지원", "경영지원실", "기타"];
    renderFilters(groups);
    const extensionQuery = normalize(state.extensionQuery);
    list = extensions.filter(item => {
      const matchesSearch = !extensionQuery || searchable(item).includes(extensionQuery);
      if (!matchesSearch) return false;
      if (state.filter === "전체") return true;
      if (state.filter === "재활지원") return item.section === "재활지원" || item.section === "재활의료전문센터";
      if (state.filter === "기타") return !["진료부", "통합지원", "재활지원", "재활의료전문센터", "경영지원실"].includes(item.section);
      return item.section === state.filter;
    });
    html = list.length ? extensionTable(list) : "";
  } else if (state.view === "organization") {
    els.title.textContent = VIEW_TITLES[state.view];
    els.extensionSearchBar.hidden = true;
    renderFilters([]);
    list = organizationInfo.filter(item => !query || searchable(item).includes(query));
    html = list.map(organizationCard).join("");
  } else if (state.view === "favorites") {
    els.title.textContent = VIEW_TITLES[state.view];
    els.extensionSearchBar.hidden = true;
    renderFilters([]);
    html = renderFavorites();
    list = favorites.get();
  } else {
    els.title.textContent = VIEW_TITLES[state.view];
    els.extensionSearchBar.hidden = true;
    renderFilters([]);
    list = favoriteSites.filter(item => !query || searchable(item).includes(query));
    html = list.map(siteCard).join("");
  }

  els.content.innerHTML = html;
  els.empty.hidden = list.length > 0 || state.view === "favorites";
  const activeQuery = state.query || (state.view === "extensions" ? state.extensionQuery : "");
  els.resultMeta.innerHTML = activeQuery
    ? `<strong>“${activeQuery}”</strong> 검색 결과 ${list.length}건`
    : `전체 ${list.length}건`;
}

// 테마 토글 처리
const themeToggle = document.querySelector("#themeToggle");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

function initTheme() {
  const isDark = localStorage.getItem("ahtim_dark") === "true";
  document.body.classList.toggle("dark", isDark);
  if (isDark) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  } else {
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  }
}
initTheme();

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("ahtim_dark", isDark);
  if (isDark) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
    showToast("🌙 다크 모드가 활성화되었습니다.");
  } else {
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
    showToast("☀️ 라이트 모드가 활성화되었습니다.");
  }
});

// 맨 위로 이동 버튼 스크롤 이벤트
const scrollTopBtn = document.querySelector("#scrollTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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
  const wasEmpty = !state.query;
  state.query = event.target.value.trim();
  render();
  if (wasEmpty && state.query) document.querySelector("#guide").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#clearSearch").addEventListener("click", () => {
  els.search.value = "";
  state.query = "";
  els.search.focus();
  render();
});
els.extensionSearch.addEventListener("input", event => {
  state.extensionQuery = event.target.value.trim();
  render();
});
document.querySelector("#clearExtensionSearch").addEventListener("click", () => {
  els.extensionSearch.value = "";
  state.extensionQuery = "";
  els.extensionSearch.focus();
  render();
});

document.querySelector("#doctorCount").textContent = doctors.length;
document.querySelector("#serviceCount").textContent = services.length + staffPrices.length;
render();
