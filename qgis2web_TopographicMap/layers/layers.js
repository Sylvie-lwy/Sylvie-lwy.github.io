ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2326").setExtent([777204.772311, 791050.116022, 890041.646944, 856861.841550]);
var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA</a>',
                url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BDRYLINE_2 = new ol.format.GeoJSON();
var features_BDRYLINE_2 = format_BDRYLINE_2.readFeatures(json_BDRYLINE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_BDRYLINE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDRYLINE_2.addFeatures(features_BDRYLINE_2);
var lyr_BDRYLINE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDRYLINE_2, 
                style: style_BDRYLINE_2,
                interactive: true,
    title: 'BDRYLINE<br />\
    <img src="styles/legend/BDRYLINE_2_0.png" /> HKSAR Boundary<br />'
        });
var format_HYDRPOLY_3 = new ol.format.GeoJSON();
var features_HYDRPOLY_3 = format_HYDRPOLY_3.readFeatures(json_HYDRPOLY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_HYDRPOLY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HYDRPOLY_3.addFeatures(features_HYDRPOLY_3);
var lyr_HYDRPOLY_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HYDRPOLY_3, 
                style: style_HYDRPOLY_3,
                interactive: true,
    title: 'HYDRPOLY<br />\
    <img src="styles/legend/HYDRPOLY_3_0.png" /> Breakwater <br />\
    <img src="styles/legend/HYDRPOLY_3_1.png" /> Pond / Moat <br />\
    <img src="styles/legend/HYDRPOLY_3_2.png" /> Reservoir <br />\
    <img src="styles/legend/HYDRPOLY_3_3.png" /> Stream Course (open) <br />'
        });
var format_LANDPOLY_4 = new ol.format.GeoJSON();
var features_LANDPOLY_4 = format_LANDPOLY_4.readFeatures(json_LANDPOLY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_LANDPOLY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANDPOLY_4.addFeatures(features_LANDPOLY_4);
var lyr_LANDPOLY_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LANDPOLY_4, 
                style: style_LANDPOLY_4,
                interactive: true,
    title: 'LANDPOLY<br />\
    <img src="styles/legend/LANDPOLY_4_0.png" /> Mud Flat <br />\
    <img src="styles/legend/LANDPOLY_4_1.png" /> Sand <br />\
    <img src="styles/legend/LANDPOLY_4_2.png" /> Cultivation <br />\
    <img src="styles/legend/LANDPOLY_4_3.png" /> Mangrove <br />\
    <img src="styles/legend/LANDPOLY_4_4.png" /> Swamp / Marsh <br />\
    <img src="styles/legend/LANDPOLY_4_5.png" /> Woodland <br />'
        });
var format_ELEVLINE_5 = new ol.format.GeoJSON();
var features_ELEVLINE_5 = format_ELEVLINE_5.readFeatures(json_ELEVLINE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_ELEVLINE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEVLINE_5.addFeatures(features_ELEVLINE_5);
var lyr_ELEVLINE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEVLINE_5, 
                style: style_ELEVLINE_5,
                interactive: true,
    title: 'ELEVLINE<br />\
    <img src="styles/legend/ELEVLINE_5_0.png" /> 50m - 100m <br />\
    <img src="styles/legend/ELEVLINE_5_1.png" /> 100m - 200m <br />\
    <img src="styles/legend/ELEVLINE_5_2.png" /> 200m - 300m <br />\
    <img src="styles/legend/ELEVLINE_5_3.png" /> 300m - 500m <br />\
    <img src="styles/legend/ELEVLINE_5_4.png" /> 500m - 950m <br />'
        });
var format_HYDRLINE_6 = new ol.format.GeoJSON();
var features_HYDRLINE_6 = format_HYDRLINE_6.readFeatures(json_HYDRLINE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_HYDRLINE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HYDRLINE_6.addFeatures(features_HYDRLINE_6);
var lyr_HYDRLINE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HYDRLINE_6, 
                style: style_HYDRLINE_6,
                interactive: true,
    title: 'HYDRLINE<br />\
    <img src="styles/legend/HYDRLINE_6_0.png" /> Coastline <br />\
    <img src="styles/legend/HYDRLINE_6_1.png" /> Stream Course (major) <br />\
    <img src="styles/legend/HYDRLINE_6_2.png" /> Stream Course (open) <br />'
        });
var format_BLDGPOLY_7 = new ol.format.GeoJSON();
var features_BLDGPOLY_7 = format_BLDGPOLY_7.readFeatures(json_BLDGPOLY_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_BLDGPOLY_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLDGPOLY_7.addFeatures(features_BLDGPOLY_7);
var lyr_BLDGPOLY_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BLDGPOLY_7, 
                style: style_BLDGPOLY_7,
                interactive: true,
    title: 'BLDGPOLY<br />\
    <img src="styles/legend/BLDGPOLY_7_0.png" /> Building (Built-up)<br />\
    <img src="styles/legend/BLDGPOLY_7_1.png" /> Cottage Area / Temporary Structure<br />'
        });

lyr_StamenWatercolor_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_BDRYLINE_2.setVisible(true);lyr_HYDRPOLY_3.setVisible(true);lyr_LANDPOLY_4.setVisible(true);lyr_ELEVLINE_5.setVisible(true);lyr_HYDRLINE_6.setVisible(true);lyr_BLDGPOLY_7.setVisible(true);
var layersList = [lyr_StamenWatercolor_0,lyr_OSMStandard_1,lyr_BDRYLINE_2,lyr_HYDRPOLY_3,lyr_LANDPOLY_4,lyr_ELEVLINE_5,lyr_HYDRLINE_6,lyr_BLDGPOLY_7];
lyr_BDRYLINE_2.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_HYDRPOLY_3.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_LANDPOLY_4.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_ELEVLINE_5.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'HEIGHT': 'HEIGHT', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_HYDRLINE_6.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_BLDGPOLY_7.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_BDRYLINE_2.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_HYDRPOLY_3.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_LANDPOLY_4.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_ELEVLINE_5.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'HEIGHT': 'Range', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_HYDRLINE_6.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_BLDGPOLY_7.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_BDRYLINE_2.set('fieldLabels', {'TYPE': 'inline label', });
lyr_HYDRPOLY_3.set('fieldLabels', {'TYPE': 'inline label', });
lyr_LANDPOLY_4.set('fieldLabels', {'TYPE': 'inline label', });
lyr_ELEVLINE_5.set('fieldLabels', {'HEIGHT': 'inline label', });
lyr_HYDRLINE_6.set('fieldLabels', {'TYPE': 'inline label', });
lyr_BLDGPOLY_7.set('fieldLabels', {'TYPE': 'inline label', });
lyr_BLDGPOLY_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});