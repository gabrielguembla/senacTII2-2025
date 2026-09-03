import { Router } from "express";
import { cardList } from "../controllers/cardsControllers.js"




const router = Router();

router.get('/cards', cardList);
// router.get('/cards/:id', );
// router.post('/cards/:id', );
// router.put('/cards/:id', );
// router.patch('/cards/:id', );


export default router;