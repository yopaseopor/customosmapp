
// ====================
// bevat de query strings voor de verschillende lagen
//
// formaat make_layer variabelen:
//
//<URL> string 'url',<color>: string '#RGB', <name>: string '[imagetype]tekst', <lijnbreedte>[.cirkelradius]: int/float, <zichtbaarheid> : boolean, [lijntpye][transparantie] :string '[aan uit (aan uit ( ...))][@transparantie]'
//
// imagetype: #l# = lijn, #dl#=dubbele lijn, #d# = stippellijn, #c#= transparant, #co# = cirkel opaque met cijfers
// aan/uit = pixellengte van de lijn, zichtbare lijn-open gedeelte
// transparantie = 0-1 transparantie van de lijn
//
//=====================
// ====================
// COPIAR 	
// COPIAR Copy this if you want a line
//COPIAR
//COPIAR	function nameofthefunction(color){
//COPIAR		return(
//COPIAR		{
//COPIAR			strokeColor:"color",
//COPIAR			strokeOpacity:0.7,
//COPIAR			strokeWidth:2,
//COPIAR			strokeLinecap: "square",
//COPIAR			strokeDashstyle: "1 0"
//COPIAR		});
//COPIAR	}
// COPIAR
// COPIAR Copy this if you want a point
// COPIAR	function nameofthefunction(color){
// COPIAR		return (
// COPIAR		{
// COPIAR			strokeColor:color,
// COPIAR			strokeOpacity:0.9,
// COPIAR			strokeWidth:3,
// COPIAR			pointRadius:5,
// COPIAR			fillColor:"white",
// COPIAR			fillOpacity:0.75
// COPIAR		});
// COPIAR	}
// COPIAR Copy this if you want an external icon
// COPIAR 		function tsforward(url){
// COPIAR 		return (
// COPIAR 		{
// COPIAR 			externalGraphic:url,
// COPIAR 			graphicOpacity: 0.75,
// COPIAR 			graphicWidth:20,
// COPIAR 			graphicHeight:20,
// COPIAR 			graphicXOffset: 4,
// COPIAR 			graphicYOffset: 0,
// COPIAR 			rotation:0
// COPIAR 		});
// COPIAR 	}
//	
//	COPIAR	if (type == "nameofthetdid"){   of index.html
//  COPIAR	map.addLayers([
//	COPIAR  make_layer(QURL + "?data=(way[key=value](bbox);node(w);way[otherkey=othervalue](bbox);node(w););out+skel;",
//  COPIAR  name="#typeoflineoriconinlegend#HTML code you want to show"
//  COPIAR  nameofthefunction("http://urloftheicon" or "color"),
//  COPIAR  false
//  COPIAR	),
//  COPIAR  from "make_layer" to ), you can replicate to generate every overpass query then... (next line)
//  COPIAR			]);
//  COPIAR			
//  COPIAR		}
// VOCABULARI nameofthefuncition= name of the function, Each function with custom parameters has to have an unique name.
//VOCABULARI
//VOCABULARI strokeColor=color of the line
//VOCABULARI strokeOpacity=0-1 transparency of the line
//VOCABULARI strokeWidth=Width of the line
//VOCABULARI strokeLinecap=Form of the cap of the line
//VOCABULARI strokeDashstyle=start/end of the line pixels in which start the line, if it is discontinuous
//VOCABULARI pointRadius=number in píxels for the radius of the point
//VOCABULARI fillColor=color you want to fill the cercle
//VOCABULARI fillOpacity=0-1 transparency of the filled cercle
//VOCABULARI graphicOpacity=0-1 transparency of the icon
//VOCABULARI graphicWidth=in pixels, width of the icon
//VOCABULARI graphicHeight=in pixels, height of the icon
//VOCABULARI graphicXOffset=in pixels, offset in x from the point of the icon
//VOCABULARI graphicYOffset=in pixels, offset in y from the point of the icon
//VOCABULARI rotation:in grades, rotation angle of the icon
//VOCABULARI nameofthe td id you will find in index.html
// INSTRUCCIONS #typeoflineoriconinlegend#: #l# = line, #dl#=discontinuous line, #d# = dashed line, #c#= cercle, #ex#=external icon

// INSTRUCCIONS 
// INSTRUCCIONS default active option true enabled false unabled
// INSTRUCCIONS transparency = @0-1 transparency of the line
//

function layerdef(type){

	/*
	 * {
	 * 	strokeColor: "red",
	 * 	strokeOpacity: 0.9,
	 * 	strokeWidth: 5,
	 * 	strokeLinecap: "square",
	 * 	strokeDashstyle: "1 0"
	 */
	function defaultSolidLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:1,
			strokeWidth:1,
			strokeLinecap: "square",
		});
	}

	function defaultDashedLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.7,
			strokeWidth:10,
			strokeLinecap: "round",
			strokeDashstyle: "1 10"
		});
	}
	
		function defaultDiscontinuousLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.3,
			strokeWidth:5,
			strokeLinecap: "square",
			strokeDashstyle: "6 10"
		});
	}



	/*
	 * base Point Parameters:
	 * {
	 * 	strokeColor:"#FFFFFF",
	 * 	strokeOpacity:0.9,
	 * 	strokeWidth:3,
	 * 	pointRadius:3
	 * 	fillColor: "white",
	 * 	fillOpacity: 0.75,
	 * }
	 */
	function defaultPoint(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:1
		});
	}
	
		function defaultPoint2(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:1,
			strokeWidth:2,
			pointRadius:8,
			fillColor:"green",
			fillOpacity:0
		});
	}
	
		function defaultPoint3(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.5,
			strokeWidth:1,
			pointRadius:3,
			fillColor:"black",
			fillOpacity:0.5
		});
	}
	

	
	/*
	 * external Point Parameters:
	 * {
	 * 	externalGraphic: "path/to/icon.png",
	 * 	graphicWidth: 6,
	 * 	graphicHeight:6,
	 * 	graphicOpacity: 0.75,
	 * 	graphicXOffset: 0,
	 * 	graphicYOffset: 0,
	 * 	rotation: 0
	 * }
	 */
	function defaultExtPoint(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:16,
			graphicHeight:16,
			rotation:0
		});
	}
	
		function defaultIcon(url){
		return (
		{
			externalGraphic:url,
			graphicOpacity: 1,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 0,
			graphicYOffset: 0,
			rotation:0
		});
	}
	
		function rotatedIcon(url){
		return (
		{
			externalGraphic:url,
			graphicOpacity: 1,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 0,
			graphicYOffset: 0,
			rotation:45
		});
	}
	
		function opacityIcon(url){
		return (
		{
			externalGraphic:url,
			graphicOpacity: 0.35,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 0,
			graphicYOffset: 0,
			rotation:0
		});
	}
	
		function offsetIcon(url){
		return (
		{
			externalGraphic:url,
			graphicOpacity: 0.35,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: -10,
			graphicYOffset: 0,
			rotation:0
		});
	}
	
	
		if (type == "lines"){
		//	dit maakt de layers voor de cycleway tags
		map.addLayers([
		//highway=cycleway
			make_layer(
				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway~'path$|^footway$'][bicycle=designated](bbox);node(w););out+skel;",
				name="#l#highway=cycleway",
				defaultSolidLine("red"),
				false,
			),
			  
            make_layer(
				QURL + "?data=(way[highway=cycleway][oneway=yes](bbox);node(w););out+skel;",
				name="#d#cycleway, oneway=yes",
				defaultDashedLine("green"),
				false
			),
			
            make_layer(
				QURL + "?data=(way[highway=cycleway][segregated=yes](bbox);node(w););out+skel;", 
				name="#dl#cycleway segregated=yes",
				defaultDiscontinuousLine("cyan"),
				false),
			
/*			  

*/
		]);
	}
	
	
	
	if (type == "points"){
		
		map.addLayers([



			make_layer(
				QURL + "?data=node[wheelchair=no](bbox);out+skel;",
				name="#c#&nbspwheelchair=no",
				defaultPoint("red"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=limited](bbox);out+skel;",
				name="#c#&nbspwheelchair=limited",
				defaultPoint2("blue"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=yes](bbox);out+skel;",
				name="#to#&nbspwheelchair=yes<hr>",
				defaultPoint3("black"),
				false
			),
			
			make_layer(
				QURL + "?data=node[crossing=unmarked](bbox);out+skel;",
				name="#c#&nbspcrossing=unmarked<hr>",
				{
					strokeColor:"grey",
					strokeOpacity:0.9,
					strokeWidth:2,
					pointRadius:4,
					fillColor:"blue",
					fillOpacity:0.75
				},
				false
			),
			
			
		]);
	}	
	
	if (type == "icons"){

		map.addLayers([
				
			make_layer(
				QURL + "?data=node[wheelchair=yes](bbox);out+skel;",
				name="#ex#&nbspwheelchair=yes",
				defaultExtPoint("https://image.flaticon.com/icons/png/512/9/9285.png"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=traffic_signals](bbox);out+skel;",
				name="#ex#&nbspcrossing=traffic_signals",
				defaultIcon("http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42571-vertical-traffic-light-icon.png"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=uncontrolled](bbox);out+skel;",
				name="#ex#&nbspcrossing=uncontrolled",
				rotatedIcon("https://d30y9cdsu7xlg0.cloudfront.net/png/35167-200.png"),
				false
			),

			make_layer(
				QURL + "?data=node['traffic_sign:backward'='ES:R1'](bbox);out+skel;",
				name="#ex#&nbspES:R1 Backward ",
				opacityIcon("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
				true
			),
			
			make_layer(
				QURL + "?data=node['traffic_sign:forward'='ES:R2'](bbox);out+skel;",
				name="#ex#&nbspES:R2 Forward ",
				offsetIcon("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
				true
			),



			]);
	
	}	

}
	

function popuplinks(lonlat){

	  var thelink = "<div STYLE=\"margin:0px 0px 0px 0px;font-size: 8pt;\"><b>MAPA</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\"><img src='img/osm.gif'>OSM</a>&nbsp&nbsp"
	  //COPIAR You can configure all services give you longitud and latitude and specific zoom in URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "zoomcode" target=\"_blank\"><img src='url icon'>Name of the service</a>&nbsp&nbsp";
	  //COPIAR Puedes configurar todo aquel servicio que te dé longitud (lonlat.lon) y latitud (lonla.lat) y un zoom concreto en la URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codigozoom" target=\"_blank\"><img src='url icono'>Nombre del servicio</a>&nbsp&nbsp";
	  //COPIAR Pots configurar tots aquells serveis que et donin longitud i latitud i un zoom concre a l'adreça URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codizoom" target=\"_blank\"><img src='url icona'>Nom del servei</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"https://maps.google.es/maps?ll=" + lonlat.lat + "," + lonlat.lon + "&t=h&z=17\" target=\"_blank\"><img src='img/google.gif'>Google</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.bing.com/maps/?v=2&cp=" + lonlat.lat + "~" + lonlat.lon + "&lvl=17&dir=0&sty=h&form=LMLTCC\" target=\"_blank\"><img src='img/bing.gif'>Bing</a><p>";
	  thelink = thelink + "<a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,normal"  + "\" target=\"_blank\"><img src='img/here.png'>Here</a><hr>";
	  thelink = thelink + "<b>SATELITALES</b><br><a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,satellite"  + "\" target=\"_blank\"><img src='img/digitalglobe.png'>DigitalGlobe</a>";
	  thelink = thelink + "<a href=\"https://www.google.es/maps/@" + lonlat.lat + "," + lonlat.lon + ",100m/data=!3m1!1e3\" target=\"_blank\"><img src='img/google.gif'>Google SAT</a><hr>&nbsp&nbsp";
	  thelink = thelink + "<b>A PIE DE CALLE</b><br><a href=\"https://www.mapillary.com/app/?lat="  + (lonlat.lat) + "&lng=" + (lonlat.lon ) + "&z=15"  + "\" target=\"_blank\"><img src='img/mapillary.png'>Mapillary</a>";
	  thelink = thelink + "<a href=\"https://openstreetcam.org/map/@"  + (lonlat.lat) + "," + (lonlat.lon ) + ",17z"  + "\" target=\"_blank\"><img src='img/openstreetcam.png'>OpenStreetCam</a><hr>";
	   thelink = thelink + "<b>RECORRIDOS</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=CD\" target=\"_blank\"><img src='img/osm.gif'>OSM Cycle Map</a>"
	  thelink = thelink + "<a href=\"http://hiking.waymarkedtrails.org/nl/?zoom=13" +  "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "\" target=\"_blank\"><img src='img/map_hiking.png'>Waymarked trails</a> ";
	  thelink = thelink + "<a href=\"https://www.wikiloc.com/wikiloc/map.do?lt=" + lonlat.lat + "&ln=" + lonlat.lon + "&z=17" + "\" target=\"_blank\"><img src='img/wikiloc.png'>Wikiloc</a><hr>";
	  thelink = thelink + "<b>TRANSPORTE</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=TB\" target=\"_blank\"><img src='img/osm.gif'>OSM Public Transport</a>"
	  thelink = thelink + "<a href=\"http://www.xn--pnvkarte-m4a.de/#" + lonlat.lon + ";" + lonlat.lat + ";15" + "\" target=\"_blank\"><img src='img/opvnkarte.png'>Opvnkarte</a><hr> ";
	  
	  
	
	  var area = 0.04
	  var ctop = lonlat.lat + area;
	  var cbottom = ctop - (2 * area);
	  var cleft = lonlat.lon - area;
	  var cright = cleft + (2 * area); 
	  
	  thelink = thelink + "<b>Editar :</b><br><a href=\"http://localhost:8111/load_and_zoom?top=" + ctop + "&bottom=" + cbottom + "&left=" + cleft + "&right=" + cright + "\" target=\"josm_frame\">JOSM (necesitas conector)</a><br>";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=id&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Editor iD</a><br>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=potlatch2&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 2</a><br>&nbsp&nbsp";	
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 1</a><hr>";
	  
	  thelink = thelink + "<b>Errores en OSM </b><br><a href=\"http://www.openstreetmap.org/#map=12" + "/" + lonlat.lat + "/" + lonlat.lon + "&layers=N" + "\" target=_blank> Notas en Openstreetmap</a><br \>";
	  thelink = thelink + "<a href=\"http://keepright.ipax.at/report_map.php?" + "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=14&&layers=B0T&ch=0%2C50%2C191%2C195%2C201%2C205%2C206%2C311%2C312%2C313%2C402&show_ign=1&show_tmpign=1" + "\" target=_blank> Keepright</a><hr>"; 
	  thelink = thelink + "</b></div>";
	  return thelink;
	  
	}
