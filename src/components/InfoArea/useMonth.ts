import { useState } from 'react';

export const useMonth = (
  initialMonth: string,
  onMonthChange: (newMonth: string) => void
) => {
  const [currentMonth, setCurrentMonth] = useState(initialMonth);

  const changeMonth = (increment: number) => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + increment);
    const newMonth = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`;
    setCurrentMonth(newMonth);
    onMonthChange(newMonth);
  };

  return {
    currentMonth,
    changeMonth,
  };
};
