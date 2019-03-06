/**
 * Reducer that handles the state of the squares
 * @param  {Array}  [state=[]] Current state of the game.
 * @param  {object} action     [description]
 * @return {object}            [description]
 */
const squares = (state = [], action) => {
  switch (action.type) {
    case "SELECT_SQUARE":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default squares;
