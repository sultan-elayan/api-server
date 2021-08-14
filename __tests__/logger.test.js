'use strict';


const logger = require('../src/middlewares/logger');

describe('logger', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('good', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  
  it('move next ', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});