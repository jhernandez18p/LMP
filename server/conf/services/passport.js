const passport = require('passport');
const secretKey = (process.env.JWT_SECRET_KEY || "secretKey");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { findUserById, verifyUser } = require('../actions/signIn');
const localStartegy = require('passport-local');
const bcrypt = require('bcrypt');

const localOptions = { usernamefield: 'email' };

const localLogin = new localStartegy( localOptions, (email, password, done ) => {
    return verifyUser(email)
        .then((validuser) => {
            bcrypt.compare(password, validuser.password)
                .then((validPassword) => {
                    if (validPassword){
                        return done(null, validuser)
                    }
                    return done(null, false)
                })
                .catch(err => done(err, false))
        })
});

const JwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secretKey
}

const jwtLogin = new JwtStrategy(JwtOptions, (payload, done) => {
    return findUserById(payload.sub)
        .then((foundUser) =>{
            if (foundUser){
                return done(null, foundUser)
            }
            return done(null, false)
        })
        .catch( err => done(err, false))
})

passport.use(jwtLogin)
passport.use(localLogin)