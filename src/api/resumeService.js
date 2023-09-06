export const ResumeData = [
  {
    name: "English",
    code: "en",
    data: {
      name: { chName: "周翊庭", engName: "Leon Chou" },
      position: "前端工程師",
      phone: "0937-016-454",
      email: "iamyiii0328@gmail.com",
      tags: ["＃健身小老師", "＃翻譯小幫手", "＃程式小夥伴"],
      downloadLink: "https://www.youtube.com/watch?v=0-h16HmNmVY",
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
          workPeriod: "2021",
          companyName: "鵠崙設計有限公司",
          workPosition: "前端工程師",
          workPositionEg: "Frontend Engineer",
        },
        {
          workPeriod: "2018",
          companyName: "中華航空股份有限公司",
          workPosition: "發動機維修工程師",
          workPositionEg: "Maintenance Personnel",
        },
        {
          workPeriod: "2015",
          companyName: "柏文健康事業股份有限公司",
          workPosition: "主任兼教練",
          workPositionEg: "Personal Trainer",
        },
        {
          workPeriod: "2014",
          companyName: "美西企業股份有限公司",
          workPosition: "國外業務專員兼技術翻譯",
          workPositionEg:
            "Overseas Sales hold concurrent posts as Technical Translator",
        },
      ],
      education: [
        {
          degreeTitle: "電機工程學系",
          institutionName: "健行科技大學",
          studyDirection: "畢業系總排名第二名",
        },
        {
          degreeTitle: "西班牙語文學系",
          institutionName: "淡江大學",
          studyDirection: "系學會幹部、外語系活動統籌",
        },
      ],
      language: ["中文", "英文", "日文", "西班牙文"],
    },
    resumeLabels: {
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      language: "Language",
      professional: "Professional",
    },
  },
];

export function getCurrentLanguage() {
  return ResumeData[0];
}
