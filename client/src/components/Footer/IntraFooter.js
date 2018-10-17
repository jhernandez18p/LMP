import React, { Component } from 'react';
// import Helmet from 'react-helmet';
// import { withRouter } from "react-router-dom";

// import { connect } from 'react-redux';
// import { createSelector } from 'reselect'
// import {
    // addUser,
    // apiRequest,
    // authUser,
    // deleteUser,
    // invalidateUser,
    // requestUser,
    // showError,
    // updateUser,
// } from '../../redux/actions/userActions';


class IntraFooter extends Component {

    render() {

        return (
            <footer className="intranet-footer has-text-centered">
                <p>
                    Luxury Motors Panamá
                </p>
            </footer>
        );
    }
}

// const carsSelector = createSelector(
//     state => state.cars,
//     cars => cars
// );

// const siteSelector = createSelector(
//     state => state.site,
//     site => site
// );

// const mapStateToProps = createSelector(
//     carsSelector,
//     siteSelector,
//     (cars, site) => ({
//         cars, site
//     })
// );

// export default connect(mapStateToProps)(IntraFooter);
export default IntraFooter;