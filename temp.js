/**
 * Created by vagrant on 3/6/17.
 */
function say (something) {
    console.log(something);
}

// say ("Hello!");

function exec(func, arg) {
    func(arg);
}

exec(say, 'Hi, there');