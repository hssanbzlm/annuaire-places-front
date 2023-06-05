export interface pieChartDataType {
  labels: string[];
  datasets: [{ data: number[] }];
}

export interface radarChartDataType {
  labels: string[];
  datasets: [{ data: number[]; label: string }];
}

export interface ListingsParCountry {
  country: string;
  listings: number;
}
