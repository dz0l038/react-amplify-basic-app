import React from 'react';

// Import pages
import Home from './Home/Home'
import Account from './Account/Account'

// Import react router
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';

export const HomeRoute = "/";
export const AccountRoute = "/account/";

class Routing extends React.Component {
    render() {
        return (
            <MainLayout>
                <Route path={HomeRoute} exact component={Home} />
                <Route path={AccountRoute} component={Account} />
            </MainLayout>
        );
    }
}

export default withRouter(Routing);