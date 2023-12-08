'use client'
// import PDFViewerComp from "@/components/PDFViewerComp";
import dynamic from "next/dynamic";
const PDFViewerComp = dynamic(() => import("@/components/PDFViewerComp"), {
    ssr: false,
});
import { useEffect, useState } from "react";

// Create Document Component
function BasicDocument() {

    const [formData, setFormData] = useState(
        {
            companyName: "Abc Company",
            address: "Lahore PK",
            phone: "9832643222",
            email: "hello@mywebsite.com",
            signature: "",
        }
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setViewerDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        const storedData = localStorage.getItem('formData');

        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setFormData(parsedData);
        }
    }, []);

    const [viewerDimensions, setViewerDimensions] = useState({ width: 0, height: 0 });

    const data = {
        viewerDimensions: {
            width: viewerDimensions.width,
            height: viewerDimensions.height,
        },
    }

    return (
        <PDFViewerComp viewerDimensions={{
            width: viewerDimensions.width,
            height: viewerDimensions.height,
        }}

            formData={{
                companyName: formData.companyName,
                address: formData.address,
                phone: formData.phone,
                email: formData.email,
                signature: formData.signature,
            }} />
    );
}

export default BasicDocument;