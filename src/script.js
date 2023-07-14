import scientistTpl from "./templates/scientist.handlebars";
const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
        id: 1,
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
        id: 2,
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff/lossy-page1-1200px-Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff.jpg",
        id: 3,
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1200px-Marie_Curie_c._1920s.jpg",
        id: 4,
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        image: "https://www2.hao.ucar.edu/sites/default/files/styles/extra_large/public/2022-01/JohannesKepler.jpg?itok=cqPdYQBW",
        id: 5,
    }, 
    { 
        name: "Nikolaus", 
        surname: "Copernikus", 
        born: 1473, 
        dead: 1543, 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nikolaus_Kopernikus.jpg/220px-Nikolaus_Kopernikus.jpg",
        id: 6,
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        image: "https://cdn.britannica.com/73/20973-050-F6EEBFF1/Max-Planck.jpg",
        id: 7,
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        image: "https://www.invent.org/sites/default/files/styles/inductee_detail_media/public/inductees/319-master_1.jpg?h=c691378b&itok=CS8AMxkq",
        id: 8,
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        image: "https://cdn.britannica.com/31/187431-050-117E094C/Ada-Lovelace.jpg",
        id: 9,
    }, 
    { 
        name: "Sarah", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Sarah_Goode_t580.png",
        id: 10,
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        image: "https://www.mpg.de/11718399/original-1510317741.jpg?t=eyJ3aWR0aCI6MzQxLCJmaWxlX2V4dGVuc2lvbiI6ImpwZyIsIm9ial9pZCI6MTE3MTgzOTl9--5a0c23bedd699cd5ccb8fd7022346c8b95724e8d",
        id: 11,
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        image: "https://tree-portraits-pgp.familysearchcdn.org/xo81/thumb200s.jpg",
        id: 12,
    } 
];

const listEl = document.querySelector(".scientists-list");

listEl.innerHTML = scientistTpl(scientists);