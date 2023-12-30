const express = require('express');
const router = express.Router();
const blogRoutes = require('../controllers/blogControllers');

router.get('/', blogRoutes.blog_index);
router.post('/', blogRoutes.blog_create_post)
router.get('/create', blogRoutes.blog_create)
router.get('/:id', blogRoutes.blog_details)
router.delete('/:id', blogRoutes.blog_delete)


module.exports = router;