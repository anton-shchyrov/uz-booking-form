// ==UserScript==
// @name         UZ Booking form
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://booking.uz.gov.ua/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('load');
    const data = [{
        firstName: "Иван",
        lastName: "Петров",
        services: {
            bedding: true,
            tea: false,
            doubleTea: false
        },
    }, {
        firstName: "Иван",
        lastName: "Петров",
        services: {
            bedding: true,
            tea: false,
            doubleTea: false
        },
    }, {
        firstName: "Иван",
        lastName: "Петров",
        services: {
            bedding: true,
            tea: false,
            doubleTea: false
        },
    }, {
        firstName: "Иван",
        lastName: "Петров",
        services: {
            bedding: true,
            tea: false,
            doubleTea: false
        },
    }, {
        firstName: "Иван",
        lastName: "Петров",
        services: {
            bedding: true,
            tea: false,
            doubleTea: false
        },
    }, {
        firstName: "Иван",
        lastName: "Петров",
        services: {
            bedding: true,
            tea: false,
            doubleTea: false
        },
    }, {
        firstName: "Иван",
        lastName: "Петров",
        services: {
            bedding: true,
            tea: false,
            doubleTea: false
        },
    }, {
        firstName: "Иван",
        lastName: "Петров",
        services: {
            bedding: true,
            tea: false,
            doubleTea: false
        },
    }];

    function setCheckBox(el, val) {
        if (el)
            el.checked = val;
    }

    document.addEventListener("dblclick", function() {
        console.log('dblclick');
        const forms = document.querySelectorAll(".place-item");
        console.log("Forms count: " + forms.length);
        for (let i = 0; i < forms.length; i++) {
            const form = forms[i];
            form.querySelector("input[name='lastname']").value = data[i].lastName;
            form.querySelector("input[name='firstname']").value = data[i].firstName;
            setCheckBox(form.querySelector("input[name='bedding']"), data[i].services.bedding);
            setCheckBox(form.querySelector("input[name='services'][value='Н']"), data[i].services.tea);
            setCheckBox(form.querySelector("input[name='services'][value='М']"), data[i].services.doubleTea);
        }
    });
})();
