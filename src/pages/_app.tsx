import '../styles/globals.css'

import type {AppProps} from 'next/app'
import {AppProvider} from "../data/context/AppContext"
import {AuthProvider} from "../data/context/AuthContext"

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <AuthProvider>
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </AuthProvider>
    )
}