/**
 * Created by vagrant on 3/6/17.
 */


// say ("Hello!");

function exec(func, arg) {
    func(arg);
}

exec((something) => {
    console.log(something);
}, 'Greetings, everyone');