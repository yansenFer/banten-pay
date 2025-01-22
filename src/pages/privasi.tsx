export const PrivasiPage = () => {
  const KebijakanPrivasi = [
    "Ikhtisar",
    "Pemberitahuan Perubahan",
    "Informasi yang Perusahaan kumpulkan",
    "Informasi Transaksi",
    "Informasi Anda dari Pihak Ketiga",
    "Verifikasi Tambahan",
    "Informasi Lalu Lintas Website",
    "Penggunaan “Cookies”",
    "Korespondensi Customer Service",
    "Kuisioner, Survey dan Data Profile",
    "Penerimaan atau Permohonan Non-Member",
    "Penggunaan dan pengungkapan informasi",
    "Pembatasan Informasi untuk Pelanggan Lainnya",
    "Pembatasan Informasi kepada pihak ketiga selain pelanggan",
    "Kontak Pelanggan",
  ]

  const Ikhtisar = [
    "Perusahaan berhak meminta Anda untuk memberikan informasi pribadi Anda dan data rekening bank Anda demi keamanan dan kenyamanan dalam bertransaksi.",
    "Ketentuan ini berisi tentang pengolahan informasi yang dimiliki oleh Perusahaan.",
    "Perusahaan sangat menjaga informasi pribadi Anda dan akan menggunakan informasi pribadi Anda sesuai dengan kondisi yang tercantum dalam ketentuan ini.",
    "Perusahaan tidak akan menjual atau menyewakan data pribadi Anda atau daftar pelanggan Perusahaan kepada pihak ketiga.",
    "Dalam kondisi tertentu, Perusahaan memiliki hak untuk memberikan informasi pribadi Anda kepada pihak ketiga yang memiliki legalitas kerjasama dengan Perusahaan.",
    "Ketentuan ini berlaku untuk semua layanan yang disediakan di dalam BantenPay.",
    "Dengan menerima Kebijakan dan Ketentuan Pengguna dalam pendaftaran/registrasi, Anda menyatakan setuju dengan Pengelolaan informasi pribadi Anda sesuai dengan penjelasan dalam Ketentuan.",
    "Ketentuan ini dimasukkan ke dalam Peraturan Perusahaan.",
    "Informasi pribadi Anda akan Perusahaan simpan dan diproses pada server Perusahaan.",
    "Perusahaan menjamin akan menyimpan dan mengirimkan informasi pribadi Anda secara aman dan rahasia.",
    "Perusahaan berhak meminta Anda untuk memberikan informasi pribadi Anda dan data rekening bank Anda demi keamanan dan kenyamanan dalam bertransaksi.",
    "Ketentuan ini berisi tentang pengolahan informasi yang dimiliki oleh Perusahaan.",
    "Perusahaan sangat menjaga informasi pribadi Anda dan akan menggunakan informasi pribadi Anda sesuai dengan kondisi yang tercantum dalam ketentuan ini.",
    "Perusahaan tidak akan menjual atau menyewakan data pribadi Anda atau daftar pelanggan Perusahaan kepada pihak ketiga.",
    "Dalam kondisi tertentu, Perusahaan memiliki hak untuk memberikan informasi pribadi Anda kepada pihak ketiga yang memiliki legalitas kerjasama dengan Perusahaan.",
    "Ketentuan ini berlaku untuk semua layanan yang disediakan di dalam BantenPay.",
  ]

  const PemberitahuanPerubahan = [
    "Ketentuan ini akan mengalami pembaharuan dikarenakan adanya penambahan layanan baru program BantenPay.",
    "Ketentuan ini akan mengalami perubahan dari waktu ke waktu dikarenakan adanya penambahan layanan baru BantenPay atau adanya saran-saran yang Perusahaan terima dari pelanggan Perusahaan.",
    "Jika Perusahaan mendapati adanya ketidakcocokan antara data informasi pribadi digital yang telah diterima dari Anda dengan data pribadi Anda yang telah diperbaharui, maka Anda memiliki hak untuk memilih data mana yang akan dikelola oleh Perusahaan.",
    "Perusahaan akan mengirimkan email pemberitahuan setiap kali ada perubahan Kebijakan dan Peraturan. Hal ini tidak berlaku bagi Pengguna yang telah menutup Akun.",
    "Perusahaan akan memberikan informasi perubahan Ketentuan secara jelas di website BantenPay, sehingga Anda dapat mengetahui informasi terbaru mengenai perkembangan dari BantenPay.",
    "Silahkan cek website Bank Banten di https://bankbanten.co.id/ setiap saat untuk mengetahui versi terbaru Kebijakan Privasi Perusahaan.",
    "Perusahaan tidak bertanggung jawab atas kegiatan operasi Pihak Ketiga, kecuali yang berisi data informasi yang diberikan oleh Pihak Ketiga yang berada di halaman website Bank Banten.",
  ]

  const Informasi = [
    "Nama Lengkap",
    "Nama Perusahaan (jika ada)",
    "Alamat",
    "Nomor Handphone",
    "URL Website (jika ada)",
    "Alamat e-mail",
    "Gambar foto Anda untuk proses KYC",
    "Informasi list kontak (contact list) yang anda pilih saat transaksi",
  ]

  const InformasiLaluLintass = [
    "Perusahaan secara otomatis akan menerima IP Address situs website yang Anda kunjungi ketika Anda masih terhubung dengan website Bank Banten.",
    "Perusahaan akan mengumpulkan informasi halaman mana saja di website Bank Banten yang Anda kunjungi saat Anda berada di dalam situs Bank Banten, tipe browser yang Anda gunakan, dan waktu Anda mengakses website Bank Banten.",
    "Perusahaan akan menggunakan informasi ini untuk memahami preferensi pelanggan Perusahaan dengan lebih baik serta untuk mengelola beban server Perusahaan, sehingga pada akhirnya untuk meningkatkan layanan Bank Banten dan pengalaman Anda dengan Perusahaan.",
    "Perusahaan tidak melacak situs web yang Anda kunjungi sebelum atau setelah Anda meninggalkan website Bank Banten.",
    "Untuk mengakses BantenPay anda harus memberikan:",
  ]

  const PenggunaanCookies = [
    "“Cookies” adalah file kecil data yang berada di komputer Anda dan memungkinkan perusahaan untuk mengenali Anda sebagai pelanggan BantenPay jika Anda kembali ke situs Bank Banten menggunakan komputer dan browser yang sama.",
    "Perusahaan mengirimkan “session cookies” ke komputer Anda jika dan saat Anda log in ke akun Anda dengan memasukkan alamat email dan password.",
    "Cookies ini memungkinkan perusahaan mengenali Anda jika Anda mengunjungi beberapa halaman situs perusahaan selama sesi yang sama, sehingga Anda tidak harus memasukkan kembali password Anda beberapa kali.",
    "Setelah Anda log out atau menutup browser, session cookies ini akan berakhir dan tidak memiliki efek apa pun lagi.",
    "Perusahaan juga menggunakan longer lasting cookies untuk menampilkan alamat email Anda pada formulir sign-in BantenPay, sehingga Anda tidak perlu menulis ulang alamat email setiap kali Anda log in ke akun perusahaan.",
    "Perusahaan tidak bertanggung jawab atas terjadinya kerusakan apa pun yang terjadi pada perangkat keras dan/atau perangkat lunak yang Anda miliki apabila kerusakan tersebut dikarenakan sistem cookie dari aspek manapun.",
  ]

  const PembatasanInformasi = [
    "Perusahaan tidak akan menjual, menyewakan informasi pribadi Anda kepada pihak ketiga.",
    "Perusahaan tidak akan berbagi informasi pribadi Anda kepada pihak ketiga kecuali pada kondisi tertentu atas izin Anda.",
    "Pihak ketiga memiliki keterbatasan untuk mengelola data informasi yang digunakan untuk keperluan lain di luar perjanjian yang telah dibuat oleh perusahaan.",
    "Perusahaan membuka informasi yang dikumpulkan (sebagaimana dijelaskan di atas) dengan perusahaan yang melakukan jasa pemasaran atas nama perusahaan atau lembaga keuangan lainnya yang bekerjasama dengan perusahaan dalam suatu perjanjian pemasaran.",
    "Perusahaan-perusahaan ini sebelumnya dikenakan perjanjian dengan perusahaan dan pembatasan hukum lainnya yang melarang menggunakan informasi kecuali untuk tujuan memasarkan produk dan layanan Paykatimtara kecuali jika Anda memberi persetujuan digunakan sebagaimana dimaksudkan pihak ketiga.",
    "Perusahaan berbagi informasi dengan itikad baik untuk bekerjasama dalam penyelidikan terkait dengan penipuan atau aktivitas legal lainnya, atau untuk penyelidikan terhadap pelanggaran kebijakan dan aturan perusahaan. Secara khusus, jika perusahaan melakukan investigasi penipuan dan menyimpulkan bahwa ada satu pihak telah terlibat dalam praktik penipuan, perusahaan dapat memberikan informasi kontak entitas (tidak termasuk akun bank atau informasi kartu kredit) kepada korban yang memintanya.", // 6
    "Perusahaan memiliki hak untuk membuka informasi dalam menanggapi sebuah surat perintah, panggilan pengadilan, atau proses pengadilan lainnya yang sebanding, termasuk panggilan pengadilan dari pihak swasta dalam tindakan sipil.",
    "Perusahaan mengungkapkan informasi Anda kepada agen atau perwakilan hukum Anda (pemegang surat kuasa yang Anda tunjuk atau wali yang ditunjuk untuk Anda).",
    "Perusahaan berbagi data kepada mitra bisnis perusahaan dan untuk public relation. Contohnya, perusahaan dapat mengungkapkan jumlah dalam presentasi tertentu pengguna (user) perusahaan yang tinggal di Jakarta. Namun, informasi ini tidak berkaitan dengan informasi pribadi.",
    "Di masa mendatang perusahaan memiliki hak melakukan merger atau diakuisisi oleh perusahaan lain. Jika terjadi akuisisi, perusahaan penerus akan memiliki akses ke informasi yang dikelola oleh perusahaan termasuk informasi akun pelanggan, dan akan terus terikat pada kebijakan ini sampai ada perubahan sebagaimana dijelaskan di atas.",
    "Perusahaan berbagi informasi dengan seluruh anak perusahaan dan joint venture untuk membantu mengkoordinasikan layanan yang perusahaan berikan kepada Anda, pelaksanaan syarat dan ketentuan serta mempromosikan kepercayaan dan keamanan.",
  ]

  const KeamananInformasi = [
    "Perusahaan mengenai informasi pelanggan dengan standar keamanan informasi tinggi.",
    "Perusahaan membatasi akses informasi pribadi Anda hanya kepada karyawan yang memerlukannya dalam rangka untuk menyediakan produk atau layanan kepada Anda.",
    "Perusahaan menjaga keamanan fisik, elektronik, dan prosedur pengamanan yang sesuai dengan peraturan pemerintah untuk menjaga informasi non-publik Anda.",
    "Keamanan akun Anda juga bergantung pada perlindungan password Anda. Dilarang memberikan password kepada orang lain. Perwakilan dari perusahaan tidak pernah meminta password Anda. Jika ada email atau komunikasi lainnya yang meminta password Anda, harap untuk berhati-hati dan kegiatan ini dianggap tidak sah dan mencurigakan.",
    "Jika Anda memberitahukan password kepada pihak ketiga untuk alasan apa pun, termasuk pihak ketiga telah berjanji untuk memberikan layanan tambahan seperti agregasi akun, maka pihak ketiga tersebut akan memiliki akses ke akun dan informasi pribadi Anda, dan Anda yang bertanggung jawab atas tindakan yang diambil karena mereka menggunakan password Anda.",
    "Jika Anda yakin orang lain telah mengakses password Anda, segeralah ubah password dan segera hubungi perusahaan.",
  ]

  const KeamananAkun = [
    "Dilarang mempublikasikan nomor virtual account (16 digit, kombinasi huruf dan angka) yang diciptakan BantenPay untuk pengguna (user).",
    "Segera lakukan verifikasi akun perusahaan.",
    "Perusahaan berhak men-suspend akun user yang ditemukan mempublikasikan nomor virtual account untuk keperluan menyimpang.",
    "Mengakses dan mengubah informasi akun.",
    "Anda dapat mereview informasi pribadi yang Anda berikan kepada perusahaan dan dapat membuat perubahan tertentu dengan menghubungi perusahaan.",
    "Apabila pelanggan ingin melakukan penutupan akun dapat melalui email Support@Speedcash.co.id.",
  ]

  const TipsAman = [
    "Jangan langsung mengklik link dalam email yang berasal dari perusahaan. Email mungkin saja berasal dari scammer yang mencoba untuk mencuri informasi Anda. Pastikan terlebih dahulu bahwa link tersebut benar dari perusahaan dengan menghubungi support perusahaan.",
    "Jaga agar security komputer Anda tetap update. Komputer Anda adalah jalan menuju perusahaan, rekening bank, atau akun online lain yang Anda miliki. Banyak dari akun-akun tersebut keamanannya hanya sebatas keamanan komputer Anda saja. Jadi pastikan Anda mengupdate anti virus, firewall, spyware detection/removal, dan lain-lain yang ada pada komputer Anda.",
    "Gunakan komputer yang terpercaya. Jangan menggunakan komputer orang lain untuk login ke akun perusahaan.",
    "Gunakan koneksi internet yang terpercaya. Yang terbaik adalah sambungan kabel di rumah Anda.",
    "Jangan pernah memberitahukan password dan PIN Anda kepada orang lain.",
    "Lakukan perubahan password atau PIN Anda secara berkala.",
    "Pastikan komputer Anda terbebas dari virus.",
    "Lakukan transaksi dengan hati-hati dan cermat pada setiap langkah/tahapannya.",
    "Pastikan selesai transaksi Anda telah melakukan proses akhir/tahap akhir SIGN OUT atau LOG OUT.",
    "Pelajari dan pahami terlebih dahulu persetujuan pengguna, kebijakan privasi, serta keamanan, syarat, dan ketentuan sebelum melakukan register/pendaftaran untuk penggunaan website dan atau layanan BantenPay.",
  ]

  return (
    <div>
      <p className="text-3xl font-semibold">KEBIJAKAN PRIVASI BANTENPAY</p>
      <div className="mt-5">
        BantenPay adalah bentuk cobranding dariSpeedCash (www.speedcash.co.id)
        hasil Kerjasama antara PT BPD Banten dengan PT Bimasakti Multi Sinergi.
        Data akun pengguna, aset, datatraffic, dan lain sebagainya masuk ke
        dalam pengelolaan ekosistem Speedcash. BantenPay juga menggunakan domain
        bmsecure.id , bmarmor.id sebagai backup koneksi API jika terjadi
        gangguan di speedcash.co.id
      </div>
      <div className="mt-5">
        Kebijakan privasi adalah ketentuanyang mengatur akun Anda dan informasi
        yang Anda berikan kepada Perusahaan yang meliputi hal-hal sebagai
        berikut:
      </div>
      <ul className="list-disc mt-5 list-outside pl-5">
        {KebijakanPrivasi.map((item) => (
          <li className="mb-2 " key={item}>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-20 font-semibold">Ikhtisar</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        {Ikhtisar.map((item) => (
          <li className="mb-2" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-10 font-semibold">Pemberitahuan Perubahan</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        {PemberitahuanPerubahan.map((item) => (
          <li className="mb-2 text-gray-700" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-10 font-semibold">
        Informasi Yang Perusahaan Kumpulkan
      </div>
      <div className="mt-5">
        Untuk mengakses akun BantenPay, Anda harus memberikan:
      </div>
      <ul className="list-decimal mt-5 list-outside pl-5">
        {Informasi.map((item) => (
          <li className="mb-2 text-gray-700" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        Untuk melakukan transaksi menggunakan BantenPay, Anda harus menyediakan
        semua informasi yang Perusahaan perlukan secara valid. Data-data
        tersebut akan dikirimkan ke sistem Speedcash melalui gc.speedcash.co.id
        . Informasi ini akan sangat diperlukan bagi perusahaan untuk :
      </div>
      <ul className="list-decimal mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">Melakukan proses transaksi</li>
        <li className="mb-2 text-gray-700">Mengeluarkan password baru</li>
        <li className="mb-2 text-gray-700">
          Melindungi Anda terhadap penipuan
        </li>
        <li className="mb-2 text-gray-700">
          Untuk memudahkan perusahaan menghubungi Anda
        </li>
      </ul>
      <div className="mt-5">
        Perusahaan berhak mensuspend akun yang tidak memenuhi persyaratan di
        atas serta membekukan dananya sampai proses investigasi selesai.
      </div>
      <div className="mt-5">
        Jika Anda memilih untuk mendaftar produk atau fitur tambahan guna
        memenuhi syarat fitur atau produk tersebut.
      </div>
      <div className="mt-5">
        Aplikasi mobile BantenPay menggunakan jalur API Speedcash dengan domain
        sebagai berikut :
      </div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">*.speedcash.co.id</li>
        <li className="mb-2 text-gray-700">*.speedcash.co.id</li>
        <li className="mb-2 text-gray-700">*.speedcash.co.id</li>
      </ul>
      <div className="mt-5">
        Semua lalu lintas data akan masuk sana dan dikelola oleh system
        Speedcash
      </div>
      <div className="mt-5 font-semibold">Informasi Transaksi</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">
          Bila Anda menggunakan BantenPay untuk mengirim uang ke pihak lain atau
          permintaan uang dari pihak lain. Perusahaan akan meminta Anda untuk
          memberikan informasi yang berkaitan dengan masing-masing transaksi
          termasuk jumlah transaksi dan alamat email dari pihak lain tersebut.
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan akan menyimpan informasi untuk setiap transaksi yang Anda
          lakukan melalui BantenPay
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan juga mengumpulkan IP Address setiap komputer atau perangkat
          yang Anda gunakan untuk mengakses akun BantenPay Anda, untuk membantu
          mendeteksi kemungkinan terjadinya kasus transaksu tidak sah
        </li>
      </ul>
      <div className="mt-5 font-semibold">Informasi Dari Pihak Ketiga</div>

      <div className="mt-5">
        Dalam usaha untuk melindungi semua pelanggan Perusahaan terhadap
        penipuan. Perusahaan akan melakukan verifikasi dengan pihak ketiga
        mengenai informasi yang Anda berikan.
      </div>
      <div className="mt-5 font-semibold">Verifikasi Tambahan</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">
          Dalam upaya menanggulangi penipuan dan fraud, perusahaan mewajibkan
          adanya verifikasi tambahan
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan akan meminta Anda untuk menyediakan informasi tambahan
          (scan KTP, kartu keluarga, buku tabungan, dll) untuk melakukan
          penarikan dalam akun
        </li>
        <li className="mb-2 text-gray-700">
          Jika Anda tidak memverifikasi informasi yang Anda berikan kepada
          perusahaan, maka perusahaan berhak mensuspend akun dan membekukan dana
          Anda sampai proses investigasi selesai.
        </li>
      </ul>
      <div className="mt-5 font-semibold">Informasi Lalu Lintas Website</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        {InformasiLaluLintass.map((item) => (
          <li key={item} className="mb-2 text-gray-700">
            {item}
          </li>
        ))}
        <ul className="list-decimal list-outside pl-5">
          <li className="mb-2 text-gray-700">Nama lengkap</li>
          <li className="mb-2 text-gray-700">Nama perusahaan (jika ada)</li>
          <li className="mb-2 text-gray-700">Alamat</li>
          <li className="mb-2 text-gray-700">Nomor Handphone</li>
          <li className="mb-2 text-gray-700">URL Website (jika ada)</li>
          <li className="mb-2 text-gray-700">Alamat e-mail</li>
          <li className="mb-2 text-gray-700">Alamat e-mail</li>
        </ul>
        <li className="mb-2 mt-5 text-gray-700">
          Untuk melakukan transaksi menggunakan SpeedCash, Anda harus
          menyediakan semua informasi yang perusahaan perlukan secara vald.
          Informasi ini akan sangat diperlukan bagi perusahaan untuk:
        </li>
        <ul className="list-decimal list-outside pl-5">
          <li className="mb-2 text-gray-700">Melakukan proses transaksi</li>
          <li className="mb-2 text-gray-700">Mengeluarkan password baru</li>
          <li className="mb-2 text-gray-700">
            Melindungi Anda terhadap penipuan
          </li>
          <li className="mb-2 text-gray-700">
            Untuk memudahkan perusahaan menghubungi Anda
          </li>
          <li className="mb-2 text-gray-700">URL Website (jika ada)</li>
          <li className="mb-2 text-gray-700">
            Sebagai refensi saat melakukan transaksi (Informasi Contact List)
          </li>
        </ul>
      </ul>

      <div className="mt-10 font-semibold">Penggunaan “Cookies”</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        {PenggunaanCookies.map((item) => (
          <li key={item} className="mb-2 text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5 font-semibold">Korespondensi Customer Service</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">
          Jika anda mengirimkan koresponden kepada perusahaan, perusahaan berhak
          menyimpan koresponden tersebut dalam rangka untuk mengukur dan
          memperbaiki layanan pelanggan BantenPay, dan untuk menyelidiki potensi
          penipuan dan pelanggaran atas Persyaratan Penggunaan.
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan secara periodik akan melakukan penghapusan catatan sesuai
          dengan ketentuan yang berlaku dalam Perundang-undangan Republik
          Indonesia dan ketentuan-ketentuan Internasional
        </li>
      </ul>
      <div className="mt-5 font-semibold">
        Kuesioner, Survey, dan Data Profile
      </div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">
          Perusahaan dapat menawarkan kuesioner dan survey kepada pengguna untuk
          pengumpulan infirmasi demografi atau untuk mengetahui keinginan dan
          kebutuhan para pengguna. Penggunaan informasi yang dikumpulkan ini
          akan dijelaskan secara detail didalam proses survey itu sendiri.
        </li>
        <li className="mb-2 text-gray-700">
          Jika perusahaan mengummpulkan informasi pribadi ini dari pengguna
          perusahaan dalam kuesioner atau survey, para pengguna akan memperoleh
          pemberitahuan bagaimana informasi ini akan digunakan sebelum mereka
          berpartisipasi dalam survey atau kuesioner.
        </li>
      </ul>
      <div className="mt-5 font-semibold">Penerima atau Pemohon Non-member</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">
          Ketika member mengirimkan pembayaran ke non member atau permohonan
          pembayaran dari seseorang sebagai individu yang tidak terdaftar
          sebagai member perusahaan, perusahaan akan meminta informasi member
          untuk mensubmit kepada perusahaan nama dan/atau alamat email pihak
          lain, untuk kepentingan member yang mencoba untuk menghubungi non
          member, sehingga member dapat melihat catatan lengkap transaksinya,
          termasuk transaksi yang tidak sah.
        </li>
        <li className="mb-2 text-gray-700">
          Informasi tersebut disimpan tanpa batas waktu dan perusahaan tidak
          akan membukanya ke non member
        </li>
        <li className="mb-2 text-gray-700">
          Non member ini memiliki hak yang sama untuk mengakses dan mengkoreksi
          informasi mereka (dengan asumsi bahwa alamat email mereka benar dan
          dapat menjangkau mereka) sebagaimana orang lain yang menggunakan
          BantenPay.
        </li>
      </ul>
      <div className="mt-5 font-semibold">
        Penggunaan dan Pengungkapan Informasi
      </div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">
          Perusahaan mengumpulkan, menyimpan, dan memproses informasi pribadi
          anda pada server BantenPay
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan menggunakan informasi pribadi anda yang berasal dari
          informasiatau data anda yang dimiliki oleh perusahaan untuk
          menyediakan layanan dan untuk memproses transaksi-transaksi, untuk
          layanan customer service, untuk menentukan kelayakan anda untuk
          menerima penawaran produk atau fitur khusus, serta untuk meningkatkan
          produk dan layanan BantenPay
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan menggunakan informasi yang adna berikan untuk mengakses
          layanan tertentu dari pihak ketiga atas nama anda dan melakukan
          tindakan yang anda minta perusahaan lakukan.
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan memberikan akses pengenalan informasi individual Pengguna
          hanya kepada karyawan yang membutuhkannya untuk memenuhi permintaan
          layanan pelanggan.
        </li>
      </ul>
      <div className="mt-5 font-semibold">
        Pembatasan Informasi Untuk Pelanggan Lainnya
      </div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">
          Informasi anda (username, nama, dan tanggal transaksi) akan
          ditampilkan kepada pelanggan perusahaan lain yang bertransaksi dengan
          anda melalui BantenPay
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan tidak akan memberikan informasi finansiao dan akun Bank
          yang diigunakan dalam proses transaksi antara pengguna dan pihak lain
          melalui BantenPay kepada pihak manapun, kecuali jika perusahaan
          diminta oleh kepolisian, kejaksaan, pengadilan, dan instansi terkait,
          karena adanya perbuatan hukum yang harus dipenuhi
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan juga dapat menginformasikan kepada pelanggan lain jumlah
          pembayaran yang Anda terima dari pelanggan yang statusnya “Gold” atau
          “Platinum” dan pengukuran keseluruhan lain yang memberikan indikasi
          reputasi anda dengan pelanggan lain.
        </li>
      </ul>
      <div className="mt-10 font-semibold">
        Pembatasan Informasi Kepada Pihak Ketiga Selain Pelanggan
      </div>
      <ul className="list-disc mt-5 list-outside pl-5">
        {PembatasanInformasi.map((item) => (
          <li key={item} className="mb-2 text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5 font-semibold">Kontak Dengan Pelanggan</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">
          Perusahaan berkomunikaasi dengan pelanggan secara teratur melalui
          email untuk menyediakan layanan yang diminta, dan perusahaan juga
          berkomunikasi melaui email atau telepon untuk menyelesaikan keluhan
          pelanggan atau untuk menyelidiki transaksi mencurigakan.
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan menggunakan alamat email anda untuk mengkonfirmasi
          pembukaan akun BantenPay untuk mengirimkan pemberitahunan pembayaran
          yang adna kirimkan atau terima melalui BantenPay, mengirimkan
          informasi mengenai perubahan penting pada produk atau layanan
          BantenPay, dan mengirimkan pemberitahuan dan informasi lainnya yang
          diminta oleh hukum.
        </li>
        <li className="mb-2 text-gray-700">
          Perusahaan juga akan menggunakan alamat email anda untuk mengirimkan
          komunikasi dalam bentuk laun yang dapat anda kontril termasuk di
          dalamnya, tips, newsletter, customer survey, dan informasi khusus dari
          puhak ketiga, Sehubungan sengan audit independen atas laporan keuangan
          dan operasi perushaan, auditor mungkun akan mencari dan menghubungi
          pelanggan perusahaan untuk memastikan bahwa catatan perusahaan akurat.
          Namun auditor ini tidak dapat menggunakan informasi pribadi untuk
          tujuan lain.
        </li>
      </ul>
      <div className="mt-5 font-semibold">Kebijakan Keamanan</div>
      <div className="mt-5">
        KebIjakan keamanan meliputi hal-hal sebagai berikut :
      </div>
      <ul className="list-disc mt-5 list-outside pl-5">
        <li className="mb-2 text-gray-700">Keamanan informasi</li>
        <li className="mb-2 text-gray-700">Keamanan akun perusahaan</li>
        <li className="mb-2 text-gray-700">
          Mengakses dan mengubah informasi akun
        </li>
        <li className="mb-2 text-gray-700">Hubungi kami</li>
      </ul>
      <div className="mt-5 font-semibold">Keamanan Informasi</div>
      <ul className="list-disc mt-5 list-outside pl-5">
        {KeamananInformasi.map((item) => (
          <li key={item} className="mb-2 text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5 font-semibold">Keamanan Akun Perusahaan</div>
      <div className="mt-5">
        Demi menjaga keamanan akun BantenPay pengguna (user), berikut beberapa
        hal yang harus anda lakukan :
      </div>
      <ul className="list-disc mt-5 list-outside pl-5">
        {KeamananAkun.map((item) => (
          <li key={item} className="mb-2 text-gray-700">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 font-semibold">
        Jika anda memiliki pertanyaan mengenai kebijakan silahkan langsung ke
        halaman FAQ atau halaman Hubungi Perusahaan.
      </div>
      <div className="mt-10 font-semibold">Hacking</div>
      <div className="mt-5 ">
        Jika anda melakukan percobaan atau tindakan di liar ketentuan yang telah
        disetujui (hacking, modifikasi, merusak, dll) dan segala kegiatan
        melawan hukum terhadap sistem perangkat lunak perusahaan, maka
        perusahaan akan menindaklanjuti tindakan tersebut dengan menempuh jalur
        hukum.
      </div>
      <div className="mt-5 font-semibold">Password</div>
      <div className="mt-5">
        Perusahaan tidak akan pernah meminta password anda. Jangan pernah
        memberikan password anda kepada siapapun. Perusahaan tidak akan
        bertanggungjawab atas kerugian yang dialami oleh pengguna (user) sebagai
        akibat penyalahgunaan password.
      </div>
      <div className="mt-5 font-semibold">
        Tips Aman Menggunakan Website Bank Banten
      </div>
      <ul className="list-disc mt-5 pb-10 list-outside pl-5">
        {TipsAman.map((item) => (
          <li key={item} className="mb-2 text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
