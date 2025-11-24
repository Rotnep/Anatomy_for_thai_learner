export const structures = [
    {
        id: 's1',
        nameTh: 'กล้ามเนื้อไบเซ็ปส์ เบรคิไอ',
        nameEn: 'Biceps Brachii',
        type: 'Muscle',
        description: 'กล้ามเนื้อต้นแขนด้านหน้า ทำหน้าที่งอข้อศอกและหงายมือ',
        relatedIds: ['s2', 's3']
    },
    {
        id: 's2',
        nameTh: 'กระดูกฮิวเมอรัส',
        nameEn: 'Humerus',
        type: 'Bone',
        description: 'กระดูกต้นแขน เป็นที่เกาะของกล้ามเนื้อหลายมัดรวมถึงไบเซ็ปส์',
        relatedIds: ['s1', 's4']
    },
    {
        id: 's3',
        nameTh: 'กระดูกเรเดียส',
        nameEn: 'Radius',
        type: 'Bone',
        description: 'กระดูกปลายแขนด้านนอก (ด้านนิ้วโป้ง)',
        relatedIds: ['s1']
    },
    {
        id: 's4',
        nameTh: 'กล้ามเนื้อไตรเซ็ปส์',
        nameEn: 'Triceps Brachii',
        type: 'Muscle',
        description: 'กล้ามเนื้อต้นแขนด้านหลัง ทำหน้าที่เหยียดข้อศอก',
        relatedIds: ['s2']
    },
    {
        id: 's5',
        nameTh: 'เอ็นไขว้หน้าข้อเข่า',
        nameEn: 'Anterior Cruciate Ligament (ACL)',
        type: 'Ligament',
        description: 'เอ็นภายในข้อเข่า ช่วยป้องกันกระดูกหน้าแข้งเลื่อนไปด้านหน้า',
        relatedIds: ['s6', 's7']
    },
    {
        id: 's6',
        nameTh: 'กระดูกฟีเมอร์',
        nameEn: 'Femur',
        type: 'Bone',
        description: 'กระดูกต้นขา เป็นกระดูกที่ยาวและแข็งแรงที่สุดในร่างกาย',
        relatedIds: ['s5']
    },
    {
        id: 's7',
        nameTh: 'กระดูกทิเบีย',
        nameEn: 'Tibia',
        type: 'Bone',
        description: 'กระดูกหน้าแข้ง รับน้ำหนักของร่างกาย',
        relatedIds: ['s5']
    }
];

export const movements = [
    {
        id: 'm1',
        nameTh: 'การงอข้อศอก',
        nameEn: 'Elbow Flexion',
        description: 'การพับแขนเข้าหาตัว',
        muscleIds: ['s1']
    },
    {
        id: 'm2',
        nameTh: 'การเหยียดข้อศอก',
        nameEn: 'Elbow Extension',
        description: 'การยืดแขนออกไปให้ตรง',
        muscleIds: ['s4']
    },
    {
        id: 'm3',
        nameTh: 'การงอเข่า',
        nameEn: 'Knee Flexion',
        description: 'การพับขาไปด้านหลัง',
        muscleIds: [] // Add hamstrings later
    }
];
