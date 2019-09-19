var Steps = require('screener-runner/src/steps');

module.exports = {
  // full repository name for your project:
  projectRepo: 'KevinBerg/RunnerDemo',

  // this example assumes Environment Variables listed below exist on your system:
  apiKey: process.env.SCREENER_API_KEY,

  newSessionForEachState: true,

  // array of UI states to capture visual snapshots of.
  // each state consists of a url and a name.

  states: [
    {
      url: 'https://lms.schwab.com/login?response_type=token&clientid=sip&redirectUri=https%3A%2F%2Fintelligent-client.schwab.com%2Fsip%2F%23%2Flogin-success&state=SIP%3Alogin%3A0368a790-04e9-686d-17b9-7a208a35a332&region=HEN&scope=api&mode=login&nonce=fd6610c1-0b6b-acf8-c1ef-9e6f85c2209e',
      name: 'SIP',
      steps: new Steps()
        .focus('#LoginId')
        .setValue('#LoginId', 'myUsername')
        .focus('#Password')
        .setValue('#Password', 'myPassword')
        .click('#loginSubmitButton')
        .snapshot('Next Page')
        .end()
    },
  ],

  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    //tunnelIdentifier: 'myTunnel',
    maxConcurrent: 100
  }
};
