/**
 * @file Factory.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

interface IMetric {
  createMetric: (type: string, data: number[]) => Metric;
}

const FAN_METRIC = "FAN_METRIC";
const WIND_METRIC = "WIND_METRIC";

class MetricFactory {
  createMetric(type: string, data: number[]) {
    switch (type) {
      case FAN_METRIC:
        return new FanMetric(data);
      case WIND_METRIC:
        return new WindMetric(data);
      default:
        return null;
    }
  }
}

class Metric {
  private data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  getRawData(): number[] {
    return this.data;
  }
}

class FanMetric extends Metric {}

class WindMetric extends Metric {}

export { MetricFactory, Metric, FAN_METRIC, WIND_METRIC };

// USAGE

const metricFactory = new MetricFactory();

const fanData: number[] = [1, 2, 3, 4, 5];
const fanMetric: Metric = metricFactory.createMetric(FAN_METRIC, fanData);
console.log("fanMetric", fanMetric);

const windData: number[] = [1, 2, 3, 4, 5];
const windMetric: Metric = metricFactory.createMetric(WIND_METRIC, windData);
console.log("windMetric", windMetric);
