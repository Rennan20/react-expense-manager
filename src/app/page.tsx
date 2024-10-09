'use client';
import { useState, useEffect } from 'react';

import { InfoArea } from '../components/InfoArea';
import { InputArea } from '../components/InputArea';
import { TableArea } from '../components/TableArea';
import { categories } from '../data/categories';
import { items } from '../data/items';
import { getCurrentMonth, filterListByMonth } from '../helpers/dateFilter';
import * as C from '../styles/App.styles';
import { Item } from '../types/Item';

export default function HomePage() {
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (const item of filteredList) {
      if (categories[item.category].expense) {
        expenseCount += item.value;
      } else {
        incomeCount += item.value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    setList((prevList) => [...prevList, item]);
  };

  return (
    <>
      <C.Container>
        <C.Header>
          <C.HeaderText>Gerenciador financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          <InfoArea
            onMonthChange={handleMonthChange}
            currentMonth={currentMonth}
            income={income}
            expense={expense}
          />
          <InputArea onAdd={handleAddItem} />
          <TableArea list={filteredList} />
        </C.Body>
      </C.Container>
    </>
  );
}
