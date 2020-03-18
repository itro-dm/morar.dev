import fetch from 'isomorphic-unfetch';

export const getAboutPageData = async (): Promise<any> => {
  return await fetch(`http://localhost:3000/about`);
};
