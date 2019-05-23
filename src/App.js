import React from "react"
import UserForm from "./features/userForm"
import Users from "./features/users"
import omit from "lodash/omit"
import { uniqueId } from "./utils/uniqueId"
import newStore from "./store"
import { Provider } from "react-redux"

import Counter from "./features/examples/Counter.connector"

import "./App.scss"

export class App extends React.PureComponent {
	state = {
		name: "",
		email: "",
		type: "User",
		password: "",
		disabled: false,
		comments: "",
		
		users: []
	}

	constructor(props) {
		super(props)
		this.store = newStore()
		window.app = this
	}

	onUserFormPropChange = (prop, newValue) => {
		this.setState({
			[prop]: newValue
		})
	}
	onUserFormSave = () => {
		const newUser = omit(this.state, "users")
		newUser.id = uniqueId()

		this.setState({
			users: [
				...this.state.users,
				newUser
			]
		})
	}

	render() {
		const { name, email, type, password, disabled, comments, users } = this.state
		return (
			<Provider store={this.store}>
				<Counter/>
				<UserForm
					name={name}
					email={email}
					type={type}
					password={password}
					disabled={disabled}
					comments={comments}

					onChange={this.onUserFormPropChange}
					onSave={this.onUserFormSave}/>
				<Users users={users}/>
			</Provider>
		)
	}
}