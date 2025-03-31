Tripkolic Frontend Task

Teknoloji Yığını
- Frontend Framework: Next.js
- Dil: TypeScript
- Stil: TailwindCSS
- Durum Yönetimi: React Context API
- HTTP İstemcisi: Axios
- İkonlar: Heroicons
- Geliştirme Araçları: ESLint, PostCSS, Autoprefixer

Proje Yapısı
```
tripkolic/
├── public/                            # Statik dosyalar (resimler, ikonlar)
│   ├── favicon.ico
│   └── images/
│       └── ...                        # Görseller
├── src/
│   ├── app/                           # App router dizini (Next.js 13+)
│   │   ├── page.tsx                   # Ana sayfa (karşılama)
│   │   ├── layout.tsx                 # Root layout
│   │   ├── globals.css                # Global stil dosyası
│   │   └── profile/                   # Profil sayfası route'u
│   │       └── page.tsx               # Profil route içeriği
│
│   ├── components/                    # UI bileşenleri
│   │   ├── auth/                      # Giriş ile ilgili bileşenler
│   │   │   └── LoginForm.tsx
│   │   ├── common/                    # Ortak bileşenler
│   │   │   ├── Avatar.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Logo.tsx
│   │   ├── layout/                    # Sayfa düzen bileşenleri
│   │   │   ├── AuthLayout.tsx
│   │   │   ├── BottomNavigation.tsx
│   │   │   ├── ProfileHeader.tsx
│   │   │   └── ProfileLayout.tsx
│   │   └── modals/                    # Modal bileşenleri
│   │       ├── BankDetailsModal.tsx
│   │       ├── ContactDetailsModal.tsx
│   │       └── SettingsModal.tsx
│
│   ├── context/                       # Global context’ler
│   │   └── AuthContext.tsx
│
│   ├── pages/                         # Sayfaya özel bileşenler (görsel yapı)
│   │   ├── login/
│   │   │   └── LoginPage.tsx
│   │   └── profile/
│   │       ├── ProfilePage.tsx
│   │       ├── ProfileCard.tsx
│   │       └── ProfileField.tsx
│
│
│   # Yapılandırmalar                   
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── eslint.config.mjs
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── README.txt

```

Özellikler
1. Kimlik Doğrulama Sistemi
   - API entegrasyonlu kullanıcı girişi
   - Kullanıcı kayıt seçenekleri
   - Oturum yönetimi

2. Profil Yönetimi
   - Kullanıcı profil görünümü ve gezinme
   - Profil detaylarını düzenleme

3. **Duyarlı Responsive Tasarım**
   - Mobile de uygunluk
   - Çeşitli ekran boyutları için uyarlanabilir düzenler

Uygulama Detayları
- Kimlik Doğrulama: Uygulama genelinde kimlik doğrulama durumunu yönetmek için React Context API kullanılarak uygulanmıştır
- Düzen Sistemi: Kimlik doğrulama ekranları ve profil görünümleri için bileşen tabanlı düzenler
- API Entegrasyonu: Backend'e HTTP istekleri için Axios kullanır
- Yönlendirme: Verimli istemci tarafı gezinme için Next.js App Router kullanır
- Tip Güvenliği: Geliştirilmiş kod kalitesi ve geliştirici deneyimi için tam TypeScript uygulaması

 Geliştirme Yaklaşımı
Proje, aşağıdakileri içeren modern React en iyi uygulamalarını takip eder:
- Bileşen tabanlı mimari
- Yeniden kullanılabilir mantık için özel kancalar (custom hooks)
- Durum yönetimi için Context API
- İstemci tarafı form doğrulama
- Duyarlı tasarım prensipleri

Başlangıç
1. Proje klasörüne gidin: `cd tripkolic`
2. Bağımlılıkları yükleyin: `npm install`
3. Geliştirme sunucusunu çalıştırın: `npm run dev`

Proje Hedefleri
Bu proje aşağıdaki alanlarda yetkinliği göstermektedir:
- Next.js ile modern React geliştirme
- Tip güvenliği için TypeScript
- TailwindCSS ile UI/UX uygulaması
- Durum yönetimi çözümleri
- API entegrasyonu
- Temiz kod mimarisi 
