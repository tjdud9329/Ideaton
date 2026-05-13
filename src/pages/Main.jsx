// 1. 하드코딩 데이터 (DB/API 연동 대신 사용)

const MOCK_DATA = {
  today: {
    name: "해남 봄동",
    tag: "비타민 폭탄",
    desc: "겨울 서리를 맞고 자라 단맛이 절정에 달한 지금이 바로 기회!",
    price: "2,500원 (전주 대비 15% 하락)",
    nutrients: "비타민 C, 아미노산 풍부",
  },
  seasonal_list: [
    {
      id: 1,
      name: "딸기",
      d_day: "마감 3일전",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 2,
      name: "달래",
      d_day: "제철 시작",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      name: "바지락",
      d_day: "알이 꽉 찬",
      color: "bg-blue-100 text-blue-600",
    },
  ],
  ai_recommend: [
    { title: "비 오는 날 추천", content: "부침개에 딱! '청도 미나리'" },
    {
      title: "최근 검색 기반",
      content: "지난번에 보신 '냉이'와 어울리는 '된장'",
    },
  ],
};

const Main = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 p-4 pb-20">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 pt-4">
        <h1 className="text-2xl font-bold text-green-800">제철밥상 🌿</h1>
        <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
          👤
        </div>
      </header>

      {/* 1. 오늘의 식재료 (Main 카드) */}
      <section className="mb-8">
        <h2 className="text-sm font-bold text-stone-400 mb-3 uppercase tracking-widest">
          Today's Pick
        </h2>
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-stone-200 border border-stone-100 relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold mb-2">
              {MOCK_DATA.today.tag}
            </span>
            <h3 className="text-3xl font-black mb-2">{MOCK_DATA.today.name}</h3>
            <p className="text-stone-500 mb-4 leading-relaxed">
              {MOCK_DATA.today.desc}
            </p>
            <div className="flex gap-4 text-sm font-medium">
              <span className="text-green-700">💰 {MOCK_DATA.today.price}</span>
              <span className="text-blue-700">
                💪 {MOCK_DATA.today.nutrients}
              </span>
            </div>
          </div>
          {/* 배경 장식 원 */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-50 rounded-full z-0"></div>
        </div>
      </section>

      {/* 2. 공공데이터 기반 제철 리스트 (가로 스크롤) */}
      <section className="mb-8">
        <h2 className="text-sm font-bold text-stone-400 mb-3 uppercase tracking-widest">
          Seasonal Status
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {MOCK_DATA.seasonal_list.map((item) => (
            <div
              key={item.id}
              className="min-w-[140px] bg-white p-4 rounded-2xl shadow-sm border border-stone-100"
            >
              <div
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block mb-2 ${item.color}`}
              >
                {item.d_day}
              </div>
              <p className="font-bold text-lg">{item.name}</p>
            </div>
          ))}
        </div>
        ㄴ
      </section>

      {/* 3. AI 개인화 피드 */}
      <section>
        <h2 className="text-sm font-bold text-stone-400 mb-3 uppercase tracking-widest">
          AI Custom Feed
        </h2>
        <div className="space-y-3">
          {MOCK_DATA.ai_recommend.map((info, idx) => (
            <div
              key={idx}
              className="bg-green-800 text-white p-5 rounded-2xl flex items-center justify-between"
            >
              <div>
                <p className="text-xs opacity-70 mb-1">{info.title}</p>
                <p className="font-bold">{info.content}</p>
              </div>
              <span className="text-xl">✨</span>
            </div>
          ))}
        </div>
      </section>

      {/* 가짜 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-stone-100 p-4 flex justify-around text-stone-400">
        <span className="text-green-800 font-bold">홈</span>
        <span>탐색</span>
        <span>저장</span>
        <span>마이</span>
      </nav>
    </div>
  );
};

export default Main;
