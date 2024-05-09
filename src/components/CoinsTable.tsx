'use client';

import { CoinsData } from '@/types/coin';
import { Pagination, Table } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const CoinsTable = ({
	coins,
	total,
}: {
	coins: CoinsData[];
	total: number;
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pageParam = searchParams.get('page');

	const page = pageParam ? +pageParam : 1;

	const start = page > 1 ? (page - 1) * 100 + 1 : page;

	const rows = coins.map((coin, index) => (
		<Table.Tr
			key={coin.CoinInfo.Id}
			className="cursor-pointer hover:bg-[var(--mantine-color-default-hover)]"
			onClick={() => router.push(`/coins/${coin.CoinInfo.Name}`)}
		>
			<Table.Td>Star</Table.Td>
			<Table.Td>{start + index}</Table.Td>
			<Table.Td>
				<Link href={`/coins/${coin.CoinInfo.Name}`}>
					<div className="flex gap-2 items-center">
						<Image
							src={`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
							alt=""
							width={24}
							height={24}
						/>
						<span className="max-w-[150px]">{coin.CoinInfo.FullName}</span>
						<span>{coin.CoinInfo.Name}</span>
					</div>
				</Link>
			</Table.Td>
			<Table.Td>{coin.DISPLAY?.USD.PRICE ?? ''}</Table.Td>
			<Table.Td>{coin.DISPLAY?.USD.CHANGEPCTHOUR ?? ''}</Table.Td>
			<Table.Td>{coin.DISPLAY?.USD.CHANGEPCT24HOUR ?? ''}</Table.Td>
			<Table.Td>{coin.DISPLAY?.USD.MKTCAP ?? ''}</Table.Td>
			<Table.Td>{coin.DISPLAY?.USD.TOTALVOLUME24HTO ?? ''}</Table.Td>
			<Table.Td>{coin.DISPLAY?.USD.SUPPLY ?? ''}</Table.Td>
			<Table.Td>
				<Image
					src={`https://images.cryptocompare.com/sparkchart/${coin.CoinInfo.Name}/USD/latest.png`}
					alt=""
					height={35}
					width={150}
				/>
			</Table.Td>
		</Table.Tr>
	));

	return (
		<>
			<Pagination
				total={total}
				value={page}
				onChange={(page) => {
					router.push(page === 1 ? '/' : `/?page=${page}`);
				}}
				className="flex justify-center"
			/>
			<Table stickyHeader stickyHeaderOffset={60}>
				<Table.Thead className="!top-0">
					<Table.Tr>
						<Table.Th></Table.Th>
						<Table.Th>#</Table.Th>
						<Table.Th align="right">Name</Table.Th>
						<Table.Th>Price</Table.Th>
						<Table.Th>1h%</Table.Th>
						<Table.Th>24h%</Table.Th>
						<Table.Th>Market Cap</Table.Th>
						<Table.Th>Volume(24h)</Table.Th>
						<Table.Th>Circulating Supply</Table.Th>
						<Table.Th>Last 7 Days</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
			<Pagination
				total={total}
				value={page}
				onChange={(page) => {
					router.push(page === 1 ? '/' : `/?page=${page}`);
				}}
				className="flex justify-center"
			/>
		</>
	);
};

export default CoinsTable;
