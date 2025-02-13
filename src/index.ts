/// <reference types="cypress" />
/// <reference types="node" />

interface DeviceList {
	model: string;
	width: number;
	height: number;
}

type Device = object;

type DeviceListArray = Device[];

type Urls = string[];

function prepareTestsForDevices(deviceList: DeviceListArray) {
	return function setPagesToTest(pageList: Urls, callback: any): void {
		deviceList.forEach((device: DeviceList) => {
			context(`Testing on ${device.model}`, () => {
				beforeEach(() => {
					cy.viewport(device.width, device.height);
				});

				callback();
			});
		});
	};
}

module.exports = prepareTestsForDevices;
