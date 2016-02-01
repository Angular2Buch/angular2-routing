// this allows default location strategy in ember-cli / angular-cli
module.exports = function(environment) {
  return {
    environment: environment,
    baseURL: '/',
    locationType: 'auto'
  };
};
