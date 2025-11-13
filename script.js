// قائمة الشخصيات والقصص (يمكن تعديلها أو جعلها ديناميكية)
let characters = [];
let stories = [];

// دالة لإضافة شخصية
document.getElementById('add-character').addEventListener('click', () => {
    const name = prompt('أدخل اسم الشخصية:');
    if (name) {
        characters.push(name);
        updateCharacterList();
    }
});

// دالة لإضافة قصة
document.getElementById('add-story').addEventListener('click', () => {
    const title = prompt('أدخل عنوان القصة:');
    if (title) {
        stories.push(title);
        updateStoryList();
    }
});

// تحديث قائمة الشخصيات
function updateCharacterList() {
    const list = document.getElementById('character-list');
    list.innerHTML = characters.map(char => `<p>${char}</p>`).join('');
}

// تحديث قائمة القصص
function updateStoryList() {
    const list = document.getElementById('story-list');
    list.innerHTML = stories.map(story => `<p>${story}</p>`).join('');
}