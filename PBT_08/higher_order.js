function pipe(...fns) {
    return value => fns.reduce((current, fn) => fn(current), value);
}

function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

async function retry(fn, maxAttempts = 3) {
    let attempt = 0;
    while (attempt < maxAttempts) {
        try {
            return await fn();
        } catch (error) {
            attempt += 1;
            if (attempt >= maxAttempts) {
                throw error;
            }
        }
    }
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => 'Kết quả: ' + x
);
console.log(process(5));

const expensiveCalc = memoize((n) => {
    console.log('Đang tính...');
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

const search = debounce((query) => {
    console.log('Searching:', query);
}, 500);
search('apple');
search('apple pie');

async function testRetry() {
    let count = 0;
    const unstable = async () => {
        count += 1;
        if (count < 3) throw new Error('Fail');
        return 'OK';
    };
    console.log(await retry(unstable, 3));
}

testRetry();
