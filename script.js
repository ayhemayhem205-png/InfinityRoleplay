// قوائم للشخصيات والقصص
let characters = ['شخصية 1: البطل الشجاع', 'شخصية 2: الشرير الذكي'];
let stories = ['قصة 1: مغامرة في المدينة', 'قصة 2: سر القلعة'];

// تحديث القوائم عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    updateCharacterList();
    updateStoryList();
});

// دالة إضافة شخصية
document.getElementById('add-character').addEventListener('click', () => {
    const name = prompt('أدخل اسم الشخصية:');
    if (name) {
        characters.push(name);
        updateCharacterList();
    }
});

// دالة إضافة قصة
document.getElementById('add-story').addEventListener('click', () => {
    const title = prompt('أدخل عنوان القصة:');
    if (title) {
        stories.push(title);
        updateStoryList();
    }
});

// دالة تحديث قائمة الشخصيات
function updateCharacterList() {
    const list = document.getElementById('character-list');
    list.innerHTML = characters.map(char => `<div class="news-item"><p>${char}</p></div>`).join('');
}

// دالة تحديث قائمة القصص
function updateStoryList() {
    const list = document.getElementById('story-list');
    list.innerHTML = stories.map(story => `<div class="news-item"><p>${story}</p></div>`).join('');
}

// نموذج الاتصال (بسيط، يمكن توسيعه)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('تم إرسال رسالتك! شكرًا لك.');
});

// زر الانضمام
document.getElementById('join-btn').addEventListener('click', () => {
    alert('مرحبًا! انضم إلى مجتمعنا.');
});
