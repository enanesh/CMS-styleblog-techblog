const router = require('express').Router();
const { User } = require('../../models');


// CREATES SINGUP ROUTE 

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});






//CREATES A LOGIN ROUTE

router.post('/login', async (req, res) => {
    try {
        console.log("holaaaaa")
        const userData = await User.findOne({ where: { username: req.body.username } });
        console.log(userData);
        if (!userData) {
            console.log("incorrect username")
            res.status(400).json({ message: 'Incorrect username, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword);
        if (!validPassword) {
            console.log("incorrect password")
            res.status(400).json({ message: 'Incorrect password, please try again' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log("other error")
        console.log(err)
        res.status(400).json({ message: 'caught api/login', err });
    }
});



// CREATES  LOGOUT ROUTE

router.post('/logout', (req, res) => {
    console.log("logout");

    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;
