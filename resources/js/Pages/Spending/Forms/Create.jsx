import React, { useState } from "react";
import { useForm, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Create = (message) => {
    const { data, setData, post, errors, reset } = useForm({
        description: "",
        amount: null,
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        post(route("spendings.add"));
        setIsProcessing(false);
        reset();
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
            <div className="bg-[#00000070] rounded-lg">
                <div className="h-full w-full text-white">
                    <h1 className="flex justify-center italic">
                        This is where you save your budgets{" "}
                    </h1>
                    <br />
                    <div className="flex justify-center">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="amount">
                                <p className="italic">Amount</p>
                            </label>
                            <div className="rounded-lg">
                                <input
                                    placeholder="Enter the amount here"
                                    type="number"
                                    step="0.0001"
                                    name="amount"
                                    value={data.amount || ""}
                                    onChange={(e) =>
                                        setData("amount", e.target.value)
                                    }
                                    required
                                    className="rounded-lg p-2 text-black bg-[#ffffff85]"
                                />
                            </div>
                            <label htmlFor="decription">
                                <p className="italic">Description</p>
                            </label>
                            <div className="rounded-lg">
                                <input
                                    placeholder="Add some description"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    required
                                    className="rounded-lg text-black bg-[#ffffff85]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="pt-2 pb-2 pl-5 pr-5 bg-gradient-to-r from-[#00000095] to-blue-500 hover:bg-gradient-to-r hover:from-[#ffffff85] hover:to-blue-800 rounded-md"
                                disabled={isProcessing}
                            >
                                {isProcessing ? "Loading..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
