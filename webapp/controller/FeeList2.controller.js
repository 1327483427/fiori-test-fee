sap.ui.define([
	"com/shunyu/lqp/fiori-test-fee/controller/BaseController",
	'sap/ui/model/odata/v2/ODataModel',
	'sap/ui/core/util/MockServer',
	'sap/ui/comp/smartfilterbar/SmartFilterBar'
], function (BaseController, ODataModel, MockServer,SmartFilterBar) {
	"use strict";

	return BaseController.extend("com.shunyu.lqp.fiori-test-fee.controller.FeeList", {
		onInit: function () {
			var oModel, oView,smartfilterbar;
			var oMockServer = new MockServer({
				rootUri: "/xsodata/MasterDataManagement.xsodata/"
			});
			this._oMockServer = oMockServer;
			var sPath = "../mockServer";
			oMockServer.simulate(sPath+"/metadata.xml", sPath);
			oMockServer.start();
			oModel = new ODataModel("/xsodata/MasterDataManagement.xsodata", {
				defaultCountMode: "Inline"
			});
			oView = this.getView();
			oView.setModel(oModel);
		}
	});
});