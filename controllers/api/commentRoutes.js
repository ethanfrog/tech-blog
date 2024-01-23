const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // const CommentData = await Category.findAll({});
    // res.render('comment');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
