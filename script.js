const Author = {
    authorid: 1,
    name: "ตราม้า",
    Address: {
        house_no: 12/175,
        street: "bang-bo",
        county: "thailand",
        Postcode: 11000,
    },
    url: "www.1234.com"
}

console.log(Author.authorid);
console.log(Author.name);
console.log(Author.Address);
console.log(Author.Address.house_no);
console.log(Author.Address.street);
console.log(Author.Address.county);
console.log(Author.Address.Postcode);
console.log(Author.url);