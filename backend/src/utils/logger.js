'use strict';

const { createLogger, config, transports, format } = require('winston');

const formatter = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.splat(),
  format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;

    return `${timestamp} [${level}]: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
    }`;
  })
);

const transportConsole = new transports.Console({
  handleExceptions: true,
});

const transportFile = new transports.File({
  filename: 'tmp/backend.log',
  handleExceptions: true,
});

class Logger {
  constructor() {
    this.logger = createLogger({
      levels: config.syslog.levels,
      level: 'info',
      exitOnError: false,
      format: formatter,
    });
    this.logger.add(transportConsole);
    this.logger.add(transportFile);
  }

  info(msg, meta) {
    this.logger.info(msg, meta);
  }

  debug(msg, meta) {
    this.logger.debug(msg, meta);
  }

  warning(msg, meta) {
    this.logger.warning(msg, meta);
  }

  error(msg, meta) {
    this.logger.error(msg, meta);
  }
}

module.exports = new Logger();
