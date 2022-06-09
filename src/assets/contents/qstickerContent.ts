import quizGroupsPic from '@/assets/quizGroups.png';
import memberGroupsPic from '@/assets/memberGroups.png';
import quizEventsPic from '@/assets/quizEvents.png';
import quizMapsPic from '@/assets/quizMaps.png';
import viedoPic from '@/assets/viedoPic.png';
import analysisPic from '@/assets/analysis.png';

export default [
  {
    title: '建立題庫',
    img: quizGroupsPic,
    information: [
      '創建及編輯題目、題組，可依照以下項目進行客製化編輯：',
    ],
    items: [
      '圖片 / 文字',
      '單選題 / 複選題',
      '音檔輔助',
      '答案 / 選項亂序',
    ],
  },
  {
    title: '創建班級',
    img: memberGroupsPic,
    information: [
      '將相同性質的成員加入同個班級，建立成員群組，方便管理。',
    ],
    items: [
      '姓名',
      '代號 (學號)',
      '身分確認',
      // '角色設定',
    ],
  },
  {
    title: '排程測驗',
    img: quizEventsPic,
    information: [
      '設定相對應的題組和班級，進行時間、數量上的編排，可進行：',
    ],
    items: [
      '發送單個題組',
      '發送多個題組',
      '事先排程日 / 週 / 月計畫',
      '問卷調查',
    ],
  },
  {
    title: '知識地圖',
    img: quizMapsPic,
    information: [
      '設定相對應的題組和班級，進行時間、數量上的編排',
    ],
    items: [
    ],
  },
  {
    title: '分析報告',
    img: analysisPic,
    information: [
      '設定相對應的題組和班級，進行時間、數量上的編排',
    ],
    items: [
    ],
  },
  {
    title: '影片複習',
    img: viedoPic,
    information: [
      '設定相對應的題組和班級，進行時間、數量上的編排',
    ],
    items: [
    ],
  },
];
