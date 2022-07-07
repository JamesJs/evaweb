import React, { PureComponent } from "react";
import "./styles.css";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Janeiro",
		meses: 500,
	},
	{
		name: "Fevereiro",
		meses: 50,
	},
	{
		name: "Março",
		meses: 200,
	},
	{
		name: "Abril",
		meses: 100,
	},
	{
		name: "Maio",
		meses: 5,
	},
];

export default class ChartBar extends PureComponent {
	static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

		render() {
		return (
			<>
				<h2>Número de destilações</h2>
				<ResponsiveContainer width="100%" height="100%" minWidth={300}>
					<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="meses" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			</>
		);
	}
}
