export class ProductDto {
  static sendProductToCart(props) {
    return {
      id: props.id,
      colorCode: props.selectedColor,
      storageCode: props.selectedStorage
    }
  }
}
