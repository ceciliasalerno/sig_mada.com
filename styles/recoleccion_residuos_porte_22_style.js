var size = 0;
var placement = 'point';
function categories_recoleccion_residuos_porte_22(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'JUEVES':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(208,207,121,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'LUNES':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(39,42,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'MARTES':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,47,50,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'MIERCOLES':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(218,132,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'VIERNES':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(69,211,209,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_recoleccion_residuos_porte_22 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("DIA");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_recoleccion_residuos_porte_22(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
