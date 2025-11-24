import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MovementList from './components/MovementList';
import MovementDetail from './components/MovementDetail';
import StructureList from './components/StructureList';
import StructureDetail from './components/StructureDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <div className="text-center py-20">
              <h1 className="text-5xl font-bold text-teal-400 mb-6">Anatomy for Thai Learners</h1>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                เรียนรู้กายวิภาคศาสตร์มนุษย์ เข้าใจการเคลื่อนไหว และโครงสร้างร่างกาย
                <br />
                (Learn human anatomy, understand movements and body structures)
              </p>
              <div className="flex justify-center gap-6">
                <a href="/movements" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  เริ่มเรียนรู้การเคลื่อนไหว (Start Learning Movements)
                </a>
                <a href="/structures" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  ดูโครงสร้างทั้งหมด (View All Structures)
                </a>
              </div>
            </div>
          } />
          <Route path="movements" element={<MovementList />} />
          <Route path="movements/:id" element={<MovementDetail />} />
          <Route path="structures" element={<StructureList />} />
          <Route path="structures/:id" element={<StructureDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
