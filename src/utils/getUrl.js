// Vite沒有require()，所以封裝一個取得圖片的URL工具

export const getAssetURL = (image) => {
  // 参数一: 相對路徑
  // 参数二: 當前路徑的URL
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
