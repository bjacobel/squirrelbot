### squirrelbot

Get your GitHub notifications in Slack.

Nobody likes being buried under email notifications - especially when the GitHub conversations flooding your inbox don't even include you. Squirrelbot pipes all those notifications to Slack, so can listen only for your name or highlight words, and maintain a full searchable archive.

Supports code/diff formatting:
![](https://i.bjacobel.com/20160823-mq9ff.png)

And emojis:
![](https://i.bjacobel.com/20160823-sgjrf.png)

And separating messages based on the author:
![](https://i.bjacobel.com/20160823-oe4jj.png)


It's pretty cool.


## Setup

To use it, you'll need a Mailgun account set up to forward email to a webhook. That webhook is an API Gateway endpoint that forwards to this Lambda. More detailed instructions to come later.
