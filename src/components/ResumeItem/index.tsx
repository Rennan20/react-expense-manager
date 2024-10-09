import * as C from './styles';
import { ResumeItemProps } from './types';

export const ResumeItem = ({ title, value, color }: ResumeItemProps) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>R$ {value}</C.Info>
    </C.Container>
  );
};
