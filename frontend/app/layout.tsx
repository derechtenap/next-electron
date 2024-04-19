import '@mantine/core/styles.css'
import './globals.css'

import {
	ColorSchemeScript,
	type MantineColorScheme,
	MantineProvider,
	createTheme,
} from '@mantine/core'

type RootLayoutProps = {
	children: React.ReactNode
}

export const metadata = {
	title: 'NextJS + Electron Boilerplate',
	description:
		'A neat boilerplate for building Electron apps, with NextJS at the frontend and pre-configured with a bunch of handy development tools.',
}

export default function RootLayout({ children }: RootLayoutProps) {
	/*
	 * By setting `ColorSchemeScript` and `MantineProvider` to `auto`, the app
	 * will automatically adapt to the user's OS color scheme. However, users
	 * can override this behavior by setting the scheme to either `light` or
	 * `dark` in the app settings.
	 */
	const defaultColorScheme: MantineColorScheme = 'auto'

	const appTheme = createTheme({
		// Add theme overrides here.
		primaryColor: 'green',
	})

	return (
		<html lang="en">
			<head>
				<ColorSchemeScript defaultColorScheme={defaultColorScheme} />
			</head>
			<body>
				<MantineProvider
					defaultColorScheme={defaultColorScheme}
					theme={appTheme}
				>
					{children}
				</MantineProvider>
			</body>
		</html>
	)
}
