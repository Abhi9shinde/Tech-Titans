import React from 'react';
import SustainableAlternatives from '../components/SustainableAlternatives';

export default function Solutions() {
    return (
        <div className='min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-white'>
            <div className="container mx-auto px-4 py-10 text-center pt-32">
                {/* Title */}
                <div className="text-green-500 text-5xl font-extrabold mb-8">
                    SOLUTIONS
                </div>

                {/* YouTube Video Container */}
                <div className="relative pb-9/16 mb-1 rounded-lg overflow-hidden shadow-lg flex justify-center">
                    <iframe
                        width="70%"
                        height="600em"
                        src="https://www.youtube.com/embed/1N__hQh102g?si=U9xjjOMJt9HhU5m7"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
                <p className='text-neutral-400 mb-10 text-right mr-52'>Credits: High Intensity Health
                </p>


                {/* Sustainable Alternatives Section */}
                <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
                    <SustainableAlternatives />
                </div>
            </div>
        </div>
    );
}
