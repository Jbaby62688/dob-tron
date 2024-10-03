class TronConfig {
  static _fullHost = '';

  static get fullHost() {
    return this._fullHost;
  }

  static set fullHost(value) {
    this._fullHost = value;
  }
}

module.exports = TronConfig;