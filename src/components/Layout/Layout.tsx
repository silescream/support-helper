import { Outlet } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Header } from "../Header/Header";
import './Layout.scss'

export const Layout = () => {
    return (
        <>
        <Dashboard />
        <div className="layout">
            <Header />
            <Outlet />
        </div>
        </>
    );
}