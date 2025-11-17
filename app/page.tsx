import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Image
                  src="/profile.jpg"
                  alt="Agustriadi"
                  width={400}
                  height={400}
                  className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-8 border-white dark:border-slate-800 shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Fresh Graduate</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                AGUSTRIADI
              </h1>
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-6">
                Information Management Graduate
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
                D3 Manajemen Informatika - Politeknik Negeri Sriwijaya. Lulusan baru yang penuh semangat dan siap membawa energi positif ke dunia profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Hubungi Saya
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  Lihat Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Pendidikan</h3>
              <div className="space-y-3 text-slate-700 dark:text-slate-300">
                <div>
                  <p className="font-semibold">Politeknik Negeri Sriwijaya</p>
                  <p className="text-sm">D3 Manajemen Informatika</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">2022 - 2025</p>
                </div>
                <div>
                  <p className="font-semibold">SMAN 1 Tanjung Batu</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">2019 - 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Lokasi</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Desa Seribandung, Kec. Tanjung Batu<br />
                Kabupaten Ogan Ilir<br />
                Sumatera Selatan 30664
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Status</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Fresh Graduate yang bersemangat untuk berkontribusi dalam dunia IT dan terus mengembangkan keterampilan profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Pengalaman
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {/* Work Experience */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        Dinas Informatika Statistik dan Persandian Ogan Ilir
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">Magang</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 mt-2 md:mt-0">Agustus - November 2024</span>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      <span>Mengelola data hasil survei atau data statistik daerah</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      <span>Membantu testing aplikasi atau sistem yang digunakan dinas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      <span>Membantu dalam kegiatan sosialisasi teknologi ke masyarakat atau instansi lain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      <span>Menyusun laporan atau rekapitulasi data statistik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      <span>Membantu mendokumentasi kegiatan atau pembuatan laporan kegiatan keamanan informasi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Organization Experience */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        Himpunan Mahasiswa Ogan Ilir (HMOI)
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">Anggota Aktif</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 mt-2 md:mt-0">2023 - 2025</span>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">▹</span>
                      <span>Mengembangkan potensi mahasiswa HMOI melalui program kaderisasi, pelatihan, dan kegiatan minat dan bakat mahasiswa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">▹</span>
                      <span>Berperan sebagai penggerak dalam membimbing dan membentuk mahasiswa yang berintegritas, berprestasi dan memiliki solidaritas tinggi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Keterampilan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                <span className="text-3xl">💻</span>
                Keterampilan Teknis
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Microsoft Office Suite</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Word</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">Excel</span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">PowerPoint</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">Access</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">HTML</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">CSS</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Lainnya</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm">Maintenance Device</span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">Basic Programming</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                <span className="text-3xl">🌟</span>
                Soft Skills
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Komunikasi</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Kemampuan berkomunikasi dengan baik</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">⏰</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Manajemen Waktu</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Mengatur waktu dengan efektif</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">🤝</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Kerja Tim</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Kolaborasi yang solid dalam tim</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Final Project */}
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block mb-2 px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full">
                        <span className="text-white font-semibold text-sm">Laporan Akhir / Final Project</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                        Aplikasi Pengaduan Kerusakan dan Permintaan Fasilitas Kantor
                      </h3>
                      <p className="text-blue-100 font-medium">
                        Dinas Informatika Statistik dan Persandian Ogan Ilir
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      Deskripsi Project
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Pengembangan sistem aplikasi berbasis website untuk memudahkan pegawai dalam melaporkan kerusakan fasilitas kantor
                      dan mengajukan permintaan fasilitas baru. Aplikasi ini membantu meningkatkan efisiensi pengelolaan aset dan
                      fasilitas kantor di Dinas Informatika Statistik dan Persandian Ogan Ilir.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="text-2xl">💡</span>
                        Fitur Utama
                      </h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                          <span>Sistem pengaduan kerusakan fasilitas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                          <span>Form permintaan fasilitas kantor</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                          <span>Tracking status pengaduan & permintaan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                          <span>Dashboard admin untuk monitoring</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="text-2xl">🛠️</span>
                        Teknologi
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-medium">
                          HTML
                        </span>
                        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                          CSS
                        </span>
                        <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium">
                          PHP
                        </span>
                        <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium">
                          MySQL
                        </span>
                        <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium">
                          Web-Based
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-600 dark:to-slate-700 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎓</span>
                      Dampak & Hasil
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Aplikasi ini berhasil meningkatkan efisiensi proses pelaporan kerusakan dan permintaan fasilitas di lingkungan
                      Dinas Informatika Statistik dan Persandian Ogan Ilir, mengurangi waktu pemrosesan pengaduan dan memudahkan
                      koordinasi antar departemen dalam pengelolaan fasilitas kantor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mari Terhubung!
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl mb-12 text-blue-100">
            Saya terbuka untuk peluang kerja dan kolaborasi. Jangan ragu untuk menghubungi saya!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:agustriadi801@gmail.com" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100 text-sm break-all">agustriadi801@gmail.com</p>
            </a>
            <a href="tel:082175330373" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Telepon</h3>
              <p className="text-blue-100">082175330373</p>
            </a>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-semibold mb-2">Lokasi</h3>
              <p className="text-blue-100 text-sm">Ogan Ilir, Sumatera Selatan</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:agustriadi801@gmail.com"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Kirim Email
            </a>
            <a
              href="tel:082175330373"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Agustriadi. Dibuat dengan Next.js dan Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
