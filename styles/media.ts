interface ISize {
  [key: string]: number;
}

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }
//
// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }
//
// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
//
// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

///
// @media (min-width: 576px) {
// .container {
//     max-width: 540px;
//   }
// }
//
// @media (min-width: 768px) {
// .container {
//     max-width: 720px;
//   }
// }
// 62
// @media (min-width: 992px) {
// .container {
//     max-width: 960px;
//   }
// }
//
// @media (min-width: 1200px) {
// .container {
//     max-width: 1140px;
//   }
// }

export const devicesSizes: ISize = {
  xmobile: 36, // 576px
  tablet: 48, // 768px
  laptop: 62, // 992px
  desktop: 75, // 1200px
};
// TODO: convert old medias approach to this one
export const Devices = {
  xmobile: `@media (min-width: 36em)`,
  tablet: `@media (min-width: 48em)`,
  laptop: `@media (min-width: 62em)`,
  desktop: `@media (min-width: 75em)`,
};

export const media = (Object.keys(devicesSizes) as Array<keyof typeof devicesSizes>).reduce(
  (acc, key) => {
    acc[key] = (style: string) => `@media (min-width: ${devicesSizes[key]}em) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
);
