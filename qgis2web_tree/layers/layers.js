ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2326").setExtent([785250.081901, 789579.043977, 898086.956534, 855390.769504]);
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
    <img src="styles/legend/BDRYLINE_1_1.png" /> Closed Area Boundary<br />\
    <img src="styles/legend/BDRYLINE_1_2.png" /> Firing Range Boundary<br />\
    <img src="styles/legend/BDRYLINE_1_3.png" /> Harbour Limit<br />'
        });
var format_ELEVLINE_2 = new ol.format.GeoJSON();
var features_ELEVLINE_2 = format_ELEVLINE_2.readFeatures(json_ELEVLINE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_ELEVLINE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEVLINE_2.addFeatures(features_ELEVLINE_2);
var lyr_ELEVLINE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEVLINE_2, 
                style: style_ELEVLINE_2,
                interactive: true,
    title: 'ELEVLINE<br />\
    <img src="styles/legend/ELEVLINE_2_0.png" /> 50m - 100m <br />\
    <img src="styles/legend/ELEVLINE_2_1.png" /> 100m - 200m <br />\
    <img src="styles/legend/ELEVLINE_2_2.png" /> 200m - 300m <br />\
    <img src="styles/legend/ELEVLINE_2_3.png" /> 300m - 500m <br />\
    <img src="styles/legend/ELEVLINE_2_4.png" /> 500m - 950m <br />'
        });
var format_CountryParks_3 = new ol.format.GeoJSON();
var features_CountryParks_3 = format_CountryParks_3.readFeatures(json_CountryParks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_CountryParks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryParks_3.addFeatures(features_CountryParks_3);
var lyr_CountryParks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CountryParks_3, 
                style: style_CountryParks_3,
                interactive: true,
                title: '<img src="styles/legend/CountryParks_3.png" /> Country-Parks'
            });
var format_MarineParks_4 = new ol.format.GeoJSON();
var features_MarineParks_4 = format_MarineParks_4.readFeatures(json_MarineParks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_MarineParks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineParks_4.addFeatures(features_MarineParks_4);
var lyr_MarineParks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarineParks_4, 
                style: style_MarineParks_4,
                interactive: true,
                title: '<img src="styles/legend/MarineParks_4.png" /> Marine-Parks'
            });
var format_tree_5 = new ol.format.GeoJSON();
var features_tree_5 = format_tree_5.readFeatures(json_tree_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_tree_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tree_5.addFeatures(features_tree_5);
var lyr_tree_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tree_5, 
                style: style_tree_5,
                interactive: true,
                title: '<img src="styles/legend/tree_5.png" /> tree'
            });

lyr_StamenWatercolor_0.setVisible(true);lyr_BDRYLINE_1.setVisible(true);lyr_ELEVLINE_2.setVisible(true);lyr_CountryParks_3.setVisible(true);lyr_MarineParks_4.setVisible(true);lyr_tree_5.setVisible(true);
var layersList = [lyr_StamenWatercolor_0,lyr_BDRYLINE_1,lyr_ELEVLINE_2,lyr_CountryParks_3,lyr_MarineParks_4,lyr_tree_5];
lyr_BDRYLINE_1.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_ELEVLINE_2.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'HEIGHT': 'HEIGHT', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_CountryParks_3.set('fieldAliases', {'GMID': 'GMID', 'Northing': 'Northing', 'Easting': 'Easting', 'Dataset': 'Dataset', 'Facility Name': 'Facility Name', 'Address': 'Address', '數據集': '數據集', '設施名稱': '設施名稱', '地址': '地址', 'Telephone': 'Telephone', '聯絡電話': '聯絡電話', 'Fax Number': 'Fax Number', '傳真號碼': '傳真號碼', 'Opening Hours': 'Opening Hours', '開放時間': '開放時間', 'Email Address': 'Email Address', '電郵地址': '電郵地址', 'Website': 'Website', '網頁': '網頁', 'Last Update': 'Last Update', });
lyr_MarineParks_4.set('fieldAliases', {'GMID': 'GMID', 'Northing': 'Northing', 'Easting': 'Easting', 'Dataset': 'Dataset', 'Facility Name': 'Facility Name', 'Address': 'Address', '數據集': '數據集', '設施名稱': '設施名稱', '地址': '地址', 'Telephone': 'Telephone', '聯絡電話': '聯絡電話', 'Fax Number': 'Fax Number', '傳真號碼': '傳真號碼', 'Opening Hours': 'Opening Hours', '開放時間': '開放時間', 'Email Address': 'Email Address', '電郵地址': '電郵地址', 'Website': 'Website', '網頁': '網頁', 'Last Update': 'Last Update', });
lyr_tree_5.set('fieldAliases', {'Species': 'Species', 'District': 'District', 'Responsibl': 'Responsibl', 'Location': 'Location', 'Last Inspe': 'Last Inspe', 'BRR': 'BRR', 'TR no.': 'TR no.', 'Department': 'Department', 'OVTNo': 'OVTNo', 'XCoordinat': 'XCoordinat', 'YCoordinat': 'YCoordinat', 'Type': 'Type', 'Condition': 'Condition', 'Mitigation': 'Mitigation', });
lyr_BDRYLINE_1.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_ELEVLINE_2.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'HEIGHT': 'Range', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_CountryParks_3.set('fieldImages', {'GMID': 'Hidden', 'Northing': 'Hidden', 'Easting': 'Hidden', 'Dataset': 'Hidden', 'Facility Name': 'Hidden', 'Address': 'Hidden', '數據集': 'Hidden', '設施名稱': 'TextEdit', '地址': 'Hidden', 'Telephone': 'Hidden', '聯絡電話': 'Hidden', 'Fax Number': 'Hidden', '傳真號碼': 'Hidden', 'Opening Hours': 'Hidden', '開放時間': 'Hidden', 'Email Address': 'Hidden', '電郵地址': 'Hidden', 'Website': 'Hidden', '網頁': 'TextEdit', 'Last Update': 'DateTime', });
lyr_MarineParks_4.set('fieldImages', {'GMID': 'Hidden', 'Northing': 'Hidden', 'Easting': 'Hidden', 'Dataset': 'Hidden', 'Facility Name': 'Hidden', 'Address': 'Hidden', '數據集': 'Hidden', '設施名稱': 'TextEdit', '地址': 'Hidden', 'Telephone': 'Hidden', '聯絡電話': 'Hidden', 'Fax Number': 'Hidden', '傳真號碼': 'Hidden', 'Opening Hours': 'Hidden', '開放時間': 'Hidden', 'Email Address': 'Hidden', '電郵地址': 'Hidden', 'Website': 'Hidden', '網頁': 'TextEdit', 'Last Update': 'TextEdit', });
lyr_tree_5.set('fieldImages', {'Species': 'TextEdit', 'District': 'TextEdit', 'Responsibl': 'TextEdit', 'Location': 'TextEdit', 'Last Inspe': 'DateTime', 'BRR': 'Hidden', 'TR no.': 'Hidden', 'Department': 'Hidden', 'OVTNo': 'Hidden', 'XCoordinat': 'Hidden', 'YCoordinat': 'Hidden', 'Type': 'Hidden', 'Condition': 'TextEdit', 'Mitigation': 'TextEdit', });
lyr_BDRYLINE_1.set('fieldLabels', {'TYPE': 'inline label', });
lyr_ELEVLINE_2.set('fieldLabels', {'HEIGHT': 'inline label', });
lyr_CountryParks_3.set('fieldLabels', {'設施名稱': 'inline label', '網頁': 'inline label', 'Last Update': 'inline label', });
lyr_MarineParks_4.set('fieldLabels', {'設施名稱': 'inline label', '網頁': 'inline label', 'Last Update': 'inline label', });
lyr_tree_5.set('fieldLabels', {'Species': 'inline label', 'District': 'inline label', 'Responsibl': 'inline label', 'Location': 'inline label', 'Last Inspe': 'inline label', 'Condition': 'inline label', 'Mitigation': 'inline label', });
lyr_tree_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});