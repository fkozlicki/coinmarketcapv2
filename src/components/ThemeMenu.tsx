'use client';

import { ActionIcon, Button, Menu, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const ThemeMenu = () => {
	const [mounted, setMounted] = useState<boolean>(false);
	const { colorScheme, setColorScheme } = useMantineColorScheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="w-[34px] h-[34px]"></div>;
	}

	return (
		<Menu shadow="md" width={200}>
			<Menu.Target>
				<ActionIcon variant="outline" size="lg">
					{colorScheme === 'dark' ? (
						<IconMoon size={16} />
					) : (
						<IconSun size={16} />
					)}
				</ActionIcon>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Theme</Menu.Label>
				<Menu.Item
					onClick={() => setColorScheme('light')}
					leftSection={<IconSun size={16} />}
				>
					Light
				</Menu.Item>
				<Menu.Item
					onClick={() => setColorScheme('dark')}
					leftSection={<IconMoon size={16} />}
				>
					Dark
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};

export default ThemeMenu;
