const express = require('express');
const passport = require('passport');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt',{session:false});

const usercontroller = require('./../controllers/users');

module.exports = (router) => {
    /** User Login [GET] **/
    router
        .route('/login')
        .get(usercontroller.signIn)
    /** User Login [POST] **/
    router
        .route('/login')
        .post(requireAuth, usercontroller.signIn)
    /** User SignUp [GET] **/
    router
        .route('/registro')
        .get(usercontroller.signUp)
    /** User SignUp [POST] **/
    router
        .route('/registro')
        .post(usercontroller.signUp)
    /** get a user **/
    router
        .route('/user/:id')
        .get(usercontroller.getUser)
    /** get all users **/
    router
        .route('/users')
        .get(usercontroller.getAllUsers)
    /** adds a user **/
    router
        .route('/user')
        .post(usercontroller.addUser)
    /** auth a user **/
    router
        .route('/user/auth')
        .post(usercontroller.authUser)
    /** Send Mail **/ 
    router
        .route('/contact/email')
        .post(usercontroller.contactEmail)
    /** get a user profile **/
    // router
        // .route('/user/profile/:id')
        // .get(usercontroller.getUserProfile)
}