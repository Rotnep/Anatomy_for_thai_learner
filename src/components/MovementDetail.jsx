import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movements, structures } from '../data/anatomyData';

const MovementDetail = () => {
    const { id } = useParams();
    const movement = movements.find((m) => m.id === id);

    if (!movement) {
        return <div className="text-center text-red-400">ไม่พบข้อมูลการเคลื่อนไหว (Movement not found)</div>;
    }

    const relatedMuscles = structures.filter((s) => movement.muscleIds.includes(s.id));

    return (
        <div>
            <Link to="/movements" className="text-teal-400 hover:underline mb-4 inline-block">&larr; กลับไปหน้ารายการ (Back)</Link>
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg">
                <h1 className="text-3xl font-bold mb-2 text-white">{movement.nameTh}</h1>
                <h2 className="text-xl text-slate-400 mb-6">{movement.nameEn}</h2>
                <p className="text-lg text-slate-300 mb-8">{movement.description}</p>

                <h3 className="text-2xl font-semibold mb-4 text-teal-300">กล้ามเนื้อที่เกี่ยวข้อง (Muscles Involved)</h3>
                {relatedMuscles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {relatedMuscles.map((muscle) => (
                            <Link
                                key={muscle.id}
                                to={`/structures/${muscle.id}`}
                                className="block bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors"
                            >
                                <div className="font-medium text-white">{muscle.nameTh}</div>
                                <div className="text-sm text-slate-400">{muscle.nameEn}</div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-slate-500 italic">ไม่มีข้อมูลกล้ามเนื้อ (No muscle data available)</p>
                )}
            </div>
        </div>
    );
};

export default MovementDetail;
