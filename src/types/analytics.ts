
export interface StatCardProps {
  title: string;
  value: number;
  icon: any;
  description: string;
  trend?: number;
}

export interface VisitorStats {
  date: string;
  visitors: number;
  details: number;
  calls: number;
}

export interface HourlyStats {
  hour: string;
  visitors: number;
}

export interface ServiceStats {
  name: string;
  value: number;
}

export interface SourceStats {
  subject: string;
  A: number;
}
