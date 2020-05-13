sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/Log"
], function(MockServer, Log) {
    "use strict";
    return{
        init: function() {
            var oMockServer = new MockServer({
                rootUri: "/xsodata/MasterDataManagement.xsodata/"
            });
            this._oMockServer = oMockServer;
            var sPath = "../localService";
            oMockServer.simulate(sPath + "/metadata.xml", sPath+"/mockdata");
            oMockServer.start();
        }

    }

});