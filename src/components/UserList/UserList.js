import React from "react"
import PropTypes from "prop-types"
import { UserListItem } from "./UserListItem"
import cn from "classnames"

import classes from "./UserList.scss"

export class name extends React.PureComponent{
	render(){
		return (
			<div className={cn(classes.container, "list")}>
				<h1>The awesome user database</h1>
				<table>
					<thead>
						<tr>
							<th className={classes.nameColumn}>Name</th>
							<th className={classes.typeColumn}>Type</th>
							<th className={classes.createdColumn}>Created</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map((user) => (
							<UserListItem key={user.id} {...user}/>
						))}
					</tbody>
				</table>
				<div className={classes.newBtnContainer}>
					<button type="button" onClick={this.props.onNewClick}>
						<i className="fas fa-plus"/>
					</button>
				</div>
			</div>
		)
	}

	static defaultProps = {
		users: []
	}
	static propTypes = {
		users: PropTypes.arrayOf(PropTypes.object),
		onNewClick: PropTypes.func
	}
}
export default name