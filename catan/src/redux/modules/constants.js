const hexRelations = {
  0: {
    topLeft: null,
    topRight: null,
    right: 1,
    bottomRight: 4,
    bottomLeft: 3,
    left: null
  },
  1: {
    topLeft: null,
    topRight: null,
    right: 2,
    bottomRight: 5,
    bottomLeft: 4,
    left: 0
  },
  2: {
    topLeft: null,
    topRight: null,
    right: null,
    bottomRight: 6,
    bottomLeft: 5,
    left: 1
  },
  3: {
    topLeft: null,
    topRight: 0,
    right: 4,
    bottomRight: 8,
    bottomLeft: 7,
    left: null
  },
  4: {
    topLeft: 0,
    topRight: 1,
    right: 5,
    bottomRight: 9,
    bottomLeft: 8,
    left: 3
  },
  5: {
    topLeft: 1,
    topRight: 2,
    right: 6,
    bottomRight: 10,
    bottomLeft: 9,
    left: 4
  },
  6: {
    topLeft: 2,
    topRight: null,
    right: null,
    bottomRight: 11,
    bottomLeft: 10,
    left: 5
  },
  7: {
    topLeft: null,
    topRight: 3,
    right: 8,
    bottomRight: 12,
    bottomLeft: null,
    left: null
  },
  8: {
    topLeft: 3,
    topRight: 4,
    right: 9,
    bottomRight: 13,
    bottomLeft: 12,
    left: 7
  },
  9: {
    topLeft: 4,
    topRight: 5,
    right: 10,
    bottomRight: 14,
    bottomLeft: 13,
    left: 8
  },
  10: {
    topLeft: 5,
    topRight: 6,
    right: 11,
    bottomRight: 15,
    bottomLeft: 14,
    left: 9
  },
  11: {
    topLeft: 6,
    topRight: null,
    right: null,
    bottomRight: null,
    bottomLeft: 15,
    left: 10
  },
  12: {
    topLeft: 7,
    topRight: 8,
    right: 13,
    bottomRight: 16,
    bottomLeft: null,
    left: null
  },
  13: {
    topLeft: 8,
    topRight: 9,
    right: 14,
    bottomRight: 17,
    bottomLeft: 16,
    left: 12
  },
  14: {
    topLeft: 9,
    topRight: 10,
    right: 15,
    bottomRight: 18,
    bottomLeft: 17,
    left: 13
  },
  15: {
    topLeft: 10,
    topRight: 11,
    right: null,
    bottomRight: null,
    bottomLeft: 18,
    left: 14
  },
  16: {
    topLeft: 12,
    topRight: 13,
    right: 17,
    bottomRight: null,
    bottomLeft: null,
    left: null
  },
  17: {
    topLeft: 13,
    topRight: 14,
    right: 18,
    bottomRight: null,
    bottomLeft: null,
    left: 16
  },
  18: {
    topLeft: 14,
    topRight: 15,
    right: null,
    bottomRight: null,
    bottomLeft: null,
    left: 17
  }
};

export default hexRelations;
