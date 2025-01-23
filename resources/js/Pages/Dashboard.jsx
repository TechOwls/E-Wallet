import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
    const [imageSrc, setImageSrc] = useState(
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKQZyQQ698LKS2V5niAusFpPkHoxe2Dh66jJa29POQ1qTnn9X3bPuZHQq_FMeLtH2wjGhCwWWOkGVgUMpaPNzrF7_A0v9S_0vlkCwfNw7nnoNIh-oJwFtYLWqufShSbtqkajwltpUV-a3dC7CRQzzbeYg1MDMviQcG7KiZcVQJ_EzTuFQxMe1IhX5EtA/s1600-rw/CITYSCAPE1142023.png"
    );
    const [divPosition, setDivPosition] = useState();

    const [componentsVisible, setComponentsVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            setImageSrc(
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKQZyQQ698LKS2V5niAusFpPkHoxe2Dh66jJa29POQ1qTnn9X3bPuZHQq_FMeLtH2wjGhCwWWOkGVgUMpaPNzrF7_A0v9S_0vlkCwfNw7nnoNIh-oJwFtYLWqufShSbtqkajwltpUV-a3dC7CRQzzbeYg1MDMviQcG7KiZcVQJ_EzTuFQxMe1IhX5EtA/s1600-rw/CITYSCAPE1142023.png"
            );
            setComponentsVisible(true);
        } else {
            setImageSrc(
                "https://blogger.googleusercontent.com/img/a/AVvXsEhyYghHDYidrhbYQBpIFuLKRNaJqnY_2nxXfteCDSm_cn5OHJI7_oevA_8oaPdavvTqx89m0z42dGp1WtuKT1HJdsZySCLgFY871v61dmncmFqMyRk1Hb-9q9cPDfbJtGC7Vc5CCVwbm3I4mMimN4FdQMxS9mMvjfDAfs8CEL52cEHfvbxpvVVqrW23gg8=s1600-rw"
            );
            setComponentsVisible(true);
        }
        if (scrollPosition % 10 === 0) {
            setDivPosition("left");
        } else {
            setDivPosition("right");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="inline">
                <div className="relative">
                    <img src={imageSrc} alt="Dynamic Scenery" />
                    {componentsVisible && (
                        <div
                            className={`z-10 h-[100%] absolute top-0 left-0 text-white p-4 ${
                                divPosition === "left" ? "left-0" : "right-0"
                            }`}
                        >
                            <h1>Hello there</h1>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
