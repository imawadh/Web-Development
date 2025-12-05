'use client'

export default function Signup() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4 border-2 rounded-2xl p-8">

                {/* Row 1 */}
                <div className="grid grid-cols-2 items-center">
                    <label htmlFor="username">User Name</label>
                    <input 
                        type="text" 
                        id="username"
                        placeholder="Enter your name"
                        className="border rounded p-2"
                    />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 items-center">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        placeholder="Enter your password"
                        className="border rounded p-2"
                    />
                </div>

                {/* Button centered */}
                <div className="flex justify-center mt-2">
                    <button 
                        type="button"
                        className="p-2 bg-blue-500 text-white rounded w-40"
                    >
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
}
