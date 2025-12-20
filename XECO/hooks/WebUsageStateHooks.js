// Data derived from https://gs.statcounter.com/os-market-share/desktop/worldwide/2023
// And https://gs.statcounter.com/os-market-share/mobile/worldwide/2023
// And https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/2023
// For the month of December 2023

export const COLORS = [
  '#44A08D',
  '#126F84',
  '#0B446D',
  '#033356',
  '#012641',
  '#181E28',
];
export const desktopOS = [
  {
    label: 'Contingency',
    value: 70,
  },
  {
    label: 'Investor',
    value: 30,
  },
  {
    label: 'Ligal & Regulation',
    value: 20,
  },
  {
    label: 'Business Development',
    value: 20,
  },
  {
    label: 'Poland',
    value: 15,
  },
  {
    label: 'Czec Republic',
    value: 50,
  },
];

export const mobileOS = [
  {
    label: 'Contingency',
    value: 70,
  },
  {
    label: 'Investor',
    value: 30,
  },
  {
    label: 'Ligal & Regulation',
    value: 20,
  },
  {
    label: 'Business Development',
    value: 20,
  },
  {
    label: 'Poland',
    value: 15,
  },
  {
    label: 'Czec Republic',
    value: 50,
  },
];

export const platforms = [
  {
    label: 'Mobile',
    value: 59.12,
  },
  {
    label: 'Desktop',
    value: 40.88,
  },
];

const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
  ...mobileOS.map((v, index) => ({
    id: index,
    label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
    value: normalize(v.value, platforms[0].value),
    color: COLORS[index % COLORS.length],
  })),

  ...desktopOS.map((v, index) => ({
    id: index + mobileOS.length,
    label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
    value: normalize(v.value, platforms[1].value),
    color: COLORS[(index + mobileOS.length) % COLORS.length],
  })),
];

export const valueFormatter = (item) => `${item.value}%`;
