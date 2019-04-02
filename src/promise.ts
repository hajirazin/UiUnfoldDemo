import PromiseBase from './promiseBase';

class Tasks extends PromiseBase {
    performTasks() {
        this.task1()
            .then(this.task2)
            .then(this.task3);
    }
}

const taskObject = new Tasks();
export default taskObject;