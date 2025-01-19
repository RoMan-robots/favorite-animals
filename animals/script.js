$(document).ready(function() {
    const animals = {
        dog: {
            name: 'Собака',
            image: 'https://lh4.googleusercontent.com/proxy/C2_ebTkHYUomhhbLP80lzH_-VK9Mc-bCxcnoTpU3YHXxtcNAZdcpl6ahPiFhvj80AS6AemopykKHDAw_gmYHH0ivruo_-6Z-',
            description: 'Собака - вірний друг людини, розумна та грайлива тварина.',
            habitat: 'Живе по всьому світу, переважно поруч з людьми',
            diet: 'Всеїдна, може їсти спеціальний корм, м\'ясо, овочі',
            sound: 'dog.mp3'
        },
        cat: {
            name: 'Кіт',
            image: 'https://zoocomplex.com.ua/image/catalog/blog/article-id-542/article-id-542-02.webp',
            description: 'Незалежна та граційна домашня тварина, найпопулярніша з домашніх тварин.',
            habitat: 'Живе в приміщеннях, може гуляти на вулиці',
            diet: 'М\'ясоїдна, полюбляє рибу, м\'ясо, спеціальний корм',
            sound: 'cat.mp3'
        },
        parrot: {
            name: 'Папуга',
            image: 'https://zoocomplex.com.ua/image/catalog/blog/article-id-518/article-id-518-01.webp',
            description: 'Яскравий та розумний птах, здатний імітувати людську мову.',
            habitat: 'Тропічні та субтропічні ліси, утримується вдома',
            diet: 'Насіння, горіхи, фрукти, спеціальний корм для папуг',
            sound: 'parrot.mp3'
        },


        lion: {
            name: 'Лев',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
            description: 'Лев - цар звірів, найбільший хижак родини котячих.',
            habitat: 'Африканські саванни, рідше в лісистих районах',
            diet: 'Хижак, полює на антилоп, зебр та інших травоїдних тварин',
            sound: 'lion.mp3'
        },

        elephant: {
            name: 'Слон',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg',
            description: 'Слон - найбільша наземна тварина, відома своїм інтелектом та соціальною поведінкою.',
            habitat: 'Африканські та азійські саванни, ліси',
            diet: 'Рослинна їжа, з\'їдає до 150 кг рослин на день',
            sound: 'elephant.mp3'
        },

        wolf: {
            name: 'Вовк',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eurasian_Wolf_in_Skansen_Zoo_1.jpg',
            description: 'Вовк - хижий ссавець з розвиненою соціальною структурою зграї.',
            habitat: 'Ліси, тундра, гірські райони Європи, Азії та Північної Америки',
            diet: 'М\'ясоїдний, полює на оленів, лосів, дрібних ссавців',
            sound: 'wolf.mp3'
        },


        penguin: {
            name: 'Пінгвін',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Emperor_Penguin_Manchot_empereur.jpg',
            description: 'Пінгвін - унікальний птах, що живе переважно в холодних регіонах Південної півкулі.',
            habitat: 'Антарктида, субантарктичні острови',
            diet: 'Риба, кальмари, криль',
            sound: 'penguin.mp3'
        },

        panda: {
            name: 'Панда',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG',
            description: 'Панда - рідкісний і милий ведмідь, що живе в горах Центрального Китаю.',
            habitat: 'Бамбукові ліси в горах провінції Сичуань',
            diet: 'Майже виключно бамбук, до 12-38 кг на день',
            sound: 'panda.mp3'
        },

        kangaroo: {
            name: 'Кенгуру',
            image: 'https://imglife.pravda.com.ua/images/doc/9/d/9d585cd-depositphotos-186487020-s.jpg',
            description: 'Кенгуру - ексклюзивна тварина з Австралії.',
            habitat: 'Луки, чагарники та рідколісся Австралії',
            diet: 'Трава, листя, кора дерев',
            sound: 'kangaroo.mp3'
        }
    };

    let currentAnimal = null;
    let currentSound = null;

    $('.animal-buttons button').on('click', function() {
        const animalType = $(this).data('animal');
        const pageTitle = $('title').text();
        const animal = animals[animalType];

        currentAnimal = animalType.toLowerCase();

        $('#animal-image').attr('src', animal.image);
        $('#animal-name').text(animal.name);
        $('#animal-description').text(animal.description);
        $('#animal-habitat').html('<strong>Де живе:</strong> ' + animal.habitat);
        $('#animal-diet').html('<strong>Що їсть:</strong> ' + animal.diet);

        $('#animal-info').fadeIn();
    });

    $('.sound-button').on('click', function() {
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
        const soundFile = `./sounds/${currentAnimal}.mp3`;
        const audio = new Audio(soundFile);
        audio.play().catch(error => {
            console.error('Error playing sound:', error);
            alert('Не вдалося відтворити звук');
            currentSound = null;
        });
        currentSound = audio;
    });
});