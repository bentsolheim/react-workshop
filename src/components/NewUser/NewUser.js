import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

export class NewUser extends React.PureComponent{
	render(){
		return (
			<div>
				<form>
					<input type="text" value={this.props.name} onChange={this.onChangeProp("name")}/>
					<select value={this.props.type} onChange={this.onChangeProp("type")}>
						{this.props.types.map(type => (
							<option key={type} value={type}>{type}</option>
						))}
					</select>
					<textarea value={this.props.description} onChange={this.onChangeProp("description")}/>
					<Link to="/">Back</Link>
					<button type="submit" onClick={this.props.onCreate}>Create user</button>
				</form>
			</div>
		)
	}

	onChangeProp = (name) => (evt) => {
		this.props.onPropChange(name, evt.target.value)
	}

	static propTypes = {
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string,
		types: PropTypes.arrayOf(PropTypes.string),

		onPropChange: PropTypes.func,
		onCreate: PropTypes.func
	}
}
export default NewUser