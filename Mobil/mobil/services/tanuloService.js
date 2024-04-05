/*
* File: tanuloService.js
* Author: Németh Ottó
* Copyright: 2024, Németh Ottó
* Group: Szoft I/2-E
* Date: 2024-04-05
* Github: https://github.com/ottoburg17/
* Licenc: GNU GPL
*/




const host = 'http://localhost:8000/';
const endpoint = 'tanulok';

export async function lekerTanulok() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}