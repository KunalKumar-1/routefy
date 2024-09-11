/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TI7LOk9rnRY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveScatterPlot } from "@nivo/scatterplot"
import { ResponsivePie } from "@nivo/pie"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">DTC Bus Scheduler</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:text-secondary" prefetch={false}>
                  Schedules
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary" prefetch={false}>
                  Routes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary" prefetch={false}>
                  Fleet Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary" prefetch={false}>
                  Analytics
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-[300px_1fr] gap-6 p-6">
        <div className="bg-background rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Automated Scheduling</h2>
          <div className="grid gap-4">
            <div>
              <label htmlFor="passenger-demand" className="block font-medium mb-2">
                Passenger Demand
              </label>
              <input type="range" id="passenger-demand" min="0" max="100" className="w-full" />
            </div>
            <div>
              <label htmlFor="traffic-patterns" className="block font-medium mb-2">
                Traffic Patterns
              </label>
              <input type="range" id="traffic-patterns" min="0" max="100" className="w-full" />
            </div>
            <div>
              <label htmlFor="fleet-availability" className="block font-medium mb-2">
                Fleet Availability
              </label>
              <input type="range" id="fleet-availability" min="0" max="100" className="w-full" />
            </div>
            <Button className="justify-self-end">Generate Schedule</Button>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Dynamic Route Planning</h2>
          <div className="grid gap-4">
            <div>
              <label htmlFor="real-time-traffic" className="block font-medium mb-2">
                Real-Time Traffic
              </label>
              <input type="range" id="real-time-traffic" min="0" max="100" className="w-full" />
            </div>
            <div>
              <label htmlFor="passenger-demand" className="block font-medium mb-2">
                Passenger Demand
              </label>
              <input type="range" id="passenger-demand" min="0" max="100" className="w-full" />
            </div>
            <Button className="justify-self-end">Optimize Routes</Button>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-xl font-bold mb-4">Fleet Management</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Bus Locations</h3>
              <div className="w-full aspect-[4/3] rounded-lg" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Maintenance Status</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bus ID</TableHead>
                    <TableHead>Last Service</TableHead>
                    <TableHead>Next Service</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>DTC-001</TableCell>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>2023-07-15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>DTC-002</TableCell>
                    <TableCell>2023-03-20</TableCell>
                    <TableCell>2023-06-20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>DTC-003</TableCell>
                    <TableCell>2023-05-01</TableCell>
                    <TableCell>2023-08-01</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Deployment Status</h3>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span>Buses in Service</span>
                  <span className="font-medium">125</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Buses in Maintenance</span>
                  <span className="font-medium">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Buses Available</span>
                  <span className="font-medium">35</span>
                </div>
                <Button className="justify-self-end">Optimize Deployment</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-xl font-bold mb-4">Passenger Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Real-Time Updates</h3>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span>Route 101</span>
                  <span className="font-medium">On Time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Route 202</span>
                  <span className="font-medium">Delayed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Route 303</span>
                  <span className="font-medium">On Time</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Schedule Information</h3>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span>Route 101</span>
                  <span className="font-medium">Next Departure: 10:15 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Route 202</span>
                  <span className="font-medium">Next Departure: 11:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Route 303</span>
                  <span className="font-medium">Next Departure: 11:30 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-xl font-bold mb-4">Analytics and Reporting</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Ridership Analysis</h3>
              <LineChart className="w-full aspect-[4/3]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Resource Utilization</h3>
              <BarChart className="w-full aspect-[4/3]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Service Reliability</h3>
              <DotChart className="w-full aspect-[4/3]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Passenger Feedback</h3>
              <PieChart className="w-full aspect-[4/3]" />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6">
        <div className="flex items-center justify-between">
          <span>&copy; 2023 DTC Bus Scheduler</span>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:text-secondary" prefetch={false}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary" prefetch={false}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary" prefetch={false}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function DotChart(props) {
  return (
    <div {...props}>
      <ResponsiveScatterPlot
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear" }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}