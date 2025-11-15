import { Card } from '@/components/ui/card';
import { TrendingUp, DollarSign } from 'lucide-react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 1200, forecast: 1250 },
  { month: 'Feb', revenue: 1350, forecast: 1400 },
  { month: 'Mar', revenue: 1280, forecast: 1450 },
  { month: 'Apr', revenue: 1520, forecast: 1500 },
  { month: 'May', revenue: 1680, forecast: 1600 },
  { month: 'Jun', revenue: 1820, forecast: 1750 },
];

export function RevenueChart() {
  return (
    <Card className="p-6 border-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-black text-[hsl(var(--navy))] flex items-center gap-2 mb-2">
            <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
            Revenue Growth
          </h3>
          <p className="text-sm font-semibold text-slate-600">
            Monthly recurring revenue vs forecast
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-5 w-5 text-green-600" />
            <span className="text-3xl font-black text-green-600">$1.82M</span>
          </div>
          <div className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
            ↑ 15.2% from last month
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2e6bff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2e6bff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              fontSize={12}
              fontWeight={600}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#94a3b8"
              fontSize={12}
              fontWeight={600}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                padding: '12px',
              }}
              labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
              formatter={(value: any) => [`$${value}K`, '']}
            />
            <Area
              type="monotone"
              dataKey="forecast"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#forecastGradient)"
              strokeDasharray="5 5"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2e6bff"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-8 mt-4 pt-4 border-t-2 border-slate-100">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[hsl(var(--accent-blue))]" />
          <span className="text-sm font-bold text-slate-600">Actual Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-sm font-bold text-slate-600">Forecast</span>
        </div>
      </div>
    </Card>
  );
}
