export const USER_QUERY = `
{
  user {
    _id,
    name,
    email
    picture
  }
}
`;

export const GET_PINS_QUERY = `
{
  getPins {
    _id
    createdAt
    title
    image
    content
    latitude
    longitude
    author {
      _id
      name
      email
      picture
    }
    comments {
      text
      createdAt
      author {
        _id
        name
        picture
      }
    }
  }
}
`;
