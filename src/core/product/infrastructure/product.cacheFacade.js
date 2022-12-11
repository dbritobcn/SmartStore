export class ProductCacheFacade {
  async get(key) {
    try {
      const value = localStorage.getItem(key);
      const parsedValue = JSON.parse(value);
      const now = new Date();
      if (now.getTime() > parsedValue.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return parsedValue.data;
    } catch {
      return null;
    }
  }

  async save(key, value, expiration = 3600000) {
    try {
      const now = new Date();
      localStorage.setItem(key, JSON.stringify({
        data: value,
        expiry: now.getTime() + expiration,
      }));
    } catch {
      throw new Error('Error saving cache data');
    }
  }
}
