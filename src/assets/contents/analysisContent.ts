import knowledgePic from '@/assets/analysisPic/knowledgePic.png';
import lightPic from '@/assets/analysisPic/lightPic.png';
import prPic from '@/assets/analysisPic/prPic.png';
import familiaryPic from '@/assets/analysisPic/familiaryPic.png';
import completePic from '@/assets/analysisPic/completePic.png';
import groupStuGrade from '@/assets/analysisPic/groupStuGrade.png';
import groupRangePic from '@/assets/analysisPic/groupRangePic.png';

export default [
  {
    title: '學習成效知識地圖',
    img: knowledgePic,
    information: [
      '查看學生在這個章節中每個題組的作答狀況。',
    ],
    items: [
      '綠色 : 精熟',
      '黃色 : 尚可',
      '紅色 : 待加強',
      '藍色 : 未測',
    ],
  },
  {
    title: '全班作答燈號圖',
    img: lightPic,
    information: [
      '查看學生在各個題組中每次的作答狀況',
    ],
    items: [
      '橫軸 : 題組 & 縱軸 : 學生',
      '綠色 : 精熟',
      '黃色 : 尚可',
      '紅色 : 待加強',
      '空白 : 未測',
    ],
  },
  {
    title: '學生班級PR值',
    img: prPic,
    information: [
      '查看學生各題組作答成績在全班的PR值',
    ],
    items: [
      '藍線 : 顯示學生各題組成績在班級的PR值',
    ],
  },
  {
    title: '學生各題組作答成績與熟悉度',
    img: familiaryPic,
    information: [
      '查看學生各題組的熟悉度',
    ],
    items: [
      '綠色 : 精熟',
      '黃色 : 尚可',
      '紅色 : 待加強',
    ],
  },
  {
    title: '全班各題組完成率/答對率',
    img: completePic,
    information: [
      '查看全班各題組的完成率跟答對率',
    ],
    items: [
      '藍線 : 班級各題組的完成率',
      '綠線 : 班級各題組的答對率',
    ],
  },
  {
    title: '各題組學生成績',
    img: groupStuGrade,
    information: [
      '查看各題組學生的成績分布',
    ],
    items: [
      '橫軸 : 學生 & 縱軸 : 分數',
    ],
  },
  {
    title: '各題組成績分布',
    img: groupRangePic,
    information: [
      '查看各題組成績的級距分布',
    ],
    items: [
      '橫軸 : 級距 & 縱軸 : 人數',
    ],
  },

];
