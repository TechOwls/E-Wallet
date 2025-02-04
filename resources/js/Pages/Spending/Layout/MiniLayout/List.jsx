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

    return (
        <AuthenticatedLayout>
            <div className="w-full bg-[#00000085]"></div>
        </AuthenticatedLayout>
    );
};

export default List;
