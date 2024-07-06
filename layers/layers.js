var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Wheatbelowthreshold1075kTons_3 = new ol.format.GeoJSON();
var features_Wheatbelowthreshold1075kTons_3 = format_Wheatbelowthreshold1075kTons_3.readFeatures(json_Wheatbelowthreshold1075kTons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wheatbelowthreshold1075kTons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheatbelowthreshold1075kTons_3.addFeatures(features_Wheatbelowthreshold1075kTons_3);
var lyr_Wheatbelowthreshold1075kTons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wheatbelowthreshold1075kTons_3, 
                style: style_Wheatbelowthreshold1075kTons_3,
                popuplayertitle: "Wheat below threshold: 10 - 75 kTons",
                interactive: false,
                    title: '<img src="styles/legend/Wheatbelowthreshold1075kTons_3.png" /> Wheat below threshold: 10 - 75 kTons'
                });
var format_Wheat_4 = new ol.format.GeoJSON();
var features_Wheat_4 = format_Wheat_4.readFeatures(json_Wheat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wheat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheat_4.addFeatures(features_Wheat_4);
var lyr_Wheat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wheat_4, 
                style: style_Wheat_4,
                popuplayertitle: "Wheat",
                interactive: false,
    title: 'Wheat<br />\
    <img src="styles/legend/Wheat_4_0.png" /> 75.000 - 76.600 Tons<br />\
    <img src="styles/legend/Wheat_4_1.png" /> 76.600 - 78.800 Tons<br />\
    <img src="styles/legend/Wheat_4_2.png" /> 78.800 - 80.700 Tons<br />\
    <img src="styles/legend/Wheat_4_3.png" /> 80.700 - 83.500 Tons<br />\
    <img src="styles/legend/Wheat_4_4.png" /> 83.500 - 86.300 Tons<br />\
    <img src="styles/legend/Wheat_4_5.png" /> 86.300 - 89.130 Tons<br />\
    <img src="styles/legend/Wheat_4_6.png" /> 89.130 - 94.900 Tons<br />'
        });
var format_IndiaBoundary_5 = new ol.format.GeoJSON();
var features_IndiaBoundary_5 = format_IndiaBoundary_5.readFeatures(json_IndiaBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndiaBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_5.addFeatures(features_IndiaBoundary_5);
var lyr_IndiaBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_5, 
                style: style_IndiaBoundary_5,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_5.png" /> India Boundary'
                });
var format_Buffer50kmClosedIndiaSites_6 = new ol.format.GeoJSON();
var features_Buffer50kmClosedIndiaSites_6 = format_Buffer50kmClosedIndiaSites_6.readFeatures(json_Buffer50kmClosedIndiaSites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer50kmClosedIndiaSites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer50kmClosedIndiaSites_6.addFeatures(features_Buffer50kmClosedIndiaSites_6);
var lyr_Buffer50kmClosedIndiaSites_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer50kmClosedIndiaSites_6, 
                style: style_Buffer50kmClosedIndiaSites_6,
                popuplayertitle: "Buffer 50 km Closed India Sites",
                interactive: false,
                    title: '<img src="styles/legend/Buffer50kmClosedIndiaSites_6.png" /> Buffer 50 km Closed India Sites'
                });
var format_ClosedIndiaSitesWheat50km_7 = new ol.format.GeoJSON();
var features_ClosedIndiaSitesWheat50km_7 = format_ClosedIndiaSitesWheat50km_7.readFeatures(json_ClosedIndiaSitesWheat50km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClosedIndiaSitesWheat50km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClosedIndiaSitesWheat50km_7.addFeatures(features_ClosedIndiaSitesWheat50km_7);
var lyr_ClosedIndiaSitesWheat50km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClosedIndiaSitesWheat50km_7, 
                style: style_ClosedIndiaSitesWheat50km_7,
                popuplayertitle: "Closed India Sites - Wheat 50 km",
                interactive: true,
    title: 'Closed India Sites - Wheat 50 km<br />\
    <img src="styles/legend/ClosedIndiaSitesWheat50km_7_0.png" /> 3.124.260 - 8.852.000 Tons<br />\
    <img src="styles/legend/ClosedIndiaSitesWheat50km_7_1.png" /> 140.092 - 3.124.260 Tons<br />\
    <img src="styles/legend/ClosedIndiaSitesWheat50km_7_2.png" /> 0 - 140.092 Tons<br />'
        });
var group_Nuevosclosedcities = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nuevos closed cities"});
var group_Feedstock = new ol.layer.Group({
                                layers: [lyr_Wheatbelowthreshold1075kTons_3,lyr_Wheat_4,],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Wheatbelowthreshold1075kTons_3.setVisible(true);lyr_Wheat_4.setVisible(true);lyr_IndiaBoundary_5.setVisible(true);lyr_Buffer50kmClosedIndiaSites_6.setVisible(true);lyr_ClosedIndiaSitesWheat50km_7.setVisible(true);
var layersList = [group_Basemap,group_Feedstock,lyr_IndiaBoundary_5,lyr_Buffer50kmClosedIndiaSites_6,lyr_ClosedIndiaSitesWheat50km_7];
lyr_Wheatbelowthreshold1075kTons_3.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Wheat_4.set('fieldAliases', {'VALUE Wheat (kTons)': 'VALUE Wheat (kTons)', });
lyr_IndiaBoundary_5.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_Buffer50kmClosedIndiaSites_6.set('fieldAliases', {'Site Name': 'Site Name', 'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'Site Statu': 'Site Statu', });
lyr_ClosedIndiaSitesWheat50km_7.set('fieldAliases', {'Site Name': 'Site Name', 'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'Site Statu': 'Site Statu', 'Wheat': 'Wheat', 'N° TOP': 'N° TOP', });
lyr_Wheatbelowthreshold1075kTons_3.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Wheat_4.set('fieldImages', {'VALUE Wheat (kTons)': 'TextEdit', });
lyr_IndiaBoundary_5.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Buffer50kmClosedIndiaSites_6.set('fieldImages', {'Site Name': 'TextEdit', 'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'Site Statu': 'TextEdit', });
lyr_ClosedIndiaSitesWheat50km_7.set('fieldImages', {'Site Name': 'TextEdit', 'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'Site Statu': 'TextEdit', 'Wheat': 'TextEdit', 'N° TOP': 'TextEdit', });
lyr_Wheatbelowthreshold1075kTons_3.set('fieldLabels', {'VALUE': 'inline label - always visible', });
lyr_Wheat_4.set('fieldLabels', {'VALUE Wheat (kTons)': 'inline label - always visible', });
lyr_IndiaBoundary_5.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_Buffer50kmClosedIndiaSites_6.set('fieldLabels', {'Site Name': 'no label', 'Site Code': 'no label', 'Company Na': 'no label', 'Site City': 'no label', 'Site State': 'no label', 'Site Count': 'no label', 'My Site In': 'no label', 'My Site _1': 'no label', 'Site Statu': 'no label', });
lyr_ClosedIndiaSitesWheat50km_7.set('fieldLabels', {'Site Name': 'inline label - always visible', 'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'Site Statu': 'inline label - always visible', 'Wheat': 'inline label - always visible', 'N° TOP': 'inline label - always visible', });
lyr_ClosedIndiaSitesWheat50km_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});