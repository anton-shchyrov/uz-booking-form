// ==UserScript==
// @name         UZ Booking form
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://booking.uz.gov.ua/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const data = [{
        firstName: "Name1",
        lastName: "LastName1",
        services: {
            bedding: true,
            tea: true,
            doubleTea: false
        },
    }, {
        firstName: "Name2",
        lastName: "LastName2",
        services: {
            bedding: true,
            tea: true,
            doubleTea: false
        },
    }, {
        firstName: "Name3",
        lastName: "LastName3",
        services: {
            bedding: true,
            tea: true,
            doubleTea: false
        },
    }];
    document.addEventListener("dblclick", function() {
        const forms = document.querySelectorAll(".place-item");
        console.log("Forms count: " + forms.length);
        const count = Math.min(forms.length, data.length)l
        for (let i = 0; i < count; i++) {
            const form = forms[i];
            form.querySelector("input[name='lastname']").value = data[i].lastName;
            form.querySelector("input[name='firstname']").value = data[i].firstName;
            form.querySelector("input[name='bedding']").checked = data[i].services.bedding;
            form.querySelector("input[name='services'][value='Н']").checked = data[i].services.tea;
            form.querySelector("input[name='services'][value='М']").checked = data[i].services.doubleTea;
        }
    });
})();