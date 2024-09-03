// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "場作りブログ";
export const SITE_DESCRIPTION = "卒業制作で場を作る様子を記録するWebサイトです";
export const SITE_ORIGIN = "blog.tsum.ug";

export const TSUMUGU_PROFILE_JSON = {
  name: "山口紡",
  department: "情報デザイン学科",
  photo:
    "https://d3djg0dm3dsv8.cloudfront.net/0a24dd50d3f9ce86bec0144ef3d97a6435060cc7a76b8e3457c0852a3567eac0.jpeg",
  grade: "4年生",
  color: "#ffffff",
};

export const COLORS = [
  "#823636",
  "#823670",
  "#463682",
  "#365A82",
  "#36826C",
  "#598236",
  "#828236",
  "#826636",
];

const DESIGN_DEFAULT_ICON_PATH =
  "https://d3djg0dm3dsv8.cloudfront.net/0769f9df95f0db688c219432f320b9dbde03dbe8c28a2c00970413b9afceb3a9.svg";
const PAINT_DEFAULT_ICON_PATH =
  "https://d3djg0dm3dsv8.cloudfront.net/152d01e10af99b035ff7de34311e592d4c60563abed7d478350d86b5eb00b3b9.svg";
const WORKS_DEFAULT_ICON_PATH =
  "https://d3djg0dm3dsv8.cloudfront.net/e1b97f72bc3312223afa51908690eaca892c32766fa53f89c16dab7bf5b336f3.svg";
export const DEPARTMENT_AND_ICONS = {
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
