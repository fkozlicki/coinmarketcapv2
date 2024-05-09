import CoinChart from '@/components/CoinChart';
import { LineChart } from '@mantine/charts';
import dayjs from 'dayjs';
import React from 'react';

// https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=3&e=CCCAGG
// https://min-api.cryptocompare.com/data/v2/histohour?fsym=XMR&tsym=USD&limit=24&aggregate=3&e=CCCAGG
// https://min-api.cryptocompare.com/data/v2/histominute?aggregate=1&e=CCCAGG&fsym=BTC&limit=1450&tryConversion=false&tsym=USD

const fetchCoin = async (name: string) => {
	const res = await fetch(
		`https://min-api.cryptocompare.com/data/v2/histominute?aggregate=10&e=CCCAGG&fsym=${name}&limit=144&tryConversion=false&tsym=USD`
	);

	const coin = await res.json();

	return coin;
};

export default async function Coin({
	params: { name },
}: {
	params: { name: string };
}) {
	const data = await fetchCoin(name);

	const chartData = data.Data.Data.map((item) => ({
		date: dayjs(item.time * 1000).format('HH:mm'),
		Price: item.high,
	}));

	return (
		<div className="max-w-4xl m-auto">
			<CoinChart data={chartData} />
		</div>
	);
}
