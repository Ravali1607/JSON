/*global QUnit*/

sap.ui.define([
	"project3/controller/jsonData.controller"
], function (Controller) {
	"use strict";

	QUnit.module("jsonData Controller");

	QUnit.test("I should test the jsonData controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
