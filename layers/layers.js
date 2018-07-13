var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Vivienda_social_0 = new ol.format.GeoJSON();
var features_Vivienda_social_0 = format_Vivienda_social_0.readFeatures(json_Vivienda_social_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vivienda_social_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vivienda_social_0.addFeatures(features_Vivienda_social_0);var lyr_Vivienda_social_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vivienda_social_0, 
                style: style_Vivienda_social_0,
                title: '<img src="styles/legend/Vivienda_social_0.png" /> Vivienda_social'
            });var format_Bromatologia_1 = new ol.format.GeoJSON();
var features_Bromatologia_1 = format_Bromatologia_1.readFeatures(json_Bromatologia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bromatologia_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bromatologia_1.addFeatures(features_Bromatologia_1);var lyr_Bromatologia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bromatologia_1, 
                style: style_Bromatologia_1,
                title: '<img src="styles/legend/Bromatologia_1.png" /> Bromatologia'
            });var format_Padron_2 = new ol.format.GeoJSON();
var features_Padron_2 = format_Padron_2.readFeatures(json_Padron_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padron_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Padron_2.addFeatures(features_Padron_2);var lyr_Padron_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Padron_2, 
                style: style_Padron_2,
                title: '<img src="styles/legend/Padron_2.png" /> Padron'
            });var format_Camaras_seguridad_3 = new ol.format.GeoJSON();
var features_Camaras_seguridad_3 = format_Camaras_seguridad_3.readFeatures(json_Camaras_seguridad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camaras_seguridad_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Camaras_seguridad_3.addFeatures(features_Camaras_seguridad_3);var lyr_Camaras_seguridad_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Camaras_seguridad_3, 
                style: style_Camaras_seguridad_3,
                title: '<img src="styles/legend/Camaras_seguridad_3.png" /> Camaras_seguridad'
            });var format_servicios_4 = new ol.format.GeoJSON();
var features_servicios_4 = format_servicios_4.readFeatures(json_servicios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_servicios_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_servicios_4.addFeatures(features_servicios_4);var lyr_servicios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_servicios_4, 
                style: style_servicios_4,
                title: '<img src="styles/legend/servicios_4.png" /> servicios'
            });var format_wifi_libre_5 = new ol.format.GeoJSON();
var features_wifi_libre_5 = format_wifi_libre_5.readFeatures(json_wifi_libre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wifi_libre_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_wifi_libre_5.addFeatures(features_wifi_libre_5);var lyr_wifi_libre_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wifi_libre_5, 
                style: style_wifi_libre_5,
                title: '<img src="styles/legend/wifi_libre_5.png" /> wifi_libre'
            });var format_Violencia_genero_6 = new ol.format.GeoJSON();
var features_Violencia_genero_6 = format_Violencia_genero_6.readFeatures(json_Violencia_genero_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Violencia_genero_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Violencia_genero_6.addFeatures(features_Violencia_genero_6);var lyr_Violencia_genero_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Violencia_genero_6, 
                style: style_Violencia_genero_6,
                title: '<img src="styles/legend/Violencia_genero_6.png" /> Violencia_genero'
            });var format_Mapa_delito_7 = new ol.format.GeoJSON();
var features_Mapa_delito_7 = format_Mapa_delito_7.readFeatures(json_Mapa_delito_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapa_delito_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mapa_delito_7.addFeatures(features_Mapa_delito_7);var lyr_Mapa_delito_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mapa_delito_7, 
                style: style_Mapa_delito_7,
                title: '<img src="styles/legend/Mapa_delito_7.png" /> Mapa_delito'
            });var format_anegamientos_max_hist_8 = new ol.format.GeoJSON();
var features_anegamientos_max_hist_8 = format_anegamientos_max_hist_8.readFeatures(json_anegamientos_max_hist_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_anegamientos_max_hist_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_anegamientos_max_hist_8.addFeatures(features_anegamientos_max_hist_8);var lyr_anegamientos_max_hist_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_anegamientos_max_hist_8, 
                style: style_anegamientos_max_hist_8,
                title: '<img src="styles/legend/anegamientos_max_hist_8.png" /> anegamientos_max_hist'
            });var format_Area_agricola_9 = new ol.format.GeoJSON();
var features_Area_agricola_9 = format_Area_agricola_9.readFeatures(json_Area_agricola_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_agricola_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Area_agricola_9.addFeatures(features_Area_agricola_9);var lyr_Area_agricola_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_agricola_9, 
                style: style_Area_agricola_9,
                title: '<img src="styles/legend/Area_agricola_9.png" /> Area_agricola'
            });var format_parcelario_urbano_10 = new ol.format.GeoJSON();
var features_parcelario_urbano_10 = format_parcelario_urbano_10.readFeatures(json_parcelario_urbano_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelario_urbano_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_parcelario_urbano_10.addFeatures(features_parcelario_urbano_10);var lyr_parcelario_urbano_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcelario_urbano_10, 
                style: style_parcelario_urbano_10,
                title: '<img src="styles/legend/parcelario_urbano_10.png" /> parcelario_urbano'
            });var format_Terrenos_sin_uso_11 = new ol.format.GeoJSON();
var features_Terrenos_sin_uso_11 = format_Terrenos_sin_uso_11.readFeatures(json_Terrenos_sin_uso_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terrenos_sin_uso_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Terrenos_sin_uso_11.addFeatures(features_Terrenos_sin_uso_11);var lyr_Terrenos_sin_uso_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terrenos_sin_uso_11, 
                style: style_Terrenos_sin_uso_11,
                title: '<img src="styles/legend/Terrenos_sin_uso_11.png" /> Terrenos_sin_uso'
            });var format_catastro_madariaga_12 = new ol.format.GeoJSON();
var features_catastro_madariaga_12 = format_catastro_madariaga_12.readFeatures(json_catastro_madariaga_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_catastro_madariaga_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_catastro_madariaga_12.addFeatures(features_catastro_madariaga_12);var lyr_catastro_madariaga_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_catastro_madariaga_12, 
                style: style_catastro_madariaga_12,
                title: '<img src="styles/legend/catastro_madariaga_12.png" /> catastro_madariaga'
            });var format_limite_partido_13 = new ol.format.GeoJSON();
var features_limite_partido_13 = format_limite_partido_13.readFeatures(json_limite_partido_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_partido_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_limite_partido_13.addFeatures(features_limite_partido_13);var lyr_limite_partido_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limite_partido_13, 
                style: style_limite_partido_13,
                title: '<img src="styles/legend/limite_partido_13.png" /> limite_partido'
            });var format_fitosanitarios_exclusion_aerea_14 = new ol.format.GeoJSON();
var features_fitosanitarios_exclusion_aerea_14 = format_fitosanitarios_exclusion_aerea_14.readFeatures(json_fitosanitarios_exclusion_aerea_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fitosanitarios_exclusion_aerea_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_fitosanitarios_exclusion_aerea_14.addFeatures(features_fitosanitarios_exclusion_aerea_14);var lyr_fitosanitarios_exclusion_aerea_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fitosanitarios_exclusion_aerea_14, 
                style: style_fitosanitarios_exclusion_aerea_14,
                title: '<img src="styles/legend/fitosanitarios_exclusion_aerea_14.png" /> fitosanitarios_exclusion_aerea'
            });var format_fitosanitarios_amortiguacion_300mts_15 = new ol.format.GeoJSON();
var features_fitosanitarios_amortiguacion_300mts_15 = format_fitosanitarios_amortiguacion_300mts_15.readFeatures(json_fitosanitarios_amortiguacion_300mts_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fitosanitarios_amortiguacion_300mts_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_fitosanitarios_amortiguacion_300mts_15.addFeatures(features_fitosanitarios_amortiguacion_300mts_15);var lyr_fitosanitarios_amortiguacion_300mts_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fitosanitarios_amortiguacion_300mts_15, 
                style: style_fitosanitarios_amortiguacion_300mts_15,
                title: '<img src="styles/legend/fitosanitarios_amortiguacion_300mts_15.png" /> fitosanitarios_amortiguacion_300mts'
            });var format_fitosanitarios_exclusion_total_16 = new ol.format.GeoJSON();
var features_fitosanitarios_exclusion_total_16 = format_fitosanitarios_exclusion_total_16.readFeatures(json_fitosanitarios_exclusion_total_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fitosanitarios_exclusion_total_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_fitosanitarios_exclusion_total_16.addFeatures(features_fitosanitarios_exclusion_total_16);var lyr_fitosanitarios_exclusion_total_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fitosanitarios_exclusion_total_16, 
                style: style_fitosanitarios_exclusion_total_16,
                title: '<img src="styles/legend/fitosanitarios_exclusion_total_16.png" /> fitosanitarios_exclusion_total'
            });var format_barrios_madariaga_17 = new ol.format.GeoJSON();
var features_barrios_madariaga_17 = format_barrios_madariaga_17.readFeatures(json_barrios_madariaga_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_madariaga_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_barrios_madariaga_17.addFeatures(features_barrios_madariaga_17);var lyr_barrios_madariaga_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrios_madariaga_17, 
                style: style_barrios_madariaga_17,
    title: 'barrios_madariaga<br />\
    <img src="styles/legend/barrios_madariaga_17_0.png" /> BELGRANO<br />\
    <img src="styles/legend/barrios_madariaga_17_1.png" /> CENTRO<br />\
    <img src="styles/legend/barrios_madariaga_17_2.png" /> ISLAS MALVINAS<br />\
    <img src="styles/legend/barrios_madariaga_17_3.png" /> KENNEDY<br />\
    <img src="styles/legend/barrios_madariaga_17_4.png" /> LOS PINOS<br />\
    <img src="styles/legend/barrios_madariaga_17_5.png" /> MARTIN FIERRO<br />\
    <img src="styles/legend/barrios_madariaga_17_6.png" /> NORTE<br />\
    <img src="styles/legend/barrios_madariaga_17_7.png" /> PROGRESO<br />\
    <img src="styles/legend/barrios_madariaga_17_8.png" /> QUINTANILLA<br />\
    <img src="styles/legend/barrios_madariaga_17_9.png" /> SAN MARTIN A<br />\
    <img src="styles/legend/barrios_madariaga_17_10.png" /> SAN MARTIN B<br />'
        });var format_zonificacion_segunusos_18 = new ol.format.GeoJSON();
var features_zonificacion_segunusos_18 = format_zonificacion_segunusos_18.readFeatures(json_zonificacion_segunusos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonificacion_segunusos_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_zonificacion_segunusos_18.addFeatures(features_zonificacion_segunusos_18);var lyr_zonificacion_segunusos_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonificacion_segunusos_18, 
                style: style_zonificacion_segunusos_18,
    title: 'zonificacion_segun usos<br />\
    <img src="styles/legend/zonificacion_segunusos_18_0.png" /> AAE 1<br />\
    <img src="styles/legend/zonificacion_segunusos_18_1.png" /> AAE 2<br />\
    <img src="styles/legend/zonificacion_segunusos_18_2.png" /> AAE 3<br />\
    <img src="styles/legend/zonificacion_segunusos_18_3.png" /> AAE 4<br />\
    <img src="styles/legend/zonificacion_segunusos_18_4.png" /> AAE 5<br />\
    <img src="styles/legend/zonificacion_segunusos_18_5.png" /> AC1<br />\
    <img src="styles/legend/zonificacion_segunusos_18_6.png" /> AC2<br />\
    <img src="styles/legend/zonificacion_segunusos_18_7.png" /> ACUEx<br />\
    <img src="styles/legend/zonificacion_segunusos_18_8.png" /> AExt.1<br />\
    <img src="styles/legend/zonificacion_segunusos_18_9.png" /> APR<br />\
    <img src="styles/legend/zonificacion_segunusos_18_10.png" /> AUEs<br />\
    <img src="styles/legend/zonificacion_segunusos_18_11.png" /> CMS<br />\
    <img src="styles/legend/zonificacion_segunusos_18_12.png" /> DUE 0<br />\
    <img src="styles/legend/zonificacion_segunusos_18_13.png" /> DUE10<br />\
    <img src="styles/legend/zonificacion_segunusos_18_14.png" /> DUE11<br />\
    <img src="styles/legend/zonificacion_segunusos_18_15.png" /> DUE12<br />\
    <img src="styles/legend/zonificacion_segunusos_18_16.png" /> DUE13<br />\
    <img src="styles/legend/zonificacion_segunusos_18_17.png" /> DUE14<br />\
    <img src="styles/legend/zonificacion_segunusos_18_18.png" /> DUE15<br />\
    <img src="styles/legend/zonificacion_segunusos_18_19.png" /> DUE2<br />\
    <img src="styles/legend/zonificacion_segunusos_18_20.png" /> DUE3<br />\
    <img src="styles/legend/zonificacion_segunusos_18_21.png" /> DUE5<br />\
    <img src="styles/legend/zonificacion_segunusos_18_22.png" /> DUE6<br />\
    <img src="styles/legend/zonificacion_segunusos_18_23.png" /> DUE7<br />\
    <img src="styles/legend/zonificacion_segunusos_18_24.png" /> DUE8<br />\
    <img src="styles/legend/zonificacion_segunusos_18_25.png" /> DUE9<br />\
    <img src="styles/legend/zonificacion_segunusos_18_26.png" /> EV<br />\
    <img src="styles/legend/zonificacion_segunusos_18_27.png" /> SZMG<br />\
    <img src="styles/legend/zonificacion_segunusos_18_28.png" /> SZres U<br />\
    <img src="styles/legend/zonificacion_segunusos_18_29.png" /> SZU25<br />\
    <img src="styles/legend/zonificacion_segunusos_18_30.png" /> Z.Res<br />\
    <img src="styles/legend/zonificacion_segunusos_18_31.png" /> ZC1<br />\
    <img src="styles/legend/zonificacion_segunusos_18_32.png" /> ZC2<br />\
    <img src="styles/legend/zonificacion_segunusos_18_33.png" /> ZCP<br />\
    <img src="styles/legend/zonificacion_segunusos_18_34.png" /> ZEE<br />\
    <img src="styles/legend/zonificacion_segunusos_18_35.png" /> ZEN<br />\
    <img src="styles/legend/zonificacion_segunusos_18_36.png" /> ZEO<br />\
    <img src="styles/legend/zonificacion_segunusos_18_37.png" /> Zres.M<br />'
        });var format_Puntos_de_interes_19 = new ol.format.GeoJSON();
var features_Puntos_de_interes_19 = format_Puntos_de_interes_19.readFeatures(json_Puntos_de_interes_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_de_interes_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Puntos_de_interes_19.addFeatures(features_Puntos_de_interes_19);var lyr_Puntos_de_interes_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_de_interes_19, 
                style: style_Puntos_de_interes_19,
                title: '<img src="styles/legend/Puntos_de_interes_19.png" /> Puntos_de_interes'
            });var lyr_mapa_densidad_acc_viales_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "mapa_densidad_acc_viales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mapa_densidad_acc_viales_20.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6361239.986303, -4441726.497486, -6359001.459279, -4437505.000291]
                            })
                        });var format_reductores_velocidad_21 = new ol.format.GeoJSON();
var features_reductores_velocidad_21 = format_reductores_velocidad_21.readFeatures(json_reductores_velocidad_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reductores_velocidad_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reductores_velocidad_21.addFeatures(features_reductores_velocidad_21);var lyr_reductores_velocidad_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reductores_velocidad_21, 
                style: style_reductores_velocidad_21,
                title: '<img src="styles/legend/reductores_velocidad_21.png" /> reductores_velocidad'
            });var format_recoleccion_residuos_porte_22 = new ol.format.GeoJSON();
var features_recoleccion_residuos_porte_22 = format_recoleccion_residuos_porte_22.readFeatures(json_recoleccion_residuos_porte_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_recoleccion_residuos_porte_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_recoleccion_residuos_porte_22.addFeatures(features_recoleccion_residuos_porte_22);var lyr_recoleccion_residuos_porte_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_recoleccion_residuos_porte_22, 
                style: style_recoleccion_residuos_porte_22,
    title: 'recoleccion_residuos_porte<br />\
    <img src="styles/legend/recoleccion_residuos_porte_22_0.png" /> JUEVES<br />\
    <img src="styles/legend/recoleccion_residuos_porte_22_1.png" /> LUNES<br />\
    <img src="styles/legend/recoleccion_residuos_porte_22_2.png" /> MARTES<br />\
    <img src="styles/legend/recoleccion_residuos_porte_22_3.png" /> MIERCOLES<br />\
    <img src="styles/legend/recoleccion_residuos_porte_22_4.png" /> VIERNES<br />'
        });var format_Localidades_23 = new ol.format.GeoJSON();
var features_Localidades_23 = format_Localidades_23.readFeatures(json_Localidades_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Localidades_23.addFeatures(features_Localidades_23);var lyr_Localidades_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_23, 
                style: style_Localidades_23,
                title: '<img src="styles/legend/Localidades_23.png" /> Localidades'
            });var lyr_dist_educ1_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "dist_educ1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dist_educ1_24.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6363340.693439, -4444125.180567, -6356435.344108, -4435478.179281]
                            })
                        });var format_institutos_educativos_25 = new ol.format.GeoJSON();
var features_institutos_educativos_25 = format_institutos_educativos_25.readFeatures(json_institutos_educativos_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_institutos_educativos_25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_institutos_educativos_25.addFeatures(features_institutos_educativos_25);var lyr_institutos_educativos_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_institutos_educativos_25, 
                style: style_institutos_educativos_25,
                title: '<img src="styles/legend/institutos_educativos_25.png" /> institutos_educativos'
            });var format_contenedores_26 = new ol.format.GeoJSON();
var features_contenedores_26 = format_contenedores_26.readFeatures(json_contenedores_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contenedores_26 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_contenedores_26.addFeatures(features_contenedores_26);var lyr_contenedores_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contenedores_26, 
                style: style_contenedores_26,
                title: '<img src="styles/legend/contenedores_26.png" /> contenedores'
            });var format_calles_madariaga_27 = new ol.format.GeoJSON();
var features_calles_madariaga_27 = format_calles_madariaga_27.readFeatures(json_calles_madariaga_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calles_madariaga_27 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_calles_madariaga_27.addFeatures(features_calles_madariaga_27);var lyr_calles_madariaga_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_calles_madariaga_27, 
                style: style_calles_madariaga_27,
                title: '<img src="styles/legend/calles_madariaga_27.png" /> calles_madariaga'
            });var lyr_dist_salud1_28 = new ol.layer.Image({
                            opacity: 1,
                            title: "dist_salud1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dist_salud1_28.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6363339.096606, -4443188.368370, -6356441.673840, -4435477.035117]
                            })
                        });var format_centros_salud_29 = new ol.format.GeoJSON();
var features_centros_salud_29 = format_centros_salud_29.readFeatures(json_centros_salud_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centros_salud_29 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_centros_salud_29.addFeatures(features_centros_salud_29);var lyr_centros_salud_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centros_salud_29, 
                style: style_centros_salud_29,
                title: '<img src="styles/legend/centros_salud_29.png" /> centros_salud'
            });var format_cursos_agua_30 = new ol.format.GeoJSON();
var features_cursos_agua_30 = format_cursos_agua_30.readFeatures(json_cursos_agua_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cursos_agua_30 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cursos_agua_30.addFeatures(features_cursos_agua_30);var lyr_cursos_agua_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cursos_agua_30, 
                style: style_cursos_agua_30,
                title: '<img src="styles/legend/cursos_agua_30.png" /> cursos_agua'
            });var format_espacios_verdes_31 = new ol.format.GeoJSON();
var features_espacios_verdes_31 = format_espacios_verdes_31.readFeatures(json_espacios_verdes_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espacios_verdes_31 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_espacios_verdes_31.addFeatures(features_espacios_verdes_31);var lyr_espacios_verdes_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_espacios_verdes_31, 
                style: style_espacios_verdes_31,
                title: '<img src="styles/legend/espacios_verdes_31.png" /> espacios_verdes'
            });var format_puentes_mada_32 = new ol.format.GeoJSON();
var features_puentes_mada_32 = format_puentes_mada_32.readFeatures(json_puentes_mada_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puentes_mada_32 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_puentes_mada_32.addFeatures(features_puentes_mada_32);var lyr_puentes_mada_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puentes_mada_32, 
                style: style_puentes_mada_32,
                title: '<img src="styles/legend/puentes_mada_32.png" /> puentes_mada'
            });var format_cuerpos_agua_33 = new ol.format.GeoJSON();
var features_cuerpos_agua_33 = format_cuerpos_agua_33.readFeatures(json_cuerpos_agua_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuerpos_agua_33 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cuerpos_agua_33.addFeatures(features_cuerpos_agua_33);var lyr_cuerpos_agua_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuerpos_agua_33, 
                style: style_cuerpos_agua_33,
                title: '<img src="styles/legend/cuerpos_agua_33.png" /> cuerpos_agua'
            });var format_caminos_rurales_34 = new ol.format.GeoJSON();
var features_caminos_rurales_34 = format_caminos_rurales_34.readFeatures(json_caminos_rurales_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caminos_rurales_34 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_caminos_rurales_34.addFeatures(features_caminos_rurales_34);var lyr_caminos_rurales_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caminos_rurales_34, 
                style: style_caminos_rurales_34,
                title: '<img src="styles/legend/caminos_rurales_34.png" /> caminos_rurales'
            });var format_accidentes_madariaga_35 = new ol.format.GeoJSON();
var features_accidentes_madariaga_35 = format_accidentes_madariaga_35.readFeatures(json_accidentes_madariaga_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_accidentes_madariaga_35 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_accidentes_madariaga_35.addFeatures(features_accidentes_madariaga_35);var lyr_accidentes_madariaga_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_accidentes_madariaga_35, 
                style: style_accidentes_madariaga_35,
                title: '<img src="styles/legend/accidentes_madariaga_35.png" /> accidentes_madariaga'
            });

lyr_Vivienda_social_0.setVisible(true);lyr_Bromatologia_1.setVisible(true);lyr_Padron_2.setVisible(true);lyr_Camaras_seguridad_3.setVisible(true);lyr_servicios_4.setVisible(true);lyr_wifi_libre_5.setVisible(true);lyr_Violencia_genero_6.setVisible(true);lyr_Mapa_delito_7.setVisible(true);lyr_anegamientos_max_hist_8.setVisible(true);lyr_Area_agricola_9.setVisible(true);lyr_parcelario_urbano_10.setVisible(true);lyr_Terrenos_sin_uso_11.setVisible(true);lyr_catastro_madariaga_12.setVisible(true);lyr_limite_partido_13.setVisible(true);lyr_fitosanitarios_exclusion_aerea_14.setVisible(true);lyr_fitosanitarios_amortiguacion_300mts_15.setVisible(true);lyr_fitosanitarios_exclusion_total_16.setVisible(true);lyr_barrios_madariaga_17.setVisible(true);lyr_zonificacion_segunusos_18.setVisible(true);lyr_Puntos_de_interes_19.setVisible(true);lyr_mapa_densidad_acc_viales_20.setVisible(true);lyr_reductores_velocidad_21.setVisible(true);lyr_recoleccion_residuos_porte_22.setVisible(true);lyr_Localidades_23.setVisible(true);lyr_dist_educ1_24.setVisible(true);lyr_institutos_educativos_25.setVisible(true);lyr_contenedores_26.setVisible(true);lyr_calles_madariaga_27.setVisible(true);lyr_dist_salud1_28.setVisible(true);lyr_centros_salud_29.setVisible(true);lyr_cursos_agua_30.setVisible(true);lyr_espacios_verdes_31.setVisible(true);lyr_puentes_mada_32.setVisible(true);lyr_cuerpos_agua_33.setVisible(true);lyr_caminos_rurales_34.setVisible(true);lyr_accidentes_madariaga_35.setVisible(true);
var layersList = [baseLayer,lyr_Vivienda_social_0,lyr_Bromatologia_1,lyr_Padron_2,lyr_Camaras_seguridad_3,lyr_servicios_4,lyr_wifi_libre_5,lyr_Violencia_genero_6,lyr_Mapa_delito_7,lyr_anegamientos_max_hist_8,lyr_Area_agricola_9,lyr_parcelario_urbano_10,lyr_Terrenos_sin_uso_11,lyr_catastro_madariaga_12,lyr_limite_partido_13,lyr_fitosanitarios_exclusion_aerea_14,lyr_fitosanitarios_amortiguacion_300mts_15,lyr_fitosanitarios_exclusion_total_16,lyr_barrios_madariaga_17,lyr_zonificacion_segunusos_18,lyr_Puntos_de_interes_19,lyr_mapa_densidad_acc_viales_20,lyr_reductores_velocidad_21,lyr_recoleccion_residuos_porte_22,lyr_Localidades_23,lyr_dist_educ1_24,lyr_institutos_educativos_25,lyr_contenedores_26,lyr_calles_madariaga_27,lyr_dist_salud1_28,lyr_centros_salud_29,lyr_cursos_agua_30,lyr_espacios_verdes_31,lyr_puentes_mada_32,lyr_cuerpos_agua_33,lyr_caminos_rurales_34,lyr_accidentes_madariaga_35];
lyr_Vivienda_social_0.set('fieldAliases', {'id': 'id', });
lyr_Bromatologia_1.set('fieldAliases', {'id': 'id', 'CASTR.2018': 'CASTR.2018', 'CASTR.2017': 'CASTR.2017', 'VACUNA18': 'VACUNA18', 'VACUNA17': 'VACUNA17', 'AT. DOMICI': 'AT. DOMICI', 'FOCO CERDO': 'FOCO CERDO', 'FOCO RABIA': 'FOCO RABIA', });
lyr_Padron_2.set('fieldAliases', {'id': 'id', 'HAB': 'HAB', 'GENERO': 'GENERO', 'EDAD': 'EDAD', 'SUBSIDIO': 'SUBSIDIO', 'NACIONALID': 'NACIONALID', 'OBRASOCIAL': 'OBRASOCIAL', });
lyr_Camaras_seguridad_3.set('fieldAliases', {'id': 'id', });
lyr_servicios_4.set('fieldAliases', {'id': 'id', 'SERVICIO': 'SERVICIO', 'PROVEEDOR': 'PROVEEDOR', 'CANT HOGAR': 'CANT HOGAR', });
lyr_wifi_libre_5.set('fieldAliases', {'id': 'id', 'CANT CONEX': 'CANT CONEX', });
lyr_Violencia_genero_6.set('fieldAliases', {'id': 'id', 'AÑO': 'AÑO', 'RELACION': 'RELACION', 'DENUNCIA': 'DENUNCIA', 'REINCIDENC': 'REINCIDENC', 'OBS': 'OBS', });
lyr_Mapa_delito_7.set('fieldAliases', {'id': 'id', 'AÑO': 'AÑO', 'TIPO': 'TIPO', 'DETENCION': 'DETENCION', 'CONDENA': 'CONDENA', 'OBS': 'OBS', });
lyr_anegamientos_max_hist_8.set('fieldAliases', {'id': 'id', });
lyr_Area_agricola_9.set('fieldAliases', {'id': 'id', });
lyr_parcelario_urbano_10.set('fieldAliases', {'id': 'id', });
lyr_Terrenos_sin_uso_11.set('fieldAliases', {'id': 'id', 'SUP': 'SUP', 'BARRIO': 'BARRIO', });
lyr_catastro_madariaga_12.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'DATA': 'DATA', 'AREA1': 'AREA1', 'CUARTEL': 'CUARTEL', 'SUPHA': 'SUPHA', 'PROPIETARI': 'PROPIETARI', });
lyr_limite_partido_13.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'DEPTOS_200': 'DEPTOS_200', 'DEPTOS_2_1': 'DEPTOS_2_1', 'PROV': 'PROV', 'DEPTO': 'DEPTO', 'LINK': 'LINK', 'NOMDEP': 'NOMDEP', 'NOMDEP1': 'NOMDEP1', });
lyr_fitosanitarios_exclusion_aerea_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_fitosanitarios_amortiguacion_300mts_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_fitosanitarios_exclusion_total_16.set('fieldAliases', {'id': 'id', 'SUP': 'SUP', });
lyr_barrios_madariaga_17.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'CANT HAB': 'CANT HAB', 'LUZ': 'LUZ', 'GASNATURAL': 'GASNATURAL', 'CLOACA': 'CLOACA', 'AGUA': 'AGUA', 'CABLE': 'CABLE', 'INTERNET': 'INTERNET', });
lyr_zonificacion_segunusos_18.set('fieldAliases', {'id': 'id', 'Descrip': 'Descrip', 'Design': 'Design', 'Uso domi': 'Uso domi', 'Uso compl': 'Uso compl', 'Fos': 'Fos', 'Fot': 'Fot', 'Sm': 'Sm', 'Lm': 'Lm', 'Hmax': 'Hmax', 'Densidad': 'Densidad', 'Area': 'Area', 'Zona': 'Zona', });
lyr_Puntos_de_interes_19.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'AREA': 'AREA', });
lyr_reductores_velocidad_21.set('fieldAliases', {'id': 'id', 'TIPO': 'TIPO', 'ESTADO': 'ESTADO', });
lyr_recoleccion_residuos_porte_22.set('fieldAliases', {'id': 'id', 'DIA': 'DIA', 'BARRIO': 'BARRIO', });
lyr_Localidades_23.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'CANT HAB': 'CANT HAB', 'EDUCACION': 'EDUCACION', });
lyr_institutos_educativos_25.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'NIVEL': 'NIVEL', 'SECTOR': 'SECTOR', 'DIRECTOR': 'DIRECTOR', 'TELEFONO': 'TELEFONO', 'CANT ALUMN': 'CANT ALUMN', 'IMAGEN': 'IMAGEN', });
lyr_contenedores_26.set('fieldAliases', {'id': 'id', 'BARRIO': 'BARRIO', 'TIPO': 'TIPO', });
lyr_calles_madariaga_27.set('fieldAliases', {'id': 'id', 'calle': 'calle', 'altura': 'altura', 'marcha': 'marcha', 'barrio': 'barrio', 'toraster': 'toraster', 'TIPO': 'TIPO', 'ESTADO': 'ESTADO', 'VEREDA': 'VEREDA', });
lyr_centros_salud_29.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'ESPECIALID': 'ESPECIALID', 'PERSONAL': 'PERSONAL', 'P.2018': 'P.2018', 'P. 2017': 'P. 2017', 'P.2016': 'P.2016', '% SAMO': '% SAMO', });
lyr_cursos_agua_30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'REGIMEN': 'REGIMEN', 'NAVEGABILI': 'NAVEGABILI', 'OBSERVACIO': 'OBSERVACIO', 'HOJA': 'HOJA', 'FUENTE': 'FUENTE', 'Shape_Leng': 'Shape_Leng', });
lyr_espacios_verdes_31.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'SUPERFICIE': 'SUPERFICIE', });
lyr_puentes_mada_32.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'ESTADO': 'ESTADO', });
lyr_cuerpos_agua_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UNION': 'UNION', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'REGIMEN': 'REGIMEN', 'NAVEGABILI': 'NAVEGABILI', 'PROVINCIA': 'PROVINCIA', 'PAIS': 'PAIS', 'OBSERVACIO': 'OBSERVACIO', 'HOJA': 'HOJA', 'FUENTE': 'FUENTE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_caminos_rurales_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'JURISDICCI': 'JURISDICCI', 'CLASE': 'CLASE', 'TRANSITABI': 'TRANSITABI', 'HOJA': 'HOJA', 'Shape_Leng': 'Shape_Leng', 'ESTADO': 'ESTADO', });
lyr_accidentes_madariaga_35.set('fieldAliases', {'d': 'd', 'TIPO': 'TIPO', 'AÑO': 'AÑO', 'MOTO': 'MOTO', 'HOSPITALIZ': 'HOSPITALIZ', });
lyr_Vivienda_social_0.set('fieldImages', {'id': 'TextEdit', });
lyr_Bromatologia_1.set('fieldImages', {'id': 'TextEdit', 'CASTR.2018': 'TextEdit', 'CASTR.2017': 'TextEdit', 'VACUNA18': 'TextEdit', 'VACUNA17': 'TextEdit', 'AT. DOMICI': 'TextEdit', 'FOCO CERDO': 'TextEdit', 'FOCO RABIA': 'TextEdit', });
lyr_Padron_2.set('fieldImages', {'id': 'TextEdit', 'HAB': 'TextEdit', 'GENERO': 'TextEdit', 'EDAD': 'TextEdit', 'SUBSIDIO': 'TextEdit', 'NACIONALID': 'TextEdit', 'OBRASOCIAL': 'TextEdit', });
lyr_Camaras_seguridad_3.set('fieldImages', {'id': 'TextEdit', });
lyr_servicios_4.set('fieldImages', {'id': 'TextEdit', 'SERVICIO': 'TextEdit', 'PROVEEDOR': 'TextEdit', 'CANT HOGAR': 'TextEdit', });
lyr_wifi_libre_5.set('fieldImages', {'id': 'TextEdit', 'CANT CONEX': 'TextEdit', });
lyr_Violencia_genero_6.set('fieldImages', {'id': 'TextEdit', 'AÑO': 'TextEdit', 'RELACION': 'TextEdit', 'DENUNCIA': 'TextEdit', 'REINCIDENC': 'TextEdit', 'OBS': 'TextEdit', });
lyr_Mapa_delito_7.set('fieldImages', {'id': 'TextEdit', 'AÑO': 'TextEdit', 'TIPO': 'TextEdit', 'DETENCION': 'TextEdit', 'CONDENA': 'TextEdit', 'OBS': 'TextEdit', });
lyr_anegamientos_max_hist_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Area_agricola_9.set('fieldImages', {'id': 'TextEdit', });
lyr_parcelario_urbano_10.set('fieldImages', {'id': 'TextEdit', });
lyr_Terrenos_sin_uso_11.set('fieldImages', {'id': 'TextEdit', 'SUP': 'TextEdit', 'BARRIO': 'TextEdit', });
lyr_catastro_madariaga_12.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'DATA': 'TextEdit', 'AREA1': 'TextEdit', 'CUARTEL': 'TextEdit', 'SUPHA': 'TextEdit', 'PROPIETARI': 'TextEdit', });
lyr_limite_partido_13.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'DEPTOS_200': 'TextEdit', 'DEPTOS_2_1': 'TextEdit', 'PROV': 'TextEdit', 'DEPTO': 'TextEdit', 'LINK': 'TextEdit', 'NOMDEP': 'TextEdit', 'NOMDEP1': 'TextEdit', });
lyr_fitosanitarios_exclusion_aerea_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_fitosanitarios_amortiguacion_300mts_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_fitosanitarios_exclusion_total_16.set('fieldImages', {'id': 'TextEdit', 'SUP': 'TextEdit', });
lyr_barrios_madariaga_17.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'CANT HAB': 'TextEdit', 'LUZ': 'TextEdit', 'GASNATURAL': 'TextEdit', 'CLOACA': 'TextEdit', 'AGUA': 'TextEdit', 'CABLE': 'TextEdit', 'INTERNET': 'TextEdit', });
lyr_zonificacion_segunusos_18.set('fieldImages', {'id': 'TextEdit', 'Descrip': 'TextEdit', 'Design': 'TextEdit', 'Uso domi': 'TextEdit', 'Uso compl': 'TextEdit', 'Fos': 'TextEdit', 'Fot': 'TextEdit', 'Sm': 'TextEdit', 'Lm': 'TextEdit', 'Hmax': 'TextEdit', 'Densidad': 'TextEdit', 'Area': 'TextEdit', 'Zona': 'TextEdit', });
lyr_Puntos_de_interes_19.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'AREA': 'TextEdit', });
lyr_reductores_velocidad_21.set('fieldImages', {'id': 'TextEdit', 'TIPO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_recoleccion_residuos_porte_22.set('fieldImages', {'id': 'TextEdit', 'DIA': 'TextEdit', 'BARRIO': 'TextEdit', });
lyr_Localidades_23.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'CANT HAB': 'TextEdit', 'EDUCACION': 'TextEdit', });
lyr_institutos_educativos_25.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'NIVEL': 'TextEdit', 'SECTOR': 'TextEdit', 'DIRECTOR': 'TextEdit', 'TELEFONO': 'TextEdit', 'CANT ALUMN': 'TextEdit', 'IMAGEN': 'TextEdit', });
lyr_contenedores_26.set('fieldImages', {'id': 'TextEdit', 'BARRIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_calles_madariaga_27.set('fieldImages', {'id': 'TextEdit', 'calle': 'TextEdit', 'altura': 'TextEdit', 'marcha': 'TextEdit', 'barrio': 'TextEdit', 'toraster': 'TextEdit', 'TIPO': 'TextEdit', 'ESTADO': 'TextEdit', 'VEREDA': 'TextEdit', });
lyr_centros_salud_29.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'ESPECIALID': 'TextEdit', 'PERSONAL': 'TextEdit', 'P.2018': 'TextEdit', 'P. 2017': 'TextEdit', 'P.2016': 'TextEdit', '% SAMO': 'TextEdit', });
lyr_cursos_agua_30.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGIMEN': 'TextEdit', 'NAVEGABILI': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'HOJA': 'TextEdit', 'FUENTE': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_espacios_verdes_31.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_puentes_mada_32.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_cuerpos_agua_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'UNION': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGIMEN': 'TextEdit', 'NAVEGABILI': 'TextEdit', 'PROVINCIA': 'TextEdit', 'PAIS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'HOJA': 'TextEdit', 'FUENTE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_caminos_rurales_34.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'JURISDICCI': 'TextEdit', 'CLASE': 'TextEdit', 'TRANSITABI': 'TextEdit', 'HOJA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_accidentes_madariaga_35.set('fieldImages', {'d': 'TextEdit', 'TIPO': 'TextEdit', 'AÑO': 'TextEdit', 'MOTO': 'TextEdit', 'HOSPITALIZ': 'TextEdit', });
lyr_Vivienda_social_0.set('fieldLabels', {'id': 'no label', });
lyr_Bromatologia_1.set('fieldLabels', {'id': 'no label', 'CASTR.2018': 'no label', 'CASTR.2017': 'no label', 'VACUNA18': 'no label', 'VACUNA17': 'no label', 'AT. DOMICI': 'no label', 'FOCO CERDO': 'no label', 'FOCO RABIA': 'no label', });
lyr_Padron_2.set('fieldLabels', {'id': 'no label', 'HAB': 'no label', 'GENERO': 'no label', 'EDAD': 'no label', 'SUBSIDIO': 'no label', 'NACIONALID': 'no label', 'OBRASOCIAL': 'no label', });
lyr_Camaras_seguridad_3.set('fieldLabels', {'id': 'no label', });
lyr_servicios_4.set('fieldLabels', {'id': 'no label', 'SERVICIO': 'no label', 'PROVEEDOR': 'no label', 'CANT HOGAR': 'no label', });
lyr_wifi_libre_5.set('fieldLabels', {'id': 'no label', 'CANT CONEX': 'no label', });
lyr_Violencia_genero_6.set('fieldLabels', {'id': 'no label', 'AÑO': 'no label', 'RELACION': 'no label', 'DENUNCIA': 'no label', 'REINCIDENC': 'no label', 'OBS': 'no label', });
lyr_Mapa_delito_7.set('fieldLabels', {'id': 'no label', 'AÑO': 'no label', 'TIPO': 'no label', 'DETENCION': 'no label', 'CONDENA': 'no label', 'OBS': 'no label', });
lyr_anegamientos_max_hist_8.set('fieldLabels', {'id': 'no label', });
lyr_Area_agricola_9.set('fieldLabels', {'id': 'no label', });
lyr_parcelario_urbano_10.set('fieldLabels', {'id': 'no label', });
lyr_Terrenos_sin_uso_11.set('fieldLabels', {'id': 'no label', 'SUP': 'no label', 'BARRIO': 'no label', });
lyr_catastro_madariaga_12.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'DATA': 'no label', 'AREA1': 'no label', 'CUARTEL': 'no label', 'SUPHA': 'no label', 'PROPIETARI': 'no label', });
lyr_limite_partido_13.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'DEPTOS_200': 'no label', 'DEPTOS_2_1': 'no label', 'PROV': 'no label', 'DEPTO': 'no label', 'LINK': 'no label', 'NOMDEP': 'no label', 'NOMDEP1': 'no label', });
lyr_fitosanitarios_exclusion_aerea_14.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_fitosanitarios_amortiguacion_300mts_15.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_fitosanitarios_exclusion_total_16.set('fieldLabels', {'id': 'no label', 'SUP': 'no label', });
lyr_barrios_madariaga_17.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'CANT HAB': 'no label', 'LUZ': 'no label', 'GASNATURAL': 'no label', 'CLOACA': 'no label', 'AGUA': 'no label', 'CABLE': 'no label', 'INTERNET': 'no label', });
lyr_zonificacion_segunusos_18.set('fieldLabels', {'id': 'no label', 'Descrip': 'no label', 'Design': 'no label', 'Uso domi': 'no label', 'Uso compl': 'no label', 'Fos': 'no label', 'Fot': 'no label', 'Sm': 'no label', 'Lm': 'no label', 'Hmax': 'no label', 'Densidad': 'no label', 'Area': 'no label', 'Zona': 'no label', });
lyr_Puntos_de_interes_19.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'AREA': 'no label', });
lyr_reductores_velocidad_21.set('fieldLabels', {'id': 'no label', 'TIPO': 'no label', 'ESTADO': 'no label', });
lyr_recoleccion_residuos_porte_22.set('fieldLabels', {'id': 'no label', 'DIA': 'no label', 'BARRIO': 'no label', });
lyr_Localidades_23.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'CANT HAB': 'no label', 'EDUCACION': 'no label', });
lyr_institutos_educativos_25.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'NIVEL': 'no label', 'SECTOR': 'no label', 'DIRECTOR': 'no label', 'TELEFONO': 'no label', 'CANT ALUMN': 'no label', 'IMAGEN': 'no label', });
lyr_contenedores_26.set('fieldLabels', {'id': 'no label', 'BARRIO': 'no label', 'TIPO': 'no label', });
lyr_calles_madariaga_27.set('fieldLabels', {'id': 'no label', 'calle': 'no label', 'altura': 'no label', 'marcha': 'no label', 'barrio': 'no label', 'toraster': 'no label', 'TIPO': 'no label', 'ESTADO': 'no label', 'VEREDA': 'no label', });
lyr_centros_salud_29.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'inline label', 'HORARIO': 'no label', 'ESPECIALID': 'no label', 'PERSONAL': 'no label', 'P.2018': 'no label', 'P. 2017': 'no label', 'P.2016': 'no label', '% SAMO': 'no label', });
lyr_cursos_agua_30.set('fieldLabels', {'OBJECTID': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'REGIMEN': 'no label', 'NAVEGABILI': 'no label', 'OBSERVACIO': 'no label', 'HOJA': 'no label', 'FUENTE': 'no label', 'Shape_Leng': 'no label', });
lyr_espacios_verdes_31.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'SUPERFICIE': 'no label', });
lyr_puentes_mada_32.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'ESTADO': 'no label', });
lyr_cuerpos_agua_33.set('fieldLabels', {'OBJECTID': 'no label', 'UNION': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'REGIMEN': 'no label', 'NAVEGABILI': 'no label', 'PROVINCIA': 'no label', 'PAIS': 'no label', 'OBSERVACIO': 'no label', 'HOJA': 'no label', 'FUENTE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_caminos_rurales_34.set('fieldLabels', {'OBJECTID': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'JURISDICCI': 'no label', 'CLASE': 'no label', 'TRANSITABI': 'no label', 'HOJA': 'no label', 'Shape_Leng': 'no label', 'ESTADO': 'no label', });
lyr_accidentes_madariaga_35.set('fieldLabels', {'d': 'no label', 'TIPO': 'no label', 'AÑO': 'no label', 'MOTO': 'no label', 'HOSPITALIZ': 'no label', });
lyr_accidentes_madariaga_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});