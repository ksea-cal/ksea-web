import { Route, BrowserRouter as Router, Switch, useRouteMatch } from "react-router-dom";
import Members from './members'


function MembersPage() {

    let { path, url } = useRouteMatch();

    return (
        <Router>
            <Switch>
                <Route exact path={`${path}/members`} component={Members} />
            </Switch>
        </Router>
    )
};

export default MembersPage