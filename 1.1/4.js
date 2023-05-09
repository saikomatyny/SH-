/*const fs = require('fs');

let CSV = fs.readFileSync("txt.txt", "utf8");*/

let CSV = '44.38,34.33,Алушта,31440,\n49.46,30.17,Біла Церква,200131,\n49.54,28.49,Бердичів,87575,#некоммент\n\n#\n46.49,36.58,#Бердянськ,121692,\n49.15,28.41,Вінниця,356665,\n#45.40,34.29,Джанкой,43343,\n\n# в этом файле три строки-коммента :)'

const CSV_to_good_text = function(CSV) {

    CSV = CSV.split('\n');
    CSV.forEach(i => { try { CSV[CSV.indexOf(i)] = i.slice(0, i.indexOf('#')); } catch(e){};}); /* replacing all string-comments with '' */
    const check = /^\-?\d{2,3}\.\-?\d{2,3},\-?\d{2,3}\.\-?\d{2,3},[А-Яа-яі(\s)?]{3,25},\d{3,10},?$/; /* making regexp for validation CSV text */ 

    CSV = CSV.filter(line_to_parse => check.test(line_to_parse));   /* validating CSV text */

    const keys = ['x', 'y', 'name', 'population'];
    let parsed_maps = []; 
    
    CSV.forEach(i => parsed_maps.push(Object.fromEntries(keys.map((key, index) => [key, isFinite(i.split(',')[index]) ? parseFloat(i.split(',')[index]) : i.split(',')[index]])))); /* making associate array that contains associate arrays with all data */
    
    parsed_maps.sort((a,b) => b.population - a.population) /* sorting by popultaion */
    
    parsed_maps = parsed_maps.slice(0, 10); /* top 10 cities */
    
    const map_objects = parsed_maps.reduce((accumulator, currentValue, counter) => { accumulator[currentValue.name] = {'population': currentValue.population, 'rating': counter + 1};
        return accumulator;}, {}); /* making associate arrays that contains info about cities */

    const lambda_function = function(map_objects) { /* function that replacing names of the cities to format `название города (Х место в ТОП-10 самых крупных городов Украины, население УУУУУУ человек)` */
        let text_to_parse = prompt('type smth');
        const keys = Object.keys(map_objects);
        const values = Object.values(map_objects);
        keys.forEach(city => text_to_parse = text_to_parse.replace(city, `${city} (${values[keys.indexOf(city)].rating} место в ТОП-10 самых крупных городов Украины, население ${values[keys.indexOf(city)].population} человек)`));
        return text_to_parse;
    };
    
    return lambda_function(map_objects);
};

console.log(CSV_to_good_text(CSV));
// Вінниця -- столиця де народився папіч