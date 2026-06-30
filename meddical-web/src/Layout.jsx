import { Outlet } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";


export default function Layout() {
    return (
        <div>
            <HeaderBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div >
    );
};

