> # Tesodev Frontend Developer Challange
</br>

# Getting started
## Installation 
---
> ### Clone the repository
	https://github.com/musayazlik/tesodev-fe-change.git

> ### Switch to the repo folder
	cd tesodev-fe-change

> ### Run the following two commands in order. Use separate terminals for `npm run db` and `npm run start`.
	npm install
	npm run db
	npm run start

Our project will now be running at `localhost:3000`.

> The sample json data given is rearranged using the following coding.

``` javascript

let current = {
    "cols": [
      "NameSurname",
      "Company",
      "Email",
      "Date",
      "Country",
      "City"
    ],
    "data": [
      [
        "Hyacinth Vincent",
        "Duis Corporation",
        "iaculis.enim@magnaCrasconvallis.ca",
        "28/06/2022",
        "Eritrea",
        "Lyubertsy"
      ],
      [
        "Candace Mccall",
        "Sed Dui Fusce Associates",
        "Nam.tempor@arcu.ca",
        "29/06/2022",
        "Denmark",
        "Pathankot"
      ]
    ]
  };


let cols = current.cols;

current.data.forEach((e, index) => {
    var res = {};

    e.forEach((x, index) => {
        res[cols[index]] = x;
    })

    current.data[index] = res;
})

console.log(current.data);

```


