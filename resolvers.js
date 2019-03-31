const user = {
  _id: "1",
  name: "John",
  email: "john.doe@email.com",
  picture: "https://cloudinary.com/abcdef"
};

module.exports = {
  Query: {
    user: () => user
  }
};
