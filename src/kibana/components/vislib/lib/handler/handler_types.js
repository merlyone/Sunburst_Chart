define(function (require) {
  return function HandlerTypeFactory(Private) {
    var pointSeries = Private(require('components/vislib/lib/handler/types/point_series'));

    /**
     * Handles the building of each visualization
     *
     * @return {Function} Returns an Object of Handler types
     */
    return {
      histogram: pointSeries.column,
      line: pointSeries.line,
      pie: Private(require('components/vislib/lib/handler/types/pie')),
      area: pointSeries.area,
      tile_map: Private(require('components/vislib/lib/handler/types/tile_map')),
      sunburst: Private(require('components/vislib/lib/handler/types/sunburst'))
    };
  };
});
