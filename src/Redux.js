import { createStore } from "redux"

const reducer = (state, action) => {
	console.log("state", state, "action", action)
	if (action.type === "UPDATE_COUNT") {
		return {
			...state,
			count: action.count
		}
	}
	return state
}

export const store = createStore(reducer, { count: 0 })