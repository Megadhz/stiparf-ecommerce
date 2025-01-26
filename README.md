This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Kepada Bapak Dosen Wayan Galih Pratama,S.Ti.,M.Ti yang terhormat, 
terlampir proyek UAS kami sesuai dengan instruksi yang telah diberikan. 
Kami sangat berterima kasih atas waktu dan kesediaan Bapak dalam membimbing kami.🙏

-------------------------------------------------------------------------

Website E-Commerce (Stiparf Perfume Collection)

Nama Kelompok : 
I Putu Megadhana Artabawa (230030031)
Komang Bagus Widiana  (230030062)
I Gede Adi Sedaya Tana  (230030012)
Vinto Dhammanda Suryanto Wijaya  (230030051)
I Wayan Kanda Wedanatha Pasek  (230030236)

-------------------------------------------------------------------------

    - Source Code (Github) : https://github.com/Megadhz/stiparf-ecommerce
    - Source Video Presentasi (Youtube) : https://www.youtube.com/watch?v=Hk7D3Xt_YBs
    - Source Preview (Drive): https://drive.google.com/drive/folders/12N47X6MxyNjfty_A8fJp2R4mz20e4WaR?usp=sharing

-------------------------------------------------------------------------

Teknologi utama yang digunakan:

    - Library UI: React (versi 19)
    - Framework: Next.js (versi 15.1.3 dengan Turbopack)
    - Bahasa Pemrograman: TypeScript (versi 5)
    - Styling: Tailwind CSS (versi 3.4.17), dengan tambahan tailwindcss-animate untuk animasi.

Teknologi Integrasi yang Digunakan:

    - CMS: Sanity (versi 3.68.3) dengan integrasi next-sanity dan utility @sanity/image-url, @sanity/vision.
    - Autentikasi: Clerk (@clerk/nextjs versi 6.9.6).
    - Pembayaran: Stripe (versi 17.5.0).
    - State Management: Zustand (versi 5.0.3).
    - Animasi/Efek Lainnya: Framer Motion (versi 11.18.1 dan kemungkinan versi lain yaitu "motion" versi 11.15.0), GSAP (versi 3.12.7), react-tsparticles       (versi 2.12.2) dan tsparticles-engine (versi 2.12.0).
    - UI Components/Utilities: Radix UI (@radix-ui/react-*), Lucide React, class-variance-authority, clsx, tailwind-merge, cmdk.
    - Notifikasi: react-hot-toast.
    - Image Zoom: react-medium-image-zoom.
    - Tanggal/Waktu: date-fns.
    - Icon: react-icons
    - Development Tools: ngrok (untuk expose localhost).


-------------------------------------------------------------------------

Fitur Utama :
Untuk Fitur utama sudah 100% diterapkan dari referensi pada excel yang diberikan.

Daftar Parfum : 
    - Menampilkan daftar parfum berdasarkan kategori (new, hot, discount, men, women, unisex).
    - Gambar produk yang dapat diperbesar.
    - Fitur pencarian produk.

Keranjang Belanja : 
    - Menambah/Mengurangi jumlah produk.
    - Menghapus produk.
    - Menampilkan Harga produk saat dipilih.
    - Menampilkan total harga dan estimasi ongkir.

Pembayaran (integrasi dengan stripe):
    - Transfer bank manual dengan konfirmasi pembayaran.
    - Integrasi dengan payment gateway (Paypal, stripe)
    - Menghitung ongkos kirim.
    - Menampilkan status pengiriman (diproses, dikirim, selesai).

Pengelolaan Parfum oleh Penjual (integrasi dengan sanity): 
    - Menambah, mengedit, menghapus produk.
    - Mengatur harga, deskripsi, stok.
    - Dashboard sanity untuk penjualan dan stok.

Akun Pengguna (integrasi dengan clerk): 
    - Login dan registrasi.
    - Mengelola informasi pribadi.
    - Riwayat pembelian.

Halaman Admin (Integrasi dengan sanity dan clerk):
    - Menambahkan, mengedit, dan menghapus produk.
    - Melihat laporan penjualan dan transaksi.
    - Meninjau status pesanan dan memproses pengiriman.
    - Melihat dan mengelola data pengguna.


fitur tambahan:
 
    - Memberikan fitur single product detail yang dimana bisa mengakses lebih detail produk seperti karakteristik produk itu.
    - Menambahkan fitur rekomendasi parfum yang baru keluar, hot, maupun sedang discount pada halaman utama.
    - Menambahkan efek splashscreen saat baru membuka website.
    - Menambahkan fitur menyimpan informasi kartu saat pembayaran.
    - Menambahkan fitur security yang kuat dimana password yg di muat saat regist harus kuat dan tidak boleh bersifat gampang dibobol seperti testweb123
    - Menambahkan fitur mengubah foto profil pada pengguna.
    - Menambahkan halaman about us, contact us, terms & conditions, privacy policy, dan Faqs.
    - Menambahkan fitur menampilkan lokasi tempat dimana toko fisik kami pada halaman contact us.
    - Bisa mencetak invoice saat orderan sukses. 
    - Menambahkan fitur menambahkan kode voucher yang bisa digunakan oleh pengguna.

-------------------------------------------------------------------------

Waktu pengerjaan : 3 minggu

-------------------------------------------------------------------------

Kami mengucapkan terima kasih yang sebesar-besarnya kepada 
seluruh pihak yang telah berkontribusi dalam penyelesaian proyek ini.

-------------------------------------------------------------------------

