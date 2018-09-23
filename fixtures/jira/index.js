/**
 * Get a log stream's event from the API
 * AWS_PROFILE=bjacobel AWS_DEFAULT_REGION=us-east-1 aws logs get-log-events --log-group-name="/aws/lambda/github-slack-notifier" --log-stream-name="2018/08/07/[\$LATEST]a8fcd913bd7144c99433965995a2c15d" | jq -r ".events[1].message" | cut -f3 | jq -r ".errorMessage" | jq -r ".event"
 */

module.exports = {
  priorityChange: require("./priorityChange"),
};
