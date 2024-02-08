import React, { useRef, useLayoutEffect, useState } from 'react';

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import am4geodata_data_countries2 from "@amcharts/amcharts5-geodata/data/countries2";
import { Card, CardContent, CardHeader, Fab, Grid, IconButton, Typography } from '@mui/material';

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Box } from '@mui/system';
import CustomAvatar from 'src/@core/components/mui/avatar'
import { numberFormatInShort } from 'src/helpers';

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import Filter from './Filter';

interface DataType {
  icon: string
  title: string
  amount: string
  trendNumber: string
  avatarColor: ThemeColor
  trend?: 'positive' | 'negative'
}

const data: DataType[] = [
  {
    title: 'Customers',
    amount: '12346',
    icon: 'tabler:headphones',
    trendNumber: '0.3%',
    avatarColor: 'success'
  },
  {
    title: 'Estimates',
    amount: '8734',
    trendNumber: '2.1%',
    avatarColor: 'info',
    icon: 'tabler:chef-hat'
  },
  {
    title: 'Networks',
    amount: '967',
    trend: 'negative',
    trendNumber: '1.4%',
    icon: 'tabler:network',
    avatarColor: 'warning'
  },
  {
    title: 'Vendors',
    amount: '345',
    trendNumber: '8.5%',
    icon: 'tabler:affiliate-filled',
    avatarColor: 'primary'
  }
]

function Map({ provinces = [] }) {
  const [isBack, setIsBack] = useState<boolean>(false);
  const [countryGeoData, setCountryGeoData] = useState<any>([]);
  const [polygonSeries, setPolygonSeries] = useState<any>([]);
  const mapRef: any = useRef(null);

  const handleClick = (e: any) => {
    console.log(e.target.innerText)
  }

  useLayoutEffect(() => {
    /* Map code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    const root = am5.Root.new("chartdiv");
    let currentCountryGeoData: any = {};
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    const map = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      projection: am5map.geoMercator(),
      layout: root.horizontalLayout
    }));
    mapRef.current = map;

    // Create polygon series for continents
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = map.series.push(am5map.MapPolygonSeries.new(root, {
      calculateAggregates: true,
      valueField: "value"
    }));

    loadGeodata();

    // am5.net.load("https://www.amcharts.com/tools/country/?v=xz6Z", chart).then(function (result) {
    //   console.log({result})
    //   let geo = am5.JSONParser.parse(result.response);
    //   loadGeodata(geo.country_code);
    // });

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}: {value}",
      interactive: true
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x7367F0)
    });

    polygonSeries.mapPolygons.template.events.on("click", function (ev: any) {
      const name: string = ev.target.dataItem.dataContext;
      loadProvinceData(name)
    });
    setPolygonSeries(polygonSeries);

    // Functions


    function loadGeodata(country: string = 'CA') {

      // Default map
      let defaultMap = "usaLow";

      if (country == "US") {
        map.set("projection", am5map.geoAlbersUsa());
      } else {
        map.set("projection", am5map.geoMercator());
      }
      // calculate which map to be used
      let currentMap = defaultMap;
      let title = "";
      if (am4geodata_data_countries2[country] !== undefined) {
        currentMap = am4geodata_data_countries2[country]["maps"][0];

        // add country title
        if (am4geodata_data_countries2[country]["country"]) {
          title = am4geodata_data_countries2[country]["country"];
        }
      }

      am5.net.load("https://cdn.amcharts.com/lib/5/geodata/json/" + currentMap + ".json", map).then(function (result: any) {
        let geodata = am5.JSONParser.parse(result.response);
        let data: any = [];
        for (var i = 0; i < geodata.features.length; i++) {
          let name = geodata.features[i].properties.name;
          let province: any = provinces.find((province: any) => province.name == name) || {};
          data.push({
            id: geodata.features[i].id,
            name: name,
            value: province?.customer_count || 0,
            data: province
          });
        }
        currentCountryGeoData = geodata;
        setCountryGeoData(geodata);
        polygonSeries.set("geoJSON", geodata);
        polygonSeries.data.setAll(data)
      });


      // chart.seriesContainer.children.push(am5.Label.new(root, {
      //   x: 5,
      //   y: 5,
      //   text: title,
      //   background: am5.RoundedRectangle.new(root, {
      //     fill: am5.color(0xffffff),
      //     fillOpacity: 0.2
      //   })
      // }))

    }

    function loadProvinceData(data: any = {}) {
      if (Object.keys(data).length) {
        polygonSeries.set("geoJSON", {
          type: currentCountryGeoData.type,
          features: currentCountryGeoData.features.filter((feature: any) => feature.id == data.id)
        });
        polygonSeries.data.setAll(data)
        // map.seriesContainer.children.push(am5.Label.new(root, {
        //   x: 0,
        //   y: 0,
        //   text: data.name,
        //   background: am5.RoundedRectangle.new(root, {
        //     fill: am5.color(0xffffff),
        //     fillOpacity: 0.2
        //   })
        // }))
        setIsBack(true);
      }
    }

    // Bubbles

    // // Add globe/map switch
    // let cont = map.children.push(am5.Container.new(root, {
    //   layout: root.horizontalLayout,
    //   x: 20,
    //   y: 40
    // }));

    // cont.children.push(am5.Label.new(root, {
    //   centerY: am5.p50,
    //   text: "Map"
    // }));

    // let switchButton = cont.children.push(
    //   am5.Button.new(root, {
    //     themeTags: ["switch"],
    //     centerY: am5.p50,
    //     icon: am5.Circle.new(root, {
    //       themeTags: ["icon"]
    //     })
    //   })
    // );

    // cont.children.push(
    //   am5.Label.new(root, {
    //     centerY: am5.p50,
    //     text: "Globe"
    //   })
    // );


    return () => {

      root.dispose();
    };
  }, []);

  const handleReload = () => {
    let data = [];
    for (var i = 0; i < countryGeoData.features.length; i++) {
      let name = countryGeoData.features[i].properties.name;
      let province: any = provinces.find((province: any) => province.name == name) || {};
      data.push({
        id: countryGeoData.features[i].id,
        name: name,
        value: province?.customer_count || 0,
        data: province
      });
    }
    setCountryGeoData(countryGeoData);
    polygonSeries.set("geoJSON", countryGeoData);
    polygonSeries.data.setAll(data)
    setIsBack(false);
  }

  return (
    <Card>
      <CardHeader
        title='Reports Through Map'
        subheaderTypographyProps={{ sx: { mt: '0 !important' } }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size='small'
              aria-label='reload'
              onClick={() => handleReload()}
              sx={{ mr: 2, color: 'text.secondary' }}
            >
              <Icon icon='tabler:reload' fontSize={20} />
            </IconButton>
            <Filter />
          </Box>
        }
      />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Card>
              <CardHeader
                title='Map Statics'
                action={isBack ? <Fab
                  color='primary'
                  size='small'
                  aria-label='reload'
                  onClick={() => handleReload()}
                >
                  <Icon icon='tabler:arrow-back-up' fontSize={20} />
                </Fab> : undefined}
              />
              <CardContent>
                {data.map((item: DataType, index: number) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: index !== data.length - 1 ? [7, 7, 6.25, 7] : undefined
                      }}
                    >
                      <CustomAvatar
                        skin='light'
                        variant='rounded'
                        color={item.avatarColor}
                        sx={{ mr: 4, width: 34, height: 34 }}
                      >
                        <Icon icon={item.icon} />
                      </CustomAvatar>
                      <Box
                        sx={{
                          rowGap: 1,
                          columnGap: 4,
                          width: '100%',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography sx={{ mr: 4, fontWeight: 500, color: 'text.secondary' }}>{numberFormatInShort(item.amount)}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                })}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
              </CardContent>
            </Card>
          </Grid>
        </Grid >
      </CardContent>
    </Card>

  );
}
export default Map;