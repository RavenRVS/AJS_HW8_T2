import ErrorRepository from '../app';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
    errorRepo.addError(1, 'Error description 1');
    errorRepo.addError(2, 'Error description 2');
  });

  it('should return error description', () => {
    const result = errorRepo.translate(1);
    expect(result).toEqual('Error description 1');
  });

  it('should return "Unknown error" for unknown error code', () => {
    const result = errorRepo.translate(3);
    expect(result).toEqual('Unknown error');
  });
});
