# Algoritma Metaheuristik: ALO dan GOA

Presentasi interaktif berbasis web tentang **Ant Lion Optimizer (ALO)** dan **Grasshopper Optimization Algorithm (GOA)** untuk penjadwalan task pada komputasi awan.

## Prasyarat

- **Node.js** versi 20.19 atau 22.12 ke atas. Cek dengan `node -v`.
- **npm**, yang ikut terpasang bersama Node.js.
- **Git**, untuk meng-clone repo.

## Struktur Folder

```
SOKA-K2-Metaheuristik/
  website/
    public/          gambar dan aset statis (bg.png)
    src/
      slides/        satu file .tsx per slide
      lib/           logika algoritma (alo.ts, goa.ts)
      components/    SlideFrame.tsx, kerangka slide
      App.tsx        navigasi dan tombol slide
      main.tsx       titik masuk aplikasi
    package.json
```

## Cara Menjalankan

**1. Clone repo**

```bash
git clone https://github.com/revaerica/SOKA-K2-Metaheuristik.git
cd SOKA-K2-Metaheuristik/website
```

**2. Install dependensi**

```bash
npm install
```

**3. Jalankan server development**

```bash
npm run dev
```

Buka alamat yang tertulis di terminal, biasanya `http://localhost:5173`.

## Kontrol Presentasi

| Tombol | Fungsi |
|---|---|
| `→` atau `Spasi` | Slide berikutnya |
| `←` | Slide sebelumnya |
| `F` | Masuk atau keluar mode fullscreen |
| Klik tombol panah | Pindah slide dengan mouse |

## Menambah Slide Baru

1. Buat file baru di `src/slides/`, misalnya `02-metaheuristik.tsx`.
2. Isi file dengan komponen dan export sebagai default:

```tsx
export default function Slide02() {
  return <div style={{ position: 'absolute', inset: 0 }}>Isi slide</div>
}
```

3. Daftarkan di `App.tsx` dengan mengimpor komponen tersebut, lalu tambahkan ke array `slides`:

```tsx
import Slide02 from './slides/02-metaheuristik'

const slides = [
  { Component: Slide01, bg: '/bg.png' },
  { Component: Slide02, bg: '/bg.png' },
]
```

Urutan slide mengikuti urutan array.

## Build untuk Produksi

```bash
npm run build
```

Hasilnya ada di folder `dist/`. Untuk mengecek hasil build secara lokal:

```bash
npm run preview
```

## Deploy ke Netlify

1. Login ke [netlify.com](https://www.netlify.com) dan pilih **Add new site → Import an existing project**.
2. Pilih **GitHub**, lalu pilih repo `SOKA-K2-Metaheuristik`.
3. Atur konfigurasi build:

| Pengaturan | Nilai |
|---|---|
| Base directory | `website` |
| Build command | `npm run build` |
| Publish directory | `dist` |

Jika Netlify menampilkan `website/dist` secara otomatis, pakai nilai tersebut.

4. Klik **Deploy**. Setiap kali ada `git push` ke branch `main`, Netlify akan deploy ulang otomatis.

## Pemecahan Masalah

- **Halaman kosong:** buka tab Console di F12 untuk melihat error. Pastikan `npm run dev` berjalan dan buka port yang tertulis di terminal, lalu tekan `Ctrl + Shift + R`.
- **Gambar tidak muncul:** pastikan `bg.png` berada di `website/public/` dengan nama yang sama persis.
- **`vite` is not recognized:** jalankan `npm install` ulang di folder `website`.
- **ERESOLVE saat install:** pastikan TypeScript versi 5, dengan `npm install -D typescript@~5.9`.
- **Port sudah dipakai:** tutup terminal lain yang menjalankan `npm run dev` dengan `Ctrl + C`.
