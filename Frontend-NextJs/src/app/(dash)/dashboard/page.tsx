import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import Logout from "@/components/Logout";
import { auth } from "@/auth";

import { redirect } from "next/navigation";
import DashboardUI from "./dashboard-ui";

const HomePage = async () => {
    const session = await auth();

    if (!session?.user) redirect("/");

    return (
        <div>
            <DashboardUI/>
        </div>
    );
};

export default HomePage;

