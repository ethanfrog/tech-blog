const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const cartRoutes = require('./cartRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/product', productRoutes);
router.use('/cart', cartRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
