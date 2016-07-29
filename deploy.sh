#!/bin/bash

pushd dist

cp ../package.json ./
npm install --production

zip -r function.zip ./*

aws --profile=bjacobel lambda update-function-code \
  --function-name github-slack-notifier \
  --zip-file fileb://`pwd`/function.zip \
  | jq

popd dist
