// 운진사 위치정보 처리방침 및 개인정보 처리방침 페이지
// Woonjinsa Location Information Processing Policy and Privacy Policy Page

document.addEventListener('DOMContentLoaded', function() {
    // 초기 설정 (저장된 언어 적용)
    const savedLang = localStorage.getItem('mocial-lang') || 'ko';
    setLanguage(savedLang);
    setupNavigation();
    setupScrollToTop();
    // 단일 배경 사용으로 테마 설정 제거
    
    // 앱 페이지 차트 애니메이션
    if (document.querySelector('.activity-chart')) {
        animateCharts();
        setupChartHoverEffects();
    }
    
    // 인트로 페이지 애니메이션
    if (document.querySelector('.bg-particles')) {
        createParticles();
        setupMouseTrail();
        setupCounterAnimations();
        // 인트로 페이지에도 차트가 있으면 애니메이션 적용
        if (document.querySelector('.activity-chart')) {
            animateCharts();
            setupChartHoverEffects();
        }
    }
});

// 언어별 콘텐츠 데이터
const content = {
    ko: {
        // 헤더
        title: "위치정보 처리방침 및 개인정보 처리방침",
        effectiveDate: "시행일자: 2025년 1월 1일",
        
        // 페이지 헤더 (termsofservice.html)
        pageTitle: "위치정보 처리방침 및 개인정보 처리방침",
        pageSubtitle: "Mocial 앱의 위치정보 처리방침과 개인정보 처리방침을 확인하세요",
        
        // 네비게이션
        navIntro: "홈",
        navApp: "앱 소개",
        navLocation: "위치정보 처리방침",
        navPrivacy: "개인정보 처리방침",

        // 인트로 페이지
        introTitle: "Mocial",
        introSubtitle: "자전거, 러닝, 등산, 헬스... 열심히 운동하고 친구들과 공유하며 경쟁하세요!",
        ctaAppLink: "앱 소개 보기",
        ctaPolicyLink: "정책 보기",
        heroMainTitle: "운동을 재정의하다",
        heroSubtitle: "혼자서는 불가능했던 목표를\n친구들과 함께 달성하세요",
        ctaStart: "시작하기",
        ctaLearn: "더 알아보기",
        featuresTitle: "왜 Mocial인가?",
        featuresSubtitle: "혁신적인 기능으로 운동을 완전히 새롭게 경험하세요",
        featureSmartGoalsTitle: "스마트 목표 설정",
        featureSmartGoalsDesc: "AI가 분석한 개인 데이터를 바탕으로 최적의 목표를 제안합니다",
        featureSocialExerciseTitle: "소셜 운동",
        featureSocialExerciseDesc: "친구들과 실시간으로 운동을 공유하고 서로 격려하세요",
        featureDetailedAnalysisTitle: "상세 분석",
        featureDetailedAnalysisDesc: "운동 데이터를 깊이 분석하여 개선점을 찾아드립니다",
        finalCtaTitle: "지금 시작하세요",
        finalCtaDesc: "운동의 새로운 경험을 친구들과 함께해보세요",
        ctaDownload: "앱 다운로드",

        // 앱 소개 페이지
        appHeroTitle: "Mocial - 운동을 기록하고, 친구와 연결되는 순간",
        appHeroSub: "스마트디바이스와 핸드폰으로 모든 운동 데이터를 수집하고 분석하여 목표를 달성하고 친구들과 함께 성장하세요",
        coreFeaturesTitle: "스마트한 운동 관리",
        coreFeaturesSubtitle: "스마트디바이스와 핸드폰으로 모든 운동 데이터를 수집하고 분석하세요",
        featureGoalsTitle: "목표 설정 & 달성",
        featureGoalsDesc: "개인별 맞춤 운동 목표를 설정하고 체계적으로 관리하여 꾸준한 성장을 이끌어내세요",
        featureStatsTitle: "기량 향상 통계",
        featureStatsDesc: "수집된 운동 데이터를 심층 분석하여 개선점을 찾고 실력 향상을 확인하세요",
        featureSocialTitle: "친구와 공유 & 경쟁",
        featureSocialDesc: "운동 기록을 친구들과 공유하고 서로 격려하며 건강한 경쟁을 통해 동기부여를 받으세요",
        featureDeviceTitle: "다양한 스마트 디바이스 연동",
        featureDeviceDesc: "Apple Watch, Garmin, Samsung Health 등 다양한 스마트 디바이스와 연동하여 모든 운동 데이터를 통합 관리하세요",
        deviceTitle: "다양한 기기와 완벽 연동",
        deviceSubtitle: "스마트워치, 피트니스 트래커, 스마트폰의 모든 운동 데이터를 하나로 통합",
        deviceAppleDesc: "HealthKit 연동",
        deviceGarminDesc: "Garmin Connect 연동",
        deviceSamsungDesc: "Samsung Health 연동",
        deviceZwiftDesc: "Zwift 연동",
        deviceWahooDesc: "Wahoo 연동",
        deviceIgsDesc: "IGS Sport 연동",
        deviceBrytonDesc: "Bryton Active 연동",
        deviceSuuntoDesc: "Suunto 연동",
        statsTitle: "실시간 운동 분석",
        statsSubtitle: "수집된 데이터를 바탕으로 상세한 통계와 인사이트를 제공합니다",
        chartWeeklyTitle: "주간 운동 활동",
        chartDistributionTitle: "운동 종목별 분포",
        pieCenterText: "운동",
        pieCenterSubtext: "분석",
        legendRunning: "러닝 40%",
        legendCycling: "사이클 20%",
        legendFitness: "헬스 20%",
        legendOthers: "기타 20%",
        statActiveUsers: "활성 사용자",
        statMonthlyRecords: "월간 기록",
        statAchievementRate: "달성률",
        cardCyclingTitle: "자전거",
        cardCyclingProgress: "85% 완료",
        cardRunningTitle: "러닝",
        cardRunningDistance: "5.2km",
        cardRunningTime: "32분",
        cardHikingTitle: "등산",
        cardHikingAchievement: "목표 달성!",
        cardFitnessTitle: "헬스",
        ctaTitle: "지금 시작하세요",
        ctaSubtitle: "스마트한 운동 관리로 목표를 달성하고 친구들과 함께 성장하세요",
        storeTitle: "앱 스토어",
        storeDesc: "출시와 함께 아래 링크가 활성화됩니다.",
        storeNote: "스토어 링크는 준비 중입니다. 출시 시 실제 링크로 업데이트됩니다.",
        appStore: "App Store",
        playStore: "Google Play",
        
        // 위치정보 처리방침
        locationTitle: "위치정보 처리방침",
        locationArticle1Title: "제1조 (목적)",
        locationArticle1Content: "Mocial(이하 \"회사\"라 합니다)는 위치정보의 보호 및 이용 등에 관한 법률 제16조의 규정에 따라 개인위치정보를 안전하게 처리하고 있음을 알려드리며, 본 처리방침을 제정하여 공개합니다.",
        
        locationArticle2Title: "제2조 (위치정보의 수집·이용·제공)",
        locationArticle2Content: "회사는 개인위치정보를 수집하기 위하여 개인위치정보주체의 동의를 받을 때에는 다음 각 호의 사항을 고지하고 동의를 받습니다.",
        locationConsentItems: [
            "개인위치정보의 수집·이용·제공 목적",
            "개인위치정보의 수집방법 및 수집항목",
            "개인위치정보의 보유·이용기간",
            "개인위치정보의 제3자 제공에 관한 사항"
        ],
        locationPurposeItems: [
            "운동 경로 기록 및 분석: 사용자의 운동 경로를 정확하게 기록하고 분석하여 운동 성과를 측정합니다.",
            "거리 및 속도 측정: GPS 데이터를 활용하여 정확한 거리와 속도를 측정합니다.",
            "친구들과의 경로 공유: 동의한 친구들과 운동 경로를 공유할 수 있도록 합니다.",
            "운동 통계 제공: 수집된 위치정보를 바탕으로 개인화된 운동 통계를 제공합니다.",
            "안전 기능: 비정상적인 위치 변화 감지 시 안전 알림을 제공합니다."
        ],
        locationCollectionItems: [
            "수집방법: GPS, 네트워크 기반 위치정보, 사용자 직접 입력",
            "수집항목: 위도, 경도, 고도, 이동속도, 이동방향, 수집시각",
            "수집주기: 운동 시작 시부터 종료 시까지 실시간 수집"
        ],
        locationRetentionItems: [
            "운동 기록: 운동 종료 후 3년간 보관",
            "통계 데이터: 개인식별정보 제거 후 5년간 보관",
            "공유 데이터: 공유 동의 철회 시 즉시 삭제"
        ],
        
        locationArticle3Title: "제3조 (개인위치정보주체의 권리)",
        locationArticle3Content: "개인위치정보주체는 언제든지 개인위치정보의 수집·이용·제공에 대한 동의를 철회할 수 있습니다.",
        locationRightsItems: [
            "개인위치정보 수집·이용·제공 동의철회권",
            "개인위치정보 및 위치정보 수집·이용·제공사실 확인자료에 대한 열람·고지요구권",
            "개인위치정보의 삭제·정정요구권",
            "손해배상청구권"
        ],
        locationRightsMethod: "권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.",
        
        locationArticle4Title: "제4조 (법정대리인의 권리)",
        locationArticle4Content: "회사는 14세 미만 아동으로부터 개인위치정보를 수집·이용하고자 하는 경우에는 법정대리인의 동의를 받습니다. 법정대리인은 아동의 개인위치정보 수집·이용·제공에 동의하거나 그 동의를 철회할 수 있으며, 아동의 권리를 대리하여 행사할 수 있습니다.",
        
        locationArticle5Title: "제5조 (위치정보의 제3자 제공)",
        locationArticle5Content: "회사는 개인위치정보를 제3자에게 제공하는 경우에는 개인위치정보주체에게 제공받는 자, 제공목적, 제공하는 개인위치정보의 항목, 제공받는 자의 개인위치정보 보유·이용기간을 미리 알리고 동의를 받습니다.",
        locationThirdPartyItems: [
            "제공받는 자: 운동 파트너 및 친구 (사용자 동의 시에만)",
            "제공목적: 운동 경로 공유 및 함께 운동하기 기능",
            "제공하는 개인위치정보: 운동 경로, 운동 시간, 운동 거리",
            "보유·이용기간: 공유 동의 철회 시까지"
        ],
        
        locationArticle6Title: "제6조 (위치정보의 안전성 확보조치)",
        locationArticle6Content: "회사는 개인위치정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.",
        locationSecurityItems: [
            "기술적 조치: 위치정보 암호화 저장, 접근권한 관리, 정기적 보안점검",
            "관리적 조치: 위치정보 처리방침 수립, 직원 교육, 접근기록 관리",
            "물리적 조치: 서버실 접근통제, 화재 및 재해 대비책 마련"
        ],
        
        locationArticle7Title: "제7조 (위치정보관리책임자)",
        locationArticle7Content: "회사는 위치정보를 적절히 관리·보호하고 개인위치정보주체의 불만을 원활히 처리할 수 있도록 다음과 같이 위치정보관리책임자를 지정하여 운영하고 있습니다.",
        locationManagerInfo: "위치정보관리책임자: 개인정보보호팀",
        locationContactInfo: "연락처: privacy@mocial.com",
        locationPhoneInfo: "전화번호: 02-1234-5678",
        
        locationArticle8Title: "제8조 (위치정보 처리방침의 변경)",
        locationArticle8Content: "이 위치정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.",
        locationEffectiveDate: "시행일자: 2025년 1월 1일",
        
        // 개인정보 처리방침
        privacyTitle: "개인정보 처리방침",
        privacyArticle1Title: "제1조 (개인정보의 처리목적)",
        privacyArticle1Content: "Mocial(이하 \"회사\"라 합니다)는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.",
        privacyPurposeItems: [
            "회원가입 및 관리: 회원 식별, 가입의사 확인, 본인확인, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 등을 목적으로 개인정보를 처리합니다.",
            "서비스 제공: 서비스 제공, 맞춤형 서비스 제공, 본인인증, 연령인증, 요금결제·정산, 물품배송 또는 청구서 등 발송, 콘텐츠 제공, 광고 제공, 이벤트 등 광고성 정보 제공, 접속빈도 파악, 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.",
            "민원처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.",
            "마케팅 및 광고 활용: 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 제공, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다."
        ],
        
        privacyArticle2Title: "제2조 (개인정보의 처리 및 보유기간)",
        privacyArticle2Content: "회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.",
        privacyRetentionItems: [
            "회원가입 및 관리: 회원탈퇴 시까지 (단, 관계법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지)",
            "서비스 이용기록: 3년 (통신비밀보호법)",
            "결제기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)",
            "민원처리기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)",
            "마케팅 및 광고 활용: 수집·이용 동의일로부터 2년"
        ],
        
        privacyArticle3Title: "제3조 (개인정보의 제3자 제공)",
        privacyArticle3Content: "회사는 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다. 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.",
        privacyThirdPartyItems: [
            "제공받는 자: Google LLC",
            "제공목적: 서비스 분석, 광고 성과 측정",
            "제공하는 개인정보: 디바이스 정보, 서비스 이용 기록",
            "보유·이용기간: 회원탈퇴 시까지"
        ],
        
        privacyArticle4Title: "제4조 (개인정보 처리의 위탁)",
        privacyArticle4Content: "회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.",
        privacyConsignmentItems: [
            "위탁받는 자: Amazon Web Services Inc.",
            "위탁하는 업무의 내용: 클라우드 서버 운영 및 데이터 저장",
            "위탁받는 자: Google Cloud Platform",
            "위탁하는 업무의 내용: 데이터 분석 및 처리"
        ],
        
        privacyArticle5Title: "제5조 (정보주체의 권리·의무 및 행사방법)",
        privacyArticle5Content: "정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.",
        privacyRightsItems: [
            "개인정보 처리정지 요구권",
            "개인정보 열람요구권",
            "개인정보 정정·삭제 요구권",
            "개인정보 손해배상 청구권"
        ],
        privacyRightsMethod: "권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.",
        
        privacyArticle6Title: "제6조 (처리하는 개인정보 항목)",
        privacyArticle6Content: "회사는 다음의 개인정보 항목을 처리하고 있습니다.",
        privacyDataItems: [
            "필수항목: 이메일, 비밀번호, 이름, 생년월일, 성별, 연락처",
            "선택항목: 프로필 사진, 닉네임, 관심 운동 종목",
            "자동 수집 항목: IP주소, 쿠키, MAC주소, 서비스 이용 기록, 접속 로그, 방문 일시, 불량 이용 기록"
        ],
        
        privacyArticle7Title: "제7조 (개인정보의 안전성 확보조치)",
        privacyArticle7Content: "회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.",
        privacySecurityItems: [
            "관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등",
            "기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화, 보안프로그램 설치",
            "물리적 조치: 전산실, 자료보관실 등의 접근통제"
        ],
        
        privacyArticle8Title: "제8조 (개인정보보호책임자)",
        privacyArticle8Content: "회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.",
        privacyManagerInfo: "개인정보보호책임자: 개인정보보호팀",
        privacyContactInfo: "연락처: privacy@mocial.com",
        privacyPhoneInfo: "전화번호: 02-1234-5678",
        
        privacyArticle9Title: "제9조 (개인정보 처리방침의 변경)",
        privacyArticle9Content: "이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.",
        privacyEffectiveDate: "시행일자: 2025년 1월 1일",
        
        // 푸터
        footerDescription: "외부 운동을 친구들과 공유하고, 통계로 성장하는 SNS 운동앱",
        footerAddress: "주소: 서울특별시 강남구 테헤란로 123길 45, 6층",
        footerDesc: "운동과 소셜의 만남으로 더 건강한 삶을 시작하세요.",
        footerCompany: "회사 정보",
        footerContact: "연락처",
        footerLinks: "바로가기",
        footerApp: "앱 소개",
        footerLocation: "위치정보 처리방침",
        footerPrivacy: "개인정보 처리방침",
        footerRights: "모든 권리 보유."
    },
    
    en: {
        // Header
        title: "Location Information Processing Policy and Privacy Policy",
        effectiveDate: "Effective Date: January 1, 2025",
        
        // Page Header (termsofservice.html)
        pageTitle: "Location Information Processing Policy and Privacy Policy",
        pageSubtitle: "Check Mocial app's location information processing policy and privacy policy",
        
        // Navigation
        navIntro: "Home",
        navApp: "App Introduction",
        navLocation: "Location Information Processing Policy",
        navPrivacy: "Privacy Policy",

        // 인트로 페이지
        introTitle: "Mocial",
        introSubtitle: "Cycling, running, hiking, fitness... Work out hard and share and compete with friends!",
        ctaAppLink: "View App Introduction",
        ctaPolicyLink: "View Policies",
        heroMainTitle: "Redefining Exercise",
        heroSubtitle: "Achieve goals that seemed impossible alone\nby working together with friends",
        ctaStart: "Get Started",
        ctaLearn: "Learn More",
        featuresTitle: "Why Mocial?",
        featuresSubtitle: "Experience fitness in a completely new way with innovative features",
        featureSmartGoalsTitle: "Smart Goal Setting",
        featureSmartGoalsDesc: "AI analyzes your personal data to suggest optimal goals",
        featureSocialExerciseTitle: "Social Exercise",
        featureSocialExerciseDesc: "Share workouts with friends in real-time and encourage each other",
        featureDetailedAnalysisTitle: "Detailed Analysis",
        featureDetailedAnalysisDesc: "Deep analysis of exercise data to find areas for improvement",
        finalCtaTitle: "Start Now",
        finalCtaDesc: "Experience the new way of fitness with your friends",
        ctaDownload: "Download App",
        featuresTitle: "Core Features of Mocial",
        featureSocialTitle: "Social Exercise",
        featureSocialDesc: "Plan workouts with friends, share progress in real-time, and encourage each other.",
        featureGoalsTitle: "Goal Setting",
        featureGoalsDesc: "Set personalized fitness goals and track your progress step by step to feel the sense of achievement.",
        featureStatsTitle: "Detailed Statistics",
        featureStatsDesc: "Analyze your exercise data to find areas for improvement and drive continuous progress.",
        featureChallengeTitle: "Challenges",
        featureChallengeDesc: "Participate in various fitness challenges to take on new goals and stay motivated.",
        statsTitle: "The Power of Exercising Together",
        statMotivation: "Increased Motivation",
        statConsistency: "Improved Consistency",
        statSatisfaction: "Satisfaction Rate",
        statUsers: "Active Users",
        goalTitle: "Achieve Your Fitness Goals",
        goalMainTitle: "From Goal Setting to Achievement",
        goalMainDesc: "Mocial is not just a simple exercise tracking app. It's a true fitness community where you set goals with friends, encourage each other, and grow together. Push beyond your personal limits and gain courage to face new challenges.",
        goalPersonalTitle: "Personal Goals",
        goalPersonalDesc: "Set and track personalized goals like weight loss, strength improvement, and endurance enhancement.",
        goalGroupTitle: "Group Goals",
        goalGroupDesc: "Set team goals with friends and achieve greater results through collaboration.",
        goalAchievementTitle: "Achievement Recognition",
        goalAchievementDesc: "Receive badges and certificates when you achieve goals and share your accomplishments.",

        // App page
        appHeroTitle: "Mocial - Track your workouts, connect with friends",
        appHeroSub: "Collect and analyze all exercise data through smart devices and smartphones to achieve goals and grow together with friends",
        coreFeaturesTitle: "Smart Exercise Management",
        coreFeaturesSubtitle: "Collect and analyze all exercise data through smart devices and smartphones",
        featureGoalsTitle: "Goal Setting & Achievement",
        featureGoalsDesc: "Set personalized exercise goals and manage them systematically to drive consistent growth",
        featureStatsTitle: "Performance Improvement Statistics",
        featureStatsDesc: "Deeply analyze collected exercise data to find areas for improvement and track skill enhancement",
        featureSocialTitle: "Share & Compete with Friends",
        featureSocialDesc: "Share exercise records with friends, encourage each other, and get motivated through healthy competition",
        featureDeviceTitle: "Various Smart Device Integration",
        featureDeviceDesc: "Integrate with various smart devices like Apple Watch, Garmin, Samsung Health to manage all exercise data in one place",
        deviceTitle: "Perfect Integration with Various Devices",
        deviceSubtitle: "Integrate all exercise data from smartwatches, fitness trackers, and smartphones into one platform",
        deviceAppleDesc: "HealthKit Integration",
        deviceGarminDesc: "Garmin Connect Integration",
        deviceSamsungDesc: "Samsung Health Integration",
        deviceZwiftDesc: "Zwift Integration",
        deviceWahooDesc: "Wahoo Integration",
        deviceIgsDesc: "IGS Sport Integration",
        deviceBrytonDesc: "Bryton Active Integration",
        deviceSuuntoDesc: "Suunto Integration",
        statsTitle: "Real-time Exercise Analysis",
        statsSubtitle: "Provide detailed statistics and insights based on collected data",
        chartWeeklyTitle: "Weekly Exercise Activity",
        chartDistributionTitle: "Exercise Type Distribution",
        pieCenterText: "Exercise",
        pieCenterSubtext: "Analysis",
        legendRunning: "Running 40%",
        legendCycling: "Cycling 20%",
        legendFitness: "Fitness 20%",
        legendOthers: "Others 20%",
        statActiveUsers: "Active Users",
        statMonthlyRecords: "Monthly Records",
        statAchievementRate: "Achievement Rate",
        cardCyclingTitle: "Cycling",
        cardCyclingProgress: "85% Complete",
        cardRunningTitle: "Running",
        cardRunningDistance: "5.2km",
        cardRunningTime: "32min",
        cardHikingTitle: "Hiking",
        cardHikingAchievement: "Goal Achieved!",
        cardFitnessTitle: "Fitness",
        ctaTitle: "Get Started Now",
        ctaSubtitle: "Achieve your goals with smart exercise management and grow together with friends",
        storeTitle: "App Stores",
        storeDesc: "Links will be enabled at launch.",
        storeNote: "Store links are being prepared. They will be updated with actual links upon release.",
        appStore: "App Store",
        playStore: "Google Play",
        
        // Location Information Processing Policy
        locationTitle: "Location Information Processing Policy",
        locationArticle1Title: "Article 1 (Purpose)",
        locationArticle1Content: "Mocial (hereinafter referred to as \"Company\") establishes and discloses this processing policy to inform that personal location information is processed safely in accordance with Article 16 of the Act on the Protection and Use of Location Information.",
        
        locationArticle2Title: "Article 2 (Collection, Use, and Provision of Location Information)",
        locationArticle2Content: "When the Company receives consent from personal location information subjects to collect personal location information, it notifies and receives consent for the following matters:",
        locationConsentItems: [
            "Purpose of collection, use, and provision of personal location information",
            "Methods and items for collecting personal location information",
            "Retention and use period of personal location information",
            "Matters concerning the provision of personal location information to third parties"
        ],
        locationPurposeItems: [
            "Exercise route recording and analysis: Accurately record and analyze user exercise routes to measure exercise performance.",
            "Distance and speed measurement: Use GPS data to measure accurate distance and speed.",
            "Route sharing with friends: Allow sharing of exercise routes with consenting friends.",
            "Exercise statistics provision: Provide personalized exercise statistics based on collected location information.",
            "Safety features: Provide safety alerts when abnormal location changes are detected."
        ],
        locationCollectionItems: [
            "Collection methods: GPS, network-based location information, user direct input",
            "Collection items: Latitude, longitude, altitude, movement speed, movement direction, collection time",
            "Collection cycle: Real-time collection from exercise start to end"
        ],
        locationRetentionItems: [
            "Exercise records: Retained for 3 years after exercise completion",
            "Statistical data: Retained for 5 years after removing personal identification information",
            "Shared data: Deleted immediately upon withdrawal of sharing consent"
        ],
        
        locationArticle3Title: "Article 3 (Rights of Personal Location Information Subjects)",
        locationArticle3Content: "Personal location information subjects may withdraw consent for the collection, use, and provision of personal location information at any time.",
        locationRightsItems: [
            "Right to withdraw consent for collection, use, and provision of personal location information",
            "Right to request access and notification of personal location information and confirmation materials of location information collection, use, and provision facts",
            "Right to request deletion and correction of personal location information",
            "Right to claim damages"
        ],
        locationRightsMethod: "Rights may be exercised against the Company in writing, by phone, email, fax, etc., and the Company will take action without delay.",
        
        locationArticle4Title: "Article 4 (Rights of Legal Representatives)",
        locationArticle4Content: "When the Company intends to collect and use personal location information from children under 14 years of age, it receives consent from their legal representatives. Legal representatives may consent to or withdraw consent for the collection, use, and provision of children's personal location information and may exercise children's rights on their behalf.",
        
        locationArticle5Title: "Article 5 (Provision of Location Information to Third Parties)",
        locationArticle5Content: "When the Company provides personal location information to third parties, it notifies the personal location information subject in advance about the recipient, purpose of provision, items of personal location information provided, and the retention and use period of the recipient's personal location information and obtains consent.",
        locationThirdPartyItems: [
            "Recipient: Exercise partners and friends (only with user consent)",
            "Purpose of provision: Exercise route sharing and exercising together features",
            "Personal location information provided: Exercise route, exercise time, exercise distance",
            "Retention and use period: Until withdrawal of sharing consent"
        ],
        
        locationArticle6Title: "Article 6 (Measures to Ensure Safety of Location Information)",
        locationArticle6Content: "The Company takes the following measures to ensure the safety of personal location information.",
        locationSecurityItems: [
            "Technical measures: Encryption of location information storage, access authority management, regular security inspections",
            "Administrative measures: Establishment of location information processing policies, employee training, access record management",
            "Physical measures: Server room access control, fire and disaster preparedness"
        ],
        
        locationArticle7Title: "Article 7 (Location Information Manager)",
        locationArticle7Content: "The Company designates and operates a location information manager as follows to properly manage and protect location information and smoothly handle complaints from personal location information subjects.",
        locationManagerInfo: "Location Information Manager: Privacy Protection Team",
        locationContactInfo: "Contact: privacy@mocial.com",
        locationPhoneInfo: "Phone: 02-1234-5678",
        
        locationArticle8Title: "Article 8 (Changes to Location Information Processing Policy)",
        locationArticle8Content: "This location information processing policy applies from the effective date, and if there are additions, deletions, or corrections to the content due to changes in laws and policies, the changes will be announced through notices 7 days before the implementation of the changes.",
        locationEffectiveDate: "Effective date: January 1, 2025",
        
        // Privacy Policy
        privacyTitle: "Privacy Policy",
        privacyArticle1Title: "Article 1 (Purpose of Personal Information Processing)",
        privacyArticle1Content: "Mocial (hereinafter referred to as \"Company\") processes personal information for the following purposes. The personal information being processed will not be used for purposes other than the following, and if the purpose of use changes, necessary measures such as obtaining separate consent will be implemented in accordance with Article 18 of the Personal Information Protection Act.",
        privacyPurposeItems: [
            "Membership registration and management: Member identification, membership confirmation, identity verification, membership maintenance and management, prevention of unauthorized use of services, various notices and notifications, complaint handling, etc.",
            "Service provision: Service provision, customized service provision, identity verification, age verification, payment and settlement, product delivery or invoice issuance, content provision, advertising, promotional information provision, access frequency analysis, service usage statistics, etc.",
            "Complaint handling: Identity verification of complainants, complaint confirmation, contact and notification for fact-finding, result notification, etc.",
            "Marketing and advertising: Development and specialization of new services (products), provision of promotional information, access frequency analysis, service usage statistics, etc."
        ],
        
        privacyArticle2Title: "Article 2 (Processing and Retention Period of Personal Information)",
        privacyArticle2Content: "The Company processes and retains personal information within the personal information retention and use period according to laws or the personal information retention and use period consented to when collecting personal information from information subjects. The processing and retention periods for each type of personal information are as follows.",
        privacyRetentionItems: [
            "Membership registration and management: Until membership withdrawal (however, until the completion of investigation if investigation is in progress due to violation of related laws)",
            "Service usage records: 3 years (Communications Secrets Protection Act)",
            "Payment records: 5 years (Act on Consumer Protection in Electronic Commerce)",
            "Complaint handling records: 3 years (Act on Consumer Protection in Electronic Commerce)",
            "Marketing and advertising: 2 years from the date of consent for collection and use"
        ],
        
        privacyArticle3Title: "Article 3 (Provision of Personal Information to Third Parties)",
        privacyArticle3Content: "The Company processes personal information only within the scope specified in Article 1 (Purpose of Personal Information Processing) and provides personal information to third parties only when it corresponds to Article 17 of the Personal Information Protection Act, such as consent from information subjects or special provisions of laws. The Company provides personal information to third parties as follows.",
        privacyThirdPartyItems: [
            "Recipient: Google LLC",
            "Purpose of provision: Service analysis, advertising performance measurement",
            "Personal information provided: Device information, service usage records",
            "Retention and use period: Until membership withdrawal"
        ],
        
        privacyArticle4Title: "Article 4 (Consignment of Personal Information Processing)",
        privacyArticle4Content: "The Company consigns personal information processing tasks as follows for smooth personal information processing.",
        privacyConsignmentItems: [
            "Consignee: Amazon Web Services Inc.",
            "Consigned tasks: Cloud server operation and data storage",
            "Consignee: Google Cloud Platform",
            "Consigned tasks: Data analysis and processing"
        ],
        
        privacyArticle5Title: "Article 5 (Rights and Obligations of Information Subjects and Methods of Exercise)",
        privacyArticle5Content: "Information subjects may exercise the following personal information protection-related rights against the Company at any time.",
        privacyRightsItems: [
            "Right to request suspension of personal information processing",
            "Right to request access to personal information",
            "Right to request correction or deletion of personal information",
            "Right to claim damages for personal information"
        ],
        privacyRightsMethod: "Rights may be exercised against the Company in writing, by phone, email, fax, etc., and the Company will take action without delay.",
        
        privacyArticle6Title: "Article 6 (Personal Information Items Processed)",
        privacyArticle6Content: "The Company processes the following personal information items.",
        privacyDataItems: [
            "Required items: Email, password, name, date of birth, gender, contact information",
            "Optional items: Profile photo, nickname, preferred exercise types",
            "Automatically collected items: IP address, cookies, MAC address, service usage records, access logs, visit time, unauthorized use records"
        ],
        
        privacyArticle7Title: "Article 7 (Measures to Ensure Safety of Personal Information)",
        privacyArticle7Content: "The Company takes the following measures to ensure the safety of personal information.",
        privacySecurityItems: [
            "Administrative measures: Establishment and implementation of internal management plans, regular employee training, etc.",
            "Technical measures: Access authority management for personal information processing systems, installation of access control systems, encryption of personal information, installation of security programs",
            "Physical measures: Access control for computer rooms, data storage rooms, etc."
        ],
        
        privacyArticle8Title: "Article 8 (Personal Information Protection Officer)",
        privacyArticle8Content: "The Company designates a personal information protection officer as follows to take overall responsibility for personal information processing and to handle complaints and remedy damages related to personal information processing from information subjects.",
        privacyManagerInfo: "Personal Information Protection Officer: Privacy Protection Team",
        privacyContactInfo: "Contact: privacy@mocial.com",
        privacyPhoneInfo: "Phone: 02-1234-5678",
        
        privacyArticle9Title: "Article 9 (Changes to Privacy Policy)",
        privacyArticle9Content: "This privacy policy applies from the effective date, and if there are additions, deletions, or corrections to the content due to changes in laws and policies, the changes will be announced through notices 7 days before the implementation of the changes.",
        privacyEffectiveDate: "Effective date: January 1, 2025",
        
        // Footer
        footerDesc: "Start a healthier life through the meeting of fitness and social.",
        footerCompany: "Company Information",
        footerContact: "Contact",
        footerLinks: "Quick Links",
        footerApp: "App Introduction",
        footerLocation: "Location Information Processing Policy",
        footerPrivacy: "Privacy Policy",
        footerRights: "All rights reserved."
    }
};

// 언어 설정 함수
function setLanguage(lang) {
    const data = content[lang];
    if (!data) {
        return;
    }
    
    // 헤더
    updateElement('title', data.title);
    updateElement('effective-date', data.effectiveDate);
    
    // 페이지 헤더 (termsofservice.html)
    updateElement('page-title', data.pageTitle);
    updateElement('page-subtitle', data.pageSubtitle);
    
    // 네비게이션
    updateElement('menu-intro', data.navIntro);
    updateElement('menu-app', data.navApp);
    updateElement('menu-location', data.navLocation);
    updateElement('menu-privacy', data.navPrivacy);
    updateElement('nav-location', data.navLocation);
    updateElement('nav-privacy', data.navPrivacy);

    // 인트로 페이지 요소 (있을 때만 업데이트)
    updateElement('intro-title', data.introTitle);
    updateElement('intro-subtitle', data.introSubtitle);
    updateElement('cta-app-link', data.ctaAppLink);
    updateElement('cta-policy-link', data.ctaPolicyLink);
    updateElement('hero-main-title', data.heroMainTitle);
    updateElement('hero-subtitle', data.heroSubtitle);
    updateElement('cta-start', data.ctaStart);
    updateElement('cta-learn', data.ctaLearn);
    updateElement('features-title', data.featuresTitle);
    updateElement('features-subtitle', data.featuresSubtitle);
    updateElement('feature-smart-goals-title', data.featureSmartGoalsTitle);
    updateElement('feature-smart-goals-desc', data.featureSmartGoalsDesc);
    updateElement('feature-social-exercise-title', data.featureSocialExerciseTitle);
    updateElement('feature-social-exercise-desc', data.featureSocialExerciseDesc);
    updateElement('feature-detailed-analysis-title', data.featureDetailedAnalysisTitle);
    updateElement('feature-detailed-analysis-desc', data.featureDetailedAnalysisDesc);
    updateElement('final-cta-title', data.finalCtaTitle);
    updateElement('final-cta-desc', data.finalCtaDesc);
    updateElement('cta-download', data.ctaDownload);
    updateElement('feature-social-title', data.featureSocialTitle);
    updateElement('feature-social-desc', data.featureSocialDesc);
    updateElement('feature-goals-title', data.featureGoalsTitle);
    updateElement('feature-goals-desc', data.featureGoalsDesc);
    updateElement('feature-stats-title', data.featureStatsTitle);
    updateElement('feature-stats-desc', data.featureStatsDesc);
    updateElement('feature-challenge-title', data.featureChallengeTitle);
    updateElement('feature-challenge-desc', data.featureChallengeDesc);
    updateElement('stats-title', data.statsTitle);
    updateElement('stat-motivation', data.statMotivation);
    updateElement('stat-consistency', data.statConsistency);
    updateElement('stat-satisfaction', data.statSatisfaction);
    updateElement('stat-users', data.statUsers);
    updateElement('goal-title', data.goalTitle);
    updateElement('goal-main-title', data.goalMainTitle);
    updateElement('goal-main-desc', data.goalMainDesc);
    updateElement('goal-personal-title', data.goalPersonalTitle);
    updateElement('goal-personal-desc', data.goalPersonalDesc);
    updateElement('goal-group-title', data.goalGroupTitle);
    updateElement('goal-group-desc', data.goalGroupDesc);
    updateElement('goal-achievement-title', data.goalAchievementTitle);
    updateElement('goal-achievement-desc', data.goalAchievementDesc);

    // 앱 소개 페이지 요소 (있을 때만 업데이트)
    updateElement('app-hero-title', data.appHeroTitle);
    updateElement('app-hero-sub', data.appHeroSub);
    updateElement('core-features-title', data.coreFeaturesTitle);
    updateElement('core-features-subtitle', data.coreFeaturesSubtitle);
    updateElement('feature-goals-title', data.featureGoalsTitle);
    updateElement('feature-goals-desc', data.featureGoalsDesc);
    updateElement('feature-social-title', data.featureSocialTitle);
    updateElement('feature-social-desc', data.featureSocialDesc);
    updateElement('feature-stats-title', data.featureStatsTitle);
    updateElement('feature-stats-desc', data.featureStatsDesc);
    updateElement('feature-device-title', data.featureDeviceTitle);
    updateElement('feature-device-desc', data.featureDeviceDesc);
    updateElement('device-title', data.deviceTitle);
    updateElement('device-subtitle', data.deviceSubtitle);
    updateElement('device-apple-desc', data.deviceAppleDesc);
    updateElement('device-garmin-desc', data.deviceGarminDesc);
    updateElement('device-samsung-desc', data.deviceSamsungDesc);
    updateElement('device-zwift-desc', data.deviceZwiftDesc);
    updateElement('device-wahoo-desc', data.deviceWahooDesc);
    updateElement('device-igs-desc', data.deviceIgsDesc);
    updateElement('device-bryton-desc', data.deviceBrytonDesc);
    updateElement('device-suunto-desc', data.deviceSuuntoDesc);
    updateElement('stats-title', data.statsTitle);
    updateElement('stats-subtitle', data.statsSubtitle);
    updateElement('chart-weekly-title', data.chartWeeklyTitle);
    updateElement('chart-distribution-title', data.chartDistributionTitle);
    updateElement('pie-center-text', data.pieCenterText);
    updateElement('pie-center-subtext', data.pieCenterSubtext);
    updateElement('legend-running', data.legendRunning);
    updateElement('legend-cycling', data.legendCycling);
    updateElement('legend-fitness', data.legendFitness);
    updateElement('legend-others', data.legendOthers);
    updateElement('stat-active-users', data.statActiveUsers);
    updateElement('stat-monthly-records', data.statMonthlyRecords);
    updateElement('stat-achievement-rate', data.statAchievementRate);
    updateElement('card-cycling-title', data.cardCyclingTitle);
    updateElement('card-cycling-progress', data.cardCyclingProgress);
    updateElement('card-running-title', data.cardRunningTitle);
    updateElement('card-running-distance', data.cardRunningDistance);
    updateElement('card-running-time', data.cardRunningTime);
    updateElement('card-hiking-title', data.cardHikingTitle);
    updateElement('card-hiking-achievement', data.cardHikingAchievement);
    updateElement('card-fitness-title', data.cardFitnessTitle);
    updateElement('cta-title', data.ctaTitle);
    updateElement('cta-subtitle', data.ctaSubtitle);
    updateElement('store-title', data.storeTitle);
    updateElement('store-desc', data.storeDesc);
    updateElement('store-note', data.storeNote);
    // 아이콘 링크는 텍스트를 바꾸지 않음 (접근성 라벨만 업데이트 필요 시 여기서 처리 가능)
    
    // 위치정보 처리방침
    updateElement('location-title', data.locationTitle);
    updateElement('location-article1-title', data.locationArticle1Title);
    updateElement('location-article1-content', data.locationArticle1Content);
    updateElement('location-article2-title', data.locationArticle2Title);
    updateElement('location-article2-content', data.locationArticle2Content);
    updateList('location-consent-items', data.locationConsentItems);
    updateList('location-purpose-items', data.locationPurposeItems);
    updateList('location-collection-items', data.locationCollectionItems);
    updateList('location-retention-items', data.locationRetentionItems);
    updateElement('location-article3-title', data.locationArticle3Title);
    updateElement('location-article3-content', data.locationArticle3Content);
    updateList('location-rights-items', data.locationRightsItems);
    updateElement('location-rights-method', data.locationRightsMethod);
    updateElement('location-article4-title', data.locationArticle4Title);
    updateElement('location-article4-content', data.locationArticle4Content);
    updateElement('location-article5-title', data.locationArticle5Title);
    updateElement('location-article5-content', data.locationArticle5Content);
    updateList('location-third-party-items', data.locationThirdPartyItems);
    updateElement('location-article6-title', data.locationArticle6Title);
    updateElement('location-article6-content', data.locationArticle6Content);
    updateList('location-security-items', data.locationSecurityItems);
    updateElement('location-article7-title', data.locationArticle7Title);
    updateElement('location-article7-content', data.locationArticle7Content);
    updateElement('location-manager-info', data.locationManagerInfo);
    updateElement('location-contact-info', data.locationContactInfo);
    updateElement('location-phone-info', data.locationPhoneInfo);
    updateElement('location-article8-title', data.locationArticle8Title);
    updateElement('location-article8-content', data.locationArticle8Content);
    updateElement('location-effective-date', data.locationEffectiveDate);
    
    // 개인정보 처리방침
    updateElement('privacy-title', data.privacyTitle);
    updateElement('privacy-article1-title', data.privacyArticle1Title);
    updateElement('privacy-article1-content', data.privacyArticle1Content);
    updateList('privacy-purpose-items', data.privacyPurposeItems);
    updateElement('privacy-article2-title', data.privacyArticle2Title);
    updateElement('privacy-article2-content', data.privacyArticle2Content);
    updateList('privacy-retention-items', data.privacyRetentionItems);
    updateElement('privacy-article3-title', data.privacyArticle3Title);
    updateElement('privacy-article3-content', data.privacyArticle3Content);
    updateList('privacy-third-party-items', data.privacyThirdPartyItems);
    updateElement('privacy-article4-title', data.privacyArticle4Title);
    updateElement('privacy-article4-content', data.privacyArticle4Content);
    updateList('privacy-consignment-items', data.privacyConsignmentItems);
    updateElement('privacy-article5-title', data.privacyArticle5Title);
    updateElement('privacy-article5-content', data.privacyArticle5Content);
    updateList('privacy-rights-items', data.privacyRightsItems);
    updateElement('privacy-rights-method', data.privacyRightsMethod);
    updateElement('privacy-article6-title', data.privacyArticle6Title);
    updateElement('privacy-article6-content', data.privacyArticle6Content);
    updateList('privacy-data-items', data.privacyDataItems);
    updateElement('privacy-article7-title', data.privacyArticle7Title);
    updateElement('privacy-article7-content', data.privacyArticle7Content);
    updateList('privacy-security-items', data.privacySecurityItems);
    updateElement('privacy-article8-title', data.privacyArticle8Title);
    updateElement('privacy-article8-content', data.privacyArticle8Content);
    updateElement('privacy-manager-info', data.privacyManagerInfo);
    updateElement('privacy-contact-info', data.privacyContactInfo);
    updateElement('privacy-phone-info', data.privacyPhoneInfo);
    updateElement('privacy-article9-title', data.privacyArticle9Title);
    updateElement('privacy-article9-content', data.privacyArticle9Content);
    updateElement('privacy-effective-date', data.privacyEffectiveDate);
    
    // 푸터
    updateElement('footer-desc', data.footerDesc);
    updateElement('footer-company', data.footerCompany);
    updateElement('footer-contact', data.footerContact);
    updateElement('footer-links', data.footerLinks);
    updateElement('footer-app', data.footerApp);
    updateElement('footer-location', data.footerLocation);
    updateElement('footer-privacy', data.footerPrivacy);
    updateElement('footer-rights', data.footerRights);
    
    // 언어 버튼 활성화 상태 업데이트
    const koBtn = document.getElementById('btn-ko');
    const enBtn = document.getElementById('btn-en');
    if (koBtn && enBtn) {
        koBtn.classList.toggle('active', lang === 'ko');
        enBtn.classList.toggle('active', lang === 'en');
    }
    
    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;

    // persist
    try { localStorage.setItem('mocial-lang', lang); } catch (_) {}
}

// 요소 업데이트 헬퍼 함수
function updateElement(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

// 리스트 업데이트 헬퍼 함수
function updateList(id, items) {
    const list = document.getElementById(id);
    if (list && items) {
        list.innerHTML = '';
        items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
            list.appendChild(li);
        });
    }
}

// 네비게이션 설정
function setupNavigation() {
    // 언어 변경 버튼
    const koBtn = document.getElementById('btn-ko');
    const enBtn = document.getElementById('btn-en');
    
    // 이벤트 리스너 추가
    if (koBtn) {
        koBtn.addEventListener('click', () => setLanguage('ko'));
    }
    
    if (enBtn) {
        enBtn.addEventListener('click', () => setLanguage('en'));
    }
    
    // 정책 네비게이션 (요소가 존재할 때만)
    const navLocation = document.getElementById('nav-location');
    if (navLocation) {
        navLocation.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('location-policy');
        });
    }
    
    const navPrivacy = document.getElementById('nav-privacy');
    if (navPrivacy) {
        navPrivacy.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('privacy-policy');
        });
    }
    
    // 푸터 링크 (요소가 존재할 때만)
    const footerLocation = document.getElementById('footer-location');
    if (footerLocation) {
        footerLocation.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('location-policy');
        });
    }
    
    const footerPrivacy = document.getElementById('footer-privacy');
    if (footerPrivacy) {
        footerPrivacy.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('privacy-policy');
        });
    }
}

// 섹션으로 스크롤
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 맨 위로 스크롤 버튼 설정
function setupScrollToTop() {
    // 스크롤 버튼 생성
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    scrollButton.title = '맨 위로';
    scrollButton.style.display = 'none';
    document.body.appendChild(scrollButton);
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // 클릭 이벤트 리스너
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 인쇄 기능
function printPolicy() {
    window.print();
}

// 키보드 네비게이션 지원
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                scrollToSection('location-policy');
                break;
            case '2':
                e.preventDefault();
                scrollToSection('privacy-policy');
                break;
            case 'p':
                e.preventDefault();
                printPolicy();
                break;
        }
    }
});

// 앱 페이지 차트 애니메이션 함수들
function animateCharts() {
    // 라인 차트 애니메이션
    const linePath = document.querySelector('.activity-line');
    const areaPath = document.querySelector('.activity-area');
    const dataPoints = document.querySelectorAll('.data-points');
    
    if (linePath) {
        const pathLength = linePath.getTotalLength();
        linePath.style.strokeDasharray = pathLength;
        linePath.style.strokeDashoffset = pathLength;
        
        setTimeout(() => {
            linePath.style.transition = 'stroke-dashoffset 2s ease-in-out';
            linePath.style.strokeDashoffset = 0;
        }, 500);
    }
    
    if (areaPath) {
        areaPath.style.opacity = '0';
        setTimeout(() => {
            areaPath.style.transition = 'opacity 1s ease-in-out';
            areaPath.style.opacity = '1';
        }, 1000);
    }
    
    // 데이터 포인트 애니메이션
    dataPoints.forEach((point, index) => {
        point.style.opacity = '0';
        setTimeout(() => {
            point.style.transition = 'opacity 0.3s ease-in-out';
            point.style.opacity = '1';
        }, 1500 + (index * 100));
    });
    
    // 파이 차트 애니메이션
    const pieSlices = document.querySelectorAll('.pie-slice-1, .pie-slice-2, .pie-slice-3, .pie-slice-4');
    pieSlices.forEach((slice, index) => {
        const pathLength = slice.getTotalLength();
        slice.style.strokeDasharray = pathLength;
        slice.style.strokeDashoffset = pathLength;
        
        setTimeout(() => {
            slice.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
            slice.style.strokeDashoffset = 0;
        }, 2000 + (index * 200));
    });
}

// 차트 컨테이너 호버 효과
function setupChartHoverEffects() {
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 인트로 페이지 애니메이션 함수들
function createParticles() {
    const particlesContainer = document.getElementById('bg-particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// 마우스 추적 파티클
function setupMouseTrail() {
    document.addEventListener('mousemove', function(e) {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    });
}


// 카운터 애니메이션
function setupCounterAnimations() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isK = target.includes('K');
        const isKm = target.includes('km');
        
        let numericValue;
        if (isPercentage) {
            numericValue = parseInt(target);
        } else if (isK) {
            numericValue = parseInt(target) * 1000;
        } else if (isKm) {
            numericValue = parseInt(target);
        } else {
            numericValue = parseInt(target);
        }
        
        let current = 0;
        const increment = numericValue / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            if (isPercentage) {
                counter.textContent = Math.floor(current) + '%';
            } else if (isK) {
                counter.textContent = Math.floor(current / 1000) + 'K+';
            } else if (isKm) {
                counter.textContent = Math.floor(current) + 'km';
            } else {
                counter.textContent = Math.floor(current) + '+';
            }
        }, 20);
    });
}

// 테마 로직 제거