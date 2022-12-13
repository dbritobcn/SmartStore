export class ProductDto {
  static sendToCart(props) {
    return {
      id: props.id,
      colorCode: props.selectedColor,
      storageCode: props.selectedStorage
    }
  }

  static createFromDB(props) {
    try {
      return {
        id: props.id,
        brand: props.brand,
        model: props.model,
        imageUrl: props.image_url,
        price: props.price,
        cpu: props.cpu,
        ram: props.ram,
        so: props.so,
        screenResolution: props.screen_resolution,
        battery: props.battery,
        camera: props.camera,
        size: props.size,
        weight: props.weight,
        colors: props.colors,
        storages: props.storages
      };
    } catch {
      throw new Error('Wrong product params');
    }
  }
}
