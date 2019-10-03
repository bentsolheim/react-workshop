import * as users from "./users.duck"
import * as rooms from "./rooms.duck"
import * as createUser from "features/CreateUser"
import * as room from "features/Room"

export const duckMap = {
	[users.duck.ns]: users,
	[createUser.duck.ns]: createUser,
	[rooms.duck.ns]: rooms,
	[room.duck.ns]: room
}

export const ducks = [
	users.duck,
	createUser.duck,
	rooms.duck,
	room.duck
]