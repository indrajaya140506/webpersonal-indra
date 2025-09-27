// src/JavaAssignments.jsx

import React from 'react';

function JavaAssignments() {
  return (
    <div className="java-page p-10">
      <h1 className="text-4xl font-bold mb-4 text-white">Tugas Java Saya ☕</h1>
      <p className="text-lg opacity-80 mb-6">
        Berikut adalah daftar tugas dan proyek yang telah saya selesaikan menggunakan Java.
      </p>
      
      <div className="assignments-list grid gap-6">
        <div className="assignment-card bg-zinc-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Proyek Kalkulator Sederhana</h2>
          <p className="text-base opacity-70">
            Sebuah program konsol yang dibuat dengan Java untuk melakukan operasi aritmetika dasar.
          </p>
          <a href="#" className="text-violet-500 hover:text-violet-400 mt-4 inline-block">
            Lihat di GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default JavaAssignments;