'use client'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export function Features() {
    return (
        <section className="px-4 py-16 md:py-32">
            <div className="mx-auto grid max-w-5xl md:grid-cols-2">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-white/80 flex items-center gap-2">
                            <MapIcon className="size-4 text-white/70" />
                            Real time location tracking
                        </span>

                        <p className="mt-8 text-2xl font-semibold text-white">Advanced tracking system, Instantly locate all your assets.</p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-[--radius] bg-white/10 z-[1] border border-white/20 relative flex size-fit w-fit items-center gap-2 px-3 py-1 text-xs font-medium text-white shadow-md shadow-black/5">
                                <span className="text-lg">🇨🇩</span> Last connection from DR Congo
                            </div>
                            <div className="rounded-[--radius] bg-white/10 absolute inset-2 -bottom-2 mx-auto border border-white/20 px-3 py-4 text-xs font-medium text-white shadow-md shadow-black/5"></div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 from-white/5 to-transparent absolute inset-0"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t border-white/10 bg-zinc-50/10 p-6 sm:p-12 md:border-0 md:border-l md:border-white/10 dark:bg-transparent">
                    <div className="relative z-10">
                        <span className="text-white/80 flex items-center gap-2">
                            <MessageCircle className="size-4 text-white/70" />
                            Email and web support
                        </span>

                        <p className="my-8 text-2xl font-semibold text-white">Reach out via email or web for any assistance you need.</p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex justify-center items-center size-5 rounded-full border border-white/50">
                                    <span className="size-3 rounded-full bg-[hsl(var(--accent-blue))]"/>
                                </span>
                                <span className="text-white/70 text-xs">Sat 22 Feb</span>
                            </div>
                            <div className="rounded-[--radius] bg-white/10 border border-white/20 mt-1.5 w-3/5 p-3 text-xs text-white">Hey, I'm having trouble with my account.</div>
                        </div>

                        <div>
                            <div className="rounded-[--radius] mb-1 ml-auto w-3/5 bg-[hsl(var(--accent-blue))] p-3 text-xs text-white">Molestiae numquam debitis et ullam distinctio provident nobis repudiandae deleniti necessitatibus.</div>
                            <span className="text-white/70 block text-right text-xs">Now</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y border-white/10 p-12">
                    <p className="text-center text-4xl font-semibold lg:text-7xl text-white">99.99% Uptime</p>
                </div>
                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-white/80 flex items-center gap-2">
                            <Activity className="size-4 text-white/70" />
                            Activity feed
                        </span>

                        <p className="my-8 text-2xl font-semibold text-white">
                            Monitor your application's activity in real-time. <span className="text-white/60"> Instantly identify and resolve issues.</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    )
}

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#2563eb',
    },
    mobile: {
        label: 'Mobile',
        color: '#60a5fa',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', desktop: 56, mobile: 224 },
    { month: 'June', desktop: 56, mobile: 224 },
    { month: 'January', desktop: 126, mobile: 252 },
    { month: 'February', desktop: 205, mobile: 410 },
    { month: 'March', desktop: 200, mobile: 126 },
    { month: 'April', desktop: 400, mobile: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
                <Area strokeWidth={2} dataKey="mobile" type="stepBefore" fill="url(#fillMobile)" fillOpacity={0.1} stroke="var(--color-mobile)" stackId="a" />
                <Area strokeWidth={2} dataKey="desktop" type="stepBefore" fill="url(#fillDesktop)" fillOpacity={0.1} stroke="var(--color-desktop)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}
