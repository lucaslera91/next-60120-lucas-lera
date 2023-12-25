

export const findItem = (list, find) =>
  list.filter((item) => item.slug === find);

export const hasFalsyAttributes = (obj) =>
  Object.values(obj).some((value) => !value);

export const generateId = (prefix = "id") => {
  const uniqueId = Date.now().toString(36);
  return `${prefix}-${uniqueId}`;
};

export function setCookie(name, value, time) {
  const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;

  if (time) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + time);

    const cookieParts = [
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
      `expires=${expirationDate.toUTCString()}`,
    ];

    document.cookie = cookieParts.join("; ");
  }
}

export function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());

    if (cookieName === encodeURIComponent(name)) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null;
}

export function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(name)}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

export const authenticate = () => {
  return new Promise((res, rej) => {
    try {
      const result = getCookie("shareAppCookie");
      res(result);
    } catch (error) {
      rej(error);
    }
  });
};