export const languages = [
  {
    name: "English",
    code: "en",
    data: {
      name: { chName: "周翊庭", engName: "Leon Chou" },
      position: "前端工程師",
      contacts: {
        phone: "0937-016-454",
        email: "iamyiii0328@gmail.com",
        resume104: {
          title: "Resume on 104",
          link: "https://pda.104.com.tw/profile/preview?vno=75wq5udeo",
        },
      },
      profile:
        "擁有獨立開發與團隊合作的能力，注意細節、重視協作與分享。善於溝通與問題分析，喜歡持續學習與成長。享受解決問題的成就感，將挑戰視為前進的推力。",
      skills: [
        "HTML5 | CSS3",
        "SASS | SCSS",
        "Vue",
        "Javascript",
        "jQuery",
        "Bootstrap | BULMA",
        "PHP",
      ],
      experience: [
        {
          workPosition: "前端工程師 Frontend Engineer",
          workPeriod: "2021-2022",
          companyName: "鵠崙設計有限公司",
          description: [
            "開發Web、Mobile Web及維護（形象網站、購物網站、活動網站、客戶需求功能）",
            "建立並優化開發架構，提高前端團隊開發效率",
            "重視UI/UX，與專案經理及產品設計師溝通",
          ],
        },
        {
          workPosition: "發動機維修工程師 Maintenance Personnel",
          workPeriod: "2018-2019",
          companyName: "中華航空股份有限公司",
          description: [
            "依據原製造廠的原文技術手冊制定工作單。",
            "負責APU與GE CF6、CFM引擎，協助主工程師完成工單作業",
          ],
        },
        {
          workPosition: "主任兼教練 Personal Trainer",
          workPeriod: "2015-2017",
          companyName: "柏文健康事業股份有限公司",
          description: [],
        },
        {
          workPosition:
            "國外業務專員兼技術翻譯 Overseas Sales hold concurrent posts as Technical Translator",
          workPeriod: "2014-2015",
          companyName: "美西企業股份有限公司",
          description: [
            "分析客戶所在國的產品趨勢，提供商品建議。",
            "負責翻譯英文、西班牙文技術文件。",
          ],
        },
      ],
      education: [
        {
          degreeTitle: "電機工程學系",
          institutionName: "健行科技大學",
          studyDirection: "Study direction",
        },
        {
          degreeTitle: "西班牙語文學系",
          institutionName: "淡江大學",
          studyDirection: "Study direction",
        },
      ],
    },
    resumeLabels: {
      contacts: "Contacts",
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      professional: "Professional",
      education: "Education",
    },
  },
];

export function getCurrentLanguage() {
  return languages[0];
}
