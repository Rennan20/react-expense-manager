import { useState } from 'react';

import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';

export const useInputArea = (onAdd: (item: Item) => void) => {
  const [formFields, setFormFields] = useState({
    date: '',
    category: '',
    title: '',
    value: 0,
  });

  const categoryKeys: string[] = Object.keys(categories);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: name === 'value' ? parseFloat(value) : value,
    }));
  };

  const validateFields = (): string[] => {
    const errors: string[] = [];
    const { date, category, title, value } = formFields;

    if (isNaN(new Date(date).getTime())) {
      errors.push('Data inválida!');
    }
    if (!categoryKeys.includes(category)) {
      errors.push('Categoria inválida!');
    }
    if (title.trim() === '') {
      errors.push('Título vazio!');
    }
    if (value <= 0) {
      errors.push('Valor inválido!');
    }

    return errors;
  };

  const handleAddEvent = () => {
    const errors = validateFields();

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onAdd({
        date: newDateAdjusted(formFields.date),
        category: formFields.category,
        title: formFields.title,
        value: formFields.value,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setFormFields({
      date: '',
      category: '',
      title: '',
      value: 0,
    });
  };

  return {
    formFields,
    handleChange,
    handleAddEvent,
  };
};
