pushd dist

zip -r function.zip ./*

aws --profile=bjacobel lambda update-function-code \
  --function-name github-slack-notifier \
  --zip-file fileb://`pwd`/function.zip

popd dist
