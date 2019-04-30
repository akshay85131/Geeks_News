
import express from 'express'
import { newArticle } from './controlers/helper'
const router = express.Router()

router.route('/')
  .post(newArticle)

export default router
