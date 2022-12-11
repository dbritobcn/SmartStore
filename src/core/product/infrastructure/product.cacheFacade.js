export class ProductCacheFacade {
  key = 'products';
  expiration = 3600000;

  async get() {
    try {
      const value = localStorage.getItem(this.key);
      const parsedValue = JSON.parse(value);
      const now = new Date();
      if (now.getTime() > parsedValue.expiry) {
        localStorage.removeItem(this.key);
        return null;
      }
      return parsedValue.data;
    } catch {
      return null;
    }
  }

  async save(products) {
    try {
      const now = new Date();
      localStorage.setItem(this.key, JSON.stringify({
        data: products,
        expiry: now.getTime() + this.expiration,
      }));
    } catch {
      throw new Error('Error saving cache data');
    }
  }
}
