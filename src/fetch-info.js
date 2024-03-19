export const fetchInfo = async () => {
  return await fetch('https://tvzvezda.ru/api/v1/video/news/?page=1&size=6')
    .then((res) => res.json())
    .then((res) => res);
};
