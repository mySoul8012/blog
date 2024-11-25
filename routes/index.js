var express = require('express');
var router = express.Router();
var Article = require('../models/Article'); // 引入 Article 模型

// 获取所有文章
router.get('/api/articles', async function (req, res) {
  try {
    const articles = await Article.find(); // 从 MongoDB 获取所有文章
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: '获取文章失败', error: err });
  }
});

// 创建新文章
router.post('/api/articles', async function (req, res) {
  try {
    const article = new Article(req.body); // 使用请求体创建文章
    const savedArticle = await article.save(); // 保存到 MongoDB
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(400).json({ message: '创建文章失败', error: err });
  }
});

module.exports = router;
