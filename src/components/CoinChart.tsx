'use client';

import { LineChart } from '@mantine/charts';
import React from 'react';

const CoinChart = ({ data }: { data: any }) => {
	const formatXAxis = (tickItem: string) => {
		const hours = +tickItem.substring(0, 2);

		if (hours % 2 === 0) {
			return `${hours}:00`; // Display hours every 2 hours
		} else {
			return '';
		}
	};

	return (
		<LineChart
			h={300}
			data={data}
			dataKey="date"
			series={[{ name: 'Price', color: 'indigo.6' }]}
			yAxisProps={{ domain: [] }}
			xAxisProps={{
				tickFormatter: formatXAxis,
			}}
			lineProps={{
				dot: false,
			}}
		/>
	);
};

export default CoinChart;
