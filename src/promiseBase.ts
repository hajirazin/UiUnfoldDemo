export default class PrimiseBase {
    task1() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('task 1');
                resolve();
            }, 3000);
        });
    }

    task2() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('task 2');
                resolve();
            }, 2000);
        });
    }

    task3() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('task 3');
                resolve();
            }, 1000);
        });
    }
}