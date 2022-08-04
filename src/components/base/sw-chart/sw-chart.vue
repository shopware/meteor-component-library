<template>
  <div
    v-if="!isLoading"
    class="sw-chart"
  >
    <template v-if="needOneDimensionalArray">
      <apexchart
        v-for="(serie, index) in optimizedSeries"
        :key="`multiple-chart-${index}`"
        v-bind="$attrs"
        :type="type"
        :options="mergedOptions"
        :series="serie.data"
        :height="height"
        v-on="$listeners"
      />
    </template>

    <apexchart
      v-else
      v-bind="$attrs"
      :type="type"
      :options="mergedOptions"
      :series="optimizedSeries"
      :height="height"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import objectMerge from 'lodash-es/merge';
import { deepCopyObject } from '../../../utils/object';

export default {
  name: 'SwChart',

  components: {
    apexchart: VueApexCharts,
  },

  inheritAttrs: false,

  props: {
    type: {
      type: String,
      required: true,
      validValues: [
        'line',
        'area',
        'bar',
        'radar',
        'histogram',
        'pie',
        'donut',
        'scatter',
        'bubble',
        'heatmap',
      ],
    },

    options: {
      type: Object,
      required: true,
    },

    series: {
      type: Array,
      required: true,
    },

    height: {
      type: Number,
      required: false,
      default: 400,
    },

    fillEmptyValues: {
      type: String,
      required: false,
      default: null,
      validator(givenValue) {
        return [
          'day',
          'hour',
          'minute',
        ].includes(givenValue);
      },
    },

    sort: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      localeConfig: null,
      isLoading: true,
    };
  },

  computed: {
    mergedOptions() {
      return objectMerge(
        {},
        this.defaultOptions,
        this.options,
        { labels: this.mergedLabels },
      );
    },

    mergedLabels() {
      return this.options.labels ? [...this.options.labels, ...this.generatedLabels] : this.generatedLabels;
    },

    optimizedSeries() {
      // when type needs different data structure
      if (this.needOneDimensionalArray) {
        return this.convertedSeriesStructure;
      }

      let optimizedSeries = deepCopyObject(this.series);

      if (this.fillEmptyValues) {
        optimizedSeries = this.addZeroValuesToSeries(optimizedSeries);
      }

      if (this.sort) {
        optimizedSeries = this.sortSeries(optimizedSeries);
      }

      return optimizedSeries;
    },

    convertedSeriesStructure() {
      return this.series.map((serie) => {
        const convertedData = serie.data.map((data) => data.y);

        return {
          name: serie.name,
          data: convertedData,
        };
      });
    },

    generatedLabels() {
      /**
       * It gets from each serie data all x values.
       *
       * Example: convert from
       * [
       *  {
       *      data: [
       *          {
       *              x: 84561,
       *              y: 9651
       *          },
       *          ...
       *      ],
       *      name: "Total"
       *  }
       *  ...
       * ]
       *
       * to
       *
       * [84561, ...]
       */
      return this.series
        .map((serie) => serie.data.map((data) => data.x))
        .flat();
    },

    needOneDimensionalArray() {
      return ['pie', 'donut'].indexOf(this.type) >= 0;
    },

    defaultLocale() {
      // todo: refactoring
      // const { adminLocaleLanguage } = Shopware.State.getters;
      //
      // // get all available languages in "apexcharts/dist/locales/**.json"
      // const languageFiles = require.context('../../../../../node_modules/apexcharts/dist/locales', false, /.json/);
      //
      // // change string from "./en.json" to "en"
      // const allowedLocales = languageFiles.keys()
      //   .map((filePath) => filePath.replace('./', ''))
      //   .map((filePath) => filePath.replace('.json', ''));
      //
      // if (allowedLocales.includes(adminLocaleLanguage)) {
      //   return adminLocaleLanguage;
      // }

      return 'en';
    },

    defaultOptions() {
      return {
        chart: {
          fontFamily: 'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif',
          toolbar: {
            show: false,
          },

          defaultLocale: this.defaultLocale,
          locales: [...(this.localeConfig ? [this.localeConfig] : [])],
          zoom: false,
        },

        markers: {
          size: 4,
          strokeWidth: 0,
          hover: {
            size: 8,
          },
        },

        stroke: {
          width: 2,
        },

        title: {
          margin: 0,
          style: {
            color: '#52667a',
            fontSize: '24px',
          },
        },

        tooltip: {
          theme: 'dark',
        },

        xaxis: {
          axisBorder: {
            show: false,
          },

          axisTicks: {
            show: false,
          },

          labels: {
            style: {
              colors: '#52667a',
            },
          },

          tooltip: {
            enabled: true,
            offsetY: 10,
          },
        },

        yaxis: {
          labels: {
            style: {
              color: '#52667a',
            },
          },
        },
      };
    },
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      return this.loadLocaleConfig().finally(() => {
        this.isLoading = false;
      });
    },

    sortSeries(series) {
      const newSeries = deepCopyObject(series);

      newSeries.forEach((serie) => {
        serie.data = serie.data.sort((a, b) => ((a.x && b.x) ? a.x - b.x : a - b));
      });

      return newSeries;
    },

    addZeroValuesToSeries(series) {
      // get zero values
      const zeroValues = this.getZeroValues();

      // copy series
      const newSeries = deepCopyObject(series);

      // add zero values for each serie
      newSeries.forEach((serie) => {
        zeroValues.forEach((zeroDate) => {
          const findDate = serie.data.find((date) => date.x === zeroDate.x);
          if (!findDate) {
            serie.data.push(zeroDate);
          }
        });
      });

      return newSeries;
    },

    setDateTime(date) {
      switch (this.fillEmptyValues) {
        case 'day':
        default:
          date.setHours(0, 0, 0, 0);
          break;
        case 'hour':
          date.setMinutes(0, 0, 0);
          break;
        case 'minute':
          date.setSeconds(0, 0);
          break;
      }

      return date;
    },

    incrementByTimeUnit(date) {
      switch (this.fillEmptyValues) {
        case 'day':
        default:
          date.setDate(date.getDate() + 1);
          break;
        case 'hour':
          date.setHours(date.getHours() + 1);
          break;
        case 'minute':
          date.setMinutes(date.getMinutes() + 1);
          break;
      }

      return date;
    },

    getZeroValues() {
      // check if empty dates should filled and xaxis is datetime
      if (!(
        (this.fillEmptyValues)
        && this.options.xaxis && this.options.xaxis.type === 'datetime'
      )) {
        return [];
      }

      // check if min date is provided
      if (!this.options.xaxis.min) {
        console.warn('To fill dates without values you have to set a min value timestamp for the xaxis');
        return [];
      }

      // get timestamps for start date
      const fromDate = new Date();
      fromDate.setTime(this.options.xaxis.min);
      this.setDateTime(fromDate);
      const fromDateTimestamp = fromDate.getTime();

      // get timestamps for end date
      let toDateTimestamp;
      if (this.options.xaxis.max) {
        // if user has custom max value
        toDateTimestamp = this.options.xaxis.max;
      } else {
        // get actual day
        const toDate = new Date();
        this.setDateTime(toDate);
        toDate.getTime();
        toDateTimestamp = toDate.getTime();
      }

      // get timestamps between min and now
      const zeroTimestamps = [];

      const indexDate = new Date(fromDateTimestamp);

      // while index date is lower than toDate
      while (indexDate.getTime() < toDateTimestamp) {
        // add index date with zero value to array
        zeroTimestamps.push({
          x: indexDate.getTime(),
          y: 0,
        });

        // go to next date unit
        this.incrementByTimeUnit(indexDate);
      }

      return zeroTimestamps;
    },

    async loadLocaleConfig() {
      const { defaultLocale } = this;

      // ESLint can´t understand template strings in this import context
      /* eslint-disable-next-line prefer-template */
      const localeConfigModule = await import('apexcharts/dist/locales/' + defaultLocale + '.json');

      this.localeConfig = localeConfigModule?.default;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.apexcharts-canvas {
  .apexcharts-tooltip.dark {
    background: $color-darkgray-500;
    color: $color-white;

    .apexcharts-tooltip-series-group.active {
      padding-top: 4px;
    }

    .apexcharts-tooltip-title {
      background: none;
      border-bottom-width: 0;
    }
  }

  .apexcharts-xaxistooltip.dark {
    background: $color-darkgray-500;
  }

  .apexcharts-xaxistooltip.dark::before,
  .apexcharts-xaxistooltip.dark::after {
    border-bottom-color: $color-darkgray-500;
  }
}
</style>
