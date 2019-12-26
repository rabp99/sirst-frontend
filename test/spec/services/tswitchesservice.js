'use strict';

describe('Service: tSwitchesService', function () {

  // load the service's module
  beforeEach(module('sirstFrontendApp'));

  // instantiate service
  var tSwitchesService;
  beforeEach(inject(function (_tSwitchesService_) {
    tSwitchesService = _tSwitchesService_;
  }));

  it('should do something', function () {
    expect(!!tSwitchesService).toBe(true);
  });

});
