import { handler } from './src/index';

handler(null, null, (err, msg) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(msg);
  }
});
