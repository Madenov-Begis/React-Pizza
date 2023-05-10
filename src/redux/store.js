import { createStoreHook } from "react-redux";

function counter(state = 0, action) {

    switch (action.type) {
        case "INC":
            return ++state;
        case "DEC":
            return --state;
        default:
            return state
    }
}

const store = createStoreHook(counter)

export default store