import {Containers, DefaultState, Tabs, TSDBStatus, TypographyFunctions} from "./types";
import {Data} from "../Table/types";
import {useRef} from "preact/compat";

export const typographyValues: TypographyFunctions = {
  labelValueCountByLabelName: (value: number): string => `Top ${value} label names with value count`,
  seriesCountByLabelValuePair: (value: number): string => `Top ${value} series count by label value pairs`,
  seriesCountByMetricName: (value: number): string => `Top ${value} series count by metric names`,
};

export const progressCount = (totalSeries: number, key: string, row: Data): Data => {
  if (key === "seriesCountByMetricName") {
    row.progressValue = row.value / totalSeries * 100;
    return row;
  }
  return row;
};

export const defaultProperties = (tsdbStatus: TSDBStatus) => {
  return Object.keys(tsdbStatus).reduce((acc, key) => {
    if (key === "numSeries") return acc;
    return {
      ...acc,
      tabs:{
        ...acc.tabs,
        [key]: ["table", "graph"],
      },
      containerRefs: {
        ...acc.containerRefs,
        [key]: useRef<HTMLDivElement>(null),
      },
      defaultState: {
        ...acc.defaultState,
        [key]: 0,
      },
    };
  }, {
    tabs:{} as Tabs,
    containerRefs: {} as Containers<HTMLDivElement>,
    defaultState: {} as DefaultState,
  });
};
