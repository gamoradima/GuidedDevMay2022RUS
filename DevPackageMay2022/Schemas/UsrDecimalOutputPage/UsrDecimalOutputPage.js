define("UsrDecimalOutputPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Button-00d65d7ec4c54435ab726a77d5ed2f14",
				"values": {
					"itemType": 5,
					"id": "b117bff5-fadc-4f26-8ece-a7fcec412b88",
					"style": "green",
					"tag": "Button1",
					"caption": {
						"bindTo": "Resources.Strings.Button1ButtonCaption"
					},
					"click": {
						"bindTo": "onSaveButtonClick"
					},
					"enabled": true
				},
				"parentName": "ProcessActionButtons",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Button-a47b778a50ad4a349a9f68dc09ecd62c",
				"values": {
					"itemType": 5,
					"id": "4c7412ff-a8a3-475f-898b-27aa145ed797",
					"style": "green",
					"tag": "Button2",
					"caption": {
						"bindTo": "Resources.Strings.Button2ButtonCaption"
					},
					"click": {
						"bindTo": "onSaveButtonClick"
					},
					"enabled": true
				},
				"parentName": "ProcessActionButtons",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOATeb39a2e3-f37a-41ea-bedf-275ebdd48566",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 7,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrFloat1",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
