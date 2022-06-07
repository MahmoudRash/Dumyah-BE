const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const configFolder = path.resolve(__dirname, './environment');

/**
 * Validate NODE_ENV existence
 */
const validateEnvironmentVariable = () => {
  if (!process.env.NODE_ENV) {
    // eslint-disable-next-line no-console
    console.warn(
      'configuration::validateEnvironmentVariable',
      '+ Warn: NODE_ENV is not defined! Using default development environment'
    );
    process.env.NODE_ENV = 'development';
  }
  if (!process.env.NODE_APP) {
    // eslint-disable-next-line no-console
    console.warn(
      'configuration::validateEnvironmentVariable',
      '+ Warn: NODE_APP is not defined! Using default name'
    );
    process.env.NODE_APP = 'dumyah-backend';
  }
};

/**
 * Initialize global configuration
 */
const initGlobalConfig = () => {
  validateEnvironmentVariable();

  const environment = process.env.NODE_ENV;
  const configFiles = [
    path.join(configFolder, 'global.js'),
    path.join(configFolder, `${environment}.js`),
  ];

  const configs = configFiles.map((configFilePath) => {
    if (!fs.existsSync(configFilePath)) {
      throw new Error(
        `environment file not found for ${environment}, ${configFilePath}, ${__dirname}`
      );
    }

    return require(configFilePath);
  });

  const mergedConfigs = _.merge({}, ...configs);

  const pkg = require(path.resolve(configFolder, '../../package.json'));

  mergedConfigs.app = {
    name: pkg.name,
    packageVersion: pkg.version,
  };

  mergedConfigs.environment = environment;

  return mergedConfigs;
};

const globalConfig = initGlobalConfig();

const get = () => {
  const config = _.cloneDeep(globalConfig);
  return config;
};

module.exports = {
  get,
};
