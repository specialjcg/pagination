const startInfSeven = (index: number) => {
  return range(1, index - 1);
};
const lastPageInfSeven = (index: number, page: number) => {
  return range(index + 1 , page );
};
const ellipseStart = () => {
  return [1, '...'];
};
const ellipseEnd = (page: number) => {
  return ['...', page];
};
const  pageUnderSeven = (index: number, page: number) => {
  return [...startInfSeven(index), '(' + index + ')', ...lastPageInfSeven(index, page)];
};

const indexNearStart = (index: number, page: number) => {
  return [...startInfSeven(index), '(' + index + ')', ...range(index + 1, 5), ...ellipseEnd(page)];
};
const indexNearEnd = (index: number, page: number) => {
  return [...ellipseStart(), ...range(page - 4, index - 1), '(' + index + ')', ...lastPageInfSeven(index, page)];
};

const paginationSeven = (index: number, page: number) => {
  return [...ellipseStart(), index - 1, '(' + index + ')', index + 1, ...ellipseEnd(page)];
};
const setPagination = (index: number, page: number) => {
  if (page <= 7) { return pageUnderSeven(index, page); }

  if (index <= 4) { return indexNearStart(index, page); }

  if (index >= page - 3) {return indexNearEnd(index, page);
  }

  return paginationSeven(index, page);
};

const range = (start: number, end: number) => {
  return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
};


describe('kata pagination seven', () => {

  it('should show  a list of page 1 to 5 with page  3 index ', () => {
    expect(setPagination(3, 5).join(' ')).toEqual('1 2 (3) 4 5');
  });
  it('should show  a list of page 1 to 5  with page  4 index', () => {
    expect(setPagination(4, 5).join(' ')).toEqual('1 2 3 (4) 5');
  });
  it('should show  a list of page 1 to 5 with page  1 index', () => {
    expect(setPagination(1, 5).join(' ')).toEqual('(1) 2 3 4 5');
  });
  it('should show  a list of page 1 to 5 with page  5index', () => {
    expect(setPagination(5, 5).join(' ')).toEqual('1 2 3 4 (5)');
  });
  it('should show  a list of page 1 to 7 with page  5 index', () => {
    expect(setPagination(6, 7).join(' ')).toEqual('1 2 3 4 5 (6) 7');
  });
  it('should show  a list of page 1 to 100 with page  42 index', () => {
    expect(setPagination(43, 100).join(' ')).toEqual('1 ... 42 (43) 44 ... 100');
  });
  it('should show  a list of page 1 to 9 with page  5 index', () => {
    expect(setPagination(5, 9).join(' ')).toEqual('1 ... 4 (5) 6 ... 9');
  });
  it('should show  a list of page 1 to 9 with page  2 index and first page ', () => {

    expect(setPagination(2, 9).join(' ')).toEqual('1 (2) 3 4 5 ... 9');
  });
  it('should show  a list of page 1 to 9 with page  4 index and first page ', () => {
    expect(setPagination(4, 9).join(' ')).toEqual('1 2 3 (4) 5 ... 9');
  });
  it('should show  a list of page 1 to 9 with page  8 index and last page ', () => {
    expect(setPagination(8, 9).join(' ')).toEqual('1 ... 5 6 7 (8) 9');
  });
  it('should show  a list of page 1 to 9 with page  6 index and last page ', () => {

    expect(setPagination(6, 9).join(' ')).toEqual('1 ... 5 (6) 7 8 9');
  });
});
