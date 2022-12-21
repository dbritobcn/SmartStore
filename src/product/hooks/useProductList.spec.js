import {useProductList} from "./useProductList";
import products from '../../mocks/products.json';
import {renderHook} from '@testing-library/react-hooks';
import * as cache from "../infrastructure/product.cacheFacade";
import * as http from "../infrastructure/product.httpFacade";
import {ProductDto} from "../mappers/product.dto";

const mockCache = {
  get: jest.spyOn(cache, 'get'),
  save: jest.spyOn(cache, 'save'),
};

const mockHttp = {
  getList: jest.spyOn(http, 'getList'),
};

describe('useProductList', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return the value from the cache', async () => {
    const expectedValue = products;
    mockCache.get.mockResolvedValue(expectedValue);

    const {result, waitFor} = await renderHook(() => useProductList());
    await waitFor(() => expect(mockCache.get).toHaveBeenCalled());

    const value = await result.current[0];
    expect(value).toEqual(expectedValue);
    expect(mockCache.get).toHaveBeenCalledWith('products');
    expect(mockHttp.getList).not.toHaveBeenCalled();
    expect(mockCache.save).not.toHaveBeenCalled();
  });

  it('should return the value from the HTTP service', async () => {
    const expectedValue = products.map(ProductDto.createFromDB);
    mockCache.get.mockResolvedValue(null);
    mockHttp.getList.mockResolvedValue(products.map(ProductDto.createFromDB));

    const {result, waitFor} = await renderHook(() => useProductList());
    await waitFor(() => expect(mockCache.get).toHaveBeenCalled());
    await waitFor(() => expect(mockHttp.getList).toHaveBeenCalled());

    const value = await result.current[0];
    expect(value).toEqual(expectedValue);
    expect(mockCache.get).toHaveBeenCalledWith('products');
    expect(mockCache.save).toHaveBeenCalledWith('products', expectedValue);
    expect(mockHttp.getList).toHaveBeenCalled();
  });
});
