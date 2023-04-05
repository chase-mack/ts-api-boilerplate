import { Request, Response } from 'express';
import TestModel from '../models/testModel';
// import TestSchema from '../models/testSchema'; // not needed if not running services??

export class TestController {
    public async getAll(req: Request, res: Response) {
        try {
            const data = await TestModel.find();
            res.json(data);
            console.log("Get All TestModels was successful!")
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const data = await TestModel.findById(req.params.id)
            res.json(data);
            console.log(`${data.name} was got!`)
        }
        catch(error) {
            res.status(500).json({message: error.message})
        }
    }

    public async create(req: Request, res: Response) {
        const data = new TestModel({
            name: req.body.name,
            phone: req.body.phone,
            is_true: req.body.is_true
        });
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
            console.log(`${data.name} was created!`)
        } 
        catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const id = { _id: req.params.id};
            const updatedData = req.body;
            const options = { new: true }; // returns updated data in the response
    
            const result = await TestModel.findOneAndUpdate(id, updatedData, options);
            res.send(result);
            console.log(`Updated ${id._id}`);
        }
        catch(error) {
            res.status(400).json({message: error.message})
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await TestModel.findByIdAndDelete(id);
            res.send(result);
            console.log(`Deleted ${id}`);
        }
        catch(error) {
            res.status(400).json({message: error.message})
        }
    }

}