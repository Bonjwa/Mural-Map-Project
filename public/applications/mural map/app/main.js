var app;
var dianne;

/*
---Project Dependencies and Imports---
1.) The following dependencies and imports must be in order...
2.) Syntax: require([module1, module2],function(module1,module2){....code here....})
3.) Any missing characters, strings or wrong order will throw an error
 */
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
    //----project depenencies and imports end----

    /*
    don't remove or touch... 
    serves as a connection with AGOL
    */
    const secure = eval(function (p, a, c, k, e, d) {e = function (c) {return c};if (!''.replace(/^/, String)){while (c--) {d[c] = k[c] || c}k = [function (e) {return d[e]}];e = function () {return '\\w+'};c = 1};while (c--){if (k[c]) 
    {p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])}}return p}('"2-1-0"', 3, 3, 'ybED2Jt3hviwCQ|KvuKpDmY06kJOOkiE701ffiuT43BN5gwu|AAPK69758a65b76b414b924bfbcb77d69be0RuHgNYAhAiMPslP'.split('|'), 0, {}));
    // don't remove

    /*
    ---popup section---
    1.) the template variable contains the html code for the esri popup
    2.) the html code is enclosed by back quotes`` not quotation marks''
    3.) anything within a curly bracket {} refers to the attribute from mural feature layer defined by facilitiesFeatuerlayer
    */
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
    /*
    ---popup section end---
    */

    /**
    ---numbered pin label section---
    1.) labelTourNum variable defines the numbered pin style and is called in the facilitiesFeatureLayer labelingInfo Properties
    2.) labelExpressionInfo property defines the attribute used to label the feature layer
    3.) symbol property defines the actual style of the label
     */
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
    /**
     * ---numbered pin label section end---
     */

    //defines the route symbol for mural finder
    let routeSymbol = {
        type: "simple-line",
        color: [0, 245, 245, 0.75],
        width: "5",
    };
    const routesLayer = new GraphicsLayer();
    const facilitiesLayer = new GraphicsLayer();
    

    /**---layer variables section---
     * facilitiesFeatureLayer is the Mural Map data in arcgis online
     * datasetURL is a datafile layer that is used for the closestfacility function
     */

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
    /**
     * ---Layer variables section end---
     */



    /**
     * Esri out of the box section
     * this section contains the code specific to esri class instances
     * contains map, mapview, locate, search, and directions
     * general syntax for creating a new esri object is:
     *     let <variablename> = new <classname>({...properties here...})
     */

    // Map 
    let map = new Map({
        //defines which basemap to use
        basemap: "osm", 
        //adds featurelayer or graphic layer to the map
        layers: [routesLayer, facilitiesLayer, facilitiesFeatureLayer] 
    });
    // 2D View  
    let mapView = new MapView({
        //states which container in the html document to use
        container: "mapViewDiv", 
        //states which map to use in the mapview
        map: map, 
        zoom: 13,
        center: [-119.465459, 49.880083],
        //buffer or padding for the user interface of the map
        padding: { 
            top: 50, 
            right: 0,
            bottom: 0,
            left: 25
        },
        //popup settings, does not contain the template
        popup: { 
            dockEnabled: true, 
            dockOptions: {
                // Disables the dock button from the popup
                buttonEnabled: false,
                // Ignore the default sizes that trigger responsive docking
                breakpoint: false,
                // positions the popup bottom left
                position: 'top-left' 
            },
            collapsed: false
        }
    });

    //locate is the gps locator button
    let locator = new Locate({
        view: mapView,
    });
    //adds the locator to the topleft view
    mapView.ui.add(locator, 'top-left'); 

    //search widget
    let searchWidgetNav = new Search({
        //states the container to use in the html documentation
        container: "searchNavDiv", 
        //states which view to use
        view: mapView, 
        allPlaceholder: 'Find murals or address', 
        includeDefaultSources: false,
        //defines custom sources of our search bar widget
        sources: [{ 
            //mural map layer from AGOL
            layer: facilitiesFeatureLayer, 
            exactMatch: false,
            placeholder: 'Example: Ok Corral Mural',
            name: 'Murals',
            zoomScale: 5000, 
        }, {
            name: "Address",
            //hidden
            apiKey: secure, 
            singleLineFieldName: "SingleLine",
            //SETS address search to canada only
            countryCode:"CAN",  
            locator: new Locator({
                url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
            })
        }]
    });

    //directions widget
    const directions = new Directions({
        container: "layerlistDiv",
        view: mapView,
    });
    /**
     * Esri out of the box section end
     */

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
    //Function that runs the findclosestfacility function using the value from a selector
    function removeLoading() { 
        console.log("finding facilities...")
        domSwitch.removeAttribute('loading');
        //selects how many murals to show routes
        let domNumber = document.getElementById('muralFinder').value; 
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
    //queries the mural map layer and it RETURNS A PROMISE
    facilitiesFeatureLayer.queryFeatures(params) 
        //a returned promise returns data from AGOL and passes it through these functions
        .then(getLatestRegion)
        //data from the getlatestregion function is passed to addtoselector function
        .then(addToSelector)

    /*
    This function gets all the attributes from the region field
    and then pass it to the addToSelector function
    */
    function getLatestRegion(result) {
        //stores result features into a variable features
        var features = result.features; 
        console.log("getting latest region data")
        //isolates the region attribute to the value variable
        var values = features.map((features) => {
            return features.attributes.Region
        }) 
        //makes a region array
        var region = values.map((value) => {
            return value
        }) 
        //removes the duplicates from the region attribute field
        var allRegions = Array.from(new Set(region)) 


        /**
         * This section contains the code on how the mural list is created
         */

        //variable list contains the reference to the muraldiv container in the html document
        const list = document.getElementById('muraldiv');

        //for each feature do the following...
        features.forEach(murals => {
            //set attr to the mural attributes
            const attr = murals.attributes;
            //creates a new html div section
            const content = document.createElement('div');
            //run the following function when this new content div is clicked...
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
    esriConfig.apiKey=secure
    esriConfig.portalUrl='https://ctq.maps.arcgis.com/arcgis'
});