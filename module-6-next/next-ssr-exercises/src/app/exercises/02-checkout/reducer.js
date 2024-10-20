import { produce } from "immer";

function reducer(state, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "restore-saved-items": {
        // we need to return the action items to replace the initial null state
        return action.items;
      }
      case "add-item": {
        const itemIndex = state.findIndex((item) => item.id === action.item.id);

        if (itemIndex !== -1) {
          draftState[itemIndex].quantity += 1;
          return;
        }

        draftState.push({
          ...action.item,
          quantity: 1,
        });
        return;
      }

      case "delete-item": {
        const itemIndex = state.findIndex((item) => item.id === action.item.id);
        if (draftState[itemIndex].quantity > 1) {
          draftState[itemIndex].quantity -= 1;
          return;
        }

        draftState.splice(itemIndex, 1);
        return;
      }
    }
  });
}

export default reducer;
