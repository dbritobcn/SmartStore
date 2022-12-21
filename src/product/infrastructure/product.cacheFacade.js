export const get = async (key) => {
  try {
    const value = localStorage.getItem(key);
    const parsedValue = JSON.parse(value);
    const now = new Date();
    if (parsedValue.expiry && now.getTime() > parsedValue.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return parsedValue.data;
  } catch {
    return null;
  }
}

export const save = async (key, value, ttl = 3600000) => {
  const now = new Date();
  const data = (ttl > 0) ?
    {
      data: value,
      expiry: now.getTime() + ttl,
    } :
    {
      data: value
    };
  localStorage.setItem(key, JSON.stringify(data));
}
