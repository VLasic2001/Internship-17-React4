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
      settlementType: null
    },
    crossroadTopRight: {
      id: index * 6 + 2,
      playerId: null,
      color: "gray",
      settlementType: null
    },
    crossroadBottomRight: {
      id: index * 6 + 3,
      playerId: null,
      color: "gray",
      settlementType: null
    },
    crossroadBottom: {
      id: index * 6 + 4,
      playerId: null,
      color: "gray",
      settlementType: null
    },
    crossroadBottomLeft: {
      id: index * 6 + 5,
      playerId: null,
      color: "gray",
      settlementType: null
    },
    crossroadTopLeft: {
      id: index * 6 + 6,
      playerId: null,
      color: "gray",
      settlementType: null
    }
  };
});

function roadConstructor(id, playerId, color) {
  return { id: id, playerId: playerId, color: color };
}

function settlementConstructor(id, playerId, color, settlementType) {
  return {
    id: id,
    playerId: playerId,
    color: color,
    settlementType: settlementType === null ? "settlement" : "city"
  };
}

function roadSetup(roadId, roadType, hexId, state) {
  const neighbouringHexes = hexRelations[hexId];
  const playerId = state.currentPlayerId;
  const color = state.players[playerId - 1].color;
  const tiles = { ...state.tiles };
  const road = roadConstructor(roadId, playerId, color);
  switch (roadType) {
    case "road road-top-left":
      if (tiles[hexId].roadTopLeft.playerId !== null) {
        return state;
      }
      tiles[hexId].roadTopLeft = road;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topLeft !== null) {
        tiles[neighbouringHexes.topLeft].roadBottomRight = road;
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-top-right":
      if (tiles[hexId].roadTopRight.playerId !== null) {
        return state;
      }
      tiles[hexId].roadTopRight = road;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topRight !== null) {
        tiles[neighbouringHexes.topRight].roadBottomLeft = road;
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-right":
      if (tiles[hexId].roadRight.playerId !== null) {
        return state;
      }
      tiles[hexId].roadRight = road;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.right !== null) {
        tiles[neighbouringHexes.right].roadLeft = road;
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-bottom-right":
      if (tiles[hexId].roadBottomRight.playerId !== null) {
        return state;
      }
      tiles[hexId].roadBottomRight = road;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.bottomRight !== null) {
        tiles[neighbouringHexes.bottomRight].roadTopLeft = road;
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-bottom-left":
      if (tiles[hexId].roadBottomLeft.playerId !== null) {
        return state;
      }
      tiles[hexId].roadBottomLeft = road;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.bottomLeft !== null) {
        tiles[neighbouringHexes.bottomLeft].roadTopRight = road;
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
    case "road road-left":
      if (tiles[hexId].roadLeft.playerId !== null) {
        return state;
      }
      tiles[hexId].roadLeft = road;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.left !== null) {
        tiles[neighbouringHexes.left].roadRight = road;
        state = {
          ...state,
          tiles: tiles
        };
      }
      return state;
  }
}

function crossroadSetup(
  crossroadId,
  crossroadType,
  hexId,
  settlementType,
  state
) {
  const neighbouringHexes = hexRelations[hexId];
  const playerId = state.currentPlayerId;
  const color = state.players[playerId - 1].color;
  const tiles = { ...state.tiles };
  const settlement = settlementConstructor(
    crossroadId,
    playerId,
    color,
    settlementType
  );
  switch (crossroadType) {
    case "crossroad crossroad-top":
      if (tiles[hexId].crossroadTop.playerId !== null) {
        return state;
      }
      tiles[hexId].crossroadTop = settlement;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topLeft !== null) {
        tiles[neighbouringHexes.topLeft].crossroadBottomRight = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.topRight !== null) {
        tiles[neighbouringHexes.topRight].crossroadBottomLeft = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-top-right":
      if (tiles[hexId].crossroadTopRight.playerId !== null) {
        return state;
      }
      tiles[hexId].crossroadTopRight = settlement;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topRight !== null) {
        tiles[neighbouringHexes.topRight].crossroadBottom = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.right !== null) {
        tiles[neighbouringHexes.right].crossroadTopLeft = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-bottom-right":
      if (tiles[hexId].crossroadBottomRight.playerId !== null) {
        return state;
      }
      tiles[hexId].crossroadBottomRight = settlement;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.bottomRight !== null) {
        tiles[neighbouringHexes.bottomRight].crossroadTop = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.right !== null) {
        tiles[neighbouringHexes.right].crossroadBottomLeft = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-bottom":
      if (tiles[hexId].crossroadBottom.playerId !== null) {
        return state;
      }
      tiles[hexId].crossroadBottom = settlement;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.bottomRight !== null) {
        tiles[neighbouringHexes.bottomRight].crossroadTopLeft = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.bottomLeft !== null) {
        tiles[neighbouringHexes.bottomLeft].crossroadTopRight = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-bottom-left":
      if (tiles[hexId].crossroadBottomLeft.playerId !== null) {
        return state;
      }
      tiles[hexId].crossroadBottomLeft = settlement;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.left !== null) {
        tiles[neighbouringHexes.left].crossroadBottomRight = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.bottomLeft !== null) {
        tiles[neighbouringHexes.bottomLeft].crossroadTop = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
    case "crossroad crossroad-top-left":
      if (tiles[hexId].crossroadTopLeft.playerId !== null) {
        return state;
      }
      tiles[hexId].crossroadTopLeft = settlement;
      state = {
        ...state,
        tiles: tiles
      };
      if (neighbouringHexes.topLeft !== null) {
        tiles[neighbouringHexes.topLeft].crossroadBottom = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      if (neighbouringHexes.left !== null) {
        tiles[neighbouringHexes.left].crossroadTopRight = settlement;
        state = {
          ...state,
          tiles: tiles
        };
      }
      break;
  }
  return state;
}

function changePlayer(state) {
  if (state.currentPlayerId === 4) {
    state = { ...state, currentPlayerId: 1 };
  } else {
    state = { ...state, currentPlayerId: state.currentPlayerId + 1 };
  }
  return state;
}

//action types
const BUILD_ROAD = "BUILD_ROAD";
const BUILD_SETTLEMENT = "BUILD_SETTLEMENT";
const NEXT_PLAYER = "NEXT_PLAYER";

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
    },
    {
      id: 3,
      name: "player3",
      color: "teal",
      lumber: 0,
      wool: 0,
      wheat: 0,
      brick: 0,
      ore: 0
    },
    {
      id: 4,
      name: "player2",
      color: "springgreen",
      lumber: 0,
      wool: 0,
      wheat: 0,
      brick: 0,
      ore: 0
    }
  ],
  currentPlayerId: 3
};

//action creators
export const nextPlayer = () => dispatch => {
  dispatch({ type: NEXT_PLAYER });
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
  hexId,
  settlementType
) => dispatch => {
  dispatch({
    type: BUILD_SETTLEMENT,
    payload: {
      crossroadId: crossroadId,
      crossroadType: crossroadType,
      hexId: hexId,
      settlementType: settlementType
    }
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PLAYER:
      return changePlayer(state);
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
        action.payload.settlementType,
        state
      );
    default:
      return {
        ...state
      };
  }
};

export default reducer;
