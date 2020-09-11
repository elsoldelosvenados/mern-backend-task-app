const Project = require("../models/Project")
const {validationResult} = require('express-validator')


exports.createProject = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()})
    }

    try {
        const project = new Project(req.body)

        //Set User 
        project.creator = req.user.id
        //Save Project 
        await project.save()
        res.json(project)

    } catch (error) {
        console.log(error)
        res.status(500).send('An error has courred')
    }
}