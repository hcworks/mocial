// 운진사 위치정보 처리방침 및 개인정보 처리방침 페이지
// Woonjinsa Location Information Processing Policy and Privacy Policy Page

document.addEventListener('DOMContentLoaded', function() {
    // 초기 설정 (저장된 언어 적용)
    const savedLang = localStorage.getItem('mocial-lang') || 'ko';
    setLanguage(savedLang);
    setupNavigation();
    setupScrollToTop();
    // 단일 배경 사용으로 테마 설정 제거
});

// 언어별 콘텐츠 데이터
const content = {
    ko: {
        // 헤더
        title: "위치정보 처리방침 및 개인정보 처리방침",
        effectiveDate: "시행일자: 2025년 1월 1일",
        
        // 네비게이션
        navIntro: "홈",
        navApp: "앱 소개",
        navLocation: "위치정보 처리방침",
        navPrivacy: "개인정보 처리방침",

        // 인트로 페이지
        introTitle: "Mocial",
        introSubtitle: "운동과 소셜의 만남<br>친구들과 함께하는 새로운 운동 경험",
        introCtaPrimary: "앱 알아보기",
        introCtaSecondary: "정책 보기",
        statsTitle: "Mocial과 함께하는 운동의 세계",
        statsSubtitle: "데이터로 보는 운동의 힘",
        stat1Label: "지원 운동 종목",
        stat2Label: "실시간 활동 추적",
        stat3Label: "프라이버시 보호",
        stat4Label: "소셜 연결",
        featuresTitle: "왜 Mocial인가?",
        featuresSubtitle: "운동을 더 즐겁고 의미있게 만드는 특별한 기능들",
        feature1Title: "스마트 분석",
        feature1Desc: "AI 기반 운동 데이터 분석으로 개인 맞춤형 인사이트 제공",
        feature2Title: "소셜 네트워킹",
        feature2Desc: "같은 관심사를 가진 운동 파트너들과의 연결과 경쟁",
        feature3Title: "목표 달성",
        feature3Desc: "체계적인 목표 설정과 진행 상황 추적으로 동기 부여",

        // 앱 소개 페이지
        appHeroTitle: "Mocial - 운동을 기록하고, 친구와 연결되는 순간",
        appHeroSub: "자전거, 러닝, 골프, 등산, 헬스, 요가 등 다양한 아웃도어 운동을 친구들과 공유하는 SNS형 운동앱. 활동 기록과 함께 종목별 심층 통계를 제공해 목표 달성을 돕습니다.",
        featuresTitle: "무엇을 할 수 있나요?",
        feat1Title: "다양한 종목 기록",
        feat1Desc: "자전거, 러닝, 골프, 등산, 헬스, 요가 등 운동 기록을 한 곳에서 관리.",
        feat2Title: "SNS 피드",
        feat2Desc: "친구들과 운동 사진/기록을 공유하고 좋아요, 댓글로 소통.",
        feat3Title: "통계와 인사이트",
        feat3Desc: "주/월/연 단위 리포트, 종목별 성과 비교, 개인화 목표 제공.",
        feat4Title: "프라이버시 제어",
        feat4Desc: "게시물 공개 범위, 위치 정보 공유 수준을 상세하게 설정 가능.",
        storeTitle: "앱 스토어",
        storeDesc: "출시와 함께 아래 링크가 활성화됩니다.",
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
        
        locationArticle3Title: "제3조 (개인위치정보주체의 권리)",
        locationArticle3Content: "개인위치정보주체는 언제든지 개인위치정보의 수집·이용·제공에 대한 동의를 철회할 수 있습니다.",
        locationRightsItems: [
            "개인위치정보 수집·이용·제공 동의철회권",
            "개인위치정보 및 위치정보 수집·이용·제공사실 확인자료에 대한 열람·고지요구권",
            "개인위치정보의 삭제·정정요구권",
            "손해배상청구권"
        ],
        
        locationArticle4Title: "제4조 (법정대리인의 권리)",
        locationArticle4Content: "회사는 14세 미만 아동으로부터 개인위치정보를 수집·이용하고자 하는 경우에는 법정대리인의 동의를 받습니다. 법정대리인은 아동의 개인위치정보 수집·이용·제공에 동의하거나 그 동의를 철회할 수 있으며, 아동의 권리를 대리하여 행사할 수 있습니다.",
        
        locationArticle5Title: "제5조 (위치정보관리책임자)",
        locationArticle5Content: "회사는 위치정보를 적절히 관리·보호하고 개인위치정보주체의 불만을 원활히 처리할 수 있도록 다음과 같이 위치정보관리책임자를 지정하여 운영하고 있습니다.",
        locationManagerInfo: "위치정보관리책임자: 개인정보보호팀",
        locationContactInfo: "연락처: privacy@mocial.com",
        
        // 개인정보 처리방침
        privacyTitle: "개인정보 처리방침",
        privacyArticle1Title: "제1조 (개인정보의 처리목적)",
        privacyArticle1Content: "회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.",
        privacyPurposeItems: [
            "회원가입 및 관리",
            "서비스 제공",
            "고충처리",
            "마케팅 및 광고에의 활용"
        ],
        
        privacyArticle2Title: "제2조 (개인정보의 처리 및 보유기간)",
        privacyArticle2Content: "회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.",
        privacyRetentionItems: [
            "회원가입정보: 회원탈퇴 시까지",
            "서비스 이용기록: 5년",
            "결제기록: 5년",
            "민원처리기록: 3년"
        ],
        
        privacyArticle3Title: "제3조 (개인정보의 제3자 제공)",
        privacyArticle3Content: "회사는 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.",
        
        privacyArticle4Title: "제4조 (정보주체의 권리·의무 및 행사방법)",
        privacyArticle4Content: "정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.",
        privacyRightsItems: [
            "개인정보 처리정지 요구",
            "개인정보 열람요구",
            "개인정보 정정·삭제요구",
            "개인정보 처리정지 요구"
        ],
        
        privacyArticle5Title: "제5조 (개인정보보호책임자)",
        privacyArticle5Content: "회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.",
        privacyManagerInfo: "개인정보보호책임자: 개인정보보호팀",
        privacyContactInfo: "연락처: privacy@mocial.com",
        privacyPhoneInfo: "전화번호: 02-1234-5678",
        
        // 푸터
        footerDescription: "외부 운동을 친구들과 공유하고, 통계로 성장하는 SNS 운동앱",
        footerAddress: "주소: 서울특별시 강남구 테헤란로 123길 45, 6층",
        footerContact: "대표전화: 02-1234-5678 | 이메일: contact@mocial.com",
        footerBusiness: "사업자등록번호: 123-45-67890",
        footerIntro: "홈",
        footerApp: "앱 소개",
        footerLocation: "위치정보 처리방침",
        footerPrivacy: "개인정보 처리방침",
        footerCopyright: "© 2025 Mocial. All rights reserved."
    },
    
    en: {
        // Header
        title: "Location Information Processing Policy and Privacy Policy",
        effectiveDate: "Effective Date: January 1, 2025",
        
        // Navigation
        navIntro: "Home",
        navApp: "App Introduction",
        navLocation: "Location Information Processing Policy",
        navPrivacy: "Privacy Policy",

        // 인트로 페이지
        introTitle: "Mocial",
        introSubtitle: "Where Fitness Meets Social<br>New exercise experience with friends",
        introCtaPrimary: "Learn More",
        introCtaSecondary: "View Policies",
        statsTitle: "The World of Exercise with Mocial",
        statsSubtitle: "The Power of Exercise Through Data",
        stat1Label: "Supported Sports",
        stat2Label: "24/7 Activity Tracking",
        stat3Label: "Privacy Protection",
        stat4Label: "Social Connection",
        featuresTitle: "Why Mocial?",
        featuresSubtitle: "Special features that make exercise more fun and meaningful",
        feature1Title: "Smart Analytics",
        feature1Desc: "AI-based exercise data analysis provides personalized insights",
        feature2Title: "Social Networking",
        feature2Desc: "Connect and compete with exercise partners who share similar interests",
        feature3Title: "Goal Achievement",
        feature3Desc: "Systematic goal setting and progress tracking for motivation",

        // App page
        appHeroTitle: "Mocial - Track your workouts, connect with friends",
        appHeroSub: "An SNS-style fitness app to share outdoor activities like cycling, running, golf, hiking, gym, and yoga. Get deep, sport-specific analytics to reach your goals.",
        featuresTitle: "What can you do?",
        feat1Title: "Multi-sport Tracking",
        feat1Desc: "Manage cycling, running, golf, hiking, gym, and yoga logs in one place.",
        feat2Title: "Social Feed",
        feat2Desc: "Share workouts and photos with friends, and engage with likes and comments.",
        feat3Title: "Stats & Insights",
        feat3Desc: "Weekly/monthly/yearly reports, sport comparisons, and personalized goals.",
        feat4Title: "Privacy Controls",
        feat4Desc: "Configure post visibility and fine-tune location sharing levels.",
        storeTitle: "App Stores",
        storeDesc: "Links will be enabled at launch.",
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
        
        locationArticle3Title: "Article 3 (Rights of Personal Location Information Subjects)",
        locationArticle3Content: "Personal location information subjects may withdraw consent for the collection, use, and provision of personal location information at any time.",
        locationRightsItems: [
            "Right to withdraw consent for collection, use, and provision of personal location information",
            "Right to request access and notification of personal location information and confirmation materials of location information collection, use, and provision facts",
            "Right to request deletion and correction of personal location information",
            "Right to claim damages"
        ],
        
        locationArticle4Title: "Article 4 (Rights of Legal Representatives)",
        locationArticle4Content: "When the Company intends to collect and use personal location information from children under 14 years of age, it receives consent from their legal representatives. Legal representatives may consent to or withdraw consent for the collection, use, and provision of children's personal location information and may exercise children's rights on their behalf.",
        
        locationArticle5Title: "Article 5 (Location Information Manager)",
        locationArticle5Content: "The Company designates and operates a location information manager as follows to properly manage and protect location information and smoothly handle complaints from personal location information subjects:",
        locationManagerInfo: "Location Information Manager: Privacy Protection Team",
        locationContactInfo: "Contact: privacy@mocial.com",
        
        // Privacy Policy
        privacyTitle: "Privacy Policy",
        privacyArticle1Title: "Article 1 (Purpose of Personal Information Processing)",
        privacyArticle1Content: "The Company processes personal information for the following purposes. The personal information being processed will not be used for purposes other than the following, and if the purpose of use changes, necessary measures such as obtaining separate consent will be implemented in accordance with Article 18 of the Personal Information Protection Act.",
        privacyPurposeItems: [
            "Membership registration and management",
            "Service provision",
            "Grievance handling",
            "Marketing and advertising utilization"
        ],
        
        privacyArticle2Title: "Article 2 (Processing and Retention Period of Personal Information)",
        privacyArticle2Content: "The Company processes and retains personal information within the personal information retention and use period according to laws or the personal information retention and use period consented to when collecting personal information from information subjects.",
        privacyRetentionItems: [
            "Membership registration information: Until membership withdrawal",
            "Service usage records: 5 years",
            "Payment records: 5 years",
            "Complaint handling records: 3 years"
        ],
        
        privacyArticle3Title: "Article 3 (Provision of Personal Information to Third Parties)",
        privacyArticle3Content: "The Company processes personal information only within the scope specified in Article 1 (Purpose of Personal Information Processing) and provides personal information to third parties only when it corresponds to Article 17 of the Personal Information Protection Act, such as consent from information subjects or special provisions of laws.",
        
        privacyArticle4Title: "Article 4 (Rights and Obligations of Information Subjects and Methods of Exercise)",
        privacyArticle4Content: "Information subjects may exercise the following personal information protection-related rights against the Company at any time:",
        privacyRightsItems: [
            "Request to stop personal information processing",
            "Request to access personal information",
            "Request to correct or delete personal information",
            "Request to stop personal information processing"
        ],
        
        privacyArticle5Title: "Article 5 (Personal Information Protection Officer)",
        privacyArticle5Content: "The Company designates a personal information protection officer as follows to take overall responsibility for personal information processing and to handle complaints and remedy damages related to personal information processing from information subjects:",
        privacyManagerInfo: "Personal Information Protection Officer: Privacy Protection Team",
        privacyContactInfo: "Contact: privacy@mocial.com",
        privacyPhoneInfo: "Phone: 02-1234-5678",
        
        // Footer
        footerDescription: "SNS fitness app that shares outdoor activities with friends and grows through statistics",
        footerAddress: "Address: 6F, 45, Teheran-ro 123-gil, Gangnam-gu, Seoul, Republic of Korea",
        footerContact: "Main Phone: 02-1234-5678 | Email: contact@mocial.com",
        footerBusiness: "Business Registration Number: 123-45-67890",
        footerIntro: "Home",
        footerApp: "App Introduction",
        footerLocation: "Location Information Processing Policy",
        footerPrivacy: "Privacy Policy",
        footerCopyright: "© 2025 Mocial. All rights reserved."
    }
};

// 언어 설정 함수
function setLanguage(lang) {
    const data = content[lang];
    
    // 헤더
    updateElement('title', data.title);
    updateElement('effective-date', data.effectiveDate);
    
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
    updateElement('intro-cta-primary', data.introCtaPrimary);
    updateElement('intro-cta-secondary', data.introCtaSecondary);
    updateElement('stats-title', data.statsTitle);
    updateElement('stats-subtitle', data.statsSubtitle);
    updateElement('stat1-label', data.stat1Label);
    updateElement('stat2-label', data.stat2Label);
    updateElement('stat3-label', data.stat3Label);
    updateElement('stat4-label', data.stat4Label);
    updateElement('features-title', data.featuresTitle);
    updateElement('features-subtitle', data.featuresSubtitle);
    updateElement('feature1-title', data.feature1Title);
    updateElement('feature1-desc', data.feature1Desc);
    updateElement('feature2-title', data.feature2Title);
    updateElement('feature2-desc', data.feature2Desc);
    updateElement('feature3-title', data.feature3Title);
    updateElement('feature3-desc', data.feature3Desc);

    // 앱 소개 페이지 요소 (있을 때만 업데이트)
    updateElement('app-hero-title', data.appHeroTitle);
    updateElement('app-hero-sub', data.appHeroSub);
    updateElement('features-title', data.featuresTitle);
    updateElement('feat1-title', data.feat1Title);
    updateElement('feat1-desc', data.feat1Desc);
    updateElement('feat2-title', data.feat2Title);
    updateElement('feat2-desc', data.feat2Desc);
    updateElement('feat3-title', data.feat3Title);
    updateElement('feat3-desc', data.feat3Desc);
    updateElement('feat4-title', data.feat4Title);
    updateElement('feat4-desc', data.feat4Desc);
    updateElement('store-title', data.storeTitle);
    updateElement('store-desc', data.storeDesc);
    // 아이콘 링크는 텍스트를 바꾸지 않음 (접근성 라벨만 업데이트 필요 시 여기서 처리 가능)
    
    // 위치정보 처리방침
    updateElement('location-title', data.locationTitle);
    updateElement('location-article1-title', data.locationArticle1Title);
    updateElement('location-article1-content', data.locationArticle1Content);
    updateElement('location-article2-title', data.locationArticle2Title);
    updateElement('location-article2-content', data.locationArticle2Content);
    updateList('location-consent-items', data.locationConsentItems);
    updateElement('location-article3-title', data.locationArticle3Title);
    updateElement('location-article3-content', data.locationArticle3Content);
    updateList('location-rights-items', data.locationRightsItems);
    updateElement('location-article4-title', data.locationArticle4Title);
    updateElement('location-article4-content', data.locationArticle4Content);
    updateElement('location-article5-title', data.locationArticle5Title);
    updateElement('location-article5-content', data.locationArticle5Content);
    updateElement('location-manager-info', data.locationManagerInfo);
    updateElement('location-contact-info', data.locationContactInfo);
    
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
    updateElement('privacy-article4-title', data.privacyArticle4Title);
    updateElement('privacy-article4-content', data.privacyArticle4Content);
    updateList('privacy-rights-items', data.privacyRightsItems);
    updateElement('privacy-article5-title', data.privacyArticle5Title);
    updateElement('privacy-article5-content', data.privacyArticle5Content);
    updateElement('privacy-manager-info', data.privacyManagerInfo);
    updateElement('privacy-contact-info', data.privacyContactInfo);
    updateElement('privacy-phone-info', data.privacyPhoneInfo);
    
    // 푸터
    updateElement('footer-description', data.footerDescription);
    updateElement('footer-address', data.footerAddress);
    updateElement('footer-contact', data.footerContact);
    updateElement('footer-business', data.footerBusiness);
    updateElement('footer-intro', data.footerIntro);
    updateElement('footer-app', data.footerApp);
    updateElement('footer-location', data.footerLocation);
    updateElement('footer-privacy', data.footerPrivacy);
    updateElement('footer-copyright', data.footerCopyright);
    
    // 언어 버튼 활성화 상태 업데이트
    const koBtn = document.getElementById('btn-ko') || document.getElementById('btn-ko-app') || document.getElementById('btn-ko-intro');
    const enBtn = document.getElementById('btn-en') || document.getElementById('btn-en-app') || document.getElementById('btn-en-intro');
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
    const koBtn = document.getElementById('btn-ko') || document.getElementById('btn-ko-app') || document.getElementById('btn-ko-intro');
    const enBtn = document.getElementById('btn-en') || document.getElementById('btn-en-app') || document.getElementById('btn-en-intro');
    if (koBtn) koBtn.addEventListener('click', () => setLanguage('ko'));
    if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
    
    // 정책 네비게이션
    document.getElementById('nav-location').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('location-policy');
    });
    
    document.getElementById('nav-privacy').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('privacy-policy');
    });
    
    // 푸터 링크
    document.getElementById('footer-location').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('location-policy');
    });
    
    document.getElementById('footer-privacy').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('privacy-policy');
    });
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

// 테마 로직 제거