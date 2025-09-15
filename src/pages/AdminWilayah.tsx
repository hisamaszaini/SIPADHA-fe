import React, { useState } from 'react';

import { WilayahProvider } from '../contexts/wilayahContext';
import DukuhTab from '../components/wilayah/DukuhTab';
import RwTab from '../components/wilayah/RwTab';
import RtTab from '../components/wilayah/RtTab';

const AdminWilayah: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dukuh' | 'rw' | 'rt'>('dukuh');

    const handleTabChange = (tab: 'dukuh' | 'rw' | 'rt') => {
        setActiveTab(tab);
    };

    return (
        <WilayahProvider>
            <div className="w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
                <header className="p-4 md:p-6 border-b border-gray-200">
                    <h2 className="text-base md:text-xl font-bold text-gray-800">
                        Manajemen Wilayah Administrasi
                    </h2>
                </header>

                <nav className="p-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleTabChange('dukuh')} className={`py-2 px-4 rounded-lg font-bold transition-all ${activeTab === 'dukuh' ? 'bg-emerald-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                            Dukuh
                        </button>
                        <button onClick={() => handleTabChange('rw')} className={`py-2 px-4 rounded-lg font-bold transition-all ${activeTab === 'rw' ? 'bg-emerald-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                            RW
                        </button>
                        <button onClick={() => handleTabChange('rt')} className={`py-2 px-4 rounded-lg font-bold transition-all ${activeTab === 'rt' ? 'bg-emerald-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                            RT
                        </button>
                    </div>
                </nav>

                <main className="flex-grow">
                    {activeTab === 'dukuh' && <DukuhTab />}
                    {activeTab === 'rw' && <RwTab />}
                    {activeTab === 'rt' && <RtTab />}
                </main>
            </div>
        </WilayahProvider>
    );
};

export default AdminWilayah;