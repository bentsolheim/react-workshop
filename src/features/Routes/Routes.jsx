import React from "react"
import { Route, Switch } from "react-router"

import Home from "features/Home"
import Increment from "features/Increment"
import NotFound from "features/NotFound"
import IncDec from "features/IncDec"
import TextInputApp from "features/TextInputApp"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/increment" exact component={Increment}/>
		<Route path="/incdec" exact component={IncDec}/>
		<Route path="/textinput" exact component={TextInputApp}/>
		<Route component={NotFound}/>
	</Switch>
)

export default Routes