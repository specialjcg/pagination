const setPagination = (list: number[], index: number) => {
  const pageSelect = '(' + list[index] + ')';
  const startInfSeven = [...list.slice(0, index)];
  const startSupSeven = [1, '...'];
  const lastPageInfSeven = [...list.slice(index + 1, list.length)];
  const lastPageSupSeven = ['...', list.length];
  if (list.length <= 7) { return [...startInfSeven, pageSelect, ...lastPageInfSeven]; }

  if (index <= 3) { return [...startInfSeven, pageSelect, ...list.slice(index + 1, 5), ...lastPageSupSeven]; }

  if (index >= list.length - 4) {
    return [...startSupSeven, ...list.slice(list.length - 5, index), pageSelect, ...lastPageInfSeven];
  }

  return [...startSupSeven, list[index - 1], pageSelect, list[index + 1], ...lastPageSupSeven];
};


const getList = (max: number) => {
  return Array.from({length: max}, (v, k) => k + 1);
};

describe('kata pagination seven', () => {
  const list5 = getList(5);
  const list9 = getList(9);
  it('should show  a list of page 1 to 5 with page  3 index ', () => {
    expect(setPagination(list5, 2)).toEqual([1, 2, '(3)', 4, 5]);
  });
  it('should show  a list of page 1 to 5  with page  4 index', () => {
    expect(setPagination(list5, 3)).toEqual([1, 2, 3, '(4)', 5]);
  });
  it('should show  a list of page 1 to 5 with page  1 index', () => {
    expect(setPagination(list5, 0)).toEqual(['(1)', 2, 3, 4, 5]);
  });
  it('should show  a list of page 1 to 5 with page  5index', () => {
    expect(setPagination(list5, 4)).toEqual([1, 2, 3, 4, '(5)']);
  });
  it('should show  a list of page 1 to 7 with page  5 index', () => {
    expect(setPagination(getList(7), 5)).toEqual([1, 2, 3, 4, 5, '(6)', 7]);
  });
  it('should show  a list of page 1 to 100 with page  42 index', () => {
    expect(setPagination(getList(100), 42)).toEqual([1, '...', 42, '(43)', 44, '...', 100]);
  });
  it('should show  a list of page 1 to 9 with page  5 index', () => {
    expect(setPagination(list9, 4)).toEqual([1, '...', 4, '(5)', 6, '...', 9]);
  });
  it('should show  a list of page 1 to 9 with page  2 index and first page ', () => {

    expect(setPagination(list9, 1)).toEqual([1, '(2)', 3, 4, 5, '...', 9]);
  });
  it('should show  a list of page 1 to 9 with page  4 index and first page ', () => {
    expect(setPagination(list9, 3)).toEqual([1, 2, 3, '(4)', 5, '...', 9]);
  });
  it('should show  a list of page 1 to 9 with page  8 index and last page ', () => {
    expect(setPagination(list9, 7)).toEqual([1, '...', 5, 6, 7, '(8)', 9]);
  });
  it('should show  a list of page 1 to 9 with page  6 index and last page ', () => {

    expect(setPagination(list9, 5)).toEqual([1, '...', 5, '(6)', 7, 8, 9]);
  });
});
