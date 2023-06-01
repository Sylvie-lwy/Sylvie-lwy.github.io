ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2326").setExtent([787691.017312, 788738.949990, 890958.479580, 854550.675517]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BDRYLINE_1 = new ol.format.GeoJSON();
var features_BDRYLINE_1 = format_BDRYLINE_1.readFeatures(json_BDRYLINE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_BDRYLINE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDRYLINE_1.addFeatures(features_BDRYLINE_1);
var lyr_BDRYLINE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDRYLINE_1, 
                style: style_BDRYLINE_1,
                interactive: true,
    title: 'BDRYLINE<br />\
    <img src="styles/legend/BDRYLINE_1_0.png" /> HKSAR Boundary<br />\
    <img src="styles/legend/BDRYLINE_1_1.png" /> Closed Area Boundary <br />\
    <img src="styles/legend/BDRYLINE_1_2.png" /> Firing Range Boundary<br />\
    <img src="styles/legend/BDRYLINE_1_3.png" /> Harbour Limit<br />'
        });
var format_2011Population_2 = new ol.format.GeoJSON();
var features_2011Population_2 = format_2011Population_2.readFeatures(json_2011Population_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_2011Population_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2011Population_2.addFeatures(features_2011Population_2);
var lyr_2011Population_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2011Population_2, 
                style: style_2011Population_2,
                interactive: true,
    title: '2011-Population<br />\
    <img src="styles/legend/2011Population_2_0.png" /> 400 - 3000 <br />\
    <img src="styles/legend/2011Population_2_1.png" /> 3000 - 10000 <br />\
    <img src="styles/legend/2011Population_2_2.png" /> 10000 - 15000 <br />\
    <img src="styles/legend/2011Population_2_3.png" /> 15000 - 25000 <br />\
    <img src="styles/legend/2011Population_2_4.png" /> 25000 - 39312 <br />'
        });
var format_2016Population_3 = new ol.format.GeoJSON();
var features_2016Population_3 = format_2016Population_3.readFeatures(json_2016Population_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_2016Population_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016Population_3.addFeatures(features_2016Population_3);
var lyr_2016Population_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016Population_3, 
                style: style_2016Population_3,
                interactive: true,
    title: '2016-Population<br />\
    <img src="styles/legend/2016Population_3_0.png" /> 400 - 3000 <br />\
    <img src="styles/legend/2016Population_3_1.png" /> 3000 - 10000 <br />\
    <img src="styles/legend/2016Population_3_2.png" /> 10000 - 15000 <br />\
    <img src="styles/legend/2016Population_3_3.png" /> 15000 - 25000 <br />\
    <img src="styles/legend/2016Population_3_4.png" /> 25000 - 45100 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_BDRYLINE_1.setVisible(true);lyr_2011Population_2.setVisible(true);lyr_2016Population_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BDRYLINE_1,lyr_2011Population_2,lyr_2016Population_3];
lyr_BDRYLINE_1.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_2011Population_2.set('fieldAliases', {'fid_1': 'fid_1', 'SSBG': 'SSBG', 'SSBG_ENG': 'SSBG_ENG', 'SSBG_CHI': 'SSBG_CHI', 'T_POP': 'T_POP', 'DH': 'DH', 'OQ': 'OQ', '2011_POP': '2011_POP', });
lyr_2016Population_3.set('fieldAliases', {'fid_1': 'fid_1', 'SSBG': 'SSBG', 'SSBG_ENG': 'SSBG_ENG', 'SSBG_CHI': 'SSBG_CHI', 'T_POP': 'T_POP', 'DH': 'DH', 'OQ': 'OQ', '2016_POP': '2016_POP', });
lyr_BDRYLINE_1.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_2011Population_2.set('fieldImages', {'fid_1': 'Hidden', 'SSBG': 'TextEdit', 'SSBG_ENG': 'Hidden', 'SSBG_CHI': 'Hidden', 'T_POP': 'Hidden', 'DH': 'Hidden', 'OQ': 'Hidden', '2011_POP': 'TextEdit', });
lyr_2016Population_3.set('fieldImages', {'fid_1': 'Hidden', 'SSBG': 'TextEdit', 'SSBG_ENG': 'Hidden', 'SSBG_CHI': 'Hidden', 'T_POP': 'Hidden', 'DH': 'Hidden', 'OQ': 'Hidden', '2016_POP': 'TextEdit', });
lyr_BDRYLINE_1.set('fieldLabels', {'TYPE': 'inline label', });
lyr_2011Population_2.set('fieldLabels', {'SSBG': 'inline label', '2011_POP': 'inline label', });
lyr_2016Population_3.set('fieldLabels', {'SSBG': 'inline label', '2016_POP': 'inline label', });
lyr_2016Population_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});