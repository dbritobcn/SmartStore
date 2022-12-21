import * as productCacheFacade from "./product.cacheFacade";

beforeEach(() => {
  window.localStorage.clear();
  localStorage.clear();
});

describe('ProductCacheFacade', () => {
  it('should save value to local storage', async () => {
    await productCacheFacade.save('key', 'value');
    const value = await productCacheFacade.get('key');
    expect(value).toBe('value');
  });

  it('should save value with expired date and fail getting it after expire', async () => {
    jest.useFakeTimers("modern");
    await productCacheFacade.save('key', 'value', 500);
    setTimeout(async () => {
      const valueAfterExpireTime = await productCacheFacade.get('key');
      expect(valueAfterExpireTime).toBeNull();
    }, 1000);
    const value = await productCacheFacade.get('key');
    expect(value).toBe('value');
    jest.runAllTimers();
  });
});
