import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { structures } from '../data/anatomyData';
import ModelViewer from './ModelViewer';

const StructureDetail = () => {
    const { id } = useParams();
    const structure = structures.find((s) => s.id === id);

    if (!structure) {
        return <div className="text-center text-red-400 mt-20">ไม่พบข้อมูลโครงสร้าง (Structure not found)</div>;
    }

    const relatedStructures = structures.filter((s) => structure.relatedIds.includes(s.id));

    return (
        <div className="animate-fade-in">
            <Link to="/structures" className="text-slate-400 hover:text-white mb-6 inline-flex items-center transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                กลับไปหน้ารายการ (Back)
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Info */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-4 mb-3">
                            <h1 className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                {structure.nameTh}
                            </h1>
                            <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-500/30 backdrop-blur-sm">
                                {structure.type}
                            </span>
                        </div>
                        <h2 className="text-2xl text-slate-400 font-light tracking-wide">{structure.nameEn}</h2>
                    </div>

                    <div className="glass rounded-2xl p-8 border border-white/10">
                        <h3 className="text-lg font-semibold text-teal-400 mb-4 uppercase tracking-wider text-xs">Description</h3>
                        <p className="text-lg text-slate-300 leading-relaxed font-light">
                            {structure.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                            <span className="w-1 h-6 bg-teal-500 rounded-full mr-3"></span>
                            โครงสร้างที่เกี่ยวข้อง (Related Structures)
                        </h3>
                        {relatedStructures.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {relatedStructures.map((related) => (
                                    <Link
                                        key={related.id}
                                        to={`/structures/${related.id}`}
                                        className="block glass p-4 rounded-xl hover:bg-white/10 transition-all border border-white/5 hover:border-teal-500/50 group"
                                    >
                                        <div className="font-medium text-white group-hover:text-teal-300 transition-colors">{related.nameTh}</div>
                                        <div className="text-sm text-slate-400">{related.nameEn}</div>
                                        <div className="text-xs text-teal-500/70 mt-2 uppercase tracking-wider">{related.type}</div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-slate-500 italic">ไม่มีข้อมูลที่เกี่ยวข้อง (No related data)</p>
                        )}
                    </div>
                </div>

                {/* Right Column: 3D Model */}
                <div className="lg:sticky lg:top-24 h-fit">
                    <div className="glass rounded-2xl p-1 border border-white/10 shadow-2xl shadow-teal-900/10">
                        <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/70 border border-white/10">
                            Interactive 3D Model
                        </div>
                        <ModelViewer type={structure.type} />
                        <div className="p-4 text-center text-slate-500 text-sm">
                            หมุนเพื่อดูรอบๆ (Rotate to view)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StructureDetail;
