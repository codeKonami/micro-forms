export type Operator = 'add' | 'substract' | 'multiply' | 'pow';

export function solver({
  left,
  right,
  operator,
}: {
  left: number;
  right: number;
  operator: Operator;
}): number | undefined {
  switch (operator) {
    case 'add':
      return left + right;
    case 'substract':
      return left - right;
    case 'multiply':
      return left * right;
    case 'pow':
      return Math.pow(left, right);

    default:
      return undefined;
      break;
  }
}
