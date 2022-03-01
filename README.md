# Custom OSM Map App (Customosmapp) : Motiu
Custom OSM Map App neix de l'adaptació del mapa de la comunitat catalana a mostrar qualsevol tipus d'informació temàtica.

# 0-La Base de dades: Openstreetmap
OSM (Openstreetmap) no és un mapa, és una base de dades de punts i línies geolocalitzats, que entre d'altres coses es pot aprofitar per fer mapes (renderitzacions). Però també es poden aprofitar les dades (en aquest cas, contenidors) .Tot plegat es fa amb claus, valors i relacions en aquests punts i línies.

# 1-Mapa

-Mapa basat en [Bicycle tags map](https://wiki.openstreetmap.org/wiki/Bicycle_tags_map)

-Amb modificacions de [Ramiro Balado](https://github.com/Qjammer)

-Versió nova Openlayers feta per [Ripollx](https://github.com/Ripollx)

-Possibilitat d'afegir JSONs feta per [Hugoren Martinako ](https://github.com/Crashillo)

-Consultes complexes afegides per [Ismael Luceno](https://github.com/ismaell)

El mapa ens permet la mostra d'elements determinats personalitzables tenint com a fons varis mapes diferents.

Directament es pot modificar la pàgina editant els arxius corresponents:

*    index.html conté l'esquelet de la pàgina.
*    index.js conté l'orquestador per utilitzar OpenLayers (només es requereix modificar per afegir noves funcionalitats).
*    config.js conté la definició de les capes, idioma i característiques que es volen mostrar.

# [Exemple del mapa funcionant](http://yopaseopor.github.io/customosmapp)

# Agraïments

A la [Comunitat Catalana d'Openstreetmap](https://t.me/osmcat) i a [OSM España](https://t.me/osmes) per permetre aquests mapes, així com als desenvolupadors que hi han col·laborat.