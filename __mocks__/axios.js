export default {
  post: jest.fn(() => Promise.resolve({ data: "stripe.link" })),
};
