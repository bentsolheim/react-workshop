import { createStore, compose } from "redux"

const reducer = (state, action) => {
	console.log("state", state, "action", action)
	if (action.type === "UPDATE_COUNT") {
		return {
			...state,
			count: action.count
		}
	}
	if (action.type === "UPDATE_USER") {
    console.log(action.payload)
		return {
			...state,
			user: action.payload
		}
	}
	return state
}

const debugComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, { 
  count: 0, 
  user: { name: "-", description: "-", role: "user" } 
}, debugComposer())