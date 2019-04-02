import PromiseBase from './promiseBase';

class Tasks extends PromiseBase {
    async performTasks() {
        await this.task1();
        await this.task2();
        await this.task3();
    }
}

const taskObject = new Tasks();
export default taskObject;