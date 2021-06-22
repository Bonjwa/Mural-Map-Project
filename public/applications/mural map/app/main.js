var app;

require([
    //esri modules
    "esri/tasks/Locator",
    "esri/tasks/QueryTask",
    "esri/tasks/support/Query",
    "esri/tasks/support/DataFile",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/tasks/ClosestFacilityTask",
    "esri/tasks/support/ClosestFacilityParameters",
    "esri/widgets/Locate",
    "esri/tasks/support/FeatureSet",
    "esri/geometry/Point",
    "esri/symbols/Symbol",

    "esri/config",
    "esri/Map",
    "esri/Basemap",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Search",
    "esri/core/watchUtils",
    "esri/widgets/Directions",

    //other modules
    "dojo/query",
    // Calcite-maps
    "calcite-maps/calcitemaps-v0.10",
    "calcite-maps/calcitemaps-arcgis-support-v0.10",
    // Bootstrap
    "bootstrap/Collapse",
    "bootstrap/Dropdown",
    "bootstrap/Tab",
    "dojo/domReady!",


], function (Locator, QueryTask, Query, DataFile, Graphic, GraphicsLayer, ClosestFacilityTask, ClosestFacilityParameters, Locate, FeatureSet, Point, Symbol, esriConfig, Map, Basemap, MapView, FeatureLayer, Search, watchUtils, Directions, query,
    CalciteMaps,
    CalciteMapsArcGIS,
) {
    /*don't remove or touch*/
    const secure = eval(function (p, a, c, k, e, d) {e = function (c) {return c};if (!''.replace(/^/, String)){while (c--) {d[c] = k[c] || c}k = [function (e) {return d[e]}];e = function () {return '\\w+'};c = 1};while (c--){if (k[c]) 
    {p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])}}return p}('"2-1-0"', 3, 3, 'ybED2Jt3hviwCQ|KvuKpDmY06kJOOkiE701ffiuT43BN5gwu|AAPK69758a65b76b414b924bfbcb77d69be0RuHgNYAhAiMPslP'.split('|'), 0, {}));
    eval(function (p, a, c, k, e, d) {e = function (c) {return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))};if 
    (!''.replace(/^/, String)) {while (c--) {d[e(c)] = k[c] || e(c)}k = [function (e) {return d[e]}];e = function () {return '\\w+'};c = 1};while (c--) {if (k[c]) {p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])}}return p}
    ('z f=["\\p\\q\\3\\6\\l\\r","\\7\\7\\c\\6\\5\\b\\4\\a\\D\\p\\5\\a\\2\\4\\5\\2\\8\\j\\8\\2\\b\\v\\8\\2\\e\\2\\C\\2\\4\\4\\B\\5\\b\\2\\l\\d\\A\\9\\E\\n\\m\\s\\7\\o\\7\\3\\G\\c\\H\\I\\c\\y\\6\\g\\9\\6\\q\\u\\J\\s\\d\\5\\i\\w\\h\\h\\i\\3\\t\\4\\d\\j\\e\\e\\3\\9\\F\\8\\x\\K\\m\\a\\n\\k\\9\\y\\r\\2\\t\\u\\v\\w\\L\\x\\o\\g\\3\\k\\M\\N"];O[f[0]]=f[1]',
     51, 51, '||x62|x69|x37|x36|x4B|x41|x34|x75|x35|x39|x50|x30|x66|_0xcd24|x76|x4F|x6B|x31|x77|x65|x4E|x67|x68|x61|x70|x79|x59|x45|x44|x32|x4A|x33|x2D|var|x52|x64|x63|x38|x48|x54|x4D|x73|x6C|x6D|x42|x74|x43|x51|esriConfig'.split('|'), 0, {}))
    /* don't touch or remove */

    /*popup section */
    const template = {
        title: `<div class="container-2"><div class="c-logo"><img src="{Logo_URL}"></div><div class="m-name"><b>{Mural_Name}</b></div></div>`,
        lastEditInfoEnabled: false,
        content: `<div class="popupImage">
              <a href="{Image_URL}?nodirect=1"><img src="{Image_URL}?nodirect=1" alt="{Mural_Name}"/></a>
            </div>
            <div class="popupImageCaption"><b>Tour Number:</b> {Tour_Number}</div>
            <div class="popupDescription">
              <p class="info">
                <b>Description:</b> {Description}
              </p>
              <p class="info">
                <b>Artist:</b> {Artist}
              </p>
              <p class="info">
                <b>Year Painted:</b> {Year}
              </p>
              <p class="info">
                <b>Address:</b> {Address}
              </p>
              <p class="info">
                <b>Location:</b> {location}
              </p>
              
              <p class="info">
                <b>Links:</b><br>
                <a href="{Mural_URL}">{Mural_URL_Label}<br></a>
                <a href="{Artist_URL}">{Artist_URL_Label}<br></a>
                <a href="{Artist_URL_2}">{Artist_URL_Label_2}</a>
              <p>
            </div>
        `
    };
    /*popup section end*/
    let labelTourNum = { //label graphic to change the look from the default styl
        symbol: {
            type: "text",
            textsize: '3px',
            color: [255, 255, 255, 1],
            haloColor: [0, 0, 0, 1],
            haloSize: "1.5px",
            "font": {
                "family": "Ubuntu Light",
                "style": "normal",
                "weight": "normal",
                size: 7.5
            }
        },
        labelPlacement: "center-center",
        labelExpressionInfo: {
            expression: "$feature.Tour_Number"
        }
    };
    const facilitiesFeatureLayer = new FeatureLayer({
        url: "https://services6.arcgis.com/dUO3N3UOHvGU89bM/arcgis/rest/services/Murals_20201103/FeatureServer/0",
        popupTemplate: template,
        definitionExpression: "1=1", //SQL query
        labelingInfo: [labelTourNum], //Labeling    
    });
    const networkServiceUrl =
        'https://services6.arcgis.com/dUO3N3UOHvGU89bM/arcgis/rest/services/Murals_20201103/FeatureServer/';
    const datasetURL = new DataFile({
        url: networkServiceUrl + "0/query?where=1%3D1&returnGeometry=true&outFields=*&f=json"
    });
    let routeSymbol = {
        type: "simple-line",
        color: [0, 245, 245, 0.75],
        width: "5",
    };
    const routesLayer = new GraphicsLayer();
    const facilitiesLayer = new GraphicsLayer();

    // Map 
    let map = new Map({
        basemap: "osm",
        layers: [routesLayer, facilitiesLayer, facilitiesFeatureLayer]
    });
    // 2D View  
    let mapView = new MapView({
        container: "mapViewDiv",
        map: map,
        zoom: 13,
        center: [-119.465459, 49.880083],
        padding: {
            top: 50, //Buffer for the header
            right: 0,
            bottom: 0,
            left: 25
        },
        popup: {
            dockEnabled: true,
            dockOptions: {
                // Disables the dock button from the popup
                buttonEnabled: false,
                // Ignore the default sizes that trigger responsive docking
                breakpoint: false,
                position: 'top-left' // positions the popup bottom left
            },
            collapsed: false
        }
    });

    //End of constants

    //Default Esri Widgets
    let locator = new Locate({
        view: mapView,
    });
    mapView.ui.add(locator, 'top-left');

    let searchWidgetNav = new Search({
        container: "searchNavDiv",
        view: mapView,
        allPlaceholder: 'Find murals or address',
        includeDefaultSources: false,
        sources: [{
            layer: facilitiesFeatureLayer,
            exactMatch: false,
            placeholder: 'Example: Ok Corral Mural',
            name: 'Murals',
            zoomScale: 5000, 
        }, {
            name: "Address",
            apiKey: secure, //hidden
            singleLineFieldName: "SingleLine",
            countryCode:"CAN",  //SETS address search to canada only
            locator: new Locator({
                url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
            })
        }]
    });
    const directions = new Directions({
        container: "layerlistDiv",
        view: mapView,
    });
    //end of esri widgets

    // Menu UI - change Basemaps
    query("#selectBasemapPanel").on("change", function (e) {
        mapView.map.basemap = e.target.options[e.target.selectedIndex].dataset.vector;
    });
    //end of basemap section


    /*clear route section */
    let clear_directions = document.getElementById('clear_button_directions');
    clear_directions.addEventListener("click", e => {
        clear_directions.setAttribute('loading', true);
        setTimeout(removerRoutes, 750);
    });

    function removerRoutes() {
        console.log('Clearing Routes...');
        routesLayer.removeAll();
        mapView.graphics.removeAll();
        directions.viewModel.reset();
        clear_directions.removeAttribute('loading');
        clear_muralfinder.removeAttribute('loading');
        domSwitch.setAttribute('color', 'neutral');
        domSwitch.innerHTML = 'Find Closest Mural(s)!';
    };
    
    var view = new MapView({
        container:"viewDiv",
        map:map,
        zoom:  4,
        center:[15,65]
    });
    let clear_muralfinder = document.getElementById('clear_button_mural');
    clear_muralfinder.addEventListener('click', e => {
        clear_muralfinder.setAttribute('loading', true);
        setTimeout(removerRoutes, 750);
    });

    // Search Widget Div Logic
    // Wire-up expand events
    CalciteMapsArcGIS.setSearchExpandEvents(searchWidgetNav);

    function syncSearch(view) {
        searchWidgetNav.view = view;
        if (app.searchWidgetNav.selectedResult) {
            watchUtils.whenTrueOnce(view, "ready", function () {
                searchWidgetNav.autoSelect = false;
                searchWidgetNav.search(app.searchWidgetNav.selectedResult.name);
                searchWidgetNav.autoSelect = true;
            });
        };
    };
    //end of search widget
    mapView.popup.actions = [];

    //Mural Finder Section
    let domSwitch = document.getElementById('switch');
    let test = document.getElementById('test');
    test.addEventListener("click", e => {
        console.log(e);
    })

    //Mural Finder Closest Facility Section
    function addLoading() {
        domSwitch.setAttribute('loading', true); //switches button to loading state
        setTimeout(removeLoading, 1000); //runs removeloading function
    }

    function removeLoading() { //Function that runs the findclosestfacility function using the value from a selector
        console.log("finding facilities...")
        domSwitch.removeAttribute('loading');
        let domNumber = document.getElementById('muralFinder').value; //selects how many murals to show routes
        if (domNumber === '') {
            domSwitch.setAttribute("color", "red"), domSwitch.innerHTML = 'Please select a valid number'
        } else {
            findClosestFacility(addStartGraphic(mapView.center), domNumber), domSwitch.innerHTML = 'Mural(s) Found!', domSwitch.setAttribute("color", "blue")
        };
    }
    domSwitch.addEventListener("click", e => {
        setTimeout(addLoading, 50); //adds delay and runs addloading function
        console.log(e);
    })

    function findClosestFacility(startFeature, facilityNumber = 3) {
        const closestFacilityTask = new ClosestFacilityTask({
            url: "https://route-api.arcgis.com/arcgis/rest/services/World/ClosestFacility/NAServer/ClosestFacility_World/solveClosestFacility/",
        });
        const params = new ClosestFacilityParameters({
            incidents: new FeatureSet({
                features: [startFeature],
            }),
            facilities: datasetURL, //dataset line 102
            returnRoutes: true,
            returnFacilities: true,
            defaultTargetFacilityCount: facilityNumber,
        });
        closestFacilityTask.solve(params).then(
            (results) => {
                showRoutes(results.routes);
                console.log(results.routes);
            },
            (error) => {
                console.log(error.details);
            }
        );
    }

    function addStartGraphic(point) {
        mapView.graphics.removeAll();
        const graphic = new Graphic({
            symbol: {
                type: "simple-marker",
                color: [255, 255, 255, 1.0],
                size: 8,
                outline: {
                    color: [50, 50, 50],
                    width: 1,
                },
            },
            geometry: point,
        });
        mapView.graphics.add(graphic);
        return graphic;
    }

    function showRoutes(routes) {
        // Show the routes to the closest facilities
        routesLayer.removeAll();
        routes.forEach((route, i) => {
            route.symbol = routeSymbol;
            routesLayer.add(route);
        });
    }
    //end of Mural Finder Section
    //START OF QUERY SECTION
    let params = new Query({
        returnGeometry: true,
        orderByFields: ["Tour_Number"],
        outFields: ["*"],
        where: "Tour_Number > 0" //EXPRESSION FOR THE QUERY
    });

    /*
    starts query that gets all the tours in order to populate the filter mural
    */
    facilitiesFeatureLayer.queryFeatures(params) //RETURNS A PROMISE
        .then(getLatestRegion)
        .then(addToSelector)

    /*
    This function gets all the attributes from the region field
    and then pass it to the addToSelector function
    */
    function getLatestRegion(result) {
        var features = result.features; //stores result features into a variable features
        console.log("getting latest region data")
        var values = features.map((features) => {
            return features.attributes.Region
        }) //isolates the region attribute to the value variable
        var region = values.map((value) => {
            return value
        }) //makes a region array
        var allRegions = Array.from(new Set(region)) //removes the duplicates from the region attribute field


        // mural list section
        const list = document.getElementById('muraldiv');
        features.forEach(murals => {
            const attr = murals.attributes;
            const content = document.createElement('div');
            content.addEventListener('click', () => {
                mapView.goTo({
                    target: murals,
                    zoom: 17,
                    padding: {
                        top: 0, //Buffer for the header
                        right: 0,
                        bottom: 120,
                        left: 0
                    },
                }, {
                    speedFactor: 0.5
                });
                mapView.popup.open({
                    features: [murals],
                    location: murals.geometry
                })
            });
            content.className = 'container-1'
            content.innerHTML = `
                                    <div class="box-1">
                                        <img class="thumbnail" src="${attr.Image_URL}"> </img>
                                    </div>
                                    <div class="box-2"
                                        <h3>
                                            ${attr.Mural_Name}
                                        </h3>
                                        <p>
                                            Region: ${attr.Region}<br>
                                            Tour Number: ${attr.Tour_Number}
                                        </p
                                    </div>  
                                `;


            list.appendChild(content);
        })
        // mural list section END

        return allRegions
    };
    let selector = document.getElementById("latestmural");
    /*
    This function appends the region attributes to the dropdown list called latestmural
     */
    function addToSelector(region) {
        regions = region.map(x => '<option>' + x + '</option>');
        /*makes an array of option tags with region attribute innerhtml */
               selector.innerHTML += regions; /*ADDS the regions option tag array to the innerhtml of the selector latestmural */
    }

    /*
    determines the todays date and subtracts 90 days from that date to determine recent mural
    */
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() - 2).padStart(2, '0'); /*replace -2 = minus 90 days in the past, set to 1 for present month*/
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);

    let latestMuralexp = ("CreationDate >= date '" + today + "'");
    let latestmuralbutton = document.getElementById("latestmural");

    /*
    Defines the definition expression of the feature layer from a dropdown list called latestmural
    Value is derived from id latestmural and from the function addToSelector
     */
    latestmuralbutton.addEventListener("change", (e) => {
        value = e.target.options[latestmuralbutton.selectedIndex].value;
        if (value == 1) {
            return facilitiesFeatureLayer.definitionExpression = "1=1"
        } /*All Murals*/
        if (value == 2) {
            return facilitiesFeatureLayer.definitionExpression = latestMuralexp;
        } /*Recently added Murals */
        if (value != 1 || value != 2) {
            return facilitiesFeatureLayer.definitionExpression = "Region = '" + value + "'";
        } /*Regions*/
    });
});