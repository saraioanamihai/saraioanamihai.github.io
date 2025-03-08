document.addEventListener('DOMContentLoaded', function () {
    const names = ["Fabi",
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
        "Iulian Lisnic"]; // Names array

    const mainPage = document.getElementById('main-page');
    const fmkPage = document.getElementById('fmk-page');
    const wwycPage = document.getElementById('wwyc-page');

    const fmkNamesDiv = document.getElementById('fmk-names');
    const wwycNamesDiv = document.getElementById('wwyc-names');

    document.getElementById('fmk-button').addEventListener('click', function () {
        mainPage.style.display = 'none';
        fmkPage.style.display = 'block';
        selectFmkNames();
    });

    document.getElementById('wwyc-button').addEventListener('click', function () {
        mainPage.style.display = 'none';
        wwycPage.style.display = 'block';
        selectWwycNames();
    });

    document.getElementById('fmk-redo').addEventListener('click', selectFmkNames);
    document.getElementById('wwyc-redo').addEventListener('click', selectWwycNames);

    document.getElementById('fmk-back').addEventListener('click', function () {
        fmkPage.style.display = 'none';
        mainPage.style.display = 'block';
    });

    document.getElementById('wwyc-back').addEventListener('click', function () {
        wwycPage.style.display = 'none';
        mainPage.style.display = 'block';
    });

    function selectFmkNames() {
        const selectedNames = getRandomNames(3);
        fmkNamesDiv.innerHTML = selectedNames.join('<br>');
    }

    function selectWwycNames() {
        const selectedNames = getRandomNames(2);
        wwycNamesDiv.innerHTML = selectedNames.join('<br>');
    }

    function getRandomNames(count) {
        const shuffled = names.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
});