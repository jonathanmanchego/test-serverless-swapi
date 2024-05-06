
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'manchas',
  applicationName: 'sls-swapi',
  appUid: '0ypQtnlmmTRc3jM3gp',
  orgUid: 'bbc64476-0093-43b3-bfac-0a65ca5eec7d',
  deploymentUid: '4da7685e-ea5b-4cb8-a4a3-142c5b501ce2',
  serviceName: 'api-swapi-sls',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '7.2.0',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'api-swapi-sls-dev-hello', timeout: 6 };

try {
  const userHandler = require('./handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.hello, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}