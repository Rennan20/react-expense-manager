import { TableItem } from '../TableItem';
import * as C from './styles';
import { TableAreaProps } from './types';

export const TableArea = ({ list }: TableAreaProps) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColum width={100}>Data</C.TableHeadColum>
          <C.TableHeadColum width={130}>Categoria</C.TableHeadColum>
          <C.TableHeadColum>Título</C.TableHeadColum>
          <C.TableHeadColum width={160}>Valor</C.TableHeadColum>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
