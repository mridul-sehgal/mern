const name="Mridul"
const repoCount=15

// string contatenation (this way is obsolete)
console.log("Hello my name is "+ name+ ". I have "+repoCount+" repos on my github");

// string interpolation (better way)
console.log(`Hello my name is ${name}. I have ${repoCount} repos on my github`);

// another way of declaring string

const gameName = new String('Valorant')

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'))

const string1=gameName.substring(0,4);
console.log(string1);

const string2=gameName.slice(-6,4 );
console.log(string2);

const string3="    hello       "
console.log(string3)
console.log(string3.trim());

const string4 = "https://mridul_sehgal.com/mridul%20sehgal";
console.log(string4.replace('%20','-'));
console.log(string4.includes('sehgal'));

const string5="hello_world_this_is_js"
console.log(string5.split('_'));
