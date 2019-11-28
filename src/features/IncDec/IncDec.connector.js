import { connect } from "react-redux";

import IncDec from "./IncDec";

const mapStateToProps = state => ({
  count: state.count
});
const mapDispatchToProps = dispatch => ({
  setCount: (count) => { dispatch({ type: "UPDATE_COUNT", count })}
});

export default connect(mapStateToProps, mapDispatchToProps)(IncDec);
