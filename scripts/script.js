document.addEventListener('DOMContentLoaded', function () {
    // Load names from localStorage or initialize empty arrays
    let menNames = JSON.parse(localStorage.getItem('menNames')) || ["Fabi",
        "Maiu",
        "Neagoe",
        "Alec",
        "Robert Marinescu",
        "Dante",
        "Stângă",
        "Gabi Alexandrescu",
        "Tudi",
        "Alex Trandafir",
        "Paul Box",
        "Alioșa",
        "Alex Panait",
        "Gabi Buzescu",
        "Vlad Popa",
        "Cristi Radu",
        "Silvestru",
        "Sebi Iacob",
        "Yeti",
        "Bogdan Gătitu",
        "Andrei Neacșu",
        "Floco",
        "Marin",
        "Răzvan Gheorghe",
        "Dragoș Stănciulescu",
        "Theo Duca",
        "Radu Cucoaneș",
        "Dănilă",
        "Sahim",
        "Alex Roma",
        "Abdallah",
        "Piti",
        "Soke",
        "David Pentelei",
        "Gabi Buzescu",
        "Voicu",
        "Dorde",
        "Puiu",
        "Ivă",
        "Matei Lascu",
        "Pascu",
        "Rareș Roșu",
        "Raul Răduță",
        "Jumi",
        "Bădici",
        "Debu",
        "Caragea",
        "Andu",
        "Dragoș Viuleț",
        "Tavi",
        "Cosmin Carșote",
        "Mihai Lidl",
        "Dochianu",
        "Profira",
        "Sima",
        "Simi",
        "Vîlcu",
        "Mandu",
        "Țăranu",
        "Iustin",
        "George Stoian",
        "Păduraru",
        "fratele lu Păduraru",
        "Zamfi",
        "Vini",
        "Luca Hara",
        "Șerban",
        "Mihnea Tomescu",
        "Robi Chinezu",
        "Alex Voicu",
        "Cozadin",
        "Mihnea Iancu",
        "Nejloveanu",
        "Papote",
        "Alin Tihnea",
        "Alin Ionescu",
        "Luca Tatomir",
        "Lucan",
        "Mihnea",
        "Sarafoleanu",
        "Tudor Mavrodin",
        "Andrei Mavrodin",
        "Andrei Toader",
        "Alex Toader",
        "Iulian Lisnic",
        "Alex Morcov",
        "Răzvan Gogan",
        "Baboi",
        "Mihnea Ioachim"];
    let womenNames = JSON.parse(localStorage.getItem('womenNames')) || ["Mara",
        "Patri",
        "Soranna",
        "Ana Uceanu",
        "Paola",
        "Anca Dobre",
        "Eva",
        "Sabina",
        "Carla",
        "Claudia",
        "Maria Lăzărescu",
        "Maria Magheru",
        "Alexia Gabriela",
        "Flavia",
        "Maria Tănase",
        "Teo Tomescu",
        "Iorga",
        "Răcaru",
        "Andreea Bak",
        "Anda Criț",
        "Arina",
        "Cozmina",
        "Rahela",
        "Kritikoasa",
        "Ioana CB",
        "Roberta",
        "Ana Mitrofan",
        "Ana Ivășchescu",
        "Brighi",
        "Pui",
        "Ioana Floco",
        "Maria Iftemie",
        "Karina",
        "Alexandra Mandu",
        "Ioana Profira",
        "Lili",
        "Irina Benchescu",
        "Terez"];

    const mainPage = document.getElementById('main-page');
    const fmkPage = document.getElementById('fmk-page');
    const wwycPage = document.getElementById('wwyc-page');
    const addNamePage = document.getElementById('add-name-page');

    const fmkNamesDiv = document.getElementById('fmk-names');
    const wwycNamesDiv = document.getElementById('wwyc-names');
    const newNameInput = document.getElementById('new-name');

    let currentGame = null;

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

    document.getElementById('add-name-button').addEventListener('click', function () {
        mainPage.style.display = 'none';
        addNamePage.style.display = 'block';
    });

    // Add name page buttons
    document.getElementById('add-men').addEventListener('click', function () {
        const name = newNameInput.value.trim();
        if (name) {
            menNames.push(name);
            localStorage.setItem('menNames', JSON.stringify(menNames)); // Save to localStorage
            newNameInput.value = ''; // Clear the input field
            alert(`Added "${name}" to Men.`);
        }
    });

    document.getElementById('add-women').addEventListener('click', function () {
        const name = newNameInput.value.trim();
        if (name) {
            womenNames.push(name);
            localStorage.setItem('womenNames', JSON.stringify(womenNames)); // Save to localStorage
            newNameInput.value = ''; // Clear the input field
            alert(`Added "${name}" to Women.`);
        }
    });

    document.getElementById('add-name-back').addEventListener('click', function () {
        addNamePage.style.display = 'none';
        mainPage.style.display = 'block';
    });

    // Gender selection page
    function showGenderSelection() {
        const genderPage = document.createElement('div');
        genderPage.className = 'gender-selection-page';

        const buttonRow = document.createElement('div');
        buttonRow.className = 'button-row';
        buttonRow.innerHTML = `
            <button id="men-button">MEN</button>
            <button id="women-button">WOMEN</button>
            <button id="mix-button">MIXED</button>
        `;

        const backButton = document.createElement('button');
        backButton.id = 'gender-back';
        backButton.textContent = 'Back to Main';

        genderPage.appendChild(buttonRow);
        genderPage.appendChild(backButton);
        document.body.appendChild(genderPage);

        // Gender selection buttons
        document.getElementById('men-button').addEventListener('click', function () {
            selectNames(menNames);
            genderPage.remove();
        });

        document.getElementById('women-button').addEventListener('click', function () {
            selectNames(womenNames);
            genderPage.remove();
        });

        document.getElementById('mix-button').addEventListener('click', function () {
            selectNames([...menNames, ...womenNames]);
            genderPage.remove();
        });

        // Back to main button
        backButton.addEventListener('click', function () {
            genderPage.remove();
            mainPage.style.display = 'block';
        });
    }

    // Select names for the game
    function selectNames(namesArray) {
        if (currentGame === 'fmk') {
            fmkPage.style.display = 'block';
            selectFmkNames(namesArray);
        } else if (currentGame === 'wwyc') {
            wwycPage.style.display = 'block';
            selectWwycNames(namesArray);
        }
    }

    function selectFmkNames(namesArray) {
        const selectedNames = getRandomNames(namesArray, 3); // Pull 3 names for FMK
        fmkNamesDiv.innerHTML = selectedNames.join('<br>');
    }

    function selectWwycNames(namesArray) {
        const selectedNames = getRandomNames(namesArray, 2); // Pull 2 names for WWYC
        wwycNamesDiv.innerHTML = selectedNames.join('<br>');
    }

    function getRandomNames(namesArray, count) {
        const shuffled = namesArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Re-do buttons
    document.getElementById('fmk-redo').addEventListener('click', function () {
        selectFmkNames([...menNames, ...womenNames]);
    });

    document.getElementById('wwyc-redo').addEventListener('click', function () {
        selectWwycNames([...menNames, ...womenNames]);
    });

    // Back buttons
    document.getElementById('fmk-back').addEventListener('click', function () {
        fmkPage.style.display = 'none';
        mainPage.style.display = 'block';
    });

    document.getElementById('wwyc-back').addEventListener('click', function () {
        wwycPage.style.display = 'none';
        mainPage.style.display = 'block';
    });
});
