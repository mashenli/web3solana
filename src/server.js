const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB 连接字符串
const MONGO_URI = '你的MongoDB连接字符串';

// 连接到 MongoDB 数据库
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 定义一个简单的 Schema 和 Model 来存储交易数据
const TransactionSchema = new mongoose.Schema({
  publicKey: String,
  signature: String,
  amount: Number,
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

app.use(bodyParser.json());

// 接收 POST 请求并将数据存储到 MongoDB
app.post('/recordTransaction', async (req, res) => {
  const { publicKey, signature, amount } = req.body;

  try {
    // 创建并保存交易记录
    const transaction = new Transaction({ publicKey, signature, amount });
    await transaction.save();

    console.log(`Recording transaction: PublicKey: ${publicKey}, Signature: ${signature}, Amount: ${amount} SOL`);
    res.status(200).json({ message: "Transaction recorded successfully" });
  } catch (error) {
    console.error('Error saving the transaction:', error);
    res.status(500).json({ message: "Failed to record the transaction" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
