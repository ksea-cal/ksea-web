import { Route, BrowserRouter as Router, Switch, useRouteMatch } from "react-router-dom";
import Login from './login'
import Signup from './signup'
import MyPage from './user'

function User() {

    let { path, url } = useRouteMatch();

    return (
        <Router>
            <Switch>
                <Route path={`${path}/login`} component={Login} />
                <Route path={`${path}/signup`} component={Signup} />
                <Route path={`${path}/mypage`} component={MyPage} />
            </Switch>
        </Router>
    )
};

export default User