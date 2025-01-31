import { useForm } from "@inertiajs/react";
import { useState } from "react";

const Edit = ({ spendings }) => {
    const { data, setData, isProcessing, setIsProcessing, errors, reset } =
        useForm({
            amount: spendings.amount,
            description: spendings.description,
        });
};

export default Edit;
