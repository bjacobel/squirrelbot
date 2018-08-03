#!/bin/bash

set -e

rsync -a src/* secrets package.json yarn.lock dist

pushd dist

yarn install --production=true

zip -ru function.zip ./

AWS_PROFILE=bjacobel aws lambda update-function-code \
  --region us-east-1 \
  --function-name github-slack-notifier \
  --zip-file fileb://`pwd`/function.zip

popd
