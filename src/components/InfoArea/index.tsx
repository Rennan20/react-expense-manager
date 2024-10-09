import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';
import { InfoAreaProps } from './types';
import { useMonth } from './useMonth';

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: InfoAreaProps) => {
  const { changeMonth } = useMonth(currentMonth, onMonthChange);

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={() => changeMonth(-1)}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={() => changeMonth(1)}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title='Receitas' value={income} />
        <ResumeItem title='Despesas' value={expense} />
        <ResumeItem
          title='Balanço'
          value={income - expense}
          color={income - expense < 0 ? 'red' : 'green'}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
