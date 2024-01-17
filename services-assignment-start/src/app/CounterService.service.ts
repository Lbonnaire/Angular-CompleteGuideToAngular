export class CounterService{
    activeUserCount:number;
    inactiveUserCount:number;
    
    addActiveCount(){
        this.activeUserCount++;
        this.inactiveUserCount--;

        console.log("Active users: "+ this.activeUserCount);
        console.log("Inactive users: "+ this.inactiveUserCount);
    }

    setActiveUserCount(count:number){
        this.activeUserCount=count;
    }

    setInactiveUserCount(count:number){
        this.inactiveUserCount=count;
    }


    addInactiveCount(){
        this.inactiveUserCount++;
        this.activeUserCount--;

        console.log("Active users: "+ this.activeUserCount);
        console.log("Inactive users: "+ this.inactiveUserCount);
    }
}