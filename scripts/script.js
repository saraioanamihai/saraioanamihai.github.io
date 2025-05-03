document.addEventListener('DOMContentLoaded', function () {
    // Arrays of names (provided by you)
    const menNames = [
        "Fabi", "Maiu", "Neagoe", "Alec", "Robert Marinescu", "Dante", "Stângă", "Gabi Alexandrescu",
        "Tudi", "Alex Trandafir", "Paul Box", "Alioșa", "Alex Panait", "Gabi Buzescu", "Vlad Popa",
        "Cristi Radu", "Silvestru", "Sebi Iacob", "Yeti", "Bogdan Gătitu", "Andrei Neacșu", "Floco",
        "Marin", "Răzvan Gheorghe", "Dragoș Stănciulescu", "Theo Duca", "Radu Cucoaneș", "Dănilă",
        "Sahim", "Alex Roma", "Abdallah", "Piti", "Soke", "David Pentelei", "Gabi Buzescu", "Voicu",
        "Dorde", "Puiu", "Ivă", "Matei Lascu", "Pascu", "Rareș Roșu", "Raul Răduță", "Jumi", "Tudor Vasilescu",
        "Tudor Apopei", "Roberto", "Bădici", "Costin","Edi","Victor Stancu", "Vlad Soranna",
        "Ștefey", "Caragea", "Andu", "Dragoș Viuleț", "Tavi", "Cosmin Carșote", "Mihai Lidl", "Dochianu",
        "Profira", "Sima", "Simi", "Vîlcu", "Mandu", "Țăranu", "Iustin", "George Stoian", "Păduraru",
        "fratele lu Păduraru", "Zanfi", "Vini", "Luca Hara", "Șerban", "Mihnea Tomescu", "Robi Chinezu",
        "Luca Voicu", "Cozadin", "Mihnea Iancu", "Nejloveanu", "Papote", "Alin Tihnea", "Alin Ionescu",
        "Luca Tatomir", "Lucan", "Mihnea", "Sarafoleanu", "Tudor Mavrodin", "Andrei Mavrodin",
        "Andrei Toader", "Alex Toader", "Iulian Lisnic", "Alex Morcov", "Răzvan Gogan", "Baboi",
        "Mihnea Ioachim", "Ezekel", "Rareș Căutiș", "Palisandru", "Elisei", "Radu Ștefan", "Kolea",
        "Virgil Munteanu", "Broască", "David Buzatu", "Dragoș îmibagpulanmăta", "Fane", "Dimi(roacherul)",
        "Petre Dumitrescu", "Victoraș future husband", "Mihnea G", "Corny", "Manu", "Octi", "Cosmin Ioan"
    ];

    const womenNames = [
        "Mara", "Patri", "Soranna", "Ana Uceanu", "Paola", "Anca Dobre", "Eva", "Sabina", "Carla",
        "Claudia", "Maria Lăzărescu", "Maria Magheru", "Alexia Gabriela", "Flavia", "Maria Tănase",
        "Teo Tomescu", "Iorga", "Răcaru", "Andreea Bak", "Anda Criț", "Arina", "Cozmina", "Rahela",
        "Kritikoasa", "Ioana CB", "Roberta", "Ana Mitrofan", "Ana Ivășchescu", "Brighi", "Pui",
        "Ioana Floco", "Maria Iftemie", "Karina", "Alexandra Mandu", "Ioana Profira", "Lili",
        "Irina Benchescu", "Terez", "Claudia Drăniceanu", "Alexa", "Gabi Vădeanu", "Antonia Ștefan", 
        "Maria Cristea", "Șerbeski", "SexyBeLike", "Silvia", "Maya Ulkusal", "Iasmina", "Sonia",
        "Lexa", "Banciu"
    ];

    const celebrityNames = [
        "Brad Pitt", "Angelina Jolie", "Tom Cruise", "Jennifer Aniston",
        "Leonardo DiCaprio", "Dwayne Johnson", "Beyoncé", "Taylor Swift",
        "Cristiano Ronaldo", "Lionel Messi", "Emma Watson", "Robert Downey Jr.",
        "Scarlett Johansson", "Chris Hemsworth", "Selena Gomez", "Ariana Grande",
        "Justin Bieber", "Kim Kardashian", "Kanye West", "Drake",
        "Billie Eilish", "The Rock", "Kevin Hart", "Ryan Reynolds",
        "Johnny Depp", "Will Smith", "Margot Robbie", "Gal Gadot",
        "Gheorghe Hagi", "Inna", "Simona Halep", "Edward Maya"
    ];

    // DOM elements
    const mainPage = document.getElementById('main-page');
    const fmkPage = document.getElementById('fmk-page');
    const wwycPage = document.getElementById('wwyc-page');
    const fmkNamesDiv = document.getElementById('fmk-names');
    const wwycNamesDiv = document.getElementById('wwyc-names');

    // Game state
    let currentGame = null;
    let currentGender = null;
    let currentNamesArray = [];
    let usedNames = new Set();

    // Main page buttons
    document.getElementById('fmk-button').addEventListener('click', function () {
        currentGame = 'fmk';
        mainPage.style.display = 'none';
        showGenderSelection();
    });

    document.getElementById('wwyc-button').addEventListener('click', function () {
        currentGame = 'wwyc';
        mainPage.style.display = 'none';
        showGenderSelection();
    });

    // Gender selection page
    function showGenderSelection() {
        const genderPage = document.createElement('div');
        genderPage.className = 'gender-selection-page';
        genderPage.innerHTML = `
        <h2>Select Category</h2>
        <div class="button-row">
            <button id="men-button" class="gender-button">MEN</button>
            <button id="women-button" class="gender-button">WOMEN</button>
            <button id="mix-button" class="gender-button">MIXED</button>
            <button id="celeb-button" class="celeb-button">CELEBRITIES</button>
        </div>
        <button id="gender-back" class="back-button">Back to Main</button>
    `;

        document.body.appendChild(genderPage);

        // Gender selection buttons
        document.getElementById('men-button').addEventListener('click', function () {
            selectGender('men', menNames);
        });

        document.getElementById('women-button').addEventListener('click', function () {
            selectGender('women', womenNames);
        });

        document.getElementById('mix-button').addEventListener('click', function () {
            selectGender('mixed', [...menNames, ...womenNames]);
        });

        document.getElementById('celeb-button').addEventListener('click', function () {
            selectGender('celebrities', celebrityNames);
        });

        // Back button
        document.getElementById('gender-back').addEventListener('click', function () {
            genderPage.remove();
            mainPage.style.display = 'flex';
        });
    }

    function selectGender(gender, namesArray) {
        currentGender = gender;
        currentNamesArray = namesArray;
        usedNames.clear();

        document.querySelector('.gender-selection-page').remove();

        if (currentGame === 'fmk') {
            fmkPage.style.display = 'block';
            selectFmkNames();
        } else {
            wwycPage.style.display = 'block';
            selectWwycNames();
        }
    }

    function selectFmkNames() {
        const availableNames = currentNamesArray.filter(name => !usedNames.has(name));

        if (availableNames.length < 3) {
            alert("Not enough unique names available! Resetting...");
            usedNames.clear();
            return selectFmkNames();
        }

        const selectedNames = getRandomNames(availableNames, 3);
        fmkNamesDiv.innerHTML = selectedNames.join('<br>');
        selectedNames.forEach(name => usedNames.add(name));
    }

    function selectWwycNames() {
        const availableNames = currentNamesArray.filter(name => !usedNames.has(name));

        if (availableNames.length < 2) {
            alert("Not enough unique names available! Resetting...");
            usedNames.clear();
            return selectWwycNames();
        }

        const selectedNames = getRandomNames(availableNames, 2);
        wwycNamesDiv.innerHTML = selectedNames.join('<br>');
        selectedNames.forEach(name => usedNames.add(name));
    }

    function getRandomNames(namesArray, count) {
        const shuffled = [...namesArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Re-do buttons
    document.getElementById('fmk-redo').addEventListener('click', selectFmkNames);
    document.getElementById('wwyc-redo').addEventListener('click', selectWwycNames);

    // Back buttons
    document.getElementById('fmk-back').addEventListener('click', function () {
        fmkPage.style.display = 'none';
        mainPage.style.display = 'flex';
    });

    document.getElementById('wwyc-back').addEventListener('click', function () {
        wwycPage.style.display = 'none';
        mainPage.style.display = 'flex';
    });
});
