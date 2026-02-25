// Fitur Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Cek preferensi sebelumnya dari Local Storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Simpan pilihan user dan ubah ikon
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙';
    }
});

// Fitur Sapaan Otomatis (Pagi/Siang/Malam)
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();

let greetingText = 'Selamat Datang!';
if (hour >= 5 && hour < 12) {
    greetingText = 'Selamat Pagi, Sobat!';
} else if (hour >= 12 && hour < 15) {
    greetingText = 'Selamat Siang, Sobat!';
} else if (hour >= 15 && hour < 18) {
    greetingText = 'Selamat Sore, Sobat!';
} else {
    greetingText = 'Selamat Malam, Sobat!';
}

greetingElement.textContent = greetingText;
