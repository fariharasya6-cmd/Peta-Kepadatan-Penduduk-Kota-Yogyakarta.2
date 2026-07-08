var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_DATARESPONSI_SMSTR2_2 = new ol.format.GeoJSON();
var features_DATARESPONSI_SMSTR2_2 = format_DATARESPONSI_SMSTR2_2.readFeatures(json_DATARESPONSI_SMSTR2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATARESPONSI_SMSTR2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATARESPONSI_SMSTR2_2.addFeatures(features_DATARESPONSI_SMSTR2_2);
var lyr_DATARESPONSI_SMSTR2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DATARESPONSI_SMSTR2_2, 
                style: style_DATARESPONSI_SMSTR2_2,
                popuplayertitle: 'DATA RESPONSI_SMSTR 2',
                interactive: true,
    title: 'DATA RESPONSI_SMSTR 2<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_0.png" /> Berbah<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_1.png" /> Cangkringan<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_2.png" /> Depok<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_3.png" /> Gamping<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_4.png" /> Godean<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_5.png" /> Kalasan<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_6.png" /> Minggir<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_7.png" /> Mlati<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_8.png" /> Moyudan<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_9.png" /> Ngaglik<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_10.png" /> Ngemplak<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_11.png" /> Pakem<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_12.png" /> Prambanan<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_13.png" /> Seyegan<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_14.png" /> Sleman<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_15.png" /> Tempel<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_16.png" /> Turi<br />\
    <img src="styles/legend/DATARESPONSI_SMSTR2_2_17.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_DATARESPONSI_SMSTR2_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleLabels_1,lyr_DATARESPONSI_SMSTR2_2];
lyr_DATARESPONSI_SMSTR2_2.set('fieldAliases', {'WADMKC': 'WADMKC', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Laki-laki': 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Laki-laki', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Perempuan': 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Perempuan', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Jumlah': 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Jumlah', });
lyr_DATARESPONSI_SMSTR2_2.set('fieldImages', {'WADMKC': 'TextEdit', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Laki-laki': 'Range', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Perempuan': 'Range', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Jumlah': 'Range', });
lyr_DATARESPONSI_SMSTR2_2.set('fieldLabels', {'WADMKC': 'no label', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Laki-laki': 'no label', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Perempuan': 'no label', 'Jumlah Penduduk Menurut Kecamatan dan Jenis Kelamin di Kabupaten Sleman, 2026 — Sheet1_Jumlah': 'no label', });
lyr_DATARESPONSI_SMSTR2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});