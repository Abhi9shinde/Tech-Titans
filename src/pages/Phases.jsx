
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Phases() {
    const data = [
        // PHASE 1
        {
            title: (
                <span className="text-green-500">PHASE 1:</span>
            ),
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-bold mb-8">
                        <span className="text-white">Raw Material Extraction</span>
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        1. Tree Cutting:
                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Paper cups are primarily made from wood pulp, leading to <span className="text-green-500 font-semibold">deforestation</span>.
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        2. Plastic Production:
                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Most cups are lined with <span className="text-green-500 font-semibold">polyethylene</span> (a petroleum-based plastic) for waterproofing. Extracting and refining petroleum for plastic is energy-intensive and causes <span className="text-green-500 font-semibold">greenhouse gas emissions</span>.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/tree_cutting.jpg"
                            alt="treecutting"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/tree_cutting2.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/plastic1.avif"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/plastic2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        // PHASE 2
        {
            title: (
                <span className="text-green-500">PHASE 2:</span>
            ),
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-bold mb-8">
                        <span className="text-white"> Manufacturing Process</span>
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        1. Energy Consumption:
                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Paper cup production involves <span className="text-green-500 font-semibold">cutting</span> , <span className="text-green-500 font-semibold" >pulping</span>, and processing wood, which consumes <span className="text-green-500 font-semibold">large amounts of energy from fossil fuels</span>.Manufacturing the plastic lining further adds to energy demands.
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        2. Water Usage:
                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        The paper-making process requires <span className="text-green-500 font-semibold">significant amounts of water</span>, contributing to water scarcity in certain regions.
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        3. Chemical Pollution:
                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Chemicals like bleach, used to whiten the paper, <span className="text-green-500 font-semibold">release harmful by-products </span> into the environment.Emissions from factories can lead to air pollution and contribute to global warming
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/energyImage.png"
                            alt="treecutting"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/energyImage2.png"
                            alt="startup template"
                            width={100}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/chemicalCup.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/water.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        // PHASE 3
        {
            title: (
                <span className="text-green-500">PHASE 3:</span>
            ),
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-bold mb-8">
                        <span className="text-white">Transportation</span>
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        1. Carbon Footprint:
                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Cups are transported from manufacturing facilities to distributors, retailers, and end-users.This long supply chain generates a <span className="text-green-500 font-semibold">carbon footprint due to fuel consumption and emissions</span> from vehicles.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/carbon_foot3.webp"
                            alt="treecutting"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/carbon_foot2.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/carbon_foot1.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/carbon_foot4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        // PHASE 4?
        {
            title: (
                <span className="text-green-500">PHASE 4:</span>
            ),
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-bold mb-8">
                        <span className="text-white">Usage Phase</span>
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        1. Single-Use Nature:

                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Paper cups are designed for <span className="text-green-500 font-semibold">short-term</span> use (usually a few minutes to hours).This short lifespan results in a high volume of waste being generated daily.

                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/usage.png"
                            alt="treecutting"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/usage2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        // PHASE 5
        {
            title: (
                <span className="text-green-500">PHASE 5:</span>
            ),
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-bold mb-8">
                        <span className="text-white">Disposal Phase</span>
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        1. Landfills:

                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Most paper cups are <span className="text-green-500 font-semibold">not biodegradable due to their plastic lining</span>, so they persist in landfills for decades. In landfills, paper cups release methane, a potent greenhouse gas, as they decompose.

                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        2. Recycling Challenges:

                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        The plastic and paper components in cups are <span className="text-green-500 font-semibold">bonded, making them difficult and expensive to recycle</span>. As a result, less than 1% of paper cups are recycled globally.

                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        3. Ocean Pollution:

                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Cups discarded improperly can enter water bodies, breaking down into <span className="text-green-500 font-semibold">microplastics that harm marine life</span>.

                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/phase51.jpg"
                            alt="treecutting"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/phase52.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        // PHASE 6
        {
            title: (
                <span className="text-green-500">PHASE 6:</span>
            ),
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-bold mb-8">
                        <span className="text-white">Long-Term Environmental Impact</span>
                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        1. Microplastic Pollution:

                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        Over time, the plastic lining in cups disintegrates into microplastics, contaminating soil and water. Microplastics can <span className="text-green-500 font-semibold">persist in ecosystems for hundreds of years</span>, entering the food chain and affecting wildlife and humans.

                    </p>
                    <p
                        className="text-white dark:text-neutral-200 text-xs md:text-2xl font-semibold mb-2">
                        1. Loss of Resources:
                    </p>
                    <p
                        className="text-gray-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8 pl-20">
                        The non-recyclable nature of paper cups means the resources (trees, water, and energy) used to create them are effectively wasted.

                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/microPlastic1.webp"
                            alt="treecutting"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <img
                            src="/images/microPlastic2.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
