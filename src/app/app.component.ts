import { Component, Pipe, PipeTransform } from '@angular/core';
import { GeoSearch, LayerOptions, MapCache } from '@helgoland/map';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public fitBounds: L.LatLngBoundsExpression;
  public mapOptions: L.MapOptions = { dragging: true, zoomControl: true, boxZoom: true };
  public zoomControlOptions: L.Control.ZoomOptions = { position: 'bottomright' };
  public overlayMaps: Map<string, LayerOptions> = new Map<string, LayerOptions>();
  public baseMaps: Map<string, LayerOptions> = new Map<string, LayerOptions>();

  public mapId = 'map-view';

  constructor(
    private geoSearch: GeoSearch,
    private mapCache: MapCache
  ) {
    this.geoSearch.searchTerm('Wuppertal').subscribe(res => {
      this.fitBounds = res.bounds;
    });

    this.overlayMaps.set('Wupperverbandsgebiet',
      {
        label: 'Wupperverbandsgebiet',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '0',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Wassertemp.-Logger mobil / Wupperverband',
      {
        label: 'Wassertemp.-Logger mobil / Wupperverband',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '1',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Wassertemp.-Messstationen / Wupperverband',
      {
        label: 'Wassertemp.-Messstationen / Wupperverband',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '2',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Messstellen Fische / NRW',
      {
        label: 'Messstellen Fische / NRW',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '3',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Messstellen WRRL 2007-2009 / NRW',
      {
        label: 'Messstellen WRRL 2007-2009 / NRW',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '4',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Messstellen WRRL 2010 / NRW',
      {
        label: 'Messstellen WRRL 2010 / NRW',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '5',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Physikalisch-/chemische Messstellen / Wupperverband',
      {
        label: 'Physikalisch-/chemische Messstellen / Wupperverband',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '6',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Niederschlagsstationen / Wupperverband',
      {
        label: 'Niederschlagsstationen / Wupperverband',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '7',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Pegel',
      {
        label: 'Pegel',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '8',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Hochwasserrückhaltebecken',
      {
        label: 'Hochwasserrückhaltebecken',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '9',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Fischaufstieg',
      {
        label: 'Fischaufstieg',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '10',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

    this.overlayMaps.set('Querhindernis',
      {
        label: 'Querhindernis',
        visible: true,
        layer: L.tileLayer.wms('https://fluggs.wupperverband.de/secman_wss_v2/service/WMS_WV_Bauwerke_im_Gewaesser_Messstellen/guest?', {
          layers: '10',
          projection: 'EPSG:4326',
          format: 'image/png',
          transparent: true
        })
      }
    );

  }

  public toggleVisibility(layerkey) {
    const layer = this.overlayMaps.get(layerkey);
    layer.visible = !layer.visible;
    if (layer.visible) {
      this.mapCache.getMap(this.mapId).addLayer(layer.layer);
    } else {
      this.mapCache.getMap(this.mapId).removeLayer(layer.layer);
    }
  }

  public getLegendUrl(layerEntry: LayerOptions) {
    const layer = layerEntry.layer as L.TileLayer.WMS;
    const url = layer['_url'] + 'request=GetLegendGraphic&version=1.3.0&format=image/png&layer=' + layer.options.layers;
    return url;
  }
}

@Pipe({ name: 'getValues' })
export class GetValuesPipe implements PipeTransform {
  transform(map: Map<any, any>): any[] {
    const ret = [];

    map.forEach((val, key) => {
      ret.push({
        key: key,
        value: val
      });
    });

    return ret;
  }
}
