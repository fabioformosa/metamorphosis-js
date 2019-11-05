const debugOpts = {
    enable: false,
    fn: console.log
}

class Logger{
   public log(msg: string){
        if(debugOpts.enable)
            debugOpts.fn(msg);
    }
}
const logger = new Logger();

export { debugOpts };
export {logger};