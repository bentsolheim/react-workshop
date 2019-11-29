import { connect } from "react-redux"

import UserForm from "./UserForm"

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
  onUserSubmitted: (user) => {
			dispatch({ type: "CREATE_USER", payload: user })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)