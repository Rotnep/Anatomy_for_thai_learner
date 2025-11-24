import React from 'react';
import { Link } from 'react-router-dom';
import { movements } from '../data/anatomyData';

const MovementList = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">
                การเคลื่อนไหว (Movements)
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {movements.map((movement) => (
                    <Link
                        key={movement.id}
                        to={`/movements/${movement.id}`}
                        className="group glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/20 border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.5 11H3.67l5.87-5.88L8.12 3.71 1.41 10.41l6.71 6.71 1.42-1.42L3.67 13h16.83z" transform="rotate(180 12 12)" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-teal-300 transition-colors relative z-10">{movement.nameTh}</h2>
                        <p className="text-slate-400 text-sm mb-6 font-medium tracking-wide relative z-10">{movement.nameEn}</p>
                        <p className="text-slate-300 leading-relaxed relative z-10">{movement.description}</p>
                        <div className="mt-8 flex items-center text-teal-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                            เรียนรู้เพิ่มเติม <span className="ml-2">&rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovementList;
