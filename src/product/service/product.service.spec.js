import * as cache from "../infrastructure/product.cacheFacade";
import * as http from "../infrastructure/product.httpFacade";
import {addToCart, getCartCount} from "./product.service";

const mockGetCache = jest.spyOn(cache, 'get');
const mockSaveCache = jest.spyOn(cache, 'save');
const mockSendProduct = jest.spyOn(http, 'sendProduct');

describe('Product service', () => {
  describe('Get cart count', () => {
    it('should return 0 if there is no cache', async () => {
      mockGetCache.mockResolvedValue(null);
      const sut = await getCartCount();
      expect(sut).toBe('0');
    });

    it('should return the cache value', async () => {
      mockGetCache.mockResolvedValue('2');
      const sut = await getCartCount();
      expect(sut).toBe('2');
    });
  });

  describe('Add to cart', () => {
    const productPayload = {
      id: '0001',
      colorCode: '0004',
      storageCode: '0002'
    }

    it('should make an http call and return the response value', async () => {
      mockSendProduct.mockResolvedValue({count: 1});
      const sut = await addToCart(productPayload);
      expect(mockSaveCache).toBeCalledTimes(1);
      expect(sut).toBe(1);
    });

    it('should fail the http call', async () => {
      mockSendProduct.mockImplementation(() => {
        throw new Error('Product not sent');
      });
      await expect(async () => await addToCart(productPayload)).rejects.toThrow();
      expect(mockSaveCache).toBeCalledTimes(0);
    });
  });
});
