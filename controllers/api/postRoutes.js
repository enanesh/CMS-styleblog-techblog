const router = require('express').Router();
const { response } = require('express');
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, resp) => {

    try {
        const newPost = await Post.create({
           
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        resp.status(200).json(newPost);

        console.log(newPost)
    }
    catch (error) {
        resp.status(400).json(err);
    }

});

module.exports = router;
