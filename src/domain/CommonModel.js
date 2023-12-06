class CommonModel {
  constructor(model) {
    this.id = model.id ?? 0;
    this.create_time =
      model.create_time ?? new Date().toISOString().replace("Z", "");
  }
}

module.exports = CommonModel;
