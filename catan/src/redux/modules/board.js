const randomValues = [
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12
].sort(() => Math.random() - 0.5);

const tiles = [
  {
    tile: "forest",
    resource: "lumber",
    color: "#006400",
    value: randomValues[0]
  },
  {
    tile: "forest",
    resource: "lumber",
    color: "#006400",
    value: randomValues[1]
  },
  {
    tile: "forest",
    resource: "lumber",
    color: "#006400",
    value: randomValues[2]
  },
  {
    tile: "forest",
    resource: "lumber",
    color: "#006400",
    value: randomValues[3]
  },
  {
    tile: "pasture",
    resource: "wool",
    color: "#029f00",
    value: randomValues[4]
  },
  {
    tile: "pasture",
    resource: "wool",
    color: "#029f00",
    value: randomValues[5]
  },
  {
    tile: "pasture",
    resource: "wool",
    color: "#029f00",
    value: randomValues[6]
  },
  {
    tile: "pasture",
    resource: "wool",
    color: "#029f00",
    value: randomValues[7]
  },
  {
    tile: "fields",
    resource: "grain",
    color: "#e8d800",
    value: randomValues[8]
  },
  {
    tile: "fields",
    resource: "grain",
    color: "#e8d800",
    value: randomValues[9]
  },
  {
    tile: "fields",
    resource: "grain",
    color: "#e8d800",
    value: randomValues[10]
  },
  {
    tile: "fields",
    resource: "grain",
    color: "#e8d800",
    value: randomValues[11]
  },
  {
    tile: "hills",
    resource: "brick",
    color: "#D2691E",
    value: randomValues[12]
  },
  {
    tile: "hills",
    resource: "brick",
    color: "#D2691E",
    value: randomValues[13]
  },
  {
    tile: "hills",
    resource: "brick",
    color: "#D2691E",
    value: randomValues[14]
  },
  {
    tile: "mountain",
    resource: "ore",
    color: "#A0A0A0",
    value: randomValues[15]
  },
  {
    tile: "mountain",
    resource: "ore",
    color: "#A0A0A0",
    value: randomValues[16]
  },
  {
    tile: "mountain",
    resource: "ore",
    color: "#A0A0A0",
    value: randomValues[17]
  },
  { tile: "desert", resource: null, color: "#1E1E1E", value: "" }
];
//action types
const SET_BOARD = "SET_BOARD";

//initial state
const initialState = {
  tiles: [tiles.sort(() => Math.random() - 0.5)],
  players: [
    {
      name: "player1",
      color: "red",
      lumber: 0,
      wool: 0,
      wheat: 0,
      brick: 0,
      ore: 0
    },
    {
      name: "player2",
      color: "blue",
      lumber: 0,
      wool: 0,
      wheat: 0,
      brick: 0,
      ore: 0
    }
  ]
};
//action creators
export const setBoard = () => dispatch => {
  dispatch({ type: SET_BOARD });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};
export default reducer;
