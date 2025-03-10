const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const Transaction = require('../models/Transaction');

// Generate report (example: aggregate data)
router.get('/reports', async (req, res) => {
  try {
    const { period } = req.query; // e.g., "2025-03"
    const transactions = await Transaction.find({
      date: {
        $gte: new Date(period + '-01'),
        $lt: new Date(new Date(period + '-01').setMonth(new Date(period + '-01').getMonth() + 1)),
      },
    });

    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    const totalSavings = totalIncome - totalExpenses;

    const expensesByCategory = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});

    const report = new Report({
      period,
      totalIncome,
      totalExpenses,
      totalSavings,
      expensesByCategory: Object.entries(expensesByCategory).map(([category, amount]) => ({ category, amount })),
    });
    await report.save();

    res.json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;