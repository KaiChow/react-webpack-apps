import cookie from "react-cookies";

// 获取cookie
export const getCookie = (key: string) => {
  return cookie.load(key);
};
// 设置cookie
export const setCookie = (key: string, value: any) => {
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
  cookie.save(key, value, {
    path: "/",
    expires,
    maxAge: 1000,
    domain: "/",
    secure: true,
    httpOnly: true,
  });
};
// 删除cookie
export const removeCookie = (key: string) => {
  cookie.remove(key);
};
