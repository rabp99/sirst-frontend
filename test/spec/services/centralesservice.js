'use strict';

describe('Service: centralesService', function () {

  // load the service's module
  beforeEach(module('sirstFrontendApp'));

  // instantiate service
  var centralesService;
  beforeEach(inject(function (_centralesService_) {
    centralesService = _centralesService_;
  }));

  it('should do something', function () {
    expect(!!centralesService).toBe(true);
  });

});
