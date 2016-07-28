#!/bin/bash

pushd dist

zip -r function.zip ./*

aws --profile=bjacobel lambda update-function-code \
  --function-name github-slack-notifier \
  --zip-file fileb://`pwd`/function.zip

aws --profile=bjacobel lambda add-permission \
  --function-name github-slack-notifier \
  --action "lambda:InvokeFunction" \
  --principal "ses.amazonaws.com" \
  --source-account "956518986395" \
  --statement-id "GiveSESPermissionToInvokeFunction" \
  2>/dev/null 1>/dev/null


popd dist
