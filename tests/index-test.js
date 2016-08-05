handler(mail, null, (err, msg) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(msg);
  }
});
