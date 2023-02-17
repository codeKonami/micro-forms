import { solver } from './solver';

describe('Solver', () => {
  it('Solve a simple add', () => {
    const result = solver({ left: 10, right: 100, operator: 'add' });
    expect(result).toBe(110);
  });

  it('Solve a simple substract', () => {
    const result = solver({ left: 10, right: 5, operator: 'substract' });
    expect(result).toBe(5);
  });
});
