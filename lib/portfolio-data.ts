export const portfolioData = {
  personal: {
    name: 'Yonatan Rizky Partogi Silitonga',
    title: 'Mahasiswa Rekayasa Perangkat Lunak',
    subtitle: 'Membangun solusi inovatif dengan teknologi modern',
    bio: 'Saya adalah mahasiswa Rekayasa Perangkat Lunak yang berdedikasi dengan semangat tinggi terhadap teknologi dan inovasi. Saya memiliki fondasi yang kuat dalam pengembangan full-stack, sains data, dan aplikasi mobile. Fokus saya adalah menciptakan solusi berdampak yang memecahkan masalah nyata.',
    email: 'yonathansilitonga01@gmail.com',
    github: 'https://github.com/YonatanSilitonga',
    linkedin: 'https://www.linkedin.com/feed/',
    avatar: '/profile.jpeg',
  },

  quickFacts: [
    { label: 'IPK', value: '3.68/4.00' },
    { label: 'Beasiswa Prestasi', value: 'Penerima' },
    { label: 'Mahasiswa Terbaik', value: 'Penghargaan 2024' },
    { label: 'Asisten Dosen', value: 'Matematika Diskrit' },
  ],

  skills: {
    'Bahasa Pemrograman': [
      'PHP',
      'Java',
      'Golang',
      'Python',
      'JavaScript',
      'Dart',
    ],
    'Framework & Library': [
      'Laravel',
      'Flutter',
      'Bootstrap',
      'Chart.js',
    ],
    'Basis Data': ['MySQL', 'MongoDB'],
    'Sains Data & ML': ['Pandas', 'Scikit-Learn', 'NumPy', 'Matplotlib'],
    'Alat & Platform': [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'Figma',
      'VS Code',
    ],
  },

  projects: [
    {
      id: 1,
      title: 'HadirIn - School Attendance Management System',
      category: 'Web & Mobile App',
      role: 'Full Stack Developer',
      description: 'HadirIn adalah sistem informasi absensi sekolah berbasis web dan mobile yang dirancang untuk membantu sekolah dalam mengelola kehadiran siswa secara digital, menghubungkan Administrator, Guru, Orang Tua, dan Siswa secara real-time dan transparan.',
      impact: 'Mendigitalisasi proses kehadiran, mempercepat rekapitulasi bulanan, menghilangkan kesalahan manual, dan mempermudah orang tua memantau kehadiran anak secara langsung.',
      problem:
        'Banyak sekolah masih menggunakan metode absensi manual menggunakan kertas, menyebabkan kendala seperti data mudah hilang, rekapitulasi lambat, kurangnya monitoring orang tua secara cepat, dan tingginya risiko kesalahan pencatatan.',
      whyItMatters:
        'Kehadiran siswa merupakan indikator penting pendidikan. Ketidakhadiran yang tidak terpantau dapat berdampak pada penurunan akademik dan kurangnya evaluasi disiplin. Dengan sistem digital, absensi menjadi lebih akurat, cepat, dan transparan.',
      architecture:
        'Aplikasi mobile Flutter (dashboard, absensi, rekap, notifikasi) terhubung dengan Laravel REST API backend (Sanctum authentication, manajemen user, pelaporan) menggunakan database MySQL.',
      techDecisions: [
        'Laravel dipilih untuk pengembangan cepat, struktur MVC yang jelas, dan fitur keamanan bawaan seperti Sanctum',
        'Flutter dipilih untuk cross-platform (Android dan iOS) dengan performa native dan UI modern',
        'GetX untuk state management Flutter yang ringan dengan routing dan dependency injection bawaan',
        'MySQL sebagai database yang stabil, tangguh, dan mudah diintegrasikan dengan Laravel',
      ],
      challenges: [
        'Integrasi aplikasi Flutter dengan Laravel Sanctum menggunakan token authentication secara aman',
        'Desain relasi database sekolah yang kompleks (relasi siswa, kelas, orang tua, dan histori absensi)',
        'Sistem kalkulasi rekapitulasi kehadiran bulanan otomatis secara real-time',
        'Implementasi sistem otorisasi Role-Based Access Control (RBAC) untuk seluruh aktor utama',
      ],
      solutions: [
        'Mengimplementasikan token local storage di Flutter dan middleware khusus di Laravel Sanctum',
        'Melakukan normalisasi database MySQL dan memanfaatkan relasi Eloquent ORM di Laravel',
        'Membangun tabel transaksi harian dan tabel rekap bulanan terpisah untuk mempercepat kalkulasi',
        'Mengamankan endpoint API menggunakan middleware otorisasi berbasis peran (Admin, Guru, Siswa, Orang Tua)',
      ],
      lessonsLearned: [
        'Pengembangan aplikasi multi-platform (Full Stack) menggunakan Laravel dan Flutter',
        'Implementasi token-based authentication dengan Laravel Sanctum',
        'Perancangan relasi database kompleks dan pengelolaan state management Flutter menggunakan GetX',
        'Pentingnya mendesain User Experience (UX) yang ramah pengguna untuk lingkungan sekolah',
      ],
      technologies: ['Laravel', 'Sanctum', 'Flutter', 'Dart', 'GetX', 'MySQL', 'Postman', 'Figma'],
      features: [
        'Secure Authentication & Login Multi Role (Admin, Guru, Orang Tua, Siswa)',
        'Manajemen Data Akademik (CRUD Siswa, Guru, Orang Tua, Kelas, Mapel)',
        'Pencatatan Absensi Harian Siswa (Hadir, Sakit, Izin, Alfa)',
        'Statistik dan Laporan Rekap Kehadiran Bulanan Otomatis',
        'Portal Monitoring Orang Tua secara Real-Time',
        'Dashboard Informasi Sekolah dan Ringkasan Kehadiran',
      ],
      github: 'https://github.com/YonatanSilitonga/hadirin',
      demo: 'Coming Soon',
      image: '/projects/hadirin.png',
    },
    {
      id: 2,
      title: 'Smart Tourism Danau Toba',
      category: 'Mobile & Web App',
      role: 'Mobile & Full Stack Developer',
      description: 'Aplikasi mobile pariwisata cerdas untuk wisatawan Danau Toba yang dilengkapi perencana perjalanan berbasis preferensi, terhubung ke backend berkinerja tinggi serta admin panel dengan analisis sentimen ulasan berbasis AI.',
      impact: 'Mempermudah wisatawan merencanakan perjalanan secara terpadu di kawasan Danau Toba, menyajikan informasi destinasi secara real-time, serta membantu pengelola mendigitalisasi dan mempercepat analisis sentimen ulasan wisatawan.',
      problem:
        'Wisatawan kesulitan mengelola rencana perjalanan secara mandiri dan menemukan informasi destinasi Danau Toba secara cepat. Di sisi pengelola, analisis ulasan wisatawan berjalan lambat karena dianalisis secara manual satu per satu.',
      whyItMatters:
        'Pariwisata Danau Toba membutuhkan peningkatan layanan digital terpadu untuk kenyamanan wisatawan. Deteksi sentimen negatif yang lambat menghambat penanganan masalah pelayanan di destinasi wisata secara cepat.',
      architecture:
        'Aplikasi mobile Flutter berkomunikasi dengan backend Go REST API untuk menyajikan informasi destinasi, acara, berita, dan Trip Planner dengan database MongoDB. Admin Panel Laravel terintegrasi untuk mengelola data master destinasi dan memicu microservice Python Flask yang menjalankan model analisis sentimen hibrida (Naive Bayes + Rule-Based Engine).',
      techDecisions: [
        'Flutter dipilih untuk membangun aplikasi mobile cross-platform dengan performa native dan UI modern responsif',
        'Go (Golang) digunakan untuk backend API aplikasi mobile karena performa tinggi dan konkurensi efisien',
        'Flask (Python) digunakan untuk microservice sentiment analysis, memanfaatkan TF-IDF Vectorizer dan model Naive Bayes',
        'MongoDB sebagai basis data NoSQL utama untuk fleksibilitas penyimpanan data destinasi pariwisata dan data ulasan',
        'Laravel sebagai panel admin terpadu untuk data management, terhubung ke MongoDB dan memanggil API analisis sentimen',
      ],
      challenges: [
        'Merancang algoritma Trip Planner dinamis di backend Go dan menyusun antarmuka konfigurasi di Flutter',
        'Menangani analisis sentimen ulasan wisatawan yang ambigu, sarkastik, atau memiliki campuran opini (mixed polarity)',
        'Sinkronisasi komunikasi data real-time antara aplikasi Flutter, backend Go, Admin Panel Laravel, dan basis data MongoDB',
      ],
      solutions: [
        'Membangun sistem kalkulasi rute perjalanan di backend Go dan UI rencana perjalanan interaktif di Flutter',
        'Membangun Hybrid Rule Engine dengan 5 aturan khusus (seperti Mixed Polarity, Negation Reversal, dan Confidence Thresholds) untuk meminimalkan salah klasifikasi',
        'Mendesain REST API terstandarisasi dengan token-based authentication dan membagikan database MongoDB secara aman',
      ],
      lessonsLearned: [
        'Pengembangan arsitektur microservices multi-bahasa yang menggabungkan Flutter, Go, Laravel, MongoDB, dan Python Flask',
        'Pentingnya mesin aturan (rule engine) tambahan di atas model machine learning (Naive Bayes) untuk menangani kasus tepi (edge cases) bahasa non-formal',
        'Manajemen pemisahan tanggung jawab (separation of concerns) untuk menjaga performa masing-masing layanan',
      ],
      technologies: ['Flutter', 'Go', 'Laravel', 'Python', 'Flask', 'MongoDB', 'Scikit-Learn', 'NLTK', 'REST API', 'Bootstrap'],
      features: [
        'Trip Planner (Perencana Perjalanan Pintar berdasarkan Preferensi & Durasi)',
        'Peta Interaktif Destinasi & Lokasi Sekitar Danau Toba',
        'Chatbot Asisten Pintar untuk Panduan Wisatawan',
        'Kalender Acara (Event) Pariwisata Terjadwal',
        'Admin Panel & Otomatisasi Analisis Sentimen Ulasan Wisatawan (Batch & Single)',
        'Autentikasi Pengguna & Profil Wisatawan Seluler',
      ],
      github: 'https://github.com/YonatanSilitonga',
      demo: 'Belum tersedia',
      image: '/projects/tourism.png',
    },
    {
      id: 3,
      title: 'Sistem Informasi Sekolah Berbasis Web',
      category: 'Web',
      role: 'Full Stack Developer',
      description: 'Sistem Informasi Sekolah merupakan aplikasi berbasis web yang digunakan untuk membantu digitalisasi proses administrasi sekolah, pengelolaan data akademik, absensi, serta penyampaian informasi kepada guru, staf, siswa, dan orang tua.',
      impact: 'Mendigitalisasi pencatatan administrasi sekolah, mempercepat pencarian data siswa dan guru, otomatisasi rekapitulasi absensi harian, serta menyajikan laporan akademik secara real-time.',
      problem:
        'Sebelum sistem dikembangkan, sebagian besar proses administrasi sekolah masih dilakukan secara manual menggunakan buku catatan dan spreadsheet terpisah, sehingga menyebabkan data sering duplikat, kesalahan input data, sulitnya pencarian data lama, dan lambatnya pembuatan laporan.',
      whyItMatters:
        'Digitalisasi administrasi sekolah sangat penting untuk meningkatkan efisiensi operasional, mengurangi risiko kehilangan data, mendukung pengambilan keputusan berbasis data, dan memberikan akses cepat bagi seluruh pihak terkait. Tanpa sistem ini, sekolah akan kesulitan mengelola data yang terus bertambah setiap tahun ajaran.',
      architecture:
        'Sistem berbasis web dengan arsitektur MVC (Model-View-Controller). Pengguna mengakses frontend Bootstrap + Blade Template yang berkomunikasi dengan Laravel Controller dan Model untuk memproses dan menyimpan data pada database MySQL, serta media penyimpanan file foto/dokumen.',
      techDecisions: [
        'Laravel dipilih karena mendukung arsitektur MVC, ORM Eloquent, sistem autentikasi bawaan, routing sederhana, dan dokumentasi lengkap',
        'MySQL sebagai database relasional yang stabil, gratis, dan sangat mudah diintegrasikan dengan Laravel',
        'Bootstrap digunakan untuk antarmuka responsif dengan komponen siap pakai guna mempercepat pengembangan UI',
        'Chart.js diintegrasikan untuk menampilkan grafik absensi siswa, statistik, dan rekap data akademik',
      ],
      challenges: [
        'Implementasi sistem hak akses pengguna (Role-Based Access Control) yang tepat untuk Admin, Guru, Staf, dan Siswa',
        'Pembuatan dashboard statistik interaktif yang menampilkan absensi dan jumlah siswa secara dinamis',
        'Sinkronisasi data akademik yang kompleks antara data siswa, kelas, mata pelajaran, dan absensi',
      ],
      solutions: [
        'Mengimplementasikan route middleware Laravel khusus untuk membatasi akses endpoint berdasarkan role',
        'Menggunakan query agregasi database MySQL dan pustaka Chart.js untuk visualisasi data dinamis',
        'Memanfaatkan Eloquent Relationship (belongsTo, hasMany, hasOne) untuk sinkronisasi relasi database yang solid',
      ],
      lessonsLearned: [
        'Penerapan praktis arsitektur MVC Laravel dan perancangan database relasional skala sekolah',
        'Pengelolaan autentikasi pengguna dan penggunaan middleware untuk keamanan akses',
        'Pembuatan dashboard statistik interaktif dan teknik optimasi query database',
        'Praktik integrasi library pihak ketiga seperti Chart.js, SweetAlert, dan DataTables',
      ],
      technologies: ['PHP', 'Laravel', 'Bootstrap', 'JavaScript', 'jQuery', 'MySQL', 'Chart.js', 'SweetAlert', 'DataTables'],
      features: [
        'Login dan autentikasi pengguna secara aman',
        'Manajemen data siswa dan guru',
        'Manajemen kelas dan mata pelajaran',
        'Sistem pencatatan absensi siswa',
        'Dashboard statistik sekolah dengan Chart.js',
        'Cetak laporan dan rekap absensi dalam format PDF',
        'Manajemen pengumuman sekolah dan profil pengguna',
      ],
      github: 'https://github.com/YonatanSilitonga/sistem-informasi-sekolah',
      demo: 'Belum tersedia',
      image: '/projects/school-info.png',
    },
    {
      id: 4,
      title: 'RDKK Fertilizer Management System',
      category: 'Data Science & AI/ML',
      role: 'Data Scientist & ML Developer',
      description: 'Sistem analisis data berbasis Machine Learning (Isolation Forest & K-Means) dan dashboard interaktif Streamlit untuk mengidentifikasi anomali, kepatuhan batas alokasi pupuk bersubsidi, dan pengelompokan pola pemupukan petani.',
      impact: 'Mendeteksi secara otomatis kasus pengajuan pupuk bersubsidi yang tidak wajar untuk diaudit ulang, menyaring kasus penggunaan berlebih (overuse) alokasi, serta mengelompokkan petani ke dalam klaster perilaku pemupukan guna merancang pembinaan yang tepat sasaran.',
      problem:
        'Penyaluran pupuk bersubsidi sering kali mengalami kebocoran dan salah sasaran karena pengajuan RDKK oleh kelompok tani yang tidak rasional atau melebihi batas kebutuhan tanaman, sedangkan proses audit manual sangat lambat.',
      whyItMatters:
        'Ketidaktepatan alokasi merugikan keuangan negara, memicu kelangkaan bagi petani kecil yang membutuhkan, dan penggunaan pupuk kimia berlebih dapat merusak kualitas tanah pertanian jangka panjang.',
      architecture:
        'Pipeline pemrosesan data (ETL & rekayasa fitur) dengan model Isolation Forest (ML anomali) dan K-Means (segmentasi) yang disandingkan dengan rule-based engine batas regulasi, terintegrasi ke dashboard Streamlit.',
      techDecisions: [
        'Streamlit dipilih untuk visualisasi dashboard yang interaktif dan ramah bagi pengguna dinas pertanian',
        'Isolation Forest digunakan karena tangguh untuk mendeteksi anomali pada data tabular tanpa membutuhkan label historis',
        'K-Means dan PCA digunakan untuk menyegmentasikan dan memproyeksikan pola kemiripan petani ke ruang grafis',
        'Plotly dipilih untuk menyajikan grafik interaktif dengan fitur hover-inspect detail data petani individual',
      ],
      challenges: [
        'Ketiadaan label data historis tentang penyelewengan pengajuan alokasi pupuk subsidi',
        'Skala luas tanah dan total alokasi pupuk petani yang sangat bervariasi',
        'Menyelaraskan hasil deteksi machine learning yang empiris dengan regulasi kebijakan alokasi statis pemerintah',
      ],
      solutions: [
        'Mengombinasikan model Isolation Forest dengan analisis statistik persentil untuk mendeteksi tingkat kelebihan atau kekurangan penggunaan secara relatif',
        'Melakukan rekayasa fitur konversi total pupuk menjadi intensitas per hektar (kg/ha) dan standarisasi skala data',
        'Membangun sistem hibrida: model ML mendeteksi pola anomali, didukung rule-based untuk menyaring kepatuhan regulasi',
      ],
      lessonsLearned: [
        'Rekayasa fitur berbasis rasio lahan (kg/ha) jauh lebih krusial dibandingkan kompleksitas algoritma modeling',
        'Sistem hibrida (ML + rule-based) sangat ideal untuk menyelesaikan masalah praktis yang terikat regulasi pemerintah',
        'Kemudahan interpretasi model (explainability) melalui visualisasi dashboard yang interaktif adalah kunci adopsi solusi',
      ],
      technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-Learn', 'Plotly', 'Matplotlib', 'Joblib', 'PyYAML'],
      features: [
        'Dashboard Ringkasan Eksekutif (Ringkasan data alokasi, kepatuhan, dan grafik distribusi komoditas)',
        'Data Explorer & Profil Petani (Tabel filterable, download CSV, dan perbandingan individual vs median)',
        'Kelola & Simulasi Batas Standar Pupuk (Konfigurasi batas alokasi pupuk dinamis untuk simulasi kebijakan)',
        'Prediksi Data Baru (Form pengujian kelayakan pengajuan alokasi petani secara real-time)',
        'Clustering & Pola Pemupukan (Visualisasi proyeksi PCA dan sebaran boxplot per klaster)',
        'Dashboard Evaluasi Model (Grafik Elbow Curve, Centroid Heatmap, dan analisis Silhouette)',
      ],
      github: 'https://github.com/YonatanSilitonga/Data-Sains-Data-Analisis-Kelompok-3',
      demo: 'Belum tersedia',
      image: '/projects/rdkk.png',
    },
    {
      id: 5,
      title: 'CV Feliks Inventory & Service Management System',
      category: 'Desktop Application',
      role: 'Desktop Developer & Database Designer',
      description: 'Sistem manajemen barang dan jasa untuk toko material dan bangunan CV Feliks berbasis Java desktop yang terintegrasi dengan MySQL untuk mengelola persediaan, transaksi, dan layanan jasa konstruksi.',
      impact: 'Mendigitalisasi pengelolaan stok material secara real-time, mempercepat pencatatan transaksi penjualan, mengurangi kesalahan pencatatan manual, dan mengintegrasikan pengelolaan pesanan layanan jasa dalam satu aplikasi.',
      problem:
        'Operasional harian toko material dan jasa konstruksi CV Feliks sebelumnya dilakukan secara manual. Hal ini memicu kesulitan dalam pelacakan stok material bangunan secara akurat, lambatnya pencatatan transaksi penjualan, serta tidak terintegrasinya data layanan jasa pelanggan.',
      whyItMatters:
        'Efisiensi manajemen inventori dan transaksi adalah kunci daya saing usaha konstruksi dan ritel material. Dengan sistem terintegrasi, pemilik dapat memantau keluar-masuk barang secara real-time, meminimalkan selisih stok, serta meningkatkan kecepatan pelayanan pelanggan.',
      architecture:
        'Aplikasi desktop berbasis JavaFX untuk antarmuka pengguna yang dirancang menggunakan Scene Builder. Aplikasi berkomunikasi dengan basis data relasional MySQL melalui konektivitas JDBC (Java Database Connectivity) dengan kelas koneksi dbConnection kustom. Struktur dependensi dikelola menggunakan Maven dengan arsitektur Model-View-Controller (MVC) yang memanfaatkan binding properti JavaFX.',
      techDecisions: [
        'Java dan JavaFX dipilih untuk membangun aplikasi desktop lintas platform dengan kinerja tinggi dan UI modern yang responsif',
        'Scene Builder digunakan untuk mendesain file tata letak FXML secara visual guna memisahkan kode logika dan antarmuka secara rapi',
        'MySQL Server digunakan sebagai database relasional utama untuk menjamin konsistensi data transaksi dan inventori yang terstruktur',
        'JDBC dengan driver MySQL Connector/J digunakan untuk melakukan query SQL langsung dari Java secara cepat tanpa overhead ORM berat',
        'Maven sebagai alat build tool dan manajemen dependensi untuk menjaga kerapian struktur dependensi eksternal proyek',
      ],
      challenges: [
        'Sinkronisasi UI JavaFX secara real-time agar selalu merefleksikan data terbaru dari database MySQL',
        'Pengurangan stok material secara otomatis pada database tepat setelah transaksi penjualan berhasil diselesaikan',
        'Pembuatan relasi database MySQL yang kompleks untuk mencakup kategori barang, stok masuk, detail transaksi, hingga pendaftaran permintaan jasa',
        'Validasi input data pengguna pada formulir pendaftaran barang, transaksi, dan pegawai untuk mencegah SQL Exception atau integritas data yang rusak',
      ],
      solutions: [
        'Menggunakan properti JavaFX (SimpleStringProperty, SimpleIntegerProperty) dalam kelas model Java untuk binding otomatis data MySQL ke komponen TableView',
        'Menerapkan fungsi kalkulasi otomatis dan SQL Update query transaksional yang dipicu langsung dari pengontrol tombol pembayaran JavaFX',
        'Mendesain ERD dengan normalisasi database yang baik (relasi Kategori-Material, Transaksi-Detail Transaksi, dll.) lengkap dengan foreign key constraint yang ketat',
        'Membangun modul validasi input berbasis Regex dan menyajikan dialog box peringatan interaktif di JavaFX controller sebelum query database dieksekusi',
      ],
      lessonsLearned: [
        'Penerapan siklus hidup aplikasi JavaFX dan binding data responsif untuk kebutuhan visualisasi data desktop',
        'Perancangan skema database relasional (MySQL) yang dioptimalkan untuk kebutuhan transaksi Point of Sales (POS)',
        'Pemahaman mendalam tentang pola arsitektur MVC dalam proyek desktop Java komersial',
        'Pentingnya validasi data sisi klien (client-side validation) dan penanganan eksepsi SQL yang tangguh untuk kenyamanan pengguna',
      ],
      technologies: ['Java', 'JavaFX', 'Scene Builder', 'MySQL', 'JDBC', 'Maven'],
      features: [
        'Dashboard Interaktif (Menampilkan total barang, total transaksi, stok tersedia, dan aktivitas operasional terbaru)',
        'Manajemen Material & Kategori (CRUD data material bangunan, filter pencarian dinamis, dan kategorisasi)',
        'Transaksi Penjualan (Keranjang belanja interaktif, kalkulator kembalian otomatis, pencatatan transaksi, dan cetak nota)',
        'Manajemen Stok Masuk (Update stok otomatis setelah barang masuk dari supplier dan pencatatan riwayat)',
        'Layanan Jasa (Pencatatan permintaan jasa renovasi/pembangunan, data pelanggan, dan status pengerjaan)',
        'Manajemen Pegawai & Akun Pengguna (Hak akses login berdasarkan role administrator atau kasir)',
      ],
      github: 'https://github.com/YonatanSilitonga',
      demo: 'Belum tersedia',
      image: '/projects/cv-feliks.png',
    },
    {
      id: 6,
      title: 'Vehicle Detection & Classification System',
      category: 'AI/Computer Vision',
      role: 'AI/ML Engineer',
      description: 'Model deep learning deteksi objek real-time untuk klasifikasi jenis kendaraan otomatis pada area parkir atau jalan raya.',
      impact: 'Mengotomatisasi deteksi dan klasifikasi kendaraan secara real-time dengan akurasi mAP@0.5 mencapai 96.0% secara keseluruhan, membantu pemantauan kepadatan lalu lintas kota.',
      problem:
        'Klasifikasi kendaraan secara manual memakan waktu, tidak efisien, dan rentan terhadap kesalahan. Manajemen lalu lintas perkotaan membutuhkan otomasi untuk menghitung dan membedakan jenis kendaraan yang melintas secara cepat dan presisi.',
      whyItMatters:
        'Infrastruktur kota cerdas (Smart City) membutuhkan deteksi dan klasifikasi kendaraan otomatis untuk optimalisasi lalu lintas, manajemen parkir pintar, dan pengumpulan statistik lalu lintas jalan raya.',
      architecture:
        'Pipeline deteksi objek satu tahap (one-stage object detector) berbasis YOLOv5s (PyTorch). Model dikonfigurasi khusus dengan 3 kelas target (car, minibus, truck) dan dilatih menggunakan transfer learning pada dataset kustom Roboflow (vehicle-1lshg) versi 5 sebanyak 50 epoch.',
      techDecisions: [
        'YOLOv5s dipilih karena menawarkan keseimbangan terbaik antara kecepatan inferensi (real-time ~7.3ms) dan akurasi tinggi',
        'Roboflow digunakan untuk prapemrosesan, manajemen anotasi dataset, dan augmentasi gambar',
        'PyTorch sebagai framework utama untuk memproses model deteksi deep learning',
        'Kustomisasi parameter model custom_yolov5s.yaml untuk menyesuaikan jumlah kelas keluaran model (nc: 3)',
      ],
      challenges: [
        'Mendeteksi dan membedakan jenis kendaraan minibus dan truck yang memiliki fitur visual serupa pada sudut kamera lalu lintas tertentu',
        'Ketidakseimbangan kelas pada dataset validasi yang didominasi oleh kelas minibus (152 instansi) dan truck (201 instansi) tanpa kelas car',
        'Optimasi performa inferensi real-time agar dapat diterapkan pada perangkat dengan spesifikasi terbatas',
      ],
      solutions: [
        'Mengimplementasikan augmentasi data mosaic loading pada YOLOv5 untuk menggabungkan 4 gambar acak selama pelatihan, meningkatkan akurasi deteksi objek kecil',
        'Melakukan fine-tuning model YOLOv5s selama 50 epoch dengan cache gambar diaktifkan untuk mempercepat proses pelatihan',
        'Menjalankan pengujian inferensi dan validasi menggunakan test set Roboflow untuk membuktikan model tetap dapat mendeteksi kelas car secara presisi',
      ],
      lessonsLearned: [
        'Augmentasi data mosaic sangat krusial dalam mendeteksi kendaraan jarak jauh atau yang saling menutupi (occlusion) di jalan raya',
        'Hasil mAP@0.5 yang tinggi (96.0%) membuktikan bahwa model YOLOv5s sangat andal meskipun dilatih dalam jumlah epoch yang relatif singkat (50 epoch)',
        'Pemisahan data training, validation, dan testing yang ketat dari Roboflow menjamin model terhindar dari overfitting',
      ],
      technologies: ['Python', 'PyTorch', 'YOLOv5', 'Roboflow', 'OpenCV', 'NumPy', 'YAML'],
      features: [
        'Deteksi dan Klasifikasi Kendaraan Real-Time (Mobil, Minibus, Truk)',
        'Akurasi Tinggi dengan Nilai mAP@0.5 mencapai 96.0% (97.1% minibus, 94.9% truck)',
        'Waktu Inferensi Rendah (Rata-rata 7.3ms per gambar, cocok untuk live CCTV stream)',
        'Visualisasi Bounding Box Dinamis dengan Confidence Score',
        'Dukungan Integrasi REST API & Deployment Roboflow Inference',
      ],
      github: 'https://github.com/YonatanSilitonga/projek-certan',
      demo: 'Belum tersedia',
      image: '/projects/vehicle-classification.png',
    },
  ],

  experiences: [
    {
      id: 1,
      title: 'Asisten Dosen (Matematika Diskrit)',
      period: '2024',
      description: 'Membantu proses belajar mengajar dan membimbing mahasiswa dalam pemecahan masalah matematika diskrit.',
      icon: 'book',
    },
    {
      id: 2,
      title: 'Asisten Matrikulasi Mahasiswa Baru',
      period: '2024',
      description: 'Mendukung mahasiswa baru selama adaptasi akademik dan orientasi kampus.',
      icon: 'graduation',
    },
    {
      id: 3,
      title: 'Mentor Asrama (Abang Asrama)',
      period: '2024 - 2025',
      description: 'Membimbing mahasiswa asrama dan mengembangkan keterampilan komunikasi serta kepemimpinan.',
      icon: 'home',
    },
    {
      id: 4,
      title: 'Anggota Panitia PCA',
      period: '2024',
      description: 'Berkontribusi pada orientasi kampus dan penyelenggaraan acara mahasiswa baru.',
      icon: 'clipboard',
    },
  ],

  achievements: [
    {
      id: 1,
      title: 'Penerima Beasiswa Prestasi',
      year: '2024/2025',
      description:
        'Dianugerahi beasiswa prestasi atas keunggulan akademis dan kinerja luar biasa dalam program studi rekayasa perangkat lunak.',
      icon: 'award',
    },
    {
      id: 2,
      title: 'Penghargaan Mahasiswa Terbaik',
      year: '2024',
      description:
        'Diakui sebagai mahasiswa terbaik atas pencapaian akademis yang luar biasa dan kontribusi kepada komunitas universitas.',
      icon: 'trophy',
    },
  ],
}

