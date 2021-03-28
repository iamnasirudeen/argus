class ManagerBase {
  constructor() {
    return this.createInstance.call(this, arguments);
  }

  getInstance() {
    return this.instance;
  }

  initInstance(constructorArgs) {}

  createInstance() {
    if (this.instance && this.instance instanceof this) {
      return this.getInstance();
    } else {
      this.initInstance.call(this, arguments);
      this.instance = this;
    }
  }
}

module.exports = ManagerBase;

class UserManager extends ManagerBase {
  constructor(ioInstance) {
    return super(ioInstance);
  }

  /**
   * Returns the socket instance
   */
  getIOInstance() {
    return this.ioInstance;
  }
  setIOInstance(ioInstance) {
    this.ioInstance = ioInstance;
  }

  initInstance(ioInstance) {
    super.initInstance(ioInstance);
    this.usersMap = new Map();
    this.ioInstance = ioInstance;
  }
}

module.exports = new UserManager();
