'use strict';

describe('Service: httpconfig.constant', function () {

  // load the service's module
  beforeEach(module('spaHappyApp'));

  // instantiate service
  var httpconfig.constant;
  beforeEach(inject(function (_httpconfig.constant_) {
    httpconfig.constant = _httpconfig.constant_;
  }));

  it('should do something', function () {
    expect(!!httpconfig.constant).toBe(true);
  });

});
