export enum Page {
  TOP = 'TOP',
  CONCEPT = 'CONCEPT',
  ACCESS = 'ACCESS'
}

export enum Theme {
  MODERN = 'Modern',
  ORGANIC = 'Organic',
  ROYAL = 'Royal'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface ShopInfo {
  name: string;
  address: string;
  zip: string;
  phone: string;
  hours: string;
  holidays: string;
  prices: { label: string; price: string }[];
}

export const SHOP_DATA: ShopInfo = {
  name: "THE CUT CLUB",
  zip: "314-0024",
  address: "茨城県鹿嶋市鉢形1084-1",
  phone: "0299-84-5556",
  hours: "9:00〜19:00 (最終受付18:45まで)",
  holidays: "毎週月曜日",
  prices: [
    { label: "カット", price: "1,300円" },
    { label: "前髪カット", price: "500円" }
  ]
};