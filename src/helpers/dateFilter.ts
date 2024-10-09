import { Item } from '../types/Item';

// Retorna o mês e ano atual no formato YYYY-MM
export const getCurrentMonth = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

// Filtra a lista de itens pelo mês e ano fornecidos
export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const [year, month] = date.split('-').map(Number); // Converte para número

  return list.filter((item) => {
    const itemDate = new Date(item.date); // Assume que item.date é uma string que pode ser convertida
    return itemDate.getFullYear() === year && itemDate.getMonth() + 1 === month;
  });
};

// Formata a data em DD/MM/YYYY
export const formatDate = (date: Date): string => {
  const day = addZeroToDate(date.getDate());
  const month = addZeroToDate(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Adiciona zero à frente se o número for menor que 10
const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

// Formata o mês atual para um formato legível
export const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split('-').map(Number); // Converte para número
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return `${months[month - 1]} de ${year}`;
};

// Ajusta a data a partir do campo de string no formato YYYY-MM-DD
export const newDateAdjusted = (dateField: string): Date => {
  const [year, month, day] = dateField.split('-').map(Number);
  return new Date(year, month - 1, day); // Mês é zero-indexado em Date
};
