const debug = {
    enable: false
}

class Logger{
   public log(msg: string){
        if(debug.enable)
            console.log(msg);
    }
}
const logger = new Logger();

export { debug };
export {logger};