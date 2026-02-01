# Projects related to DOM

## Project Links
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solutions Code

## Project 1 :
```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```