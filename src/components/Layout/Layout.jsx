import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <div>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="center" reverseOrder={false} />
        </div>
    )
}