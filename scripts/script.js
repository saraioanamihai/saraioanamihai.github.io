document.addEventListener('DOMContentLoaded', function() {
    const menNames = ["Fabi",
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
        "Mihnea Ioachim"]; // Array for men's names
    const womenNames = ["Julia", "Lissric"]; // Array for women's names

    const mainPage = document.getElementById('main-page');
    const fmkPage = document.getElementById('fmk-page');
    const wwycPage = document.getElementById('wwyc-page');

    const fmkNamesDiv = document.getElementById('fmk-names');
    const wwycNamesDiv = document.getElementById('wwyc-names');

    let currentGame = null;

    document.getElementById('fmk-button').addEventListener('click', function() {
        currentGame = 'fmk';
        mainPage.style.display = 'none';
        showGenderSelection();
    });

    document.getElementById('wwyc-button').addEventListener('click', function() {
        currentGame = 'wwyc';
        mainPage.style.display = 'none';
        showGenderSelection();
    });

    function showGenderSelection() {
        const genderPage = document.createElement('div');
        genderPage.innerHTML = `
            <button id="men-button">Men</button>
            <button id="women-button">Women</button>
            <button id="mix-button">Mix</button>
            <button id="gender-back">Back to Main</button>
        `;
        document.body.appendChild(genderPage);

        document.getElementById('men-button').addEventListener('click', function() {
            selectNames(menNames);
            genderPage.remove();
        });

        document.getElementById('women-button').addEventListener('click', function() {
            selectNames(womenNames);
            genderPage.remove();
        });

        document.getElementById('mix-button').addEventListener('click', function() {
            selectNames([...menNames, ...womenNames]);
            genderPage.remove();
        });

        document.getElementById('gender-back').addEventListener('click', function() {
            genderPage.remove();
            mainPage.style.display = 'block';
        });
    }

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
        const selectedNames = getRandomNames(namesArray, 3);
        fmkNamesDiv.innerHTML = selectedNames.join('<br>');
    }

    function selectWwycNames(namesArray) {
        const selectedNames = getRandomNames(namesArray, 2);
        wwycNamesDiv.innerHTML = selectedNames.join('<br>');
    }

    function getRandomNames(namesArray, count) {
        const shuffled = namesArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    document.getElementById('fmk-redo').addEventListener('click', function() {
        selectFmkNames([...menNames, ...womenNames]); // Default to mix for re-do
    });

    document.getElementById('wwyc-redo').addEventListener('click', function() {
        selectWwycNames([...menNames, ...womenNames]); // Default to mix for re-do
    });

    document.getElementById('fmk-back').addEventListener('click', function() {
        fmkPage.style.display = 'none';
        mainPage.style.display = 'block';
    });

    document.getElementById('wwyc-back').addEventListener('click', function() {
        wwycPage.style.display = 'none';
        mainPage.style.display = 'block';
    });
});
