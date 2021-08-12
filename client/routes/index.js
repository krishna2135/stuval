import React from 'react';
import { shape } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Loader from '@components/Loader';
import Loadable from 'react-loadable';
import Layout from '@components/Layout';

const errorLoading = (err) => console.log('Dynamic home page loading failed', err);

const routeLogin = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '@routes/Login').catch(errorLoading),
    loading: () => <Loader />,
    delay: 200,
});

const routeHome = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '@routes/Home').catch(errorLoading),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});

const routeNotFounde = Loadable({
    loader: () => import(/* webpackChunkName: "notFound" */ '@components/NotFound').catch(
        errorLoading,
    ),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});

const routeRegister = Loadable({
    loader: () => import(/* webpackChunkName: "Register" */ '@routes/Register').catch(errorLoading),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});

const routeChallanges = Loadable({
    loader: () => import(/* webpackChunkName: "Register" */ '@routes/Challanges').catch(errorLoading),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});
const routeCommunity = Loadable({
    loader: () => import(/* webpackChunkName: "Register" */ '@routes/Community').catch(errorLoading),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});

const routeYourProject = Loadable({
    loader: () => import(/* webpackChunkName: "Register" */ '@routes/YourProject').catch(errorLoading),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});

const routeCreateChallanges = Loadable({
    loader: () =>
        import(/* webpackChunkName: "designer" */ '@routes/CreateChallanges').catch(
            errorLoading,
        ),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});
const routeStudntProfile = Loadable({
    loader: () =>
        import(/* webpackChunkName: "designer" */ '@routes/StudntProfile').catch(
            errorLoading,
        ),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});

const routeGeneratePwd = Loadable({
    loader: () =>
        import(/* webpackChunkName: "designer" */ '@routes/GeneratePwd').catch(
            errorLoading,
        ),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});

const routeAdminDashbord = Loadable({
    loader: () =>
        import(/* webpackChunkName: "ListPartner" */ '@routes/AdminDashbord').catch(
            errorLoading,
        ),
    loading: () => <Loader />, // full page loader here
    delay: 200, // delay in milliseconds, useful for suspense
});


if (process.browser) {
    const authToken = localStorage.getItem('authToken');
    console.log(authToken)
    const { pathname } = window.location;
    if (
        !authToken &&
        pathname !== '/' &&
        pathname !== '/generate-new-password' &&
        pathname !== '/forgot-password' &&
        pathname !== '/register'

    ) {
        window.history.pushState(null, null, '/');
    } else if (authToken && pathname === '/') {
        window.history.pushState(null, null, '/home');
    }

}

const Routes = (props) => {
    const { history, location, match } = props;

    return (
        <Layout history={history} location={location} match={match}>
            <Switch>
                <Route key="login" exact path="/" component={routeLogin} />
                <Route key="home" exact path="/home" component={routeHome} />
                <Route key="Register" exact path="/Register" component={routeRegister} />
                <Route key="challanges" exact path="/challanges" component={routeChallanges} />

                <Route key="community" exact path="/community" component={routeCommunity} />
                <Route key="yourProject" exact path="/yourProject" component={routeYourProject} />
                <Route key="createChallanges" exact path="/createChallanges" component={routeCreateChallanges} />
                <Route key="studntProfile" exact path="/studntProfile" component={routeStudntProfile} />

                <Route
                    key="generate-password"
                    path="/generate-password"
                    component={routeGeneratePwd}
                />
                <Route
                    key="admin-dashbord"
                    path="/admin-dashbord"
                    component={routeAdminDashbord}
                />

                <Route key="notfound" path="*" component={routeNotFounde} />
            </Switch>
        </Layout>
    );
};

Routes.propTypes = {
    history: shape({}).isRequired,
    location: shape({}).isRequired,
    match: shape({}).isRequired,
};

const RootRoutes = () => <Route component={Routes} />;

export default RootRoutes;
