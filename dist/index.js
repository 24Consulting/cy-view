/// <reference types="cypress" />
/// <reference types="node" />
function prepareTestsForDevices(deviceList) {
    return function setPagesToTest(callback) {
                deviceList.forEach(function (device) {
                    context("Testing on " + device.model, function () {
                        beforeEach(function () {
                            cy.viewport(device.width, device.height);
                        });
                        callback();
                    });
                });
    };
}
module.exports = prepareTestsForDevices;
