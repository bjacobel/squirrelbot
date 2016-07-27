import Vinz from 'vinz';

export const handler = (event, context, callback) => {  // eslint-disable-line import/prefer-default-export
  const vinz = new Vinz();

  vinz.get('slackWebhookId').then((secrets) => {
    const [slackWebhookId] = secrets;
    const webhook = `https://hooks.slack.com/services/${slackWebhookId}`;
    console.log(event);
    callback(null, 'success');
  });
};
