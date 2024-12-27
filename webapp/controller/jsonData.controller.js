sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";
    var that;
    return Controller.extend("project3.controller.jsonData", {
        onInit() {
            that=this;
            var oModel = that.getOwnerComponent().getModel('ProductJSONModel');
            that.getView().setModel(oModel);
        },
        onChange: function(){
            var selectedText = that.byId("Box").getSelectedItem();
            var selectedKey = that.byId("Box").getSelectedKey();
            var oModel = that.getOwnerComponent().getModel('ProductJSONModel');
            var allProducts = oModel.getProperty("/ProductCollection");
            var filteredProducts = allProducts.filter(product=> product.ProductId === selectedKey);
            oModel.setProperty("/ProductCollection",filteredProducts);
            that.getView().setModel().refresh(true);

        //     var oModel = new sap.ui.model.json.JSONModel({
        //         ProductCollection : filteredProducts
        //     })
        // that.byId("ProductData").setModel(oModel);
        // that.getView().setModel(oModel);
        // that.clearSelection();
        },
        // categorySearch: function(oEvent){
        //     var fieldSearch = oEvent.getSource();
        //     var result = fieldSearch.getBindingContext();
        //     var idCat = result.getPath();
        // }
    });
});