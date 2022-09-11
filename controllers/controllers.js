import quoteModel from '../models/quoteModel.js';
import bcrypt from 'bcrypt'

export const createQuote = async (req, res) => {
    try {
        const saltRounds = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, saltRounds)
        const quote = new quoteModel({
            ...req.body,
            password: hash
        });
        await quote.save();
        res.status(201).send(`New quote about ${req.body.topic} has been added`)
    } catch (error) {
        res.status(405).send(error);    
        console.log(error)
    }
}
export const allQuotes = async (req, res) => {
    try {
        const quotes = await quoteModel.find({}, {password: 0});
        res.status(202).json(quotes)
    } catch (error) {
        res.status(405).send(error);    
        console.log(error)
    }
}
export const findQuote = async (req, res) => {
    try {
        const quoteById = await quoteModel.findById(req.params.id);
        res.status(202).send(quoteById)
    } catch (error) {
        res.status(405).send(error);    
        console.log(error)
    }
}
export const updateInfo = async (req,res)=> {
    try {
        const needUpdate = await quoteModel.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true})
        res.status(201).json(needUpdate)
    } catch (error) {
        res.status(405).send(error);
        console.error(error)
    }
}
export const deleteQuote = async (req, res) => {
    try {
        await quoteModel.findByIdAndDelete(req.params.id)
        res.status(301).send(`Quote has been deleted`)
    } catch (error) {
    res.status(405).send(error);
       console.error(error)
    }
}