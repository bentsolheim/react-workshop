import { connect } from "react-redux"

import UserForm from "./UserForm"

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
  onUserUpdated: (user) => {
			dispatch({ type: "UPDATE_USER", payload: user })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)