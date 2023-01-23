const router = require('express').Router();
const { response } = require('express');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, resp) => {

    try {
        const newComment = await Comment.create({

            comment_text: req.body.comment,
            user_id: req.session.user_id,
            post_id: req.body.postId
        });
        resp.status(200).json(newComment);

        console.log(newComment)
    }
    catch (error) {
        console.log(error);
        resp.status(400).json(error);
    }

});

module.exports = router;
