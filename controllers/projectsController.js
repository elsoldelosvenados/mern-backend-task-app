const Project = require("../models/Project")

exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body)
        await project.save()
        res.json(project)
    } catch (error) {
        console.log(error)
        res.status(500).send('An error has courred')
    }
}