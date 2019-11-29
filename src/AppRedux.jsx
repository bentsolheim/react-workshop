import React from "react"

import { store } from "./Redux"

import UserForm from "features/UserForm/UserForm.connector"
import { Provider } from "react-redux"

export class AppRedux extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
		this.store = store
	}

	render() {
		return (
			<Provider store={this.store}>
				<UserForm/>
			</Provider>
		)
	}
}

export default AppRedux