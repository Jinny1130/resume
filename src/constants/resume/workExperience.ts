import {
  StickyTitleInfo,
  DetailWorkExperienceInfo,
  WorkPageAbout,
} from '@/types/ResumeTypes';

export const workExperienceList: StickyTitleInfo[] = [
  {
    id: 'paymint',
    title: '(주) 페이민트',
    link: 'http://paymint.co.kr/',
    addExplanation: '페이민트 회사 페이지로 연결됩니다.',
  },
  {
    id: 'admin',
    title: '어드민(Back Office)',
  },
  {
    id: 'manager',
    title: '결제선생 - 매니저',
    link: 'https://payssam.kr',
    addExplanation: '서비스 안내 랜딩으로 연결됩니다.',
  },
  {
    id: 'bill',
    title: '결제선생 - 청구서',
    link: 'https://payssam.kr/form/bill',
    addExplanation: '서비스 체험 링크로 연결됩니다.',
  },
  {
    id: 'hissam',
    title: '출결선생',
    link: 'https://hissam.kr/',
    addExplanation: '서비스 안내 랜딩으로 연결됩니다.',
  },
  {
    id: 'other',
    title: 'Other Work',
  },
];

export const workPageAbout: Record<string, WorkPageAbout> = {
  admin: {
    period: '',
    pageAbout:
      '사내 백오피스 페이지로, 노후화 된 UI/UX를 가진 기존 어드민1.0의 사용성 저하 및 업무 활용에 어려움이 있어, <b>어드민 2.0으로 리뉴얼</b> 하였습니다. <b>신규 구축 및 개발 리드</b>를 담당 하였으며, 주로 기존에 있는 업무 프로세스를 <b>2.0 페이지로 이관 및 재구성</b>하는 작업과, 수동으로 처리하던 업무 프로세스를 2.0의 <b>신규 메뉴로 추가</b>하는 개발 작업을 하였습니다. <br/>사내 관리 업무 툴로 페이지를 최대한 활용할 수 있도록하여 <b>업무 효용률</b>을 효과적으로 <b>향상</b>시킬 수 있었습니다.',
  },

  manager: {
    period: '',
    pageAbout:
      '결제선생 <b>서비스 유저가 이용</b>하는 사이트로 사업장 등록, 청구서 관리 및 발송, 청구서 수신 고객 관리 등 여러가지의 기능을 제공합니다. 주로 다양한 서비스의 <b>프로세스 리뉴얼 및 기존 UI/UX 개선 작업</b>을 하였으며, 사용자 경험을 개선하기 위해 지속적으로 기능을 <b>업데이트 및 최적화</b>했습니다.',
  },

  bill: {
    period: '',
    pageAbout:
      "결제선생 서비스를 이용하는 사업장에서 사업장 이용 고객에게 발송하는 <b>결제 청구 페이지</b>입니다. 이 페이지는 <b>'앱카드', 'KEY IN', '자동결제', '간편결제(페이앱)', '뱅킹앱' 등 다양한 결제 수단</b>을 제공하며, 고객은 별도의 앱 다운로드 없이 <b>카카오톡으로 청구서를 수신하고 결제</b>할 수 있습니다.",
  },

  hissam: {
    period: '',
    pageAbout:
      '출결선생은 결제선생 사업장 중 <b>출석체크 기능</b>을 사용하는 사업장에 제공되는 서비스입니다. <b>수업 클래스와 학생을 등록</b>할 수 있으며, 학생 출석체크를 완료하면 보호자에게 <b>출결 알림 메시지가 전송</b>되는 기능을 주로 제공하고 있습니다.',
  },

  other: {
    period: '',
    pageAbout: '',
  },
};

export const detailWorkExperiences: Record<string, DetailWorkExperienceInfo[]> =
  {
    admin: [
      {
        title: '어드민2.0 - 구축 및 개발 리드',
        period: '상시',
        describe: [
          '사수가 없는 환경에서 <b>Admin 2.0을 신규 구축</b>하고 <b>개발 리드를 담당</b>하였으며, 코드의 유지보수성과 확장성을 고려하여 <b>폴더 구조를 체계적으로 분류하고 정의</b>하였습니다.',
          'browser tab 과 같은 UI 를 구현하기 위해 <b>vue-router-tab</b> 라이브러리를 <b>활용 및 커스터마이징</b>하여 기획과 사용자 <b>니즈를 효과적으로 반영</b>하여 개발했습니다.',
          'UI 요소들의 <b>컴포넌트화</b>에 집중해서 개발하였으며, 주요 기능별로 폴더를 나누어 컴포넌트, 유틸함수, 스타일 파일 등을 별도의 <b>디렉토리로 정리</b>하였습니다. 이를 통해 <b>코드의 재사용 및 가독성</b>을 높이고, 협업과 유지보수 시 <b>개발 처리 속도를 향상</b>시켰습니다.',
          '1.0 ver.과 2.0 ver. 간의 페이지 이동시 <b>sessionStorage</b> 및 <b>postMessage</b> 활용으로 로그인 정보 저장, <b>재로그인 과정을 생략</b>처리하여 API 중복 호출 방지 및 <b>업무자의 작업 동시성을 보장</b>하였습니다.',
          '어드민 메뉴마다 연동되어 있는 <b>목록 조회 API</b>와 <b>엑셀 다운로드 목록 조회 API</b>를 <b>사용자의 동작 순간에 맞춰 분류</b>하여 연동함으로써, <b>API 과부하를 방지</b>하고 효율성을 높였습니다.',
          '<b>API의 error response</b>를 노출하는 별도의 팝업을 제작하였습니다. <b>정상 응답코드</b>를 global 파일에 <b>전역변수</b>로 명시 후 응답 코드가 정상 응답이 아닌경우에는 <b>에러 팝업을 노출</b>하도록 구성하였습니다. 이 작업 이후에 <b>직관적으로 오류를 파악</b> 할 수 있엇으며, <b>에러 처리 속도를 향상</b> 시킬 수 있었습니다.',
        ],
      },
      {
        title: '어드민2.0 - 등록심사 자동화',
        period: '2024.03 ~ 2024.07',
        describe: [
          '관리자의 서비스 심사 과정을 <b>OCR 인식</b> 및 대행사 통신 연결(NICE, KSNET)을 통해 <b>자동화</b>하여 심사 승인 <b>업무처리 속도를 증가</b>시켰습니다. 이를 통해 기존 업무 <b>인력소모</b>를 절반으로 <b>감소</b>시키고, <b>업무 처리 효율</b>을 약<b>150% 향상</b>시켰습니다.',
        ],
      },
      {
        title: '어드민2.0 - 카드사 장애관리',
        period: '2023.01',
        describe: [
          "<b>카드사별 장애 메시지를 관리</b>할 수 있는 페이지를 개발했습니다. 이 페이지는 결제수단별로 탭을 나누어 각 카드사의 '장애/업데이트' <b>안내 메시지를 설정</b>할 수 있는 기능을 제공합니다. 관리자는 메시지의 <b>기간, 타이틀, 내용을 설정</b> 할 수 있으며, 등록 시 <b>AWS SDK</b>를 활용하여 <b>S3 버킷</b>에 <b>JSON 데이터를 업데이트</b>하도록 구현했습니다. 서비스 화면에서는 <b>고객이 페이지에 진입 시</b> S3 데이터를 조회해 <b>앱카드 비활성화 및 에러 메시지가 노출</b>되도록 구현했습니다.",
        ],
      },
      {
        title: '어드민2.0 - 등록심사 (구버전)',
        period: '2021.12 ~ 2022.03',
        describe: [
          '사업장의 서비스 개시의 <b>수동 심사 처리</b>를 위한 페이지를 개발하였습니다. <b>서비스 개시, 서류 보완, 심사 반려, 심사건 삭제</b> 등의 프로세스를 지원하며, <b>각 프로세스</b>마다 컴포넌트와 <b>로직을 분리</b>하여 관리와 <b>유지보수가 용이</b>하도록 설계하였습니다.',
          '심사제출서류 이미지를 확인 할 수 있는 <b>이미지 뷰어 팝업을 개발</b>하였습니다. 디자인 UI를 수용하기 위해 별도의 컴포넌트로 <b>커스텀 제작</b>했으며, <b>AWS S3 URL</b> 을 받아 이미지를 노출시키고 이미지의 <b>확대, 축소, 회전, 다운로드</b>의 기능을 제공하도록 개발하였습니다.',
          '<b>Slack API를 연동</b>하여 어드민 심사자가 업무 처리를 완료하면 <b>Slack</b> 메시지가 <b>자동 발송</b>되도록 구현하였습니다. 기존에 발생하던 <b>업무 중복 처리 이슈를 해소</b>하여 심사팀 간 소통을 원활하게 하고, 업무 효율성을 높이는 데 기여하였습니다.',
        ],
      },
      {
        title: '어드민2.0 - CS상담(ARS)',
        period: '2021.12 ~ 2022.03',
        describe: [
          '기존에는 없던 <b>CS상담(ARS) 관리 페이지</b>를 신규 개발하였습니다. 고객에게 <b>전화걸기 및 끊기</b>, 상담중 페이지 이탈 방지 로직으로 <b>중복 상담 방지</b>, 관리자를 댓글타입으로 멘션하여 <b>상담 히스토리 관리</b> 등의 UI/UX 개발을 작업하였으며, 이로인해 <b>CS 업무 효율을 증가</b>시켰습니다.',
        ],
      },
      {
        title: '어드민1.0',
        period: '상시',
        describe: [
          '기존 1.0 버전에서는 주로 유지보수 업무를 담당하며, 안정적인 운영을 위한 <b>문제 해결과 개선 작업</b>을 수행하였습니다.',
        ],
      },
    ],
    manager: [
      {
        title: '매니저 - 신규 개발 및 유지보수',
        period: '상시',
        describe: [
          '<b>반응형 및 웹뷰</b> 화면 설계를 통해 사용자에게 최적화된 경험을 제공하였습니다. <b>CSS Media Queries</b>를 활용하여 반응형 레이아웃을 구현했으며, <b>웹뷰 또는 모바일 환경</b>에서 로그인 과정 없이 다이렉트로 접근하는 페이지의 경우, <b>별도의 레이아웃으로 분기 처리</b>하여 사용 환경에 <b>적합한 화면이 진입 시점부터 노출</b>되도록 작업했습니다.',
          '기존 <b>비밀번호 유효성</b> 체크는 <b>연약하다고 판단</b>되어, 보안 강화 및 개선 작업을 진행했습니다. 비밀번호 유효성 체크에 <b>다양한 문자 타입을 요구</b>하도록 로직을 개선하고, 사용자의 개인정보화면 진입 시 비밀번호를 한 번 더 입력해야 하는 <b>브레이크 페이지를 추가</b>하였습니다. 이 작업으로 웹 취약점을 효과적으로 개선할 수 있었습니다.',
          '<b>사용자</b> 행동 데이터를 <b>모니터링</b>하기 위해 <b>Google Analytics(GA)</b> 태그를 추가하였습니다. 주요 페이지에 GA 태그를 삽입하여 사용자의 행동 데이터를 수집할 수 있도록 구현하였으며, 이를 통해 <b>마케팅 전략 수립에 활용</b>할 수 있는 데이터를 확보했습니다.',
        ],
      },
      {
        title: "매니저 - 상담 시스템 '채널톡' 도입",
        period: '2024.12',
        describe: [
          "CS 상담 시스템을 기존 <b>카카오챗에서 채널톡으로 전환</b>하였습니다. <b>채널톡 API</b>와 <b>자사 API</b>를 <b>Vue의 CSR</b> 방식에 맞춰 연동하며, 'Boot', 'Update', '신규 메시지 감지' 등 주요 이벤트를 <b>단일 호출로 처리</b>하여 중복 호출을 방지했습니다. <b>1주일의 개발 기간</b> 동안 효율적으로 작업하여 CS 상담 환경을 효과적으로 개선했습니다.",
        ],
      },
      {
        title: '매니저 - 등록심사 자동화',
        period: '2024.03 ~ 2024.07',
        describe: [
          '사용자의 서비스 이용 등록 및 <b>심사요청 프로세스를 리뉴얼</b>하는 작업으로 이전보다 <b>간소화 된 경험을 제공</b>하였습니다. 기존에는 사용자가 필요서류 이미지를 모두 업로드하고 내용을 직접 입력해야 했지만, <b>OCR 기술</b>과 <b>휴대폰 본인 확인</b> 도입 및 <b>대행사 API 연결</b> 과정으로 등록 단계를 줄이고 프로세스를 자동화하였습니다. 이를 통해 고객의 서비스 등록 <b>이탈률을 24%에서 2.8%</b>로 크게 <b>감소</b>시켰습니다.',
          '<b>3가지 타입의 등록 프로세스</b>와 <b>뒤로가기 기능</b>이 요구되어 컴포넌트 <b>전역에서 상태 관리</b>를 구현해야 했습니다. 이를 위해 <b<Vuex</b>를 활용해 전역 상태 관리를 적용하고, <b>세션 스토리지</b>를 함께 사용하여 데이터의 지속성을 확보했습니다. 이 작업을 통해 사용자가 등록 과정을 중단하거나 뒤로가기 시에도 <b>데이터를 유지</b>하며, UI를 동적으로 구현하여 원활한 사용자 경험을 제공할 수 있었습니다.',
        ],
      },
      {
        title: '매니저 - 다수의 제휴 페이지 개발',
        period: '상시',
        describe: [
          "<b>다양한 제휴</b> 간편결제 <b>서비스 등록 페이지</b>를 개발하였습니다. <b>'우리카드 가맹점 신청', '카카오페이 결제수단 신청', '케이뱅크 간편계좌이체 결제수단 신청'</b> 등 여러 간편결제 서비스와의 제휴 페이지 작업을 진행했습니다. 각 제휴 서비스의 신속한 출시 일정에 맞춰 <b>강점인 빠른 작업 속도</b>로 페이지당 <b>평균 1.5일 만에 완료</b>하며, 개발 일정 단축에 기여했습니다.",
        ],
      },
    ],
    bill: [
      {
        title: '청구서 - 신규 개발 및 유지보수',
        period: '상시',
        describe: [
          '<b>유지보수</b>에 중점을 두고 <b>기존 프로세스와 UI를 관리</b>하고, 시스템의 기능을 최신화하였습니다.',
          '모바일에 최적화된 <b>반응형 레이아웃</b>을 구현하고, 디바이스 종류에 따라 결제 앱 목록을 동적으로 조정하여 UI/UX를 제공했습니다. 이를 통해 각 <b>디바이스 환경에서의 일관성</b>을 유지했습니다.',
          "<b>'KB Pay 알림결제 서비스 신청' 페이지를 제작</b>하였습니다. 고객이 페이앱 푸시알림을 받고 바로 결제할 수 있도록 하는 서비스로, <b>서비스 안내, 정보 입력, 약관 동의, 신청완료</b>로 구성된 짧은 프로세스로 구현하여 <b>미납률 감소 효과</b>를 이뤘습니다.",
        ],
      },
      {
        title: '청구서 - Next.js 마이그레이션',
        period: '2024.11 ~ 진행중',
        describe: [
          '현재 Vue.js 프로젝트를 <b>Next.js 마이그레이션</b>하는 작업을 진행 중입니다. <b>최종 목표</b>는 페이민트의 <b>모든 프론트엔드 프로젝트를 전환</b>하는 것이며, 현재는 <b>청구서</b> 프로젝트를 <b>우선적으로 진행</b>하고 있습니다. <b>Typescript, Jotai, styled-components, Tailwind, Husky, eslint, aws-sdk</b> 등을 스택으로 선정했으며, 폴더 구조와 커밋 스타일 <b>컨벤션</b>을 설정하여 <b>초기 구축을 완료</b>했습니다. 현재는 <b>개발 작업을 진행 중</b>이며, 최대한 <b>atomic 컴포넌트화를 지향</b>하여 유지보수성과 재사용성을 높일 수 있도록 작업하고 있습니다.',
        ],
      },
    ],
    hissam: [
      {
        title: '출결선생 - 출석체크/조회 페이지 개발',
        period: '2023.08 ~ 2023.09',
        describe: [
          '출결선생 서비스의 <b>출석체크, 출결조회 페이지를 개발</b>하였습니다.',
          "리스트형 UI를 통해 <b>학생들의 출석 상태를 관리</b>하며, 각 리스트의 <b>'등원, 하원, 결석, 철회'</b>의 동작은 <b>컴포넌트 간의 상호작용 및 데이터 흐름</b>을 고려하여 <b>독립적으로 처리</b>되도록 개발하였습니다.",
          "<b>'출결선생' 런칭 홍보 페이지</b>를 개발하였습니다. 네컷만화 형식으로 구성 된 페이지며 <b>단일 컴포넌트</b>로 각 회차를 <b>동적 라우팅으로 구분</b>하여 prev/next 버튼을 통한 <b>간편한 회차 탐색</b>이 되도록 개발하였습니다.",
        ],
      },
    ],
    other: [
      {
        title: '결제선생 및 출결선생 체험 키오스크',
        projectSummary:
          '결제선생 및 출결선생의 핵심 기능인 <b>청구서와 출결 메시지 발송을 체험</b>할 수 있는 페이지로, 서비스 이용을 간접적으로 경험할 수 있습니다.',
        period: '2024.01',
        describe: [
          '<b>HTML, CSS, 및 Vanilla JS를 사용</b>하여 페이지를 제작하였습니다.',
          "'Spline 3D'와 'Lottie' 이미지를 JavaScript로 연동해 <b>인터랙티브한 UI 페이지를 구현</b>했습니다.",
          '2일이라는 <b>제한된 기한 내</b>에 효율적으로 페이지를 완성하여 <b>높은 품질의 결과물을 제공</b>했습니다.',
        ],
      },
      {
        title: '결제선생 랜딩페이지',
        projectSummary: '결제선생 서비스 안내 랜딩페이지',
        period: '상시',
        describe: [
          '주로 신규 서비스 및 이벤트 제공 페이지의 추가 개발을 담당하여 작업했습니다.',
        ],
      },
    ],
  };

// 2023.11 ~ 2023.12 통합업무관리 (어드민2.0 - 경영팀 통합업무)
// - 고객 입금건 및 배송업무 요청에 대한 업무 처리 페이지
// - 입금건 내용 등록 팝업 및 상세 업무처리 페이지
// - 포인트 충전, 배송, 세금계산서 등의 기능을 제공
// 1. 입금건 및 배송건 등록은 새창 팝업으로 분리하고 업무 추가 요청시 팝업은 닫히고 postmessage로 페이지에서 등록 처리를 확인하고 업무 목록을 새로고침하도록 ui/ux를 구성함
// 2. 목록 및 카운트 조회, 업무 등록, 정보 수정, 업무 요청 처리 등의 화면 구성 및 api 연동 처리함

// 2023.10 ~ 2023.11 파트너 관리, 파트너 관리 회원
// 2023.10 ~ 쌤포인트 충전내역, 쌤포인트 상품관리 (일반충전, 자동충전, 증정)
