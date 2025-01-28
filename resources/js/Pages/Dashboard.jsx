import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="h-full w-full text-white">
                <div className="inline">
                    <div className="bg-[#00000095] w-full p-5">
                        <p>Welcome to E-wallet</p>
                        <br />
                        <p>A web application to save your daily transactions</p>
                        <p>
                            As of now you can just enter your expenses, but
                            eventually you shoul be able to input your savings
                            as well.
                        </p>
                        <br />
                        <p>
                            Use the button bellow to navigate to spendings form.
                        </p>
                    </div>

                    <a href={route("spending.addForm")}>
                        <button className="p-3 m-5 bg-gradient-to-r from-[#00000095] to-blue-500 hover:bg-gradient-to-r hover:from-[#ffffff85] hover:to-blue-800 rounded-md">
                            Enter new spending
                        </button>
                    </a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
