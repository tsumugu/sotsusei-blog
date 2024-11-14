// 統計の計算用
// node src/analytics.js で実行

const DESIGN_DEFAULT_ICON_PATH =
  "https://d3djg0dm3dsv8.cloudfront.net/0769f9df95f0db688c219432f320b9dbde03dbe8c28a2c00970413b9afceb3a9.svg";
const PAINT_DEFAULT_ICON_PATH =
  "https://d3djg0dm3dsv8.cloudfront.net/152d01e10af99b035ff7de34311e592d4c60563abed7d478350d86b5eb00b3b9.svg";
const WORKS_DEFAULT_ICON_PATH =
  "https://d3djg0dm3dsv8.cloudfront.net/e1b97f72bc3312223afa51908690eaca892c32766fa53f89c16dab7bf5b336f3.svg";
const DEPARTMENT_AND_ICONS = {
  japanese: {
    name: "絵画学科 日本画専攻",
    icon: PAINT_DEFAULT_ICON_PATH,
  },
  oil: {
    name: "絵画学科 油画専攻",
    icon: PAINT_DEFAULT_ICON_PATH,
  },
  "graphic-art": {
    name: "絵画学科 版画専攻",
    icon: PAINT_DEFAULT_ICON_PATH,
  },
  sculpture: {
    name: "彫刻学科",
    icon: WORKS_DEFAULT_ICON_PATH,
  },
  works: {
    name: "工芸学科",
    icon: WORKS_DEFAULT_ICON_PATH,
  },
  "graphic-design": {
    name: "グラフィックデザイン学科",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  product: {
    name: "生産デザイン学科 プロダクトデザイン専攻",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  textile: {
    name: "生産デザイン学科 テキスタイルデザイン専攻",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  env: {
    name: "建築・環境デザイン学科",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  media: {
    name: "情報デザイン学科 メディア芸術コース",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  interaction: {
    name: "情報デザイン学科 情報デザインコース",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  "art-studies": {
    name: "芸術学科",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  integrated: {
    name: "統合デザイン学科",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  drama: {
    name: "演劇舞踊デザイン学科 演劇舞踊コース",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
  scenography: {
    name: "演劇舞踊デザイン学科 劇場美術デザインコース",
    icon: DESIGN_DEFAULT_ICON_PATH,
  },
};

const people = [
  {
    name: "Aさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "Bさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "Cさん",
    department: DEPARTMENT_AND_ICONS.product,
    grade: "院2年生",
  },
  {
    name: "Dさん",
    department: DEPARTMENT_AND_ICONS.product,
    grade: "院2年生",
  },
  {
    name: "Eさん",
    department: DEPARTMENT_AND_ICONS.oil,
    grade: "4年生",
  },
  {
    name: "Aさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "1年生",
  },
  {
    name: "Bさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "1年生",
  },
  {
    name: "Cさん",
    department: DEPARTMENT_AND_ICONS.product,
    grade: "1年生",
  },
  {
    name: "Dさん",
    department: DEPARTMENT_AND_ICONS.product,
    grade: "1年生",
  },
  {
    name: "Eさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "3年生",
  },
  {
    name: "Fさん",
    department: DEPARTMENT_AND_ICONS.oil,
    grade: "1年生",
  },
  {
    name: "Aさん",
    department: DEPARTMENT_AND_ICONS.sculpture,
    grade: "1年生",
  },
  {
    name: "Bさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "3年生",
  },
  {
    name: "Cさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "3年生",
  },
  {
    name: "Dさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "3年生",
  },
  {
    name: "Eさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "3年生",
  },
  {
    name: "Fさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "3年生",
  },
  {
    name: "Gさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "3年生",
  },
  {
    name: "Hさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "3年生",
  },
  {
    name: "Iさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "4年生",
  },
  {
    name: "S.Hさん",
    department: DEPARTMENT_AND_ICONS.textile,
    grade: "4年生",
  },
  {
    name: "Y.Aさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "1年生",
  },
  {
    name: "N.Kさん",
    department: DEPARTMENT_AND_ICONS.textile,
    grade: "3年生",
  },
  {
    name: "Mさん",
    department: DEPARTMENT_AND_ICONS.textile,
    grade: "3年生",
  },
  // {
  //   name: "S.Sさん",
  //   department: DEPARTMENT_AND_ICONS.works,
  //   grade: "3年生",
  //   memo: "2回目",
  // },
  {
    name: "Mさん",
    department: DEPARTMENT_AND_ICONS.media,
    grade: "2年生",
  },
  {
    name: "Kさん",
    department: DEPARTMENT_AND_ICONS.env,
    grade: "2年生",
  },
  {
    name: "Wさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "4年生",
  },
  {
    name: "I.Eさん",
    department: DEPARTMENT_AND_ICONS.textile,
    grade: "3年生",
  },
  // {
  //   name: "N.Gさん",
  //   department: DEPARTMENT_AND_ICONS.textile,
  //   grade: "3年生",
  //   memo: "2回目",
  // },
  {
    name: "U.Tさん",
    department: DEPARTMENT_AND_ICONS.textile,
    grade: "3年生",
    memo: "いとこ",
  },
  // {
  //   name: "N.Kさん",
  //   department: DEPARTMENT_AND_ICONS.textile,
  //   grade: "3年生",
  //   memo: "2回目",
  // },
  {
    name: "K.Nさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "4年生",
  },
  {
    name: "T.Sさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "4年生",
  },
  {
    name: "R.Yさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "4年生",
  },
  {
    name: "S.Jさん",
    department: DEPARTMENT_AND_ICONS["graphic-design"],
    grade: "2年生",
  },
  {
    name: "S.Nさん",
    department: DEPARTMENT_AND_ICONS["graphic-design"],
    grade: "2年生",
  },
  {
    name: "H.Yさん",
    department: DEPARTMENT_AND_ICONS["graphic-design"],
    grade: "1年生",
  },
  {
    name: "M.Yさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "A.Hさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "T.Uさん",
    department: DEPARTMENT_AND_ICONS["graphic-design"],
    grade: "1年生",
  },
  {
    name: "M.Dさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "H.Tさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "T.T(1年)さん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "I.Dさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "B.Jさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "1年生",
  },
  {
    name: "T.T(4年)さん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "4年生",
  },
  // {
  //   name: "A.Wさん",
  //   department: DEPARTMENT_AND_ICONS.interaction,
  //   grade: "4年生",
  //   memo: "2回目",
  // },
  {
    name: "Y.Iさん",
    department: DEPARTMENT_AND_ICONS.env,
    grade: "1年生",
  },
  {
    name: "Y.Kさん",
    department: DEPARTMENT_AND_ICONS.env,
    grade: "1年生",
  },
  {
    name: "M.Aさん",
    department: DEPARTMENT_AND_ICONS.interaction,
    grade: "4年生",
  },
  // {
  //   name: "N.Gさん",
  //   department: DEPARTMENT_AND_ICONS.textile,
  //   grade: "3年生",
  //   memo: "3回目",
  // },
  // {
  //   name: "N.Kさん",
  //   department: DEPARTMENT_AND_ICONS.textile,
  //   grade: "3年生",
  //   memo: "3回目",
  // },
  // {
  //   name: "Y.Aさん",
  //   department: DEPARTMENT_AND_ICONS.works,
  //   grade: "1年生",
  //   memo: "2回目",
  // },
  {
    name: "Y.Yさん",
    department: DEPARTMENT_AND_ICONS["graphic-design"],
    grade: "1年生",
  },
  {
    name: "S.Yさん",
    department: DEPARTMENT_AND_ICONS["graphic-design"],
    grade: "1年生",
  },
  {
    name: "H.Tさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "1年生",
  },
  {
    name: "H.Sさん",
    department: DEPARTMENT_AND_ICONS.env,
    grade: "1年生",
  },
  {
    name: "I.Aさん",
    department: DEPARTMENT_AND_ICONS.env,
    grade: "1年生",
  },
  {
    name: "Y.Mさん",
    department: DEPARTMENT_AND_ICONS["graphic-art"],
    grade: "3年生",
  },
  {
    name: "Gさん",
    department: DEPARTMENT_AND_ICONS.works,
    grade: "3年生",
  },
  // {
  //   name: "N.Kさん",
  //   department: DEPARTMENT_AND_ICONS.textile,
  //   grade: "3年生",
  //   memo: "4回目",
  // },
  {
    name: "Y.Tさん",
    department: DEPARTMENT_AND_ICONS.textile,
    grade: "3年生",
  },
  {
    name: "H.Kさん",
    department: DEPARTMENT_AND_ICONS.textile,
    grade: "3年生",
  },
  {
    name: "N.Eさん",
    department: DEPARTMENT_AND_ICONS.textile,
    grade: "3年生",
  },
];

console.log(people.length);

const departmentCount = people.reduce((acc, person) => {
  const departmentName = person.department.name;
  acc[departmentName] = (acc[departmentName] || 0) + 1;
  return acc;
}, {});
const sortedDepartmentCount = Object.fromEntries(
  Object.entries(departmentCount).sort((a, b) => b[1] - a[1]),
);

console.log(sortedDepartmentCount);
