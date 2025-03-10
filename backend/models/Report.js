const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  period: { type: String, required: true }, // e.g., "2025-03"
  totalIncome: { type: Number, default: 0 },
  totalExpenses: { type: Number, default: 0 },
  totalSavings: { type: Number, default: 0 },
  expensesByCategory: [
    {
      category: String,
      amount: Number,
    },
  ],
});

module.exports = mongoose.model('Report', reportSchema);