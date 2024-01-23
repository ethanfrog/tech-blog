const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // const PostData = await Category.findAll({});
    // res.render('post');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
