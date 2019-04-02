class Tasks {
    performTasks() {
        this.task1();
        this.task2();
        this.task3();
    }

    task1() {
        setTimeout(() => {
            console.log('task 1');
        }, 3000);
    }

    task2() {
        setTimeout(() => {
            console.log('task 2');
        }, 2000);
    }

    task3() {
        setTimeout(() => {
            console.log('task 3');
        }, 1000);
    }

}

const taskObject = new Tasks();
export default taskObject;