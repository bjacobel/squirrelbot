#!/bin/bash

set -e

$(npm bin)/babel src --out-dir dist

cd dist

cp ../package.json ./
npm install --production

cp -r ../secrets ./

zip -ru function.zip ./*

aws lambda update-function-code \
  --region us-east-1 \
  --function-name github-slack-notifier \
  --zip-file fileb://`pwd`/function.zip

cd ../
