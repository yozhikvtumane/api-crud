"use strict";
{

    document.getElementById('home').addEventListener('click', showHome);
    document.getElementById('closeFlyout').addEventListener('click', closeFlyout);
    document.getElementById('register').addEventListener('click', showRegister);
    document.getElementById('search').addEventListener('click', showSearch);
    function closeFlyout() {
        document.getElementById('flyoutLevelOne').style.display='none';
        document.getElementById('flyoutLevelTwo').style.display='none';
    }

    function showHome() {
        document.getElementById('flyoutLevelOne').classList.toggle('displayFlex');
        document.getElementById('flyoutLevelTwo').classList.toggle('displayBlock');
        document.getElementById('homeContent').classList.toggle('displayBlock');
    }

    function showRegister () {
        document.getElementById('flyoutLevelOne').classList.toggle('displayFlex');
        document.getElementById('flyoutLevelTwo').classList.toggle('displayBlock');
        document.getElementById('registerContent').classList.toggle('displayBlock');
    }
    function showSearch(){
        document.getElementById('flyoutLevelOne').classList.toggle('displayFlex');
        document.getElementById('flyoutLevelTwo').classList.toggle('displayBlock');
        document.getElementById('searchContent').classList.toggle('displayBlock');
    }







}