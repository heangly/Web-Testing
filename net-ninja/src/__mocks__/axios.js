const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Laith',
          last: 'Harb'
        },

        picture: {
          large: 'https://randomuser.me/api/portraits/men/19.jpg'
        },

        login: {
          username: 'The GOAT'
        }
      }
    ]
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}
