import express from 'express'
import { addBlog, deleteBlog, getAllBlogs, getBlog, udpateBlog } from '../controllers/BlogController.js'

const router = express.Router()

router.get('/', getAllBlogs);
router.get('/:id', getBlog)
router.post('/', addBlog)
router.put('/:id', udpateBlog)
router.delete('/:id', deleteBlog)

export default router