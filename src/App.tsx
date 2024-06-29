import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

//import './features/Counter/index.module.css'
//import {HomePage} from './pages/HomePage/HomePage'
import { history, store } from './store/store.tsx'
import MainLayout from "./MainLayout/MainLayout.tsx";
import {HomePage} from "./pages/HomePage/HomePage.tsx";
import Catalog from './widgets/Catalog/Catalog.tsx'


const App: React.FC = () => {
    return (
        <ReduxStoreProvider store={store}>
            <HistoryRouter history={history}>
                <Routes  >
                    <Route  path="/" element={
                        <MainLayout/>
                    }>
                    <Route path="/" element={<HomePage />} />
                    </Route>
                    <Route  path="/catalog" element={
                        <MainLayout/>
                    }>
                    <Route path="/catalog" element={<Catalog/>} />
                    </Route>
                </Routes>
            </HistoryRouter>
        </ReduxStoreProvider>
    )
}

export default App
