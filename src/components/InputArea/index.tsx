import { categories } from '@/data/categories';

import * as C from './styles';
import { InputAreaProps } from './types';
import { useInputArea } from './useInputArea';

export const InputArea = ({ onAdd }: InputAreaProps) => {
  const { formFields, handleChange, handleAddEvent } = useInputArea(onAdd);

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type='date'
          name='date'
          value={formFields.date}
          onChange={handleChange}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          name='category'
          value={formFields.category}
          onChange={handleChange}
        >
          <option value=''>Selecione uma categoria</option>
          {Object.keys(categories).map((key) => (
            <option key={key} value={key}>
              {categories[key].title}
            </option>
          ))}
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type='text'
          name='title'
          value={formFields.title}
          onChange={handleChange}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type='number'
          name='value'
          value={formFields.value}
          onChange={handleChange}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
