function createDockableUI(thisObj) {
    var dialog = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {
        resizeable: true,
        closeButton: true
    });
    dialog.onResizing = dialog.onResize = function () {
        this.layout.resize();
    };
    return dialog;
}

function showWindow(captionerWindow) {
    if (captionerWindow instanceof Window) {
        captionerWindow.center();
        captionerWindow.show();
    }
    if (captionerWindow instanceof Panel) {
        captionerWindow.layout.layout(true);
        captionerWindow.layout.resize();
    }
}


/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":3,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"CaptionerDock","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Captioner","preferredSize":[0,0],"margins":25,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-2":{"id":2,"type":"Button","parentId":4,"style":{"enabled":true,"varName":null,"text":"Import SRT","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":"FrameRateValue","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"23.976","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"ImportButtonGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-5":{"id":5,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":"FrameRate","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Framerate","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Group","parentId":11,"style":{"enabled":true,"varName":"FrameRateGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"Group","parentId":11,"style":{"enabled":true,"varName":"HeightGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-8":{"id":8,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"HeightText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Height","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"EditText","parentId":7,"style":{"enabled":true,"varName":"HeightValue","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1920","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"ImportOptionsPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Import Options","preferredSize":[0,0],"margins":12,"orientation":"column","spacing":10,"alignChildren":["right","top"],"alignment":null}},"item-12":{"id":12,"type":"EditText","parentId":15,"style":{"enabled":true,"varName":"WidthValue","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1080","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"StaticText","parentId":15,"style":{"enabled":true,"varName":"WidthText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"Group","parentId":11,"style":{"enabled":true,"varName":"WidthGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-16":{"id":16,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"StylingPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Styling","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-17":{"id":17,"type":"DropDownList","parentId":16,"style":{"enabled":true,"varName":"PositioningList","text":"DropDownList","listItems":"Bottom, Middle, Top","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}}},"order":[0,11,6,5,3,7,8,9,15,14,12,16,17,4,2],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/

// CAPTIONERDOCK
// =============
var CaptionerDock = createDockableUI(this);
CaptionerDock.text = "Captioner";
CaptionerDock.orientation = "column";
CaptionerDock.alignChildren = ["center", "top"];
CaptionerDock.spacing = 10;
CaptionerDock.margins = 25;

// IMPORTOPTIONSPANEL
// ==================
var ImportOptionsPanel = CaptionerDock.add("panel", undefined, undefined, {
    name: "ImportOptionsPanel"
});
ImportOptionsPanel.text = "Import Options";
ImportOptionsPanel.orientation = "column";
ImportOptionsPanel.alignChildren = ["right", "top"];
ImportOptionsPanel.spacing = 10;
ImportOptionsPanel.margins = 12;

// FRAMERATEGROUP
// ==============
var FrameRateGroup = ImportOptionsPanel.add("group", undefined, {
    name: "FrameRateGroup"
});
FrameRateGroup.orientation = "row";
FrameRateGroup.alignChildren = ["left", "center"];
FrameRateGroup.spacing = 10;
FrameRateGroup.margins = 0;

var FrameRate = FrameRateGroup.add("statictext", undefined, undefined, {
    name: "FrameRate"
});
FrameRate.text = "Framerate";

var FrameRateValue = FrameRateGroup.add('edittext {justify: "center", properties: {name: "FrameRateValue"}}');
FrameRateValue.text = "23.976";
// WIDTHGROUP
// ==========
var WidthGroup = ImportOptionsPanel.add("group", undefined, {
    name: "WidthGroup"
});
WidthGroup.orientation = "row";
WidthGroup.alignChildren = ["left", "center"];
WidthGroup.spacing = 10;
WidthGroup.margins = 0;

var WidthText = WidthGroup.add("statictext", undefined, undefined, {
    name: "WidthText"
});
WidthText.text = "Width";

var WidthValue = WidthGroup.add('edittext {properties: {name: "WidthValue"}}');
WidthValue.text = "1920";

// HEIGHTGROUP
// ===========
var HeightGroup = ImportOptionsPanel.add("group", undefined, {
    name: "HeightGroup"
});
HeightGroup.orientation = "row";
HeightGroup.alignChildren = ["right", "center"];
HeightGroup.spacing = 10;
HeightGroup.margins = 0;

var HeightText = HeightGroup.add("statictext", undefined, undefined, {
    name: "HeightText"
});
HeightText.text = "Height";

var HeightValue = HeightGroup.add('edittext {justify: "center", properties: {name: "HeightValue"}}');
HeightValue.text = "1080";


// STYLINGPANEL
// ============
var StylingPanel = CaptionerDock.add("panel", undefined, undefined, {
    name: "StylingPanel"
});
StylingPanel.text = "Styling";
StylingPanel.orientation = "column";
StylingPanel.alignChildren = ["left", "top"];
StylingPanel.spacing = 10;
StylingPanel.margins = 10;

var PositioningList_array = ["Bottom", "Middle", "Top"];
var PositioningList = StylingPanel.add("dropdownlist", undefined, undefined, {
    name: "PositioningList",
    items: PositioningList_array
});
PositioningList.selection = 0;

// IMPORTBUTTONGROUP
// =================
var ImportButtonGroup = CaptionerDock.add("group", undefined, {
    name: "ImportButtonGroup"
});
ImportButtonGroup.orientation = "row";
ImportButtonGroup.alignChildren = ["left", "center"];
ImportButtonGroup.spacing = 10;
ImportButtonGroup.margins = 0;

var importButton = ImportButtonGroup.add("button", undefined, undefined, {
    name: "button1"
});
importButton.text = "Import SRT";


showWindow(CaptionerDock);

importButton.onClick = function () {

    var file = File.openDialog("Import Caption File:", '*.srt');
    if (file == null) {
        alert("No file was selected. Please select a valid SRT and try again.");
        return;
    }

    const compName = file.name.replace(".srt", "");
    const number = new Number(parseFloat(FrameRateValue.text));

    const frameRate = number.valueOf();
    const width = parseInt(WidthValue.text);
    const height = parseInt(HeightValue.text)
    var comp = app.project.items.addComp(compName,
        width,
        height,
        1,
        1,
        frameRate);

    var isTimeCodeRegistered = false;
    var isContentRegistered = false;
    var contentString = "";
    var numberOfLines = 0;
    var timecode;

    file.open('r');
    var lines = file.read().split('\n');
    for (var line = 0; line < lines.length; line++) {
        var textLine = lines[line];
        if (!isNaN(textLine)) {
            if (isContentRegistered) {
                var textLayer = comp.layers.addText(contentString);

                textLayer.sourceText.value.justification = ParagraphJustification.CENTER_JUSTIFY;

                textLayer.inPoint = timecode[0];
                textLayer.outPoint = timecode[1];

                comp.duration = timecode[1];

                var anchorExpression;
                // Bottom alignment and placement of anchor point and text
                if (PositioningList.selection == 0) {
                    anchorExpression = "var a = thisLayer.sourceRectAtTime(thisLayer.inPoint, false); height = a.height; width = a.width; top = a.top; left = a.left; x = left + width / 2; y = top; [x, y];"
                    textLayer.anchorPoint.expression = anchorExpression;

                    if (numberOfLines > 1) {
                        textLayer.position.setValue([comp.width / 2, comp.height * .84988]);
                    }else{
                        textLayer.position.setValue([comp.width / 2, comp.height * .90544]);
                    }
                }
                // Middle alignment and placement of anchor point and text
                else if (PositioningList.selection == 1) {
                    anchorExpression = "var a = thisLayer.sourceRectAtTime(thisLayer.inPoint, false); height = a.height; width = a.width; top = a.top; left = a.left; x = left + width / 2; y = top + height /2; [x, y];"
                    textLayer.anchorPoint.expression = anchorExpression;
                    textLayer.position.setValue([comp.width / 2, comp.height / 2]);
                }
                // Top alignment and placement of anchor point and text
                else if (PositioningList.selection == 2) {
                    anchorExpression = "var a = thisLayer.sourceRectAtTime(thisLayer.inPoint, false); height = a.height; width = a.width; top = a.top; left = a.left; x = left + width / 2; y = top; [x, y];"
                    textLayer.anchorPoint.expression = anchorExpression;
                    textLayer.position.setValue([comp.width / 2, comp.height * .4814]);
                }


                isTimeCodeRegistered = false;
                isContentRegistered = false;
                contentString = "";
            }else{
                numberOfLines = 0;
            }
        } else {
            if (!isTimeCodeRegistered) {
                timecode = convertTime(textLine);
                isTimeCodeRegistered = true;
            } else {
                contentString += textLine + "\n";
                numberOfLines++;
                isContentRegistered = true;
            }
        }

        if (line == lines.length - 1) {
            alert("SRT conversion complete!")
        }
    }
};

function convertTime(timeString) {
    var timeIn = 0;
    var timeOut = 0;
    var splitString = timeString.split(' --> ');
    for (var line = 0; line < splitString.length; line++) {
        var milisecondSplit = splitString[line].split(',');
        var miliseconds = milisecondSplit[1];
        var hms = milisecondSplit[0]; // your input string
        var a = hms.split(':'); // split it at the colons
        // minutes are worth 60 seconds. Hours are worth 60 minutes.
        var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        if (timeIn === 0) {
            timeIn = parseFloat(seconds + "." + miliseconds);
        } else {
            timeOut = parseFloat(seconds + "." + miliseconds);
        }

    }
    return new Array(timeIn, timeOut);

}