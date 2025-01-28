import React, { useState } from "react";
import { useForm, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Create = () => {
    const [isLoading, setLoading] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        description: "",
        amount: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("spendings.add"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Location Details
                </h2>
            }
        >
            <Head title="Add Spending" />
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="enter the amount here"
                        type="decimal"
                        name="amount"
                        onChange={(e) => setData("amount", e.target.value)}
                        required
                    />

                    <input
                        placeholder="add some description/name to remember"
                        type="text"
                        name="description"
                        onChange={(e) => setData("description", e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};
export default Create;
