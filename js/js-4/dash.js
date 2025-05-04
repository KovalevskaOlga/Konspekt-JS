const arr = [1,2,3,4,5,6,7,8];
console.dir(_.drop(arr, 2 ));
// вирізає елементи з масиву, після коми вказана кількість елементів яка буде вирізана.

console.dir(_.chunk(arr, 2))
// поділяє на підмасиви, задана цифра каже скільки елементів буде в дному масиві.


function Foo() {
    this.name = 'mark';
}

const object = {
    name: 'olha',
}

const object2 = {
    name: 'tima',
}

const asssign = _.assign(object, Foo);
console.log(asssign)
// змінили значення об'єкта за допомогою функції, крінж



const  boxHello = document.querySelector('.box-hello');

let mouseCount = 0
boxHello.addEventListener('mousemove', _.throttle((event) => {
    mouseCount += 1
    console.log(mouseCount)
}, 200)
);

boxHello.addEventListener('mousemove', _.debounce((event) => {
    mouseCount += 1
    console.log(mouseCount)
}, 500)
);

// Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли користувач рухає мишкою, змінюються координати точки на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для того, щоб координати оновлювалися не занадто часто та не затримували користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс, і передайте функцію, яка буде виконуватися при русі миші.
const block = document.querySelector('.block');
block.addEventListener('mousemove', _.throttle((event) => {
    console.log(event)
    block.style.right = event.clientX + 'px'
    block.style.top = event.clientY + 'px'
}, 50)
)
