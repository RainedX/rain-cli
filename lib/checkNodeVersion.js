const semver = require('semver');

module.exports = function checkNodeVersion(minNodeVersion) {
  const nodeVersion = semver.valid(semver.coerce(process.version));
  return semver.satisfies(nodeVersion, '>=' + minNodeVersion);
};