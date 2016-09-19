export default jest.fn((params, callback) => {
  callback(null, { statusCode: 200 }, 'success');
});
