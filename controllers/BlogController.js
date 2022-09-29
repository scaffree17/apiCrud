import BlogModel from "../models/BlogModel.js";

//devolver todos los blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//devolver un blog
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: { id: req.params.id }
        })
        res.json(blog)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//añadir un blog

export const addBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({ message: 'Blog creado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//actualizar un blog
export const udpateBlog = async (req, res) => {

    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ message: 'Blog actualizado correctamente' })
    } catch (error) {
        res.json({ message: error.message })

    }
}

//eliminar un blog
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy(req.body, {
            where: { id: req.params.id }
        })
        res.json({ message: 'Blog eliminado correctamente' })
    } catch (error) {
        res.json({ message: error.message })

    }

}