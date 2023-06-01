ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2326").setExtent([780021.346999, 794160.412948, 886630.126037, 856339.622782]);
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
    <img src="styles/legend/BDRYLINE_1_0.png" /> HKSAR Boundary <br />'
        });
var format_FACILINE_2 = new ol.format.GeoJSON();
var features_FACILINE_2 = format_FACILINE_2.readFeatures(json_FACILINE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_FACILINE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FACILINE_2.addFeatures(features_FACILINE_2);
var lyr_FACILINE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FACILINE_2, 
                style: style_FACILINE_2,
                interactive: true,
    title: 'FACILINE<br />\
    <img src="styles/legend/FACILINE_2_0.png" /> Power Line with Pylon <br />\
    <img src="styles/legend/FACILINE_2_1.png" /> Water Pipeline (Drainage Service)<br />\
    <img src="styles/legend/FACILINE_2_2.png" /> Water Tunnel (Drainage Service)<br />'
        });
var format_FACIPOLY_3 = new ol.format.GeoJSON();
var features_FACIPOLY_3 = format_FACIPOLY_3.readFeatures(json_FACIPOLY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_FACIPOLY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FACIPOLY_3.addFeatures(features_FACIPOLY_3);
var lyr_FACIPOLY_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FACIPOLY_3, 
                style: style_FACIPOLY_3,
                interactive: true,
    title: 'FACIPOLY<br />\
    <img src="styles/legend/FACIPOLY_3_0.png" /> Water Tank / Treatment Works <br />\
    <img src="styles/legend/FACIPOLY_3_1.png" /> Golf Course <br />\
    <img src="styles/legend/FACIPOLY_3_2.png" /> Park<br />\
    <img src="styles/legend/FACIPOLY_3_3.png" /> Sports Ground / Football Field <br />\
    <img src="styles/legend/FACIPOLY_3_4.png" /> Racetrack <br />\
    <img src="styles/legend/FACIPOLY_3_5.png" /> Gas Tank / Oil Tank / Kerosene Store <br />'
        });
var format_FACISYMBOL_4 = new ol.format.GeoJSON();
var features_FACISYMBOL_4 = format_FACISYMBOL_4.readFeatures(json_FACISYMBOL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_FACISYMBOL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FACISYMBOL_4.addFeatures(features_FACISYMBOL_4);
var lyr_FACISYMBOL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FACISYMBOL_4, 
                style: style_FACISYMBOL_4,
                interactive: true,
    title: 'FACISYMBOL<br />\
    <img src="styles/legend/FACISYMBOL_4_0.png" /> Electricity Pylon<br />\
    <img src="styles/legend/FACISYMBOL_4_1.png" /> Signal Station<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_BDRYLINE_1.setVisible(true);lyr_FACILINE_2.setVisible(true);lyr_FACIPOLY_3.setVisible(true);lyr_FACISYMBOL_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BDRYLINE_1,lyr_FACILINE_2,lyr_FACIPOLY_3,lyr_FACISYMBOL_4];
lyr_BDRYLINE_1.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_FACILINE_2.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_FACIPOLY_3.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_FACISYMBOL_4.set('fieldAliases', {'gml_id': 'gml_id', 'ANNOSYMID': 'ANNOSYMID', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_BDRYLINE_1.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_FACILINE_2.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_FACIPOLY_3.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_FACISYMBOL_4.set('fieldImages', {'gml_id': 'Hidden', 'ANNOSYMID': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'SUBCAT': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_BDRYLINE_1.set('fieldLabels', {});
lyr_FACILINE_2.set('fieldLabels', {'TYPE': 'inline label', });
lyr_FACIPOLY_3.set('fieldLabels', {'TYPE': 'inline label', });
lyr_FACISYMBOL_4.set('fieldLabels', {});
lyr_FACISYMBOL_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});