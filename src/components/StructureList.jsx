import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { structures } from '../data/anatomyData';

const StructureList = () => {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const types = ['All', ...new Set(structures.map((s) => s.type))];

    const filteredStructures = structures.filter((s) => {
        const matchesType = filter === 'All' || s.type === filter;
        const matchesSearch = s.nameTh.includes(searchTerm) || s.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">
                โครงสร้างร่างกาย (Anatomical Structures)
            </h1>

            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-center">
                <div className="flex flex-wrap gap-3">
                    {types.map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === type
                                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30 scale-105'
                                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-72">
                    <input
                        type="text"
                        placeholder="ค้นหา (Search)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-500"
                    />
                    <svg className="w-5 h-5 absolute right-4 top-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStructures.map((structure) => (
                    <Link
                        key={structure.id}
                        to={`/structures/${structure.id}`}
                        className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/20 border border-white/5"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">{structure.nameTh}</h2>
                            <span className="text-xs bg-white/10 text-teal-300 px-3 py-1 rounded-full border border-white/10">{structure.type}</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-4 font-medium tracking-wide">{structure.nameEn}</p>
                        <p className="text-slate-300 line-clamp-2 leading-relaxed">{structure.description}</p>
                        <div className="mt-6 flex items-center text-teal-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            ดูรายละเอียด <span className="ml-2">&rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StructureList;
