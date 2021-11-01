import { Route, BrowserRouter as Router, Switch, useRouteMatch } from "react-router-dom";
import Login from './login'
import Signup from './signup'

function User() {

    let { path, url } = useRouteMatch();

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path={`${path}/login`} component={Login} />
                <Route path={`${path}/signup`} component={Signup} />
            </Switch>
        </Router>
    )
};

export default User