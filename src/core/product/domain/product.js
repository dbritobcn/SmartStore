export class Product {
  id;
  brand;
  model;
  imageUrl;
  price;
  cpu;
  ram;
  so;
  screenResolution;
  battery;
  camera;
  size;
  weight;
  colors;
  storages;

  constructor(id, brand, model, imageUrl, price, cpu, ram, so, screenResolution, battery, camera, size, weight, colors, storages) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.imageUrl = imageUrl;
    this.price = price;
    this.cpu = cpu;
    this.ram = ram;
    this.so = so;
    this.screenResolution = screenResolution;
    this.battery = battery;
    this.camera = camera;
    this.size = size;
    this.weight = weight;
    this.colors = colors;
    this.storages = storages;
  }

  static createFromDB(props) {
    return new Product(
      props.id,
      props.brand,
      props.model,
      props.image_url,
      props.price,
      props.cpu,
      props.ram,
      props.so,
      props.screen_resolution,
      props.battery,
      props.camera,
      props.size,
      props.weight,
      props.colors,
      props.storages
    );
  }
}
