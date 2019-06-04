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
    crossroadTop: {
      id: index * 6 + 1,
      playerId: null,
      color: "gray",
      isCity: null
    },
    crossroadTopRight: {
      id: index * 6 + 2,
      playerId: null,
      color: "gray",
      isCity: null
    },
    crossroadBottomRight: {
      id: index * 6 + 3,
      playerId: null,
      color: "gray",
      isCity: null
    },
    crossroadBottom: {
      id: index * 6 + 4,
      playerId: null,
      color: "gray",
      isCity: null
    },
    crossroadBottomLeft: {
      id: index * 6 + 5,
      playerId: null,
      color: "gray",
      isCity: null
    },
    crossroadTopLeft: {
      id: index * 6 + 6,
      playerId: null,
      color: "gray",
      isCity: null
    }
  };
});

function buildingConstructor(id, playerId, color) {
  return { id: id, playerId: playerId, color: color };
}

function roadSetup(roadId, roadType, hexId, state) {
  const neighbouringHexes = hexRelations[hexId];
  const playerId = state.currentPlayerId;
  const color = state.players[playerId - 1].color;
  const tiles = { ...state.tiles };
  switch (roadType) {
    case "road road-top-left":
      tiles[hexId].roadTopLeft = buildingConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topLeft !== null) {
        tiles[neighbouringHexes.topLeft].roadBottomRight = buildingConstructor(
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
      tiles[hexId].roadTopRight = buildingConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topRight !== null) {
        tiles[neighbouringHexes.topRight].roadBottomLeft = buildingConstructor(
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
      tiles[hexId].roadRight = buildingConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.right !== null) {
        tiles[neighbouringHexes.right].roadLeft = buildingConstructor(
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
      tiles[hexId].roadBottomRight = buildingConstructor(
        roadId,
        playerId,
        color
      );
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.bottomRight !== null) {
        tiles[neighbouringHexes.bottomRight].roadTopLeft = buildingConstructor(
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
      tiles[hexId].roadBottomLeft = buildingConstructor(
        roadId,
        playerId,
        color
      );
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.bottomLeft !== null) {
        tiles[neighbouringHexes.bottomLeft].roadTopRight = buildingConstructor(
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
      tiles[hexId].roadLeft = buildingConstructor(roadId, playerId, color);
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.left !== null) {
        tiles[neighbouringHexes.left].roadRight = buildingConstructor(
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

function crossroadSetup(crossroadId, crossroadType, hexId, state) {
  const neighbouringHexes = hexRelations[hexId];
  const playerId = state.currentPlayerId;
  const color = state.players[playerId - 1].color;
  const tiles = { ...state.tiles };
  console.log(crossroadType);
  switch (crossroadType) {
    case "crossroad crossroad-top":
      tiles[hexId].crossroadTop = buildingConstructor(
        crossroadId,
        playerId,
        color
      );
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topLeft !== null) {
        tiles[
          neighbouringHexes.topLeft
        ].crossroadBottomRight = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.topRight !== null) {
        tiles[
          neighbouringHexes.topRight
        ].crossroadBottomLeft = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-top-right":
      tiles[hexId].crossroadTopRight = buildingConstructor(
        crossroadId,
        playerId,
        color
      );
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topRight !== null) {
        tiles[neighbouringHexes.topRight].crossroadBottom = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.right !== null) {
        tiles[neighbouringHexes.right].crossroadTopLeft = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-bottom-right":
      tiles[hexId].crossroadBottomRight = buildingConstructor(
        crossroadId,
        playerId,
        color
      );
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.bottomRight !== null) {
        tiles[neighbouringHexes.bottomRight].crossroadTop = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.right !== null) {
        tiles[
          neighbouringHexes.right
        ].crossroadBottomLeft = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-bottom":
      tiles[hexId].crossroadBottom = buildingConstructor(
        crossroadId,
        playerId,
        color
      );
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.bottomRight !== null) {
        tiles[
          neighbouringHexes.bottomRight
        ].crossroadTopLeft = buildingConstructor(crossroadId, playerId, color);
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.bottomLeft !== null) {
        tiles[
          neighbouringHexes.bottomLeft
        ].crossroadTopRight = buildingConstructor(crossroadId, playerId, color);
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-bottom-left":
      tiles[hexId].crossroadBottomLeft = buildingConstructor(
        crossroadId,
        playerId,
        color
      );
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.left !== null) {
        tiles[
          neighbouringHexes.left
        ].crossroadBottomRight = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.bottomLeft !== null) {
        tiles[neighbouringHexes.bottomLeft].crossroadTop = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-top-left":
      tiles[hexId].crossroadTopLeft = buildingConstructor(
        crossroadId,
        playerId,
        color
      );
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topLeft !== null) {
        tiles[neighbouringHexes.topLeft].crossroadBottom = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.left !== null) {
        tiles[neighbouringHexes.left].crossroadTopRight = buildingConstructor(
          crossroadId,
          playerId,
          color
        );
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
  }
  return state;
}

//action types
const SET_BOARD = "SET_BOARD";
const BUILD_ROAD = "BUILD_ROAD";
const BUILD_SETTLEMENT = "BUILD_SETTLEMENT";

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

export const buildSettlement = (
  crossroadId,
  crossroadType,
  hexId
) => dispatch => {
  dispatch({
    type: BUILD_SETTLEMENT,
    payload: {
      crossroadId: crossroadId,
      crossroadType: crossroadType,
      hexId: hexId
    }
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
    case BUILD_SETTLEMENT:
      return crossroadSetup(
        action.payload.crossroadId,
        action.payload.crossroadType,
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
