import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
    const [spendings, setSpendings] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get(route("spendings.get"));
        setSpendings(response.data.spendings);
    };

    return <AuthenticatedLayout></AuthenticatedLayout>;
};

export default List;

/*
<div className=" text-white">
                        <p>Your spendings</p>
                        {spendings.length > 0 ? (
                            spendings.map((spending) => (
                                <div className="inline p-5" key={spending.id}>
                                    <div>{spending.description}</div>
                                    <div>{spending.amount}</div>
                                </div>
                            ))
                        ) : (
                            <div>
                                <p>No records</p>
                            </div>
                        )}
                    </div>
*/
