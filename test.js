import { handler } from './src/index';

const mail = {
  message: require('./message.js').data
};

handler(mail, null, (err, msg) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(msg);
  }
});
