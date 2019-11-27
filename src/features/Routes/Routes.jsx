import React from "react"
import { Route, Switch } from "react-router"

import Home from "features/Home"
import Increment from "features/Increment"
import NotFound from "features/NotFound"
import IncDec from "features/IncDec"
import FormTest from "features/FormTest"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/increment" exact component={Increment}/>
		<Route path="/incdec" exact component={IncDec}/>
		<Route path="/formtest" exact component={FormTest}/>
		<Route component={NotFound}/>
	</Switch>
)

export default Routes