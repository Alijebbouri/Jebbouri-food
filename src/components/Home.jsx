import React from 'react'

function Home() {
    const date = new Date();
  return (
    <div>
        <div className="max-w-sm mt-24 m-auto rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Jebbouri Ali</div>
                <p className="text-gray-700 text-base">
                   This Store was Coded By ALI JEBBOURI &copy; all right reserved {date.getFullYear()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home