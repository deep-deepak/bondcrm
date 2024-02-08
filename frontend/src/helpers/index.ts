import { OLD_SITE_BASE_URL } from "src/constants";

export const removeLastChar = (str: string, operatorChar: string = "", additionChar: string = "") => {
    if (typeof str === "string") {
        str = str.trim();
        for (let i = 0; i < str.length; i++) {
            const lastChar = str.charAt(str.length - 1);
            if (lastChar === operatorChar) {
                str = str.slice(0, -1);
            } else {
                break;
            }
        }
        str = `${str}${additionChar}`;
    }
    return str;
}

export const getYears = (start_year: number = 2018): number[] => {
    var currentYear = new Date().getFullYear();
    let years: number[] = [];
    for (let i = start_year; i <= currentYear; i++) {
        years.push(i);
    }
    return years;
}

export const getMonths = (): string[] => {
    return [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
}

export const numberFormat = (number: any = 0) => {
    if (typeof number !== "number") {
        if (typeof number === 'string') {
            number = parseFloat(number);
        } else {
            number = 0
        }
    }
    return parseFloat((number).toFixed(2)).toLocaleString('en-US')
}

export const numberFormatInShort = (number: any = 0, digit: number = 1) => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return number >= item.value;
    });
    return item ? (number / item.value).toFixed(digit).replace(rx, "$1") + item.symbol : "0";
}

export const oldBaseUrl = (url: string = "") => {
    let base_url = OLD_SITE_BASE_URL.trim();
    if (base_url.substring(-1) != "/") {
        base_url += '/';
    }

    url = typeof url === "string" ? url.trim() : "";
    if (url.substring(0, 1) === "/") {
        url = url.substring(1);
    }
    return `${base_url}${url}`;
}