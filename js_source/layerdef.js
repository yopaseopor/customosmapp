
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
//	
//	COPIAR	if (type == "nameofthe td id"){                         of index.html
//  COPIAR	map.addLayers([
//	COPIAR  make_layer(QURL + "?data=(way[key=value](bbox);node(w);way[otherkey=othervalue](bbox);node(w););out+skel;", "#colorinRGB",name="#typeofline#nameyouwillseeattheslector",circleradius/width of the line,default active (boolean value),"start end of the line@transparency"),
// COPIAR			]);
// COPIAR			
// COPIAR		}
// INSTRUCCIONS #colorinRGB: RGB color for the line/cercle
// INSTRUCCIONS #typeofline#: #l# = line, #dl#=double line, #d# = uncontinuous line, #c#= transparent, #co# = cercle opaque
// INSTRUCCIONS start/end of the line pixels in which start the line
// INSTRUCCIONS default active option true enabled false unabled
// INSTRUCCIONS transparency = @0-1 transparency of the line
//
//=====================
// ====================
//	
//	COPIAR	if (type == "nombredelaidtd"){                         nombre de la id de la td  de index.html
//  COPIAR	map.addLayers([
//	COPIAR  make_layer(QURL + "?data=(nodovíaorelación[clave=valor](bbox);node(w);otronodovíaorelación[otraclave=otrovalor](bbox);node(w););out+skel;", "#colorenRGB",name="#tipodelínea#elnombrequedeseesparaelselector",radiodelcírculo/anchuradelínea,selectoractivooinactivopordefecto (valor booleano),"inicio final de la línea@transparencia"),
// COPIAR			]);
// COPIAR			
// COPIAR		}
// INSTRUCCIONS #colorenRGB: código RGB del color para la línea/círculo
// INSTRUCCIONS #tipodelínea#: #l# = línea, #dl#=línea doble, #d# = discontinua, #c#= transparente, #co# = círculo opaco
// INSTRUCCIONS inicio/fin de la discontinuidad de la línea
// INSTRUCCIONS selector activado por defecto: true activado false desactivado
// INSTRUCCIONS transparencia = @0-1 transparencia de la línea
//
//=====================
// ====================
//	
//	COPIAR	if (type == "nombredelaidtd"){                         nom de la id de la td  d'index.html
//  COPIAR	map.addLayers([
//	COPIAR  make_layer(QURL + "?data=(nodeviaorelació[clau=valor](bbox);node(w);altreviaonodeorelació[altraclau=altrevalor](bbox);node(w););out+skel;", "#colorenRGB",name="#tipusdelínia#elnomquedesitgispelselector",radidelcercle/ampladadelínia,selectoractiuperdefecte (valor booleà),"inici final de la línia@transpareècia"),
// COPIAR			]);
// COPIAR			
// COPIAR		}
// INSTRUCCIONS #colorenRGB: codi RGB del color per a la línia/cercle
// INSTRUCCIONS #tipusdelínia#: #l# = línia, #dl#=línia doble, #d# = discontínua, #c#= transparent, #co# = cercle opac
// INSTRUCCIONS inici/fi de la discontinuitat de la línia
// INSTRUCCIONS selector activat per defecte: true activat false desactivat
// INSTRUCCIONS transparència = @0-1 transparència de la línia
//
//=====================
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
			strokeOpacity:0.7,
			strokeWidth:2,
			strokeLinecap: "square",
		});
	}

	function defaultDashedLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.7,
			strokeWidth:2,
			strokeLinecap: "square",
			strokeDashstyle: "6 10"
		});
	}

	if (type == "cycleways"){
		//	dit maakt de layers voor de cycleway tags
		map.addLayers([
		//highway=cycleway
			make_layer(
				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway~'path$|^footway$'][bicycle=designated](bbox);node(w););out+skel;",
				name="#l#highway=cycleway",
				defaultSolidLine("red"),
				false,
			),
			//Bromfiets/Fietpaden/Onverpl.fietspaden
            make_layer(
				QURL + "?data=(way[highway=cycleway][moped~'^designated$|^yes$'](bbox);node(w);way[highway=cycleway]['moped:forward'~'^designated$|^yes$'](bbox);node(w);way[highway=cycleway]['moped:backward'~'^designated$|^yes$'](bbox);node(w););out+skel;",
				name="#l#cycleway, moped=yes",
				defaultSolidLine("purple"),
				false
			),
			  
            make_layer(
				QURL + "?data=(way[highway=cycleway][moped=no](bbox);node(w););out+skel;",
				name="#dl#cycleway moped=no",
				defaultDashedLine("cyan"),
				false
			),
			
            make_layer(
				QURL + "?data=(way[highway=cycleway][mofa=no](bbox);node(w););out+skel;", 
				name="#l#cycleway mofa=no",
				defaultSolidLine("cyan"),
				false),
			
/*			  
			// kenmerken met cycleway
			  
			make_layer(QURL + "?data=(way[cycleway=cyclestreet](bbox);node(w);way[bicycle_road=yes](bbox);node(w);way[cyclestreet=yes](bbox);node(w););out+skel;","#ff65d5",name="#l#cyclestreet", 8, false),
			
			make_layer(QURL + "?data=(way[cycleway~'track'][highway!=cycleway](bbox);node(w);way['cycleway:right'~'track'](bbox);node(w);way['cycleway:left'~'track'](bbox);node(w););out+skel;", "#ff6541",name="#l#cycleway=track", 6, false,"@0.9"),
			
         	make_layer(QURL + "?data=(way[cycleway=lane](bbox);node(w);way[cycleway=opposite_lane](bbox);node(w);way['cycleway:right'=opposite_lane](bbox);node(w);way['cycleway:left'=opposite_lane](bbox);node(w);way['cycleway:left'=lane](bbox);node(w););out+skel;","#ff6541",name="#dl#cycleway=lane", 6, false,"6 10@0.9"),

			make_layer(QURL + "?data=(way[cycleway='shared_lane'](bbox);node(w);way[cycleway=share_busway](bbox);node(w);way[cycleway=opposite_share_busway](bbox);node(w);way['cycleway:left'='shared_lane'](bbox);node(w);way['cycleway:right'='shared_lane'](bbox);node(w););out+skel;","red",name="#d#cycleway=shared_lane", 2, false,"6 10"),
          	
		
			//kenmerken met oneway
			make_layer(QURL + "?data=(way[highway~'^unclas|^living|^resid|road|cycleway'][oneway~'yes|true|1|-1'][cycleway!~'.'][bicycle!=no]['bicycle:oneway'!=no]['oneway:bicycle'!=no](bbox);node(w);way['bicycle:oneway'~'yes|true|1|-1'](bbox);node(w);way['oneway:bicycle'~'yes|true|1|-1'](bbox);node(w););out+skel;", "blue",name="#dl#oneway street", 3, false,"6 10"),
			
			
            make_layer(QURL + "?data=(way['oneway:bicycle'=no](bbox);node(w);way[cycleway~'opposite'](bbox);node(w);way['bicycle:oneway'= no](bbox);node(w););out+skel;", "green",name="#dl#cycleway=opposite or<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsponeway:bicyle=no", 3, false,"6 10"),


			  
			make_layer(QURL + "?data=(way[bicycle~'^designated$|^yes$'][highway~'^footway$|^pedestrian$|^path$|^track$|^steps$'](bbox);node(w);way['ramp:bicycle'=yes](bbox);node(w);node[bicycle=yes][barrier!=bollard](bbox););out+skel;", "#39ff20",name="#l#bicycle=yes & footway,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsppath, track, steps", 5, false),

			//pois
			make_a_layer(QURL + "?data=(node[shop=bicycle](bbox);node[amenity=bicycle_repair_station](bbox);way[shop=bicycle](bbox);node(w););out;", "#0000a0", name="#c#shop=bicycle/repair station", 0.7, false),
			make_layer(QURL + "?data=node[amenity~'bicycle'][amenity!=bicycle_repair_station](bbox);out+skel;(way[amenity~'bicycle'](bbox);node(w););out+skel;", "#39ffd5",name="#c#&nbspbicycle_parking/rental", 4, false),
			make_layer(QURL + "?data=node[barrier=bollard](bbox);out+skel;", "red", name="#c#&nbspbollard", 3, false),			  
			make_layer(QURL + "?data=node[barrier][barrier!=bollard](bbox);out+skel;", "#bd9541", name="#c#&nbspother barrier<hr>", 3, false),
			

			

			// non cyclable ways
			make_layer(QURL + "?data=(way[bicycle=dismount](bbox);node(w);node[bicycle=dismount](bbox);node(w););out+skel;","yellow",name="#dl#bicycle=dismount", 4, false,"6 10"),
			
			make_layer(QURL + "?data=(way[bicycle~'no|use_sidepath'](bbox);node(w);way[highway][access~'^no|^priv'][vehicle!~'yes'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['mtb:scale'!~'^'](bbox);node(w);way[highway~'^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr'][access! ~'^no|^priv'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['ramp:bicycle'!~'yes'](bbox);node(w);way[highway=track][horse=designated][access! ~'^no|^priv'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['mtb:scale'!~'^'][route!=mtb](bbox);node(w););out+skel;", "#393020",name="<img style='vertical-align: middle;background-color:#393020;' src='img/line.gif'> 'non cycleable' ways", 7, false,"@0.5"),

            make_layer(QURL + "?data=(way[bicycle=use_sidepath](bbox);node(w););out+skel;","#bd65d5",name="#dl#bicycle=use_sidepath", 4, false,"6 10"),
			
			make_layer(QURL + "?data=(way[bicycle=no](bbox);node(w););out+skel;","black",name="#dl#bicycle=no", 4, false,"6 10")
*/
		]);
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
			fillOpacity:0.75
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
			rotation:125
		});
	}
	
		function tsforward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 4,
			graphicYOffset: 0,
			rotation:0
		});
	}
	
		function tsbackward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: -4,
			graphicYOffset: 0,
			rotation:180
		});
	}
	
	if (type == "test"){
		
		map.addLayers([
/*			
			make_layer(QURL + "?data=node[kerb=lowered](bbox);out+skel;", "#66ff66", name="#c#&nbspkerb=lowered", 3, false),
			make_layer(QURL + "?data=node[kerb=raised](bbox);out+skel;", "#ff3300", name="#c#&nbspkerb=raised", 3, false),
			make_layer(QURL + "?data=node[kerb=flush](bbox);out+skel;", "#0066ff", name="#c#&nbspkerb=flush", 3, false),
			make_layer(QURL + "?data=node[kerb=no](bbox);out+skel;", "#ffff00", name="#c#&nbspkerb=no<hr>", 3, false),
*/
			make_layer(
				QURL + "?data=node[wheelchair=yes](bbox);out+skel;",
				name="#ex#&nbspwheelchair=yes",
				defaultExtPoint("https://image.flaticon.com/icons/png/512/9/9285.png"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=no](bbox);out+skel;",
				name="#c#&nbspwheelchair=no",
				defaultPoint("red"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=designated](bbox);out+skel;",
				name="#c#&nbspwheelchair=designated",
				defaultPoint("blue"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=limited](bbox);out+skel;",
				name="#c#&nbspwheelchair=limited<hr>",
				defaultPoint("yellow"),
				false
			),

			make_layer(
				QURL + "?data=node['obstacle:wheelchair'=yes](bbox);out+skel;",
				name="#c#&nbspobstacle:wheelchair=yes<hr>",
				defaultPoint("black"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=traffic_signals](bbox);out+skel;",
				name="#ex#&nbspcrossing=traffic_signals",
				defaultExtPoint("http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42571-vertical-traffic-light-icon.png"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=no](bbox);out+skel;",
				name="#c#&nbspcrossing=no",
				defaultPoint("red"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=uncontrolled](bbox);out+skel;",
				name="#ex#&nbspcrossing=uncontrolled",
				defaultExtPoint("https://d30y9cdsu7xlg0.cloudfront.net/png/35167-200.png"),
				false
			),

			make_layer(
				QURL + "?data=node['traffic_sign:forward'='ES:R2'](bbox);out+skel;",
				name="#ex#&nbspES:R2",
				tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
				true
				),

			make_layer(
				QURL + "?data=node['traffic_sign:backward'='ES:R2'](bbox);out+skel;",
				name="#ex#&nbspES:R2 forward",
				tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
				true
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:'](bbox);out+skel;",
name="#ex#&nbspES: Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B1a'](bbox);out+skel;",
name="#ex#&nbspES:B1a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B1b'](bbox);out+skel;",
name="#ex#&nbspES:B1b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2a'](bbox);out+skel;",
name="#ex#&nbspES:B2a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2ar'](bbox);out+skel;",
name="#ex#&nbspES:B2ar Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2ar.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2b'](bbox);out+skel;",
name="#ex#&nbspES:B2b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2br'](bbox);out+skel;",
name="#ex#&nbspES:B2br Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2br.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2c'](bbox);out+skel;",
name="#ex#&nbspES:B2c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2d'](bbox);out+skel;",
name="#ex#&nbspES:B2d Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2d.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2e'](bbox);out+skel;",
name="#ex#&nbspES:B2e Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2e.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3a'](bbox);out+skel;",
name="#ex#&nbspES:B3a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3b'](bbox);out+skel;",
name="#ex#&nbspES:B3b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3c'](bbox);out+skel;",
name="#ex#&nbspES:B3c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3d'](bbox);out+skel;",
name="#ex#&nbspES:B3d Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3d.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:BE'](bbox);out+skel;",
name="#ex#&nbspES:BE Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BE.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:BS'](bbox);out+skel;",
name="#ex#&nbspES:BS Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BS.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CajGrua'](bbox);out+skel;",
name="#ex#&nbspES:CajGrua Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CajGrua.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_com_s860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_com_s860 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_com_s860.svg"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR24b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR24c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR32'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR32 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR32.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR51'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR51 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR51.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR61'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR61 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR61.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR62'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR62 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR62.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR63'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR63 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR63.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radar Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radar Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.svg"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.svg"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S270'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S270 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S270.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.svg"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S351'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S351 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S351.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S520'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S520 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S520.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S600'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S600 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S600.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S700'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S700b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S860 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S860.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:com_traffic_sign_dir2'](bbox);out+skel;",
name="#ex#&nbspES:com_traffic_sign_dir2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_com_traffic_sign_dir2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FP21'](bbox);out+skel;",
name="#ex#&nbspES:FP21 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP21.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FP4'](bbox);out+skel;",
name="#ex#&nbspES:FP4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FR101'](bbox);out+skel;",
name="#ex#&nbspES:FR101 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR101.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FR301'](bbox);out+skel;",
name="#ex#&nbspES:FR301 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR301.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:LEZ'](bbox);out+skel;",
name="#ex#&nbspES:LEZ Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_LEZ.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:motorway'](bbox);out+skel;",
name="#ex#&nbspES:motorway Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_motorway.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1'](bbox);out+skel;",
name="#ex#&nbspES:P1 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10a'](bbox);out+skel;",
name="#ex#&nbspES:P10a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10b'](bbox);out+skel;",
name="#ex#&nbspES:P10b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10c'](bbox);out+skel;",
name="#ex#&nbspES:P10c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P11'](bbox);out+skel;",
name="#ex#&nbspES:P11 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P11a'](bbox);out+skel;",
name="#ex#&nbspES:P11a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P12'](bbox);out+skel;",
name="#ex#&nbspES:P12 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P12.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P13a'](bbox);out+skel;",
name="#ex#&nbspES:P13a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P13b'](bbox);out+skel;",
name="#ex#&nbspES:P13b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P14a'](bbox);out+skel;",
name="#ex#&nbspES:P14a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P14b'](bbox);out+skel;",
name="#ex#&nbspES:P14b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15'](bbox);out+skel;",
name="#ex#&nbspES:P15 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15a'](bbox);out+skel;",
name="#ex#&nbspES:P15a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15b'](bbox);out+skel;",
name="#ex#&nbspES:P15b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a'](bbox);out+skel;",
name="#ex#&nbspES:P16a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_10'](bbox);out+skel;",
name="#ex#&nbspES:P16a_10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_11'](bbox);out+skel;",
name="#ex#&nbspES:P16a_11 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_11.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_12'](bbox);out+skel;",
name="#ex#&nbspES:P16a_12 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_12.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_13'](bbox);out+skel;",
name="#ex#&nbspES:P16a_13 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_13.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_15'](bbox);out+skel;",
name="#ex#&nbspES:P16a_15 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_15.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_17'](bbox);out+skel;",
name="#ex#&nbspES:P16a_17 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_17.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_20'](bbox);out+skel;",
name="#ex#&nbspES:P16a_20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_4'](bbox);out+skel;",
name="#ex#&nbspES:P16a_4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_5'](bbox);out+skel;",
name="#ex#&nbspES:P16a_5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_6'](bbox);out+skel;",
name="#ex#&nbspES:P16a_6 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_6.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_7'](bbox);out+skel;",
name="#ex#&nbspES:P16a_7 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_7.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_75'](bbox);out+skel;",
name="#ex#&nbspES:P16a_75 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_75.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_8'](bbox);out+skel;",
name="#ex#&nbspES:P16a_8 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_8.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_9'](bbox);out+skel;",
name="#ex#&nbspES:P16a_9 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_9.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b'](bbox);out+skel;",
name="#ex#&nbspES:P16b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_001'](bbox);out+skel;",
name="#ex#&nbspES:P16b_001 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_001.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_10'](bbox);out+skel;",
name="#ex#&nbspES:P16b_10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_12'](bbox);out+skel;",
name="#ex#&nbspES:P16b_12 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_12.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_13'](bbox);out+skel;",
name="#ex#&nbspES:P16b_13 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_13.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_15'](bbox);out+skel;",
name="#ex#&nbspES:P16b_15 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_15.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_17'](bbox);out+skel;",
name="#ex#&nbspES:P16b_17 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_17.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_20'](bbox);out+skel;",
name="#ex#&nbspES:P16b_20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_5'](bbox);out+skel;",
name="#ex#&nbspES:P16b_5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_6'](bbox);out+skel;",
name="#ex#&nbspES:P16b_6 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_6.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_7'](bbox);out+skel;",
name="#ex#&nbspES:P16b_7 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_7.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_75'](bbox);out+skel;",
name="#ex#&nbspES:P16b_75 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_75.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_8'](bbox);out+skel;",
name="#ex#&nbspES:P16b_8 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_8.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_9'](bbox);out+skel;",
name="#ex#&nbspES:P16b_9 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_9.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17'](bbox);out+skel;",
name="#ex#&nbspES:P17 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17a'](bbox);out+skel;",
name="#ex#&nbspES:P17a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17b'](bbox);out+skel;",
name="#ex#&nbspES:P17b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P19'](bbox);out+skel;",
name="#ex#&nbspES:P19 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P19.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1a'](bbox);out+skel;",
name="#ex#&nbspES:P1a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1b'](bbox);out+skel;",
name="#ex#&nbspES:P1b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1c'](bbox);out+skel;",
name="#ex#&nbspES:P1c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1d'](bbox);out+skel;",
name="#ex#&nbspES:P1d Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1d.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P2'](bbox);out+skel;",
name="#ex#&nbspES:P2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20'](bbox);out+skel;",
name="#ex#&nbspES:P20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20a'](bbox);out+skel;",
name="#ex#&nbspES:P20a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20aP'](bbox);out+skel;",
name="#ex#&nbspES:P20aP Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20aP.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P21'](bbox);out+skel;",
name="#ex#&nbspES:P21 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P21.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P22'](bbox);out+skel;",
name="#ex#&nbspES:P22 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P22.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P23'](bbox);out+skel;",
name="#ex#&nbspES:P23 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P23.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P24'](bbox);out+skel;",
name="#ex#&nbspES:P24 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P24.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P25'](bbox);out+skel;",
name="#ex#&nbspES:P25 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P25.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P26'](bbox);out+skel;",
name="#ex#&nbspES:P26 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P26.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P27'](bbox);out+skel;",
name="#ex#&nbspES:P27 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P27.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P28'](bbox);out+skel;",
name="#ex#&nbspES:P28 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P28.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P29'](bbox);out+skel;",
name="#ex#&nbspES:P29 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P29.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P3'](bbox);out+skel;",
name="#ex#&nbspES:P3 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P3.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P30'](bbox);out+skel;",
name="#ex#&nbspES:P30 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P30.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P31'](bbox);out+skel;",
name="#ex#&nbspES:P31 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P31.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P32'](bbox);out+skel;",
name="#ex#&nbspES:P32 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P32.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P33'](bbox);out+skel;",
name="#ex#&nbspES:P33 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P33.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P34'](bbox);out+skel;",
name="#ex#&nbspES:P34 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P34.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P4'](bbox);out+skel;",
name="#ex#&nbspES:P4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P5'](bbox);out+skel;",
name="#ex#&nbspES:P5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P50'](bbox);out+skel;",
name="#ex#&nbspES:P50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P6'](bbox);out+skel;",
name="#ex#&nbspES:P6 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P6.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P7'](bbox);out+skel;",
name="#ex#&nbspES:P7 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P7.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P8'](bbox);out+skel;",
name="#ex#&nbspES:P8 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P8.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9a'](bbox);out+skel;",
name="#ex#&nbspES:P9a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9b'](bbox);out+skel;",
name="#ex#&nbspES:P9b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9c'](bbox);out+skel;",
name="#ex#&nbspES:P9c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:primary'](bbox);out+skel;",
name="#ex#&nbspES:primary Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_primary.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R1'](bbox);out+skel;",
name="#ex#&nbspES:R1 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R100'](bbox);out+skel;",
name="#ex#&nbspES:R100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R101'](bbox);out+skel;",
name="#ex#&nbspES:R101 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R101.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R102'](bbox);out+skel;",
name="#ex#&nbspES:R102 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R102.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R103'](bbox);out+skel;",
name="#ex#&nbspES:R103 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R103.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R104'](bbox);out+skel;",
name="#ex#&nbspES:R104 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R104.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R105'](bbox);out+skel;",
name="#ex#&nbspES:R105 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R105.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R106'](bbox);out+skel;",
name="#ex#&nbspES:R106 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R106.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107'](bbox);out+skel;",
name="#ex#&nbspES:R107 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_10'](bbox);out+skel;",
name="#ex#&nbspES:R107_10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_12'](bbox);out+skel;",
name="#ex#&nbspES:R107_12 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_12.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_16'](bbox);out+skel;",
name="#ex#&nbspES:R107_16 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_16.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_18'](bbox);out+skel;",
name="#ex#&nbspES:R107_18 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_18.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_2'](bbox);out+skel;",
name="#ex#&nbspES:R107_2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_25'](bbox);out+skel;",
name="#ex#&nbspES:R107_25 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_25.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_3'](bbox);out+skel;",
name="#ex#&nbspES:R107_3 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_3.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_35'](bbox);out+skel;",
name="#ex#&nbspES:R107_35 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_35.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_4'](bbox);out+skel;",
name="#ex#&nbspES:R107_4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_45'](bbox);out+skel;",
name="#ex#&nbspES:R107_45 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_45.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_5'](bbox);out+skel;",
name="#ex#&nbspES:R107_5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_55'](bbox);out+skel;",
name="#ex#&nbspES:R107_55 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_55.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_6'](bbox);out+skel;",
name="#ex#&nbspES:R107_6 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_6.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_65'](bbox);out+skel;",
name="#ex#&nbspES:R107_65 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_65.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_7'](bbox);out+skel;",
name="#ex#&nbspES:R107_7 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_7.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_75'](bbox);out+skel;",
name="#ex#&nbspES:R107_75 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_75.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_8'](bbox);out+skel;",
name="#ex#&nbspES:R107_8 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_8.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_85'](bbox);out+skel;",
name="#ex#&nbspES:R107_85 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_85.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_9'](bbox);out+skel;",
name="#ex#&nbspES:R107_9 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_9.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_95'](bbox);out+skel;",
name="#ex#&nbspES:R107_95 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_95.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R108'](bbox);out+skel;",
name="#ex#&nbspES:R108 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R108.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R109'](bbox);out+skel;",
name="#ex#&nbspES:R109 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R109.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R110'](bbox);out+skel;",
name="#ex#&nbspES:R110 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R110.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R111'](bbox);out+skel;",
name="#ex#&nbspES:R111 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R111.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R112'](bbox);out+skel;",
name="#ex#&nbspES:R112 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R112.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R113'](bbox);out+skel;",
name="#ex#&nbspES:R113 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R113.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R114'](bbox);out+skel;",
name="#ex#&nbspES:R114 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R114.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R115'](bbox);out+skel;",
name="#ex#&nbspES:R115 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R115.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R116'](bbox);out+skel;",
name="#ex#&nbspES:R116 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R116.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R117'](bbox);out+skel;",
name="#ex#&nbspES:R117 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R117.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R2'](bbox);out+skel;",
name="#ex#&nbspES:R2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R200'](bbox);out+skel;",
name="#ex#&nbspES:R200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R200a'](bbox);out+skel;",
name="#ex#&nbspES:R200a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201'](bbox);out+skel;",
name="#ex#&nbspES:R201 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_10'](bbox);out+skel;",
name="#ex#&nbspES:R201_10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_11'](bbox);out+skel;",
name="#ex#&nbspES:R201_11 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_11.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_12'](bbox);out+skel;",
name="#ex#&nbspES:R201_12 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_12.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_14'](bbox);out+skel;",
name="#ex#&nbspES:R201_14 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_14.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_15'](bbox);out+skel;",
name="#ex#&nbspES:R201_15 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_15.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_150'](bbox);out+skel;",
name="#ex#&nbspES:R201_150 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_150.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_16'](bbox);out+skel;",
name="#ex#&nbspES:R201_16 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_16.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_17'](bbox);out+skel;",
name="#ex#&nbspES:R201_17 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_17.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_20'](bbox);out+skel;",
name="#ex#&nbspES:R201_20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_24'](bbox);out+skel;",
name="#ex#&nbspES:R201_24 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_24.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_29'](bbox);out+skel;",
name="#ex#&nbspES:R201_29 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_29.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_3'](bbox);out+skel;",
name="#ex#&nbspES:R201_3 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_3.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_35'](bbox);out+skel;",
name="#ex#&nbspES:R201_35 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_35.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_38'](bbox);out+skel;",
name="#ex#&nbspES:R201_38 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_38.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_4'](bbox);out+skel;",
name="#ex#&nbspES:R201_4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_5'](bbox);out+skel;",
name="#ex#&nbspES:R201_5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_55'](bbox);out+skel;",
name="#ex#&nbspES:R201_55 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_55.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_6'](bbox);out+skel;",
name="#ex#&nbspES:R201_6 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_6.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_65'](bbox);out+skel;",
name="#ex#&nbspES:R201_65 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_65.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_75'](bbox);out+skel;",
name="#ex#&nbspES:R201_75 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_75.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_8'](bbox);out+skel;",
name="#ex#&nbspES:R201_8 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_8.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202'](bbox);out+skel;",
name="#ex#&nbspES:R202 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_10'](bbox);out+skel;",
name="#ex#&nbspES:R202_10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_2'](bbox);out+skel;",
name="#ex#&nbspES:R202_2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_24'](bbox);out+skel;",
name="#ex#&nbspES:R202_24 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_24.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_5'](bbox);out+skel;",
name="#ex#&nbspES:R202_5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_7'](bbox);out+skel;",
name="#ex#&nbspES:R202_7 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_7.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203'](bbox);out+skel;",
name="#ex#&nbspES:R203 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203_10'](bbox);out+skel;",
name="#ex#&nbspES:R203_10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203_7'](bbox);out+skel;",
name="#ex#&nbspES:R203_7 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_7.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204'](bbox);out+skel;",
name="#ex#&nbspES:R204 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_2'](bbox);out+skel;",
name="#ex#&nbspES:R204_2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_21'](bbox);out+skel;",
name="#ex#&nbspES:R204_21 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_21.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_22'](bbox);out+skel;",
name="#ex#&nbspES:R204_22 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_22.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_23'](bbox);out+skel;",
name="#ex#&nbspES:R204_23 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_23.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_25'](bbox);out+skel;",
name="#ex#&nbspES:R204_25 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_25.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_3'](bbox);out+skel;",
name="#ex#&nbspES:R204_3 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_3.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_32'](bbox);out+skel;",
name="#ex#&nbspES:R204_32 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_32.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_34'](bbox);out+skel;",
name="#ex#&nbspES:R204_34 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_34.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_35'](bbox);out+skel;",
name="#ex#&nbspES:R204_35 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_35.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_36'](bbox);out+skel;",
name="#ex#&nbspES:R204_36 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_36.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_37'](bbox);out+skel;",
name="#ex#&nbspES:R204_37 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_37.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_38'](bbox);out+skel;",
name="#ex#&nbspES:R204_38 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_38.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_4'](bbox);out+skel;",
name="#ex#&nbspES:R204_4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_41'](bbox);out+skel;",
name="#ex#&nbspES:R204_41 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_41.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_43'](bbox);out+skel;",
name="#ex#&nbspES:R204_43 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_43.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_45'](bbox);out+skel;",
name="#ex#&nbspES:R204_45 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_45.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205'](bbox);out+skel;",
name="#ex#&nbspES:R205 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_2'](bbox);out+skel;",
name="#ex#&nbspES:R205_2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_21'](bbox);out+skel;",
name="#ex#&nbspES:R205_21 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_21.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_22'](bbox);out+skel;",
name="#ex#&nbspES:R205_22 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_22.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_23'](bbox);out+skel;",
name="#ex#&nbspES:R205_23 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_23.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_24'](bbox);out+skel;",
name="#ex#&nbspES:R205_24 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_24.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_25'](bbox);out+skel;",
name="#ex#&nbspES:R205_25 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_25.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_26'](bbox);out+skel;",
name="#ex#&nbspES:R205_26 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_26.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_27'](bbox);out+skel;",
name="#ex#&nbspES:R205_27 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_27.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_28'](bbox);out+skel;",
name="#ex#&nbspES:R205_28 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_28.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_29'](bbox);out+skel;",
name="#ex#&nbspES:R205_29 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_29.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_3'](bbox);out+skel;",
name="#ex#&nbspES:R205_3 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_3.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_31'](bbox);out+skel;",
name="#ex#&nbspES:R205_31 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_31.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_32'](bbox);out+skel;",
name="#ex#&nbspES:R205_32 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_32.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_33'](bbox);out+skel;",
name="#ex#&nbspES:R205_33 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_33.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_34'](bbox);out+skel;",
name="#ex#&nbspES:R205_34 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_34.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_35'](bbox);out+skel;",
name="#ex#&nbspES:R205_35 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_35.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_36'](bbox);out+skel;",
name="#ex#&nbspES:R205_36 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_36.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_37'](bbox);out+skel;",
name="#ex#&nbspES:R205_37 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_37.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_38'](bbox);out+skel;",
name="#ex#&nbspES:R205_38 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_38.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_39'](bbox);out+skel;",
name="#ex#&nbspES:R205_39 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_39.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_4'](bbox);out+skel;",
name="#ex#&nbspES:R205_4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_41'](bbox);out+skel;",
name="#ex#&nbspES:R205_41 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_41.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_42'](bbox);out+skel;",
name="#ex#&nbspES:R205_42 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_42.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_43'](bbox);out+skel;",
name="#ex#&nbspES:R205_43 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_43.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_44'](bbox);out+skel;",
name="#ex#&nbspES:R205_44 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_44.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_45'](bbox);out+skel;",
name="#ex#&nbspES:R205_45 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_45.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_46'](bbox);out+skel;",
name="#ex#&nbspES:R205_46 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_46.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_47'](bbox);out+skel;",
name="#ex#&nbspES:R205_47 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_47.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_48'](bbox);out+skel;",
name="#ex#&nbspES:R205_48 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_48.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_49'](bbox);out+skel;",
name="#ex#&nbspES:R205_49 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_49.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_5'](bbox);out+skel;",
name="#ex#&nbspES:R205_5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_51'](bbox);out+skel;",
name="#ex#&nbspES:R205_51 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_51.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_52'](bbox);out+skel;",
name="#ex#&nbspES:R205_52 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_52.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_53'](bbox);out+skel;",
name="#ex#&nbspES:R205_53 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_53.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_54'](bbox);out+skel;",
name="#ex#&nbspES:R205_54 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_54.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_56'](bbox);out+skel;",
name="#ex#&nbspES:R205_56 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_56.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_59'](bbox);out+skel;",
name="#ex#&nbspES:R205_59 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_59.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_6'](bbox);out+skel;",
name="#ex#&nbspES:R205_6 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_6.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R3'](bbox);out+skel;",
name="#ex#&nbspES:R3 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R3.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300'](bbox);out+skel;",
name="#ex#&nbspES:R300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_100'](bbox);out+skel;",
name="#ex#&nbspES:R300_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_60'](bbox);out+skel;",
name="#ex#&nbspES:R300_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_70'](bbox);out+skel;",
name="#ex#&nbspES:R300_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_80'](bbox);out+skel;",
name="#ex#&nbspES:R300_80 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_80.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301'](bbox);out+skel;",
name="#ex#&nbspES:R301 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_10'](bbox);out+skel;",
name="#ex#&nbspES:R301_10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_100'](bbox);out+skel;",
name="#ex#&nbspES:R301_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_110'](bbox);out+skel;",
name="#ex#&nbspES:R301_110 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_110.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_120'](bbox);out+skel;",
name="#ex#&nbspES:R301_120 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_120.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_130'](bbox);out+skel;",
name="#ex#&nbspES:R301_130 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_130.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_140'](bbox);out+skel;",
name="#ex#&nbspES:R301_140 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_140.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_20'](bbox);out+skel;",
name="#ex#&nbspES:R301_20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_30'](bbox);out+skel;",
name="#ex#&nbspES:R301_30 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_30.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_40'](bbox);out+skel;",
name="#ex#&nbspES:R301_40 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_40.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_50'](bbox);out+skel;",
name="#ex#&nbspES:R301_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_60'](bbox);out+skel;",
name="#ex#&nbspES:R301_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_70'](bbox);out+skel;",
name="#ex#&nbspES:R301_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_80'](bbox);out+skel;",
name="#ex#&nbspES:R301_80 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_80.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_90'](bbox);out+skel;",
name="#ex#&nbspES:R301_90 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_90.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R302'](bbox);out+skel;",
name="#ex#&nbspES:R302 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R302.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R303'](bbox);out+skel;",
name="#ex#&nbspES:R303 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R303.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R304'](bbox);out+skel;",
name="#ex#&nbspES:R304 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R304.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R305'](bbox);out+skel;",
name="#ex#&nbspES:R305 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R305.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R306'](bbox);out+skel;",
name="#ex#&nbspES:R306 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R306.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R307'](bbox);out+skel;",
name="#ex#&nbspES:R307 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R307.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308'](bbox);out+skel;",
name="#ex#&nbspES:R308 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308a'](bbox);out+skel;",
name="#ex#&nbspES:R308a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308b'](bbox);out+skel;",
name="#ex#&nbspES:R308b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308c'](bbox);out+skel;",
name="#ex#&nbspES:R308c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308d'](bbox);out+skel;",
name="#ex#&nbspES:R308d Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308d.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308e'](bbox);out+skel;",
name="#ex#&nbspES:R308e Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308e.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R309'](bbox);out+skel;",
name="#ex#&nbspES:R309 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R309.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R310'](bbox);out+skel;",
name="#ex#&nbspES:R310 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R310.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R4'](bbox);out+skel;",
name="#ex#&nbspES:R4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400a'](bbox);out+skel;",
name="#ex#&nbspES:R400a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400b'](bbox);out+skel;",
name="#ex#&nbspES:R400b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400c'](bbox);out+skel;",
name="#ex#&nbspES:R400c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400d'](bbox);out+skel;",
name="#ex#&nbspES:R400d Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400d.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400e'](bbox);out+skel;",
name="#ex#&nbspES:R400e Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400e.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401a'](bbox);out+skel;",
name="#ex#&nbspES:R401a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401b'](bbox);out+skel;",
name="#ex#&nbspES:R401b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401c'](bbox);out+skel;",
name="#ex#&nbspES:R401c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R402'](bbox);out+skel;",
name="#ex#&nbspES:R402 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R402.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403a'](bbox);out+skel;",
name="#ex#&nbspES:R403a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403b'](bbox);out+skel;",
name="#ex#&nbspES:R403b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403c'](bbox);out+skel;",
name="#ex#&nbspES:R403c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R404'](bbox);out+skel;",
name="#ex#&nbspES:R404 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R404.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R405'](bbox);out+skel;",
name="#ex#&nbspES:R405 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R405.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R406'](bbox);out+skel;",
name="#ex#&nbspES:R406 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R406.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R407a'](bbox);out+skel;",
name="#ex#&nbspES:R407a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R407b'](bbox);out+skel;",
name="#ex#&nbspES:R407b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R408'](bbox);out+skel;",
name="#ex#&nbspES:R408 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R408.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R409'](bbox);out+skel;",
name="#ex#&nbspES:R409 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R409.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R410'](bbox);out+skel;",
name="#ex#&nbspES:R410 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R410.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411'](bbox);out+skel;",
name="#ex#&nbspES:R411 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_20'](bbox);out+skel;",
name="#ex#&nbspES:R411_20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_30'](bbox);out+skel;",
name="#ex#&nbspES:R411_30 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_30.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_50'](bbox);out+skel;",
name="#ex#&nbspES:R411_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_60'](bbox);out+skel;",
name="#ex#&nbspES:R411_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_70'](bbox);out+skel;",
name="#ex#&nbspES:R411_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_80'](bbox);out+skel;",
name="#ex#&nbspES:R411_80 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_80.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_90'](bbox);out+skel;",
name="#ex#&nbspES:R411_90 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_90.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R412'](bbox);out+skel;",
name="#ex#&nbspES:R412 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R412.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R413'](bbox);out+skel;",
name="#ex#&nbspES:R413 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R413.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R414'](bbox);out+skel;",
name="#ex#&nbspES:R414 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R414.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R415'](bbox);out+skel;",
name="#ex#&nbspES:R415 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R415.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R416'](bbox);out+skel;",
name="#ex#&nbspES:R416 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R416.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R417'](bbox);out+skel;",
name="#ex#&nbspES:R417 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R417.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R418'](bbox);out+skel;",
name="#ex#&nbspES:R418 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R418.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R5'](bbox);out+skel;",
name="#ex#&nbspES:R5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R500'](bbox);out+skel;",
name="#ex#&nbspES:R500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501'](bbox);out+skel;",
name="#ex#&nbspES:R501 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_100'](bbox);out+skel;",
name="#ex#&nbspES:R501_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_20'](bbox);out+skel;",
name="#ex#&nbspES:R501_20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_30'](bbox);out+skel;",
name="#ex#&nbspES:R501_30 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_30.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_40'](bbox);out+skel;",
name="#ex#&nbspES:R501_40 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_40.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_50'](bbox);out+skel;",
name="#ex#&nbspES:R501_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_60'](bbox);out+skel;",
name="#ex#&nbspES:R501_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_70'](bbox);out+skel;",
name="#ex#&nbspES:R501_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_80'](bbox);out+skel;",
name="#ex#&nbspES:R501_80 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_80.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_90'](bbox);out+skel;",
name="#ex#&nbspES:R501_90 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_90.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R502'](bbox);out+skel;",
name="#ex#&nbspES:R502 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R502.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R503'](bbox);out+skel;",
name="#ex#&nbspES:R503 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R503.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R504'](bbox);out+skel;",
name="#ex#&nbspES:R504 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R504.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R505'](bbox);out+skel;",
name="#ex#&nbspES:R505 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R505.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506'](bbox);out+skel;",
name="#ex#&nbspES:R506 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_30'](bbox);out+skel;",
name="#ex#&nbspES:R506_30 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_30.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_50'](bbox);out+skel;",
name="#ex#&nbspES:R506_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_60'](bbox);out+skel;",
name="#ex#&nbspES:R506_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_70'](bbox);out+skel;",
name="#ex#&nbspES:R506_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_90'](bbox);out+skel;",
name="#ex#&nbspES:R506_90 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_90.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R6'](bbox);out+skel;",
name="#ex#&nbspES:R6 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R6.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:Ruta_europea'](bbox);out+skel;",
name="#ex#&nbspES:Ruta_europea Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_Ruta_europea.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S1'](bbox);out+skel;",
name="#ex#&nbspES:S1 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S1.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S10'](bbox);out+skel;",
name="#ex#&nbspES:S10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100'](bbox);out+skel;",
name="#ex#&nbspES:S100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100_200'](bbox);out+skel;",
name="#ex#&nbspES:S100_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100_250'](bbox);out+skel;",
name="#ex#&nbspES:S100_250 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_250.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100_300'](bbox);out+skel;",
name="#ex#&nbspES:S100_300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100_500'](bbox);out+skel;",
name="#ex#&nbspES:S100_500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S101'](bbox);out+skel;",
name="#ex#&nbspES:S101 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S101.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S102'](bbox);out+skel;",
name="#ex#&nbspES:S102 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S102.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S103'](bbox);out+skel;",
name="#ex#&nbspES:S103 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S103.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S104'](bbox);out+skel;",
name="#ex#&nbspES:S104 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S104.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105'](bbox);out+skel;",
name="#ex#&nbspES:S105 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_1000'](bbox);out+skel;",
name="#ex#&nbspES:S105_1000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_1000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_200'](bbox);out+skel;",
name="#ex#&nbspES:S105_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_300'](bbox);out+skel;",
name="#ex#&nbspES:S105_300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_400'](bbox);out+skel;",
name="#ex#&nbspES:S105_400 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_400.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_500'](bbox);out+skel;",
name="#ex#&nbspES:S105_500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S106'](bbox);out+skel;",
name="#ex#&nbspES:S106 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S106.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S107'](bbox);out+skel;",
name="#ex#&nbspES:S107 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S107.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S108'](bbox);out+skel;",
name="#ex#&nbspES:S108 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S108.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S109'](bbox);out+skel;",
name="#ex#&nbspES:S109 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S109.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S11'](bbox);out+skel;",
name="#ex#&nbspES:S11 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110'](bbox);out+skel;",
name="#ex#&nbspES:S110 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110_1000'](bbox);out+skel;",
name="#ex#&nbspES:S110_1000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_1000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110_200'](bbox);out+skel;",
name="#ex#&nbspES:S110_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110_300'](bbox);out+skel;",
name="#ex#&nbspES:S110_300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110_500'](bbox);out+skel;",
name="#ex#&nbspES:S110_500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111'](bbox);out+skel;",
name="#ex#&nbspES:S111 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_100'](bbox);out+skel;",
name="#ex#&nbspES:S111_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_1000'](bbox);out+skel;",
name="#ex#&nbspES:S111_1000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_1000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_200'](bbox);out+skel;",
name="#ex#&nbspES:S111_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_250'](bbox);out+skel;",
name="#ex#&nbspES:S111_250 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_250.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_300'](bbox);out+skel;",
name="#ex#&nbspES:S111_300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_500'](bbox);out+skel;",
name="#ex#&nbspES:S111_500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S112'](bbox);out+skel;",
name="#ex#&nbspES:S112 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S112.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S113'](bbox);out+skel;",
name="#ex#&nbspES:S113 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S113.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S114'](bbox);out+skel;",
name="#ex#&nbspES:S114 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S114.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S115'](bbox);out+skel;",
name="#ex#&nbspES:S115 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S115.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S116'](bbox);out+skel;",
name="#ex#&nbspES:S116 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S116.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S117'](bbox);out+skel;",
name="#ex#&nbspES:S117 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S117.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118'](bbox);out+skel;",
name="#ex#&nbspES:S118 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_100'](bbox);out+skel;",
name="#ex#&nbspES:S118_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_1000'](bbox);out+skel;",
name="#ex#&nbspES:S118_1000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_1000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_200'](bbox);out+skel;",
name="#ex#&nbspES:S118_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_250'](bbox);out+skel;",
name="#ex#&nbspES:S118_250 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_250.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_300'](bbox);out+skel;",
name="#ex#&nbspES:S118_300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_400'](bbox);out+skel;",
name="#ex#&nbspES:S118_400 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_400.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_500'](bbox);out+skel;",
name="#ex#&nbspES:S118_500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_800'](bbox);out+skel;",
name="#ex#&nbspES:S118_800 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_800.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S119'](bbox);out+skel;",
name="#ex#&nbspES:S119 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S119.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S11a'](bbox);out+skel;",
name="#ex#&nbspES:S11a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S11b'](bbox);out+skel;",
name="#ex#&nbspES:S11b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S12'](bbox);out+skel;",
name="#ex#&nbspES:S12 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S12.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S120'](bbox);out+skel;",
name="#ex#&nbspES:S120 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S120.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S121'](bbox);out+skel;",
name="#ex#&nbspES:S121 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S121.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S122'](bbox);out+skel;",
name="#ex#&nbspES:S122 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S122.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S123'](bbox);out+skel;",
name="#ex#&nbspES:S123 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S123.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S124'](bbox);out+skel;",
name="#ex#&nbspES:S124 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S124.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S125'](bbox);out+skel;",
name="#ex#&nbspES:S125 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S125.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S126'](bbox);out+skel;",
name="#ex#&nbspES:S126 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S126.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S127'](bbox);out+skel;",
name="#ex#&nbspES:S127 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S127.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S13'](bbox);out+skel;",
name="#ex#&nbspES:S13 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S13.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S14a'](bbox);out+skel;",
name="#ex#&nbspES:S14a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S14a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S14b'](bbox);out+skel;",
name="#ex#&nbspES:S14b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S14b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15a'](bbox);out+skel;",
name="#ex#&nbspES:S15a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15b'](bbox);out+skel;",
name="#ex#&nbspES:S15b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15c'](bbox);out+skel;",
name="#ex#&nbspES:S15c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15d'](bbox);out+skel;",
name="#ex#&nbspES:S15d Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15d.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S16'](bbox);out+skel;",
name="#ex#&nbspES:S16 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S16.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S17'](bbox);out+skel;",
name="#ex#&nbspES:S17 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S17.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S17_500'](bbox);out+skel;",
name="#ex#&nbspES:S17_500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S17_500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S18'](bbox);out+skel;",
name="#ex#&nbspES:S18 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S18.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S19'](bbox);out+skel;",
name="#ex#&nbspES:S19 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S19.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S1a'](bbox);out+skel;",
name="#ex#&nbspES:S1a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S1a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S2'](bbox);out+skel;",
name="#ex#&nbspES:S2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S20'](bbox);out+skel;",
name="#ex#&nbspES:S20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S200'](bbox);out+skel;",
name="#ex#&nbspES:S200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S21'](bbox);out+skel;",
name="#ex#&nbspES:S21 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S21.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22'](bbox);out+skel;",
name="#ex#&nbspES:S22 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S220'](bbox);out+skel;",
name="#ex#&nbspES:S220 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S220.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S222'](bbox);out+skel;",
name="#ex#&nbspES:S222 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S222.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S222a'](bbox);out+skel;",
name="#ex#&nbspES:S222a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S222a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S224'](bbox);out+skel;",
name="#ex#&nbspES:S224 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S224.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S225'](bbox);out+skel;",
name="#ex#&nbspES:S225 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S225.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_100'](bbox);out+skel;",
name="#ex#&nbspES:S22_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_1000'](bbox);out+skel;",
name="#ex#&nbspES:S22_1000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_1200'](bbox);out+skel;",
name="#ex#&nbspES:S22_1200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_1300'](bbox);out+skel;",
name="#ex#&nbspES:S22_1300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_150'](bbox);out+skel;",
name="#ex#&nbspES:S22_150 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_150.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_1500'](bbox);out+skel;",
name="#ex#&nbspES:S22_1500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_200'](bbox);out+skel;",
name="#ex#&nbspES:S22_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_250'](bbox);out+skel;",
name="#ex#&nbspES:S22_250 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_250.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_300'](bbox);out+skel;",
name="#ex#&nbspES:S22_300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_400'](bbox);out+skel;",
name="#ex#&nbspES:S22_400 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_400.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_50'](bbox);out+skel;",
name="#ex#&nbspES:S22_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_500'](bbox);out+skel;",
name="#ex#&nbspES:S22_500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_600'](bbox);out+skel;",
name="#ex#&nbspES:S22_600 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_600.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_700'](bbox);out+skel;",
name="#ex#&nbspES:S22_700 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_700.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_800'](bbox);out+skel;",
name="#ex#&nbspES:S22_800 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_800.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_900'](bbox);out+skel;",
name="#ex#&nbspES:S22_900 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_900.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S23'](bbox);out+skel;",
name="#ex#&nbspES:S23 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S23.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S230'](bbox);out+skel;",
name="#ex#&nbspES:S230 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S230.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S230a'](bbox);out+skel;",
name="#ex#&nbspES:S230a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S230a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S232'](bbox);out+skel;",
name="#ex#&nbspES:S232 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S232.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S232a'](bbox);out+skel;",
name="#ex#&nbspES:S232a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S232a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S235'](bbox);out+skel;",
name="#ex#&nbspES:S235 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S235.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S235a'](bbox);out+skel;",
name="#ex#&nbspES:S235a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S235a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S24'](bbox);out+skel;",
name="#ex#&nbspES:S24 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S24.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S242'](bbox);out+skel;",
name="#ex#&nbspES:S242 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S242a'](bbox);out+skel;",
name="#ex#&nbspES:S242a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S242b'](bbox);out+skel;",
name="#ex#&nbspES:S242b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S242c'](bbox);out+skel;",
name="#ex#&nbspES:S242c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S25'](bbox);out+skel;",
name="#ex#&nbspES:S25 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S25.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S250'](bbox);out+skel;",
name="#ex#&nbspES:S250 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S250.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S260'](bbox);out+skel;",
name="#ex#&nbspES:S260 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S260.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S261'](bbox);out+skel;",
name="#ex#&nbspES:S261 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S261.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S263'](bbox);out+skel;",
name="#ex#&nbspES:S263 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S263.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S263a'](bbox);out+skel;",
name="#ex#&nbspES:S263a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S263a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S264'](bbox);out+skel;",
name="#ex#&nbspES:S264 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S264.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S266'](bbox);out+skel;",
name="#ex#&nbspES:S266 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S266.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S266a'](bbox);out+skel;",
name="#ex#&nbspES:S266a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S266a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26a'](bbox);out+skel;",
name="#ex#&nbspES:S26a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26b'](bbox);out+skel;",
name="#ex#&nbspES:S26b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26c'](bbox);out+skel;",
name="#ex#&nbspES:S26c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26Td_N'](bbox);out+skel;",
name="#ex#&nbspES:S26Td_N Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26Td_N.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26Ti_N'](bbox);out+skel;",
name="#ex#&nbspES:S26Ti_N Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26Ti_N.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S27'](bbox);out+skel;",
name="#ex#&nbspES:S27 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S27.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S270'](bbox);out+skel;",
name="#ex#&nbspES:S270 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S270.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S271'](bbox);out+skel;",
name="#ex#&nbspES:S271 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S271.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S28'](bbox);out+skel;",
name="#ex#&nbspES:S28 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S28.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S29'](bbox);out+skel;",
name="#ex#&nbspES:S29 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S29.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S2a'](bbox);out+skel;",
name="#ex#&nbspES:S2a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S2a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S3'](bbox);out+skel;",
name="#ex#&nbspES:S3 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S3.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S30'](bbox);out+skel;",
name="#ex#&nbspES:S30 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S30.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S300'](bbox);out+skel;",
name="#ex#&nbspES:S300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S301'](bbox);out+skel;",
name="#ex#&nbspES:S301 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S301.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S31'](bbox);out+skel;",
name="#ex#&nbspES:S31 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S31.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S310'](bbox);out+skel;",
name="#ex#&nbspES:S310 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S310.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S32'](bbox);out+skel;",
name="#ex#&nbspES:S32 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S32.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S320'](bbox);out+skel;",
name="#ex#&nbspES:S320 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S320.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S321'](bbox);out+skel;",
name="#ex#&nbspES:S321 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S321.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S322'](bbox);out+skel;",
name="#ex#&nbspES:S322 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S322.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S33'](bbox);out+skel;",
name="#ex#&nbspES:S33 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S33.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S34'](bbox);out+skel;",
name="#ex#&nbspES:S34 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S34.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S341'](bbox);out+skel;",
name="#ex#&nbspES:S341 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S341.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S342'](bbox);out+skel;",
name="#ex#&nbspES:S342 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S342.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S344'](bbox);out+skel;",
name="#ex#&nbspES:S344 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S344.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S347'](bbox);out+skel;",
name="#ex#&nbspES:S347 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S347.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S34a'](bbox);out+skel;",
name="#ex#&nbspES:S34a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S34a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S350'](bbox);out+skel;",
name="#ex#&nbspES:S350 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S350.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S351'](bbox);out+skel;",
name="#ex#&nbspES:S351 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S351.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S354'](bbox);out+skel;",
name="#ex#&nbspES:S354 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S354.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S355'](bbox);out+skel;",
name="#ex#&nbspES:S355 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S355.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S360'](bbox);out+skel;",
name="#ex#&nbspES:S360 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S360.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S362'](bbox);out+skel;",
name="#ex#&nbspES:S362 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S362.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S366'](bbox);out+skel;",
name="#ex#&nbspES:S366 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S366.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S368'](bbox);out+skel;",
name="#ex#&nbspES:S368 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S368.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S373'](bbox);out+skel;",
name="#ex#&nbspES:S373 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S373.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S4'](bbox);out+skel;",
name="#ex#&nbspES:S4 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S4.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S400'](bbox);out+skel;",
name="#ex#&nbspES:S400 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S400.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S410'](bbox);out+skel;",
name="#ex#&nbspES:S410 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S410.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S420'](bbox);out+skel;",
name="#ex#&nbspES:S420 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S420.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S430'](bbox);out+skel;",
name="#ex#&nbspES:S430 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S430.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S440'](bbox);out+skel;",
name="#ex#&nbspES:S440 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S440.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S450'](bbox);out+skel;",
name="#ex#&nbspES:S450 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S450.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S5'](bbox);out+skel;",
name="#ex#&nbspES:S5 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S5.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S500'](bbox);out+skel;",
name="#ex#&nbspES:S500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S500b'](bbox);out+skel;",
name="#ex#&nbspES:S500b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S500b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50a'](bbox);out+skel;",
name="#ex#&nbspES:S50a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50a_50'](bbox);out+skel;",
name="#ex#&nbspES:S50a_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50a_60'](bbox);out+skel;",
name="#ex#&nbspES:S50a_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50a_70'](bbox);out+skel;",
name="#ex#&nbspES:S50a_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50b'](bbox);out+skel;",
name="#ex#&nbspES:S50b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50b_60'](bbox);out+skel;",
name="#ex#&nbspES:S50b_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50b_70'](bbox);out+skel;",
name="#ex#&nbspES:S50b_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50c'](bbox);out+skel;",
name="#ex#&nbspES:S50c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50d'](bbox);out+skel;",
name="#ex#&nbspES:S50d Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50d_50'](bbox);out+skel;",
name="#ex#&nbspES:S50d_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50d_60'](bbox);out+skel;",
name="#ex#&nbspES:S50d_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50d_70'](bbox);out+skel;",
name="#ex#&nbspES:S50d_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50e'](bbox);out+skel;",
name="#ex#&nbspES:S50e Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50e_50'](bbox);out+skel;",
name="#ex#&nbspES:S50e_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50e_60'](bbox);out+skel;",
name="#ex#&nbspES:S50e_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50e_70'](bbox);out+skel;",
name="#ex#&nbspES:S50e_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S51'](bbox);out+skel;",
name="#ex#&nbspES:S51 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S51.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S510'](bbox);out+skel;",
name="#ex#&nbspES:S510 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S510.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S52'](bbox);out+skel;",
name="#ex#&nbspES:S52 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S520'](bbox);out+skel;",
name="#ex#&nbspES:S520 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S520.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S52a'](bbox);out+skel;",
name="#ex#&nbspES:S52a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S52b'](bbox);out+skel;",
name="#ex#&nbspES:S52b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S53'](bbox);out+skel;",
name="#ex#&nbspES:S53 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S53a'](bbox);out+skel;",
name="#ex#&nbspES:S53a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S53b'](bbox);out+skel;",
name="#ex#&nbspES:S53b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S53c'](bbox);out+skel;",
name="#ex#&nbspES:S53c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53c.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S540'](bbox);out+skel;",
name="#ex#&nbspES:S540 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S540.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S550'](bbox);out+skel;",
name="#ex#&nbspES:S550 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S550.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S560'](bbox);out+skel;",
name="#ex#&nbspES:S560 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S560.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S570'](bbox);out+skel;",
name="#ex#&nbspES:S570 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S570.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S570a'](bbox);out+skel;",
name="#ex#&nbspES:S570a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S570a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S571'](bbox);out+skel;",
name="#ex#&nbspES:S571 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S571.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S572'](bbox);out+skel;",
name="#ex#&nbspES:S572 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S572.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S573'](bbox);out+skel;",
name="#ex#&nbspES:S573 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S573.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S574'](bbox);out+skel;",
name="#ex#&nbspES:S574 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S574a'](bbox);out+skel;",
name="#ex#&nbspES:S574a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S574b'](bbox);out+skel;",
name="#ex#&nbspES:S574b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S575'](bbox);out+skel;",
name="#ex#&nbspES:S575 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S575.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S6'](bbox);out+skel;",
name="#ex#&nbspES:S6 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S6.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S600'](bbox);out+skel;",
name="#ex#&nbspES:S600 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S600.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S602'](bbox);out+skel;",
name="#ex#&nbspES:S602 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S602.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S60a'](bbox);out+skel;",
name="#ex#&nbspES:S60a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S60a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S60b'](bbox);out+skel;",
name="#ex#&nbspES:S60b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S60b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S610'](bbox);out+skel;",
name="#ex#&nbspES:S610 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S610.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S61a'](bbox);out+skel;",
name="#ex#&nbspES:S61a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S61a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S61b'](bbox);out+skel;",
name="#ex#&nbspES:S61b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S61b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S62a'](bbox);out+skel;",
name="#ex#&nbspES:S62a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S62a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S62b'](bbox);out+skel;",
name="#ex#&nbspES:S62b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S62b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S63'](bbox);out+skel;",
name="#ex#&nbspES:S63 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S63.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S64a'](bbox);out+skel;",
name="#ex#&nbspES:S64a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S64a.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S64b'](bbox);out+skel;",
name="#ex#&nbspES:S64b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S64b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7'](bbox);out+skel;",
name="#ex#&nbspES:S7 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S700'](bbox);out+skel;",
name="#ex#&nbspES:S700 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S700.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S710'](bbox);out+skel;",
name="#ex#&nbspES:S710 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S710.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S720'](bbox);out+skel;",
name="#ex#&nbspES:S720 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S720.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S730'](bbox);out+skel;",
name="#ex#&nbspES:S730 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S730.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S740'](bbox);out+skel;",
name="#ex#&nbspES:S740 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S740.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S750'](bbox);out+skel;",
name="#ex#&nbspES:S750 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S750.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S760'](bbox);out+skel;",
name="#ex#&nbspES:S760 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S760.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S770'](bbox);out+skel;",
name="#ex#&nbspES:S770 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S770.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7b'](bbox);out+skel;",
name="#ex#&nbspES:S7b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7b.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7b2'](bbox);out+skel;",
name="#ex#&nbspES:S7b2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7b2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7f'](bbox);out+skel;",
name="#ex#&nbspES:S7f Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7f.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_10'](bbox);out+skel;",
name="#ex#&nbspES:S7_10 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_10.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_100'](bbox);out+skel;",
name="#ex#&nbspES:S7_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_20'](bbox);out+skel;",
name="#ex#&nbspES:S7_20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_30'](bbox);out+skel;",
name="#ex#&nbspES:S7_30 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_30.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_40'](bbox);out+skel;",
name="#ex#&nbspES:S7_40 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_40.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_50'](bbox);out+skel;",
name="#ex#&nbspES:S7_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_60'](bbox);out+skel;",
name="#ex#&nbspES:S7_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_70'](bbox);out+skel;",
name="#ex#&nbspES:S7_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_80'](bbox);out+skel;",
name="#ex#&nbspES:S7_80 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_80.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_90'](bbox);out+skel;",
name="#ex#&nbspES:S7_90 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_90.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8'](bbox);out+skel;",
name="#ex#&nbspES:S8 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800'](bbox);out+skel;",
name="#ex#&nbspES:S800 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800e'](bbox);out+skel;",
name="#ex#&nbspES:S800e Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800e.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_100'](bbox);out+skel;",
name="#ex#&nbspES:S800_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_1000'](bbox);out+skel;",
name="#ex#&nbspES:S800_1000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_1300'](bbox);out+skel;",
name="#ex#&nbspES:S800_1300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_150'](bbox);out+skel;",
name="#ex#&nbspES:S800_150 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_150.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_1500'](bbox);out+skel;",
name="#ex#&nbspES:S800_1500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_1km'](bbox);out+skel;",
name="#ex#&nbspES:S800_1km Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1km.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_200'](bbox);out+skel;",
name="#ex#&nbspES:S800_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_250'](bbox);out+skel;",
name="#ex#&nbspES:S800_250 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_250.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_300'](bbox);out+skel;",
name="#ex#&nbspES:S800_300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_350'](bbox);out+skel;",
name="#ex#&nbspES:S800_350 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_350.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_400'](bbox);out+skel;",
name="#ex#&nbspES:S800_400 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_400.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_450'](bbox);out+skel;",
name="#ex#&nbspES:S800_450 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_450.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_50'](bbox);out+skel;",
name="#ex#&nbspES:S800_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_500'](bbox);out+skel;",
name="#ex#&nbspES:S800_500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_5km'](bbox);out+skel;",
name="#ex#&nbspES:S800_5km Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_5km.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_600'](bbox);out+skel;",
name="#ex#&nbspES:S800_600 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_600.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_700'](bbox);out+skel;",
name="#ex#&nbspES:S800_700 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_700.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_800'](bbox);out+skel;",
name="#ex#&nbspES:S800_800 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_800.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_900'](bbox);out+skel;",
name="#ex#&nbspES:S800_900 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_900.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810'](bbox);out+skel;",
name="#ex#&nbspES:S810 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_100'](bbox);out+skel;",
name="#ex#&nbspES:S810_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_1000'](bbox);out+skel;",
name="#ex#&nbspES:S810_1000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_1000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_1500'](bbox);out+skel;",
name="#ex#&nbspES:S810_1500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_1500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_200'](bbox);out+skel;",
name="#ex#&nbspES:S810_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_2000'](bbox);out+skel;",
name="#ex#&nbspES:S810_2000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_2000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_2500'](bbox);out+skel;",
name="#ex#&nbspES:S810_2500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_2500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_3000'](bbox);out+skel;",
name="#ex#&nbspES:S810_3000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_350'](bbox);out+skel;",
name="#ex#&nbspES:S810_350 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_350.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_3500'](bbox);out+skel;",
name="#ex#&nbspES:S810_3500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3500.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_3500_2'](bbox);out+skel;",
name="#ex#&nbspES:S810_3500_2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3500_2.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_4000'](bbox);out+skel;",
name="#ex#&nbspES:S810_4000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_4000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_4250'](bbox);out+skel;",
name="#ex#&nbspES:S810_4250 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_4250.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_5000'](bbox);out+skel;",
name="#ex#&nbspES:S810_5000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_5000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S820'](bbox);out+skel;",
name="#ex#&nbspES:S820 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S820.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S821'](bbox);out+skel;",
name="#ex#&nbspES:S821 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S821.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S830'](bbox);out+skel;",
name="#ex#&nbspES:S830 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S830.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840'](bbox);out+skel;",
name="#ex#&nbspES:S840 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_100'](bbox);out+skel;",
name="#ex#&nbspES:S840_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_1000'](bbox);out+skel;",
name="#ex#&nbspES:S840_1000 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_1000.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_150'](bbox);out+skel;",
name="#ex#&nbspES:S840_150 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_150.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_200'](bbox);out+skel;",
name="#ex#&nbspES:S840_200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_200.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_300'](bbox);out+skel;",
name="#ex#&nbspES:S840_300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_300.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_50'](bbox);out+skel;",
name="#ex#&nbspES:S840_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_900'](bbox);out+skel;",
name="#ex#&nbspES:S840_900 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_900.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S850'](bbox);out+skel;",
name="#ex#&nbspES:S850 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S850.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S851'](bbox);out+skel;",
name="#ex#&nbspES:S851 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S851.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S852'](bbox);out+skel;",
name="#ex#&nbspES:S852 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S852.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S853'](bbox);out+skel;",
name="#ex#&nbspES:S853 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S853.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S860'](bbox);out+skel;",
name="#ex#&nbspES:S860 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S860.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S870'](bbox);out+skel;",
name="#ex#&nbspES:S870 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S870.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_100'](bbox);out+skel;",
name="#ex#&nbspES:S8_100 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_100.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_20'](bbox);out+skel;",
name="#ex#&nbspES:S8_20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_20.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_30'](bbox);out+skel;",
name="#ex#&nbspES:S8_30 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_30.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_40'](bbox);out+skel;",
name="#ex#&nbspES:S8_40 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_40.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_50'](bbox);out+skel;",
name="#ex#&nbspES:S8_50 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_50.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_60'](bbox);out+skel;",
name="#ex#&nbspES:S8_60 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_60.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_70'](bbox);out+skel;",
name="#ex#&nbspES:S8_70 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_70.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_80'](bbox);out+skel;",
name="#ex#&nbspES:S8_80 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_80.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_90'](bbox);out+skel;",
name="#ex#&nbspES:S8_90 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_90.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S9'](bbox);out+skel;",
name="#ex#&nbspES:S9 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S9.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S900'](bbox);out+skel;",
name="#ex#&nbspES:S900 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S900.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S910'](bbox);out+skel;",
name="#ex#&nbspES:S910 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S910.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S920'](bbox);out+skel;",
name="#ex#&nbspES:S920 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S920.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S930'](bbox);out+skel;",
name="#ex#&nbspES:S930 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S930.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S940'](bbox);out+skel;",
name="#ex#&nbspES:S940 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S940.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S950'](bbox);out+skel;",
name="#ex#&nbspES:S950 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S950.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S960'](bbox);out+skel;",
name="#ex#&nbspES:S960 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S960.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S970'](bbox);out+skel;",
name="#ex#&nbspES:S970 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S970.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S980'](bbox);out+skel;",
name="#ex#&nbspES:S980 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S980.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S990'](bbox);out+skel;",
name="#ex#&nbspES:S990 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S990.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:secondary'](bbox);out+skel;",
name="#ex#&nbspES:secondary Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_secondary.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:tertiary'](bbox);out+skel;",
name="#ex#&nbspES:tertiary Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_tertiary.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:tp18'](bbox);out+skel;",
name="#ex#&nbspES:tp18 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_tp18.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:traffic_sign_dir'](bbox);out+skel;",
name="#ex#&nbspES:traffic_sign_dir Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_traffic_sign_dir.png"),
true
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:trunk'](bbox);out+skel;",
name="#ex#&nbspES:trunk Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_trunk.png"),
true
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
/*
	  		//highways
            make_layer(QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway=path][bicycle=designated](bbox);node(w););out+skel;", "red",name="#l#highway=cycleway", 5, false),
			  
			make_layer(QURL + "?data=(way[highway=footway](bbox);node(w););out+skel;","#bd958b",name="#l#highway=footway", 5, false,"@0.8"),
			
			make_layer(QURL + "?data=(way[highway=path][bicycle!~'^designated'](bbox);node(w););out+skel;","#7b9541",name="#l#highway=path", 5, false,"@0.8"),
			
			make_layer(QURL + "?data=(way[highway=pedestrian](bbox);node(w););out+skel;", "#ff6500",name="#l#highway=pedestrian",5, false),
			  
			// tracks & tracktype
			make_layer(QURL + "?data=(way[highway=track](bbox);node(w););out+skel;","#bd9520",
			name="#l#highway=track", 5, false,"@0.8"),
			
            make_layer(QURL + "?data=(way[tracktype=grade1](bbox);node(w););out+skel;","#330000",name="#l#tracktype=grade1", 2, false),
			
			make_layer(QURL + "?data=(way[tracktype=grade2](bbox);node(w););out+skel;","#330000",name="#dl#tracktype=grade2", 3, false,"4 8"),
			
			make_layer(QURL + "?data=(way[tracktype=grade3](bbox);node(w););out+skel;","#A52A2A",name="#dl#tracktype=grade3", 2, false,"4 8"),
			
			make_layer(QURL + "?data=(way[tracktype=grade4](bbox);node(w););out+skel;","#A52A2A",name="#d#tracktype=grade4", 2, false,"1 6"),
			
			make_layer(QURL + "?data=(way[tracktype=grade5](bbox);node(w););out+skel;","black",name="#d#tracktype=grade5", 1, false,"1 3"),
			
			make_layer(QURL + "?data=(way[highway=track][tracktype!~'^grade'](bbox);node(w););out+skel;","white",name="#dl#tracktype unknown", 2, false,"4 8"),
			
			make_layer(QURL + "?data=(way[highway=track][cycleway](bbox);node(w););out+skel;","#ff008b",name="#dl#highway=track &<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcycleway=*",5, false,"4 8"),

			// surface on paths & tracks
			make_layer(QURL + "?data=(way[highway~'^cycle|^foot|^path|^pedestrian|^track'][surface~'^asphalt|^pav|^concrete'](bbox);node(w););out+skel;","#000080",name="#l#surface = paved", 2, false,"@0.8"),
			 
			make_layer(QURL + "?data=(way[surface~'^cob'](bbox);node(w););out+skel;","#000080",name="#dl#surface=cobblestone", 4, false,"4 8@0.8"),
			
			make_layer(QURL + "?data=(way[surface~'^fine_gravel|.shell.'](bbox);node(w););out+skel;","#3965d5",name="#dl#surface=fine_gravel/shells", 3, false,"4 8@0.8"),
			
			// semi paved
			make_layer(QURL + "?data=(way[surface~'^gravel|^compact|^loam'](bbox);node(w););out+skel;","yellow",name="#dl#surface = semi-paved", 3, false,"4 8@0.8"),
			
			// unpaved
			make_layer(QURL + "?data=(way[surface~'^grass|^ground|^unpaved|^dirt|^earth|^sand|^woodchips|^pebble'](bbox);node(w););out+skel;","yellow",name="#d#surface = unpaved", 2, false,"1 3@0.8"),

			 // smoothness
			 make_layer(QURL + "?data=(way[smoothness=bad](bbox);node(w););out+skel;","#00FFFF", 
			 name="#dl#smoothness=bad", 3, false,"4 8"),
			 
			 make_layer(QURL + "?data=(way[smoothness~'^very_bad|^horrible|^very_horrible|^impassable'](bbox);node(w););out+skel;","#00FFFF", 
			 name="#l#smoothness very bad", 4, false)
*/			 
			]);
	}			
		if (type == "route"){

			map.addLayers([
			
			//highway=cycleway
			make_layer(
				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway=path][bicycle=designated](bbox);node(w););out+skel;",
				name="#l#highway=cycleway<hr>Route relations:",
				defaultSolidLine("red"),
				false),
/*
			//LF-routes
			make_layer(QURL + "?data=(relation[route=bicycle][network=ncn](bbox);way(r)(bbox);node(w););out+skel;", "blue",name="#l#NCN route <i>(LF route)</i>", 12, false,"@0.6"),

			// knooppuntenroutes
			make_a_layer(QURL + "?data=relation(bbox)[network=rcn];(way(r)(bbox);node(w););out+skel;node(bbox)[rcn_ref];out;", "#00FFFF",name="#l#RCN route <i>(knooppuntroute)</i>", 8, false),

			make_layer(QURL + "?data=(relation[route=bicycle][network=lcn](bbox);way(r)(bbox);node(w););out+skel;", "#7CFC00",name="#dl#LCN route <i>(lokale route)</i>", 5, false,"4 8"),
			
			make_layer(QURL + "?data=(relation[network=icn](bbox);way(r)(bbox);node(w););out+skel;relation[network=icn];rel(r)(bbox);(way(r)(bbox);node(w););out skel;", "yellow",name="#dl#ICN route <i>(Int.route)</i>", 3, false,"4 8"),
			
			//route=mtb
            make_layer(QURL + "?data=(relation[route=mtb](bbox);way(r)(bbox);node(w););out+skel;", "#bd008b",name="#dl#MTB route", 4, false,"4 8"),
			
			//route=hiking, horse
            make_a_layer(QURL + "?data=(relation[route~'hik|foot|walk'](bbox);way(r)(bbox);node(w););out+skel;node[rwn_ref][rcn_ref!~'.'](bbox);out;", "#390000",name="#l#hiking route", 5, false),
			
			make_a_layer(QURL + "?data=(relation[route=horse](bbox);way(r)(bbox);node(w););out+skel;node(bbox)[rhn_ref];out;", "#7b9520",name="#l#horse route", 4, false),
			
			make_layer(QURL + "?data=(way[railway~'^abandoned|^disused|^dismantled'](bbox);node(w););out+skel;", "#7b3000",name="#dl#former railway lines", 4, false,"4 8"),
			
			make_a_layer(QURL + "?data=node[tourism=information](bbox);out;", "red", name="#co#info<hr>Cyclability (indicative):", 2, false),
			
			
			
			// non cyclable ways
			make_layer(QURL + "?data=(way[bicycle~'no|use_sidepath'](bbox);node(w);way[highway][access~'^no|^priv'][vehicle!~'yes'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['mtb:scale'!~'^'](bbox);node(w);way[highway~'^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr'][access! ~'^no|^priv'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['ramp:bicycle'!~'yes'](bbox);node(w);way[highway=track][horse=designated][access! ~'^no|^priv'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['mtb:scale'!~'^'][route!=mtb](bbox);node(w););out+skel;", "#393020",name="<img style='vertical-align: middle;background-color:#393020;' src='img/line.gif'> 'non cycleable' ways", 4, false,"@0.5"),
						
 			// cyclable ways
			make_layer(QURL + "?data=(way[highway][highway!~'^motorway|^trunk|^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr'][access!~'^no|^priv'][bicycle!=no][horse!=designated][tracktype!~'grade4|grade5'](bbox);node(w);way[highway][access~'^no|^priv'][bicycle~'^yes|^desig|^offic|^destin|^permis'](bbox);node(w);way[highway~'^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr|^trunk|^motor'][bicycle~'^yes|^desig|^offic|^destin|^permis'](bbox);node(w);way[highway~'^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr'][mtb~'^yes|^desig|^offic|^destin|^permis'](bbox);node(w);way[highway=steps]['ramp:bicycle'=yes](bbox);node(w);way[route=ferry][bicycle!=no](bbox);node(w););out+skel;", "#39ff00",name="<img style='vertical-align: middle;background-color:#39ff00;' src='img/line.gif'> 'cycleable' ways<hr>", 4, false,"@0.6")
			
*/
			]);
	
			// OfficiÃ«le LF routes van het Fietsplatform
			var LFRoutes = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: green;' src='img/line.gif'>&nbspOfficial LF routes (routedatabank.nl)",

                                       "https://www.routedatabank.nl/geoserver/wms",
                                       {layers: "routedatabank:lf_routes",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(LFRoutes);		
			
			var fietsnetwerk1 = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: green;' src='img/line.gif'>&nbspOfficial cycle node network (routedatabank.nl)",
                                       "https://www.routedatabank.nl/geoserver/wms",
                                       {layers: "routedatabank:fietsnetwerken_vrij",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsnetwerk1);	
			
			var fietsknoop1 = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: white;' src='img/tocircle.gif'>&nbspOfficial cycle nodes (routedatabank.nl)",
                                       "https://www.routedatabank.nl/geoserver/wms",
                                       {layers: "routedatabank:fietsknooppunten_vrij",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsknoop1);
			
			var fietsnetwerk = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: #39ff00;' src='img/line.gif'>&nbspOfficial cycle node network (pdok.nl)",
                                       "http://geodata.nationaalgeoregister.nl/fietsknooppuntennetwerk/wms",
                                       {layers: "netwerken",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsnetwerk);	
			
			var fietsknoop = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: white;' src='img/tocircle.gif'>&nbspOfficial cycle nodes (pdok.nl)",
                                       "http://geodata.nationaalgeoregister.nl/fietsknooppuntennetwerk/wms",
                                       {layers: "knooppunten",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsknoop);
	
	}	

	if (type == "bugs"){
		//	dit maakt de layers voor de bugslaag
			map.addLayers([
		/*	
			make_layer(QURL + "?data=(relation[route=bicycle](bbox);way[bicycle~'no|use_sidepath'](r);node(w););out+skel;", "#39ff00",name="#l#cycle routes & bicycle=no|use_sidepath",8, true,"5 10"),
	
			make_layer(QURL + "?data=(way[highway=cycleway][bicycle=no][moped!~'^yes|^designated'](bbox);node(w););out+skel;", "#ff00d5",name="#l#cycleway/bicycle=no<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNote: temporarily blocked ways?",10, true),
			
			make_layer(QURL + "?data=(way[cycleway][bicycle~'no|use_sidepath'][cycleway!=no](bbox);node(w);way['cycleway:right'][bicycle=no](bbox);node(w);way['cycleway:left'][bicycle=no](bbox);node(w););out+skel;", "purple",name="#l#cycleway lane, track,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspopposite & bicycle=no|use_sidepath",8, true,"5 10"),
			
			make_layer(QURL + "?data=(way[highway=crossing](bbox);node(w););out+skel;", "red",name="#l#highway=crossing<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(should be a node, not a way)",8, true),
			
			make_layer(QURL + "?data=(way[highway=road](bbox);node(w);way[highway=cycleway][fixme](bbox);node(w);way[highway=cycleway][FIXME](bbox);node(w);way[cycleway][fixme](bbox);node(w);way[cycleway][FIXME](bbox);node(w););out+skel;", "green",name="#l#highway=road or cycleway<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspfixme (better tagging needed)",8, true),
			
			make_layer(QURL + "?data=(way[highway~'Pad|pad|Rad|rad|unknown'](bbox);node(w););out+skel;", "#ff6520",name="#l#highway=nonsense",8, true,"5 10@0.5"),
			
			make_layer(QURL + "?data=(relation[route=bicycle](bbox););way(r:\"\")(bbox)->.b;(way.b[oneway=yes];)->.c;(way.c[\"oneway:bicycle\"=no];way.c[cycleway=opposite];way.c[oneway=\"-1\"];way.c[oneway=\"bicycle:backward\"];way.c[oneway=\"bicycle:forward\"];way.c[cycleway=\"opposite_lane\"];)->.d;(.c;- .d;);(._;>;);out+skel;","#17202a",name="#l#oneway cycle route without b/f role",8, true,"5 10"),
			
			// overbodige tags?
			make_layer(QURL + "?data=(way[highway=cycleway][cycleway][cycleway!=shared][cycleway!=segregated](bbox);node(w););out+skel;", "#39ffd5",name="#l#highway=cycleway & cycleway=*",8, false),
      
			make_layer(QURL + "?data=(way[highway=cycleway][bicycle~'yes|designated'](bbox);node(w););out+skel;", "blue",name="#l#cycleway &<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspbicycle=yes/designated<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(needless tagging?)", 3, false,"5 10"),
			
			make_layer(QURL + "?data=(way[name~'^Fietspad|^fietspad|^pad$|^Pad$|cycleway|^path$|^Path$'](bbox);node(w);way[highway=cycleway][name!~'.'](bbox);node(w););out+skel;", "#ffff00",name="#l#cycleway/path without<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspstreetname (address search)",4, false),
*/
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
	  
	  
	
	  var area = 0.01
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
