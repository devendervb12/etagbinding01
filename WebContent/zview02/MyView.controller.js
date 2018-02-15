sap.ui.controller("zview02.MyView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zview02.MyView
*/
	onInit: function() {
      // MODEL IS REQUIRED
		
		// 1.model instantiation
		var oModel = new sap.ui.model.json.JSONModel();
		
		//2.loaded data
		oModel.loadData("model/data.json");
		
		//3. set the data(make model visible to view)
		this.getView().setModel(oModel);
		
		//databinding
		//get the reference of input
		var cName = this.getView().byId("cName");
		
		cName.bindProperty("value", "/company/name");
		
		var cAddrInput = this.getView().byId("cAddr");
		
		cAddrInput.bindProperty("value", "/company/address");
	//	 <Input value="{}"/>
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zview02.MyView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zview02.MyView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zview02.MyView
*/
//	onExit: function() {
//
//	}

});