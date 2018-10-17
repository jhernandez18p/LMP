import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Helmet from 'react-helmet';

// Pages
import Intranet from './Home';

// Components
import IntraHeader from '../../components/Header/IntraHeader';
import IntraFooter from '../../components/Footer/IntraFooter';


// Redux
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
// User Actions
import { createSelector } from 'reselect'
import {
    //   addUser,
    //   apiRequest,
    //   authUser,
    //   deleteUser,
    //   invalidateUser,
    //   requestUser,
    //   showError,
    //   updateUser,
} from '../../redux/actions/userActions';

class Intra extends Component {
    componentDidMount(){
    }

    render() {
        return (
            <div className="intranet">
                <Helmet bodyAttributes={{ style: 'background-color : #fff; background-image: none' }} />
                <div className="intranet-wrapper">
                    <IntraHeader brands={this.props.brands} user={this.props.user ? 'Guest' : this.props.user.username} />
                    <div className="container" id="intranet-body">
                        <div className="columns">
                            <div className="column">
                                <Switch>
                                    <Route exact path="/intra" component={ Intranet } />
                                    <Route exact path="/intra/conf" component={ Intranet } />
                                    <Route exact path="/intra/conf/carrusel" component={ Intranet } />

                                    <Route exact path="/intra/perfil" component={ Intranet } />
                                    <Route exact path="/intra/perfil/:username" component={ Intranet } />

                                    <Route exact path="/intra/inventario" component={ Intranet } />

                                    <Route exact path="/intra/inventario/carros" component={ Intranet } />
                                    <Route exact path="/intra/inventario/carros/crear" component={ Intranet } />
                                    <Route exact path="/intra/inventario/carros/editar/:id" component={ Intranet } />
                                    <Route exact path="/intra/inventario/carros/eliminar/:id" component={ Intranet } />
                                    
                                    <Route exact path="/intra/inventario/marca" component={ Intranet } />
                                    <Route exact path="/intra/inventario/marca/crear" component={ Intranet } />
                                    <Route exact path="/intra/inventario/marca/editar/:id" component={ Intranet } />
                                    <Route exact path="/intra/inventario/marca/eliminar/:id" component={ Intranet } />

                                </Switch>
                            </div>
                        </div>
                    </div>
                    <IntraFooter />
                </div>
            </div>
        );
    }
}


const siteSelector = createSelector(
    state => state.site,
    site => site
);

const brandsSelector = createSelector(
    state => state.brands,
    brands => brands
);

const carsSelector = createSelector(
    state => state.cars,
    cars => cars
);

const userSelector = createSelector(
    state => state.user,
    user => user
);

const mapStateToProps = createSelector(
    brandsSelector,
    carsSelector,
    userSelector,
    siteSelector,
    (brands, cars, user, site) => ({
        brands,
        cars,
        site,
        user
    })
);

const mapActionsToProps = {
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Intra));