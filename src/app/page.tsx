import CoinsTable from '@/components/CoinsTable';
import { CoinsResponse } from '@/types/coin';
import { notFound } from 'next/navigation';

const fetchCoins = async (page: number = 0, limit: number = 100) => {
	const res = await fetch(
		`https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=${limit}&tsym=USD&page=${page}`
	);

	const coins = await res.json();

	return coins as CoinsResponse;
};

export default async function Home({
	searchParams: { page },
}: {
	searchParams: { page?: string };
}) {
	const _page = page ? +page - 1 : 0;

	try {
		const data = await fetchCoins(_page);
		return (
			<main className="py-8">
				<div className="max-w-7xl m-auto">
					<CoinsTable
						coins={data.Data}
						total={Math.ceil(data.MetaData.Count / 100)}
					/>
				</div>
			</main>
		);
	} catch (error) {
		notFound();
	}
}
