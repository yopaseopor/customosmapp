/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Capes/Layers',
		editWith: 'Edita:',
		openWith: 'Obre/Abre/Open:',
		checkTools: 'Validation:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Node/Nodo:',
		noNodesFound: 'No info.',
		wayLabel: 'Via/Way:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = false;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://mijndev.openstreetmap.nl/~ligfietser/fiets/api/interpreter/';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap B&W',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>',
				//url: 'https://toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png'
				url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap France',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenMapSurfer',
			iconSrc: imgSrc + 'openroute_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>, powered by <a href="https://mapsurfernet.com/" target="_blank">MapSurfer.NET</a>',
				url: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: '1870-1950 ES_IGN 0 Planimetrías (Minutas cartográficas)',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/minutas-cartograficas?',
				params: {'LAYERS': 'Minutas'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: '1915 ES_IGN 0 Edición MTN50 (Catastrones)',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/primera-edicion-mtn?',
				params: {'LAYERS': 'catastrones'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: 'ES_IGN 1a Edición MTN25',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/primera-edicion-mtn?',
				params: {'LAYERS': 'MTN25'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: 'ES_IGN 1a Edición MTN50',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/primera-edicion-mtn?',
				params: {'LAYERS': 'MTN50'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: '1945-1946 ES_IGN - Vol AMS Sèrie A',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://fototeca.cnig.es/wms/fototeca.dll?',
				params: {'LAYERS': 'americano_serie_a'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: '1956-1957 ES_IGN - Vol AMS Sèrie B',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'AMS_1956-1957'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '1973-1986 ES_IGN - Interministerial',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'Interministerial_1973-1986'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '1981-1986 ES_IGN - Nacional',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'Nacional_1981-1986'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '1997-1998 ES_IGN - Olistat',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'OLISTAT'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '1997-2003 ES_IGN - Sigpac',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'SIGPAC'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2004 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2004'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2005 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2005'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2006 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2006'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2007 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2007'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2008 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2008'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2009 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2009'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2010 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2010'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2011 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2011'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2012 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2012'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2013 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2013'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2014 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2014'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2015 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2015'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2016 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2016'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2017 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2017'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2018 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2018'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2019 ES_IGN - PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2019'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1945-1946 ES_CAT_ICGC - Vol AMS Sèrie A',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'ovaa10m', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1983 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1983', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1984 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1984', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1986 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1986', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1987 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1987', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1988 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1988', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1989 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1989', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1990 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1990', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1991 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1991', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1992 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1992', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1994 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1994', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1995 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1995', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1996 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1996', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1997 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1997', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1998 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1998', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1999 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m1999', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '2000 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2000', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '2000 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2000', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '2001 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2001', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '2002 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2002', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '2003 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2003', 'VERSION': '1.1.1'}
			}),
		}),
		
				new ol.layer.Tile({
			title: '2004 ES_CAT_ICGC - 1:5000',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2004', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),

				new ol.layer.Tile({
			title: '1712 - Plano de la ciudad, castillo - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0024', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
		
				new ol.layer.Tile({
			title: '1769 - Vista de Zaragoza por Septentrión - Carlos Casanova - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0696', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1809 - Plano topográfico - Clemente Noguera - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0005', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1852 - Plano de Zaragoza - Yarza y Gironza - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0275', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1861 - Plano de Zaragoza - Yarza y Gironza - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0274', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1863 - Plano de Zaragoza - Imprenta y litografía de Agustín Peiró - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0697', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1872 - Plano de Zaragoza - Estado Mayor del Ejército - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0459', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1880 - Plano de Zaragoza - Dionisio Casañal y Zapatero - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0075', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1899 - Plano de Zaragoza - Dionisio Casañal y Zapatero - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0072', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1900 - Plano de Zaragoza - A. Martín editor - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0751', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1908 - Plano de Zaragoza - Dionisio Casañal y Zapatero - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0080', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1925 - Plano parcelario de Zaragoza - Miguel Ángel Navarro y Pérez - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0476', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1935 - Plano-guía de plano parcelario de Zaragoza - Instituto Geográfico y Catastral - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0451', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1938 - Plano de Zaragoza - Regino Borobio y José Beltrán - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0565', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1950 - Plano gráfico informativo - Ayuntamiento y Antonio Margalé - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'Planimetria-42', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1958 - Plano Guía del plano de Zaragoza - José Beltrán Navarro - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0421', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1977 - Plano-Guía de arquitectura - Juan Antonio Carmona - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'BMZ_F00021-38_0001', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1993 - Callejero - Ayuntamiento - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0649', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '2004 - Callejero - Ayuntamiento - Zaragoza',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; Archivo Municipal del <a href="https://www.zaragoza.es/" target="_blank">Ayuntamiento de Zaragoza</a>',
				url: 'http://idezar.zaragoza.es/geoserver/historicos/wms?',
				params: {'LAYERS': 'AMZ_4-2_0926', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [



		
				
		
		{
			group: 'Per date',
			title: 'Exact date',
			query: '(nwr[~"^name:....-..-..$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#3aff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#3aff00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Per date',
			title: 'Exact year',
			query: '(nwr[~"^name:....$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: 'Exact year',
			query: '(nwr[~"^name:....$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: 'Interval of years - simple',
			query: '(nwr[~"^name:....-....$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Per date',
			title: 'Interval of years',
			query: '(nwr[~"^name:....-....$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#e1ffff',
			style: function (feature) {
				var key_regex = /^name:[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(225,255,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#e1ffff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
						text: new ol.style.Text({
						text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Per date',
			title: 'Exact Interval of years',
			query: '(nwr[~"^name:....-..-..-....-..-..$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
		  group: 'Test',
		  title: 'geojson',
		  geojson:  imgSrc + 'test.geojson',
		  style: new ol.style.Style({
          image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
              radius: 20,
              fill: new ol.style.Fill({
                  color: '#ffff00'
              })
          }))
      })
		},
	{
      group: 'Test',
      title: 'Prum  <b> Clicar aquí</b>',
	  iconSrc: imgSrc + 'base/circle.svg',
	  iconStyle: 'background-color:#0000ff',
      geojson: 'https://raw.githubusercontent.com/yopaseopor/osmhistoricmap/master/src/img/base/test.geojson',
      style: new ol.style.Style({
          image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
              radius: 20,
              fill: new ol.style.Fill({
                  color: '#ffff00'
              })
          }))
      })
    },
		{
			group: 'Test',
			title: 'Stops signs',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/customosmapp/master/customosmapp3/src/img/base/test.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
					})
				});
				return style;
			}
    },
			// Overlay: Test
		{
			group: 'Test',
			title: 'node[name=]',
			query: 'node[name=]({{bbox}});out meta;'
		},
		{
			group: 'Test',
			title: 'FGC',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			geojson: 'https://dadesobertes.fgc.cat/api/records/1.0/search/?dataset=posicionament-dels-trens&q=&rows=10',
			style: function (feature) {
				var name = feature.get('name') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'traffic_sign:forward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
										},
					'lin': {
						'S1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
	},
		{
			group: 'Test',
			title: 'Pere IV',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/customosmapp/master/customosmapp3/src/img/base/2020_bcn_Carrer_de_Pere_IV.geojson',
			style: function (feature) {
				var name = feature.get('name') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'traffic_sign:forward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
										},
					'lin': {
						'S1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'cycleway': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'footway': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
},
		{
			group: 'Test',
			title: 'Senyals Barcelona (Opendata Ajuntament BCN - NO OSM)',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/customosmapp/master/customosmapp3/src/img/base/2021_06_27_senyals_transit_bcn.geojson',
			style: function (feature) {
				var name = feature.get('name') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'traffic_sign:backward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
										},
					'traffic_sign:forward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
'ES:P1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P11a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P13a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P13b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P14a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P14b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16a_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16a_14': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a_14.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16b_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16b_17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b_17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P19': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P20a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21LUZ': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21LUZ.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21LUZ2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21LUZ2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P22': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P24': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P25': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P25 bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25 bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P26': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P29': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P31': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P34': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P50o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PANEL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PANEL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PAP': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PAP.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ParadaBus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ParadaBus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PARCCOLL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PARCCOLL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_4Pictos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_4Pictos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_AreaGosso': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_AreaGosso.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_JocsInfan': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_JocsInfan.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PelPeat': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PelPeat.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PrioritatBus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PrioritatBus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PROH_TAX_JPeiro': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PROH_TAX_JPeiro.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PROHPILOTA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PROHPILOTA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PuntVerd': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PuntVerd.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100 VP Bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100 VP Bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100Bus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100Bus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R101': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R101 VP Bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101 VP Bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R102': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R103': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R104': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R105': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R106': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_1.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_1.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_16': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_16.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_16.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_16.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_20.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_20.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_4.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_4.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_6.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_6.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R108': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R114': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R116': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2_AMA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2_AMA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R200': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_1.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_1.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_1.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_1.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_16': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_16.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_3.0': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_3.0.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R202': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R202_12': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202_12.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_12': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_12.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_7': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_7.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_8.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_8.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.0': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.0.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_3.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_3.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_4.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_4.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_1.9': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_1.9.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.7': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.7.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R300': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_60': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_60.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_80': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_80.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_90': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_90.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R302': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R303': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R304': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R305': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R306': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307Da': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307Da.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307Ia': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307Ia.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307La': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307La.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307P': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307P.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PL_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PL_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308 ES:R407': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308 ES_R407.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU2_A': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU2_A.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU3_C': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU3_C.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU4_B': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU4_B.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308cI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308cI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308cL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308cL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308dD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308dD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308dI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308dI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308L_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308L_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P_1-15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P_1-15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PD_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PD_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R309': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R310': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400CanviSenti': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400CanviSenti.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400e': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R401a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R401b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R402': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R404': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R405': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R407': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R407_FIN': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407_FIN.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R410': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R410_FIN': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410_FIN.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R413': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R502': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R503': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R506_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ3 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ3 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ3 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ3 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102R': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102R.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102RD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102RD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S103': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105_1500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105_1500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105_500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105_500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105a_500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105a_500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aR': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aR.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105vi': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105vi.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S106': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S106_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S108': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S109': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S111': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118_200': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118_200.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S122_Microf': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122_Microf.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S122_TÃºnel': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122_TÃºnel.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S13': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S13_AMA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13_AMA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_10min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_10min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_20min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_20min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_2h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_2h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_30min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_30min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_Fila': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_Fila.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_Glories': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_Glories.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_MINUS': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_MINUS.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17D_motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17D_motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_Fila': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_Fila.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_MINUS': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_MINUS.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S19': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_050': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_050.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_250': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_250.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23A': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23A.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23B': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23B.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S24': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S26a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S26c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S28': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S29': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35_Verde': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35_Verde.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC_Blanca': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC_Blanca.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC_BlancaF': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC_BlancaF.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S36REC': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S36REC.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S51': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52c2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52c2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52d3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52d3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a21': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a21.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800_1500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800_1500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800_2000': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800_2000.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800b_5km': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800b_5km.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800b_7km': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800b_7km.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S820': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S840_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S870': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S870I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S9': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S900': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),


						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
},
		{
			group: 'Test',
			title: 'Señales ES (Transparencia/Fomento (Catalunya) - NO OSM)',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/customosmapp/master/customosmapp3/src/img/base/traffic_signs_for_2021_cat.geojson',
			style: function (feature) {
				var name = feature.get('name') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'traffic_sign:backward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
										},
					'traffic_sign:forward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
'ES:P1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P11a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P13a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P13b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P14a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P14b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16a_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16a_14': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a_14.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16b_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16b_17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b_17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P19': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P20a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21LUZ': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21LUZ.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21LUZ2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21LUZ2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P22': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P24': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P25': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P25 bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25 bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P26': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P29': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P31': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P34': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P50o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PANEL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PANEL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PAP': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PAP.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ParadaBus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ParadaBus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PARCCOLL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PARCCOLL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_4Pictos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_4Pictos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_AreaGosso': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_AreaGosso.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_JocsInfan': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_JocsInfan.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PelPeat': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PelPeat.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PrioritatBus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PrioritatBus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PROH_TAX_JPeiro': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PROH_TAX_JPeiro.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PROHPILOTA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PROHPILOTA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PuntVerd': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PuntVerd.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100 VP Bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100 VP Bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100Bus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100Bus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R101': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R101 VP Bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101 VP Bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R102': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R103': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R104': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R105': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R106': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_1.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_1.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_16': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_16.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_16.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_16.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_20.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_20.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_4.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_4.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_6.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_6.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R108': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R114': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R116': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2_AMA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2_AMA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R200': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_1.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_1.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_1.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_1.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_16': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_16.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_3.0': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_3.0.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R202': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R202_12': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202_12.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_12': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_12.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_7': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_7.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_8.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_8.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.0': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.0.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_3.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_3.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_4.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_4.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_1.9': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_1.9.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.7': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.7.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R300': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_60': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_60.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_80': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_80.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_90': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_90.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R302': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R303': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R304': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R305': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R306': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307Da': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307Da.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307Ia': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307Ia.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307La': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307La.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307P': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307P.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PL_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PL_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308 ES:R407': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308 ES_R407.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU2_A': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU2_A.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU3_C': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU3_C.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU4_B': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU4_B.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308cI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308cI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308cL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308cL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308dD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308dD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308dI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308dI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308L_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308L_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P_1-15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P_1-15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PD_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PD_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R309': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R310': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400CanviSenti': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400CanviSenti.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400e': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R401a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R401b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R402': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R404': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R405': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R407': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R407_FIN': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407_FIN.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R410': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R410_FIN': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410_FIN.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R413': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R502': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R503': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R506_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ3 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ3 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ3 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ3 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102R': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102R.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102RD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102RD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S103': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105_1500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105_1500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105_500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105_500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105a_500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105a_500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aR': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aR.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105vi': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105vi.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S106': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S106_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S108': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S109': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S111': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118_200': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118_200.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S122_Microf': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122_Microf.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S122_TÃºnel': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122_TÃºnel.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S13': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S13_AMA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13_AMA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_10min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_10min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_20min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_20min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_2h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_2h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_30min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_30min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_Fila': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_Fila.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_Glories': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_Glories.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_MINUS': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_MINUS.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17D_motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17D_motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_Fila': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_Fila.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_MINUS': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_MINUS.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S19': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_050': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_050.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_250': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_250.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23A': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23A.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23B': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23B.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S24': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S26a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S26c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S28': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S29': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35_Verde': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35_Verde.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC_Blanca': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC_Blanca.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC_BlancaF': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC_BlancaF.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S36REC': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S36REC.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S51': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52c2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52c2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52d3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52d3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a21': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a21.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800_1500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800_1500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800_2000': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800_2000.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800b_5km': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800b_5km.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800b_7km': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800b_7km.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S820': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S840_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S870': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S870I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S9': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S900': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),


						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		},
		{
			group: 'Test',
			title: 'ES_1932-1939 II Spanish Republic',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmhistoricmap/master/src/img/base/2021_06_27_senyals_transit_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			query: '(nwr[~"^name:193[0-9]-193[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:193[0-9]-193[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Test',
			title: '1961',
			query: '(nwr[~"^name:197[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function (feature) {
				var key_regex = /^name:197[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
  {
   group: 'Test',
   title: '1962',
   query: '(nwr[~"^name:197[0-9]$"~"."]({{bbox}});node(w););out meta;',
   iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:#0000ff',
   style: function (feature) {
    var key_regex = /^name:197[0-9]$/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var fill = new ol.style.Fill({
     color: 'rgba(0,0,255,0.4)'
    });

var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://raw.githubusercontent.com/yopaseopor/osmhistoricmap/master/src/img/base/test.geojson'
    }),
  style: function (feature) {
    style.getText().setText(feature.get('highway'));
    return style;
  },
});
    var stroke = new ol.style.Stroke({
     color: '#0000ff',
     width: 1.25
    });
    var style = new ol.style.Style({
     image: new ol.style.Circle({
      fill: fill,
      stroke: stroke,
      radius: 5
     }),
       text: new ol.style.Text({
        text: name
       }),
     fill: fill,
     stroke: stroke
    });
    return style;
   }
  },
		{
			group: 'Centuries',
			title: '1000-1099',
			query: '(nwr[~"^name:10[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#753f4f',
			style: function (feature) {
				var key_regex = /^name:10[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#753f4f',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1100-1199',
			query: '(nwr[~"^name:11[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#bb5c78',
			style: function (feature) {
				var key_regex = /^name:11[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#bb5c78',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1200-1299',
			query: '(nwr[~"^name:12[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ff987c',
			style: function (feature) {
				var key_regex = /^name:12[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff987c',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1300-1399',
			query: '(nwr[~"^name:13[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ffd17c',
			style: function (feature) {
				var key_regex = /^name:13[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ffd17c',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1400-1499',
			query: '(nwr[~"^name:14[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#fffb7c',
			style: function (feature) {
				var key_regex = /^name:14[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#fffb7c',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1500-1599',
			query: '(nwr[~"^name:15[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#beff7c',
			style: function (feature) {
				var key_regex = /^name:15[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#beff7c',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1600-1699',
			query: '(nwr[~"^name:16[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7cffa6',
			style: function (feature) {
				var key_regex = /^name:16[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7cffa6',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1700-1799',
			query: '(nwr[~"^name:17[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7cfff5',
			style: function (feature) {
				var key_regex = /^name:17[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7cfff5',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1800-1899',
			query: '(nwr[~"^name:18[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7ca0ff',
			style: function (feature) {
				var key_regex = /^name:18[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7ca0ff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: '1800-1899',
			query: '(nwr[~"^name:18[0-9][0-9]$"~"."]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7ca0ff',
			style: function (feature) {
				var key_regex = /^name:18[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7ca0ff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '1900-1999',
			query: '(nwr[~"^name:19[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#8e7cff',
			style: function (feature) {
				var key_regex = /^name:19[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#8e7cff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Centuries',
			title: '2000-2020',
			query: '(nwr[~"^name:20[0-9][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ef7cff',
			style: function (feature) {
				var key_regex = /^name:20[0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ef7cff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: '1900-1909',
			query: '(nwr[~"^name:190[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function (feature) {
				var key_regex = /^name:190[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1900-1909',
			query: '(nwr[~"^name:190[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#E0E0F8',
			style: function (feature) {
				var key_regex = /^name:190[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(224,224,248,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#E0E0F8',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1910-1919',
			query: '(nwr[~"^name:191[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#CECEF6',
			style: function (feature) {
				var key_regex = /^name:191[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(206,206,246,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#CECEF6',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1920-1929',
			query: '(nwr[~"^name:192[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#A9A9F5',
			style: function (feature) {
				var key_regex = /^name:192[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(169,169,245,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#A9A9F5',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1930-1939',
			query: '(nwr[~"^name:193[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#8181F7',
			style: function (feature) {
				var key_regex = /^name:193[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(129,129,247,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#8181F7',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1940-1949',
			query: '(nwr[~"^name:194[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#5858FA',
			style: function (feature) {
				var key_regex = /^name:194[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(88,88,250,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#5858FA',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1950-1959',
			query: '(nwr[~"^name:195[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#2E2EFE',
			style: function (feature) {
				var key_regex = /^name:195[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(46,46,254,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#2E2EFE',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1960-1969',
			query: '(nwr[~"^name:196[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function (feature) {
				var key_regex = /^name:196[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1970-1979',
			query: '(nwr[~"^name:197[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0101DF',
			style: function (feature) {
				var key_regex = /^name:197[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(1,1,223,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0101DF',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1980-1989',
			query: '(nwr[~"^name:198[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0404B4',
			style: function (feature) {
				var key_regex = /^name:198[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(4,4,180,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0404B4',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '1990-1999',
			query: '(nwr[~"^name:199[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#08088A',
			style: function (feature) {
				var key_regex = /^name:199[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(8,8,138,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#08088A',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '2000-2009',
			query: '(nwr[~"^name:200[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#E6E0F8',
			style: function (feature) {
				var key_regex = /^name:201[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(230,224,248,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#E6E0F8',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '2010-2019',
			query: '(nwr[~"^name:201[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#D8CEF6',
			style: function (feature) {
				var key_regex = /^name:201[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(216,206,246,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#D8CEF6',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Decades',
			title: '2020-2029',
			query: '(nwr[~"^name:202[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#BCA9F5',
			style: function (feature) {
				var key_regex = /^name:202[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(188,169,245,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#BCA9F5',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Overlay: 5 years
		{
			group: '5-years 50',
			title: '1970-1974',
			query: '(nwr[~"^name:197[0-4]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#753f4f',
			style: function (feature) {
				var key_regex = /^name:197[0-4]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#753f4f',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '1975-1979',
			query: '(nwr[~"^name:197[5-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#bb5c78',
			style: function (feature) {
				var key_regex = /^name:197[5-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#bb5c78',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '1980-1984',
			query: '(nwr[~"^name:198[0-4]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ff987c',
			style: function (feature) {
				var key_regex = /^name:198[0-4]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff987c',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '1985-1989',
			query: '(nwr[~"^name:198[5-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ffd17c',
			style: function (feature) {
				var key_regex = /^name:198[5-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ffd17c',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '1990-1994',
			query: '(nwr[~"^name:199[0-4]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#fffb7c',
			style: function (feature) {
				var key_regex = /^name:199[0-4]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#fffb7c',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '1995-1999',
			query: '(nwr[~"^name:199[5-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#beff7c',
			style: function (feature) {
				var key_regex = /^name:199[5-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#beff7c',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '2000-2004',
			query: '(nwr[~"^name:200[0-4]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7cffa6',
			style: function (feature) {
				var key_regex = /^name:200[0-4]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7cffa6',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '2005-2009',
			query: '(nwr[~"^name:200[5-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7cfff5',
			style: function (feature) {
				var key_regex = /^name:200[5-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7cfff5',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '2010-2014',
			query: '(nwr[~"^name:201[0-4]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7ca0ff',
			style: function (feature) {
				var key_regex = /^name:201[0-4]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7ca0ff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '2015-2019',
			query: '(nwr[~"^name:201[5-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#8e7cff',
			style: function (feature) {
				var key_regex = /^name:201[5-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#8e7cff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: '5-years 50',
			title: '2020-2024',
			query: '(nwr[~"^name:202[0-4]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ef7cff',
			style: function (feature) {
				var key_regex = /^name:202[0-4]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ef7cff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Proposed',
			query: '(nwr[~"^proposed(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00d8ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00d8ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Construction',
			query: '(nwr[~"^construction(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00ffd1',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00ffd1',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Abandoned',
			query: '(nwr[~"^abandoned(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Històric
		{
			group: 'Generic',
			title: 'Disused',
			query: '(nwr[~"^disused(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#d4ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#d4ff00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Històric
		{
			group: 'Generic',
			title: 'Was',
			query: '(nwr[~"^was(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#710171',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(113,0,113,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#710171',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Històric
		{
			group: 'Generic',
			title: 'Old',
			query: '(nwr[~"old"~".*"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7000ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,243,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Demolished',
			query: '(nwr[~"^demolished(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ffcd00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ffcd00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Removed',
			query: '(nwr[~"^removed(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ff7000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff7000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Razed',
			query: '(nwr[~"^razed(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Històric
		{
			group: 'Test',
			title: 'Antic(old)',
			query: '(nwr[~"old"~".*"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00fff3',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,243,0.4)'
				});
				var name1975 = feature.get('name:1975') || '';
				if ('name:1975' === ''){
					return undefined;
				}
				var stroke = new ol.style.Stroke({
					color: '#00fff3',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					text: new ol.style.Text({
							text: name1975
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		// Overlay: Històric
		{
			group: 'Topics',
			title: 'Old Ref',
			query: '(nwr[~"old_ref"~".*"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed.svg',
			style: function (feature) {
				var name1975 = feature.get('old_ref') || '';
				if ('old_ref' === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(name1975) / 30) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(name1975, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.5)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/old_ref_empty.svg',
							scale:0.1
						}),
						text: new ol.style.Text({
							text: name1975
						})
					}));
				}

				return styles;
			}
		},
		
		// Overlay: Històric
		/*{
			group: 'Històric',
			title: '1975',
			query: '(node["name:1975"]({{bbox}});node(w);way["name:1975"]({{bbox}});node(w);relation["name:1975"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed.svg',
			style: function (feature) {
				var name1975 = feature.get('name:1975') || '';
				if ('name:1975' === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ /*
				var width = (parseFloat(name1975) / 30) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(name1975, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ /*
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.5)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.04
						}),
						text: new ol.style.Text({
							text: name1975
						})
					}));
				}

				return styles;
			}
		},
	*/	
		
		
		
		// Overlay: Històric
		{
			group: 'Generic',
			title: 'Ruins',
			query: '(nwr[historic=ruins]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(113,70,1,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#714601',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Topics',
			title: 'ES_1932-1939 II Spanish Republic',
			query: '(nwr[~"^name:193[0-9]-193[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:193[0-9]-193[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Topics',
			title: 'ES_1939-1975 Spanish Dictatorship names_interval',
			query: '(nwr[~"^name:193[0-9]-197[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:193[0-9]-197[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Topics',
			title: 'ES_1939-1975 Spanish Dictatorship names_date',
			query: '(nwr[~"^name:19[4-7][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:19[4-7][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'amenity': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'place:1966': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'track': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 0.5)',
								width: 4
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway:1966': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'track': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 0.5)',
								width: 4
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'waterway': {
						'stream': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 175, 246, 0.5)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'river': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 175, 246, 0.5)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 175, 246, 0.5)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'landuse': {
						'cemetery': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						})
					},
					'natural:1966': {
						'beach': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(214, 196, 152, 1.0)',
								width: 1
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							}),
							fill: new ol.style.Fill({
								color: 'rgba(214, 196, 152, 0.3)'
							})
						})
					},
					'natural': {
						'beach': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						})
					},
					'.*': {
						'.*': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Topics',
			title: 'DE_1961-1989_11_09 Berliner Mauer',
			query: '(nwr[~"^name:196[0-9]-198[0-9]_11_09$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:196[0-9]-198[0-9]_11_09$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'historic': {
						'yes': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 3
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Topics',
			title: 'US_MA-NY_1970 Amtrak Railroad Historic',
			query: '(nwr[~"^old_name:197[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FF8B00',
			style: function (feature) {
				var key_regex = /^old_name:197[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'railway': {
						'rail': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 139, 0, 0.5)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
							'disused': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 236, 0, 0.5)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
							'razed': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 35, 0, 0.5)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
							'abandoned': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 208, 200, 0.5)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
							'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Topics',
			title: 'US_WA 1875-1895 Old names Seattle',
			query: '(nwr[~"^old_name:1875-1895$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^old_name:1875-1895$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Topics',
			title: 'US_WI Milwaukee Historic Map',
			query: '(nwr[~"^name:1"~".*"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:1[0-9][0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Test',
			title: '1975',
			query: '(nwr["name:1975"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var name = feature.get('name:1975') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		},
		{
			group: 'Test',
			title: '1977',
			query: '(node({{bbox}});rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var name = feature.get('name~"^197.$"') || '';			
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		},
		{
			group: 'Test',
			title: 'building',
			query: '(node({{bbox}});rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out;',
			style: function (feature) {
				var name = feature.get('~"^name:197.$"~".*"') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		},
		
/*
		
				// Right Ticket
		{
			group: 'Parking_Lanes',
			title: 'Right Ticket',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right"="ticket"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right"="ticket"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right"="ticket"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Mobilitat',
			title: 'Vies amb "maxspeed"',
			query: '(way[highway=motorway][maxspeed]({{bbox}});node(w);way[highway=trunk][maxspeed]({{bbox}});node(w);way[highway=primary][maxspeed]({{bbox}});node(w);way[highway=secondary][maxspeed]({{bbox}});node(w);way[highway=tertiary][maxspeed]({{bbox}});node(w);way[highway=unclassified][maxspeed]({{bbox}});node(w);way[highway=track][maxspeed]({{bbox}});node(w);way[highway=residential][maxspeed]({{bbox}});node(w);way[highway=service][maxspeed]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed.svg',
			style: function (feature) {
				var maxspeed = feature.get('maxspeed') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ /*
				var width = (parseFloat(maxspeed) / 30) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(maxspeed, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ /*
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.5)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.04
						}),
						text: new ol.style.Text({
							text: maxspeed
						})
					}));
				}

				return styles;
			}
		},
		
				// Left Ticket
		{
			group: 'Parking_Lanes',
			title: 'Left Ticket',
			query: '(way["parking:lane:left"="parallel"]["parking:condition:left"="ticket"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]["parking:condition:left"="ticket"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]["parking:condition:left"="ticket"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Both Ticket
		{
			group: 'Parking_Lanes',
			title: 'Both Ticket',
			query: '(way["parking:lane:both"="parallel"]["parking:condition:both"="ticket"]({{bbox}});node(w);way["parking:lane:both"="diagonal"]["parking:condition:both"="ticket"]({{bbox}});node(w);way["parking:lane:both"="perpendicular"]["parking:condition:both"="ticket"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Right No parking
		{
			group: 'Parking_Lanes',
			title: 'Right No parking',
			query: '(way["parking:lane:right"="no_parking"]({{bbox}});node(w);way["parking:lane:right"="no_stopping"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Left No parking
		{
			group: 'Parking_Lanes',
			title: 'Left No parking',
			query: '(way["parking:lane:left"="no_parking"]({{bbox}});node(w);way["parking:lane:left"="no_stopping"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Both No parking
		{
			group: 'Parking_Lanes',
			title: 'Both No parking',
			query: '(way["parking:lane:both"="no_parking"]({{bbox}});node(w);way["parking:lane:both"="no_stopping"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},


		// Right Free
		{
			group: 'Parking_Lanes',
			title: 'Right Free',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right"="free"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right"="free"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#c9c9c9',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#c9c9c9',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Right Residents
		{
			group: 'Parking_Lanes',
			title: 'Right Residents Green Zone',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right:residents"="free"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right:residents"="free"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right:residents"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Right Residents Exclusive
		{
			group: 'Parking_Lanes',
			title: 'Right Residents Green Exclusive Zone',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right"="residents"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right"="residents"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right"="residents"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#145a32',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#145a32',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Left Free
		{
			group: 'Parking_Lanes',
			title: 'Left Free',
			query: '(way["parking:lane:left"="parallel"]["parking:condition:left"="free"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]["parking:condition:left"="free"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]["parking:condition:left"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#c9c9c9',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#c9c9c9',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Left Residents
		{
			group: 'Parking_Lanes',
			title: 'Left Residents Green Zone',
			query: '(way["parking:lane:left"="parallel"]["parking:condition:left:residents"="free"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]["parking:condition:left:residents"="free"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]["parking:condition:left:residents"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Left Residents Exclusive
		{
			group: 'Parking_Lanes',
			title: 'Left Residents Green Exclusive Zone',
			query: '(way["parking:lane:left"="parallel"]["parking:condition:left"="residents"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]["parking:condition:left"="residents"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]["parking:condition:left"="residents"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#145a32',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#145a32',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Both Free
		{
			group: 'Parking_Lanes',
			title: 'Both Free',
			query: '(way["parking:lane:both"="parallel"]["parking:condition:both"="free"]({{bbox}});node(w);way["parking:lane:both"="diagonal"]["parking:condition:both"="free"]({{bbox}});node(w);way["parking:lane:both"="perpendicular"]["parking:condition:both"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#c9c9c9',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#c9c9c9',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Both Residents
		{
			group: 'Parking_Lanes',
			title: 'Both Residents Green Zone',
			query: '(way["parking:lane:both"="parallel"]["parking:condition:both:residents"="free"]({{bbox}});node(w);way["parking:lane:both"="diagonal"]["parking:condition:both:residents"="free"]({{bbox}});node(w);way["parking:lane:both"="perpendicular"]["parking:condition:both:residents"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 3
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Both Residents Exclusive
		{
			group: 'Parking_Lanes',
			title: 'Both Residents Green Exclusive Zone',
			query: '(way["parking:lane:both"="parallel"]["parking:condition:both"="residents"]({{bbox}});node(w);way["parking:lane:both"="diagonal"]["parking:condition:both"="residents"]({{bbox}});node(w);way["parking:lane:both"="perpendicular"]["parking:condition:both"="residents"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#145a32',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#145a32',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},

		// Both Residents Exclusive
		{
			group: 'Parking_Lanes',
			title: 'Customers',
			query: '(way["parking:condition:left"="customers"]({{bbox}});node(w);way["parking:condition:right"="customers"]({{bbox}});node(w);way["parking:condition:both"="customers"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#01F6F2',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(1,246,242,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#01F6F2',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Motorcycle parking
		{
			group: 'Parking_Lanes',
			title: 'Motorcycle parking',
			query: '(node["amenity"="motorcycle_parking"]({{bbox}});node(w);way["amenity"="motorcycle_parking"]({{bbox}});node(w);relation["amenity"="motorcycle_parking"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#9D06FB',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(157,6,251,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#9D06FB',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Parking with fee
		{
			group: 'Parking_Lanes',
			title: 'Parking with fee',
			query: '(node["amenity"="parking"][fee=yes]({{bbox}});node(w);way["amenity"="parking"][fee=yes]({{bbox}});node(w);relation["amenity"="parking"][fee=yes]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#154360',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(21,67,96,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#154360',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Motorcycle parking
		{
			group: 'Parking_Lanes',
			title: 'Delivery',
			query: '(node["capacity:delivery"]({{bbox}});node(w);way["capacity:delivery"]({{bbox}});node(w);relation["capacity:delivery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FBEA00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(251,155,2,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FBEA00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Charging Station
		{
			group: 'Parking_Lanes',
			title: 'Charging Station',
			query: '(node["amenity"="charging_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/charging_station.svg',
			style: function (feature) {
				var src = imgSrc + 'icones/symbols/amenity/charging_station.svg';
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},

		// Entrance garage
		{
			group: 'Parking_Lanes',
			title: 'Entrance garage',
			query: '(node["entrance"="garage"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/ES_R308e.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.4,
						src: imgSrc + 'icones/ES_R308e.png'
					})
				});
				return style;
			}
		},
		
		// capacity:disabled
		{
			group: 'Parking_Lanes',
			title: 'Disabled parking space',
			query: '(node["capacity:disabled"]({{bbox}});node(w);way["capacity:disabled"]({{bbox}});node(w);relation["capacity:disabled"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 }, 


		// Parking left lane
		{
			group: 'Mobilitat',
			title: 'Left Parallel',
			query: '(way["parking:lane:left"="parallel"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#3cff33',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#3cff33',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
			
					},
					
					

		// Right Free Test
		{
			group: 'Test',
			title: 'Right Free',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right"="free"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right"="free"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/p.png',
			iconStyle: 'background-color:#c9c9c9',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/pal_cobertura.png'
					})
				});
				return style;
			}
		},
	{
			group: 'Coronavirus',
			title: 'Hospital i CAPs',
			query: 'node[amenity=hospital]({{bbox}});out;node[amenity=clinic]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/hospital.svg',
			style: function (feature) {
				var src = imgSrc + 'icones/symbols/amenity/hospital.svg';
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		
				// Mobilitat (Exprés.cat)
		{
			group: 'Mobilitat',
			title: 'Right No Stopping',
			query: '(way["parking:lane:right"="no_stopping"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Overlay: Coronavirus
		{
			group: 'Coronavirus',
			title: 'Establiments oberts',
			query: 'node["opening_hours:covid19"]({{bbox}});out meta;',
			iconSrc: imgSrc + 'coronavirus.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		
		{
			group: 'Coronavirus',
			title: 'Supermercat',
			query: 'node[shop=supermarket]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/shop/supermarket.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		{
			group: 'Coronavirus',
			title: 'Farmacies',
			query: 'node[amenity=pharmacy]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/pharmacy.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		{
			group: 'Coronavirus',
			title: 'Hospital i CAPs',
			query: 'node[amenity=hospital]({{bbox}});out;node[amenity=clinic]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/hospital.svg',
			style: function (feature) {
				var src = imgSrc + 'icones/symbols/amenity/hospital.svg';
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		{
			group: 'Coronavirus',
			title: 'Gasolineres',
			query: 'node[amenity=fuel]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/fuel.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				console.log('src', src);
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		{
			group: 'Coronavirus',
			title: 'Policia',
			query: 'node[amenity=police]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/police.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				console.log('src', src);
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		// Overlay: Iniciatives
		{
			group: 'Iniciatives',
			title: 'Cobertura 112',
			query: 'node[emergency=access_point]({{bbox}});out skel;',
			iconSrc: imgSrc + 'icones/pal_cobertura.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/pal_cobertura.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Desfibril·lador',
			query: 'node[emergency=defibrillator]({{bbox}});out skel;',
			iconSrc: imgSrc + 'icones/aed.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/aed.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Vies sense nom (#1carrer1nom)',
			query: '(way[highway=residential][!name][!noname][!junction]({{bbox}});node(w);way[highway=pedestrian][!name][!noname][!junction]({{bbox}});node(w);way[highway=living_street][!name][!noname][!junction]({{bbox}});node(w);way[highway=unclassified][!name][!noname][!junction]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Vies amb nom i tag:noname',
			query: '(way[name][noname]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF6C00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,128,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF6C00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Vies sense "lanes"',
			query: '(way[highway=motorway][!lanes]({{bbox}});node(w);way[highway=trunk][!lanes]({{bbox}});node(w);way[highway=primary][!lanes]({{bbox}});node(w);way[highway=secondary][!lanes]({{bbox}});node(w);way[highway=tertiary][!lanes]({{bbox}});node(w);way[highway=unclassified][!lanes]({{bbox}});node(w);way[highway=track][!lanes]({{bbox}});node(w);way[highway=residential][!lanes]({{bbox}});node(w);way[highway=service][!lanes]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#006CFF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,128,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#006CFF',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 1
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Passos de vianants (#1crossing1tag)',
			query: 'node[highway=crossing][crossing_ref]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/crossing.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/crossing.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'No crossing (#1crossing1tag)',
			query: 'node[highway=crossing][!crossing]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/crossingError.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/crossingError.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Estacions monitoratge',
			query: '(node[man_made=monitoring_station]({{bbox}});node(w);way[man_made=monitoring_station]({{bbox}});node(w);relation[man_made=monitoring_station]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Fonts d\'aigua potable',
			query: 'node[amenity=drinking_water]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		// Mobilitat
		{
			group: 'Mobilitat',
			title: 'Radars',
			query: 'node[highway=speed_camera]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/radar.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/radar.png'
					})
				});
				return style;
			}

		},
		{
			group: 'Mobilitat',
			title: 'crossing=traffic_signals',
			query: 'node[highway=crossing][crossing=traffic_signals]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/trafficlight.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/trafficlight.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'crossing=no',
			query: 'node[crossing=no]({{bbox}});out meta;',//As crossing=no excludes the existence of a crossing, it must be used without highway=crossing.
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'crossing=uncontrolled',
			query: 'node[highway=crossing][crossing=uncontrolled]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/crossing_uncontrolled.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/crossing_uncontrolled.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'ES:R1 backward',
			query: 'node["traffic_sign:backward"="ES:R1"]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/ES_R1.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/ES_R1.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'ES:R2 backward',
			query: 'node["traffic_sign:backward"="ES:R2"]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/ES_R2.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/ES_R2.png'
					})
				});
				return style;
			}
		},

		// Mobilitat (Exprés.cat)
		{
			group: 'Mobilitat',
			title: 'Exprés.cat (Barcelona)',
			query: '(relation["network"="exprés.cat (Barcelona)"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'Exprés.cat (Girona)',
			query: '(relation["network"="exprés.cat (Girona)"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'Exprés.cat (Tarragona)',
			query: '(relation["network"="exprés.cat (Tarragona)"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'Exprés.cat (Lleida)',
			query: '(relation["network"="exprés.cat (Lleida)"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		//Reciclatge
		{
			group: 'Reciclatge',
			title: 'Paper',
			query: 'node["recycling:paper"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Vidre',
			query: 'node["recycling:glass_bottles"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Envasos',
			query: 'node["recycling:cans"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FFFF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFFF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Orgànic',
			query: 'node["recycling:organic"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#A52A2A',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(165,42,42,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#A52A2A',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Rebuig',
			query: 'node["recycling:waste"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Piles',
			query: 'node["recycling:batteries"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Oli',
			query: 'node["recycling:cooking_oil"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#6A5ACD',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(106,90,205,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#6A5ACD',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Privats',
			query: 'node[recycling_type=container][access=private]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#808080',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(128,128,128,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#808080',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Overlay: Accessibilitat
		{
			group: 'Accessibilitat',
			title: 'Plaça aparcament',
			query: 'node["capacity:disabled"]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/capacity_disabled.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/capacity_disabled.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Pas de vianant amb semàfor',
			query: 'node[crossing=traffic_signals]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/crossing_traffic_signals.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/crossing_traffic_signals.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Comerç Adaptat=sí',
			query: 'node[wheelchair=yes][shop]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Comerç Adaptat=no',
			query: 'node[wheelchair=no][shop]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_no_shop.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/wheelchair_no_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Comerç Adaptat parcialment',
			query: 'node[wheelchair=limited][shop]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Obstacle per a la mobilitat',
			query: 'node["obstacle:wheelchair"=yes]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/obstacle_wheelchair_yes.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/obstacle_wheelchair_yes.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Vies no adaptades',
			query: '(way[wheelchair=no][highway=footway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		}, */

		// Overlay: Test
		{
			group: 'Test',
			title: 'node[name=]',
			query: 'node[name=]({{bbox}});out meta;'
		},
		{
			group: 'Test',
			title: 'building',
			query: '(node({{bbox}});rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out;',
			style: function (feature) {
				var name = feature.get('name') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		}
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));
				//Mapcomplete editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fosmlitmap%2Fmaster%2Fsrc%2Fjson%2Flit.json&language=ca#welcome', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapcomplete_logo.png', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Latest OpenStreetMap Edits per Tile
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeBo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',normal', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));

		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));

		return $.merge($.merge(edit, open), tool);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
