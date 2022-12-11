export class ProductCacheFacade {
  expirationTime = 3600000;

  async get(key) {
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

  async save(key, value, expiration = false) {
    try {
      const now = new Date();
      const data = (expiration) ?
        {
          data: value,
          expiry: now.getTime() + this.expirationTime,
        } :
        {
          data: value
        };
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      throw new Error('Error saving cache data');
    }
  }
}
