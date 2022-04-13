import React, { useEffect } from "react";
import { SketchFab } from "../../app/sketchfab";
import { ModelCard } from "../components/model-card";

export const Dashboard = () => {
    const sketchfab = new SketchFab();
    useEffect(() => {
        (async () => {
            console.log(await sketchfab.search("bear"))
        })()
    }, [])
    return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center	no-scrollbar">
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                    <ModelCard></ModelCard>
                </div>
            </div>
        </div>
    )
}