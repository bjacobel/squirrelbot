#!/bin/bash

babel src --out-dir dist

pushd dist

cp ../package.json ./
npm install --production

cp -r ../secrets ./

zip -r function.zip ./*

aws lambda update-function-code \
  --function-name github-slack-notifier \
  --zip-file fileb://`pwd`/function.zip \
  | jq

popd dist
