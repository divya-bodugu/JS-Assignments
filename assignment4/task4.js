class Logger {
  static instance = null;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }


  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message) {
    console.log(message);
  }
}


const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();


console.log(logger1 === logger2);

logger1.log("Application is started");
logger2.log(" Singleton is working");