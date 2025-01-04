import React, { useRef } from 'react';
import FindMatchButton from '@/components/buttons/FindMatchButton';
import useBingo from '@/hooks/useBingo';

function Landing() {
    const inputNameRef = useRef<HTMLInputElement>(null); // Create a ref for the input element
    const { isFinding, findMatch, cancelFindMatch } = useBingo();

    const handleFindMatch = () => {
        const inputName = inputNameRef.current?.value || "safeZone" // Fallback to default if ref is null or empty
        findMatch(inputName);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Welcome to the Game</h1>
                <p className="text-gray-400 mb-6">Enter your name to start playing</p>
                <input
                    ref={inputNameRef} // Attach the ref to the input element
                    type="text"
                    defaultValue={"guest#" + Math.floor(Math.random() * 100).toString()} // Default value for the input
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <FindMatchButton
                    cancelFindMatch={cancelFindMatch}
                    isFinding={isFinding}
                    findMatch={handleFindMatch}
                />
            </div>
        </div>
    );
}

export default Landing;