import express from 'express';
const router = express.Router();
import {createQuote, allQuotes, findQuote, updateInfo, deleteQuote} from '../controllers/controllers.js'

router.post('/create', createQuote)

router.get('/quotes', allQuotes)
         
router.get('/quotes/:id', findQuote)

router.patch('/update/:id', updateInfo) 

router.delete('/delete/:id', deleteQuote)



export default router 