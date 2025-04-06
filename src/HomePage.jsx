// src/pages/HomePage.jsx

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const HomePage = () => {
    const mapRef = useRef(null);
    const parkingSpots = [
        {
            id: 1,
            name: "Central Plaza Parking",
            address: "123 Main St, Downtown",
            pricePerHour: 5,
            rating: 4.5,
            lat: 40.7128,
            lng: -74.0060
        },
        {
            id: 2,
            name: "Gateway Mall Parking",
            address: "456 Market St, Midtown",
            pricePerHour: 8,
            rating: 4.2,
            lat: 40.7580,
            lng: -73.9855
        },
        {
            id: 3,
            name: "Riverside Parking",
            address: "789 River Rd",
            pricePerHour: 4,
            rating: 4.8,
            lat: 40.7829,
            lng: -73.9654
        },
        // Add more parking spots as needed
    ];

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map', {
                center: [40.7128, -74.0060],
                zoom: 13,
            });
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapRef.current);

            parkingSpots.forEach(spot => {
                const marker = L.marker([spot.lat, spot.lng])
                    .bindPopup(`
                        <b>${spot.name}</b><br>
                        ${spot.address}<br>
                        $${spot.pricePerHour}/hour
                    `)
                    .addTo(mapRef.current);
            });
        }

        // Cleanup function
        return () => {
            mapRef.current?.remove();
        };
    }, []);

    const bookParking = (spotId) => {
        alert(`Booking parking spot ${spotId}`);
    };

    return (
        <div className="bg-gray-100">
            <nav className="bg-blue-600 text-white p-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">ParkEasy</h1>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                        Login
                    </button>
                </div>
            </nav>

            <main className="container mx-auto p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                    <div id="map" style={{ height: '60vh' }}></div>
                </div>

                <div className="scroll-container overflow-x-auto flex gap-4 pb-4 pt-2">
                    {parkingSpots.map(spot => (
                        <div key={spot.id} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{spot.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{spot.address}</p>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-green-600 font-bold">$${spot.pricePerHour}/hour</span>
                                    <span className="text-yellow-500">
                                        {"★".repeat(Math.floor(spot.rating))}
                                        {spot.rating % 1 !== 0 ? "½" : ""}
                                        <span className="text-gray-400">{ "☆".repeat(5 - Math.ceil(spot.rating)) }</span>
                                    </span>
                                </div>
                                <button onClick={() => bookParking(spot.id)} 
                                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
