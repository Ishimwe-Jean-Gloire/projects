/// <reference path="JsDiagram-vsdoc.js" />

var Rect = MindFusion.Drawing.Rect;
var Size = MindFusion.Drawing.Size;
var Font = MindFusion.Drawing.Font;
var FontStyle = MindFusion.Drawing.FontStyle;
var ImageAlign = MindFusion.Drawing.ImageAlign;

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var Shape = MindFusion.Diagramming.Shape;
var Style = MindFusion.Diagramming.Style;
var Theme = MindFusion.Diagramming.Theme;
var Events = MindFusion.Diagramming.Events;
var Behavior = MindFusion.Diagramming.Behavior;
var Alignment = MindFusion.Diagramming.Alignment;
var ShadowsStyle = MindFusion.Diagramming.ShadowsStyle;


var tshirtTemplate =
{
	outline: "M0,25 L22,8 L35,8 L50,25 L65,8 L78,8 L100,25 L90,40 L75,32 L75,90 L25,90 L25,32 L10,40 Z",
	decoration: "M35,8 L65,8",
	fillMode: "nonzero"
}

var tshirt = new Shape(tshirtTemplate);
tshirt.id = "Tshirt";
Shape.shapes[tshirt.id] = tshirt; // for acdiagramViewcess with fromId
 

document.addEventListener("DOMContentLoaded", function () {

	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = DiagramView.create(document.getElementById("diagram"));
	diagramView.allowInplaceEdit = true;
	diagramView.behavior = Behavior.Modify;
	
	diagram = diagramView.diagram;
	diagram.bounds = new Rect(0, 0, 350, 520);
	diagram.backgroundImageUrl = "field.png";
	diagram.backgroundImageAlign = ImageAlign.Stretch;
	diagram.shadowsStyle = ShadowsStyle.None;
	

	var theme = new Theme();
	var shapeNodeStyle = new Style();
	shapeNodeStyle.textColor = "#ffffff";
	shapeNodeStyle.fontName = "Verdana";
	shapeNodeStyle.fontSize = 7;
	theme.styles.set("std:ShapeNode", shapeNodeStyle);

	diagram.theme = theme;

	// create a NodeListView component that wraps the "nodeList" canvas
	var nodeList = MindFusion.Diagramming.NodeListView.create(document.getElementById("nodeList"));
	nodeList.setTargetView(document.getElementById("diagram"));
	nodeList.iconSize = new Size(50, 50);
	nodeList.backColor = "#c0c0c0";
	initNodeList(nodeList, diagram);

	// create an Overview component that wraps the "overview" canvas
	var overview = MindFusion.Diagramming.Overview.create(document.getElementById("overview"));
	overview.diagramView = diagramView;

	// create an ZoomControl component that wraps the "zoomer" canvas
	var zoomer = MindFusion.Controls.ZoomControl.create(document.getElementById("zoomer"));
	zoomer.target = diagramView;
		
});


function initNodeList(nodeList, diagram) {
	// add some nodes to the NodeListView
	
	var node = new MindFusion.Diagramming.ShapeNode(diagram);
	node.shape = Shape.fromId("Tshirt");	
	node.brush = '#034c8c';
	node.text = "0";
	
	var lb1 = node.addLabel("PLAYER SURNAME");
	lb1.setEdgePosition (2, 0, 2);
	lb1.horizontalAlign = Alignment.Center;
	lb1.verticalAlign = Alignment.Center;
	lb1.font = new Font("Verdana", 3); 
	lb1.textColor = "#FFFFFF";

	nodeList.addNode(node, "Player");

	node = new MindFusion.Diagramming.ShapeNode(diagram);
	node.shape = Shape.fromId("Tshirt");	
	node.brush = '#ffffff';
	node.text = "0";
	node.textColor = "#333333";
	
	var lb1 = node.addLabel("PLAYER SURNAME");
	lb1.setEdgePosition (2, 0, 2);
	lb1.horizontalAlign = Alignment.Center;
	lb1.verticalAlign = Alignment.Center;
	lb1.font = new Font("Verdana", 3); 
	lb1.textColor = "#FFFFFF";

	nodeList.addNode(node, "Goalkeeper");

	node = new MindFusion.Diagramming.ShapeNode(diagram);
	node.shape = Shape.fromId("Tshirt");	
	node.brush = '#f20505';
	node.text = "0";
	
	var lb1 = node.addLabel("PLAYER SURNAME");
	lb1.setEdgePosition (2, 0, 2);
	lb1.horizontalAlign = Alignment.Center;
	lb1.verticalAlign = Alignment.Center;
	lb1.font = new Font("Verdana", 3); 
	lb1.textColor = "#FFFFFF";

	nodeList.addNode(node, "Player");

	node = new MindFusion.Diagramming.ShapeNode(diagram);
	node.shape = Shape.fromId("Tshirt");	
	node.brush = '#FFE000';
	node.textColor = "#333333";
	node.text = "0";
	
	var lb1 = node.addLabel("PLAYER SURNAME");
	lb1.setEdgePosition (2, 0, 2);
	lb1.horizontalAlign = Alignment.Center;
	lb1.verticalAlign = Alignment.Center;
	lb1.font = new Font("Verdana", 3); 
	lb1.textColor = "#FFFFFF";

	nodeList.addNode(node, "Goalkeeper");
}
