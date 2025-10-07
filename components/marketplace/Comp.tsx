"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { RxCaretDown } from "react-icons/rx";
import { TbFlag3Filled } from "react-icons/tb";

// Mock Data
const datasets = {
  daily: [
    { date: "09/01", price: 140 },
    { date: "09/02", price: 145 },
    { date: "09/03", price: 150 },
    { date: "09/04", price: 142 },
    { date: "09/05", price: 155 },
    { date: "09/06", price: 162 },
  ],
  weekly: [
    { date: "08/01", price: 120 },
    { date: "08/08", price: 145 },
    { date: "08/15", price: 160 },
    { date: "08/22", price: 150 },
    { date: "08/29", price: 170 },
  ],
  monthly: [
    { date: "05/01", price: 90 },
    { date: "06/01", price: 110 },
    { date: "07/01", price: 135 },
    { date: "08/01", price: 150 },
    { date: "09/01", price: 165 },
  ],
};

const baseTimeRanges = ["1M", "3M", "6M", "12M"];
const extraTimeRanges = ["24H", "YTD"];

export default function Comp() {
  const [selectedData, setSelectedData] =
    React.useState<"daily" | "weekly" | "monthly">("daily");
  const [selectedRange, setSelectedRange] = React.useState("7D");
  const [showAllRanges, setShowAllRanges] = React.useState(false);

  const handleRangeClick = (range: string) => {
    if (range === "ALL") {
      setShowAllRanges((prev) => !prev);
      setSelectedRange("");
    } else {
      setSelectedRange(range);
      setShowAllRanges(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand">
        Recent Card Sales
      </h3>

      <Card className="w-full border-0 bg-transparent">
        <CardHeader className="flex flex-col lg:flex-row lg:items-center md:justify-between gap-4 border-b border-white/10 pb-3">
          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full flex-wrap">
            {/* Dataset Selector */}
            <Select
              value={selectedData}
              onValueChange={(value: "daily" | "weekly" | "monthly") =>
                setSelectedData(value)
              }
            >
              <SelectTrigger className="border-2 border-brand gap-7 px-4 !bg-transparent w-full sm:w-auto !text-white !text-base md:!text-lg !h-auto !py-3 font-semibold focus-visible:ring-0">
                <SelectValue placeholder="Select Grade" />
                <RxCaretDown className="text-brand" size={20} />
              </SelectTrigger>
              <SelectContent className="bg-dark border-white/10 text-white shadow-lg rounded-lg">
                <SelectItem value="daily">PSA 8.5</SelectItem>
                <SelectItem value="weekly">PSA 9.5</SelectItem>
                <SelectItem value="monthly">PSA 10.5</SelectItem>
              </SelectContent>
            </Select>

            {/* Time Range Toggle */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[...baseTimeRanges, ...(showAllRanges ? extraTimeRanges : [])].map(
                (range) => (
                  <Button
                    key={range}
                    size="sm"
                    variant="ghost"
                    className={cn(
                      "uppercase !text-xs sm:!text-sm !font-bold px-4 sm:px-6 py-2 rounded-md text-white border border-brand hover:text-white hover:bg-white/10 transition-all duration-200",
                      selectedRange === range &&
                        "bg-brand text-dark font-semibold shadow-sm"
                    )}
                    onClick={() => handleRangeClick(range)}
                  >
                    {range}
                  </Button>
                )
              )}

              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleRangeClick("ALL")}
                className={cn(
                  "uppercase !text-xs sm:!text-sm !font-bold px-4 sm:px-6 py-2 rounded-md text-white border border-brand hover:text-white hover:bg-white/10 transition-all duration-200",
                  showAllRanges && "bg-brand text-dark font-semibold shadow-sm"
                )}
              >
                All
              </Button>
            </div>
          </div>

          {/* Right-aligned text */}
          <CardTitle className="text-white flex items-center gap-2 text-sm md:text-base shrink-0 text-right font-bold mt-2 md:mt-0 md:text-right">
           <TbFlag3Filled className="text-brand" size={20} /> Report Problem
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-4 pb-8 bg-card">
          <div className="w-full h-[300px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={datasets[selectedData]}
                margin={{ top: 20, right: 30, bottom: 40, left: 0 }}
              >
                <CartesianGrid
                  vertical={false}
                  stroke="rgba(255,255,255,0.3)"
                  strokeDasharray="0"
                />
                <XAxis
                  dataKey="date"
                  stroke="#aaa"
                  tick={{
                    fill: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                    dy: 20,
                  }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#aaa"
                  tick={{
                    fill: "#00FFAE",
                    fontSize: 12,
                    fontWeight: 600,
                    dx: -10,
                  }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(20,20,20,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    padding: "8px 12px",
                  }}
                  labelStyle={{ color: "#fff" }}
                  formatter={(value) => [`$${value}`, "Price"]}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#00FFAE"
                  strokeWidth={3}
                  dot={{
                    r: 3,
                    fill: "#00FFAE",
                    strokeWidth: 2,
                    stroke: "#111",
                  }}
                  activeDot={{
                    r: 5,
                    fill: "#fff",
                    stroke: "#00FFAE",
                    strokeWidth: 2,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
