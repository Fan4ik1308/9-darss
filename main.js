const userPasword = +prompt("Parolingizni kiriting");
const userLogin = +prompt("Loginigizni kiriting"); 

const oquvchilar = [
    {
        ism: "Elbek",
        parol: 123,
        login: 321,
    },
    {
        ism: "Shukur",
        parol: 320,
        login: 300,
    },
    {
        ism: "Suxrob",
        parol: 310,
        login: 505,
    },
    {
        ism: "Onam",
        parol: 520,
        login: 456,
    }
];

let topildi = false;

if (userLogin === 0 || userPasword === 0) {
    console.log("Iltimos, login yoki parol kiriting!");
} else {
    for (let index = 0; index < oquvchilar.length; index++) {
        if (userPasword === oquvchilar[index].parol && userLogin === oquvchilar[index].login) {
            console.log("Xush kelibsiz, " + oquvchilar[index].ism);
            topildi = true;
            break; 
        }
    }

    if (!topildi) {
        console.log("Login yoki parol noto‘g‘ri!");
    }
}

