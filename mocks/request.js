export default jest.fn((params, callback) => {
  callback(null, { statusCode: 200 }, {
    avatar_url: `https://${params.uri}.jpg`,
  });
});
