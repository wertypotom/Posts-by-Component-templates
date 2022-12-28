export const getPages = (totalPostCount: number, limit: number): number[] => {
  const pagesNum = Math.ceil(totalPostCount / limit);
  const pages = [];

  for (let index = 0; index < pagesNum; index++) {
    pages.push(index + 1);
  }

  return pages;
};
