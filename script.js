// Ders programı ve ödevler
const dersProgrami = {
    "Pazartesi": [
        { saat: "09:00", ders: "Matematik", odev: "Sayfa 42, Sorular 1-5" },
        { saat: "10:00", ders: "Fizik", odev: "Enerji konusu çalış" },
        { saat: "11:00", ders: "Kimya", odev: "Asitler ve Bazlar ödevi" }
    ],
    "Salı": [
        { saat: "09:00", ders: "Türkçe", odev: "Kompozisyon yaz" },
        { saat: "10:00", ders: "Tarih", odev: "Kurtuluş Savaşı ödevi" },
        { saat: "11:00", ders: "Biyoloji", odev: "Hücre konusunu çalış" }
    ],
    "Çarşamba": [
        { saat: "09:00", ders: "Matematik", odev: "Sayfa 45, Sorular 1-5" },
        { saat: "10:00", ders: "Fizik", odev: "Hareket konusu çalış" },
        { saat: "11:00", ders: "Kimya", odev: "Kimyasal Tepkimeler ödevi" }
    ],
    "Perşembe": [
        { saat: "09:00", ders: "Türkçe", odev: "Şiir ezberle" },
        { saat: "10:00", ders: "Tarih", odev: "Osmanlı İmparatorluğu ödevi" },
        { saat: "11:00", ders: "Biyoloji", odev: "Bitkiler konusunu çalış" }
    ],
    "Cuma": [
        { saat: "09:00", ders: "Matematik", odev: "Sayfa 50, Sorular 1-5" },
        { saat: "10:00", ders: "Fizik", odev: "Elektrik konusu çalış" },
        { saat: "11:00", ders: "Kimya", odev: "Moleküller ödevi" }
    ]
};

// Ödev kontrol fonksiyonu
function odevKontrol() {
    const gun = document.getElementById("gun").value;
    const saat = document.getElementById("saat").value;
    const sonucElement = document.getElementById("sonuc");

    if (dersProgrami[gun]) {
        const dersler = dersProgrami[gun];
        const ders = dersler.find(d => d.saat === saat);
        if (ders) {
            sonucElement.textContent = `${ders.ders} dersi için ödev: ${ders.odev}.`;
        } else {
            sonucElement.textContent = `${gun} günü ${saat} saatinde ders bulunmamaktadır.`;
        }
    } else {
        sonucElement.textContent = `${gun} günü ders programında bulunmamaktadır.`;
    }
}
