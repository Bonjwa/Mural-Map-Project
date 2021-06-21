var app;
require(["esri/tasks/Locator", "esri/tasks/QueryTask", "esri/tasks/support/Query", "esri/tasks/support/DataFile", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/tasks/ClosestFacilityTask", "esri/tasks/support/ClosestFacilityParameters", "esri/widgets/Locate", "esri/tasks/support/FeatureSet", "esri/geometry/Point", "esri/symbols/Symbol", "esri/config", "esri/Map", "esri/Basemap", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Search", "esri/core/watchUtils", "esri/widgets/Directions", "dojo/query", "calcite-maps/calcitemaps-v0.10", "calcite-maps/calcitemaps-arcgis-support-v0.10", "bootstrap/Collapse", "bootstrap/Dropdown", "bootstrap/Tab", "dojo/domReady!", ], function (Locator, QueryTask, Query, DataFile, Graphic, GraphicsLayer, ClosestFacilityTask, ClosestFacilityParameters, Locate, FeatureSet, Point, Symbol, esriConfig, Map, Basemap, MapView, FeatureLayer, Search, watchUtils, Directions, query, CalciteMaps, CalciteMapsArcGIS, ) {
    const template = {
        title: `<div class="container-2"><div class="c-logo"><img src="{Logo_URL}"></div><div class="m-name">{Mural_Name}</div></div>`,
        lastEditInfoEnabled: false,
        content: `<div class="popupImage"><a href="{Image_URL}?nodirect=1"><img src="{Image_URL}?nodirect=1"alt="{Mural_Name}"/></a></div><div class="popupImageCaption">Tour Number:{Tour_Number}</div><div class="popupDescription"><p class="info"><span class="esri-icon-documentation"></span>{Description}</p><p class="info">Artist:{Artist}</p><p class="info">Year Painted:{Year}</p><p class="info">Address:{Address}</p><p class="info"><span class="esri-icon-map-pin"></span>Location:{location}</p><p class="info"><span class="esri-icon-link"></span>Links:<br><a href="{Mural_URL}">{Mural_URL_Label}<br></a><a href="{Artist_URL}">{Artist_URL_Label}<br></a><a href="{Artist_URL_2}">{Artist_URL_Label_2}</a><p></div>`
    };
    let labelTourNum = {
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
        definitionExpression: "1=1",
        labelingInfo: [labelTourNum],
    });
    const networkServiceUrl = 'https://services6.arcgis.com/dUO3N3UOHvGU89bM/arcgis/rest/services/Murals_20201103/FeatureServer/';
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
    esriConfig.apiKey = "AAPK69758a65b76b414b924bfbcb77d69be0RuHgNYAhAiMPslP-KvuKpDmY06kJOOkiE701ffiuT43BN5gwu-ybED2Jt3hviwCQ";
    let map = new Map({
        basemap: "osm",
        layers: [routesLayer, facilitiesLayer, facilitiesFeatureLayer]
    });
    let mapView = new MapView({
        container: "mapViewDiv",
        map: map,
        zoom: 13,
        center: [-119.465459, 49.880083],
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 25
        },
        popup: {
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: false,
                breakpoint: false,
                position: 'top-left'
            },
            collapsed: false
        }
    });
    let locator = new Locate({
        view: mapView,
    });
    mapView.ui.add(locator, {
        position: "top-left"
    });
    let searchWidgetNav = new Search({
        container: "searchNavDiv",
        view: mapView,
        allPlaceholder: 'Find address or murals',
        includeDefaultSources: false,
        sources: [{
            layer: facilitiesFeatureLayer,
            exactMatch: false,
            placeholder: 'Example: Ok Corral Mural',
            name: 'Murals',
            zoomScale: 5000,
        }, {
            name: "Address",
            placeholder: "example: Nuuk, GRL",
            apiKey: "AAPK69758a65b76b414b924bfbcb77d69be0RuHgNYAhAiMPslP-KvuKpDmY06kJOOkiE701ffiuT43BN5gwu-ybED2Jt3hviwCQ",
            singleLineFieldName: "SingleLine",
            locator: new Locator({
                url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
            })
        }]
    });
    const directions = new Directions({
        container: "layerlistDiv",
        view: mapView,
    });
    query("#selectBasemapPanel").on("change", function (e) {
        mapView.map.basemap = e.target.options[e.target.selectedIndex].dataset.vector
    });
    let clear_directions = document.getElementById('clear_button_directions');
    clear_directions.addEventListener("click", e => {
        clear_directions.setAttribute('loading', true);
        setTimeout(removerRoutes, 750)
    });

    function removerRoutes() {
        console.log('Clearing Routes...');
        routesLayer.removeAll();
        mapView.graphics.removeAll();
        directions.viewModel.reset();
        clear_directions.removeAttribute('loading');
        clear_muralfinder.removeAttribute('loading');
        domSwitch.setAttribute('color', 'neutral');
        domSwitch.innerHTML = 'Find Closest Mural(s)!'
    };
    let clear_muralfinder = document.getElementById('clear_button_mural');
    clear_muralfinder.addEventListener('click', e => {
        clear_muralfinder.setAttribute('loading', true);
        setTimeout(removerRoutes, 750)
    });
    CalciteMapsArcGIS.setSearchExpandEvents(searchWidgetNav);

    function syncSearch(view) {
        searchWidgetNav.view = view;
        if (app.searchWidgetNav.selectedResult) {
            watchUtils.whenTrueOnce(view, "ready", function () {
                searchWidgetNav.autoSelect = false;
                searchWidgetNav.search(app.searchWidgetNav.selectedResult.name);
                searchWidgetNav.autoSelect = true
            })
        }
    }
    mapView.popup.actions = [];
    let domSwitch = document.getElementById('switch');
    let test = document.getElementById('test');
    test.addEventListener("click", e => {
        console.log(e)
    });

    function addLoading() {
        domSwitch.setAttribute('loading', true);
        setTimeout(removeLoading, 1000)
    }

    function removeLoading() {
        console.log("finding facilities...");
        domSwitch.removeAttribute('loading');
        let domNumber = document.getElementById('muralFinder').value;
        if (domNumber === '') {
            domSwitch.setAttribute("color", "red"), domSwitch.innerHTML = 'Please select a valid number'
        } else {
            findClosestFacility(addStartGraphic(mapView.center), domNumber), domSwitch.innerHTML = 'Mural(s) Found!', domSwitch.setAttribute("color", "blue")
        }
    }
    domSwitch.addEventListener("click", e => {
        setTimeout(addLoading, 50);
        console.log(e)
    });

    function findClosestFacility(startFeature, facilityNumber = 3) {
        const closestFacilityTask = new ClosestFacilityTask({
            url: "https://route-api.arcgis.com/arcgis/rest/services/World/ClosestFacility/NAServer/ClosestFacility_World/solveClosestFacility/",
        });
        const params = new ClosestFacilityParameters({
            incidents: new FeatureSet({
                features: [startFeature],
            }),
            facilities: datasetURL,
            returnRoutes: true,
            returnFacilities: true,
            defaultTargetFacilityCount: facilityNumber,
        });
        closestFacilityTask.solve(params).then((results) => {
            showRoutes(results.routes);
            console.log(results.routes)
        }, (error) => {
            console.log(error.details)
        })
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
        return graphic
    }

    function showRoutes(routes) {
        routesLayer.removeAll();
        routes.forEach((route, i) => {
            route.symbol = routeSymbol;
            routesLayer.add(route);
        })
    }
    let params = new Query({
        returnGeometry: true,
        orderByFields: ["Tour_Number"],
        outFields: ["*"],
        where: "Tour_Number > 0"
    });
    facilitiesFeatureLayer.queryFeatures(params).then(getLatestRegion).then(addToSelector);

    function getLatestRegion(result) {
        var features = result.features;
        console.log("getting latest region data");
        var values = features.map((features) => {
            return features.attributes.Region
        });
        var region = values.map((value) => {
            return value
        });
        var allRegions = Array.from(new Set(region));
        const list = document.getElementById('muraldiv');
        features.forEach(murals => {
            const attr = murals.attributes;
            const content = document.createElement('div');
            content.addEventListener('click', () => {
                mapView.goTo({
                    target: murals,
                    zoom: 17,
                    padding: {
                        top: 0,
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
            content.className = 'container-1';
            content.innerHTML = `<div class="box-1"><img class="thumbnail"src="${attr.Image_URL}"></img></div><div class="box-2"<h3>${attr.Mural_Name}</h3><p>Region:${attr.Region}<br>Tour Number:${attr.Tour_Number}</p</div>`;
            list.appendChild(content)
        });
        return allRegions
    };
    let selector = document.getElementById("latestmural");

    function addToSelector(region) {
        regions = region.map(x => '<option>' + x + '</option>');
        selector.innerHTML += regions;
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() - 2).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
    let latestMuralexp = ("CreationDate >= date '" + today + "'");
    let latestmuralbutton = document.getElementById("latestmural");
    latestmuralbutton.addEventListener("change", (e) => {
        value = e.target.options[latestmuralbutton.selectedIndex].value;
        if (value == 1) {
            return facilitiesFeatureLayer.definitionExpression = "1=1"
        }
        if (value == 2) {
            return facilitiesFeatureLayer.definitionExpression = latestMuralexp
        }
        if (value != 1 || value != 2) {
            return facilitiesFeatureLayer.definitionExpression = "Region = '" + value + "'"
        }
    })
});