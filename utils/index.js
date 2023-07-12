function dividePriceByBiWeeks(newGoal) {
  const today = new Date(newGoal.goalCreateDate);
  const target = new Date(newGoal.goalDueDate);
  const biWeeks = [];

  if (target >= today) {
    const current = new Date(today);
    current.setDate(current.getDate() + (14 - current.getDay()));

    while (current <= target) {
      const formattedDate = current.toISOString().split('T')[0];
      const biWeek = {
        date: formattedDate,
        price: newGoal.cost / Math.ceil((target - current) / (1000 * 3600 * 24 * 14))
      };
      biWeeks.push(biWeek);
      current.setDate(current.getDate() + 14);
    }
  }

  return biWeeks;
}

function calculateBiWeeksToTarget(newGoal) {
  const savingsPercentage = 0.1;
  let currentPrice = 0;
  let biWeeks = 0;
  const biWeekDates = [];

  while (currentPrice < newGoal.cost) {
    currentPrice += (newGoal.monthlyRevenue / 2) * savingsPercentage;
    biWeeks++;
    const nextBiWeek = new Date();
    nextBiWeek.setDate(nextBiWeek.getDate() + biWeeks * 14);
    const formattedDate = nextBiWeek.toISOString().split('T')[0];
    const biWeek = {
      date: formattedDate,
      complete: false
    };
    biWeekDates.push(biWeek);
  }

  return {
    biWeeks: biWeeks,
    biWeekDates: biWeekDates
  };
}
module.exports = { dividePriceByBiWeeks, calculateBiWeeksToTarget };
