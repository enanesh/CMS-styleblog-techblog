const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        console.log(req.session)
        // Pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            console.log("user is logged in redirected to home")
            res.redirect('/login');
            return;
        }
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
            where: {
                user_id: req.session.user_id
            }
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        console.log(req.session)
        // Pass serialized data and session flag into template
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// router.get('/post/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         const post = postData.get({ plain: true });

//         res.render('project', {
//             ...project,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        console.log("user is logged in redirected to home")
        res.redirect('/');
        return;
    }

    res.render('login');
});



router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        console.log("user created ")
        res.redirect('/');
        return;
    }

    res.render('signup');
});


module.exports = router;