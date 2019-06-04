import hexRelations from "./constants";

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
].sort(() => Math.random() - 0.5);

let mappedTiles = [];

mappedTiles = tiles.map((tile, index) => {
  return {
    ...tile,
    id: index,
    roadTopLeft: { id: index * 6 + 1, playerId: null, color: "black" },
    roadTopRight: { id: index * 6 + 2, playerId: null, color: "black" },
    roadRight: { id: index * 6 + 3, playerId: null, color: "black" },
    roadBottomRight: { id: index * 6 + 4, playerId: null, color: "black" },
    roadBottomLeft: { id: index * 6 + 5, playerId: null, color: "black" },
    roadLeft: { id: index * 6 + 6, playerId: null, color: "black" },
    crossroadTop: { id: index * 6 + 1, playerId: null, color: "gray" },
    crossroadTopRight: { id: index * 6 + 2, playerId: null, color: "gray" },
    crossroadBottomRight: { id: index * 6 + 3, playerId: null, color: "gray" },
    crossroadBottom: { id: index * 6 + 4, playerId: null, color: "gray" },
    crossroadBottomLeft: { id: index * 6 + 5, playerId: null, color: "gray" },
    crossroadTopLeft: { id: index * 6 + 6, playerId: null, color: "gray" }
  };
});

function roadConstructor(id, playerId, color) {
  return { id: id, playerId: playerId, color: color };
}

function roadSetup(roadId, roadType, hexId, state) {
  const neighbouringHexes = hexRelations[hexId];
  const playerId = state.currentPlayerId;
  const color = state.players[playerId - 1].color;
  const tiles = { ...state.tiles };
  switch (roadType) {
    case "road road-top-left":
      tiles[hexId].roadTopLeft = roadConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topLeft !== null) {
        tiles[neighbouringHexes.topLeft].roadBottomRight = roadConstructor(
          roadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-top-right":
      tiles[hexId].roadTopRight = roadConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topRight !== null) {
        tiles[neighbouringHexes.topRight].roadBottomLeft = roadConstructor(
          roadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-right":
      tiles[hexId].roadRight = roadConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.Right !== null) {
        tiles[neighbouringHexes.Right].roadLeft = roadConstructor(
          roadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-bottom-right":
      tiles[hexId].roadBottomRight = roadConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.BottomRight !== null) {
        tiles[neighbouringHexes.BottomRight].roadTopLeft = roadConstructor(
          roadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-bottom-left":
      tiles[hexId].roadBottomLeft = roadConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.BottomLeft !== null) {
        tiles[neighbouringHexes.BottomLeft].roadTopRight = roadConstructor(
          roadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-left":
      tiles[hexId].roadLeft = roadConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.left !== null) {
        tiles[neighbouringHexes.left].roadRight = roadConstructor(
          roadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
  }
}
//action types
const SET_BOARD = "SET_BOARD";
const BUILD_ROAD = "BUILD_ROAD";

//initial state
const initialState = {
  tiles: mappedTiles,
  players: [
    {
      id: 1,
      name: "player1",
      color: "red",
      lumber: 0,
      wool: 0,
      wheat: 0,
      brick: 0,
      ore: 0
    },
    {
      id: 2,
      name: "player2",
      color: "blue",
      lumber: 0,
      wool: 0,
      wheat: 0,
      brick: 0,
      ore: 0
    }
  ],
  currentPlayerId: 1
};

//action creators
export const setBoard = () => dispatch => {
  dispatch({ type: SET_BOARD });
};

export const buildRoad = (roadId, roadType, hexId) => dispatch => {
  dispatch({
    type: BUILD_ROAD,
    payload: { roadId: roadId, roadType: roadType, hexId: hexId }
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUILD_ROAD:
      return roadSetup(
        action.payload.roadId,
        action.payload.roadType,
        action.payload.hexId,
        state
      );
    default:
      return {
        ...state
      };
  }
};

export default reducer;
